import React from "react";
import BestAnimeListHeading  from "./heading";
import UserBar from "../user/user-details";
import AnimeFlyer from "./flyer";
import BestAnimeListBody from "./bal-body/main";

function BestAnimeListPage() {
    return(
        <div className="px-10" >
           <BestAnimeListHeading/>
           <UserBar/>
           <AnimeFlyer/>
           <BestAnimeListBody/>

        </div>
    );
}

export default BestAnimeListPage;