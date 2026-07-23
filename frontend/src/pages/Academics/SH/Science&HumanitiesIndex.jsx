import { BookOpen, FlaskConical, Mic, Users } from "lucide-react";
import React, { useState } from "react";

// Placeholder components for subject details
const SubjectContent = ({  sections }) => (
  <div className="space-y-6">
    {/* <h3 className="text-2xl font-bold text-[#0d173b]">{title}</h3> */}
    {Object.entries(sections).map(([key, value]) => (
      <div key={key}>
        <h4 className="text-xl font-semibold text-gray-800 border-b-2 border-gray-200 pb-2 mb-3">
          {value.title}
        </h4>
        <div className="prose max-w-none text-gray-700">
          {value.content}
        </div>
      </div>
    ))}
  </div>
);

const englishSections = {
  introduction: { title: "Introduction", content: <p>Details about the English (Communication Skills) curriculum...</p> },
  labs: { title: "Labs", content: <p>Information on the language and communication labs...</p> },
  outcomes: { title: "Course Outcomes", content: <p>Expected outcomes for students completing the English courses...</p> },
  faculty: { title: "Faculty", content: <p>Meet the experienced faculty of the English department...</p> },
};

const chemistrySections = {
  introduction: { title: "Introduction", content: <p>Details about the Chemistry curriculum...</p> },
  labs: { title: "Labs", content: <p>Information on the chemistry labs and equipment...</p> },
  outcomes: { title: "Course Outcomes", content: <p>Expected outcomes for students completing the Chemistry courses...</p> },
  faculty: { title: "Faculty", content: <p>Meet the experienced faculty of the Chemistry department...</p> },
};

const physicsSections = {
  introduction: { title: "Introduction", content: <p>Details about the Physics curriculum...</p> },
  labs: { title: "Labs", content: <p>Information on the physics labs and experiments...</p> },
  outcomes: { title: "Course Outcomes", content: <p>Expected outcomes for students completing the Physics courses...</p> },
  faculty: { title: "Faculty", content: <p>Meet the experienced faculty of the Physics department...</p> },
};

const MathsContent = () => {
  const courses = [
    {
      title: "Engineering Mathematics I",
      code: "3000A02AT014",
      objectives: [
        "Develop the basic mathematical skills of engineering students that are imperative for effective understanding of engineering subjects.",
        "Also, the topics introduced will serve as basic tools for specialized studies in many fields of engineering and technology.",
        "This course includes: Matrices, Differential Calculus, Partial Differentiation, Integral Calculus and Ordinary Differential Equations.",
      ],
      outcomes: [
        "CO1: - Apply the concept of Rank of Matrices and Cayley-Hamilton Theorem. Problems on solution of a system of linear equations by matrix method. Implement the concept of Eigen values and Eigen vectors in engineering problems.",
        "CO2: - Apply the method of Successive Differentiation for Expansion of functions and Tracing of simple curves.",
        "CO3: - Solve the problems of Maxima& Minima of functions of two variables and use Jacobians in formulation of practical problems.",
        "CO4: - Apply integration for Rectification, Quadrature and Volume of revolution and apply Differentiation under the integral sign to definite integrals.",
        "CO5: - Solve Linear as well as Nonlinear Differential Equations of first order. Also, to solve Linear Differential Equations of Higher Order.",
      ],
      syllabus: "https://csvtu.ac.in/ew/download/semester-1-chemical-engineering/?wpdmdl=21211&refresh=6a3e3b36db7671782463286",
    },
    {
      title: "Engineering Mathematics II",
      code: "3000B02AT014",
      objectives: [
        "The objective of the course is aimed to develop the basic mathematical skills of engineering students that are imperative for effective understanding of engineering subjects. Also, the topics introduced will serve as basic tools for specialized studies in many fields of engineering and technology. This course includes: Complex numbers, Sequence and Series, Multivariable Calculus, Vector Calculus and Statistics.",
      ],
      outcomes: [
        "CO1. Implement the De Moivre’s theorem for finding roots of Complex numbers and use the Method of separation into real and imaginary parts in the study of complex numbers and Summation of series C+iS method.",
        "CO2. Use the concept of convergence and tool of power series in various problems of advanced Mathematics.",
        "CO3.Use the Multivariable Integral Calculus for finding Area and Volume and to employ the Beta and Gamma functions for evaluating improper finite integrals.",
        "CO4. Differentiate and Integrate Vector functions and apply Stoke’s, Gauss and Divergence theorem for easier evaluation.",
        "CO5.Fit Linear and Second order Parabolic curves to given set of data. And use Correlation and Regression for Interpolation or Extrapolation.",
      ],
      syllabus: "https://csvtu.ac.in/ew/download/semester-2-chemical-engineering/?wpdmdl=21212&refresh=6a3e3dd7ba9351782463959",
    },
    {
      title: "Mathematics III",
      code: "B000311(014)",
      objectives: [
        "To provide knowledge of Laplace transform of elementary functions including its properties and applications to solve ordinary differential equations.",
        "To have thorough knowledge of partial differential equations which arise in mathematical descriptions of situations in engineering.",
        "To study about a quantity that may take any of a given range of values that can’t be predicted as it is but can be described in terms of their probability.",
        "To provide a thorough understanding of interpolation and methods to solve ordinary differential equation.",
      ],
      outcomes: [
        "After studying the contents of the syllabus in detail the students will be able to: Define (mathematically) unit step unit impulse, Laplace transform its properties, inverse and applications to solve ordinary differential equations and find Numerical solution of differential equations, which may be arising due to mathematical modelling based on engineering problems. Hands on these Mathematical topics will make them equipped to prepare for higher studies through competitive examinations.",
      ],
      syllabus: "https://csvtu.ac.in/ew/download/b-tech-3rd-semester-3/?wpdmdl=12485&refresh=6a3e45817dc901782465921",
    },
    {
      title: "Discrete Mathematics",
      code: "B022411(014)",
      objectives: [
        "To introduce a number of discrete mathematical structures found to be serving as tools in the development of theoretical computer science. Course focuses on how discrete structures actually helped computer engineers to solve problems occurred in the development of programming languages. Course highlights the importance of discrete structures towards simulation of a problem in computer science engineering.",
      ],
      outcomes: [
        "After completion of this course students will be Able to apply mathematical logic and Boolean algebra in switching circuits & logic circuits. Familiar with set theory, relation and functions. Familiar with algebraic structures, graph theory and combinatorics. Able to solve problems in various fields in computer science, specially networking.",
      ],
      syllabus: "https://csvtu.ac.in/ew/download/b-tech-4th-semester-10/?wpdmdl=13582&refresh=6a3e45817afe01782465921",
    },
  ];

  return (
    <div className="prose max-w-none text-gray-700">
      <h3 className="text-xl font-medium text-[#0d173b] mb-2">About Department</h3>
      <p>The Department of Applied Mathematics is dedicated to delivering high-quality education that bridges fundamental mathematical theories with practical engineering solutions.</p>
      <p>Mathematics serves as the structural foundation of all engineering disciplines. Our department builds this core strength by conducting foundational mathematics courses during the first and second years and then offering a number of electives designed to align with modern industry demands, such as data science, cryptography, and computational modeling to the senior students.</p>

      <h3 className="text-xl font-medium text-[#0d173b] mt-8 mb-2">Vision</h3>
      <p>Department of Mathematics sketches out student knowledge and understanding of basic concepts that ropes them to manage and apply their knowledge, such as computation, analysis, synthesis and evaluation towards their personal values, concerns and preferences.</p>

      <h3 className="text-xl font-medium text-[#0d173b] mt-8 mb-2">Mission</h3>
      <ul className="list-disc pl-5 space-y-2">
        <li>Provide a platform to acquire mathematical skills for solving complex engineering problems.</li>
        <li>To impart experiential learning skills in mathematics.</li>
        <li>To engage faculty in research to enrich teaching-learning process.</li>
      </ul>

      <h3 className="text-xl font-medium text-[#0d173b] mt-8 mb-2">Strength</h3>
      <p>A Department of Mathematics serves as a foundational pillar for academic institutions. Its core strengths typically lie in expert faculty, research excellence, interdisciplinary collaboration, and the cultivation of vital lifelong problem-solving skills for students.</p>

      <h3 className="text-2xl font-bold text-[#0d173b] mt-12 mb-6 border-b-2 pb-2">Courses Offered</h3>
      <div className="space-y-8">
        {courses.map((course, index) => (
          <div key={index} className="p-4 border rounded-lg">
            <h4 className="text-xl font-semibold">{course.title} <span className="text-base font-normal text-gray-600">({course.code})</span></h4>
            <div className="mt-4">
              <h5 className="font-semibold">Course Objectives:</h5>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                {course.objectives.map((obj, i) => <li key={i}>{obj}</li>)}
              </ul>
            </div>
            <div className="mt-4">
              <h5 className="font-semibold">Course Outcomes:</h5>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                {course.outcomes.map((out, i) => <li key={i}>{out}</li>)}
              </ul>
            </div>
            <div className="mt-4">
              <a href={course.syllabus} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">View Syllabus</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const ScienceHumanitiesIndex = () => {
  const [activeTab, setActiveTab] = useState("physics");

  const tabs = {
    physics: {
      title: "Physics",
      // icon: <BookOpen className="w-5 h-5" />,
      content: <SubjectContent  sections={physicsSections} />,
    },
    chemistry: {
      title: "Chemistry",
      // icon: <FlaskConical className="w-5 h-5" />,
      content: <SubjectContent  sections={chemistrySections} />,
    },
    english: {
      title: "English (Communication Skill)",
      // icon: <Mic className="w-5 h-5" />,
      content: <SubjectContent  sections={englishSections} />,
    },
    maths: {
      title: "Mathematics",
      // icon: <Calculator className="w-5 h-5" />, // Example icon
      content: <MathsContent />,
    },
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="w-full bg-[#0a1432] text-white p-8">
        <h1 className="text-4xl font-bold mb-2">Science & Humanities</h1>
        <p className="text-lg">
          Foundational knowledge in Maths, Physics, Chemistry, and Communication
          Skills
        </p>
        <div className="w-24 h-1 bg-white mt-4"></div>
      </div>

      {/* Content area */}
      <div className="flex-1 p-4 lg:p-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {/* Desktop tab navigation */}
          <div className="hidden md:flex border-b bg-gray-100 border-gray-200">
            {Object.keys(tabs).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex items-center justify-center gap-2 py-4 px-6 transition-all duration-300 flex-1 ${
                  activeTab === tab
                    ? "border-b-2 border-[#0d173b] text-[#0d173b] bg-[#b2b9d29e] font-medium"
                    : "border-b-2 border-transparent text-gray-500 hover:bg-gray-300 hover:text-gray-700"
                }`}
              >
                {/* {tabs[tab].icon} */}
                <span className="text-xs lg:text-xs">{tabs[tab].title}</span>
              </button>
            ))}
          </div>

          {/* Mobile tab selector */}
          <div className="block md:hidden p-4 border-b border-gray-200">
            <select
              value={activeTab}
              onChange={(e) => setActiveTab(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
            >
              {Object.keys(tabs).map((tab) => (
                <option key={tab} value={tab}>
                  {tabs[tab].title}
                </option>
              ))}
            </select>
          </div>

          {/* Header with gradient background */}
          <div className="bg-gradient-to-r from-gray-100 to-gray-100 py-6 px-6">
            <div className="flex items-center">
              <div className="p-3 bg-white bg-opacity-20 rounded-lg mr-4 shadow-sm">
                <span className="block w-6 h-6 text-black">
                  {tabs[activeTab].icon}
                </span>
              </div>
              <h2 className="text-2xl md:text-2xl font-bold text-black capitalize">
                {tabs[activeTab].title}
              </h2>
            </div>
          </div>

          {/* Content area */}
          <div className="p-6 md:p-8">
            {tabs[activeTab].content}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScienceHumanitiesIndex;