import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://Himani:taskflow62@cluster0.inwx6gl.mongodb.net/Taskflow').then(() => console.log('DB CONNECTED'));
}