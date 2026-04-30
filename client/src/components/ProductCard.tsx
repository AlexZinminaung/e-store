import { Link } from "react-router";
import type { Product } from "../types/products";

interface ProductCardProps {
    product: Product
}


const ProductCard = ({product}: ProductCardProps) => {

    // handler
    const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>, product:Product) => {
        e.preventDefault();   // stops Link navigation
        e.stopPropagation();

        // checking if cart exist or not
        // if e-store-cart exist in local storage then use it
        // else use empty array []
        addTocart(product);
    }

    const addTocart = (product:Product) => {

        const cart:(Product & {qty?: number})[] = JSON.parse(localStorage.getItem("e-store-cart") || "[]");
        const existing = cart.find(item => item.id == product.id);
        if (existing)
        {
            existing.qty = (existing.qty || 1) + 1

        }

        else {
            cart.push({...product, qty: 1})
        }

        localStorage.setItem("e-store-cart", JSON.stringify(cart));
    }
    return (
            <Link to={`/product/${product.id}`} className='max-w-64 rounded-xl border-2 border-gray-800 overflow-hidden hover:border-blue-400 hover:border-2'>
                <div className=' block overflow-hidden aspect-square'>
                    <img src={product.imgUrl} className="w-full h-full object-cover"/>
                </div>

                <div className='p-2'>
                    <div className='flex gap-2 text-xs'>
                        <span className='text-gray-400'>{product.category}</span>
                        <span className=' text-blue-400'>{product.badge}</span>
                    </div>
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

export default ProductCard;