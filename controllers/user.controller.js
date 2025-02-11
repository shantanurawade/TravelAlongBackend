import { StatusCodes } from "http-status-codes";
import * as userServices from "../services/user.services.js";

export const login = async (req, res) => {
    const credentials = req.body;

    const status = await userServices.login(credentials);

    if (status == 1) res.status(StatusCodes.ACCEPTED).send({
        message: "Login successfull."
    })
    else if (status == 0) res.status(StatusCodes.UNAUTHORIZED).send({
        message: "Username/password is wrong."
    })
    else if (status == -1) res.status(StatusCodes.BAD_REQUEST).send({
        message: "Username not found try sign up."
    })
}

export const register = async (req, res) => {
    const user = req.body;
    const status = await userServices.registerUser(user);

    if (status == 0) res.send({
        "message": "User already exists try login."
    })
    else if (status == 1) {
        res.send({
            "message": "User created successfully."
        })
    } else res.send({
        "message": "Something went wrong, try again."
    })
}