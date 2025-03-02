import React from "react";
import { IoInformationCircle, IoSettings } from "react-icons/io5";
import { MdWork, MdHomeWork } from "react-icons/md";
import { FaInstagram, FaFacebook, FaReddit, FaGoogleDrive } from "react-icons/fa";
import styled from 'styled-components';


function PersonalInformation(params) {
    return (
        <StyledWrapper>
            <div className=" px-10 py-10 bg-white mt-4 rounded-lg shadow-md shadow-gray-300 border-2 border-gray-300">
                <div className="pb-5 flex flex-row justify-between">
                    <div className="relative inline-block group">
                        <button className="relative sett9 text-2xl font-semibold ">
                            <span className="relative flex items-center gap-2">
                                Personal Information
                                <IoInformationCircle />
                            </span>
                        </button>
                        <div className="absolute invisible opacity-0 group-hover:visible group-hover:opacity-100 bottom-full left-1/2 -translate-x-1/2 mb-3 w-72 transition-all duration-300 ease-out transform group-hover:translate-y-0 translate-y-2">
                            <div className="relative p-4 bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-md rounded-2xl border border-white/10 shadow-[0_0_30px_rgba(79,70,229,0.15)]">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-500/20">
                                        <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-indigo-400">
                                            <path clipRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" fillRule="evenodd" />
                                        </svg>
                                    </div>
                                    <h3 className="text-sm font-semibold text-white">Important Information</h3>
                                </div>
                                <div className="space-y-2">
                                    <p className="text-sm text-gray-300">
                                        This is a tooltip with detailed information and custom styling.
                                    </p>
                                    <div className="flex items-center gap-2 text-xs text-gray-400">
                                        <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                                            <path clipRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fillRule="evenodd" />
                                        </svg>
                                        <span>Premium Feature</span>
                                    </div>
                                </div>
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500/10 to-purple-500/10 blur-xl opacity-50" />
                                <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-gradient-to-br from-gray-900/95 to-gray-800/95 rotate-45 border-r border-b border-white/10" />
                            </div>
                        </div>
                    </div>
                    <button className="settings-button">
                        <span className="settings-svg-icon text-violet-500"><IoSettings /></span>
                        <span className="lable">Settings</span>
                    </button>
                </div>
                <div className="flex flex-col md:flex-row gap-16 justify-between border-t-2 border-gray-300 py-8">
                    {/* Left Section */}
                    <div className="basis-full md:basis-1/2 flex flex-col gap-4">
                        <div>
                            <h1 className="text-lg font-semibold text-gray-800">Full Name</h1>
                            <p className="text-md text-gray-600">Priyanshu Chandra</p>
                        </div>
                        <div>
                            <h1 className="text-lg font-semibold text-gray-800">About Me</h1>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum sint tempore veniam laudantium commodi ex deserunt. Totam, dolores ducimus animi minima et sit possimus, corrupti vitae consequuntur, amet earum corporis.
                            </p>
                        </div>
                        <div>
                            <h1 className="text-lg font-semibold text-gray-800">Social</h1>
                            <div className="flex gap-4 text-xl pt-2">
                                <span className="text-red-600 hover:text-red-700"><FaInstagram /></span>
                                <span className="text-blue-600 hover:text-blue-700"><FaFacebook /></span>
                                <span className="text-orange-600 hover:text-orange-700"><FaReddit /></span>
                                <span className="text-blue-600 hover:text-blue-700"><FaGoogleDrive /></span>
                            </div>
                        </div>
                        <div>
                            <h1 className="text-lg font-semibold text-gray-800">Location</h1>
                            <p className="text-sm text-gray-600">India</p>
                        </div>
                        <div className="flex flex-wrap gap-4">
                            <div className="bg-yellow-300 px-6 py-4 rounded-lg text-yellow-800 font-bold">
                                <h1 className="inline-flex items-center gap-1">
                                    <span>Job Title</span> <MdWork />
                                </h1>
                                <div>F-adventurer</div>
                            </div>
                            <div className="bg-yellow-300 px-6 py-4 rounded-lg text-yellow-800 font-bold">
                                <h1 className="inline-flex items-center gap-1">
                                    <span>Guild</span> <MdHomeWork />
                                </h1>
                                <div>Adventurers</div>
                            </div>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="basis-full md:basis-1/2 flex flex-col gap-4">
                        <div>
                            <h1 className="text-lg font-semibold text-gray-800">Email Address</h1>
                            <p className="text-sm text-gray-600">Chandrapriyanshu10@gmail.com</p>
                        </div>
                        <div>
                            <h1 className="text-lg font-semibold text-gray-800">Birthdate</h1>
                            <p className="text-sm text-gray-600">[Your Birthdate]</p>
                        </div>
                        <div>
                            <h1 className="text-lg font-semibold text-gray-800">Phone Number</h1>
                            <p className="text-sm text-gray-600">[Your Phone Number]</p>
                        </div>
                        {/* Optional Section: IDs */}
                        <div>
                            <h1 className="text-lg font-semibold text-gray-800">User IDs</h1>
                            <div className="flex gap-2 flex-wrap">
                                <span className="bg-blue-300 text-xs py-1 px-2 rounded-full text-blue-800">
                                    animeunwatched/darwhite
                                </span>
                                <span className="bg-blue-300 text-xs py-1 px-2 rounded-full text-blue-800">
                                    userId: darwhite
                                </span>
                            </div>
                        </div>
                        <div>
                            <h1 className="text-lg font-semibold text-gray-800">Website</h1>
                            <p className="text-sm text-gray-600">[Your Personal or Professional Website]</p>
                        </div>
                    </div>
                </div>


            </div>
        </StyledWrapper>
    );
}
function name(params) {
    
}

const StyledWrapper = styled.div`
  .settings-button{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 6px 12px;
    gap: 8px;
    height: 36px;
    width: 120px;
    border: none;
    background: #5e41de33;
    border-radius: 20px;
    cursor: pointer;
  }

  .settings-button .lable {
    line-height: 20px;
    font-size: 17px;
    color: #5D41DE;
    font-family: sans-serif;
    letter-spacing: 1px;
  }

  .settings-button:hover {
    background: #5e41de4d;
  }

  .settings-button:hover .settings-svg-icon {
    animation: spin 2s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }`;

export default PersonalInformation; 