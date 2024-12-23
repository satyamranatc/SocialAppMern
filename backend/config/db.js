// Db Config:
import mongoose from "mongoose";
import "dotenv/config";

function connectDB() {
  mongoose.connect(process.env.MONGODB_URI).then(() => {
    console.log("Connected to MongoDB");
  });
}
export default connectDB;
