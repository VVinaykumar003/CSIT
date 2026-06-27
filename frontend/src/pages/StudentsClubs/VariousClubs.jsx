import React from "react";

const VariousClubs = () => {
  const clubs = [
    {
      name: "Skill Development Cell",
      description:
        "Enhancing employability through technical, soft skills, and career readiness training.",
      icon: "🎯",
    },
    {
      name: "Coding Club",
      description:
        "A community for programmers to learn, practice, and excel in coding and problem-solving.",
      icon: "💻",
    },
    {
      name: "Entrepreneurship & Innovation Club",
      description:
        "Fostering creativity, innovation, and entrepreneurial mindset among students.",
      icon: "🚀",
    },
    {
      name: "Sports Club",
      description:
        "Promoting physical fitness, teamwork, and sportsmanship through various sports activities.",
      icon: "⚽",
    },
    {
      name: "Arts Club",
      description:
        "A creative platform for students to explore and showcase their artistic talents.",
      icon: "🎨",
    },
    {
      name: "Cultural Club",
      description:
        "Celebrating cultural diversity and artistic expression through music, dance, and drama.",
      icon: "🎭",
    },
    {
      name: "Alumni Club",
      description:
        "Building strong connections between alumni and the institute for mentorship and growth.",
      icon: "🤝",
    },
    {
      name: "Social Media & Photography Club",
      description:
        "Capturing campus life and managing digital presence through creative content.",
      icon: "📸",
    },
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
              Various Clubs
            </h2>
            <p className="text-gray-200 text-sm mt-2">
              CSIT | Explore, Learn, and Grow with Our Student Clubs
            </p>
            <div className="h-0.5 w-20 bg-white mt-3 rounded"></div>
          </div>
        </div>
      </div>

      <div className="p-6">
        <p className="text-gray-700 text-sm leading-relaxed mb-6">
          Chhatrapati Shivaji Institute of Technology offers a diverse range of student clubs that cater to various interests, skills, and career aspirations. Each club provides a unique platform for students to learn, collaborate, and excel.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {clubs.map((club, index) => (
            <div
              key={index}
              className="bg-gray-50 p-4 rounded-lg border border-gray-200 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">{club.icon}</span>
                <h3 className="font-semibold text-[#0d173b]">{club.name}</h3>
              </div>
              <p className="text-sm text-gray-600">{club.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VariousClubs;