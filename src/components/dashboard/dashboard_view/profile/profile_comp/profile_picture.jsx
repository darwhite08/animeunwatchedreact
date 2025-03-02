import React from "react";

function ProfileUserPicture(params) {
    return (
        <div >
            <img className="h-[250px] w-[275px]  rounded-[50px]" src="/assets/background/animeListBackground.jpg" alt="" />
        </div>
    );
}

function ProfileUserBackground(params) {
    return (
        <div className="h-72 w-full bg-[url('/assets/background/animeListBackground.jpg')] bg-cover">
        </div>
    )
}

export { ProfileUserPicture, ProfileUserBackground }