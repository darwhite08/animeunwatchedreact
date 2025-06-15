import React from "react";

function BestAnimeListFeed() {
    return (
        <div className="h-[10vh] flex flex-row justify-between items-center px-10 w-full bg-[url('/assets/background/animeListBackground.jpg')] bg-cover rounded-xl bg-no-repeat mt-5">
            <h1 className=" px-2 py-1 text-sm rounded-full text-white bg-blue-600 w-min font-medium ">OtakuFeed.</h1>
            <div className="">
                <button type="button" class="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-black bg-white rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ">
                    Notification
                    <span class="inline-flex items-center justify-center w-4 h-4 ms-2 text-xs font-semibold text-blue-800 bg-blue-200 rounded-full">
                        2
                    </span>
                </button>
            </div>
        </div>
    );
}

export default BestAnimeListFeed;