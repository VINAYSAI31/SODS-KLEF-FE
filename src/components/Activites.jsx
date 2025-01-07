import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Activities = () => {
  const events = [
    {
      title: "Data Science Workshop Series",
      description:
        "Hands-on workshop covering Python, pandas, and data visualization.",
      image: "./images/events/event3.jpg",
    },
    {
      title: "Data Science with Excel",
      description:
        "Master data analysis techniques with Excel in this hands-on workshop for all skill levels.",
      image: "./images/events/event5.jpg",
    },
    {
      title: "Visual Insights Using Jupyter",
      description:
        "Harness Jupyter to visualize and analyze data effectively.",
      image: "./images/events/event4.jpg",
    },
    {
      title: "DSQL Essentials",
      description:
        "Learn key DSQL skills for seamless data querying.",
      image: "./images/events/event8.jpg",
    },
    {
      title: "AI-Powered Analytics",
      description:
        "Discover the power of AI in analytics and how it transforms decision-making.",
      image: "./images/events/event9.jpg",
    },
    {
      title: "Introduction to Machine Learning",
      description:
        "A beginner-friendly workshop on the fundamentals of machine learning.",
      image: "./images/events/event6.jpg",
    },
    {
      title: "Data Cleaning Bootcamp",
      description:
        "Learn best practices and techniques to clean and prepare data for analysis.",
      image: "./images/events/event10.jpg",
    },
    {
      title: "Storytelling with Data",
      description:
        "Master the art of communicating insights effectively through data visualization.",
      image: "./images/events/event2.jpg",
    },
    {
      title: "Advanced Python for Data Science",
      description:
        "Deep dive into Python for data manipulation, analysis, and automation.",
      image: "./images/events/event1.jpg",
    },
    {
      title: "Big Data Tools and Techniques",
      description:
        "Explore tools like Hadoop and Spark to analyze massive datasets.",
      image: "./images/events/event7.jpg",
    },
  ];
  

  return (
    <div className="back">
      <Navbar />
      <div>
        {/* Upcoming Workshops Section */}
        <section className="py-20" id="events">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Upcoming Events
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {events.map((event, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all"
                >
                  <div className="relative">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-90 object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {event.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{event.description}</p>
                    <a
                      href="https://academics.klef.in/klef"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 w-full inline-block text-center bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
                    >
                      Register Now
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Activities;