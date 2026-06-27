import React from "react";

const Introduction = () => {
  const benefits = [
    "Develop leadership and teamwork skills",
    "Gain hands-on experience beyond academics",
    "Build confidence and communication abilities",
    "Enhance employability and industry readiness",
    "Contribute to society and community development",
  ];

  return (
    <div className="bg-white shadow-md rounded-md overflow-hidden">
      {/* Header */}
      <div className="h-40 bg-gradient-to-r from-[#0d173b] to-[#1e305f] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full transform rotate-12 scale-150 translate-y-10">
            <div className="w-20 h-60 bg-white/10 rounded-full blur-xl absolute -left-10"></div>
            <div className="w-20 h-40 bg-white/10 rounded-full blur-xl absolute right-20 top-10"></div>
          </div>
        </div>
        <div className="absolute inset-0 flex items-center px-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Students Association Clubs
            </h2>
            <p className="text-gray-200 text-sm mt-2">
              CSIT | Empowering students through leadership, creativity, and collaboration
            </p>
            <div className="h-0.5 w-20 bg-white mt-3 rounded"></div>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="mb-6">
          <p className="text-gray-700 text-sm leading-relaxed">
            At Chhatrapati Shivaji Institute of Technology, we believe that education extends beyond classrooms. The Students Association serves as a dynamic platform that empowers students to explore their passions, develop leadership qualities, and gain practical exposure.
          </p>
          <p className="text-gray-700 text-sm leading-relaxed mt-3">
            Our clubs are student-led and faculty-mentored, creating an environment that encourages innovation, creativity, teamwork, and social responsibility. Through these clubs, CSIT Durg nurtures well-rounded professionals ready to meet industry and societal challenges.
          </p>
        </div>

        {/* Why Join */}
        <div className="mb-6">
          <h3 className="text-base font-semibold text-[#0d173b] mb-3">
            Why Join Clubs at CSIT Durg?
          </h3>
          <ul className="space-y-2">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start gap-3 text-sm text-gray-700">
                <span className="text-[#0d173b] font-bold mt-0.5">•</span>
                {benefit}
              </li>
            ))}
          </ul>
        </div>

        {/* Tagline */}
        <div className="bg-gradient-to-r from-[#0d173b] to-[#1e305f] text-white p-6 rounded-lg text-center">
          <p className="text-xl font-bold">Join. Participate. Lead.</p>
          <p className="text-sm text-gray-200 mt-2">
            At CSIT Durg, every student is encouraged to actively participate in club activities and take initiative in organizing events. The Students Association ensures that every talent finds a platform and every idea gets an opportunity to grow.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Introduction;