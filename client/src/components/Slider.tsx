import { useState } from "react";
import SlideCard from "./SlideCard";

const Slider = () => {
    const [largeIndex, setLargeIndex] = useState(0);
    const [smIndex, setSmIndex] = useState(0);

    // state handler function
    return (
        <div className="w-full py-10 relative overflow-hidden">
            {/* For large Width */}
            <div className="w-full flex-nowrap gap-2 hidden sm:flex transition-all duration-300" style={{transform: `translateX(-${largeIndex * 100}%)`,}}>
                {/* Slide 1 */}
                <div className="min-w-full grid grid-cols-3 gap-4">
                    <SlideCard/>
                    <SlideCard/>
                    <SlideCard/>
                </div>

                {/* Slide 2 */}
                <div className="min-w-full grid grid-cols-3 gap-4">
                    <SlideCard/>
                    <SlideCard/>
                    <SlideCard/>
                </div>

                {/* Slide 3 */}
                <div className="min-w-full grid grid-cols-3 gap-4">
                    <SlideCard/>
                    <SlideCard/>
                    <SlideCard/>
                </div>
            </div>

            {/* Tracking deskop dot */}
            <div className="hidden sm:flex w-full justify-center items-center gap-2 p-2">
                <div className={`size-2 rounded-full transition-all duration-200 ${largeIndex == 0 ? "w-10 bg-blue-400" : "bg-gray-800"}`} onClick={() => { setLargeIndex(0)}}></div>
                <div className={`size-2 rounded-full transition-all duration-200 ${largeIndex == 1 ? "w-10 bg-blue-400" : "bg-gray-800"}`} onClick={() => { setLargeIndex(1)}}></div>
                <div className={`size-2 rounded-full transition-all duration-200 ${largeIndex == 2 ? "w-10 bg-blue-400" : "bg-gray-800"}`} onClick={() => { setLargeIndex(2)}}></div>
            </div>
 
            {/* For mobile Width */}
            <div className="sm:hidden w-full flex-nowrap flex justify-start transition-all duration-300" style={{transform: `translateX(-${smIndex * 100}%)`}}>
                <SlideCard/>
                <SlideCard/>
                <SlideCard/>
                <SlideCard/>
                <SlideCard/>
                <SlideCard/>
                <SlideCard/>
                <SlideCard/>
                <SlideCard/>
            </div>


            {/* Tracking mobile dot */}
            <div className="flex sm:hidden w-full justify-center items-center gap-2 p-2 ">
                <div className={`size-2 rounded-full transition-all duration-200 ${smIndex == 0 ? "w-10 bg-blue-400" : "bg-gray-800"}`} onClick={() => { setSmIndex(0)}}></div>
                <div className={`size-2 rounded-full transition-all duration-200 ${smIndex == 1 ? "w-10 bg-blue-400" : "bg-gray-800"}`} onClick={() => { setSmIndex(1)}}></div>
                <div className={`size-2 rounded-full transition-all duration-200 ${smIndex == 2 ? "w-10 bg-blue-400" : "bg-gray-800"}`} onClick={() => { setSmIndex(2)}}></div>
                <div className={`size-2 rounded-full transition-all duration-200 ${smIndex == 3 ? "w-10 bg-blue-400" : "bg-gray-800"}`} onClick={() => { setSmIndex(3)}}></div>
                <div className={`size-2 rounded-full transition-all duration-200 ${smIndex == 4 ? "w-10 bg-blue-400" : "bg-gray-800"}`} onClick={() => { setSmIndex(4)}}></div>
                <div className={`size-2 rounded-full transition-all duration-200 ${smIndex == 5 ? "w-10 bg-blue-400" : "bg-gray-800"}`} onClick={() => { setSmIndex(5)}}></div>
                <div className={`size-2 rounded-full transition-all duration-200 ${smIndex == 6 ? "w-10 bg-blue-400" : "bg-gray-800"}`} onClick={() => { setSmIndex(6)}}></div>
                <div className={`size-2 rounded-full transition-all duration-200 ${smIndex == 7 ? "w-10 bg-blue-400" : "bg-gray-800"}`} onClick={() => { setSmIndex(7)}}></div>
                <div className={`size-2 rounded-full transition-all duration-200 ${smIndex == 8 ? "w-10 bg-blue-400" : "bg-gray-800"}`} onClick={() => { setSmIndex(8)}}></div>
            </div>
        </div>
    );
}

export default Slider;