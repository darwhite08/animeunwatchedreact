import React, { Suspense } from "react";
import SquareSocialButton from '../../../socials/follow_us_card'
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { PlayCircle, Clock, List, Star } from "lucide-react";


function HeroSectionComp(params) {
    return (

        <div>
    
            <section className="relative h-screen w-full flex flex-col items-center justify-center bg-black text-white overflow-hidden">
                <Canvas className="absolute top-0 left-0 w-full h-full">
                    <Stars radius={200} depth={100} count={8000} factor={6} saturation={0} fade />
                    <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.8} />
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 10]} intensity={2} />
                </Canvas>
                <div className="absolute z-10 max-w-6xl mx-auto text-center animate-fade-in">
                        <div className="relative min-h-screen ">
                    <div className="pt-24">
                        <div className="flex flex-col items-center py-10">
        
                            <p className="text-gray-600 border border-blue-200 px-4 py-1 rounded-full bg-white font-medium">anime unwatched</p>
                            <div className="flex flex-col pt-2 items-center text-center justify-center gap-2 w-10/12 ">
                                <h1 className="text-8xl block font-bold p-4 text-center font-bold from-black via-white to-black bg-gradient-to-r  bg-clip-text text-transparent uppercase outline-4 outline-white  ">
                                    <span>A Universe of </span>
                                    <span>Stories Waiting to </span>
                                    <span>be Unlocked.</span>
                             
                                      </h1>
                                <p className="text-xs px-24 font-bold text-white opacity-[0.2] ">Every episode is a new adventure, every season a new world—your next favorite anime is just a click away, waiting for you to unlock its secrets.</p>
                            </div>
                            <div className="py-10 flex flex-row gap-2">
                                <button type="button" class="py-2.5 px-10 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 "> Watch Your Next Favorite</button>
                                <button type="button" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-10 py-2.5 me-2 mb-2 ">Start Your Journey</button>
                            </div>
                            <div className=" absolute bottom-20 -right-36 backdrop-blur-3xl ">
                                <SquareSocialButton />
                            </div>
                        </div>
                    </div>
                </div> 
                </div>
            </section>
        </div>
    );
}

export default HeroSectionComp;