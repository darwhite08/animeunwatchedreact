import React from "react";
import BestAnimeListHeading  from "./heading";
import UserBar from "../user/user-details";
import BestAnimeListFeed from "./flyer";
import BestAnimeListBody from "./bal-body/main";

function BestAnimeListPage() {
    return(
        <div className="px-10" >
            <div className="mt-24">
           <BestAnimeListFeed/>
            </div>
           <BestAnimeListBody/>
        </div>
    );
}

export default BestAnimeListPage;