import React from "react";

function ReccomendationCard(params) {
 return(
    <div>
<div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96 p-6">
  <div className="flex items-center mb-4">
   
    <h5 className="ml-3 text-slate-800 text-xs bg-red-300 text-red-600 px-2 py-1 rounded-lg font-semibold">
      Trending
    </h5>
  </div>
  <p className="block text-slate-600 leading-normal font-light mb-4">
    Because it&apos;s about motivating the doers. Because I&apos;m here to follow my dreams and inspire others.
  </p>
  <div>
    <a href="#" className="text-slate-800 font-semibold text-sm hover:underline flex items-center">
      Learn More
      <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
      </svg>
    </a>
  </div>
</div>
    </div>
 )   
}

export {ReccomendationCard};