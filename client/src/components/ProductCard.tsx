import ip16Img from '../assets/items/iphone17.jpg'

const ProductCard = () => {

    return (
            <div className='max-w-64 rounded-xl border-2 border-gray-800 overflow-hidden hover:border-blue-400 hover:border-2'>
                <div className=' block overflow-hidden'>
                    <img src={ip16Img} />
                </div>

                <div className='p-2'>
                    <div className='flex gap-2 text-xs'>
                        <span className='text-gray-400'>MOBILE</span>
                        <span className=' text-blue-400'>NEW</span>
                    </div>
                    <h3 className=' text-xs font-semibold'>IPhone 17 Pro Max</h3>
                    <div className='flex justify-between items-center'>
                        <p className='text-blue-400'>$1199</p>
                        <button className=' size-8 rounded-md bg-gray-800 aspect-square'>+</button>
                    </div>
                </div>
            </div>
    );
}

export default ProductCard;