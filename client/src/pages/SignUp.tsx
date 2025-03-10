import { useRef, useState } from "react";
import { AuthFormData } from "../types/Task";
import { Id, toast, ToastContainer, TypeOptions } from "react-toastify";
import { register } from "../api";
import { redirect } from "react-router-dom";

export default function SignUp(){
    const toastId = useRef<Id>("");

    const notify = (mes: string, type: TypeOptions) =>  {
        toastId.current = toast(mes, {
            type: type,
            autoClose: 3000
        })
    };   

    const terminalToast = ()=>{
        toast.update(toastId.current, {
            autoClose: 50
        })
    }

    const [formData, setFormData] = useState<AuthFormData>({
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        const value: string = e.target.value;
        setFormData({
            ...formData,
            [e.target.name] : value
        })
    }

    const handleSubmit = async(e:React.FormEvent)=>{
        e.preventDefault();
        if(formData.password !== formData.confirmPassword){
            terminalToast();
            notify("Confirm Password is not same as Password.", "error")
        }

        if(!formData.email.trim() || !formData.username.trim() || !formData.password){
            terminalToast();
            notify("Please enter valid username, email and password.", "error")
        }

        const userData = {
            username: formData.username,
            email: formData.email,
            password: formData.password
        }

        try{
            const res = await register(userData);
            if(!res.data || !res.data?.success){
                notify("Server is unavailable", "error");
                console.log(res);
                return;
            }
            const id = res.data?.response?.id;

            if(id){
                localStorage.setItem("id", id);
                redirect("/");
            }
        }
        catch(err){
            console.log(err);
            notify("Server is unavailable", "error");
        }
        return;
    };

    return (
        <>
            <ToastContainer />
            <h1 className="mt-40 mb-4 text-center text-2xl font-semibold">Welcome to <span className="text-blue-400">Tsxk</span></h1>
            <form className="mx-auto rounded-lg p-8 border-2 w-3/12 flex flex-col gap-4" onSubmit={handleSubmit}>
                <input type="email" name="email" id="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} className="border-2 px-2 py-1" required/>
                <input type="text" name="username" id="username" placeholder="Enter an username" value={formData.username} onChange={handleChange} className="border-2 px-2 py-1" required/>
                <input type="password" name="password" id="password" placeholder="Enter a password" value={formData.password} onChange={handleChange} className="border-2 px-2 py-1" required/>
                <input type="password" name="confirmPassword" id="confirmPassword" placeholder="Enter a confirm password" value={formData.confirmPassword} onChange={handleChange} className="border-2 px-2 py-1" required/>
                <button className="rounded-md bg-blue-400 px-4 py-2 text-white">Sign Up</button>
            </form>
        </>
    )
}