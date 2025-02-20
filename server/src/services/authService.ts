import jwt, { JwtPayload } from "jsonwebtoken";
import bcrypt, { compare } from "bcrypt";
import { configKeys } from "../config";

export const authService = {
    hashedPassword: (password: string): Promise<string> => {
        return bcrypt.hash(password, 10);
    },

    comparePassword: (password: string, hashedPassword:string): Promise<boolean> => {
        return bcrypt.compare(password, hashedPassword);
    },

    generateAccessAndRefreshTokens: (payload: JwtPayload): {accessToken: string, refreshToken: string}=>{
        const accessToken = jwt.sign( payload , configKeys.ACCESS_TOKEN_SECRET, {expiresIn: "1d"});
        const refreshToken = jwt.sign( payload , configKeys.REFRESH_TOKEN_SECRET, {expiresIn: "4d"});

        return {accessToken, refreshToken}
    },

    verifyAccessToken: (token: string): JwtPayload | string =>{
        return jwt.verify(token, configKeys.ACCESS_TOKEN_SECRET)
    },

    verifyRefreshToken: (token: string): JwtPayload | string => {
        return jwt.verify(token, configKeys.REFRESH_TOKEN_SECRET)
    }
}

