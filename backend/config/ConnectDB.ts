import mongoose from "mongoose";
import dotenv from 'dotenv'
import "colors"
dotenv.config()

const mongoURL: string = process.env.MONGO_URL_ATLAS as string

export const ConnectDB = async () => {
   try {
      const connection = await mongoose.connect(mongoURL);
      console.log(`Databse Connected on ${connection.connection.host}`.bgGreen.white)
   } catch (error) {
      console.log(`Databse not Connected`.bgRed.white, error)
      process.exit(1);
   }
}