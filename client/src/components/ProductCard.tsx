import type { Product } from "../types/products";

interface ProductCardProps {
    product: Product
}


const ProductCard = ({product}: ProductCardProps) => {

    return (
            <div className='max-w-64 rounded-xl border-2 border-gray-800 overflow-hidden hover:border-blue-400 hover:border-2'>
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
                        <button className=' size-8 rounded-md bg-gray-800 aspect-square'>+</button>
                    </div>
                </div>
            </div>
    );
}

export default ProductCard;