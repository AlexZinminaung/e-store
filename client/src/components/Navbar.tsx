import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { Link } from "react-router";

const Navbar = () => {

    return (
        <nav className='flex justify-between items-center fixed w-full z-10 backdrop-blur-2xl sm:gap-8 border-b border-gray-800 py-4 px-4 sm:px-8'>
            <Link to={'/'} className='text-xl font-bowlby  text-nowrap'>E-<span className=' text-blue-400'>Store</span></Link>

            <form className='bg-gray-900 rounded-full overflow-hidden relative'>
            <CiSearch className=' absolute top-1 left-2 translate-y-1/2'/>
            <input type='text' placeholder='Search Products' className='flex-1 outline-none p-2 px-8'/>
            </form>

            <div className='flex gap-2 text-sm'>
            <Link to={'/cart'} className='p-2 border border-gray-800 rounded-md hover:text-blue-400 hover:border-blue-400 flex items-center gap-1 relative'> 
                <CiShoppingCart className=' size-5'/> 
                <span>Chart</span>
                <span className=' absolute bg-red-600 aspect-square w-5 z-10 -top-2 -right-2 text-xs rounded-full flex justify-center items-center'>0</span>
            </Link>
            <Link to={'/signin'} className='p-2 border border-gray-800 rounded-md hover:text-blue-400 hover:border-blue-400'>Sign In</Link>
            <Link to={'/signup'} className='p-2 border border-blue-400 text-black bg-blue-400 rounded-md '>Sign Up</Link>
            </div>
        </nav>
    );
}

export default Navbar;