import React, { useEffect, useState } from "react";
import { Flame } from "lucide-react";

const animeList = [
    {
        title: "Solo Leveling Season 2: Arise from the Shadow",
        subtitle: "Ore dake Level Up na Ken: Arise from the Shadow",
        episode: "Episode 10",
        timeLeft: 4 * 24 * 3600 + 1 * 3600 + 7 * 60 + 4,
        image: "https://picsum.photos/200/300",
        popularity: null,
    },
    {
        title: "Eiga Doraemon: Nobita no E Sekai Monogatari",
        subtitle: "Movie",
        episode: "",
        timeLeft: 2 * 24 * 3600 + 1 * 3600 + 7 * 60 + 4,
        image: "https://picsum.photos/200/300",
        popularity: "4%",
    },
    {
        title: "A Terrified Teacher at Ghoul School!",
        subtitle: "Youkai Gakkou no Sensei Hajimemashita!",
        episode: "Episode 21",
        timeLeft: 7 * 60 + 4,
        image: "https://picsum.photos/200/300",
        popularity: null,
    },
    {
        title: "Sakamoto Days",
        subtitle: "",
        episode: "Episode 10",
        timeLeft: 4 * 24 * 3600 + 7 * 60 + 4,
        image: "https://picsum.photos/200/300",
        popularity: null,
    },
    {
        title: "Kono Subarashii Sekai ni Shukufuku o! 3 Bonus Stage",
        subtitle: "",
        episode: "Episode 1",
        timeLeft: 10 * 24 * 3600 + 37 * 60 + 4,
        image: "https://picsum.photos/200/300",
        popularity: "50%",
    },
    {
        title: "Unnamed Memory Season 2",
        subtitle: "Unnamed Memory Act.2",
        episode: "Episode 9",
        timeLeft: 37 * 60 + 4,
        image: "https://picsum.photos/200/300",
        popularity: null,
    },
];

export default function AnimeCountdown() {
    const [timers, setTimers] = useState(animeList.map((anime) => anime.timeLeft));

    useEffect(() => {
        const interval = setInterval(() => {
            setTimers((prevTimers) =>
                prevTimers.map((time) => (time > 0 ? time - 1 : 0))
            );
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const formatTime = (seconds) => {
        const days = Math.floor(seconds / (24 * 3600));
        const hours = Math.floor((seconds % (24 * 3600)) / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;
        return { days, hours, minutes, secs };
    };

    return (
        <div className="grid grid-cols-2 gap-4 p-4 text-white ">
            {animeList.map((anime, index) => {
                const { days, hours, minutes, secs } = formatTime(timers[index]);
                return (
                    <div key={index} className=" bg-white text-black  border-2 border-gray-300 shadow-lg  p-4 rounded-lg flex items-center">
                        <img
                            src={anime.image}
                            alt={anime.title}
                            className="w-28 h-40 object-cover rounded-lg mr-4"
                        />
                        <div className="flex-1 relative">
                            <h2 className="text-lg font-bold">{anime.title}</h2>
                            <p className="text-sm text-gray-400">{anime.subtitle}</p>
                            <p className="text-sm text-gray-400">{anime.episode}</p>
                            <div className="flex flex-row gap-10 justify-between items-center mt-2">
                                <div class="flex items-start justify-between w-min mt-4 gap-3 ">
                                    <div class="w-10">
                                        <div className="">
                                            <h3 className="countdown-element days font-manrope font-semibold text-lg text-indigo-600 text-center">
                                                {days}
                                            </h3>
                                        </div>
                                        <p className="text-sm font-normal text-gray-900 mt-1 text-center w-full">days</p>
                                    </div>
                                    <h3 className="font-manrope font-semibold text-lg text-gray-900">:</h3>
                                    <div class="timer w-10">
                                        <div
                                            class="">
                                            <h3 className="countdown-element hours font-manrope font-semibold text-lg text-indigo-600 text-center">
                                                {hours}
                                            </h3>
                                        </div>
                                        <p className="text-sm font-normal text-gray-900 mt-1 text-center w-full">hours</p>
                                    </div>
                                    <h3 className="font-manrope font-semibold text-lg text-gray-900">:</h3>
                                    <div class="timer w-10">
                                        <div
                                            class="">
                                            <h3
                                                className="countdown-element minutes font-manrope font-semibold text-lg text-indigo-600 text-center">
                                                {minutes}
                                            </h3>
                                        </div>
                                        <p className="text-sm font-normal text-gray-900 mt-1 text-center w-full">minutes</p>
                                    </div>
                                    <h3 class="font-manrope font-semibold text-lg text-gray-900">:</h3>
                                    <div class="timer w-10">
                                        <div
                                            class="">
                                            <h3
                                                className="countdown-element seconds font-manrope font-semibold text-lg  text-indigo-600 text-center"
                                            >
                                                {secs}
                                            </h3>
                                        </div>
                                        <p className="text-sm font-normal text-gray-900 mt-1 text-center w-full">seconds</p>
                                    </div>
                                </div>
                                <div className="grid grid-cols-3 gap-2 mt-4">
                                    <span class="text-center bg-blue-200 text-blue-900 font-medium text-xs font-medium px-2.5 py-0.5 rounded-md ">season 1</span>
                                    <span class="text-center bg-gray-200 text-gray-900 font-medium text-xs font-medium px-2.5 py-0.5 rounded-md ">netflix</span>
                                    <span class="text-center bg-red-200 text-red-900 font-medium text-xs font-medium px-2.5 py-0.5 rounded-md ">new</span>
                                    <span class="text-center bg-green-200 text-green-900 font-medium text-xs font-medium px-2.5 py-0.5 rounded-md ">adventure</span>
                                    <span class="text-center bg-yellow-200 text-yellow-900 font-medium text-xs font-medium px-2.5 py-0.5 rounded-md ">action</span>
                                    <span class="text-center bg-indigo-200 text-indigo-900 font-medium text-xs font-medium px-2.5 py-0.5 rounded-md ">isekai</span>
                                </div>
                                {anime.popularity && (
                                    <div className="flex absolute top-0 right-0  items-center text-orange-500">
                                        {anime.popularity} <Flame className="ml-1 w-4 h-4" />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
