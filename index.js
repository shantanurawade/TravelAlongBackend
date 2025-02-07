import express from 'express';
import router from './routes/index.js';
import dotenv from 'dotenv';
import { connectDb } from './db/database.js';



dotenv.config();
const app = express();

app.use(express.json());
connectDb().then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`Listening to port ${process.env.PORT}...`);
        console.log('=============================');
    })
})
app.use(process.env.API_VERSION, router());

app.get('/welcome', (req, res) => {
    res.send('hello good afternoon');
})
