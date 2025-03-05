import { useState } from "react";
import { Link } from "react-router-dom";
import { Pen } from "lucide-react";
import SuccessModal from "../../cards/succes_card";


const BlogNavigationBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isAutherisedCreator, setIsAutherisedCreator] = useState(true);
    const [applyForCreator, SetApplyForCreator] = useState(false);
    const [modalOpen, setModalOpen] = useState(true)
    return (
        <div>
            <nav className="bg-white border-gray-200 border-b-2 w-full px-10 fixed z-50 top-0">
                <div className="flex flex-row justify-between items-center p-4 w-full">
                    <a className="self-center bg-red-400 px-4 rounded-full py-1 text-white text-sm font-medium flex items-center space-x-3" href="https://flowbite.com/" >
                        <span >animeunwatched </span>
                        <span>x</span>
                        <span>OtakuTales</span>
                    </a>
                    <div className="flex flex-row gap-6 items-center md:order-2">
                        <div>
                            <button
                                type="button"
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="md:hidden text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 rounded-lg text-sm p-2.5 me-1"
                            >
                                <svg
                                    className="w-5 h-5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M19 19l-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                    />
                                </svg>
                            </button>
                            <div className="relative hidden md:block">
                                <input
                                    type="text"
                                    className="block w-72 p-2 pl-10 text-sm text-red-900 border border-red-300 rounded-lg bg-red-50 focus:ring-blue-500 focus:border-blue-500 focus:outline-red-500 placeholder:text-red-300"
                                    placeholder="Search..."
                                />
                            </div>
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                            >
                                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M1 1h15M1 7h15M1 13h15"
                                    />
                                </svg>
                            </button>
                        </div>
                        <div className="">
                            {isAutherisedCreator ? <Link to="/blog/postblogs" type="button" class="inline-flex items-center gap-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 "><span>create post</span> <span><Pen size={15} /></span></Link> : <button onClick={() => { SetApplyForCreator(true) }} type="button" class="inline-flex items-center gap-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 "><span>create post</span> <span><Pen size={15} /></span></button>}
                        </div>
                        <div>
                            <Link to="/profile/user">
                                <img class="w-10 h-10 p-1 rounded-full ring-2 ring-green-500 " src="https://picsum.photos/200/300" alt="Bordered avatar" />
                            </Link>
                        </div>
                    </div>
                    <div className={` items-center justify-between w-full md:flex md:w-auto md:order-1 ${isMenuOpen ? "block" : "hidden"}`}>
                        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 md:flex-row md:mt-0 md:border-0 md:bg-white">
                            <li>
                                <Link to="/blog/home" className="block py-2 px-3 text-blue-700 rounded-sm md:bg-transparent md:p-0">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">
                                    animeunwatched
                                </Link>
                            </li>

                            <li>
                                <a href="#" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">
                                    News & Updates
                                </a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">
                                    Fan Theories
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {applyForCreator && <SuccessModal
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
                sucessMessage="Apply for creator"
                value="f"
                file="user/1234"
                button1="Apply"
                button2="Dismiss" />}
            
        </div>

    );
};

export default BlogNavigationBar;
