import React from "react";
import { IoSearch } from "react-icons/io5";
import { SideGraidentButton } from "../../../buttons/stylish_buttons";

function ExploreAnimeCard(params) {
    const animeItems = [
        { id: 1, title: 'Best anime List', genre: 'Action, Drama' },
        { id: 2, title: 'Anime reccomendation', genre: 'Action, Comedy' },
        { id: 3, title: 'Upcomming anime', genre: 'Adventure, Fantasy' },
        { id: 4, title: 'anime Leaderboard', genre: 'Adventure, Comedy' },
        { id: 5, title: 'Okatu community', genre: 'Action, Drama' },
        { id: 5, title: 'Anime blogs', genre: 'Action, Drama' },
        { id: 5, title: 'Okatu community', genre: 'Action, Drama' },
        { id: 5, title: 'Okatu community', genre: 'Action, Drama' },
    ];
    return (
        <div className="px-14 ">
            <div className=" flex flex-row h-full justify-between bg-black rounded-3xl ">
                <div className="flex flex-col items-center justify-center  basis-3/5 py-36 ">
                    <div className="text-5xl flex flex-col font-bold  items-center text-violet-800 uppercase">
                        <p className="text-9xl inline-flex"><span>Expl</span><span className="text-white"><IoSearch /></span><span>re</span> </p>
                        <span className="text-6xl text-justify">Your Next Anime</span>
                        <span className="text-4xl text-justify">Filter, Search, and Explore!</span>
                    </div>
                    <hr className="bg-white w-96 mt-10"/>
                    <div className="pt-6 flex flex-row gap-8">
                    <SideGraidentButton buttonName='Explore anime'/>
                    <SideGraidentButton buttonName='Join our Community'/>
                    </div>
                </div>
                <div className="basis-2/5 relative">
                    <p className="absolute top-4 text-white inline-flex justify-center items-center w-full text-center pt-8 "><span className="bg-white/30 backdrop-blur-lg px-2 py-1 rounded-full">animeunwatched</span></p>
                    <img className="absolute bottom-0" src="assets/background/cyberpunk.png" alt="" />
                </div>

            </div>
        </div>
    );
}

export { ExploreAnimeCard };