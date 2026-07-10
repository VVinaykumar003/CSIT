import React from "react";

// Assuming logos are in the assets folder
import ieiLogo from "../../assets/professionalBodies/01.jpg";
import qcfiLogo from "../../assets/professionalBodies/02.jpg";
import isteLogo from "../../assets/professionalBodies/06.jpg";
import ieteLogo from "../../assets/professionalBodies/04.jpg";
import isoiLogo from "../../assets/professionalBodies/05.jpg";

const ProfessionalBodies = () => {
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
              Professional Bodies
            </h2>
            <p className="text-gray-200 text-sm mt-2">
              CSIT | Collaborations & Memberships
            </p>
            <div className="h-0.5 w-12 bg-white mt-3"></div>
          </div>
        </div>
      </div>

  <div className="p-6">
    <div className="space-y-8">
      {/* Institution of Engineers (India) */}
      <div className="flex flex-col md:flex-row items-start gap-6 p-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow bg-gray-50">
        <div className="w-full md:w-1/4 flex justify-center p-4 bg-white rounded-md">
          <img src={isteLogo} alt="Institution of Engineers (India) Logo" className="h-24 object-contain"/>
        </div>
        <div className="w-full md:w-3/4">
          <h3 className="text-[#0d173b] font-semibold text-xl mb-2">
            Institution of Engineers (India)
          </h3>
          <p className="text-gray-700">
            Chhatrapati Shivaji Institute of Technology got a Lifetime Institutional Membership of IE(I) in the year 2012. The Institution of Engineers (India) [IEI] is a statutory body to promote and advance the engineering and technology. It is the largest multi-disciplinary professional body of engineers encompassing 15 (fifteen) engineering disciplines with a membership of more than 820 thousand. For more information about IE (I), please click <a href="https://www.ieindia.org" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">www.ieindia.org</a>
          </p>
        </div>
      </div>

      {/* QCFI */}
      <div className="flex flex-col md:flex-row items-start gap-6 p-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow bg-gray-50">
        <div className="w-full md:w-1/4 flex justify-center p-4 bg-white rounded-md">
          <img src={qcfiLogo} alt="Quality Circle Forum of India Logo" className="h-24 object-contain"/>
        </div>
        <div className="w-full md:w-3/4">
          <h3 className="text-[#0d173b] font-semibold text-xl mb-2">
            Quality Circle Forum of India
          </h3>
          <p className="text-gray-700">
            CSIT became Institutional Member of QCFI in 2015. CSIT has privilege of hosting the 8th Chapter Convention on Quality Concepts in 2017. QCFI is recognized as the institution representing The Quality Circle Movement In India and has represented the country in several international forums. The organization has successfully implemented Quality concepts. QCFI represents India in the 13 nation International Committee that has been set up for organizing International conventions on Quality Concept Circle, annually. More details about QCFI are at <a href="https://www.qcfi.in" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">www.qcfi.in</a>
          </p>
        </div>
      </div>

      {/* ISTE */}
      <div className="flex flex-col md:flex-row items-start gap-6 p-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow bg-gray-50">
        <div className="w-full md:w-1/4 flex justify-center p-4 bg-white rounded-md">
          <img src={ieiLogo} alt="Indian Society of Technical Education Logo" className="h-24 object-contain"/>
        </div>
        <div className="w-full md:w-3/4">
          <h3 className="text-[#0d173b] font-semibold text-xl mb-2">
            Indian Society of Technical Education
          </h3>
          <p className="text-gray-700">
            CSIT became Institutional Member of ISTE, the most reputed body of Engineers, in 2004. CSIT has coordinated various activities under the ISTE. The Indian Society for Technical Education (ISTE) is the leading National Professional non-profit making Society for the Technical Education System in India. It coordinates different activities for Career Development of Teachers and Knowledge enhancement of students in member institutes. More details on ISTE are at: <a href="https://www.isteonline.in" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">www.isteonline.in</a>
          </p>
        </div>
      </div>

      {/* IETE */}
      <div className="flex flex-col md:flex-row items-start gap-6 p-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow bg-gray-50">
        <div className="w-full md:w-1/4 flex justify-center p-4 bg-white rounded-md">
          <img src={isoiLogo} alt="The Institute of Electronics & Telecommunication Engineers Logo" className="h-24 object-contain"/>
        </div>
        <div className="w-full md:w-3/4">
          <h3 className="text-[#0d173b] font-semibold text-xl mb-2">
            The Institute of Electronics & Telecommunication Engineers
          </h3>
          <p className="text-gray-700">
            CSIT became Life Organisational Member of IETE in the year 2012 with an aim to get connected to the experts and professionals in the field of electronics and Telecommunication. Founded in 1953, the IETE is the National Apex Professional body of Electronics and Telecommunication, Computer Science and IT Professionals. It serves more than 1,25,000 members. Government of India has recognised IETE as a Scientific and Industrial Research Organization (SIRO). For further information on IETE logon <a href="https://www.iete.org" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">www.iete.org</a>
          </p>
        </div>
      </div>

      {/* Instrument Society of India */}
      <div className="flex flex-col md:flex-row items-start gap-6 p-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow bg-gray-50">
        <div className="w-full md:w-1/4 flex justify-center p-4 bg-white rounded-md">
          <img src={ieteLogo} alt="Instrument Society of India Logo" className="h-24 object-contain"/>
        </div>
        <div className="w-full md:w-3/4">
          <h3 className="text-[#0d173b] font-semibold text-xl mb-2">
            Instrument Society of India
          </h3>
          <p className="text-gray-700">
            Chhatrapati Shivaji Institute of Technology became Life Institutional Membership of this Society in the year 2011 with a vision to expose our students and faculty members to the contemporary developments in Instrumentation. The Society is well known among the Instrumentation Engineers. It facilitates academic and research activities to its member-colleges and organizations. For more information about The Instrument Society of India, explore <a href="https://isu.iisc.ernet.in" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">www.isu.iisc.ernet.in</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
  );
};

export default ProfessionalBodies;
