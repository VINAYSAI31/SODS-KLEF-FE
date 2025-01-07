import React from 'react';

import Navbar from './Navbar';

const Gallery = () => {
  const events = [
    {
      title: 'Annual Data Science Symposium',
      date: 'December 2023',
      image: '/Images/Gallery/g10.jpg',
    },
    {
      title: 'Machine Learning Workshop',
      date: 'January 2024',
      image: '/Images/Gallery/g2.jpg',
    },
    {
      title: 'Data Ethics Panel Discussion',
      date: 'February 2024',
      image: '/Images/Gallery/g3.jpg',
    },
    {
      title: 'AI in Healthcare Conference',
      date: 'March 2024',
      image: '/Images/Gallery/g4.jpg',
    },
    {
      title: 'Big Data Analytics Bootcamp',
      date: 'April 2024',
      image: '/Images/Gallery/g5.jpg',
    },
    {
      title: 'Predictive Modeling Hackathon',
      date: 'May 2024',
      image: '/Images/Gallery/g6.jpg',
    },
    {
      title: 'Cloud Computing for Data Science',
      date: 'June 2024',
      image: '/Images/Gallery/g7.jpg',
    },
    {
      title: 'Deep Learning Symposium',
      date: 'July 2024',
      image: '/Images/Gallery/g8.jpg',
    },
    {
      title: 'Natural Language Processing Workshop',
      date: 'August 2024',
      image: '/Images/Gallery/g9.jpg',
    },
    {
      title: 'Data Visualization Challenge',
      date: 'September 2024',
      image: '/Images/Gallery/g1.jpg',
    },
  ];
  

  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-b from-blue-50 to-white">
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12">
              Event Gallery
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {events.map((event, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden rounded-xl shadow-lg bg-white group border-4 border-transparent hover:border-gradient-to-r hover:from-purple-400 hover:to-blue-400 transition-all duration-300"
                >
                  <img
                    src={event.image}
                    alt={`Event: ${event.title}`}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105 filter brightness-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent group-hover:opacity-50 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Gallery;
