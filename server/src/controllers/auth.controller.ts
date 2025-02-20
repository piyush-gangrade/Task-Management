import { Request, response, Response } from "express"
import asyncHandler from "express-async-handler"
import AppError from "../utils/AppError";
import { User } from "../models/user.model";
import { authService } from "../services/authService";


const registre = asyncHandler(async(req: Request, res: Response)=>{
    const {username, email, password} = req.body;
    if(!username || !email || !password){
        throw new AppError(404, "username, email or password is not exist.");
    }

    const existUser = await User.findOne({
        $or: [{username}, [email]]
    });
    if(existUser){
        throw new AppError(409, "user already exist.")
    }

    const hashPassword = await authService.hashedPassword(password);
    const user = new User({
        username: username,
        email: email,
        password: hashPassword,
    })

    const {accessToken, refreshToken} = authService.generateAccessAndRefreshTokens({id: user._id, username});

    user.refreshToken = refreshToken;
    await user.save();
    res
        .status(201)
        .cookie("accessToken", accessToken)
        .cookie("refreshToken", refreshToken)
        .json({
            response: {id: user._id},
            message: "User created successfully",
            success: true
        })
    return;
})

const login = asyncHandler(async(req: Request, res: Response)=>{
    const {username, email, password} = req.body;
    if(!username && !email){
        throw new AppError(404, "username or email is required.");
    }

    if(!password){
        throw new AppError(404, "password is required.");
    }

    const user = await User.findOne({
        $or: [{username}, {email}]
    });
    if(!user){
        throw new AppError(409, "user is not exist.")
    }

    const {accessToken, refreshToken} = authService.generateAccessAndRefreshTokens({id: user._id, username: user.username});

    user.refreshToken = refreshToken;
    await user.save();
    res
        .status(201)
        .cookie("accessToken", accessToken)
        .cookie("refreshToken", refreshToken)
        .json({
            response: {id: user._id},
            message: "User login successfully",
            success: true
        })
    return;
})


export {
    registre,
    login
}