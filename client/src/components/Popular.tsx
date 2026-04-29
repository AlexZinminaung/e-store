import ProductCard from "./ProductCard";


const Popular = () => {

    return (
            <section id="popular" className='flex flex-col gap-5 py-5 px-4 sm:px-8'>
                <span className='text-blue-400 '>TRENDING NOW</span>
                <h3 className=' text-3xl'> Popular Items</h3>

                <div className='flex flex-col gap-5'>
                    <ul className='flex flex-wrap gap-2'>
                        <li><button className='p-2 border border-gray-800 rounded-2xl hover:bg-blue-400 hover:border-blue-400 hover:text-black'>All</button></li>
                        <li><button className='p-2 border border-gray-800 rounded-2xl hover:bg-blue-400 hover:border-blue-400 hover:text-black'>Mobile</button></li>
                        <li><button className='p-2 border border-gray-800 rounded-2xl hover:bg-blue-400 hover:border-blue-400 hover:text-black'>Laptop</button></li>
                        <li><button className='p-2 border border-gray-800 rounded-2xl hover:bg-blue-400 hover:border-blue-400 hover:text-black'>Audio</button></li>
                        <li><button className='p-2 border border-gray-800 rounded-2xl hover:bg-blue-400 hover:border-blue-400 hover:text-black'>Accessories</button></li>
                    </ul>
                    <div className=' grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2'>
                        <ProductCard/>
                        <ProductCard/>
                        <ProductCard/>
                        <ProductCard/>
                        <ProductCard/>
                        <ProductCard/>
                    </div>
                </div>
            </section>
    );
}


export default Popular;