import { NextFunction, Request, Response } from "express";
import AppError from "../utils/AppError";

const errorHandler = (err: AppError, req:Request, res: Response, next: NextFunction)=>{
    res
    .status(err.statusCode)
    .json({
        message: err.message,
        success: err.success
    })
}

export default errorHandler;