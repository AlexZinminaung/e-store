
const SlideCard = () => {

    return (
        <div className=" shrink-0 w-full h-80 border border-gray-800 rounded-2xl overflow-hidden flex flex-col hover:border-blue-400">
            <div className="flex-1 block w-full aspect-video overflow-hidden ">
                <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80"/>
            </div>

            <div className='p-2'>
                <div className='flex gap-2 text-xs'>
                    <span className='text-gray-400'>Mobile</span>
                    <span className=' text-blue-400'>Trending</span>
                </div>
                <h3 className=' text-xs font-semibold'>Iphone 17 pro max</h3>
                <div className='flex justify-between items-center'>
                    <p className='text-blue-400'>$2344</p>

                    {/* Add to card button */}
                    <button className=' size-8 rounded-md bg-gray-800 aspect-square hover:bg-blue-400 hover:text-black'>+</button>
                </div>
            </div>
        </div>
    );
}

export default SlideCard;