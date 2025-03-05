import React, { useState } from "react";

export default function PaginationFilter({ totalPages = 8, currentPage = 1, onPageChange }) {
  const [page, setPage] = useState(currentPage);

  const changePage = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
      if (onPageChange) onPageChange(newPage);
    }
  };

  return (
    <div className="grid justify-center sm:flex sm:justify-between sm:items-center gap-1">
      <nav className="flex items-center gap-x-1" aria-label="Pagination">
        <button
          type="button"
          className="min-h-9.5 min-w-9.5 py-2 px-2.5 inline-flex justify-center items-center gap-x-2 text-sm rounded-lg text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
          onClick={() => changePage(page - 1)}
          disabled={page === 1}
          aria-label="Previous"
        >
          <svg className="shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m15 18-6-6 6-6"></path>
          </svg>
        </button>
        <div className="flex items-center gap-x-1">
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index + 1}
              type="button"
              className={`min-h-9.5 min-w-9.5 flex justify-center items-center py-2 px-3 text-sm rounded-lg focus:outline-none focus:bg-gray-300 ${
                page === index + 1 ? "bg-gray-200 text-gray-800" : "text-gray-800 hover:bg-gray-100"
              }`}
              onClick={() => changePage(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
        <button
          type="button"
          className="min-h-9.5 min-w-9.5 py-2 px-2.5 inline-flex justify-center items-center gap-x-2 text-sm rounded-lg text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
          onClick={() => changePage(page + 1)}
          disabled={page === totalPages}
          aria-label="Next"
        >
          <svg className="shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m9 18 6-6-6-6"></path>
          </svg>
        </button>
      </nav>
      
      <div className="relative inline-flex justify-center sm:justify-start">
        <button
          type="button"
          className="py-1.5 px-2 inline-flex items-center gap-x-1 text-sm rounded-lg border border-gray-200 text-gray-800 shadow-md hover:bg-gray-50 focus:outline-none focus:bg-gray-100"
        >
          {page} page
          <svg className="shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m6 9 6 6 6-6"></path>
          </svg>
        </button>
        <div className="absolute mt-2 bg-white shadow-md rounded-lg p-1 w-32 hidden group-hover:block">
          {[5, 8, 10].map((num) => (
            <button
              key={num}
              type="button"
              className="w-full flex items-center py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
              onClick={() => changePage(num)}
            >
              {num} page
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
