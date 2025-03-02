import React, { useEffect, useState } from "react";
import axios from "axios";

function AnimeDetailCard() {
    const [animeType, setAnimeType] = useState('isekai'); // Default type
    const [animeCategorys,setAnimeCategorys] = useState([])
    const [animeData, setAnimeData] = useState(null); // State for anime data
    const [loading, setLoading] = useState(true); // Loading state
    const [error, setError] = useState(null); // Error state
    useEffect(() => {
        const fetchAnimeData = async () => {
            try {
                setLoading(true); // Start loading
                const response = await axios.get(`/bestanimelist/${animeType.toLocaleLowerCase()}`);
                console.log(response.data);

                // Assuming animeData is an object, access it properly
                setAnimeData(response.data.animeList); // Assuming 'anime' is the key holding the array of anime
            } catch (error) {
                setError(error.message); // Set error message
            } finally {
                setLoading(false); // Stop loading
            }
        };

        fetchAnimeData();
    }, [animeType]); // Re-run effect when `animeType` changes

    // Loading and error handling
    if (loading) return <p>Loading anime details...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            {animeCategorys.map((animeCategory,index)=>(
                <div>
                    
                </div>
            ))}
            {animeData && animeData.length === 0 ? (
                <p>No anime data available.</p>
            ) : (
                animeData?.map((anime, index) => (
                    <div key={anime.id} className="flex flex-col mb-4 border-b-2 border-dashed border-gray-300">
                        {/* Anime Title */}
                        <div className="flex flex-row items-center gap-4 text-3xl font-bold py-2">
                            <span className="bg-blue-600 text-white py-2 px-4 rounded-lg">{index + 1}</span>
                            <h1 className="uppercase text-gray-700">{anime.anime_name}</h1>
                        </div>

                        {/* Trailer Link */}
                        <div className="py-4">
                            <iframe
                                className="rounded-lg"
                                width="100%"
                                height="500"
                                src={anime.youtube_link}
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                            ></iframe>
                        </div>

                        {/* Anime Details */}
                        <div className="pt-2">
                            <p className="text-sm text-justify">
                                {anime.anime_explanation || "Description not available for this anime."}
                            </p>
                        </div>

                        {/* Anime Note */}
                        <div className="bg-blue-900 py-4 px-4 rounded-lg text-white flex flex-row">
                            <p className="font-bold mr-2">Note:</p>
                            <p>{anime.note || "No additional notes available."}</p>
                        </div>
                        <div className="pt-2">
                            <ul className=" flex flex-wrap gap-2 text-xs text-gray-600 mt-4">
                                <li className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 ">Rating: {anime.anime_rating}</li>
                                <li className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 ">Released: {anime.year_released}</li>
                                <li className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 ">Seasons: {anime.total_seasons}</li>
                                <li className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 ">Episodes: {anime.total_episodes}</li>
                                <li className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 ">Status: {anime.status}</li>
                                <li className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 ">Available On: {anime.available_on}</li>
                                <li className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 ">Popularity: {anime.popularity}</li>
                            </ul>
                        </div>
                        {/* Anime Actions */}
                        <div className="flex flex-row gap-2 py-6">
                            <button
                                type="button"
                                className="py-2.5 px-5 mb-2 text-sm font-medium text-white bg-black rounded-lg"
                            >
                                Watch on Netflix
                            </button>
                            <button
                                type="button"
                                className="py-2.5 px-5 mb-2 text-sm font-medium text-white bg-black rounded-lg"
                            >
                                Join Discussion
                            </button>
                            <button
                                type="button"
                                className="py-2.5 px-5 mb-2 text-sm font-medium text-white bg-black rounded-lg"
                            >
                                +
                            </button>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
}

export default AnimeDetailCard;
