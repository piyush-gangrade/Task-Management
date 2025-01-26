import express, { Request, Response } from "express";
import cors from "cors";
import { DBconnect } from "./db";
import taskRouter from "./routers/task.router";
import { configKeys } from "./config";
import errorHandler from "./middleware/errorHandler";

const app = express();
const PORT = configKeys.PORT || 3000;

app.use(express.json());

app.use(cors({
        origin: configKeys.CORS_ORIGIN,
        credentials: true
    
}))

app.use("/tasks", taskRouter);

app.use(errorHandler);

DBconnect()
.then(()=>{
    app.listen(PORT, ()=>{
        console.log(`Server running on port: ${PORT}`);
    })
})
