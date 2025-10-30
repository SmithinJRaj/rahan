import React from "react";

const Vision = () => {
  const goals = [
    {
      title: "Clear Communication",
      desc: "Regular office hours, monthly feedback reports.",
    },
    {
      title: "Student Events",
      desc: "Workshops, hackathons and peer mentoring.",
    },
    {
      title: "Fairness",
      desc: "Transparent grievance redressal and clear academic timelines.",
    },
  ];

  return (
    <section id="vision">
      <h2 className="text-2xl font-bold mb-8 text-indigo-400">Vision & Goals</h2>
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
