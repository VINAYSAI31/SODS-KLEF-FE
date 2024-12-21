import React, { useState } from 'react';
import Navbar from './Navbar';
import { Calendar, Users, Trophy, MapPin, Clock, X } from 'lucide-react';

const Projects = () => {


  const currentProjects = [
    {
      title: 'Network Traffic Anomaly Detection for Cybersecurity',
      description: 'Use unsupervised learning techniques to find patterns in network traffic data and identify unusual behavior that might signal cybersecurity threats.',
      status: 'In Progress',
      team: [
        { name: 'Pardhu Madhu', linkedin: 'https://linkedin.com/in/alicejohnson' },
        { name: 'Hema Vardhan', linkedin: 'https://linkedin.com/in/bobsmith' },
      ],
      deadline: 'Feb 2025',
    },
    {
      title: 'Crime Prediction Using Data Science',
      description: 'Build predictive models using historical crime data and social factors to forecast future crime hotspots and assist law enforcement in proactive planning',
      status: 'Ongoing',
      team: [
        { name: 'K.Kavya', linkedin: 'https://linkedin.com/in/charliebrown' },
        { name: 'Rama Krishna', linkedin: 'https://linkedin.com/in/dianaprince' },
      ],
      deadline: 'Feb 2025',
    },
    {
      title: 'Noisy Data Management in Environmental Monitoring',
      description: 'Develop machine learning models that clean and process noisy or incomplete environmental data (air quality, water levels), improving the accuracy of pollution tracking.',
      status: 'Planning',
      team: [
        { name: 'Shusmitha', linkedin: 'https://linkedin.com/in/ethanhunt' },
        { name: 'Rohith', linkedin: 'https://linkedin.com/in/fionagallagher' },
      ],
      deadline: 'Feb 2025',
    },
    {
      title: 'Automated Business Reporting with Data Visualization',
      description: 'Investigate the effectiveness of advanced data visualization techniques in automating business reporting, making complex data more accessible for decision-making.',
      status: 'Planning',
      team: [
        { name: 'UdaySri-2200032495', linkedin: 'https://linkedin.com/in/ethanhunt' },
        { name: 'Bhavya-2300032288', linkedin: 'https://linkedin.com/in/fionagallagher' },
      ],
      deadline: 'Feb 2025',
    },
    {
      title: 'Noisy Data Management in Environmental Monitoring',
      description: 'Develop machine learning models that clean and process noisy or incomplete environmental data (air quality, water levels), improving the accuracy of pollution tracking.',
      status: 'Planning',
      team: [
        { name: 'Shusmitha', linkedin: 'https://linkedin.com/in/ethanhunt' },
        { name: 'Rohith', linkedin: 'https://linkedin.com/in/fionagallagher' },
      ],
      deadline: 'Feb 2025',
    },
    {
      title: 'Noisy Data Management in Environmental Monitoring',
      description: 'Develop machine learning models that clean and process noisy or incomplete environmental data (air quality, water levels), improving the accuracy of pollution tracking.',
      status: 'Planning',
      team: [
        { name: 'Shusmitha', linkedin: 'https://linkedin.com/in/ethanhunt' },
        { name: 'Rohith', linkedin: 'https://linkedin.com/in/fionagallagher' },
      ],
      deadline: 'Feb 2025',
    },
  ];

  return (
    <>
      <Navbar />
      <div>
        {/* Current Projects Section */}
        <section className="py-16 bg-gradient-to-b from-indigo-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Current Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {currentProjects.map((project, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 relative"
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="border-t pt-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-indigo-600">Status: {project.status}</span>
                      <span className="flex items-center text-gray-600">
                        <Users className="h-4 w-4 mr-1" />
                        {project.team.length} members
                      </span>
                    </div>
                    <div className="mt-2 text-sm text-gray-600">
                      Deadline: {project.deadline}
                    </div>

                    {/* Displaying Team Members */}
                    <div className="mt-4">
                      <h4 className="font-semibold text-gray-800">Team Members:</h4>
                      <ul>
                        {project.team.map((member, index) => (
                          <li key={index} className="text-indigo-600 hover:underline">
                            <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                              {member.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Join Button */}
                  <button
                    onClick={() => alert(`Joining the project: ${project.title}`)}
                    className="absolute bottom-4 right-4 bg-indigo-600 text-white py-2 px-4 rounded-full shadow-md hover:bg-indigo-700 focus:outline-none transition-all"
                  >
                    Join Project
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Projects;
