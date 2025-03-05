import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const options = [
  { value: "US", label: "United States" },
  { value: "CA", label: "Canada" },
  { value: "FR", label: "France" },
  { value: "DE", label: "Germany" },
];

export default function DropdownFilter({ placeholder = "Choose an option" }) {
  const [selected, setSelected] = useState(null);
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  const filteredOptions = options.filter(option =>
    option.label.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="relative max-w-sm mx-auto">
      <button
        className="flex items-center justify-between w-full px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-md text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        onClick={() => setOpen(!open)}
      >
        <span>{selected ? selected.label : placeholder}</span>
        <ChevronDown className="w-5 h-5 text-gray-600 dark:text-gray-300" />
      </button>
      {open && (
        <div className="absolute w-full mt-2 bg-white border border-gray-300 rounded-lg shadow-lg dark:bg-gray-700 dark:border-gray-600">
          <input
            type="text"
            placeholder="Search..."
            className="w-full p-2 border-b border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <ul className="max-h-40 overflow-y-auto">
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option) => (
                <li
                  key={option.value}
                  className={`px-4 py-2 cursor-pointer hover:bg-blue-500 hover:text-white ${
                    selected?.value === option.value ? "bg-blue-500 text-white" : ""
                  }`}
                  onClick={() => {
                    setSelected(option);
                    setOpen(false);
                    setSearch("");
                  }}
                >
                  {option.label}
                </li>
              ))
            ) : (
              <li className="px-4 py-2 text-gray-500">No results found</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}
