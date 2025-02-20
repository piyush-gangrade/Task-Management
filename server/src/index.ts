import express, { Request, Response } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { DBconnect } from "./db";
import taskRouter from "./routers/task.router";
import { configKeys } from "./config";
import errorHandler from "./middleware/errorHandler";
import authRouter from "./routers/auth.router";

const app = express();
const PORT = configKeys.PORT || 3000;

app.use(express.json());

app.use(cors({
        origin: configKeys.CORS_ORIGIN,
        credentials: true
}))

app.use(cookieParser());

app.use("/auth", authRouter);
app.use("/tasks", taskRouter);

app.use(errorHandler);

DBconnect()
.then(()=>{
    app.listen(PORT, ()=>{
        console.log(`Server running on port: ${PORT}`);
    })
})
