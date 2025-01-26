import express, { Request, Response } from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import { DBconnect } from "./db";
import taskRouter from "./routers/task.router";
dotenv.config();


const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(cors({
        origin: process.env.CORS_ORIGIN,
        credentials: true
    
}))

app.use("/tasks", taskRouter);

DBconnect()
.then(()=>{
    app.listen(PORT, ()=>{
        console.log(`Server running on port: ${PORT}`);
    })
})
