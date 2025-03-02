import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const MaintenancePage = (params) => {
  const calculateTimeLeft = () => {
    const dest = new Date("Mar 31, 2024 23:59:59").getTime();
    const now = new Date().getTime();
    const diff = dest - now;

    if (diff <= 0) {
      return {
        days: "20",
        hours: "20",
        minutes: "20",
        seconds: "20",
      };
    }

    const days = String(Math.floor(diff / (1000 * 60 * 60 * 24))).padStart(2, "0");
    const hours = String(Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, "0");
    const minutes = String(Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, "0");
    const seconds = String(Math.floor((diff % (1000 * 60)) / 1000)).padStart(2, "0");

    return { days, hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 max-h-screen bg-gray-100  relative flex flex-col items-center">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto text-center">
        {/* Logo */}
        <a href="#" className="mb-6 inline-block">
          <img src="https://pagedone.io/asset/uploads/1718004199.png" alt="Logo" className="w-44 h-auto mx-auto" />
        </a>

        {/* Text Content */}
        <div className="w-full flex flex-col justify-center items-center gap-6">
          <h2 className="text-3xl text-gray-800 font-bold ">
            Please bear with us! We're currently under maintenance.
          </h2>
          <p className="text-gray-500 text-base font-normal">
            It's going to take some time to fix the error. We'll be back online in:
          </p>

          {/* Countdown Timer */}
          <div className="flex items-center justify-center gap-3 text-3xl font-bold text-gray-900 ">
            <div className="timer">{timeLeft.days}</div>
            <span>:</span>
            <div className="timer">{timeLeft.hours}</div>
            <span>:</span>
            <div className="timer">{timeLeft.minutes}</div>
            <span>:</span>
            <div className="timer">{timeLeft.seconds}</div>
          </div>

          {/* Email Subscription */}
          <div className="flex flex-col sm:flex-row items-center gap-2 w-full max-w-lg">
            <input
              type="text"
              className="sm:w-80 w-full h-10 text-gray-900 placeholder-gray-400 text-sm font-normal px-3.5 py-2 rounded-lg shadow-sm border border-gray-300 focus:outline-none"
              placeholder="Your email"
            />
            <button className="sm:w-fit w-full px-3.5 py-2 bg-indigo-700 text-white text-sm font-medium rounded-lg hover:bg-indigo-800 transition-all">
              Notify Me
            </button>
          </div>
          <Link to={params.to} className="sm:w-fit w-full px-3.5 py-2 bg-black text-white text-sm font-medium rounded-lg hover:bg-indigo-800 transition-all">
              Go to back    
            </Link>
        </div>

        {/* Image */}
        <div className="mt-8">
          <img src="https://pagedone.io/asset/uploads/1718004199.png" alt="Under Maintenance" className="w-80 mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default MaintenancePage;
