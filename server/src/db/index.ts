import mongoose from "mongoose";
import { configKeys } from "../config";


export const DBconnect = async()=>{
    try{
        await mongoose.connect(`${configKeys.DB_URL}`);
        console.log("Database connected successfully.")
    }
    catch(error){
        console.log("Failed to connect with Database");
        console.error(error);
    }
}