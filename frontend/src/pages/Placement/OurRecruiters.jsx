import React from 'react';

const OurRecruiters = () => {
  return (
    <div className="bg-white shadow-md rounded-md overflow-hidden">
      {/* Header */}
      <div className="h-32 sm:h-40 bg-gradient-to-r from-[#0d173b] to-[#1e305f] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full transform rotate-12 scale-150 translate-y-10">
            <div className="w-20 h-60 bg-white/10 rounded-full blur-xl absolute -left-10"></div>
            <div className="w-20 h-40 bg-white/10 rounded-full blur-xl absolute right-20 top-10"></div>
          </div>
        </div>
        <div className="absolute inset-0 flex items-center px-4 sm:px-6">
          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
              Our Recruiters
            </h2>
            <p className="text-gray-200 text-xs sm:text-sm mt-1 sm:mt-2">
              Trusted by Industry Leaders – Empowering Students with Career Opportunities.
            </p>
            <div className="h-0.5 w-8 sm:w-12 bg-white mt-2 sm:mt-3"></div>
          </div>
        </div>
      </div>

      <div className="p-4 sm:p-6">
        {/* Introduction */}
        <div className="mb-6">
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
            CSIT has built strong and long-standing relationships with leading organizations across diverse industry sectors. The Training &amp; Placement Cell actively collaborates with these companies to create meaningful career opportunities for students and ensure successful campus recruitment outcomes.
          </p>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mt-3">
            With a focus on quality placements and industry alignment, the institute continues to strengthen its network of recruiters year after year.
          </p>
        </div>

        {/* Our Recruiting Partners - Sectors */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-[#0d173b] mb-3">
            Our Recruiting Partners
          </h3>
          <p className="text-sm text-gray-600 mb-3">
            A wide range of reputed companies regularly participate in our campus recruitment drives, representing sectors such as:
          </p>
          <ul className="space-y-1.5 mb-3">
            <li className="flex items-start gap-3 text-sm text-gray-700">
              <span className="text-[#0d173b] font-bold mt-0.5"></span>
              Core Engineering Industries
            </li>
            <li className="flex items-start gap-3 text-sm text-gray-700">
              <span className="text-[#0d173b] font-bold mt-0.5"></span>
              IT &amp; IT-Enabled Services
            </li>
            <li className="flex items-start gap-3 text-sm text-gray-700">
              <span className="text-[#0d173b] font-bold mt-0.5"></span>
              Manufacturing &amp; Production
            </li>
            <li className="flex items-start gap-3 text-sm text-gray-700">
              <span className="text-[#0d173b] font-bold mt-0.5"></span>
              Consultancy Firms
            </li>
            <li className="flex items-start gap-3 text-sm text-gray-700">
              <span className="text-[#0d173b] font-bold mt-0.5"></span>
              Finance &amp; Banking
            </li>
            <li className="flex items-start gap-3 text-sm text-gray-700">
              <span className="text-[#0d173b] font-bold mt-0.5"></span>
              Pharmaceutical &amp; Healthcare
            </li>
            <li className="flex items-start gap-3 text-sm text-gray-700">
              <span className="text-[#0d173b] font-bold mt-0.5"></span>
              Research &amp; Development Organizations
            </li>
          </ul>
          <p className="text-sm text-gray-600">
            These organizations provide students with excellent platforms to begin their professional journeys and achieve long-term career growth.
          </p>
        </div>

        {/* Our Commitment */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-[#0d173b] mb-3">
            Our Commitment
          </h3>
          <ul className="space-y-1.5">
            <li className="flex items-start gap-3 text-sm text-gray-700">
              <span className="text-[#0d173b] font-bold mt-0.5"></span>
              Maintaining strong industry relationships
            </li>
            <li className="flex items-start gap-3 text-sm text-gray-700">
              <span className="text-[#0d173b] font-bold mt-0.5"></span>
              Understanding recruiter expectations and requirements
            </li>
            <li className="flex items-start gap-3 text-sm text-gray-700">
              <span className="text-[#0d173b] font-bold mt-0.5"></span>
              Preparing students as per current industry standards
            </li>
            <li className="flex items-start gap-3 text-sm text-gray-700">
              <span className="text-[#0d173b] font-bold mt-0.5"></span>
              Ensuring smooth and professional recruitment processes
            </li>
          </ul>
        </div>

        {/* Recruitment Process */}
        <div>
          <h3 className="text-lg font-semibold text-[#0d173b] mb-2">
            Recruitment Process
          </h3>
          <p className="text-sm text-gray-600 mb-2 italic">
            "Prepare – Perform – Get Placed: A structured pathway to career success."
          </p>
          <p className="text-sm text-gray-600 mb-4">
            The Recruitment Process at CSIT is designed to ensure a smooth, transparent, and efficient interaction between recruiters and students. The Training &amp; Placement Cell coordinates every stage of the process, enabling companies to identify and recruit the most suitable candidates while providing students with the best career opportunities.
          </p>
          <div className="space-y-3">
            <div className="bg-gray-50 p-3 rounded-lg border-l-4 border-[#0d173b]">
              <h4 className="font-semibold text-[#0d173b] text-sm">1. Company Engagement</h4>
              <p className="text-sm text-gray-600 mt-1">Reputed companies are invited to the campus for recruitment drives. The T&amp;P Cell maintains continuous interaction with recruiters to understand their requirements and expectations.</p>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg border-l-4 border-[#1e305f]">
              <h4 className="font-semibold text-[#0d173b] text-sm">2. Student Preparation</h4>
              <p className="text-sm text-gray-600 mt-1">Students undergo structured pre-placement training, including aptitude tests, technical sessions, group discussions, and mock interviews to enhance their readiness for the selection process.</p>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg border-l-4 border-[#0d173b]">
              <h4 className="font-semibold text-[#0d173b] text-sm">3. Pre-Placement Activities</h4>
              <p className="text-sm text-gray-600 mt-1">Companies may conduct:</p>
              <ul className="list-disc pl-5 mt-1 text-sm text-gray-600">
                <li>Pre-Placement Talks (PPTs)</li>
                <li>Written/Aptitude Tests</li>
                <li>Group Discussions</li>
                <li>Technical &amp; HR Interviews</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg border-l-4 border-[#1e305f]">
              <h4 className="font-semibold text-[#0d173b] text-sm">4. Recruitment Drive Execution</h4>
              <p className="text-sm text-gray-600 mt-1">The Placement Cell provides complete logistical and infrastructural support to ensure smooth conduct of all recruitment activities on campus.</p>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg border-l-4 border-[#0d173b]">
              <h4 className="font-semibold text-[#0d173b] text-sm">5. Selection &amp; Offer</h4>
              <p className="text-sm text-gray-600 mt-1">Based on performance, shortlisted candidates receive offer letters from the recruiting organizations.</p>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg border-l-4 border-[#1e305f]">
              <h4 className="font-semibold text-[#0d173b] text-sm">6. Feedback &amp; Improvement</h4>
              <p className="text-sm text-gray-600 mt-1">Regular feedback from recruiters and students is collected to continuously improve training programs and placement outcomes.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurRecruiters;