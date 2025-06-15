import React from "react";
import { FaRegFaceGrinHearts, FaComment, FaShareNodes, FaSheetPlastic } from "react-icons/fa6";

function BalFeedCard(params) {
    return (
        <div>
            <div class="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-full p-6">
                <div class="flex flex-row w-full items-center mb-4">
                    <div className="flex items-center gap-4">
                        <img className="w-10 h-10 rounded-full" src="/assets/background/animeListBackground.jpg" alt="" />
                        <div class="font-medium ">
                            <h1 className="text-black">Jese Leos</h1>
                            <div className=" flex flex-row text-sm text-sm text-gray-500 gap-2">
                                <p className="">admin </p>
                                <span>|</span>
                                <p>March 16, 09, 09:00 pm</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pb-4 font-bold text-gray-600">
                    <p>Isekai</p>
                </div>
                <div>
                    <p class="block text-slate-600 leading-normal font-light mb-4">
                        Because it&apos;s about motivating the doers. Because I&apos;m here to follow my dreams and inspire others.
                    </p>
                </div>
                <div className="flex flex-row justify-between text-gray-600 font-normal mb-1">
                    <div>
                        <p className="text-sm">💓 20 person reacted</p>
                    </div>
                    <div className="flex flex-row gap-2">
                        <p className="text-sm"> 2 Comments</p>
                        <p className="text-sm">1 Share</p>
                    </div>
                </div>

                {/* Actions */}
                <div className="flex flex-row justify-between border-t-2 pt-3">
                    <div className="flex flex-row gap-4">
                        <button type="button" class="text-gray-900 inline-flex gap-2 items-center bg-white  font-medium rounded-lg text-sm "><span className="text-gray-500"><FaRegFaceGrinHearts /></span><span>react</span> </button>
                        <button type="button" class="text-gray-900 inline-flex gap-2 items-center bg-white  font-medium rounded-lg text-sm "><span className="text-gray-500"><FaComment /></span><span>Comment</span> </button>
                        <button type="button" class="text-gray-900 inline-flex gap-2 items-center bg-white  font-medium rounded-lg text-sm "><span className="text-gray-500"><FaShareNodes /></span><span>share</span> </button>
                    </div>
                    <div>
                        <button type="button" class="text-gray-900 inline-flex gap-2 items-center bg-white  font-medium rounded-lg text-sm "><span className="text-gray-500"><FaSheetPlastic /></span><span>View Full Post</span> </button>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default BalFeedCard