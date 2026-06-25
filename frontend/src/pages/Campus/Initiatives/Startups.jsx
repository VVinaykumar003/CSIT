import { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function StartupPage() {
  const [activeTab, setActiveTab] = useState('introduction');
  const scrollContainerRef = useRef(null);
  
  const startups = [
    {
      id: 'introduction',
      name: 'Introduction'
    },
    {
      id: 'pylons',
      name: 'Pylons Technology',
      location: 'Durg',
      description: 'Pylons Technology is a technology-driven startup established by a team of experienced IT professionals from Chhattisgarh with extensive exposure to the global software industry. The company is committed to delivering innovative, reliable, and scalable IT solutions for educational institutions, industries, and businesses while creating meaningful career opportunities for local technology professionals.',
      strengths: [
        'Experienced team with exposure to global clients and leading IT organizations.',
        'Expertise in software development across Healthcare, Aeronautics, FMCG Manufacturing, and Automobile sectors.',
        'Agile and lean development methodology for faster project delivery.',
        'Customized, scalable, and cost-effective software solutions.',
        'Strong focus on digital transformation for educational institutions and enterprises.'
      ],
      projects: [
        'Educational Institute ERP/MIS System',
        'Online Tutorial Application for Schools and Coaching Institutes',
        'Social Media Mobile Application',
        'Legendry Bot',
        'MIS System for Corefab Projects, Hathkoj',
        'Examination Control System for CSVTU, Durg',
        'Online Tutorial System for SIVA Coaching & Institutes',
        'MIS System for Surana College, Durg'
      ],
      // ✅ ADDED: Closing line
      closingLine: 'Pylons Technology is one of the startups incubated at the CSIT Start-up Enclave, contributing to the institute\'s vision of fostering innovation, entrepreneurship, and industry-driven technological solutions in the region.'
    },
    {
      id: 'tech36',
      name: 'TECH36GARH',
      location: 'Durg',
      description: 'TECH36GARH is an innovative manufacturing startup focused on the design, development, and production of FDM (Fused Deposition Modeling) 3D printers. With a vision to promote advanced manufacturing and rapid prototyping, the company is steadily expanding its capabilities and aims to diversify into DLP (Digital Light Processing) and SLS (Selective Laser Sintering) technologies as it continues to grow.',
      strengths: [
        'Manufacturing of high-performance FDM-based 3D Printers.',
        'Rapid Prototyping and Product Design Solutions.',
        'Installation and setup of Atal Tinkering Labs (ATL).',
        'Successfully sold 7 in-house developed 3D printers.',
        'Successfully established 1 Atal Tinkering Lab (ATL).',
        'Progressing steadily towards achieving the company\'s break-even milestone.'
      ],
      projects: [
        'Design and Manufacturing of 3D Printers',
        'Atal Tinkering Lab (ATL) Setup',
        'Smart Automatic Sanitizer Dispenser',
        'Mini CNC Machine Development'
      ],
      // ✅ ADDED: Closing line
      closingLine: 'As one of the startups incubated at the CSIT Start-up Enclave, TECH36GARH reflects the institute\'s commitment to fostering innovation, advanced manufacturing, and entrepreneurship by developing indigenous technologies that support education, research, and industrial applications.'
    },
    {
      id: 'auditech',
      name: 'Audittech Industrial Services Pvt. Ltd.',
      location: '',
      description: 'Audittech Industrial Services Pvt. Ltd. is a professional consultancy firm providing specialized industrial, technical, and energy management services to industries, commercial establishments, and institutions. With a team of highly qualified experts, the company delivers sustainable, cost-effective, and regulatory-compliant solutions that help organizations improve operational efficiency, optimize energy consumption, and achieve statutory compliance.',
      strengths: [
        'Certified Energy Auditors',
        'Certified Energy Managers',
        'Sector-Specific Technical Specialists',
        'Energy Engineers',
        'Chartered Accountants and Finance Professionals',
        'Marketing and Business Development Professionals'
      ],
      services: [
        'Comprehensive Energy Audits for industrial and commercial facilities.',
        'Mandatory Energy Audits (MEA) in accordance with the Energy Conservation Act, 2001.',
        'Consultancy for the Perform, Achieve and Trade (PAT) Scheme, including Monitoring & Verification (M&V).',
        'Appointment and support of Designated Energy Managers.',
        'Implementation of ISO 50001 Energy Management Systems.',
        'Chartered Engineer and Lender\'s Engineer Services.',
        'Valuation of Movable and Immovable Properties.',
        'Technical consultancy and statutory compliance for industrial operations.',
        'Energy efficiency improvement and sustainability solutions.'
      ],
      // ✅ ADDED: Closing line
      closingLine: 'As one of the startups incubated at the CSIT Start-up Enclave, Audittech Industrial Services Pvt. Ltd. demonstrates CSIT\'s commitment to nurturing technology-driven enterprises that contribute to industrial excellence, energy conservation, sustainability, and professional consultancy services.'
    },
    {
      id: 'zager',
      name: 'Zager Digital Services',
      location: 'Durg',
      description: 'Zager Digital Services is a technology-driven startup dedicated to developing innovative Software-as-a-Service (SaaS) products, business automation solutions, enterprise applications, and digital platforms for organizations across diverse industries. The company empowers businesses and educational institutions to streamline operations, enhance productivity, and accelerate digital transformation through intelligent, scalable, and secure technology solutions.',
      strengths: [
        'Expertise in SaaS Product Development and Business Process Automation.',
        'Strong capabilities in Web Application Development, ERP Systems, and Management Platforms.',
        'Agile, customer-focused software development methodology.',
        'Scalable, secure, and cloud-ready technology solutions.',
        'Commitment to innovation and digital transformation.'
      ],
      services: [
        'SwaadSetu – Restaurant Management and QR-Based Digital Ordering Platform.',
        'EduZager – Comprehensive Educational Institution Management System.',
        'Clinic and Healthcare Management Platform.',
        'Custom ERP and Management Information System (MIS) Solutions.',
        'Website, Portal, and Web Application Development.'
      ],
      expertise: [
        'SaaS Product Development',
        'Business Automation Solutions',
        'Enterprise Resource Planning (ERP)',
        'Management Information Systems (MIS)',
        'Web and Mobile Application Development',
        'Digital Transformation Consulting'
      ],
      Website: 'https://www.zager.in/homepage',
      email: 'business@zagerdigital.com',
      // ✅ ADDED: Closing line
      closingLine: 'As one of the startups incubated at the CSIT Start-up Enclave, Zager Digital Services reflects the institute\'s vision of fostering entrepreneurship and innovation by developing cutting-edge digital solutions that enable organizations to operate more efficiently and embrace the future of technology.'
    },
    {
      id: 'soch',
      name: 'SOCH – Media Solution',
      location: '',
      description: 'SOCH – Media Solution is a creative media and branding startup dedicated to crafting impactful visual stories, memorable brand experiences, and engaging digital content. From concept development to final execution, the company provides end-to-end media production, branding, design, and marketing solutions that help businesses, creators, institutions, and organizations build a strong and lasting brand presence.',
      strengths: [
        'Expertise in pre-production, including concept development, scripting, storytelling, and screenplay writing.',
        'Professional post-production services encompassing video editing, motion graphics, color grading, and final content delivery.',
        'Complete end-to-end media production, including planning, shooting, production management, and execution.',
        'Creative direction supported by branding, graphic design, and digital marketing strategies.',
        'Extensive experience in event curation, experiential marketing, and promotional campaigns.',
        'Agile, collaborative, and client-focused approach across diverse industries and projects.'
      ],
      collaborations: [
        'Incubyte – HLTH Las Vegas',
        'Off Limits Tribe (Sportswear Brand), Delhi',
        'Taste Dubs, Bhilai',
        'Surya Ananya, Bhilai',
        'Khel Arena, Raipur',
        'Creative collaborations with renowned cricketer Shashank Singh and exclusive interview production featuring Shivam Dube.',
        'Multiple partnerships with creative agencies for media production and digital storytelling.'
      ],
      exclusiveProjects: [
        'Mercedes-Benz (Conceptual Project)',
        'Urban Monkey',
        'Roar Fox',
        'Bewakoof',
        'CSGI Durg'
      ],
      liveEvents: [
        'Aakash Gupta Live – Durg–Bhilai',
        'Gajendra Verma Live – Durg–Bhilai',
        'Zakir Khan Live – Durg'
      ],
      globalAssociation: 'Expanding its creative footprint internationally, SOCH collaborates with Social Sage Australia, delivering professionally edited digital content for more than 50 restaurants and brands across Australia, showcasing its expertise in global content production and digital marketing support.',
      services: [
        'Brand Identity & Creative Strategy',
        'Corporate Film Production',
        'Promotional & Commercial Video Production',
        'Photography & Videography',
        'Video Editing & Motion Graphics',
        'Graphic Design & Branding',
        'Digital Marketing Content',
        'Event Coverage & Live Production',
        'Social Media Content Creation',
        'Creative Consulting & Storytelling'
      ],
      // ✅ ADDED: Closing line
      closingLine: 'As one of the startups incubated at the CSIT Start-up Enclave, SOCH – Media Solution exemplifies the entrepreneurial spirit nurtured at Chhatrapati Shivaji Institute of Technology. Through innovation, creativity, and strategic communication, the startup is helping businesses and organizations transform ideas into compelling visual experiences with both national and international impact.'
    }
  ];

  const scrollTabs = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen w-full bg-gray-50 font-sans">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="bg-[#0d173b] text-white p-6 md:p-8">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold">Start-ups at CSIT</h1>
            <p className="text-sm md:text-base mt-1">CSIT | Our Startups</p>
            <hr className="w-16 border-t-2 border-white mt-2 mb-0" />
          </div>
        </div>
       
        {/* Custom Scrollable Tab Navigation */}
        <div className="relative flex items-center mb-8 mt-6 px-2">
          <button
            onClick={() => scrollTabs('left')}
            className="absolute left-0 z-10 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors border border-gray-200"
            aria-label="Scroll left"
          >
            <ChevronLeft size={20} className="text-[#0d173b]" />
          </button>

          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-2 py-2 px-2 mx-8 no-scrollbar scroll-smooth"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch',
            }}
          >
            {startups.map((startup) => (
              <button
                key={startup.id}
                onClick={() => setActiveTab(startup.id)}
                className={`px-4 py-3 rounded-lg text-sm md:text-base font-medium transition-all duration-200 whitespace-nowrap flex-shrink-0
                  ${activeTab === startup.id 
                    ? 'bg-[#0d173b] text-white shadow-md' 
                    : 'text-gray-600 hover:bg-blue-50 bg-white border border-gray-200'}`}
              >
                {startup.name}
              </button>
            ))}
          </div>

          <button
            onClick={() => scrollTabs('right')}
            className="absolute right-0 z-10 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors border border-gray-200"
            aria-label="Scroll right"
          >
            <ChevronRight size={20} className="text-[#0d173b]" />
          </button>
        </div>

        {/* Content Area */}
        <div className="bg-white rounded-xl shadow-md p-4 md:p-6 mb-8">
          
          {/* Introduction Tab */}
          {activeTab === 'introduction' && (
            <div className="animate-fadeIn">
              <h2 className="text-2xl font-bold text-[#0d173b] mb-6">Start-ups at CSIT</h2>
              
              <div className="bg-blue-50 rounded-lg p-5 border-l-4 border-blue-400 mb-6">
                <p className="text-blue-900">
                  The Chhatrapati Shivaji Institute of Technology (CSIT) fosters a vibrant culture of innovation and entrepreneurship by providing an enabling ecosystem for aspiring entrepreneurs, innovators, and startup founders.
                </p>
              </div>
              
              <p className="text-gray-700 mb-4">
                CSIT offers a modern co-working environment equipped with open workspace seating, fully furnished meeting rooms, and presentation facilities that support collaborative working, client interactions, mentoring sessions, business planning, and investor presentations. The institute also provides access to expert guidance, networking opportunities, and industry interactions to help transform innovative ideas into successful ventures.
              </p>

              <p className="text-gray-700 mb-4">
                To encourage entrepreneurial growth, CSIT has established a dedicated <strong>Start-up Enclave</strong> within the campus. The enclave serves as an incubation space where emerging startups can develop, validate, and scale their business ideas in a supportive academic and industry-oriented environment.
              </p>

              <div className="bg-blue-50 rounded-lg p-5 border-l-4 border-blue-400 mb-8">
                <p className="text-blue-900 font-medium">
                  At present, five startup companies are successfully operating from the CSIT Start-up Enclave, reflecting the institute's commitment to nurturing innovation and creating future entrepreneurs.
                </p>
              </div>
            </div>
          )}
        
          {/* Startup Tabs */}
          {activeTab !== 'introduction' && (
            <div className="animate-fadeIn">
              {startups.filter(s => s.id === activeTab).map(startup => (
                <div key={startup.id}>
                  <div className="border-b border-gray-200 pb-4 mb-6">
                    <h2 className="text-2xl font-bold text-[#0d173b]">{startup.name}</h2>
                    {startup.location && (
                      <p className="text-gray-500 mt-1">
                        <span className="inline-block mr-2">📍</span> 
                        {startup.location}
                      </p>
                    )}
                  </div>
                  
                  <div className="bg-blue-50 rounded-lg p-5 mb-8">
                    <p className="text-gray-700">{startup.description}</p>
                  </div>
                  
                  {/* Strengths Section */}
                  {startup.strengths && startup.strengths.length > 0 && (
                    <div className="mb-8">
                      <h3 className="text-xl font-semibold text-[#0d173b] mb-4 pb-2 border-b border-gray-100">
                        Core Strengths
                      </h3>
                      <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
                        {startup.strengths.map((strength, idx) => (
                          <div 
                            key={idx} 
                            className={`p-4 ${idx !== startup.strengths.length - 1 ? 'border-b border-gray-100' : ''} hover:bg-blue-50 transition-colors`}
                          >
                            <span className="text-blue-500 mr-3">•</span>
                            <span className="text-gray-700">{strength}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {/* Projects Section */}
                  {startup.projects && startup.projects.length > 0 && (
                    <div className="mb-8">
                      <h3 className="text-xl font-semibold text-[#0d173b] mb-4 pb-2 border-b border-gray-100">
                        Key Projects
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        {startup.projects.map((project, idx) => (
                          <div 
                            key={idx} 
                            className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow hover:border-blue-200 transition-all"
                          >
                            <span className="text-blue-500 mr-2">•</span>
                            <span className="text-gray-700">{project}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {/* Services Section */}
                  {startup.services && startup.services.length > 0 && (
                    <div className="mb-8">
                      <h3 className="text-xl font-semibold text-[#0d173b] mb-4 pb-2 border-b border-gray-100">
                        Services Offered
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        {startup.services.map((service, idx) => (
                          <div 
                            key={idx} 
                            className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow hover:border-blue-200 transition-all"
                          >
                            <span className="text-blue-500 mr-2">•</span>
                            <span className="text-gray-700">{service}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {/* Expertise Section (Zager specific) */}
                  {startup.expertise && startup.expertise.length > 0 && (
                    <div className="mb-8">
                      <h3 className="text-xl font-semibold text-[#0d173b] mb-4 pb-2 border-b border-gray-100">
                        Areas of Expertise
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        {startup.expertise.map((item, idx) => (
                          <div 
                            key={idx} 
                            className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow hover:border-blue-200 transition-all"
                          >
                            <span className="text-blue-500 mr-2">•</span>
                            <span className="text-gray-700">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {/* Collaborations Section (SOCH specific) */}
                  {startup.collaborations && startup.collaborations.length > 0 && (
                    <div className="mb-8">
                      <h3 className="text-xl font-semibold text-[#0d173b] mb-4 pb-2 border-b border-gray-100">
                        Notable Collaborations
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        {startup.collaborations.map((item, idx) => (
                          <div 
                            key={idx} 
                            className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow hover:border-blue-200 transition-all"
                          >
                            <span className="text-blue-500 mr-2">•</span>
                            <span className="text-gray-700">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {/* Exclusive Projects Section (SOCH specific) */}
                  {startup.exclusiveProjects && startup.exclusiveProjects.length > 0 && (
                    <div className="mb-8">
                      <h3 className="text-xl font-semibold text-[#0d173b] mb-4 pb-2 border-b border-gray-100">
                        Exclusive Projects
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        {startup.exclusiveProjects.map((item, idx) => (
                          <div 
                            key={idx} 
                            className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow hover:border-blue-200 transition-all"
                          >
                            <span className="text-blue-500 mr-2">•</span>
                            <span className="text-gray-700">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {/* Live Events Section (SOCH specific) */}
                  {startup.liveEvents && startup.liveEvents.length > 0 && (
                    <div className="mb-8">
                      <h3 className="text-xl font-semibold text-[#0d173b] mb-4 pb-2 border-b border-gray-100">
                        Live Event Coverage
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        {startup.liveEvents.map((item, idx) => (
                          <div 
                            key={idx} 
                            className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow hover:border-blue-200 transition-all"
                          >
                            <span className="text-blue-500 mr-2">•</span>
                            <span className="text-gray-700">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {/* Global Association (SOCH specific) */}
                  {startup.globalAssociation && (
                    <div className="mb-8">
                      <h3 className="text-xl font-semibold text-[#0d173b] mb-4 pb-2 border-b border-gray-100">
                        Global Association
                      </h3>
                      <div className="bg-blue-50 rounded-lg p-5 border-l-4 border-blue-400">
                        <p className="text-gray-700">{startup.globalAssociation}</p>
                      </div>
                    </div>
                  )}
                  
                  {/* ✅ ADDED: Closing Line - For ALL Startups */}
                  {startup.closingLine && (
                    <div className="mt-8 p-5 bg-gradient-to-r from-[#0d173b] to-[#1a2b5f] rounded-lg border-l-4 border-yellow-400">
                      <p className="text-white text-sm md:text-base leading-relaxed">
                        {startup.closingLine}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* CSS */}
      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-in-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}