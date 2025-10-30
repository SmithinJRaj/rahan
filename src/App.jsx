import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Vision from "./components/Vision";
import Background from "./components/Background";

const App = () => {
  return (
    <div className="relative flex flex-col min-h-screen w-full overflow-x-hidden text-white">
      {/* Background Particles */}
      <div className="absolute inset-0 -z-10">
        <Background />
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow w-full flex flex-col items-center justify-start">
        <div className="w-full max-w-7xl px-6 lg:px-12 py-16 space-y-32">
          <section id="hero" className="w-full -mt-10">
            <Hero />
          </section>

          <section id="about" className="w-full">
            <About />
          </section>

          <section id="vision" className="w-full">
            <Vision />
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center py-6 text-gray-400 text-sm border-t border-white/10 w-full">
        © 2025 Campaign for <span className="text-white font-semibold">Rahan M</span> — CSE Branch Representative
      </footer>
    </div>
  );
};

export default App;
