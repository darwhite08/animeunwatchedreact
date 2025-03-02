import { useState } from "react";
import { SideGraidentButton } from "../../../../buttons/stylish_buttons";
import SuccessModal from "../../../../cards/succes_card";

export default function CreateBlogPostFileNameInput() {
  const [inputValue, setInputValue] = useState("");
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const folderName = "foldername/";
  const [modalOpen, setModalOpen] = useState(false);

  const handleSave = () => {
    setIsOverlayOpen(true);
    setModalOpen(true)
  };

  return (
    <div className=" flex flex-col space-y-3 border-2 px-10 w-full py-10 rounded-lg">
      {inputValue && (
        <p className="text-sm font-medium text-gray-700">{folderName} <span className="text-red-400">{inputValue}</span></p>
      )}
      <div className="flex space-x-3">
        <input
          type="text"
          className="py-3 px-4 block w-full border-gray-200 border-2 rounded-lg text-sm outline-none focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
          placeholder="Enter file name"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <SideGraidentButton buttonName="save" onClick={handleSave} />
      </div>
      {isOverlayOpen && (
       <SuccessModal   isOpen={modalOpen}
       onClose={() => setModalOpen(false)}
       message="MyNewBlogPost"
       button1="Go to Blog"
       button2="Dismiss"/>
      )}
    </div>
  );
}
