import express from "express"
import { userRoute } from "./user.route.js";


const routes = express.Router();

const router = () => {
    routes.get('/welcome', (req, res) => {
        res.send('hello');
    })
    routes.use('/user', userRoute());

    return routes;
}

export default router;