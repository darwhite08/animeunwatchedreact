import { useEffect, useState } from "react";
import { SideGraidentButton } from "../../../../buttons/stylish_buttons";
import SuccessModal from "../../../../cards/succes_card";
import axios from "axios";

export default function CreateBlogPostFileNameInput() {
  const [fileName, setFileName] = useState("");
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const folderName = "foldername/";
  const [modalOpen, setModalOpen] = useState(false);
  const [fileCreationStatus,setFileCreationStatus] = useState(false);

  const handleSave = async () => {
    setIsOverlayOpen(true);
    setModalOpen(true)
    try {
      const res = await axios.post("/api/blog/createpostfile", { fileName });
      setFileCreationStatus(res.data.status);
    } catch (error) {
      console.error("Error creating post file:", error);
      setFileCreationStatus(false)
    }
  };

  return (
    <div className=" flex flex-col space-y-3 border-2 px-10 w-full py-10 rounded-lg">
      {fileName && (
        <p className="text-sm font-medium text-gray-700">{folderName} <span className="text-red-400">{fileName}</span></p>
      )}
      <div className="flex space-x-3">
        <input
          type="text"
          className="py-3 px-4 block w-full border-gray-200 border-2 rounded-lg text-sm outline-none focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
          placeholder="Enter file name"
          value={fileName}
          onChange={(e) => setFileName(e.target.value)}
        />
        <SideGraidentButton buttonName="save" onClick={handleSave} />
      </div>
      {isOverlayOpen && (
        <SuccessModal isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          value={fileCreationStatus}
          message={fileCreationStatus ? fileName : "no file was created"}
          button1="Go to Blog"
          button2="Dismiss" />
      )}
    </div>
  );
}
