import React from 'react';

export default function CentreOfExcellence() {
  const objectives = [
    "Bridge the gap between academic curriculum and industry requirements.",
    "Provide hands-on training on emerging technologies.",
    "Enhance students' technical and professional competencies.",
    "Develop problem-solving, analytical, and innovation skills.",
    "Promote research, product development, and entrepreneurship.",
    "Prepare students for internships, placements, and higher education.",
    "Encourage interdisciplinary learning and collaborative projects."
  ];

  const keyFeatures = [
    "Industry-Oriented Training",
    "Emerging Technology Labs",
    "Professional Certification Programs",
    "Live Projects",
    "Internship Support",
    "Research & Innovation",
    "Placement Readiness"
  ];

  const areasOfExcellence = [
    "Artificial Intelligence (AI)",
    "Machine Learning (ML)",
    "Data Science & Analytics",
    "Internet of Things (IoT)",
    "Robotics & Automation",
    "Cyber Security",
    "Cloud Computing",
    "Full Stack Development",
    "Embedded Systems",
    "Electric Vehicles (EV) Technology",
    "Industry 4.0 & Smart Manufacturing",
    "CAD/CAM & Product Design",
    "Renewable Energy Technologies"
  ];

  const learningApproach = [
    "Hands-on laboratory sessions",
    "Project-Based Learning (PBL)",
    "Industry expert lectures",
    "Technical workshops and boot camps",
    "Hackathons and coding competitions",
    "Industrial visits",
    "Internship opportunities",
    "Innovation challenges",
    "Research and development activities"
  ];

  const benefits = [
    "Industry-ready technical skills",
    "Globally recognized certifications",
    "Enhanced placement opportunities",
    "Exposure to latest technologies",
    "Practical learning through live projects",
    "Improved problem-solving and innovation capabilities",
    "Entrepreneurial mindset and startup support",
    "Better career prospects in leading organizations"
  ];

  return (
    <div className="max-w-6xl mx-auto bg-white rounded-lg overflow-hidden">
      {/* Program Overview Section */}
      <div className="mb-8">
        <div className="bg-gradient-to-r from-[#0d173b] to-[#1e305f] text-white p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-3">Centre of Excellence (CoE)</h2>
          <p className="text-sm md:text-base text-blue-100">
            Bridging the Gap Between Academics and Industry
          </p>
        </div>
      </div>

      {/* About Section */}
      <div className="bg-blue-50 p-5 md:p-6 rounded-lg shadow-sm mb-6">
        <h3 className="text-lg font-semibold text-[#0d173b] mb-3">About Centre of Excellence</h3>
        <p className="text-gray-700 text-sm md:text-base mb-4">
          The Centre of Excellence (CoE) at Chhatrapati Shivaji Institute of Technology (CSIT), Durg is a dedicated initiative to equip students with industry-relevant skills, emerging technologies, and practical experience beyond the university curriculum. The Centre serves as a platform where academic learning meets real-world applications, preparing students to become competent professionals and future technology leaders.
        </p>
        <p className="text-gray-700 text-sm md:text-base">
          The CoE focuses on experiential learning through industry collaborations, hands-on training, certification programs, live projects, internships, innovation activities, and career-oriented skill development. Students are trained by industry experts using modern tools and technologies to enhance their technical proficiency and employability.
        </p>
      </div>

      {/* Objectives */}
      <div className="bg-gray-50 p-5 md:p-6 rounded-lg shadow-sm mb-6">
        <h3 className="text-lg font-semibold text-[#0d173b] mb-4">Our Objectives</h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {objectives.map((objective, index) => (
            <li key={index} className="flex items-start">
              <span className="bg-[#0d173b] bg-opacity-10 text-[#0d173b] rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 text-xs font-bold">
                {index + 1}
              </span>
              <span className="text-gray-700 text-sm">{objective}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Key Features */}
      <div className="bg-blue-50 p-5 md:p-6 rounded-lg shadow-sm mb-6">
        <h3 className="text-lg font-semibold text-[#0d173b] mb-4">Key Features</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {keyFeatures.map((feature, index) => (
            <div key={index} className="bg-white p-3 rounded-lg shadow-sm border border-gray-100 text-center">
              <span className="text-sm font-medium text-gray-700">{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Areas of Excellence */}
      <div className="bg-gray-50 p-5 md:p-6 rounded-lg shadow-sm mb-6">
        <h3 className="text-lg font-semibold text-[#0d173b] mb-4">Areas of Excellence</h3>
        <p className="text-sm text-gray-600 mb-4">The Centre of Excellence provides specialized training in high-demand technologies, including:</p>
        <div className="flex flex-wrap gap-2">
          {areasOfExcellence.map((area, index) => (
            <span key={index} className="bg-white px-4 py-2 rounded-full border border-[#0d173b] border-opacity-20 text-sm text-gray-700 shadow-sm hover:shadow-md transition-shadow">
              {area}
            </span>
          ))}
        </div>
      </div>

      {/* Learning Approach */}
      <div className="bg-blue-50 p-5 md:p-6 rounded-lg shadow-sm mb-6">
        <h3 className="text-lg font-semibold text-[#0d173b] mb-4">Learning Approach</h3>
        <p className="text-sm text-gray-600 mb-4">The Centre adopts a practical, outcome-based learning model that includes:</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {learningApproach.map((item, index) => (
            <div key={index} className="bg-white p-3 rounded-lg shadow-sm border border-gray-100 flex items-center gap-2">
              <span className="text-[#0d173b] text-lg">✓</span>
              <span className="text-sm text-gray-700">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits */}
      <div className="bg-gray-50 p-5 md:p-6 rounded-lg shadow-sm mb-6">
        <h3 className="text-lg font-semibold text-[#0d173b] mb-4">Benefits to Students</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-3 rounded-lg shadow-sm border border-gray-100 flex items-center gap-3">
              <span className="text-[#0d173b] text-xl">✦</span>
              <span className="text-sm text-gray-700">{benefit}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Vision & Mission */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="bg-gradient-to-r from-[#0d173b] to-[#1a2b5f] text-white p-5 rounded-lg">
          <h4 className="text-lg font-bold mb-2">Our Vision</h4>
          <p className="text-sm text-blue-100">
            To develop globally competent engineers through advanced technical education, industry collaboration, innovation, research, and experiential learning, creating professionals capable of leading technological transformation.
          </p>
        </div>
        <div className="bg-gradient-to-r from-[#1e305f] to-[#0d173b] text-white p-5 rounded-lg">
          <h4 className="text-lg font-bold mb-2">Our Mission</h4>
          <ul className="text-sm text-blue-100 space-y-1">
            <li>• Deliver industry-focused skill development programs.</li>
            <li>• Foster innovation, creativity, and research culture.</li>
            <li>• Strengthen academia-industry partnerships.</li>
            <li>• Promote entrepreneurship and startup initiatives.</li>
            <li>• Enhance students' employability through continuous learning and practical exposure.</li>
          </ul>
        </div>
      </div>

      {/* Motto */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-[#0d173b] border-opacity-20 p-5 rounded-lg text-center">
        <p className="text-md md:text-lg font-bold text-[#0d173b]">
          "Learn Beyond the Classroom. Innovate Beyond Boundaries. Succeed Beyond Expectations."
        </p>
        <p className="text-sm text-gray-600 mt-2">
          Empowering Students with Skills, Innovation, and Industry Excellence
        </p>
      </div>
    </div>
  );
}