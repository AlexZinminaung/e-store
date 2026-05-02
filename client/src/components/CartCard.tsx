import { RxCross1 } from "react-icons/rx";

const CartCard = () => {

    return (
            <div className="w-full flex justify-between p-2 items-center border border-gray-800 rounded-2xl">
                <div className="flex gap-2 sm:gap-5 items-center">
                    <div className="flex-1 block overflow-hidden aspect-square size-24 rounded-lg">
                        <img className="w-full h-full" src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80"/>
                    </div>
                    <div className="flex-1 flex  flex-col gap-2">
                        <p className=" font-bowlby text-xs sm:text-sm">Samsung Galaxy s25</p>
                        <p className=" text-green-400 text-xs font-bowlby">$999 * 1</p>
                    </div>
                </div>

                <div className="flex items-center gap-2 sm:gap-5">
                    <span className=" font-bowlby text-xs text-blue-400">$999</span>
                    <button className="p-2 border border-gray-800 rounded-lg hover:border-red-400 hover:text-red-400"><RxCross1/></button>
                </div>
            </div>   
    )
}

export default CartCard;