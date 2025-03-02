import React from "react";

function ProfileUserDetails(params) {
    return (
        <div>
            <div className="flex flex-col gap-1 ">
                <div className="flex flex-row items-center  gap-1">
                    <h1 className="text-3xl font-semibold">Priyanshu chandra</h1>
                    <img className="h-6 w-6" src="/assets/icons/verified.gif" alt="" />
                </div>
                <div className="flex flex-row gap-2">
                    <p className="text-[10px] inline-flex items-center text-center  bg-green-200 px-2 py-0.5 rounded-full text-green-800">chandrapriyanshu10@gmail.com</p>
                    <p className="text-[10px] inline-flex items-center text-center bg-red-200 px-2 py-0.5 rounded-full text-red-800">chandrapriyanshu10@gmail.com</p>
                </div>
                <p className="text-xs text-gray-600 text-justify ">Lorem ipsum dolor sit icta laborum laudantium Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla nam ab veritatis, perspiciatis beatae natus suscipit eius rem magnam iure porro consectetur sit vitae temporibus ipsum nostrum a! Autem, ex. </p>
            </div>
            <div className="flex flex-row gap-6 mt-2">
                <div>
                    <h1 className="text-sm">Follower</h1>
                    <p className="text-xl font-semibold">23k</p>
                </div>
                <div>
                    <h1 className="text-sm">Following</h1>
                    <p className="text-xl font-semibold">43k</p>
                </div>
                <div>
                    <h1 className="text-sm">Medals</h1>
                    <p className="text-xl font-semibold">43k</p>
                </div>
            </div>
        </div>

    );
}

export { ProfileUserDetails }