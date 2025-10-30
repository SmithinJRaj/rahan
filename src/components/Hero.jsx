import React from "react";
import profilePic from "../assets/rahan.jpg"; // replace with actual image

const Hero = () => {
  return (
    <section
      id="hero"
      className="flex flex-col lg:flex-row items-center justify-between w-full min-h-screen pt-20 gap-10"
    >
      <div className="flex-1 space-y-6 text-center lg:text-left">
        <h1 className="text-5xl font-bold leading-tight">
          Vote <span className="text-yellow-400">Rahan M</span> <br /> for{" "}
          <span className="text-indigo-400">CSE Branch Representative</span>
        </h1>
        <p className="text-gray-300 max-w-xl mx-auto lg:mx-0">
          Driven. Dedicated. Determined. A student-first leader with a plan to
          make our CSE experience stronger, fairer and more fun.
        </p>
        <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-6">
          <button className="bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-300 transition">
            Support Rahan
          </button>
          <button className="border border-white/30 px-6 py-3 rounded-full hover:bg-white/10 transition">
            Know more
          </button>
        </div>
      </div>

      <div className="flex-1 flex justify-center lg:justify-end">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 max-w-sm shadow-lg">
          <img
            src={profilePic}
            alt="Rahan M"
            className="w-300 h-300 rounded-md object-cover mx-auto mb-4"
          />
          <h2 className="text-xl font-semibold">Rahan M</h2>
          <p className="text-sm text-gray-300">2rd Year, CSE</p>
          <p className="text-gray-400 mt-3 text-sm leading-relaxed">
            Campus-first problem-solver. Focused on stronger student-faculty
            communication, better hands-on workshops, and a fairer academic
            environment.
          </p>
          <div className="flex gap-4 mt-5 justify-center">
            <button className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg transition">
              I Support
            </button>
            <button className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition">
              More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
