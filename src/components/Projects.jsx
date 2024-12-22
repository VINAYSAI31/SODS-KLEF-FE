import Navbar from "./Navbar";
import { Users } from "lucide-react";

const Projects = () => {
  const currentProjects = [
    {
      title: 'The Role of Big Data in Analyzing Climate Change Impacts on Agricultural Productivity',
      description: 'Explore the use of big data techniques to analyze climate change impacts on agricultural productivity and identify patterns for improving crop yield and sustainability.',
      status: 'In Progress',
      team: [
        { name: 'Vaishnavi - 2200030438', linkedin: '' },
        { name: 'Jayanith - 2300031535', linkedin: '' }
      ],
      deadline: 'Feb 2025'
    },
    {
      title: 'Anomaly Detection in Cybersecurity Using Network Traffic Data',
      description: 'Use unsupervised learning techniques to find patterns in network traffic data and identify unusual behavior that might signal cybersecurity threats.',
      status: 'In Progress',
      team: [
        { name: 'Pardhu Madhu - 2200032358', linkedin: '' },
        { name: 'Hema Vardhan - 2300030348', linkedin: '' }
      ],
      deadline: 'Feb 2025'
    },
    {
      title: 'Developing Machine Learning Models for Automated Text Classification in Legal Documents',
      description: 'Develop machine learning models to automate the classification of legal documents, improving efficiency and accuracy in legal research.',
      status: 'In Progress',
      team: [
        { name: 'M. Vidya - 2200031989', linkedin: '' },
        { name: 'Bhagya Sri - 2300030406', linkedin: '' }
      ],
      deadline: 'March 2025'
    },
    {
      title: 'Crime Prediction Using Data Science',
      description: 'Build predictive models using historical crime data and social factors to forecast future crime hotspots and assist law enforcement in proactive planning.',
      status: 'In Progress',
      team: [
        { name: 'K. Kavya - 2200032927', linkedin: '' },
        { name: 'C. Ramakrishna - 2300039097', linkedin: '' }
      ],
      deadline: 'Feb 2025'
    },
    {
      title: 'Noisy Data Management in Environmental Monitoring',
      description: 'Develop machine learning models that clean and process noisy or incomplete environmental data (air quality, water levels), improving the accuracy of pollution tracking.',
      status: 'In Progress',
      team: [
        { name: 'Shusmitha - 2200032186', linkedin: '' },
        { name: 'Rohith - 2300032156', linkedin: '' }
      ],
      deadline: 'March 2025'
    },
    {
      title: 'Automated Business Reporting with Data Visualization',
      description: 'Investigate the effectiveness of advanced data visualization techniques in automating business reporting, making complex data more accessible for decision-making.',
      status: 'In Progress',
      team: [
        { name: 'Udaya Sri - 2200032495', linkedin: '' },
        { name: 'Bhavya - 2300032288', linkedin: '' }
      ],
      deadline: 'Feb 2025'
    },
    {
      title: 'Healthcare Data Privacy Using Differential Privacy',
      description: 'Apply data science techniques to protect patient privacy in healthcare systems by using differential privacy methods, ensuring that sensitive information is secure.',
      status: 'In Progress',
      team: [
        { name: 'Triveni - 2200032292', linkedin: '' },
        { name: 'Rupeesh - 2300031153', linkedin: '' }
      ],
      deadline: 'Feb 2025'
    },
    {
      title: 'Real-Time Data Analytics in Traffic Management',
      description: 'Develop real-time analytics systems that use streaming data from traffic sensors to optimize traffic lights, reduce congestion, and improve overall urban mobility.',
      status: 'In Progress',
      team: [
        { name: 'Sreeja - 2200030712', linkedin: '' },
        { name: 'Siva Prasanna - 2300031225', linkedin: '' }
      ],
      deadline: 'March 2025'
    },
    {
      title: 'The Role of Data Science in Crime Prediction and Prevention Strategies',
      description: 'Explore how data science techniques can be applied to predict crimes and design prevention strategies by analyzing historical data and trends.',
      status: 'In Progress',
      team: [
        { name: 'Vishal - 2200032583', linkedin: '' },
        { name: 'M. Tarun Shiva  - 2300032334', linkedin: '' }
      ],
      deadline: 'Feb 2025'
    },
    {
      title: 'Automating Data Preprocessing in the Data Science Lifecycle',
      description: 'Build automated tools that streamline data wrangling, cleaning, and feature selection processes, improving efficiency in the initial stages of the data science workflow.',
      status: 'In Progress',
      team: [
        { name: 'Keerthana - 2200031118', linkedin: '' },
        { name: 'B. Charan - 2300031487', linkedin: '' }
      ],
      deadline: 'Feb 2025'
    },
    {
      title: 'Investigating the Effectiveness of Data Visualization Techniques in Business Reporting',
      description: 'Analyze the role of data visualization techniques in simplifying complex data and creating more effective business reports.',
      status: 'In Progress',
      team: [
        { name: 'Sahitya - 2200032723', linkedin: '' },
        { name: 'M. Harsha Priya - 2300031228', linkedin: '' }
      ],
      deadline: 'March 2025'
    },
    {
      title: 'Investigating the Use of Big Data in Urban Planning and Smart City Development',
      description: 'Study how big data analytics can be used for urban planning and smart city development by optimizing resource allocation and city infrastructure.',
      status: 'In Progress',
      team: [
        { name: 'Roshitha - 2200032088', linkedin: '' },
        { name: 'Sai Varshith - 2300033414', linkedin: '' }
      ],
      deadline: 'Feb 2025'
    },
    {
      title: 'Developing Models for Analyzing Financial Time Series Data for Investment Strategies',
      description: 'Create machine learning models to analyze financial time series data and design effective investment strategies.',
      status: 'In Progress',
      team: [
        { name: 'V. Sai Priya - 2200031244', linkedin: '' },
        { name: 'Buvana - 2300033774', linkedin: '' }
      ],
      deadline: 'March 2025'
    }
  ]
  ;
  

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
                      <span className="text-indigo-600">
                        Status: {project.status}
                      </span>
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
                      <h4 className="font-semibold text-gray-800">
                        Team Members:
                      </h4>
                      <ul>
                        {project.team.map((member, index) => (
                          <li
                            key={index}
                            className="text-indigo-600 hover:underline"
                          >
                            
                              {member.name}
                           
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Join Button */}
                  <a href="https://t.me/+D6MR2RJjIo4wZmQ9">
                    {" "}
                    <button className="absolute bottom-4 right-4 bg-indigo-600 text-white py-2 px-4 rounded-full shadow-md hover:bg-indigo-700 focus:outline-none transition-all">
                      Join Project
                    </button>
                  </a>
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
