import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstName: { type: String, require: true },
    lastName: { type: String, require: true },
    mobile: { type: Number, require: true },
    email: String,
    password: { type: String, require: true }
})

export const user = mongoose.model('user', userSchema);