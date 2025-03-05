import React, { useState } from "react";
import { ChevronDown, Check } from "lucide-react";

const options = [
  {
    label: "Published",
    description: "This job posting can be viewed by anyone who has the link.",
  },
  {
    label: "Draft",
    description: "This job posting will no longer be publicly accessible.",
  },
];

export default function StatusDropdownFilter() {
  const [selected, setSelected] = useState(options[0]);
  const [open, setOpen] = useState(false);

  return (
    <div className="relative w-64">
      <button
        className="flex items-center justify-between w-full px-4 py-2 bg-indigo-600 text-white rounded-md"
        onClick={() => setOpen(!open)}
      >
        <span className="flex items-center space-x-2">
          <Check className="w-4 h-4" />
          <span>{selected.label}</span>
        </span>
        <ChevronDown className="w-4 h-4" />
      </button>
      {open && (
        <div className="absolute mt-2 w-full bg-white border rounded-lg shadow-lg overflow-hidden">
          {options.map((option, index) => (
            <div
              key={index}
              className={`p-3 cursor-pointer ${
                selected.label === option.label ? "bg-indigo-500 text-white" : "hover:bg-gray-100"
              }`}
              onClick={() => {
                setSelected(option);
                setOpen(false);
              }}
            >
              <div className="flex justify-between items-center">
                <span className="font-semibold">{option.label}</span>
                {selected.label === option.label && <Check className="w-4 h-4" />}
              </div>
              <p className="text-sm text-gray-600 mt-1">{option.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
