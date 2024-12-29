export type Task = {
    _id: string;
    title: string;
    description : string;
    deadline: Date;
    status: string;
}

export type AuthFormData = {
    email: string
    username: string
    password: string
    confirmPassword: string
}