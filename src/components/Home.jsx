import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CountUp from "react-countup";
import { Calendar, Users, BookOpen, Award, Target, Rocket } from "lucide-react";

const Home = () => {
  const [inView, setInView] = useState(false);
  const [showMarquee, setShowMarquee] = useState(true); // State to control visibility of the marquee

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      {
        threshold: 0.9, // Trigger when 50% of the element is in the viewport
      }
    );

    const target = document.querySelector("#statistics");
    if (target) {
      observer.observe(target);
    }

    // Hide the marquee message after 10 seconds
    const timer = setTimeout(() => {
      setShowMarquee(false); // Disable marquee after 10 seconds
    },999999); // 10 seconds in milliseconds

    return () => {
      if (target) {
        observer.unobserve(target);
      }
      clearTimeout(timer); // Cleanup timeout on unmount
    };
  }, []);

  const upcomingEvents = [
    {
      title: "Introduction to Machine Learning Workshop",
      date: "March 25, 2024",
      description: "Learn the fundamentals of ML with hands-on exercises.",
      image:
        "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=1000",
      instructor: "Dr. Sarah Chen",
      seats: "30 seats available",
    },
    {
      title: "Data Visualization Hackathon",
      date: "April 2, 2024",
      description: "Create compelling visualizations from real-world datasets.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
      instructor: "Prof. Michael Torres",
      seats: "20 seats available",
    },
    {
      title: "Industry Expert Panel",
      date: "April 15, 2024",
      description: "Connect with leading data scientists from top companies.",
      image:
        "https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?auto=format&fit=crop&q=80&w=1000",
      instructor: "Various Industry Leaders",
      seats: "50 seats available",
    },
  ];

  const achievements = [
    {
      icon: Award,
      title: "Excellence Awards",
      description: "Multiple national recognitions for innovative data projects.",
    },
    {
      icon: Target,
      title: "Industry Impact",
      description: "Successfully completed 20+ industry collaboration projects.",
    },
    {
      icon: Rocket,
      title: "Student Success",
      description: "90% placement rate in top tech companies.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      {/* Scrolling Section */}
      {showMarquee && (
        <div className="bg-blue-600 text-white py-2">
          <div className="container mx-auto text-center">
            <p className="animate-marquee text-lg font-semibold">
              Visit our Contact Us page for something exciting!{" "}
              <span className="text-yellow-300">Don't miss out!</span>
            </p>
          </div>
        </div>
      )}
      {/* Hero Section */}
      <header className="relative overflow-hidden bg-gradient-to-r from-blue-50 to-indigo-50 py-24">
        <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-700/25" />
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10 mb-6">
                Welcome to SODS-KLEF
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Empowering Data <span className="text-blue-600">Dreams</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8 max-w-2xl">
                Join a vibrant community of data enthusiasts, learn new skills,
                and contribute to exciting projects that shape the future of
                data science.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a href="https://t.me/+D6MR2RJjIo4wZmQ9">
                  <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform duration-200">
                    Join Now
                  </button>
                </a>
              </div>
            </div>
            <div className="flex-1">
              <img
                src="/images/home.png"
                alt="SODS Club"
                className="w-full max-w-lg mx-auto animate-float"
              />
            </div>
          </div>
        </div>
      </header>
      {/* Statistics Section */}
      <section id="statistics" className="py-10 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[{ icon: Users, count: 300, label: "Active Members" },
            { icon: Calendar, count: 50, label: "Events Per Year" },
            { icon: BookOpen, count: 60, label: "Learning Resources" }].map((stat, index) => (
              <div key={index} className="text-center p-6 shadow-lg rounded-lg bg-gray-50">
                <stat.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-4xl font-bold text-gray-900 mb-2">
                  {inView && <CountUp start={0} end={stat.count} duration={1.5} />}
                  {inView && "+"}
                </h3>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Achievements Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="p-6 shadow-lg rounded-lg bg-white hover:shadow-2xl">
                <achievement.icon className="h-10 w-10 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
                <p className="text-gray-600">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

     

      <Footer />
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        @keyframes marquee {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-marquee {
          display: inline-block;
          animation: marquee 4s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Home;
