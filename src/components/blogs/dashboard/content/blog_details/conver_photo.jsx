import { useEffect, useState } from "react";
import axios from "axios";

function BlogCoverPhotoUpload() {
  const [files, setFiles] = useState([]);
  const [uploadProgress, setUploadProgress] = useState({});
  const [uploaded, setUploaded] = useState(false);

  // Alert when files change (previous useEffect issue)
  useEffect(() => {
    alert("workign")
  }, [files]);

  const handleFileChange = (event) => {
    const selectedFiles = Array.from(event.target.files);
    const newFiles = selectedFiles.filter(
      (file) => !files.some((existingFile) => existingFile.name === file.name)
    );
    setFiles((prevFiles) => [...prevFiles, ...newFiles]);
    uploadFiles(newFiles);
  };

  const uploadFiles = (files) => {
    files.forEach((file) => {
      setUploadProgress((prev) => ({ ...prev, [file.name]: 0 }));

      const interval = setInterval(() => {
        setUploadProgress((prev) => {
          const progress = prev[file.name] + 10;
          if (progress >= 100) {
            clearInterval(interval);
            setUploaded(true);
          }
          return { ...prev, [file.name]: progress };
        });
      }, 300);
    });
  };

  const removeFile = (fileName) => {
    setFiles((prevFiles) => prevFiles.filter((file) => file.name !== fileName));
    setUploadProgress((prev) => {
      const updatedProgress = { ...prev };
      delete updatedProgress[fileName];
      return updatedProgress;
    });
  };

  const destroyUpload = () => {
    setFiles([]);
    setUploadProgress({});
    setUploaded(false);
  };

  const saveCoverPhoto = async () => {
    if (files.length === 0) {
      alert("No files selected.");
      return;
    }

    const formData = new FormData();
    files.forEach((file) => formData.append("coverPhotos", file));

    try {
      const response = await axios.post("/api/blog/coverphoto/save", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (response.status === 200) {
        alert("Cover photo uploaded successfully!");
        destroyUpload();
      }
    } catch (error) {
      console.error("Upload failed:", error);
      alert("Failed to upload cover photo.");
    }
  };

  const isImage = (file) => file.type.startsWith("image/");

  return (
    <div className="p-6">
      <div className="cursor-pointer p-12 flex justify-center bg-white border border-dashed border-gray-300 rounded-xl">
        <div className="text-center">
          <label className="cursor-pointer">
            <input
              type="file"
              multiple
              className="hidden"
              onChange={handleFileChange}
            />
            <span className="inline-flex justify-center items-center size-16 bg-gray-100 text-gray-800 rounded-full">
              <svg
                className="shrink-0 size-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="17 8 12 3 7 8"></polyline>
                <line x1="12" x2="12" y1="3" y2="15"></line>
              </svg>
            </span>
            <div className="mt-4 flex flex-wrap justify-center text-sm leading-6 text-gray-600">
              <span className="pe-1 font-medium text-gray-800">
                Drop your file here or
              </span>
              <span className="text-blue-600 font-semibold hover:underline">
                browse
              </span>
            </div>
            <p className="mt-1 text-xs text-gray-400">Pick a file up to 2MB.</p>
          </label>
        </div>
      </div>

      <div className="mt-4 space-y-2">
        {files.map((file) => {
          const fileURL = URL.createObjectURL(file);
          return (
            <div key={file.name} className="p-3 bg-white border border-gray-300 rounded-xl">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-x-3">
                  <span className="size-10 flex justify-center items-center border border-gray-200 text-gray-500 rounded-lg">
                    {isImage(file) ? (
                      <img
                        src={fileURL}
                        alt={file.name}
                        className="w-10 h-10 rounded-lg object-cover cursor-pointer"
                        onClick={() => window.open(fileURL, "_blank")}
                        onLoad={() => URL.revokeObjectURL(fileURL)}
                      />
                    ) : (
                      "📄"
                    )}
                  </span>
                  <div>
                    <p className="text-sm font-medium text-gray-800">{file.name}</p>
                    <p className="text-xs text-gray-500">{(file.size / 1024).toFixed(2)} KB</p>
                  </div>
                </div>
                <button
                  type="button"
                  className="text-gray-500 hover:text-gray-800"
                  onClick={() => removeFile(file.name)}
                >
                  ❌
                </button>
              </div>
              <div className="flex items-center gap-x-3 whitespace-nowrap">
                <div className="w-full h-2 bg-gray-200 rounded-full">
                  <div
                    className={`h-2 rounded-full ${uploaded ? "bg-green-500" : "bg-blue-600"}`}
                    style={{ width: `${uploadProgress[file.name]}%` }}
                  ></div>
                </div>
                <span className="text-sm text-gray-800">{uploadProgress[file.name]}%</span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex gap-2 mt-4">
        <button
          type="button"
          className="py-1 px-2 text-sm border border-gray-200 bg-white text-gray-800 rounded-lg hover:bg-gray-50"
          onClick={destroyUpload}
        >
          Destroy file upload
        </button>
      </div>
      <div className="text-end">
        <button
          onClick={saveCoverPhoto}
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
        >
          Save
        </button>
      </div>
    </div>
  );
}

export default BlogCoverPhotoUpload;
