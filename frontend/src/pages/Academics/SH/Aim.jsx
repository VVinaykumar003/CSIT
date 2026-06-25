import React from "react";

const ScienceHumanities = () => {
  return (
    <div className="bg-white shadow-md rounded-md overflow-hidden">
      {/* Header */}
      <div className="h-40 bg-gray-100 relative">
        <div className="absolute inset-0 flex items-center px-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#0d173b]">
              Science & Humanities
            </h2>
            <p className="text-gray-500 text-sm mt-2">
              Maths, Physics, Chemistry & Communication Skills
            </p>
            <div className="h-0.5 w-12 bg-[#0d173b] mt-3"></div>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="prose max-w-none text-gray-700">
          {/* Vision Section */}
          <div className="mb-8">
            <h3 className="text-xl font-medium text-[#0d173b] mb-2">
              Our Vision
            </h3>
            <p>
              To build a strong foundation in science, mathematics, and communication that
              nurtures analytical thinking, creativity, and lifelong learning for academic
              excellence and professional success.
            </p>
          </div>

          {/* Mission Section */}
          <div className="mb-8">
            <h3 className="text-xl font-medium text-[#0d173b] mb-2">
              Our Mission
            </h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                To impart quality education in Mathematics, Physics, Chemistry, and Communication Skills.
              </li>
              <li>
                To strengthen problem-solving ability, scientific temper, and effective communication.
              </li>
              <li>
                To prepare students for higher studies, research, and professional careers.
              </li>
            </ul>
          </div>

          {/* Program Educational Objectives Section */}
          <div className="mb-8">
            <h3 className="text-xl font-medium text-[#0d173b] mb-2">
              Program Educational Objectives
            </h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                Develop a strong conceptual foundation in Mathematics, Physics, and Chemistry.
              </li>
              <li>
                Apply scientific principles and analytical skills to solve real-world problems.
              </li>
              <li>
                Communicate ideas effectively through spoken and written English.
              </li>
              <li>
                Demonstrate ethical values, teamwork, and a commitment to lifelong learning.
              </li>
            </ul>
          </div>

          {/* Program Outcomes Section */}
          <div className="mb-8">
            <h3 className="text-xl font-medium text-[#0d173b] mb-2">
              Program Outcomes
            </h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <span className="font-bold text-[#0d173b]">Mathematical Knowledge:</span>{" "}
                Apply mathematical concepts and techniques to solve scientific and engineering problems.
              </li>
              <li>
                <span className="font-bold text-[#0d173b]">Scientific Understanding:</span>{" "}
                Understand and explain basic principles of Physics and Chemistry.
              </li>
              <li>
                <span className="font-bold text-[#0d173b]">Problem Solving:</span>{" "}
                Analyze problems logically and arrive at appropriate solutions using scientific reasoning.
              </li>
              <li>
                <span className="font-bold text-[#0d173b]">Experimentation:</span>{" "}
                Perform experiments, record observations, and interpret results accurately.
              </li>
              <li>
                <span className="font-bold text-[#0d173b]">Communication Skills:</span>{" "}
                Communicate confidently and effectively in both oral and written forms.
              </li>
              <li>
                <span className="font-bold text-[#0d173b]">Team Work:</span>{" "}
                Work effectively as an individual and as part of a team.
              </li>
              <li>
                <span className="font-bold text-[#0d173b]">Ethics and Responsibility:</span>{" "}
                Demonstrate ethical behavior, discipline, and responsibility in academic and professional settings.
              </li>
              <li>
                <span className="font-bold text-[#0d173b]">Lifelong Learning:</span>{" "}
                Recognize the importance of continuous learning and self-improvement.
              </li>
            </ul>
          </div>

          {/* Program Specific Outcomes */}
          <div className="mb-8">
            <h3 className="text-xl font-medium text-[#0d173b] mb-2">
              Program Specific Outcomes
            </h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                Apply mathematical tools to support scientific and technical problem solving.
              </li>
              <li>
                Use Physics and Chemistry concepts to understand natural phenomena and practical applications.
              </li>
              <li>
                Communicate effectively in academic, professional, and social contexts.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScienceHumanities;