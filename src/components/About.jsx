import { Target, Lightbulb, Users } from 'lucide-react';
import { FaPython, FaReact, FaDatabase, FaNodeJs } from 'react-icons/fa';

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
      icon: FaPython,
      name: 'Python',
      description: 'Used for data analysis, machine learning, and backend development.',
    },
    {
      icon: FaReact,
      name: 'React',
      description: 'Frontend framework for building dynamic user interfaces.',
    },
    {
      icon: FaDatabase,
      name: 'MySQL',
      description: 'Relational database for managing structured data.',
    },
    {
      icon: FaNodeJs,
      name: 'Node.js',
      description: 'Backend JavaScript runtime for server-side applications.',
    },
    {
      icon: FaPython, // You can replace with any other icon if desired
      name: 'Pandas',
      description: 'Data manipulation and analysis library, commonly used for working with structured data.',
    },
    {
      icon: FaPython, // Reusing Python icon for consistency, can replace with another if available
      name: 'Scikit-learn',
      description: 'A simple and efficient tool for data mining and data analysis, built on Python.',
    },
    {
      icon: FaPython, // Can be replaced with a TensorFlow logo if you prefer a custom icon
      name: 'TensorFlow',
      description: 'An open-source library for machine learning and deep learning models.',
    },
    {
      icon: FaDatabase, // Replace with an appropriate icon if available
      name: 'Apache Spark',
      description: 'A unified analytics engine for big data processing, with built-in modules for streaming, SQL, machine learning, and graph processing.',
    },
  ];
  

  return (
    <>
      <Navbar />
      <div className="bg-white">
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50" />
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />
        <div className="container relative mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              About SODS-KLEF
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Empowering the next generation of data scientists through innovation, education, and collaboration.
            </p>
           
          </div>
        </div>
      </section>

        {/* Values Section */}
        <section className="py-4 bg-gradient-to-b from-indigo-50">
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
        <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Our Leadership
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {leaders.map((leader, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-200"
                >
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-65 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {leader.name}
                    </h3>
                    <p className="text-indigo-600 mb-2">{leader.role}</p>
                    <p className="text-gray-600">{leader.bio}</p>
                  </div>
                </div>
              ))}
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
