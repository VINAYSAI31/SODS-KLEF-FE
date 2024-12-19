import React from 'react'
import Navbar from './Navbar';
import { Calendar, Users, Trophy } from 'lucide-react';
import {  MapPin, Clock } from 'lucide-react';

const Projects = () => {
  const currentProjects = [
    {
      title: 'City Data Analysis',
      description: 'Analyzing urban data to identify patterns in city development and suggest improvements.',
      status: 'In Progress',
      team: 12,
      deadline: 'May 2024',
    },
    {
      title: 'ML Study Group',
      description: 'Weekly sessions focusing on machine learning algorithms and implementations.',
      status: 'Ongoing',
      team: 25,
      deadline: 'Continuous',
    },
    {
      title: 'Data Ethics Research',
      description: 'Investigating ethical considerations in data science applications.',
      status: 'Planning',
      team: 8,
      deadline: 'June 2024',
    },
  ];
  return (
    <>
    <Navbar/>
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
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
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
                      {project.team} members
                    </span>
                  </div>
                  <div className="mt-2 text-sm text-gray-600">
                    Deadline: {project.deadline}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
    </>
  )
}

export default Projects