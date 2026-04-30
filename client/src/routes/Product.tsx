import Navbar from "../components/Navbar";

import iphoneImgUrl from '../../public/items/iphone17.jpg'
import Footer from "../components/Footer";

const Product = () => {

    return (
        <main className=" bg-black text-white">
            {/* navbar */}
            <Navbar/>
            
            <section className="w-full min-h-dvh flex justify-center items-start py-32  px-4 sm:px-8">
                <div className="max-w-200 flex flex-col gap-2">
                    <div>
                        <button className=" py-1 px-2 border border-gray-800 rounded-lg text-gray-400">Go Back</button>
                    </div>
                    <div className="flex gap-10 sm:flex-row flex-col">
                        {/* image container */}
                        <div className="flex-1 w-full h-fit block overflow-hidden aspect-square border border-gray-400 rounded-2xl">
                            <img src={iphoneImgUrl} className="w-full h-full object-cover"/>
                        </div>

                        {/* Product detail container */}
                        <div className="flex-1 flex flex-col gap-8">
                            <span className="p-2 border border-blue-400 rounded-lg text-blue-400 bg-blue-400/20 w-fit">Mobile - New</span>
                            <h2 className="text-3xl font-bowlby">Iphone 16 Pro Max</h2>
                            <span className="text-2xl font-bowlby">$1290</span>
                            <p className="text-sm text-gray-400">Titanium design with A18 Pro chip, 48MP camera system, and all-day battery life. The most advanced iPhone ever made.</p>

                            {/* Detial headline Grid box */}
                            <div className="grid grid-cols-2 gap-2">
                                <div className="flex flex-col gap-2 border border-gray-800 rounded-lg p-2">
                                    <span className=" text-xs text-gray-400">DISPLAY</span>
                                    <span>6.3" OLED</span>
                                </div>

                                <div className="flex flex-col gap-2 border border-gray-800 rounded-lg p-2">
                                    <span className=" text-xs text-gray-400">CHIP</span>
                                    <span>A 18 PRO</span>
                                </div>

                                <div className="flex flex-col gap-2 border border-gray-800 rounded-lg p-2">
                                    <span className=" text-xs text-gray-400">CAMERA</span>
                                    <span>40MP system</span>
                                </div>

                                <div className="flex flex-col gap-2 border border-gray-800 rounded-lg p-2">
                                    <span className=" text-xs text-gray-400">BATTERY</span>
                                    <span>3274 mAh</span>
                                </div>
                            </div>

                            {/* Adding Qty Button */}
                            <div className="flex gap-2 items-center">
                                <div className="flex border rounded-lg border-gray-800 w-fit overflow-hidden">
                                    <button className="py-2 px-5 hover:bg-gray-800 text-white">+</button>
                                    <p className="py-2 px-5 border-gray-800">1</p>
                                    <button className="py-2 px-5 hover:bg-gray-800 text-white">-</button>
                                </div>
                                <span className=" text-sm text-gray-400">Qty</span>
                            </div>

                            {/* Add to Cart Button */}
                            <div className="flex gap-2">
                                <button className="flex-1 bg-blue-400 text-black p-2 rounded-md">Add to Cart</button>
                                <button className="border border-gray-800 p-2 rounded-md hover:text-blue-400 hover:border-blue-400">View Cart</button>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <Footer/>

        </main>
    )
}


export default Product;