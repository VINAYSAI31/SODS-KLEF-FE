import { Target, Lightbulb, Users } from 'lucide-react';
import { FaPython, FaReact, FaDatabase, FaNodeJs,FaLaptopCode, FaChartLine, FaChartBar, FaCube, FaFire, FaMagic, FaMicrochip, FaTable } from 'react-icons/fa';
import { DiMysql, DiMongodb } from 'react-icons/di'; // Icons for MySQL and MongoDB
import { SiPostgresql  } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa';


import Navbar from './Navbar';
import Footer from './Footer';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Mission',
      description: 'To foster a collaborative environment where students can explore and master data science concepts through hands-on learning and real-world applications.',
    },
    {
      icon: Lightbulb,
      title: 'Vision',
      description: 'To become the leading student organization in data science education, innovation, and professional development.',
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Building a diverse and inclusive community of data enthusiasts, from beginners to advanced practitioners.',
    },
  ];

  const leaders = [
    {
      name: 'Dr. Nilu Singh',
      role: 'Faculty In Charge',
      image: './images/mam.jsp',
      bio: 'Passionate about mentoring students in research and hands-on projects',
    },
 
  ];

  const techStacks = [
    {
      icon: FaPython, // Python
      name: 'Python',
      description: 'A versatile language used for data analysis, machine learning, and backend development.',
    },
    {
      icon: FaChartLine, // Matplotlib (Visualization tool)
      name: 'Matplotlib',
      description: 'A popular Python plotting library for creating static, animated, and interactive visualizations.',
    },
    {
      icon: FaChartBar, // Seaborn (Visualization tool)
      name: 'Seaborn',
      description: 'A data visualization library based on Matplotlib that provides a high-level interface for creating attractive and informative statistical graphics.',
    },
    {
      icon: FaCube, // Power BI (Visualization Tool)
      name: 'Power BI',
      description: 'A Microsoft tool for transforming raw data into informative visual insights, enabling better decision-making.',
    },
    {
      icon: SiPostgresql, // PostgreSQL (Database)
      name: 'PostgreSQL',
      description: 'An open-source, object-relational database system known for its reliability and support for advanced data types.',
    },
    {
      icon: DiMongodb, // MongoDB (Database)
      name: 'MongoDB',
      description: 'A NoSQL database known for its flexibility and scalability, ideal for handling large-scale unstructured data.',
    },
    {
      icon: DiMysql, // MySQL (Database)
      name: 'MySQL',
      description: 'A widely-used relational database management system for managing structured data.',
    },
 
    {
      icon: FaFire, // TensorFlow (Machine Learning)
      name: 'TensorFlow',
      description: 'An open-source library for machine learning and deep learning models.',
    },
    {
      icon: FaMagic, // Scikit-learn (Machine Learning)
      name: 'Scikit-learn',
      description: 'A machine learning library that provides simple and efficient tools for data mining and data analysis.',
    },
    {
      icon: FaDatabase, // PySpark (Big Data processing)
      name: 'PySpark',
      description: 'A Python API for Apache Spark, enabling large-scale data processing and machine learning at scale.',
    },
    {
      icon: FaLaptopCode, // Jupyter Notebook (Data Science)
      name: 'Jupyter Notebook',
      description: 'An open-source web application for creating and sharing documents that contain live code, equations, visualizations, and narrative text.',
    },
    {
      icon: FaTable, // Tableau (Visualization tool)
      name: 'Tableau',
      description: 'A powerful data visualization tool used to create interactive and shareable dashboards.',
    },
  ];
  
  

  return (
    <>
      <Navbar />
      <div className="bg-white">
      <section className="relative py-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50" />
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />
        <div className="container relative mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
               SODS-KLEF
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Empowering the next generation of data scientists through innovation, education, and collaboration.
            </p>
           
          </div>
        </div>
      </section>

        {/* Values Section */}
        <section className="py-5000 bg-gradient-to-b from-indigo-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
                  >
                    <Icon className="h-12 w-12 text-indigo-600 mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {value.title}
                    </h3>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Leadership Section */}
        {/* Leadership Section */}
        {/* Leadership Section */}
<section className="py-16 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
      Our Leadership
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Left Side - Image Card */}
      <div className="flex justify-center items-center bg-white shadow-md rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
        <img
          src="./images/mam.jsp"
          alt="Dr. Nilu Singh"
          className="object-cover w-full h-full"
        />
      </div>

      {/* Right Side - Text Card */}
      <div className="bg-white shadow-md rounded-lg p-8 flex flex-col justify-center items-start ">
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">Dr. Nilu Singh</h3>
        <p className="text-indigo-600 mb-4">Faculty In Charge</p>
        <p className="text-gray-700 mb-4">
          Dr. Nilu Singh is an inspiring educator and leader who dedicates herself to guiding students through their research and hands-on projects. She has been a cornerstone in shaping the organization's mission to foster excellence in data science education.
        </p>
        <p className="text-gray-700">
          Her mentorship goes beyond the classroom, creating an environment where innovation thrives, and students gain invaluable skills for their careers in data science.
        </p>
        <a
          href="https://www.linkedin.com/in/dr-nilu-singh" // Replace with actual LinkedIn URL
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center text-indigo-600 font-semibold hover:text-indigo-800 transition-colors duration-200"
        >
          <FaLinkedin className="mr-2 h-5 w-5" /> LinkedIn
        </a>
      </div>
    </div>
  </div>
</section>







        {/* Tech Stacks Section */}
        <section className="py-16 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Technologies We Use
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {techStacks.map((tech, index) => {
                const Icon = tech.icon;
                return (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 flex flex-col items-center text-center"
                  >
                    <Icon className="h-12 w-12 text-indigo-600 mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {tech.name}
                    </h3>
                    <p className="text-gray-600">{tech.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default About;
