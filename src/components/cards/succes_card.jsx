import { Link } from "react-router-dom";
import { Check,CircleDashed,X } from "lucide-react";

export default function SuccessModal({ isOpen, onClose, sucessMessage,failureMessage,file, button1, button2,value }) {
    if (!isOpen) return null; // Prevent rendering when not open
    const isDone = true;
    return (
        <div className="fixed -top-3 left-0 right-0 z-50  flex justify-center items-center w-full h-screen bg-black/30 backdrop-blur-sm bg-opacity-50">
            <div className="relative flex flex-col items-center p-4 w-full max-w-md bg-white rounded-lg shadow sm:p-5">

                {/* Close button */}
                <button
                    type="button"
                    className="absolute top-2.5 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5"
                    onClick={onClose}
                >
                    <svg
                        aria-hidden="true"
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clipRule="evenodd"
                        ></path>
                    </svg>
                    <span className="sr-only">Close modal</span>
                </button>

                {/* Success Icon */}
                <div className={`w-12 ${value ? "text-green-700 bg-green-100 " : "text-red-700 bg-red-100 " } h-12 rounded-full  p-2 flex items-center justify-center mx-auto mb-3.5`}>
                    {value ? <Check size={20}/> : <X size={20}/> }
                    <span className="sr-only">Success</span>
                </div>

                {/* Success Message */}
                <p className="mb-4 inline-flex gap-2 items-center text-lg font-semibold text-gray-900">
                {value ? <span>{sucessMessage}</span> : <span>{failureMessage} {" "}</span> }

                    <span className="bg-gray-200 py-1 px-2 text-xs rounded-lg text-gray-600">{file}</span>
                </p>
                <div className="flex text-sm gap-2 flex-col justify-start items-start w-full px-4 pb-8">
                    <p className="inline-flex justify-between w-52 gap-2"><span>Step 1: File creation</span> <span className={` p-1 rounded-full ${!isDone ? "text-red-800 bg-red-200" : "text-red-800 bg-red-200" } `}>{!isDone?<Check size={14}/>: <X size={14}/>}</span></p>
                    <p className="inline-flex justify-between w-52 gap-2"><span>Step 2: Heading creation</span>  <span className={` p-1 rounded-full ${!isDone ? "text-red-800 bg-red-200" : "text-red-800 bg-red-200" } `}>{!isDone?<Check size={14}/>: <CircleDashed size={14}/>}</span></p>
                    <p className="inline-flex justify-between w-52 gap-2"><span>Step 3: Content writing</span> <span className={` p-1 rounded-full ${!isDone ? "text-red-800 bg-red-200" : "text-red-800 bg-red-200" } `}>{!isDone?<Check size={14}/>: <CircleDashed size={14}/>}</span></p>
                    <p className="inline-flex justify-between  w-52 gap-2"><span>Step 4: publish </span><span className={` p-1 rounded-full ${!isDone ? "text-red-800 bg-red-200" : "text-red-800 bg-red-200" } `}> {!isDone?<Check size={14}/>: <CircleDashed size={14}/>}</span></p>
                </div>
                {/* Buttons */}
                <div className="flex flex-row gap-4">
                    <Link
                        to="/blog/postblogs/heading"
                        className="py-2 px-3 text-sm font-medium w-24 text-center text-blue-800 rounded-lg bg-blue-200 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300"
                    >
                        {button1 || "Continue"}
                    </Link>
                    <button
                        type="button"
                        className="py-2 px-3 text-sm font-medium w-24 text-center text-red-800 rounded-lg bg-red-200 hover:bg-red-300 focus:ring-4 focus:outline-none focus:ring-red-300"
                        onClick={onClose}
                    >
                        {button2 || "Close"}
                    </button>
                </div>
            </div>
        </div>
    );
}
