import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { CiMenuFries } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router";

import { useContext } from "react";
import { CartContext } from '../contexts/CartContext'

const Navbar = () => {
    const [isSearch, setSearch] = useState(false);
    const [isDropdown, setDropdown] = useState(false);
    const [itemAmount, setItemAmount] = useState(0);
    
    // using context to get cart count
    const context = useContext(CartContext);
    if (!context) return null;

    const { cart } = context;


    useEffect(() => {
        console.log("cart", cart);
        getCartQty()
    })

    const getCartQty = () => {
        // iterate cart [] array
        // find qrt
        let cartCount = 0;
        cart.forEach( item => {
            cartCount += item.qty
        })

        setItemAmount(cartCount);   
    }
    
    // states function
    const handleClickSearch = () => {
        setSearch(prev => !prev);
    }

    const handleClickMenu = () => {
        setDropdown(prev => !prev);
    }

    return (
        <nav className='flex gap-2 justify-between items-center fixed w-full z-10 backdrop-blur-2xl sm:gap-8 border-b border-gray-800 py-4 px-4 sm:px-8'>
            {/* Do not display Logo if user search is on */}
            {!isSearch && <Link to={'/'} className='text-xl font-bowlby  text-nowrap'>E-<span className=' text-blue-400'>Store</span></Link>}

            {
                // display only when search is not on
                !isSearch &&
                            <form className='bg-gray-900 hidden sm:flex rounded-full overflow-hidden relative'>
                                <CiSearch className=' absolute top-1 left-2 translate-y-1/2'/>
                                <input type='text' placeholder='Search Products' className='flex-1 outline-none p-2 px-8'/>
                            </form>
            }

            {/* Display if user search is on */}
            {
                isSearch &&      
                    // This search bar is for mobile screen 
                    <form className='bg-gray-900 w-full rounded-full overflow-hidden relative'>
                        <CiSearch className=' absolute top-1 left-2 translate-y-1/2'/>
                        <input type='text' placeholder='Search Products' className='flex-1 w-full outline-none p-2 px-8'/>
                    </form>
            }

            <div className='flex gap-2 text-sm'>
                {/* cart, menu and search will not display when user search on mobile */}
                {
                    !isSearch &&  
                        <>     
                            <Link to={'/cart'} className='p-2 border border-gray-800 rounded-md hover:text-blue-400 hover:border-blue-400 flex items-center gap-1 relative'> 
                                <CiShoppingCart className=' size-5'/> 
                                <span className="hidden sm:flex">Chart</span>
                                <span className=' absolute bg-red-600 aspect-square w-5 z-10 -top-2 -right-2 text-xs rounded-full flex justify-center items-center'>{itemAmount}</span>
                            </Link>
                            <Link to={'/signin'} className='hidden sm:flex p-2 border border-gray-800 rounded-md hover:text-blue-400 hover:border-blue-400'>Sign In</Link>
                            <Link to={'/signup'} className='hidden sm:flex p-2 border border-blue-400 text-black bg-blue-400 rounded-md '>Sign Up</Link>
                        </>
                }


                <button
                    onClick={handleClickSearch}
                    className="p-3 aspect-square sm:hidden text-white border border-gray-800 rounded-md hover:text-blue-400 hover:border-blue-400">
                    {
                        isSearch ? <RxCross1/> : <CiSearch/>
                    }

                </button>

                {
                    // display Drop Menu if user search is on
                    isSearch &&
                        <button
                            onClick={handleClickSearch}
                            className="p-3 aspect-square hidden sm:flex text-white border border-gray-800 rounded-md hover:text-blue-400 hover:border-blue-400"><RxCross1/>

                        </button>
                }
                {/* Do not display Drop Menu if user search is on */}
                {!isSearch && <button onClick={handleClickMenu} className="p-3 aspect-square sm:hidden text-white border border-gray-800 rounded-md hover:text-blue-400 hover:border-blue-400"><CiMenuFries/></button>}            
                
            </div>

            {/* Dropdown menu form mobile */}
            {
                isDropdown &&
                    <div className="flex flex-col sm:hidden absolute top-full left-0 w-full z-10 bg-gray-800">
                        <Link to={'/signup'} className="w-full py-2"><span className="px-4">Sign Up</span></Link>
                        <Link to={'/signin'} className="w-full py-2"><span className="px-4">Sign In</span></Link>
                    </div>
            }

        </nav>
    );
}

export default Navbar;