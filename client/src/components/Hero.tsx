import { Link } from "react-router";

const Hero = () => {

    return (
        <section className='min-h-dvh flex flex-col justify-center py-32 px-4 sm:px-8'>
            <div className='flex flex-col gap-10 w-fit py-10 border-b border-gray-800'>
            <p className=' text-blue-400 text-sm border w-fit p-2 rounded-full'>NEW COLLECTIONS 2026</p>
            <h1 className=' text-6xl sm:text-8xl font-bowlby'>Gear That <br/> <span className='text-blue-400'>Defines You.</span></h1>
            <p className='text-gray-400'>Premium mobiles, laptops, and accessories built for the way you move. No compromises.</p>

            <div className='flex gap-4'>
                <a href="#popular" className='bg-blue-400 p-3 rounded-md'>Shop Now</a>
                <Link to={'/cart'} className='border border-gray-800 rounded-md p-3 hover:text-blue-400 hover:border-blue-400'>View Chart</Link>
            </div>
            </div>

            <ul className='flex gap-10 py-10'>
            <li className='flex flex-col'>
                <span className=' font-bowlby text-2xl'>12K+</span>
                <span className=' text-gray-400 text-sm'>Products</span>
            </li>

            <li className='flex flex-col'>
                <span className=' font-bowlby text-2xl'>98%</span>
                <span className=' text-gray-400 text-sm'>Satisfaction</span>
            </li>

            <li className='flex flex-col'>
                <span className=' font-bowlby text-2xl'>50+</span>
                <span className=' text-gray-400 text-sm'>Brands</span>
            </li>
            </ul>
        </section>
    )
}

export default Hero;