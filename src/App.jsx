import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Vision from "./components/Vision";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen w-full overflow-hidden">
      <Navbar />
      <main className="flex-grow flex flex-col items-center justify-center w-full">
        <div className="w-full flex flex-col items-center justify-center flex-grow max-w-7xl px-6 lg:px-12 py-12">
          <Hero />
          <div className="mt-20 w-full space-y-16">
            <About />
            <Vision />
          </div>
        </div>
      </main>
      <footer className="text-center py-4 text-gray-400 text-sm border-t border-white/10 w-full">
        © 2025 Campaign for Rahan M — CSE Branch Representative
      </footer>
    </div>
  );
};

export default App;
