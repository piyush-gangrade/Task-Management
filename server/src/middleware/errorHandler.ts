import { NextFunction, Request, Response } from "express";
import AppError from "../utils/AppError";

const errorHandler = (err: AppError, req:Request, res: Response, next: NextFunction)=>{
    console.log(err);
    res
    .status(err.statusCode)
    .json({
        respones: {message: err.message},
        message: err.message,
        success: err.success
    })
}

export default errorHandler;