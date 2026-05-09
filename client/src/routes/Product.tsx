import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import { Link, useParams } from "react-router";

import { FaArrowLeftLong } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { productDetail } from "../apis/apis";
import type { Product as ProductType } from "../types/products";

const getProductInfo = (id: number, productDetail: ProductType[]) => {
    const product = productDetail.find((product) => product.id === id);
    console.log(product);
    return product

}

const Product = () => {
    const [product , setProduct] = useState<ProductType | null>(null);

    const { id } = useParams();

    useEffect(() => {
        if (!id) return;
        const result = getProductInfo(Number(id), productDetail) || null;
        setProduct(result);

    }, [id])

    if (!product) return ;

    return (
        <main className=" bg-black text-white">
            {/* Scroll to top component will scroll top to when routes is change */}
            <ScrollToTop/>
            {/* navbar */}
            <Navbar/>
            
            <section className="w-full min-h-dvh flex justify-center items-start py-32  px-4 sm:px-8">
                <div className="max-w-200 flex flex-col gap-10">
                    <div>
                        <Link to={'/'} className=" py-1 px-2 border border-gray-800 rounded-lg text-gray-400 flex items-center w-fit gap-2"><FaArrowLeftLong/>Back</Link>
                    </div>
                    <div className="flex gap-10 sm:flex-row flex-col">
                        {/* image container */}
                        <div className="flex-1 w-full h-fit block overflow-hidden aspect-square border border-gray-400 rounded-2xl">
                            <img src={product.imgUrl} className="w-full h-full object-cover"/>
                        </div>

                        {/* Product detail container */}
                        <div className="flex-1 flex flex-col gap-8">
                            <span className="p-2 border border-blue-400 rounded-lg text-blue-400 bg-blue-400/20 w-fit">{ product.category.toUpperCase() + " " + product.badge.toUpperCase()}</span>
                            <h2 className="text-3xl font-bowlby">{product.title}</h2>
                            <span className="text-2xl font-bowlby">${product.price}</span>
                            <p className="text-sm text-gray-400">{product.description}</p>

                            {/* Detial headline Grid box */}
                            <div className="grid grid-cols-2 gap-2">
                                {
                                product?.specs && (
                                    Object.entries(product.specs).map(([key, value]) => {
                                        return (
                                                <div key={key} className="flex flex-col gap-2 border border-gray-800 rounded-lg p-2">
                                                    <span className=" text-xs text-gray-400">{key}</span>
                                                    <span>{value}</span>
                                                </div>
                                        )
                                    })
                                )
                                }
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