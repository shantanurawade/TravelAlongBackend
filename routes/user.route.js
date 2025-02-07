import { Router } from "express";
import * as userController from './../controllers/user.controller.js';
const route = Router();


export const userRoute = () => {

    route.get('/welcome', (req, res) => { res.send('hello') });
    route.post('/register', userController.register);
    return route;
}