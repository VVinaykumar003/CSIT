import {
  Beaker,
  BookOpen,
  Briefcase,
  Building,
  ChevronDown,
  Target,
  Users,
} from "lucide-react";
import { useState } from "react";

import AimContent from "./Aim.jsx";
import Career from "./Careers.jsx";
import CourseOutcome from "./CourseOutcome.jsx";
import Faculty from "./Faculty.jsx";
import LaboratoriesContent from "./laboratory.jsx";

const AboutContent = () => (
  <div className="bg-white shadow-md rounded-md overflow-hidden">
    <div className="h-40 bg-gray-100 relative">
      <div className="absolute inset-0 flex items-center px-6">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#0d173b]">
            Department of English
          </h2>
          <p className="text-gray-500 text-sm mt-2">CSIT | Science & Humanities</p>
          <div className="h-0.5 w-12 bg-[#0d173b] mt-3"></div>
        </div>
      </div>
    </div>
    <div className="p-6 prose max-w-none text-gray-700">
      <p>The Department of English aims to facilitate the students to acquire English Language Skills and Professional Skills so to tread successfully on their career path. The department just not dedicates in teaching the students about English language rather it dedicates in providing a free and fair language learning environment through vivid pedagogical methods and resources so that the learners become industry-ready and professionally strong. The department also engages in teaching modules on Indian Knowledge System and Indian Culture and Constitution to make learners aware of their socio-cultural roots.</p>
    </div>
  </div>
);

export default function ScienceHumanitiesPage() {
  const [activeTab, setActiveTab] = useState("about");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const tabContent = {
    about: {
      title: "About",
      icon: <Building className="text-gray-500" />,
      content: <AboutContent />,
    },
    aim: {
      title: "Our Aim",
      icon: <Target className="text-indigo-500" />,
      content: <AimContent />,
    },
    laboratories: {
      title: "Laboratories",
      icon: <Beaker className="text-emerald-500" />,
      content: <LaboratoriesContent />,
    },
    outcomes: {
      title: "Course Outcomes",
      icon: <BookOpen className="text-amber-500" />,
      content: <CourseOutcome />,
    },
    careers: {
      title: "Career Opportunity",
      icon: <Briefcase className="text-rose-500" />,
      content: <Career />,
    },
    faculty: {
      title: "Faculty Members",
      icon: <Users className="text-blue-500" />,
      content: <Faculty />,
    },
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <div className="w-full bg-[#0a1432] text-white p-8">
        <h1 className="text-4xl font-bold mb-2">Science & Humanities</h1>
        <p className="text-lg">Department of English, Maths, Physics & Chemistry</p>
        <div className="w-24 h-1 bg-white mt-4"></div>
      </div>

      <div className="flex-1 p-4 lg:p-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-gradient-to-r from-gray-100 to-gray-100 py-6 px-6">
            <div className="flex items-center">
              <div className="p-3 bg-white bg-opacity-20 rounded-lg mr-4 shadow-sm">
                <span className="block w-6 h-6 text-white">
                  {tabContent[activeTab].icon}
                </span>
              </div>
              <h2 className="text-2xl font-bold text-black">
                {tabContent[activeTab].title}
              </h2>
            </div>
          </div>

          <div className="block md:hidden border-b border-gray-100">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex items-center justify-between w-full p-4 text-left font-medium text-gray-700"
            >
              <div className="flex items-center">
                <span>{tabContent[activeTab].title}</span>
              </div>
              <ChevronDown
                className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                  mobileMenuOpen ? "transform rotate-180" : ""
                }`}
              />
            </button>

            {mobileMenuOpen && (
              <div className="border-t border-gray-100 bg-gray-50">
                {Object.keys(tabContent).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => {
                      setActiveTab(tab);
                      setMobileMenuOpen(false);
                    }}
                    className={`flex items-center w-full p-3 text-left ${
                      activeTab === tab
                        ? "bg-indigo-50 text-indigo-700"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    <span>{tabContent[tab].title}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="hidden md:flex border-b bg-gray-100 border-gray-200">
            {Object.keys(tabContent).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex items-center justify-center py-4 px-6 transition-all duration-300 flex-1 ${
                  activeTab === tab
                    ? "border-b-2 border-[#0d173b] text-[#0d173b] bg-[#b2b9d29e] font-medium"
                    : "border-b-2 border-transparent text-gray-500 hover:bg-gray-300 hover:text-gray-700"
                }`}
              >
                <span className="text-sm lg:text-base">
                  {tabContent[tab].title}
                </span>
              </button>
            ))}
          </div>

          <div className="p-6 md:p-8">
            <div className="prose prose-indigo max-w-none">
              {typeof tabContent[activeTab].content === "string" ? (
                <p className="text-gray-700 leading-relaxed">
                  {tabContent[activeTab].content}
                </p>
              ) : (
                tabContent[activeTab].content
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}