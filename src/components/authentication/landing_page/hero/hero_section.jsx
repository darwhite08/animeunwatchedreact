import React from "react";
import SquareSocialButton from '../../../socials/follow_us_card'



function HeroSectionComp(params) {
    return (
      
            <div>
                <div className="relative min-h-screen ">
                    <div className="pt-24">
                        <div className="flex flex-col items-center py-10">
                            <p className="text-gray-600 border border-blue-200 px-4 py-1 rounded-full bg-white font-medium">anime unwatched</p>
                            <div className="flex flex-col pt-2 items-center text-center justify-center gap-2 w-9/12 ">
                                <h1 className="text-8xl block font-bold p-4 text-center font-bold from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent uppercase  ">
                                    <span>A Universe of </span>
                                    <span>Stories Waiting to </span>
                                    <span>be Unlocked.</span>
                                      </h1>
                                <p className="text-xs px-24 font-bold text-gray-600 ">Every episode is a new adventure, every season a new world—your next favorite anime is just a click away, waiting for you to unlock its secrets.</p>
                            </div>
                            <div className="py-10 flex flex-row gap-2">
                                <button type="button" class="py-2.5 px-10 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 "> Watch Your Next Favorite</button>
                                <button type="button" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-10 py-2.5 me-2 mb-2 ">Start Your Journey</button>
                            </div>
                            <div className=" absolute bottom-10 right-0 backdrop-blur-3xl ">
                                <SquareSocialButton />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
    );
}

export default HeroSectionComp;