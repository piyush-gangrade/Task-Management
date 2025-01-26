import dotenv from "dotenv"
dotenv.config();

export const configKeys = {
    DB_URL: process.env.DB_URL,

    PORT: process.env.PORT,

    CORS_ORIGIN: process.env.CORS_ORIGIN,

    BCRYPT_SALT_ROUNDS: process.env.BCRYPT_SALT_ROUNDS as string,

    ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET as string,

    REFRESH_TOKEN_SECRET: process.env.REFRESH_TOKEN_SECRET as string,
}