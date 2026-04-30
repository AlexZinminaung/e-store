import ProductCard from "./ProductCard";
import { popularProducts } from "../apis/popularApi";
import { useEffect, useState } from "react";
import type { Product } from "../types/products";

const Popular = () => {

    const [products, setProducts] = useState<Product[]>([]);
    const [category, setCategory] = useState("all");
    
    const filterProducts = category == "all" ? products : products.filter( product => product.category == category) 

    // state functions
    const handleCategorySwitch = (category: string) => {
        setCategory(category);
    }

    // Api fetching 
    const fetchPopularProducts = () => {
        setProducts(popularProducts)
    }

    // useEffect to fetch api
    useEffect(() => {
        fetchPopularProducts();
    }, [])

    return (
            <section id="popular" className='flex flex-col gap-5 py-5 px-4 sm:px-8'>
                <span className='text-blue-400 '>TRENDING NOW</span>
                <h3 className=' text-3xl'> Popular Items</h3>

                <div className='flex flex-col gap-5'>
                    <ul className='flex flex-wrap gap-2'>
                        <li><button onClick={() => { handleCategorySwitch('all')}} className={`p-2 border border-gray-800 rounded-2xl hover:bg-blue-400 hover:border-blue-400 hover:text-black ${category == 'all' && 'bg-blue-400 text-black'}`}>All</button></li>
                        <li><button onClick={() => { handleCategorySwitch('mobile')}} className={`p-2 border border-gray-800 rounded-2xl hover:bg-blue-400 hover:border-blue-400 hover:text-black ${category == 'mobile' && 'bg-blue-400 text-black'}`}>Mobile</button></li>
                        <li><button onClick={() => { handleCategorySwitch('laptop')}} className={`p-2 border border-gray-800 rounded-2xl hover:bg-blue-400 hover:border-blue-400 hover:text-black ${category == 'laptop' && 'bg-blue-400 text-black'}`}>Laptop</button></li>
                        <li><button onClick={() => { handleCategorySwitch('audio')}} className={`p-2 border border-gray-800 rounded-2xl hover:bg-blue-400 hover:border-blue-400 hover:text-black ${category == 'audio' && 'bg-blue-400 text-black'}`}>Audio</button></li>
                        <li><button onClick={() => { handleCategorySwitch('accessories')}} className={`p-2 border border-gray-800 rounded-2xl hover:bg-blue-400 hover:border-blue-400 hover:text-black ${category == 'accessories' && 'bg-blue-400 text-black'}`}>Accessories</button></li>
                    </ul>
                    <div className=' grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2'>
                        {/* Fetch product list and display on UI */}
                        {
                            filterProducts.map(product => {
                                return (<ProductCard key={product.id} product={product}/>);
                            })
                        }
                    </div>
                </div>
            </section>
    );
}


export default Popular;