import type { Product } from "../types/products";
import { Link } from "react-router";
import { useContext } from "react";
import { CartContext } from '../contexts/CartContext'

interface SlideCardProps {
    product: Product
}



const SlideCard = ({product}: SlideCardProps) => {
    // using context to add cart
    const context = useContext(CartContext);
    if (!context) return null;

    const { addToCart } = context;
    // handler
    const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>, product:Product) => {
        e.preventDefault();   // stops Link navigation
        e.stopPropagation();

        // checking if cart exist or not
        // if e-store-cart exist in local storage then use it
        // else use empty array []
        addToCart(product, 1);
    }

    return (
        <Link to={`/product/${product.id}`} className=" shrink-0 w-full h-80 border border-gray-800 rounded-2xl overflow-hidden flex flex-col hover:border-blue-400 relative">
            <div className='flex gap-2 text-xs absolute bg-black p-2 right-4 top-2 rounded-2xl'>
                <span className='text-white'>{product.category.toUpperCase()}</span>
                <span className=' text-blue-400'>{product.badge}</span>
            </div>
            <div className="flex-1 block w-full aspect-video overflow-hidden ">
                <img className="w-full h-full object-cover" src={product.imgUrl}/>
            </div>

            <div className='p-2'>
                <h3 className=' text-xs font-semibold'>{product.title}</h3>
                <div className='flex justify-between items-center'>
                    <p className='text-blue-400'>${product.price}</p>

                    {/* Add to card button */}
                    <button onClick={(e) => { handleAddToCart(e, product)}} className=' size-8 rounded-md bg-gray-800 aspect-square hover:bg-blue-400 hover:text-black'>+</button>
                </div>
            </div>
        </Link>
    );
}

export default SlideCard;