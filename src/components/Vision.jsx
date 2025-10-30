import React from "react";

const Vision = () => {
  const goals = [
    {
      title: "Collective Decisions",
      desc: "Every choice will be made together, not alone.",
    },
    {
      title: "Full Transparency",
      desc: "All actions and communications will be open and clear.",
    },
    {
      title: "A Vibrant Branch",
      desc: "I’ll work tirelessly to keep our branch active, engaged, and united.",
    },
  ];

  return (
    <section id="vision">
      <h2 className="text-2xl font-bold mb-8 text-indigo-400">My Commitments to Our Branch</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {goals.map((g, idx) => (
          <div
            key={idx}
            className="bg-white/5 backdrop-blur-lg p-6 rounded-xl border border-white/10 hover:bg-white/10 transition"
          >
            <h3 className="text-lg font-semibold text-yellow-400">{g.title}</h3>
            <p className="text-gray-300 mt-2">{g.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Vision;
