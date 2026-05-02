

const ProductSkeleton = () => {

    return (
            <div className="flex-1 w-full flex">
                <div className="flex flex-col w-full max-w-64 animate-pulse rounded-2xl overflow-hidden">
                    <div className="bg-gray-800 w-full aspect-square border border-gray-800 "></div>

                    <div className="flex flex-col gap-4 w-full p-2 border border-gray-800 rounded-b-2xl">
                        <div className="w-full flex gap-2">
                            <div className="bg-gray-800 w-2/10 size-4 rounded-md"></div>
                            <div className="bg-gray-800 w-2/10 size-4 rounded-md"></div>
                        </div>
                        <div className="bg-gray-800 w-full size-4 rounded-md"></div>
                        <div className="bg-gray-800 w-8/10 size-4 rounded-md"></div>
                        <div className="flex gap-4 w-full justify-between">
                            <div className="bg-gray-800 w-4/10 size-4 rounded-md"></div>
                            <div className="bg-gray-800 aspect-square size-4 rounded-md"></div>
                        </div>
       
                    </div>
                </div>
            </div>
    )
}


export default ProductSkeleton