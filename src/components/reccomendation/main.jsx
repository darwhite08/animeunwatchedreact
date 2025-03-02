import React from "react";
import AnimeReccomendationSection from "./anime_reccomendation/ar_card";

function ReccomendationSection(params) {
    return (
        <div className="py-10 px-10 flex flex-row gap-4">
            <AnimeReccomendationSection/>
            <AnimeReccomendationSection/>
            <AnimeReccomendationSection/>
            <AnimeReccomendationSection/>
            <AnimeReccomendationSection/>
            <AnimeReccomendationSection/>
            <AnimeReccomendationSection/>

        </div>
    );
}

export default ReccomendationSection;