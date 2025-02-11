import { Router } from "express";
import * as userMiddlewares from '../middlewares/user.middleware.js'
import * as userController from './../controllers/user.controller.js';
const route = Router();


export const userRoute = () => {

    route.get('/welcome', (req, res) => { res.send('hello') });
    route.post('/register', userMiddlewares.register, userController.register);
    route.post('/login', userMiddlewares.login, userController.login);
    return route;
}