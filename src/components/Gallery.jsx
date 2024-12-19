import React from 'react';

import Navbar from './Navbar';

const Gallery = () => {
 

  const events = [
    {
      title: 'Annual Data Science Symposium',
      date: 'December 2023',
      image: 'https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?auto=format&fit=crop&q=80&w=1000',
    },
    {
      title: 'Machine Learning Workshop',
      date: 'January 2024',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1000',
    },
    {
      title: 'Data Ethics Panel Discussion',
      date: 'February 2024',
      image: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?auto=format&fit=crop&q=80&w=1000',
    },
  ];

  return (
  <>
  <Navbar/>
    <div className="bg-white">
    
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Event Gallery
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              <img
                src={event.image}
                alt={`Event: ${event.title}`}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-xl font-semibold mb-1">{event.title}</h3>
                  <p className="text-gray-200">{event.date}</p>
                </div>
              </div>
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
