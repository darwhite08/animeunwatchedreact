import { div } from "framer-motion/client";
import React from "react";
import AnimeCountdownCard from "./countdown_cards/main";
import UniversalSearchBar from "../filters/search";
import StatusDropdownFilter from "../filters/twoselects";
import DropdownFilter from "../filters/selector";
import PaginationFilter from "../filters/pagination";

function AnimeCountDownPage(params) {
  return (
    <div className=" min-h-screen">
      <div className=" top-0 w-full ">
        <div className="px-10 pt-24">
          <h1 className="text-3xl uppercase font-bold mt-4">anime Countdown & Upcomming anime</h1>
        </div>
        {/* filters */}
        <div className="flex flex-row justify-center gap-4 mx-10 py-6 my-4 border-2 rounded-sm">
          <div>
            <UniversalSearchBar />
          </div>
          <div>
            <StatusDropdownFilter />
          </div>
          <div>
            <DropdownFilter />
          </div>
          <div>
            <DropdownFilter />
          </div>
          <div>
            <DropdownFilter />
          </div>
          <div className="ml-10">
            <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Apply</button>
            <button type="button" class="py-2.5 px-5  text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 ">Reset</button>
          </div>
        </div>
        <hr className="mt-5 mb-3 mx-10 h-0.5 bg-gray-100" />
        <div className="mx-10 bg-gray-200 rounded-lg">
          <AnimeCountdownCard />
          <AnimeCountdownCard />
        </div>
        <div className="px-10 py-3">
        <PaginationFilter/>
        </div>
      </div>
    </div>
  )
}


export default AnimeCountDownPage;