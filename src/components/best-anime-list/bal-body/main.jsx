import React from "react";
import AnimeDetailCard from "./anime-details/anime-details-card";
import { AnimeContext } from "../heading";
import { ReccomendationCard } from "../../reccomendation/blog_reccomendation/reccomendation_card";
import styled from "styled-components";



const StyledWrapper = styled.div`
/* For the entire scrollbar */
.scrollbar::-webkit-scrollbar {
  width: 0px; /* Width of the scrollbar */
}`;


function BestAnimeListBody() {
    return (
        <StyledWrapper>
            <div className="">
                <div className=" static flex flex-row justify-between gap-4">
                    <div className="basis-3/4 px-10">
                        <AnimeContext />
                        <AnimeDetailCard />
                    </div>
                    <div className="scrollbar sticky top-0 max-h-screen overflow-y-scroll top-0 left-0 bg-gray-100 py-2 px-10 -mr-10">
                        <div className="flex flex-row mt-4 bg-white justify-between items-center px-4 py-2 rounded-xl">
                            <h1 className="font-bold text-blue-600">Reccomended</h1>
                            <img className="h-8" src="/assets/icons/fire.gif" alt="" srcset="" />
                        </div>
                        <div>
                        <ReccomendationCard />
                        <ReccomendationCard />
                        <ReccomendationCard />
                        <ReccomendationCard />
                        <ReccomendationCard />
                        <ReccomendationCard />
                        </div>
                    </div>
                </div>
            </div>
        </StyledWrapper>
    );
}

export default BestAnimeListBody; 