import mongoose from "mongoose";
import "dotenv/config";

export const connectMongoDb = async () => {
  try {
    await mongoose.connect(`${process.env.CONNECTION_STRING}MovieDataBase`);
    console.log("MongoDB connected");
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
};
