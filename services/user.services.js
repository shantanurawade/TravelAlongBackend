import { userModel } from "../models/user.model.js";
import bcrypt from 'bcrypt'

export const login = async (credentials) => {
    const { email, password } = credentials;
    const user = await userModel.findOne({ email });
    if (!user) return -1;
    const auth = await bcrypt.compare(password, user.password);
    if (auth) return 1;
    else return 0;

}
export const registerUser = async (user) => {
    const existing = await userModel.findOne({ email: user.email });

    if (existing) return 0;

    const encryptedPassword = await bcrypt.hash(user.password, 16);

    try {
        await userModel.create({
            firstName: user.firstName,
            lastName: user.lastName,
            password: encryptedPassword,
            email: user.email,
            mobile: user.mobile
        })

        return 1;
    } catch { return -1; }

}