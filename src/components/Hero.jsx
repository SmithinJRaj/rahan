import React from "react";
import { FaYoutube, FaInstagram } from "react-icons/fa";
import profilePic from "../assets/rahan.jpg";

const Hero = () => {
  return (
    <section
      id="hero"
      className="flex flex-col lg:flex-row items-center justify-center w-full min-h-screen pt-20 gap-10 px-6 lg:px-20"
    >
      {/* Left side */}
      <div className="flex-1 space-y-6 text-center lg:text-left">
        <h1 className="text-5xl font-bold leading-tight">
          Vote <span className="text-yellow-400">Rahan M</span> <br /> for{" "}
          <span className="text-indigo-400">CSE Branch Representative</span>
        </h1>
        <p className="text-gray-300 max-w-xl mx-auto lg:mx-0 text-lg">
          Driven. Dedicated. Determined. A student-first leader with a plan to
          make our CSE experience stronger, fairer, and more fun.
        </p>

        {/* Social Buttons */}
        <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-6">
          {/* YouTube */}
          <a
            href="https://www.youtube.com/watch?v=9N4EjFwH2Go"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-500 hover:scale-105 transition-all duration-300 shadow-lg shadow-red-500/40"
          >
            <FaYoutube size={22} />
            YouTube
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/rahanm_21/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 hover:scale-105 transition-all duration-300 shadow-lg shadow-pink-500/40"
          >
            <FaInstagram size={22} />
            Instagram
          </a>
        </div>
      </div>

      {/* Right side */}
      <div className="flex-1 flex justify-center lg:justify-end">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 max-w-sm shadow-lg text-center">
          <img
            src={profilePic}
            alt="Rahan M"
            className="w-300 h-300sm:w-300 sm:h-300 rounded-2xl object-cover mx-auto mb-4 border-4 border-white/20 shadow-lg"
          />
          <h2 className="text-2xl font-semibold">Rahan M</h2>
          <p className="text-sm text-gray-300 mt-1">2nd Year, CSE</p>
          <p className="text-gray-400 mt-4 text-sm leading-relaxed">
            I’m Rahan M, and I’m standing as a candidate for Branch Representative of CSED.
            I wish to serve our branch by representing all of us at the Student Governance Body.
          </p>
          <div className="flex gap-4 mt-6 justify-center">
            <button
              style={{ animation: "float-button 3s ease-in-out infinite" }}
              className="
                relative overflow-hidden px-8 py-3 rounded-lg font-semibold text-white
                bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
                transition-all duration-500 ease-out hover:scale-110
              "
            >
              <span className="relative z-10">Vote Now</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
