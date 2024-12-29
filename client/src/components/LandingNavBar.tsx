import { Link } from "react-router-dom";

export default function LandingNavBar(){
    return (
        <nav className="px-8 py-4 flex justify-between shadow">
            <h1 className="text-xl font-semibold my-auto">
                <Link to="/">Tsxk</Link>
            </h1>
            <div className="flex gap-8">
                <Link to="login" className="px-4 py-2 bg-blue-400 text-white rounded-md">login</Link >
                <Link to="signup" className="px-4 py-2 bg-blue-400 text-white rounded-md">signup</Link >
            </div>
        </nav>
    )
}