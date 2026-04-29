import { Link } from "react-router";
import Navbar from "../components/Navbar";
import { GiShoppingCart } from "react-icons/gi";

const Cart = () => {
    
    return (
        <main className="bg-black text-white">
            {/* Navbar */}
            <Navbar/>

            {/* Cart content */}
            <section className="min-h-dvh flex flex-col justify-start items-center py-24 px-4 sm:px-8">
                <div className=" w-full max-w-125 flex flex-col gap-20">
                    <h1 className="w-full text-3xl font-bowlby">Your Cart</h1>

                    <div className="w-full flex flex-col items-center gap-5">
                        <p className=" size-56 flex justify-center items-center">
                            <GiShoppingCart className=" size-52"/>
                        </p>
                        <span className=" text-xs text-gray-400">Your cart is empty</span>
                        <Link to={'/'} className="py-2 px-5 bg-blue-400 text-black border border-blue-400 rounded-lg">Start Shopping</Link>
                    </div>
                </div>
            </section>
        </main>
    )
}


export default Cart;