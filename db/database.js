import mongoose from "mongoose";

export const connectDb = () => mongoose.connect(`${process.env.MONGO_BASE_URL}/${process.env.DB_NAME}`).then(() => {
    console.log('=============================');
    console.log("Db connected successfully...");
});
