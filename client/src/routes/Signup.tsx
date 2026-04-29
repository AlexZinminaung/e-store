import { Link } from "react-router";
import Navbar from "../components/Navbar";


const Signup = () => {

    return (
        <main className="bg-black text-white">
            {/* navbar */}
            <Navbar/>
            {/* Sign In form */}
            <section className=" min-h-screen flex justify-center items-start py-24 px-4 sm:px-8">
                <form className=" flex flex-col max-w-125 w-full p-10 gap-5 border border-gray-800 rounded-2xl">
                    <h1 className="text-2xl font-bowlby">Create Account</h1>
                    <p className=" text-xs text-gray-400">Join thousands of happy e-store customers</p>
                    <label htmlFor={'username'}>Full Name</label>
                    <input id="username" type="text" placeholder="Your Name" className="p-2 bg-gray-800 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"/>
                    <label htmlFor={'email'}>Email</label>
                    <input id="email" type="email" placeholder="Your Email"  className="p-2 bg-gray-800 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"/>
                    <label htmlFor={'password'}>Password</label>
                    <input id="password" type="password" placeholder="Your Password"  className="p-2 bg-gray-800 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"/>
                    <input type="submit" value={"Create Account"} className="p-2 bg-blue-400 text-black font-bowlby rounded-lg"/>
                    <p className=" text-xs text-gray-400 text-center">Already have an account? <Link to={'/signin'} className="text-blue-400">Sign in</Link></p>
                </form>
            </section>
        </main>
    );
}


export default Signup;