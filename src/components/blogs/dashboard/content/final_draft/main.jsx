import { FileText, Image } from "lucide-react";

export default function ReviewDocument() {
    return (
        <div className=" min-h-screen">
            <div className=" mx-auto bg-white border-2 rounded-lg p-6">
                {/* Header */}
                <div className="flex justify-between items-center border-b pb-4 mb-4">
                    <div className="text-sm text-gray-500">
                        <span className="font-medium">Work / Reviews /</span> My Review Document
                    </div>
                    <button className="bg-black text-white px-4 py-2 rounded">Publish</button>
                </div>
                <div className="relative h-56 bg-gray-100 p-6 rounded-lg mb-6 bg-[url('/public/assets/background/animeListBackground.jpg')] bg-contain">
                    <div className="absolute -bottom-6 left-4 bg-gray-200 p-3 rounded-full shadow">
                        <FileText size={20} className="text-gray-900" />
                    </div>
                    <div className=" absolute top-16 text-white  left-[50%] p-4 ">
                        <Image size={50} />
                    </div>
                </div>
                {/* Document Header */}
                <h1 className="text-2xl font-bold mb-2">My Review Document</h1>
                <p className="text-gray-500 text-sm mb-4">
                    Created 17 days ago - Last modified 17 hours ago
                </p>

                {/* Tags */}
                <div className="flex space-x-2 mb-6">
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs">Document Tag</span>
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs">Notes</span>
                    <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs">Review Doc</span>
                </div>
                <div className="flex flex-row gap-6">
                    <div className="basis-5/6">
                        {/* Subtitle & Content */}
                        <h2 className="text-xl font-semibold mb-2">Sub Title here</h2>
                        <p className="text-gray-700 mb-4">
                            Design Thinking: Design, at its core, is about solving problems and enhancing user experiences. Design thinking, a human-centered approach, emphasizes empathy, collaboration, and prototyping to create products that truly resonate with users...
                        </p>
                        <p className="text-gray-700 mb-4">
                            Design Thinking: Design, at its core, is about solving problems and enhancing user experiences. Design thinking, a human-centered approach, emphasizes empathy, collaboration, and prototyping to create products that truly resonate with users...
                        </p>
                        <p className="text-gray-700 mb-4">
                            Design Thinking: Design, at its core, is about solving problems and enhancing user experiences. Design thinking, a human-centered approach, emphasizes empathy, collaboration, and prototyping to create products that truly resonate with users...
                        </p>
                        <p className="text-gray-700 mb-4">
                            Design Thinking: Design, at its core, is about solving problems and enhancing user experiences. Design thinking, a human-centered approach, emphasizes empathy, collaboration, and prototyping to create products that truly resonate with users...
                        </p>
                        {/* Quote Section */}
                        <div className="bg-gray-50 border-l-4 border-green-500 p-4 mb-6">
                            <p className="text-gray-800 font-medium">
                                "In today’s fast-paced and ever-evolving world, the fusion of design and technology plays a pivotal role in shaping the products we use daily."
                            </p>
                        </div>
                    </div>
                    {/* Sidebar */}
                    <div className="basis-1/6 flex flex-col gap-6 border-l-2 pl-6">
                        {/* Linked Docs */}
                        <div>
                            <h3 className="font-semibold mb-2">Linked Docs</h3>
                            <div className="flex items-center text-gray-700 space-x-2 mb-2">
                                <FileText size={18} /> <span>Name_of_document_here.pdf</span>
                            </div>
                            <div className="flex items-center text-gray-700 space-x-2">
                                <FileText size={18} /> <span>Name_of_another_thing_here.pdf</span>
                            </div>
                        </div>

                        {/* Contributors */}
                        <div>
                            <h3 className="font-semibold mb-2">Contributors</h3>
                            <div className="space-y-2">
                                {['Beth Lemke', 'Brittany Fisher', 'Gertrude Gottlieb Jr.', 'Alfredo Prosacco'].map((name, index) => (
                                    <div key={index} className="flex items-center space-x-2">
                                        <div className="h-6 w-6 bg-gray-300 rounded-full"></div>
                                        <span className="text-gray-700">{name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
