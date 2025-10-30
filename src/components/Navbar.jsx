import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full flex justify-between items-center px-8 py-4 fixed top-0 left-0 z-50 backdrop-blur-lg bg-black/30">
      <h1 className="text-xl font-bold">
        <span className="text-yellow-400">Rahan</span> M
      </h1>
      <div className="space-x-8 hidden md:flex">
        <a href="#vote" className="bg-yellow-400 text-black px-4 py-2 rounded-full hover:bg-yellow-300 transition">Vote</a>
      </div>
    </nav>
  );
};

export default Navbar;
