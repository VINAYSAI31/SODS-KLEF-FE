import React from 'react'
import '../styling/Home.css'
import Navbar from './Navbar'
import Footer from './Footer'
import { ArrowRight, Calendar, Users, BookOpen } from 'lucide-react';

const Home = () => {
  const upcomingEvents = [
    {
      title: 'Introduction to Machine Learning Workshop',
      date: 'March 25, 2024',
      description: 'Learn the fundamentals of ML with hands-on exercises.',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=1000',
    },
    {
      title: 'Data Visualization Hackathon',
      date: 'April 2, 2024',
      description: 'Create compelling visualizations from real-world datasets.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000',
    },
    {
      title: 'Industry Expert Panel',
      date: 'April 15, 2024',
      description: 'Connect with leading data scientists from top companies.',
      image: 'https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?auto=format&fit=crop&q=80&w=1000',
    },
  ];

  return (
    <>
    <div>
      <Navbar/>
      
      {/* Hero Section */}
      <header className="hero-section">
        <div className="hero-content">
         
          <p>Welcome to SODS-KLEF</p>
          <h3>Master Data Stories</h3>
          <h6>
              Join a vibrant community of data enthusiasts, learn new skills, and contribute to exciting projects that shape the future of data science.

          </h6>
          <div className="cta-buttons">
            <a href="views/Login.jsp" className="cta-btn primary-btn">Enroll Now</a>
          </div>
          
        </div>
        <div class="info-image">
          <img src="/images/home.png" alt="SODS Club Logo" className="logo" />
        </div>
      </header>

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Users className="h-10 w-10 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-gray-900">500+</h3>
              <p className="text-gray-600">Active Members</p>
            </div>
            <div className="text-center">
              <Calendar className="h-10 w-10 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-gray-900">50+</h3>
              <p className="text-gray-600">Events Per Year</p>
            </div>
            <div className="text-center">
              <BookOpen className="h-10 w-10 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-gray-900">100+</h3>
              <p className="text-gray-600">Learning Resources</p>
            </div>
          </div>
        </div>
      </section>

     
    </div>
    <Footer/>
    </>
    
  )
}

export default Home