import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdownMobile, setActiveDropdownMobile] = useState(null);
  const [activeDropdownDesktop, setActiveDropdownDesktop] = useState(null);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);
  
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMobileDropdown = (index) => {
    setActiveDropdownMobile(activeDropdownMobile === index ? null : index);
  };

  const toggleDesktopDropdown = (index) => {
    setActiveDropdownDesktop(activeDropdownDesktop === index ? null : index);
  };

  const openDesktopDropdown = (index) => {
    if (isDesktop) {
      setActiveDropdownDesktop(index);
    }
  };

  const closeDesktopDropdown = () => {
    if (isDesktop) {
      setActiveDropdownDesktop(null);
    }
  };

  // Initiatives sub-items
  const initiativesItems = [
    { name: "Centre of Excellence", path: "/campus/initiatives?tab=coe" },
    { name: "Incubation Centre", path: "/campus/initiatives?tab=incubation" },
    { name: "NPTEL", path: "/campus/initiatives?tab=nptel" },
    { name: "Startups", path: "/campus/initiatives?tab=startups" },
    { name: "MOUs", path: "/campus/initiatives?tab=mous" },
    { name: "IQAC", path: "/campus/initiatives?tab=iqac" },
    { name: "CSR", path: "/campus/initiatives?tab=csr" },
    { name: "NAAC Cycle", path: "/campus/initiatives?tab=naac-1" },
    { name: "NSS", path: "/campus/initiatives?tab=nss" },
    { name: "SWAR", path: "/campus/initiatives?tab=swar" },
  ];

  return (
    <nav className="bg-[#0d173b] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-10 md:h-16">
          {/* Desktop Menu */}
          <div className="hidden lg:flex w-full justify-between">
            {/* Home */}
            <div className="group relative">
              <Link
                to="/"
                className="flex items-center px-3 py-2 rounded-md text-sm font-medium hover:bg-[#1a2d5e] focus:outline-none cursor-pointer"
              >
                Home
              </Link>
            </div>

            {/* About */}
            <div className="group relative" onMouseLeave={closeDesktopDropdown}>
              <button
                onClick={() => toggleDesktopDropdown(1)}
                onMouseEnter={() => openDesktopDropdown(1)}
                className="flex items-center px-3 py-2 rounded-md text-sm font-medium hover:bg-[#1a2d5e] focus:outline-none cursor-pointer"
              >
                About
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>

              {activeDropdownDesktop === 1 && (
                <div className="absolute z-20 top-full pt-2 w-56">
                  <div className="absolute h-2 -top-2 inset-x-0"></div>
                  <div className="rounded-md shadow-lg bg-white">
                    <div className="py-1">
                      <Link to="/about/introduction" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">Introduction</Link>
                      <Link to="/about/society" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">Society</Link>
                      <Link to="/about/aspiration" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">Aspiration</Link>
                      <Link to="/about/governing-body" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">Governing Body</Link>
                      <Link to="/about/message" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">Message</Link>
                      <Link to="/about/professional-bodies" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">Professional Bodies</Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Academics */}
            <div className="group relative" onMouseLeave={closeDesktopDropdown}>
              <button
                onClick={() => toggleDesktopDropdown(2)}
                onMouseEnter={() => openDesktopDropdown(2)}
                className="flex items-center px-3 py-2 rounded-md text-sm font-medium hover:bg-[#1a2d5e] focus:outline-none cursor-pointer"
              >
                Academics
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>

              {activeDropdownDesktop === 2 && (
                <div className="absolute z-20 top-full pt-2 w-56">
                  <div className="absolute h-2 -top-2 inset-x-0"></div>
                  <div className="rounded-md shadow-lg bg-white">
                    <div className="py-1">
                      <Link to="/academics/computer-science-and-engineering" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">Computer Science and Engineering</Link>
                      <Link to="/academics/mechanical-engineering" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">Mechanical Engineering</Link>
                      <Link to="/academics/electrical-and-electronics-engineering" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">Electrical and Electronics Engineering</Link>
                      <Link to="/academics/information-technology-engineering" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">Information Technology Engineering</Link>
                      <Link to="/academics/mechatronics" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">Mechatronics Engineering</Link>
                      <Link to="/academics/civil-engineering" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">Civil Engineering</Link>
                      <Link to="/academics/artificial-intelligence-and-data-science-engineering" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">Artificial Intelligence & Data Science Engineering</Link>
                      <Link to="/academics/science-and-humanities" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">Science & Humanities - Maths, Physics, Chemistry, Communication Skill</Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* R&D Cells */}
            <div className="group relative" onMouseLeave={closeDesktopDropdown}>
              <button
                onClick={() => toggleDesktopDropdown(3)}
                onMouseEnter={() => openDesktopDropdown(3)}
                className="flex items-center px-3 py-2 rounded-md text-sm font-medium hover:bg-[#1a2d5e] focus:outline-none cursor-pointer"
              >
                R&D Cells
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>

              {activeDropdownDesktop === 3 && (
                <div className="absolute z-20 top-full pt-2 w-56">
                  <div className="absolute h-2 -top-2 inset-x-0"></div>
                  <div className="rounded-md shadow-lg bg-white">
                    <div className="py-1">
                      <Link to="/more/research-and-development" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">IPR FILLED</Link>
                      <Link to="/more/research-and-development" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">PAPER PUBLICATION CIVIL</Link>
                      <Link to="/more/research-and-development" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">PAPER PUBLICATION EEE</Link>
                      <Link to="/more/research-and-development" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">PAPER PUBLICATION ME</Link>
                      <Link to="/more/research-and-development" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">PROJECT GRANTS</Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Admission */}
            <div className="group relative" onMouseLeave={closeDesktopDropdown}>
              <button
                onClick={() => toggleDesktopDropdown(4)}
                onMouseEnter={() => openDesktopDropdown(4)}
                className="flex items-center px-3 py-2 rounded-md text-sm font-medium hover:bg-[#1a2d5e] focus:outline-none cursor-pointer"
              >
                Admission
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>

              {activeDropdownDesktop === 4 && (
                <div className="absolute z-20 top-full pt-2 w-56">
                  <div className="absolute h-2 -top-2 inset-x-0"></div>
                  <div className="rounded-md shadow-lg bg-white">
                    <div className="py-1">
                      <Link to="/admission/why-choose" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">Why Choose CSIT?</Link>
                      <Link to="/admission/courses-offered" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">Courses Offered</Link>
                      <Link to="/admission/admission-process" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">Admission Process</Link>
                      <Link to="/admission/scholarships" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">Scholarships</Link>
                      <Link to="/admission/leaflet" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">Leaflet</Link>
                      <Link to="/admission/help-desk" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">Help Desk</Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Initiatives */}
            <div className="group relative" onMouseLeave={closeDesktopDropdown}>
              <button
                onClick={() => toggleDesktopDropdown(5)}
                onMouseEnter={() => openDesktopDropdown(5)}
                className="flex items-center px-3 py-2 rounded-md text-sm font-medium hover:bg-[#1a2d5e] focus:outline-none cursor-pointer"
              >
                Initiatives
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>

              {activeDropdownDesktop === 5 && (
                <div className="absolute z-20 top-full pt-2 w-64">
                  <div className="absolute h-2 -top-2 inset-x-0"></div>
                  <div className="rounded-md shadow-lg bg-white max-h-96 overflow-y-auto">
                    <div className="py-1">
                      {initiativesItems.map((item, index) => (
                        <Link
                          key={index}
                          to={item.path}
                          className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* T&P Cell */}
            <div className="group relative" onMouseLeave={closeDesktopDropdown}>
              <button
                onClick={() => toggleDesktopDropdown(6)}
                onMouseEnter={() => openDesktopDropdown(6)}
                className="flex items-center px-3 py-2 rounded-md text-sm font-medium hover:bg-[#1a2d5e] focus:outline-none cursor-pointer"
              >
                T&P Cell
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>

              {activeDropdownDesktop === 6 && (
                <div className="absolute z-20 top-full pt-2 w-64">
                  <div className="absolute h-2 -top-2 inset-x-0"></div>
                  <div className="rounded-md shadow-lg bg-white">
                    <div className="py-1">
                      <Link to="/placement/about-tnp-cell" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">About Cell</Link>
                      <Link to="/placement/placement-policies" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">Placement Policies</Link>
                      <Link to="/placement/internship" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">Vocational Training & Internship</Link>
                      <Link to="/placement/placement-statistics" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">Placement Statistics</Link>
                      <Link to="/placement/our-recruiters" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">Our Recruiters</Link>
                      <Link to="/placement/team-members" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">Team Members</Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Alumni */}
            <div className="group relative" onMouseLeave={closeDesktopDropdown}>
              <button
                onClick={() => toggleDesktopDropdown(7)}
                onMouseEnter={() => openDesktopDropdown(7)}
                className="flex items-center px-3 py-2 rounded-md text-sm font-medium hover:bg-[#1a2d5e] focus:outline-none cursor-pointer"
              >
                Alumni
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>

              {activeDropdownDesktop === 7 && (
                <div className="absolute z-20 top-full pt-2 w-56">
                  <div className="absolute h-2 -top-2 inset-x-0"></div>
                  <div className="rounded-md shadow-lg bg-white">
                    <div className="py-1">
                      <Link to="/alumni/about-association" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">About Association</Link>
                      <Link to="/alumni/activities" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">Activities</Link>
                      <Link to="/alumni/presence" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">Presence</Link>
                      <Link to="/alumni/team-members" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">Team Members</Link>
                      <Link to="/alumni/registered-association" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">Registered Association</Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

           {/* Students Clubs */}
<div className="group relative" onMouseLeave={closeDesktopDropdown}>
  <button
    onClick={() => toggleDesktopDropdown(8)}
    onMouseEnter={() => openDesktopDropdown(8)}
    className="flex items-center px-3 py-2 rounded-md text-sm font-medium hover:bg-[#1a2d5e] focus:outline-none cursor-pointer"
  >
    Students Clubs
    <ChevronDown className="ml-1 h-4 w-4" />
  </button>

  {activeDropdownDesktop === 8 && (
    <div className="absolute z-20 top-full pt-2 w-56">
      <div className="absolute h-2 -top-2 inset-x-0"></div>
      <div className="rounded-md shadow-lg bg-white">
        <div className="py-1">
          <Link to="/students-clubs/introduction" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">Introduction</Link>
          <Link to="/students-clubs/various-clubs" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">Various Clubs</Link>
          <Link to="/students-clubs/development-program" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">Development Program</Link>
          <Link to="/students-clubs/industry-interaction" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">Industry Interaction</Link>
          <Link to="/students-clubs/extracurricular-activities" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">Extracurricular Activities</Link>
        </div>
      </div>
    </div>
  )}
</div>

            {/* More */}
            <div className="group relative" onMouseLeave={closeDesktopDropdown}>
              <button
                onClick={() => toggleDesktopDropdown(9)}
                onMouseEnter={() => openDesktopDropdown(9)}
                className="flex items-center px-3 py-2 rounded-md text-sm font-medium hover:bg-[#1a2d5e] focus:outline-none cursor-pointer"
              >
                More
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>

              {activeDropdownDesktop === 9 && (
                <div className="absolute z-20 top-full pt-2 w-56">
                  <div className="absolute h-2 -top-2 inset-x-0"></div>
                  <div className="rounded-md shadow-lg bg-white">
                    <div className="py-1">
                      <Link to="/more/student-affairs" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">Student Affairs</Link>
                      <Link to="/more/calendar" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">Calendar</Link>
                      <Link to="/more/feedback" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">Feedback</Link>
                      <Link to="/more/gallery" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">Gallery</Link>
                      <Link to="/more/grievances" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">Grievances</Link>
                      <Link to="/more/iqac" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">IQAC</Link>
                      <Link to="/more/rti" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">RTI</Link>
                      <Link to="/campus/facilities" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">Facilities</Link>
                      <Link to="/more/celebration" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">Celebration</Link>
                      <Link to="/more/achievement" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">Achievement</Link>
                      <a
                        href="https://drive.google.com/drive/folders/17bERsF79PR7RLIc8k69I1wXJGbEJXyOL?usp=drive_link"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                      >
                        Syllabus and Exam Papers
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden w-full flex justify-end relative z-50">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`inline-flex items-center justify-center p-1 rounded-md text-white hover:bg-[#1a2d5e] focus:outline-none ${
                mobileMenuOpen ? "invisible" : "visible"
              }`}
            >
              <Menu className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden transition-opacity duration-300 ${
          mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileMenuOpen(false)}
      >
        <div
          className={`fixed inset-y-0 right-0 w-64 bg-[#0d173b] overflow-y-auto transition-transform duration-300 transform ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <div className="sticky top-0 right-0 p-1.5 flex justify-end bg-[#0d173b] z-50">
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-full p-1 hover:bg-[#1a2d5e] transition-colors duration-200"
            >
              <X className="h-4 w-4 text-white" />
            </button>
          </div>

          {/* Menu Items */}
          <div className="px-2 pt-1 pb-2 space-y-0.5">
            {/* Home */}
            <Link
              to="/"
              className="block px-3 py-1 rounded-md text-sm font-medium text-gray-300 hover:bg-[#1a2d5e] hover:text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>

            {/* About Dropdown */}
            <div>
              <button
                onClick={() => toggleMobileDropdown(1)}
                className="flex items-center justify-between w-full px-3 py-2 rounded-md textbase font-medium text-white hover:bg-[#1a2d5e]"
              >
                About
                <ChevronDown
                  className={`ml-1 h-4 w-4 transition-transform ${
                    activeDropdownMobile === 1 ? "rotate-180" : ""
                  }`}
                />
              </button>
              {activeDropdownMobile === 1 && (
                <div className="pl-4 space-y-1 mt-1">
                  <Link to="/introduction" className="block px-3 py-2 rounded-md textbase font-medium text-gray-300 hover:bg-[#1a2d5e] hover:text-white" onClick={() => setMobileMenuOpen(false)}>Introduction</Link>
                  <Link to="/society" className="block px-3 py-2 rounded-md textbase font-medium text-gray-300 hover:bg-[#1a2d5e] hover:text-white" onClick={() => setMobileMenuOpen(false)}>Society</Link>
                  <Link to="/aspiration" className="block px-3 py-2 rounded-md textbase font-medium text-gray-300 hover:bg-[#1a2d5e] hover:text-white" onClick={() => setMobileMenuOpen(false)}>Aspiration</Link>
                  <Link to="/achievement" className="block px-3 py-2 rounded-md textbase font-medium text-gray-300 hover:bg-[#1a2d5e] hover:text-white" onClick={() => setMobileMenuOpen(false)}>Achievement</Link>
                  <Link to="/professional-bodies" className="block px-3 py-2 rounded-md textbase font-medium text-gray-300 hover:bg-[#1a2d5e] hover:text-white" onClick={() => setMobileMenuOpen(false)}>Professional Bodies</Link>
                  <Link to="/message" className="block px-3 py-2 rounded-md textbase font-medium text-gray-300 hover:bg-[#1a2d5e] hover:text-white" onClick={() => setMobileMenuOpen(false)}>Message</Link>
                  <Link to="/governing-body" className="block px-3 py-2 rounded-md textbase font-medium text-gray-300 hover:bg-[#1a2d5e] hover:text-white" onClick={() => setMobileMenuOpen(false)}>Governing Body</Link>
                  <Link to="/celebration" className="block px-3 py-2 rounded-md textbase font-medium text-gray-300 hover:bg-[#1a2d5e] hover:text-white" onClick={() => setMobileMenuOpen(false)}>Celebration</Link>
                </div>
              )}
            </div>

            {/* Academics */}
            <div>
              <button
                onClick={() => toggleMobileDropdown(2)}
                className="flex items-center justify-between w-full px-3 py-2 rounded-md textbase font-medium text-white hover:bg-[#1a2d5e]"
              >
                Academics
                <ChevronDown
                  className={`ml-1 h-4 w-4 transition-transform ${
                    activeDropdownMobile === 2 ? "rotate-180" : ""
                  }`}
                />
              </button>
              {activeDropdownMobile === 2 && (
                <div className="pl-4 space-y-1 mt-1">
                  <Link to="/academics/computer-science-and-engineering" className="block px-3 py-2 rounded-md textbase font-medium text-gray-300 hover:bg-[#1a2d5e] hover:text-white" onClick={() => setMobileMenuOpen(false)}>Computer Science and Engineering</Link>
                  <Link to="/academics/mechanical-engineering" className="block px-3 py-2 rounded-md textbase font-medium text-gray-300 hover:bg-[#1a2d5e] hover:text-white" onClick={() => setMobileMenuOpen(false)}>Mechanical Engineering</Link>
                  <Link to="/academics/electrical-and-electronics-engineering" className="block px-3 py-2 rounded-md textbase font-medium text-gray-300 hover:bg-[#1a2d5e] hover:text-white" onClick={() => setMobileMenuOpen(false)}>Electrical and Electronics Engineering</Link>
                  <Link to="/academics/information-technology-engineering" className="block px-3 py-2 rounded-md textbase font-medium text-gray-300 hover:bg-[#1a2d5e] hover:text-white" onClick={() => setMobileMenuOpen(false)}>Information Technology Engineering</Link>
                  <Link to="/academics/mechatronics" className="block px-3 py-2 rounded-md textbase font-medium text-gray-300 hover:bg-[#1a2d5e] hover:text-white" onClick={() => setMobileMenuOpen(false)}>Mechatronics Engineering</Link>
                  <Link to="/academics/civil-engineering" className="block px-3 py-2 rounded-md textbase font-medium text-gray-300 hover:bg-[#1a2d5e] hover:text-white" onClick={() => setMobileMenuOpen(false)}>Civil Engineering</Link>
                  <Link to="/academics/artificial-intelligence-and-data-science-engineering" className="block px-3 py-2 rounded-md textbase font-medium text-gray-300 hover:bg-[#1a2d5e] hover:text-white" onClick={() => setMobileMenuOpen(false)}>Artificial Intelligence & Data Science Engineering</Link>
                  <Link to="/academics/science-and-humanities" className="block px-3 py-2 rounded-md textbase font-medium text-gray-300 hover:bg-[#1a2d5e] hover:text-white" onClick={() => setMobileMenuOpen(false)}>Science & Humanities - Maths, Physics, Chemistry, Communication Skill</Link>
                </div>
              )}
            </div>

            {/* R&D Cells */}
            <div>
              <button
                onClick={() => toggleMobileDropdown(3)}
                className="flex items-center justify-between w-full px-3 py-2 rounded-md textbase font-medium text-white hover:bg-[#1a2d5e]"
              >
                R&D Cells
                <ChevronDown
                  className={`ml-1 h-4 w-4 transition-transform ${
                    activeDropdownMobile === 3 ? "rotate-180" : ""
                  }`}
                />
              </button>
              {activeDropdownMobile === 3 && (
                <div className="pl-4 space-y-1 mt-1">
                  <Link to="/more/research-and-development" className="block px-3 py-2 rounded-md textbase font-medium text-gray-300 hover:bg-[#1a2d5e] hover:text-white" onClick={() => setMobileMenuOpen(false)}>IPR FILLED</Link>
                  <Link to="/more/research-and-development" className="block px-3 py-2 rounded-md textbase font-medium text-gray-300 hover:bg-[#1a2d5e] hover:text-white" onClick={() => setMobileMenuOpen(false)}>PAPER PUBLICATION CIVIL</Link>
                  <Link to="/more/research-and-development" className="block px-3 py-2 rounded-md textbase font-medium text-gray-300 hover:bg-[#1a2d5e] hover:text-white" onClick={() => setMobileMenuOpen(false)}>PAPER PUBLICATION EEE</Link>
                  <Link to="/more/research-and-development" className="block px-3 py-2 rounded-md textbase font-medium text-gray-300 hover:bg-[#1a2d5e] hover:text-white" onClick={() => setMobileMenuOpen(false)}>PAPER PUBLICATION ME</Link>
                  <Link to="/more/research-and-development" className="block px-3 py-2 rounded-md textbase font-medium text-gray-300 hover:bg-[#1a2d5e] hover:text-white" onClick={() => setMobileMenuOpen(false)}>PROJECT GRANTS</Link>
                </div>
              )}
            </div>

            {/* Admission */}
            <div>
              <button
                onClick={() => toggleMobileDropdown(4)}
                className="flex items-center justify-between w-full px-3 py-2 rounded-md textbase font-medium text-white hover:bg-[#1a2d5e]"
              >
                Admission
                <ChevronDown
                  className={`ml-1 h-4 w-4 transition-transform ${
                    activeDropdownMobile === 4 ? "rotate-180" : ""
                  }`}
                />
              </button>
              {activeDropdownMobile === 4 && (
                <div className="pl-4 space-y-1 mt-1">
                  <Link to="/admission/why-choose" className="block px-3 py-2 rounded-md textbase font-medium text-gray-300 hover:bg-[#1a2d5e] hover:text-white" onClick={() => setMobileMenuOpen(false)}>Why Choose CSIT?</Link>
                  <Link to="/admission/courses-offered" className="block px-3 py-2 rounded-md textbase font-medium text-gray-300 hover:bg-[#1a2d5e] hover:text-white" onClick={() => setMobileMenuOpen(false)}>Courses Offered</Link>
                  <Link to="/admission/admission-process" className="block px-3 py-2 rounded-md textbase font-medium text-gray-300 hover:bg-[#1a2d5e] hover:text-white" onClick={() => setMobileMenuOpen(false)}>Admission Process</Link>
                  <Link to="/admission/scholarships" className="block px-3 py-2 rounded-md textbase font-medium text-gray-300 hover:bg-[#1a2d5e] hover:text-white" onClick={() => setMobileMenuOpen(false)}>Scholarships</Link>
                  <Link to="/admission/leaflet" className="block px-3 py-2 rounded-md textbase font-medium text-gray-300 hover:bg-[#1a2d5e] hover:text-white" onClick={() => setMobileMenuOpen(false)}>Leaflet</Link>
                  <Link to="/admission/help-desk" className="block px-3 py-2 rounded-md textbase font-medium text-gray-300 hover:bg-[#1a2d5e] hover:text-white" onClick={() => setMobileMenuOpen(false)}>Help Desk</Link>
                </div>
              )}
            </div>

            {/* Initiatives */}
            <div>
              <button
                onClick={() => toggleMobileDropdown(5)}
                className="flex items-center justify-between w-full px-3 py-2 rounded-md textbase font-medium text-white hover:bg-[#1a2d5e]"
              >
                Initiatives
                <ChevronDown
                  className={`ml-1 h-4 w-4 transition-transform ${
                    activeDropdownMobile === 5 ? "rotate-180" : ""
                  }`}
                />
              </button>
              {activeDropdownMobile === 5 && (
                <div className="pl-4 space-y-1 mt-1 max-h-60 overflow-y-auto">
                  {initiativesItems.map((item, index) => (
                    <Link
                      key={index}
                      to={item.path}
                      className="block px-3 py-2 rounded-md textbase font-medium text-gray-300 hover:bg-[#1a2d5e] hover:text-white"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Placement */}
            <div>
              <button
                onClick={() => toggleMobileDropdown(6)}
                className="flex items-center justify-between w-full px-3 py-2 rounded-md textbase font-medium text-white hover:bg-[#1a2d5e]"
              >
                T&P Cell
                <ChevronDown
                  className={`ml-1 h-4 w-4 transition-transform ${
                    activeDropdownMobile === 6 ? "rotate-180" : ""
                  }`}
                />
              </button>
              {activeDropdownMobile === 6 && (
                <div className="pl-4 space-y-1 mt-1">
                  <Link to="/about-tnp-cell" className="block px-3 py-2 rounded-md textbase font-medium text-gray-300 hover:bg-[#1a2d5e] hover:text-white" onClick={() => setMobileMenuOpen(false)}>About Cell</Link>
                  <Link to="/internship" className="block px-3 py-2 rounded-md textbase font-medium text-gray-300 hover:bg-[#1a2d5e] hover:text-white" onClick={() => setMobileMenuOpen(false)}>VT & Internship</Link>
                  <Link to="/mous" className="block px-3 py-2 rounded-md textbase font-medium text-gray-300 hover:bg-[#1a2d5e] hover:text-white" onClick={() => setMobileMenuOpen(false)}>MOUs</Link>
                  <Link to="/our-recruiters" className="block px-3 py-2 rounded-md textbase font-medium text-gray-300 hover:bg-[#1a2d5e] hover:text-white" onClick={() => setMobileMenuOpen(false)}>Our Recruiters</Link>
                  <Link to="/placement-policies" className="block px-3 py-2 rounded-md textbase font-medium text-gray-300 hover:bg-[#1a2d5e] hover:text-white" onClick={() => setMobileMenuOpen(false)}>Placement Policies</Link>
                  <Link to="/team-members" className="block px-3 py-2 rounded-md textbase font-medium text-gray-300 hover:bg-[#1a2d5e] hover:text-white" onClick={() => setMobileMenuOpen(false)}>Team Members</Link>
                  <Link to="/placement-statistics" className="block px-3 py-2 rounded-md textbase font-medium text-gray-300 hover:bg-[#1a2d5e] hover:text-white" onClick={() => setMobileMenuOpen(false)}>Placement Statistics</Link>
                  <Link to="/training-programme" className="block px-3 py-2 rounded-md textbase font-medium text-gray-300 hover:bg-[#1a2d5e] hover:text-white" onClick={() => setMobileMenuOpen(false)}>Training Programme</Link>
                </div>
              )}
            </div>

            {/* Alumni */}
            <div>
              <button
                onClick={() => toggleMobileDropdown(7)}
                className="flex items-center justify-between w-full px-3 py-2 rounded-md textbase font-medium text-white hover:bg-[#1a2d5e]"
              >
                Alumni
                <ChevronDown
                  className={`ml-1 h-4 w-4 transition-transform ${
                    activeDropdownMobile === 7 ? "rotate-180" : ""
                  }`}
                />
              </button>
              {activeDropdownMobile === 7 && (
                <div className="pl-4 space-y-1 mt-1">
                  <Link to="/about-association" className="block px-3 py-2 rounded-md textbase font-medium text-gray-300 hover:bg-[#1a2d5e] hover:text-white" onClick={() => setMobileMenuOpen(false)}>About Association</Link>
                  <Link to="/activities" className="block px-3 py-2 rounded-md textbase font-medium text-gray-300 hover:bg-[#1a2d5e] hover:text-white" onClick={() => setMobileMenuOpen(false)}>Activities</Link>
                  <Link to="/presence" className="block px-3 py-2 rounded-md textbase font-medium text-gray-300 hover:bg-[#1a2d5e] hover:text-white" onClick={() => setMobileMenuOpen(false)}>Presence</Link>
                  <Link to="/registered-association" className="block px-3 py-2 rounded-md textbase font-medium text-gray-300 hover:bg-[#1a2d5e] hover:text-white" onClick={() => setMobileMenuOpen(false)}>Registered Association</Link>
                  <Link to="/team-members" className="block px-3 py-2 rounded-md textbase font-medium text-gray-300 hover:bg-[#1a2d5e] hover:text-white" onClick={() => setMobileMenuOpen(false)}>Team Members</Link>
                </div>
              )}
            </div>

           {/* Students Clubs */}
<div>
  <button
    onClick={() => toggleMobileDropdown(8)}
    className="flex items-center justify-between w-full px-3 py-2 rounded-md textbase font-medium text-white hover:bg-[#1a2d5e]"
  >
    Students Clubs
    <ChevronDown
      className={`ml-1 h-4 w-4 transition-transform ${
        activeDropdownMobile === 8 ? "rotate-180" : ""
      }`}
    />
  </button>

  {activeDropdownMobile === 8 && (
    <div className="pl-4 space-y-1 mt-1">
      <Link to="/students-clubs/introduction" className="block px-3 py-2 rounded-md textbase font-medium text-gray-300 hover:bg-[#1a2d5e] hover:text-white" onClick={() => setMobileMenuOpen(false)}>Introduction</Link>
      <Link to="/students-clubs/various-clubs" className="block px-3 py-2 rounded-md textbase font-medium text-gray-300 hover:bg-[#1a2d5e] hover:text-white" onClick={() => setMobileMenuOpen(false)}>Various Clubs</Link>
      <Link to="/students-clubs/development-program" className="block px-3 py-2 rounded-md textbase font-medium text-gray-300 hover:bg-[#1a2d5e] hover:text-white" onClick={() => setMobileMenuOpen(false)}>Development Program</Link>
      <Link to="/students-clubs/industry-interaction" className="block px-3 py-2 rounded-md textbase font-medium text-gray-300 hover:bg-[#1a2d5e] hover:text-white" onClick={() => setMobileMenuOpen(false)}>Industry Interaction</Link>
      <Link to="/students-clubs/extracurricular-activities" className="block px-3 py-2 rounded-md textbase font-medium text-gray-300 hover:bg-[#1a2d5e] hover:text-white" onClick={() => setMobileMenuOpen(false)}>Extracurricular Activities</Link>
    </div>
  )}
</div>

            {/* More */}
            <div>
              <button
                onClick={() => toggleMobileDropdown(9)}
                className="flex items-center justify-between w-full px-3 py-2 rounded-md textbase font-medium text-white hover:bg-[#1a2d5e]"
              >
                More
                <ChevronDown
                  className={`ml-1 h-4 w-4 transition-transform ${
                    activeDropdownMobile === 9 ? "rotate-180" : ""
                  }`}
                />
              </button>
              {activeDropdownMobile === 9 && (
                <div className="pl-4 space-y-1 mt-1">
                  <Link to="/more/student-affairs" className="block px-3 py-2 rounded-md textbase font-medium text-gray-300 hover:bg-[#1a2d5e] hover:text-white" onClick={() => setMobileMenuOpen(false)}>Student Affairs</Link>
                  <Link to="/more/calendar" className="block px-3 py-2 rounded-md textbase font-medium text-gray-300 hover:bg-[#1a2d5e] hover:text-white" onClick={() => setMobileMenuOpen(false)}>Calendar</Link>
                  <Link to="/more/feedback" className="block px-3 py-2 rounded-md textbase font-medium text-gray-300 hover:bg-[#1a2d5e] hover:text-white" onClick={() => setMobileMenuOpen(false)}>Feedback</Link>
                  <Link to="/more/gallery" className="block px-3 py-2 rounded-md textbase font-medium text-gray-300 hover:bg-[#1a2d5e] hover:text-white" onClick={() => setMobileMenuOpen(false)}>Gallery</Link>
                  <Link to="/more/grievances" className="block px-3 py-2 rounded-md textbase font-medium text-gray-300 hover:bg-[#1a2d5e] hover:text-white" onClick={() => setMobileMenuOpen(false)}>Grievances</Link>
                  <Link to="/more/iqac" className="block px-3 py-2 rounded-md textbase font-medium text-gray-300 hover:bg-[#1a2d5e] hover:text-white" onClick={() => setMobileMenuOpen(false)}>IQAC</Link>
                  <Link to="/more/rti" className="block px-3 py-2 rounded-md textbase font-medium text-gray-300 hover:bg-[#1a2d5e] hover:text-white" onClick={() => setMobileMenuOpen(false)}>RTI</Link>
                  <a
                    href="https://drive.google.com/drive/folders/17bERsF79PR7RLIc8k69I1wXJGbEJXyOL?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-3 py-2 rounded-md textbase font-medium text-gray-300 hover:bg-[#1a2d5e] hover:text-white"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Syllabus and Exam Papers
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}