import mongoose from "mongoose"


export const DBconnect = async()=>{
    try{
        await mongoose.connect(`${process.env.DB_URL}`);
        console.log("Database connected successfully.")
    }
    catch(error){
        console.log("Failed to connect with Database");
        console.error(error);
    }
}