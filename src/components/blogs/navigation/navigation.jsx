import React from "react";
import { Search ,UserRoundCheck,Star} from "lucide-react";

function BlogNavigation(params) {
    return(
        <div className="flex flex-row justify-between py-2">
         <div  className="flex flex-row  gap-4">
         <button type="button" class="font-bold py-2.5 px-5 me-2 mb-2 inline-flex items-center text-md text-center text-gray-900 focus:outline-none bg-white  hover:text-blue-700   "><span>Dic </span> <span className="pt-0.5"><Search size={15}/> </span> <span>ver</span></button>
         <button type="button" class="py-2.5 px-5 me-2 mb-2 inline-flex items-center gap-2 text-md text-center text-gray-900 focus:outline-none bg-white  hover:text-blue-700 0 "><span>Following</span> <span ><UserRoundCheck size={15}/> </span></button>
         </div>
         <div>
         <button type="button" class="py-2.5 px-5 me-2 mb-2 inline-flex items-center gap-2 text-md text-center text-gray-900 focus:outline-none bg-white  hover:text-blue-700   "><span>Favourites</span> <span ><Star size={15}/> </span></button>
         </div>
        </div>
    );
}

export default BlogNavigation;