import { RxCross1 } from "react-icons/rx";
import type { Product } from "../types/products";

import { useContext } from "react";
import { CartContext } from '../contexts/CartContext'

type CartItem = Product & {
  qty: number;
};

type CartCardProps = {
  item: CartItem;
};

const CartCard = ({item}: CartCardProps) => {

    // using context to cart info
    const context = useContext(CartContext);
    if (!context) return null;

    const { removeFromCart } = context;

    // handler function
    const handleRemoveBtn = (id: number) => {
        removeFromCart(id);
    }

    return (
            <div className="w-full flex justify-between p-2 items-center border border-gray-800 rounded-2xl">
                <div className="flex gap-2 sm:gap-5 items-center">
                    <div className="block overflow-hidden aspect-square size-24 rounded-lg">
                        <img className="w-full h-full object-cover" src={item.imgUrl}/>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className=" font-bowlby text-xs sm:text-sm">{item.title}</p>
                        <p className=" text-green-400 text-xs font-bowlby flex items-center gap-2">${item.price} <RxCross1 className=" size-3"/> {item.qty}</p>
                    </div>
                </div>

                <div className="flex items-center gap-2 sm:gap-5">
                    <span className=" font-bowlby text-xs text-blue-400">${item.price * item.qty}</span>
                    <button onClick={() => {handleRemoveBtn(item.id)}} className="p-2 border border-gray-800 rounded-lg hover:border-red-400 hover:text-red-400"><RxCross1/></button>
                </div>
            </div>   
    )
}

export default CartCard;