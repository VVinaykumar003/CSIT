import React from "react";

const WhyCSIT = () => {
  const rankings = [
    {
      title: "6th Rank",
      description:
        "Among the top 10 Indian Engineering Colleges in the East Zone of India.",
      icon: "🏆",
    },
    {
      title: "11th Rank",
      description:
        "Among the top 100 Indian Private Engineering Colleges Overall.",
      icon: "🌟",
    },
    {
      title: "13th Rank",
      description:
        "Among the top 100 Indian Engineering Colleges (Govt. & Private).",
      icon: "📈",
    },
  ];

  const innovations = [
    { text: "100+ patents in 5 years", icon: "🔬" },
    {
      text: "5 start-ups incubated through CSIT Start-up Conclave and Incubation Centre.",
      icon: "🚀",
    },
    {
      text: "Cutting-edge innovations by CSIT students and Alumni.",
      icon: "💡",
    },
    {
      text: "Seed Money to students for Entrepreneurship and Research activities as per policy guidelines.",
      icon: "💰",
    },
  ];

  const careerPathways = [
    "Corporate Jobs",
    "Government Jobs",
    "Higher Education",
    "Research",
    "Entrepreneurship",
  ];

  return (
    <div className="bg-white shadow-xl rounded-lg overflow-hidden">
      {/* Header */}
      <div className="h-44 bg-gradient-to-r from-[#0d173b] to-[#1e305f] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full transform rotate-12 scale-150 translate-y-10">
            <div className="w-20 h-60 bg-white/10 rounded-full blur-xl absolute -left-10"></div>
            <div className="w-20 h-40 bg-white/10 rounded-full blur-xl absolute right-20 top-10"></div>
          </div>
        </div>
        <div className="absolute inset-0 flex items-center px-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Why Choose CSIT?
            </h2>
            <p className="text-gray-200 text-sm mt-2">
              CSIT | Excellence in Engineering Education
            </p>
            <div className="h-0.5 w-20 bg-white mt-3 rounded"></div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 md:p-8 space-y-8 bg-gradient-to-b from-white to-gray-50">
        {/* Rankings Section */}
        <div>
          <h3 className="text-xl font-semibold text-[#0d173b] flex items-center gap-2 mb-4">
            <span className="text-2xl">📊</span>
            All India Ranking (By Dataquest)
          </h3>
          <div className="h-0.5 w-16 bg-[#0d173b] opacity-40 mb-4"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {rankings.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-2">{item.icon}</div>
                <h4 className="text-xl font-bold text-[#0d173b]">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Innovations Section */}
        <div>
          <h3 className="text-xl font-semibold text-[#0d173b] flex items-center gap-2 mb-4">
            <span className="text-2xl">💡</span>
            Focus on Innovations & Entrepreneurship
          </h3>
          <div className="h-0.5 w-16 bg-[#0d173b] opacity-40 mb-4"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {innovations.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="text-2xl">{item.icon}</span>
                <p className="text-sm text-gray-700">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Career Pathways Section */}
        <div>
          <h3 className="text-xl font-semibold text-[#0d173b] flex items-center gap-2 mb-4">
            <span className="text-2xl">🎯</span>
            Career Pathways
          </h3>
          <div className="h-0.5 w-16 bg-[#0d173b] opacity-40 mb-4"></div>
          <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
            <p className="text-sm text-gray-700 mb-4">
              Option to choose career pathway ranging from:
            </p>
            <div className="flex flex-wrap gap-3">
              {careerPathways.map((path, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-[#0d173b] text-white rounded-full text-sm font-medium hover:bg-[#1e305f] transition-colors"
                >
                  {path}
                </span>
              ))}
            </div>
            <p className="text-sm text-gray-600 mt-4">
              Well-designed curriculum to fulfill career aspirations through
              focused courses.
            </p>
          </div>
        </div>

        {/* ✅ Career Options Section - NEW */}
        <div>
          <h3 className="text-xl font-semibold text-[#0d173b] flex items-center gap-2 mb-4">
            <span className="text-2xl">🎓</span>
            Career Options
          </h3>
          <div className="h-0.5 w-16 bg-[#0d173b] opacity-40 mb-4"></div>
          <p className="text-sm text-gray-700 mb-4">
            Diverse learning pathways are offered according to students'
            competencies, enabling them to develop industry-relevant skills and
            prepare for specific career opportunities.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Government Jobs */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-100">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">🏛️</span>
                <h4 className="text-lg font-semibold text-[#0d173b]">
                  Government Jobs
                </h4>
              </div>
              <p className="text-sm text-gray-700">
                To equip students with the knowledge, skills, and aptitude
                required for civil services examinations, PSUs, and other
                government job roles.
              </p>
            </div>

            {/* Research */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg border border-purple-100">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">🔬</span>
                <h4 className="text-lg font-semibold text-[#0d173b]">
                  Research
                </h4>
              </div>
              <p className="text-sm text-gray-700">
                Students are encouraged to participate in research projects and
                dissertation work, fostering analytical skills and preparing
                them for industry and higher education opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyCSIT;