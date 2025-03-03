import { useState } from "react";
import { MoreVertical } from "lucide-react";
import SuccessModal from "../../../../cards/succes_card";
import axios from "axios";

const FileListCard = ({ folderName }) => {
    const [files, setFiles] = useState([
        "document1.pdf",
        "report.docx",
        "image.png",
        "notes.txt",
    ]);
    const [selectedFile, setSelectedFile] = useState(null);
    const [editingFile, setEditingFile] = useState(null);
    const [newFileName, setNewFileName] = useState("");
    const [deleteFile, setDeleteFile] = useState(null);
    const [menuOpen, setMenuOpen] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);


    const handleEdit = (file) => {
        setEditingFile(file);
        setNewFileName(file);
        setMenuOpen(null);
    };

    const handleEditSubmit = async () => {
        setFiles(files.map(f => (f === editingFile ? newFileName : f)));
        setEditingFile(null);
        try {
            const req = await axios.post('/api/blog/editpostfile', { newFileName })
        } catch (error) {

        }
    };

    const handleDelete = (file) => {
        setDeleteFile(file);
        setMenuOpen(null);
    };

    const confirmDelete = async() => {
        setFiles(files.filter(f => f !== deleteFile));
        setDeleteFile(null);
    };
    const handleEditBlog = async(file) => {
        setModalOpen(true);
        try {
            const req = await axios.get(`/api/blog/edit/a`,)
        } catch (error) {
            
        }
    }

    return (
        <div className="w-full rounded-lg py-4 ">
            <div className=" flex flex-row justify-between items-center w-full mb-4">
                <h2 className="text-lg font-semibold  inline-flex items-center gap-2">Folder: <span className="bg-gray-300 font-medium text-gray-600 text-xs rounded-lg px-3 py-0.5">{folderName}</span></h2>
                <button className="block px-4 py-1 bg-red-200 rounded-lg text-red-800 ">Delete Folder</button>
            </div>
            <div className="border border-2 w-full p-4 rounded-lg">
                <ul className="space-y-2 grid grid-cols-3 gap-4 items-center justify-center ">
                    {files.map((file) => (
                        <li
                            key={file}
                            className={`flex flex-row w-full h-14 justify-between items-center p-2 border rounded cursor-pointer ${selectedFile === file ? "bg-gray-200" : ""}`}
                            onClick={() => setSelectedFile(file)}
                        >
                            <span>{file}</span>
                            <div className="relative">
                                <button onClick={() => setMenuOpen(menuOpen === file ? null : file)} className="p-1">
                                    <MoreVertical className="h-5 w-5" />
                                </button>
                                {menuOpen === file && (
                                    <div className="absolute right-0 mt-2 w-32 bg-white border shadow-md rounded">
                                        <button className="block w-full px-4 py-2 text-left hover:bg-gray-100" onClick={() => handleEdit(file)}>Edit</button>
                                        <button className="block w-full px-4 py-2 text-left hover:bg-gray-100" onClick={() => handleDelete(file)}>Delete</button>
                                    </div>
                                )}
                            </div>
                        </li>
                    ))}
                </ul>
                {selectedFile && (
                    <button className="mt-4 w-full bg-blue-500 text-white px-4 py-2 rounded" onClick={() => handleEditBlog(selectedFile)}>
                        Edit Blog
                    </button>
                )}

                {editingFile && (
                    <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
                        <div className="bg-white p-4 rounded shadow-lg w-80">
                            <h2 className="text-lg font-semibold">Edit File Name</h2>
                            <input
                                type="text"
                                className="w-full border p-2 rounded mt-2"
                                value={newFileName}
                                onChange={(e) => setNewFileName(e.target.value)}
                            />
                            <div className="flex justify-end mt-4">
                                <button className="bg-gray-300 px-4 py-2 rounded mr-2" onClick={() => setEditingFile(null)}>Cancel</button>
                                <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleEditSubmit}>Save</button>
                            </div>
                        </div>
                    </div>
                )}

                {deleteFile && (
                    <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
                        <div className="bg-white p-4 rounded shadow-lg w-80">
                            <h2 className="text-lg font-semibold">Are you sure you want to delete {deleteFile}?</h2>
                            <div className="flex justify-end mt-4">
                                <button className="bg-gray-300 px-4 py-2 rounded mr-2" onClick={() => setDeleteFile(null)}>Cancel</button>
                                <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={confirmDelete}>Delete</button>
                            </div>
                        </div>
                    </div>
                )}
                {modalOpen && <SuccessModal
                    isOpen={modalOpen}
                    onClose={() => setModalOpen(false)}
                    sucessMessage="Are you sure to edit file"
                    value="k"
                    file={selectedFile}
                    button1="Continue"
                    button2="Dismiss" />}
            </div>
        </div>

    );
};

export default FileListCard;
