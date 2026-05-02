import { Link } from "react-router";
import Navbar from "../components/Navbar";
import { GiShoppingCart } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";

const Cart = () => {
    

    return (
        <main className="bg-black text-white">
            {/* Navbar */}
            <Navbar/>

            {/* Cart content */}
            <section className="min-h-dvh flex flex-col justify-start items-center py-32 px-4 sm:px-8">
                <div className=" w-full max-w-200 flex flex-col gap-20">
                    <h1 className="w-full text-3xl font-bowlby">Your Cart</h1>
                    {
                        <div className="w-full flex flex-col items-center gap-4">
                            
                            <div className="w-full flex flex-col items-center gap-4">

                                {/* Cart product box */}
                                <div className="w-full flex justify-between p-2 items-center border border-gray-800 rounded-2xl">
                                    <div className="flex gap-5 items-center">
                                        <div className="block overflow-hidden aspect-square size-24 rounded-lg">
                                            <img className="w-full h-auto" src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80"/>
                                        </div>
                                        <div className="flex  flex-col gap-2">
                                            <p className=" font-bowlby text-sm">Samsung Galaxy s25</p>
                                            <p className=" text-green-400 text-xs font-bowlby">$999 * 1</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-5">
                                        <span className=" font-bowlby">$999</span>
                                        <button className="p-2 border border-gray-800 rounded-lg hover:border-red-400 hover:text-red-400"><RxCross1/></button>
                                    </div>
                                </div>

                                {/* Cart product box */}
                                <div className="w-full flex justify-between p-2 items-center border border-gray-800 rounded-2xl">
                                    <div className="flex gap-5 items-center">
                                        <div className="block overflow-hidden aspect-square size-24 rounded-lg">
                                            <img className="w-full h-auto" src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80"/>
                                        </div>
                                        <div className="flex  flex-col gap-2">
                                            <p className=" font-bowlby text-sm">Samsung Galaxy s25</p>
                                            <p className=" text-green-400 text-xs font-bowlby">$999 * 1</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-5">
                                        <span className=" font-bowlby">$999</span>
                                        <button className="p-2 border border-gray-800 rounded-lg hover:border-red-400 hover:text-red-400"><RxCross1/></button>
                                    </div>
                                </div>               
                            </div>

                            {/* Cart product box */}
                            <div className="w-full flex flex-col items-start gap-5  border border-gray-800 rounded-2xl px-2 py-5">
                                <div className="w-full border-b border-gray-800 py-2">
                                    <p className="flex justify-between text-gray-400">
                                        <span>Subtotal</span>
                                        <span>$4000</span>
                                    </p>
                                </div>

                                <div className="w-full border-b border-gray-800 py-2">
                                    <p className="flex justify-between text-gray-400"> 
                                        <span>Shipping</span>
                                        <span>Free</span>                                      
                                    </p>
                                </div>

                                <div className="w-full py-2">
                                    <p className="flex flex-col gap-2">
                                        <span className=" font-bowlby text-lg">Total</span>
                                        <button className="bg-blue-400 text-black p-3 rounded-lg">Checkout</button>
                                    </p>
                                </div>
                            </div>    

                        </div>
                    }
                    {/* <div className="w-full flex flex-col items-center gap-5">
                        <p className=" size-56 flex justify-center items-center">
                            <GiShoppingCart className=" size-52"/>
                        </p>
                        <span className=" text-xs text-gray-400">Your cart is empty</span>
                        <Link to={'/'} className="py-2 px-5 bg-blue-400 text-black border border-blue-400 rounded-lg">Start Shopping</Link>
                    </div> */}
                </div>
            </section>
        </main>
    )
}


export default Cart;