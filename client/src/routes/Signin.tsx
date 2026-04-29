import Navbar from "../components/Navbar";
import { Link } from "react-router";

const Signin = () => {

    return (
        <main className="bg-black text-white">
            {/* navbar */}
            <Navbar/>
            {/* Sign In form */}
            <section className="min-h-dvh flex justify-center items-start py-32  px-4 sm:px-8">
                <form className=" flex flex-col max-w-125 w-full p-10 gap-5 border border-gray-800 rounded-2xl">
                    <h1 className="text-2xl font-bowlby">Welcome Back</h1>
                    <p className=" text-xs text-gray-400">Sign in to your E-Store account</p>
                    <label htmlFor={'email'}>Email</label>
                    <input id="email" type="email" placeholder="Your Email"  className="p-2 bg-gray-800 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"/>
                    <label htmlFor={'password'}>Password</label>
                    <input id="password" type="password" placeholder="Your Password"  className="p-2 bg-gray-800 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"/>
                    <input type="submit" value={"Create Account"} className="p-2 bg-blue-400 text-black font-bowlby rounded-lg"/>
                    <p className=" text-xs text-gray-400 text-center">No account? <Link to={'/signup'} className="text-blue-400">Register here</Link></p>
                </form>
            </section>
        </main>
    )
}


export default Signin;