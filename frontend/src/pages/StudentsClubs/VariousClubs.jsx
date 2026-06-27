import React, { useState } from "react";

const VariousClubs = () => {
  const [expandedClub, setExpandedClub] = useState(null);

  const clubsData = [
    {
      id: "skill-development",
      name: "Skill Development Cell",
      icon: "🎯",
      fullContent: (
        <>
          <p className="text-gray-700 text-sm leading-relaxed mb-4">
            The Skill Development Cell at Chhatrapati Shivaji Institute of Technology is dedicated to enhancing the employability and professional competencies of students. The cell acts as a bridge between academic learning and industry expectations by focusing on practical skills, personality development, and career readiness.
          </p>
          <p className="text-gray-700 text-sm leading-relaxed mb-4">
            The SDC works closely with the Training &amp; Placement Cell to ensure that students are well-prepared to meet the demands of the corporate world and competitive examinations.
          </p>

          <h4 className="font-semibold text-[#0d173b] text-sm mb-2">Objectives</h4>
          <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700 mb-4">
            <li>To develop industry-relevant technical and soft skills</li>
            <li>To improve communication, aptitude, and problem-solving abilities</li>
            <li>To prepare students for campus placements and higher studies</li>
            <li>To promote continuous learning and self-improvement</li>
          </ul>

          <h4 className="font-semibold text-[#0d173b] text-sm mb-2">Key Activities</h4>
          <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700 mb-4">
            <li><span className="font-medium">Aptitude &amp; Reasoning Training:</span> Regular sessions on quantitative aptitude, logical reasoning, and verbal ability</li>
            <li><span className="font-medium">Soft Skills &amp; Personality Development:</span> Communication skills, group discussions, interview techniques, and confidence building</li>
            <li><span className="font-medium">Technical Skill Enhancement:</span> Programming, core engineering concepts, and emerging technologies</li>
            <li><span className="font-medium">Mock Interviews &amp; GD Sessions:</span> Simulated recruitment processes to prepare students for real-time placements</li>
            <li><span className="font-medium">Resume Building &amp; Career Guidance:</span> Professional resume writing, LinkedIn profile development, and career counseling</li>
            <li><span className="font-medium">Certification &amp; Value-Added Programs:</span> Industry-oriented courses in collaboration with external training partners</li>
          </ul>

          <h4 className="font-semibold text-[#0d173b] text-sm mb-2">Faculty Coordinator</h4>
          <p className="text-sm text-gray-700 mb-4">Prof. Kamlesh Upadhyay – Assistant Professor [Management]</p>

          <h4 className="font-semibold text-[#0d173b] text-sm mb-2">Student Coordinators</h4>
          <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700 mb-4">
            <li>[Student Name], Final Year (Skill Lead)</li>
            <li>[Student Name], Third Year (Training Coordinator)</li>
          </ul>

          <h4 className="font-semibold text-[#0d173b] text-sm mb-2">Outcomes</h4>
          <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700 mb-4">
            <li>Improved placement performance and higher employability rates</li>
            <li>Enhanced confidence and communication skills among students</li>
            <li>Better industry readiness and professional grooming</li>
            <li>Increased participation in internships and certification programs</li>
          </ul>

          <h4 className="font-semibold text-[#0d173b] text-sm mb-2">Our Vision</h4>
          <p className="text-sm text-gray-700 italic">To create skilled, confident, and industry-ready professionals who can contribute effectively to the growth of organizations and society.</p>
        </>
      ),
    },
    {
      id: "coding",
      name: "Coding Club",
      icon: "💻",
      fullContent: (
        <>
          <p className="text-gray-700 text-sm leading-relaxed mb-4">
            The Coding Club at Chhatrapati Shivaji Institute of Technology is a vibrant community of passionate programmers and problem solvers. The club is dedicated to developing strong coding skills, logical thinking, and a competitive mindset among students.
          </p>
          <p className="text-gray-700 text-sm leading-relaxed mb-4">
            It provides a collaborative environment where students can learn, practice, and excel in programming while preparing for placements, internships, and national-level competitions.
          </p>

          <h4 className="font-semibold text-[#0d173b] text-sm mb-2">Objectives</h4>
          <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700 mb-4">
            <li>To strengthen programming and problem-solving skills</li>
            <li>To promote a coding culture across all branches</li>
            <li>To prepare students for technical interviews and coding rounds</li>
            <li>To encourage participation in competitive programming and hackathons</li>
          </ul>

          <h4 className="font-semibold text-[#0d173b] text-sm mb-2">Key Activities</h4>
          <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700 mb-4">
            <li><span className="font-medium">Programming Workshops:</span> Sessions on C, C++, Java, Python, Data Structures &amp; Algorithms</li>
            <li><span className="font-medium">Coding Contests:</span> Weekly and monthly contests to enhance problem-solving speed and accuracy</li>
            <li><span className="font-medium">Competitive Programming Practice:</span> Training for platforms like LeetCode, CodeChef, HackerRank</li>
            <li><span className="font-medium">Hackathons &amp; Innovation Challenges:</span> Participation in internal and national-level hackathons</li>
            <li><span className="font-medium">Project Development:</span> Real-time projects, open-source contributions, and GitHub collaboration</li>
            <li><span className="font-medium">Placement-Oriented Training:</span> DSA practice, coding interview preparation, and problem-solving sessions</li>
          </ul>

          <h4 className="font-semibold text-[#0d173b] text-sm mb-2">Faculty Coordinator</h4>
          <p className="text-sm text-gray-700 mb-4">Prof. Kranti Kumar Jain - Assistant Professor, Department of Computer Science &amp; Engineering</p>

          <h4 className="font-semibold text-[#0d173b] text-sm mb-2">Student Coordinators</h4>
          <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700 mb-4">
            <li>[Student Name], Final Year, CSE (Coding Club Lead)</li>
            <li>[Student Name], Third Year, IT (Competitive Programming Lead)</li>
          </ul>

          <h4 className="font-semibold text-[#0d173b] text-sm mb-2">Achievements &amp; Highlights</h4>
          <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700 mb-4">
            <li>Active participation in national-level coding competitions</li>
            <li>Students shortlisted in coding rounds of reputed companies</li>
            <li>Contribution to open-source projects</li>
            <li>Regular coding practice sessions with measurable progress</li>
          </ul>

          <h4 className="font-semibold text-[#0d173b] text-sm mb-2">Why Join Coding Club?</h4>
          <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700 mb-4">
            <li>Improve problem-solving and analytical thinking</li>
            <li>Gain hands-on programming experience</li>
            <li>Prepare effectively for placements and internships</li>
            <li>Build a strong coding profile (GitHub, competitive platforms)</li>
          </ul>

          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-[#0d173b] border-opacity-20 p-4 rounded-lg mt-4">
            <p className="text-sm text-gray-700 italic">
              "Whether you are a beginner or an advanced coder, the Coding Club at Chhatrapati Shivaji Institute of Technology provides the right platform to learn, compete, and grow in the world of programming."
            </p>
          </div>
        </>
      ),
    },
    {
      id: "entrepreneurship",
      name: "Entrepreneurship & Innovation Club",
      icon: "🚀",
      fullContent: (
        <>
          <p className="text-gray-700 text-sm leading-relaxed mb-4">
            The Entrepreneurship &amp; Innovation Club at Chhatrapati Shivaji Institute of Technology is dedicated to fostering creativity, problem-solving, and an entrepreneurial mindset among students. The club provides a platform for aspiring innovators to transform ideas into impactful solutions and potential business ventures.
          </p>
          <p className="text-gray-700 text-sm leading-relaxed mb-4">
            It encourages students to think beyond conventional career paths and equips them with the skills required to become future entrepreneurs and industry leaders.
          </p>

          <h4 className="font-semibold text-[#0d173b] text-sm mb-2">Objectives</h4>
          <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700 mb-4">
            <li>To promote entrepreneurial thinking and innovation culture</li>
            <li>To support students in developing startup ideas</li>
            <li>To bridge the gap between ideas and execution</li>
            <li>To encourage interdisciplinary collaboration and problem-solving</li>
          </ul>

          <h4 className="font-semibold text-[#0d173b] text-sm mb-2">Key Activities</h4>
          <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700 mb-4">
            <li><span className="font-medium">Startup Awareness Programs:</span> Sessions on entrepreneurship basics, startup ecosystem, and funding opportunities</li>
            <li><span className="font-medium">Ideation &amp; Innovation Workshops:</span> Design thinking, problem identification, and solution development</li>
            <li><span className="font-medium">Business Plan Competitions:</span> Opportunities for students to pitch their ideas and receive expert feedback</li>
            <li><span className="font-medium">Guest Lectures &amp; Mentorship:</span> Interaction with successful entrepreneurs, startup founders, and industry experts</li>
            <li><span className="font-medium">Hackathons &amp; Innovation Challenges:</span> Events focused on solving real-world problems</li>
            <li><span className="font-medium">Incubation &amp; Support:</span> Guidance for prototype development, project funding, and startup incubation</li>
          </ul>

          <h4 className="font-semibold text-[#0d173b] text-sm mb-2">Faculty Coordinator</h4>
          <p className="text-sm text-gray-700 mb-4">Prof. Anmol Bharadwaj - Assistant Professor, Department of Civil Engineering</p>

          <h4 className="font-semibold text-[#0d173b] text-sm mb-2">Student Coordinators</h4>
          <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700 mb-4">
            <li>[Student Name], Final Year (Club President)</li>
            <li>[Student Name], Third Year (Startup Lead)</li>
          </ul>

          <h4 className="font-semibold text-[#0d173b] text-sm mb-2">Achievements &amp; Highlights</h4>
          <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700 mb-4">
            <li>Student participation in national-level startup competitions</li>
            <li>Innovative project ideas developed and presented</li>
            <li>Collaboration with industry experts and mentors</li>
            <li>Growing interest in entrepreneurship among students</li>
          </ul>

          <h4 className="font-semibold text-[#0d173b] text-sm mb-2">Our Vision</h4>
          <p className="text-sm text-gray-700 italic mb-4">To create a culture of innovation and entrepreneurship at Chhatrapati Shivaji Institute of Technology, empowering students to become job creators rather than job seekers.</p>

          <h4 className="font-semibold text-[#0d173b] text-sm mb-2">Why Join This Club?</h4>
          <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700 mb-4">
            <li>Learn how to convert ideas into real-world solutions</li>
            <li>Gain exposure to startup ecosystems and business strategies</li>
            <li>Develop leadership, creativity, and risk-taking abilities</li>
            <li>Build a strong foundation for launching your own venture</li>
          </ul>

          <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 p-4 rounded-lg mt-4">
            <p className="text-sm text-gray-700 italic">
              "Join the Movement. The Entrepreneurship &amp; Innovation Club invites all students with ideas, curiosity, and ambition to be part of a journey that transforms thinking into action and vision into reality."
            </p>
          </div>
        </>
      ),
    },
    {
      id: "sports",
      name: "Sports Club",
      icon: "⚽",
      fullContent: (
        <>
          <p className="text-gray-700 text-sm leading-relaxed mb-4">
            The Sports Club at Chhatrapati Shivaji Institute of Technology plays a vital role in promoting physical fitness, mental well-being, and team spirit among students. The club encourages active participation in sports and fosters a culture of discipline, leadership, and sportsmanship.
          </p>
          <p className="text-gray-700 text-sm leading-relaxed mb-4">
            It provides opportunities for students to excel in both indoor and outdoor games while representing the institute at inter-college and university-level competitions.
          </p>

          <h4 className="font-semibold text-[#0d173b] text-sm mb-2">Objectives</h4>
          <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700 mb-4">
            <li>To promote physical fitness and a healthy lifestyle</li>
            <li>To develop teamwork, leadership, and discipline</li>
            <li>To identify and nurture sports talent</li>
            <li>To encourage participation in competitive sports</li>
          </ul>

          <h4 className="font-semibold text-[#0d173b] text-sm mb-2">Key Activities</h4>
          <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700 mb-4">
            <li><span className="font-medium">Annual Sports Meet:</span> A flagship event featuring athletics and various sports competitions</li>
            <li><span className="font-medium">Inter-Department Tournaments:</span> Competitive events within the institute to encourage participation</li>
            <li><span className="font-medium">Inter-College Competitions:</span> Participation in tournaments at university and state levels</li>
            <li><span className="font-medium">Regular Practice Sessions:</span> Training and practice schedules for different sports</li>
            <li><span className="font-medium">Fitness &amp; Wellness Programs:</span> Yoga sessions, fitness awareness, and health camps</li>
          </ul>

          <h4 className="font-semibold text-[#0d173b] text-sm mb-2">Sports Offered</h4>
          <p className="text-sm text-gray-700 mb-4">Cricket | Football | Volleyball | Badminton | Kabaddi | Table Tennis | Athletics</p>

          <h4 className="font-semibold text-[#0d173b] text-sm mb-2">Faculty Coordinator</h4>
          <p className="text-sm text-gray-700 mb-4">Prof Shubham Chandrakar - Assistant Professor, Department of Civil Engineering</p>

          <h4 className="font-semibold text-[#0d173b] text-sm mb-2">Student Coordinators</h4>
          <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700 mb-4">
            <li>[Student Name], Final Year (Sports Captain)</li>
            <li>[Student Name], Third Year (Vice Captain)</li>
          </ul>

          <h4 className="font-semibold text-[#0d173b] text-sm mb-2">Achievements &amp; Highlights</h4>
          <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700 mb-4">
            <li>Participation in university-level tournaments under CSVTU</li>
            <li>Winners and runners-up in inter-college sports events</li>
            <li>Active involvement of students across all departments</li>
            <li>Recognition for discipline and team performance</li>
          </ul>

          <h4 className="font-semibold text-[#0d173b] text-sm mb-2">Why Join Sports Club?</h4>
          <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700 mb-4">
            <li>Maintain physical and mental fitness</li>
            <li>Develop leadership and teamwork skills</li>
            <li>Experience competitive sports environment</li>
            <li>Balance academics with extracurricular excellence</li>
          </ul>

          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 p-4 rounded-lg mt-4">
            <p className="text-sm text-gray-700 italic">
              "Join the Team. The Sports Club at Chhatrapati Shivaji Institute of Technology invites all students to actively participate, stay fit, and represent the institute with pride."
            </p>
          </div>
        </>
      ),
    },
    {
      id: "arts",
      name: "Arts Club",
      icon: "🎨",
      fullContent: (
        <>
          <p className="text-gray-700 text-sm leading-relaxed mb-4">
            The Arts Club at Chhatrapati Shivaji Institute of Technology provides a creative platform for students to explore and showcase their artistic talents. The club nurtures imagination, self-expression, and aesthetic appreciation through various forms of visual and performing arts.
          </p>
          <p className="text-gray-700 text-sm leading-relaxed mb-4">
            It encourages students to go beyond technical academics and engage in creative pursuits that enhance their personality and emotional intelligence.
          </p>

          <h4 className="font-semibold text-[#0d173b] text-sm mb-2">Objectives</h4>
          <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700 mb-4">
            <li>To promote creativity and artistic expression</li>
            <li>To develop aesthetic sense and design thinking</li>
            <li>To provide a platform for showcasing talent</li>
            <li>To encourage participation in cultural and art-based events</li>
          </ul>

          <h4 className="font-semibold text-[#0d173b] text-sm mb-2">Key Activities</h4>
          <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700 mb-4">
            <li><span className="font-medium">Art &amp; Craft Workshops:</span> Sessions on sketching, painting, calligraphy, and handmade crafts</li>
            <li><span className="font-medium">Poster &amp; Painting Competitions:</span> Thematic competitions on social, cultural, and technical topics</li>
            <li><span className="font-medium">Rangoli &amp; Mehendi Competitions:</span> Traditional art events during festivals and celebrations</li>
            <li><span className="font-medium">Exhibitions &amp; Displays:</span> Showcasing student artwork within the campus</li>
            <li><span className="font-medium">Event Decoration &amp; Creative Design:</span> Designing stages, backdrops, and visual themes for college events</li>
          </ul>

          <h4 className="font-semibold text-[#0d173b] text-sm mb-2">Faculty Coordinator</h4>
          <p className="text-sm text-gray-700 mb-4">Prof. [Faculty Name] Assistant Professor, Department of Humanities / Fine Arts</p>

          <h4 className="font-semibold text-[#0d173b] text-sm mb-2">Student Coordinators</h4>
          <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700 mb-4">
            <li>[Student Name], Final Year (Arts Club Lead)</li>
            <li>[Student Name], Third Year (Creative Head)</li>
          </ul>

          <h4 className="font-semibold text-[#0d173b] text-sm mb-2">Achievements &amp; Highlights</h4>
          <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700 mb-4">
            <li>Active participation in inter-college art competitions</li>
            <li>Creative contributions to institutional events and fests</li>
            <li>Recognition for innovative designs and artwork</li>
            <li>Growing student engagement in creative activities</li>
          </ul>

          <h4 className="font-semibold text-[#0d173b] text-sm mb-2">Why Join Arts Club?</h4>
          <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700 mb-4">
            <li>Explore and enhance your creative skills</li>
            <li>Express ideas through art and design</li>
            <li>Participate in exhibitions and competitions</li>
            <li>Contribute creatively to campus events</li>
          </ul>

          <div className="bg-gradient-to-r from-rose-50 to-pink-50 border border-rose-200 p-4 rounded-lg mt-4">
            <p className="text-sm text-gray-700 italic">
              "Join the Creative Community. The Arts Club at Chhatrapati Shivaji Institute of Technology welcomes all students with a passion for creativity to come forward, express themselves, and inspire others through art."
            </p>
          </div>
        </>
      ),
    },
    {
      id: "cultural",
      name: "Cultural Club",
      icon: "🎭",
      fullContent: (
        <>
          <p className="text-gray-700 text-sm leading-relaxed mb-4">
            The Cultural Club at Chhatrapati Shivaji Institute of Technology brings life and energy to campus by promoting creativity, cultural awareness, and artistic expression. It provides a vibrant platform for students to showcase their talents in music, dance, drama, and various performing arts.
          </p>
          <p className="text-gray-700 text-sm leading-relaxed mb-4">
            The club plays a key role in organizing major cultural events and celebrations, making campus life more engaging and memorable.
          </p>

          <h4 className="font-semibold text-[#0d173b] text-sm mb-2">Objectives</h4>
          <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700 mb-4">
            <li>To promote cultural diversity and artistic expression</li>
            <li>To encourage participation in extracurricular activities</li>
            <li>To develop confidence, creativity, and stage presence</li>
            <li>To organize cultural events and celebrations</li>
          </ul>

          <h4 className="font-semibold text-[#0d173b] text-sm mb-2">Key Activities</h4>
          <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700 mb-4">
            <li><span className="font-medium">Annual Cultural Fest:</span> A flagship event featuring performances, competitions, and celebrity nights</li>
            <li><span className="font-medium">Dance, Music &amp; Drama Events:</span> Solo and group performances across various genres</li>
            <li><span className="font-medium">Fashion Shows &amp; Talent Hunts:</span> Platforms to showcase style, creativity, and unique talents</li>
            <li><span className="font-medium">Festival Celebrations:</span> Events for Diwali, Holi, Navratri, Independence Day, and other occasions</li>
            <li><span className="font-medium">Open Mic &amp; Cultural Evenings:</span> Informal events encouraging student participation and expression</li>
          </ul>

          <h4 className="font-semibold text-[#0d173b] text-sm mb-2">Faculty Coordinator</h4>
          <p className="text-sm text-gray-700 mb-4">Prof. [Faculty Name] Assistant Professor, Department of Humanities</p>

          <h4 className="font-semibold text-[#0d173b] text-sm mb-2">Student Coordinators</h4>
          <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700 mb-4">
            <li>[Student Name], Final Year (Cultural Secretary)</li>
            <li>[Student Name], Third Year (Event Head)</li>
          </ul>

          <h4 className="font-semibold text-[#0d173b] text-sm mb-2">Achievements &amp; Highlights</h4>
          <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700 mb-4">
            <li>Successful organization of annual cultural festivals</li>
            <li>Active participation in inter-college cultural competitions</li>
            <li>Recognition for outstanding performances and event management</li>
            <li>Strong student engagement across all departments</li>
          </ul>

          <h4 className="font-semibold text-[#0d173b] text-sm mb-2">Why Join Cultural Club?</h4>
          <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700 mb-4">
            <li>Showcase your talent on a larger platform</li>
            <li>Build confidence and stage presence</li>
            <li>Experience teamwork and event management</li>
            <li>Create memorable college experiences</li>
          </ul>

          <div className="bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-200 p-4 rounded-lg mt-4">
            <p className="text-sm text-gray-700 italic">
              "Be a Part of the Celebration. The Cultural Club at Chhatrapati Shivaji Institute of Technology invites all students to participate, perform, and celebrate the spirit of culture and creativity."
            </p>
          </div>
        </>
      ),
    },
    {
      id: "alumni",
      name: "Alumni Club",
      icon: "🤝",
      fullContent: (
        <>
          <p className="text-gray-700 text-sm leading-relaxed mb-4">
            The Alumni Club at Chhatrapati Shivaji Institute of Technology serves as a strong bridge between the institute and its alumni network. It aims to foster lifelong relationships with former students while creating opportunities for mentorship, collaboration, and career growth.
          </p>
          <p className="text-gray-700 text-sm leading-relaxed mb-4">
            The club plays a crucial role in connecting current students with alumni who are working across diverse industries, helping them gain real-world insights and professional guidance.
          </p>

          <h4 className="font-semibold text-[#0d173b] text-sm mb-2">Objectives</h4>
          <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700 mb-4">
            <li>To strengthen the bond between alumni and the institute</li>
            <li>To facilitate mentorship and career guidance for students</li>
            <li>To build a strong professional network</li>
            <li>To encourage alumni participation in institutional development</li>
          </ul>

          <h4 className="font-semibold text-[#0d173b] text-sm mb-2">Key Activities</h4>
          <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700 mb-4">
            <li><span className="font-medium">Alumni Meet &amp; Reunions:</span> Annual gatherings to reconnect and celebrate achievements</li>
            <li><span className="font-medium">Mentorship Programs:</span> Alumni guiding students on career paths, higher studies, and industry expectations</li>
            <li><span className="font-medium">Guest Lectures &amp; Webinars:</span> Sessions by alumni sharing their professional experiences</li>
            <li><span className="font-medium">Placement &amp; Internship Support:</span> Alumni referrals, job opportunities, and internship guidance</li>
            <li><span className="font-medium">Networking Events:</span> Opportunities for students and alumni to interact and collaborate</li>
          </ul>

          <h4 className="font-semibold text-[#0d173b] text-sm mb-2">Faculty Coordinator</h4>
          <p className="text-sm text-gray-700 mb-4">Prof. [Faculty Name] - Training &amp; Placement Officer / Alumni Coordinator</p>

          <h4 className="font-semibold text-[#0d173b] text-sm mb-2">Student Coordinators</h4>
          <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700 mb-4">
            <li>[Student Name], Final Year (Alumni Club Lead)</li>
            <li>[Student Name], Third Year (Networking Coordinator)</li>
          </ul>

          <h4 className="font-semibold text-[#0d173b] text-sm mb-2">Achievements &amp; Highlights</h4>
          <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700 mb-4">
            <li>Strong alumni presence in reputed companies and organizations</li>
            <li>Active alumni participation in mentoring and placements</li>
            <li>Successful organization of alumni interaction sessions</li>
            <li>Growing alumni database and engagement</li>
          </ul>

          <h4 className="font-semibold text-[#0d173b] text-sm mb-2">Why Join Alumni Club?</h4>
          <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700 mb-4">
            <li>Build connections with experienced professionals</li>
            <li>Gain career guidance and mentorship</li>
            <li>Access job and internship opportunities</li>
            <li>Stay connected with the institute community</li>
          </ul>

          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 p-4 rounded-lg mt-4">
            <p className="text-sm text-gray-700 italic">
              "Stay Connected. The Alumni Club at Chhatrapati Shivaji Institute of Technology encourages all students and alumni to stay connected, contribute, and grow together as a strong professional community."
            </p>
          </div>
        </>
      ),
    },
    {
      id: "social-media",
      name: "Social Media & Photography Club",
      icon: "📸",
      fullContent: (
        <>
          <p className="text-gray-700 text-sm leading-relaxed mb-4">
            The Social Media &amp; Photography Club at Chhatrapati Shivaji Institute of Technology is the creative backbone of campus storytelling. The club is responsible for capturing memorable moments, managing the institute's digital presence, and showcasing campus life through engaging visual and digital content.
          </p>
          <p className="text-gray-700 text-sm leading-relaxed mb-4">
            It provides students with hands-on experience in photography, videography, content creation, and social media management.
          </p>

          <h4 className="font-semibold text-[#0d173b] text-sm mb-2">Objectives</h4>
          <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700 mb-4">
            <li>To document and promote campus events and activities</li>
            <li>To develop skills in photography, videography, and editing</li>
            <li>To manage and enhance the institute's social media presence</li>
            <li>To encourage creative storytelling and digital engagement</li>
          </ul>

          <h4 className="font-semibold text-[#0d173b] text-sm mb-2">Key Activities</h4>
          <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700 mb-4">
            <li><span className="font-medium">Event Coverage:</span> Photography and videography of academic, cultural, and sports events</li>
            <li><span className="font-medium">Social Media Management:</span> Creating and managing content for official platforms (Instagram, Facebook, YouTube, etc.)</li>
            <li><span className="font-medium">Content Creation:</span> Designing posters, reels, promotional videos, and digital campaigns</li>
            <li><span className="font-medium">Photography &amp; Editing Workshops:</span> Training sessions on camera handling, composition, and editing tools</li>
            <li><span className="font-medium">Short Films &amp; Creative Projects:</span> Conceptualizing and producing creative video content</li>
          </ul>

          <h4 className="font-semibold text-[#0d173b] text-sm mb-2">Faculty Coordinator</h4>
          <p className="text-sm text-gray-700 mb-4">Prof. [Faculty Name] Assistant Professor</p>

          <h4 className="font-semibold text-[#0d173b] text-sm mb-2">Student Coordinators</h4>
          <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700 mb-4">
            <li>[Student Name], Final Year (Media Head)</li>
            <li>[Student Name], Third Year (Photography Lead)</li>
          </ul>

          <h4 className="font-semibold text-[#0d173b] text-sm mb-2">Achievements &amp; Highlights</h4>
          <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700 mb-4">
            <li>Professional coverage of major institutional events</li>
            <li>Growth and engagement on official social media platforms</li>
            <li>High-quality creative content and branding initiatives</li>
            <li>Active student participation in media-related activities</li>
          </ul>

          <h4 className="font-semibold text-[#0d173b] text-sm mb-2">Why Join This Club?</h4>
          <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700 mb-4">
            <li>Learn photography, videography, and editing skills</li>
            <li>Gain experience in digital marketing and branding</li>
            <li>Build a strong creative portfolio</li>
            <li>Work on real-time projects and event coverage</li>
          </ul>

          <div className="bg-gradient-to-r from-fuchsia-50 to-pink-50 border border-fuchsia-200 p-4 rounded-lg mt-4">
            <p className="text-sm text-gray-700 italic">
              "Be the Voice of the Campus. The Social Media &amp; Photography Club at Chhatrapati Shivaji Institute of Technology invites creative minds to capture stories, create impactful content, and shape the digital identity of the institute."
            </p>
          </div>
        </>
      ),
    },
  ];

  const toggleExpand = (id) => {
    setExpandedClub(expandedClub === id ? null : id);
  };

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
          {clubsData.map((club) => (
            <div
              key={club.id}
              className="bg-gray-50 p-4 rounded-lg border border-gray-200 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">{club.icon}</span>
                <h3 className="font-semibold text-[#0d173b]">{club.name}</h3>
              </div>
              
              {/* Show only description initially */}
              <div className="text-sm text-gray-600">
                {club.fullContent.props.children[0]}
              </div>

              {/* Read More / Read Less Button */}
              <button
                onClick={() => toggleExpand(club.id)}
                className="mt-3 text-sm font-medium text-[#0d173b] hover:text-[#1e305f] transition-colors flex items-center gap-1"
              >
                {expandedClub === club.id ? (
                  <>Read Less ↑</>
                ) : (
                  <>Read More ↓</>
                )}
              </button>

              {/* Full Content - shown when expanded */}
              {expandedClub === club.id && (
                <div className="mt-4 pt-4 border-t border-gray-200 space-y-4">
                  {club.fullContent}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VariousClubs;