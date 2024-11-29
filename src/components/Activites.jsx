import React from "react";
import "../styling/About.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Calendar, Users, Trophy } from 'lucide-react';
import {  MapPin, Clock } from 'lucide-react';

const Activities = () => {
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

  const events = [
    {
      title: "Data Science Workshop Series",
      date: "March 15, 2024",
      time: "2:00 PM - 4:00 PM",
      location: "Tech Hub Room 401",
      description: "Hands-on workshop covering Python, pandas, and data visualization.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800&h=400"
    },
    {
      title: "Machine Learning Hackathon",
      date: "March 22, 2024",
      time: "9:00 AM - 6:00 PM",
      location: "Innovation Center",
      description: "24-hour hackathon focused on solving real-world ML challenges.",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800&h=400"
    },
    {
      title: "Industry Speaker Series",
      date: "March 29, 2024",
      time: "5:00 PM - 6:30 PM",
      location: "Virtual Event",
      description: "Guest speaker from Google discussing AI ethics and future trends.",
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=800&h=400"
    },
    {
      title: "AI in Healthcare Panel Discussion",
      date: "April 5, 2024",
      time: "3:00 PM - 5:00 PM",
      location: "Auditorium A",
      description: "Panel discussion featuring experts on the impact of AI in healthcare.",
      image: "https://images.unsplash.com/photo-1586772003012-6856f306befe?auto=format&fit=crop&q=80&w=800&h=400"
    },
    {
      title: "Coding Bootcamp for Beginners",
      date: "April 12, 2024",
      time: "10:00 AM - 4:00 PM",
      location: "Lab 101",
      description: "Introductory coding bootcamp to learn JavaScript and React.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800&h=400"
    },
    {
      title: "Startup Pitch Night",
      date: "April 19, 2024",
      time: "6:00 PM - 8:00 PM",
      location: "Event Hall",
      description: "Student startups pitch their innovative ideas to industry judges.",
      image: "https://images.unsplash.com/photo-1517430816045-df4b7de9f0b6?auto=format&fit=crop&q=80&w=800&h=400"
    },
    {
      title: "Tech Fest 2024",
      date: "April 26, 2024",
      time: "10:00 AM - 6:00 PM",
      location: "Main Campus Lawn",
      description: "A day-long festival showcasing student projects, innovations, and keynote speeches.",
      image: "https://images.unsplash.com/photo-1496180470115-58f1767c0c13?auto=format&fit=crop&q=80&w=800&h=400"
    },
    {
      title: "Deep Learning for Image Recognition Workshop",
      date: "May 3, 2024",
      time: "1:00 PM - 5:00 PM",
      location: "Room 204",
      description: "Learn deep learning techniques to build image recognition models using TensorFlow.",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800&h=400"
    }
  ];
  
  

  return (
    <div className="back">
    <Navbar/>
    <div >
     
      {/* Upcoming Workshops Section */}
      <section className="py-20 " id="events">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Upcoming Events</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all">
              <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{event.title}</h3>
                <p className="text-gray-600 mb-4">{event.description}</p>
                <div className="space-y-2">
                  <div className="flex items-center text-gray-500">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>{event.location}</span>
                  </div>
                </div>
                <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors">
                  Register Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
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
    <Footer/>
    </div>
  );
};

export default Activities;
