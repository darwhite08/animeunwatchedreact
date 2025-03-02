import React from "react";
import { Info } from "lucide-react";

function StreakCard() {
    const days = ["M", "T", "W", "T", "F", "S", "S"];
    const streakData = [true, true, true, false, true, false, false]; // Simulating streak history

    return (
        <div className="max-w-md mx-auto bg-green-200 text-green-600 rounded-2xl shadow-md p-6 text-center flex flex-col items-center">
            {/* streak */}
            <div className="w-full mb-3 mx-auto bg-white rounded-2xl p-6 relative">
                {/* Header Section */}
                <div className="absolute top-4 right-4 text-gray-400 cursor-pointer">
                    <Info size={18} />
                </div>

                {/* Streak Info */}
                <div className="flex items-center space-x-4">
                    {/* Streak Icon */}
                    <div className="w-12 h-12 bg-red-100 flex items-center justify-center rounded-full">
                        <span className="text-red-500 text-2xl">🔥</span>
                    </div>

                    {/* Streak Count */}
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900">19</h2>
                        <p className="text-gray-500 text-sm">day streak</p>
                    </div>
                </div>

                {/* Streak Progress */}
                <div className="flex justify-between items-center mt-6">
                    {days.map((day, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <div
                                className={`w-8 h-8 flex items-center justify-center rounded-full transition-all duration-300 ${streakData[index] ? "bg-green-500 text-green-900" : "bg-gray-300 text-gray-600"
                                    }`}
                            >
                                {streakData[index] ? "✔" : "○"}
                            </div>
                            <span className="text-gray-500 text-xs mt-1">{day}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Title */}
            <h2 className="text-2xl font-bold mb-2">You've been inducted into the Streak Society!</h2>
        </div>
    );
}

export default StreakCard;
