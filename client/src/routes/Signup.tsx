import { useReducer } from "react";
import { Link } from "react-router";
import Navbar from "../components/Navbar";

type State = {
  name: string;
  email: string;
  password: string;
};

type Action =
  | { type: "change_name"; payload: string }
  | { type: "change_email"; payload: string }
  | { type: "change_password"; payload: string };


const initState: State = {name:'', email:'', password:''}

const reducer = (state: State, action: Action) => {
    switch (action.type) {
        case "change_name":
        return { ...state, name: action.payload };

        case "change_email":
        return { ...state, email: action.payload };

        case "change_password":
        return { ...state, password: action.payload };

        default:
        return state;
    }

}


const Signup = () => {
    const [state, dispatch] = useReducer(reducer, initState);

    // handler function
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        switch (name) {
        case "name":
            dispatch({ type: "change_name", payload: value });
            break;

        case "email":
            dispatch({ type: "change_email", payload: value });
            break;

        case "password":
            dispatch({ type: "change_password", payload: value });
            break;
        }
    };

    return (
        <main className="bg-black text-white">
            {/* navbar */}
            <Navbar/>
            {/* Sign In form */}
            <section className="min-h-dvh flex justify-center items-start py-32 px-4 sm:px-8">
                <form className=" flex flex-col max-w-125 w-full p-10 gap-5 border border-gray-800 rounded-2xl">
                    <h1 className="text-2xl font-bowlby">Create Account</h1>
                    <p className=" text-xs text-gray-400">Join thousands of happy e-store customers</p>
                    <label htmlFor={'username'}>Full Name</label>
                    <input id="username" type="text" placeholder="Your Name" 
                        name="name" value={state.name} onChange={handleChange}
                        className="p-2 bg-gray-800 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
                    />

                    <label htmlFor={'email'}>Email</label>
                    <input id="email" type="email" placeholder="Your Email"  
                        name="email" value={state.email} onChange={handleChange}
                        className="p-2 bg-gray-800 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
                    />

                    <label htmlFor={'password'}>Password</label>
                    <input id="password" type="password" placeholder="Your Password" 
                        name="password" value={state.password} onChange={handleChange} 
                        className="p-2 bg-gray-800 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
                    />

                    <input type="submit" value={"Create Account"} 
                        className="p-2 bg-blue-400 text-black font-bowlby rounded-lg"
                    />
                    <p className=" text-xs text-gray-400 text-center">Already have an account? <Link to={'/signin'} className="text-blue-400">Sign in</Link></p>
                </form>
            </section>
        </main>
    );
}


export default Signup;