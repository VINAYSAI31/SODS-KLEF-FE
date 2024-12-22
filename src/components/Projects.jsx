import Navbar from './Navbar';
import {  Users } from 'lucide-react';

const Projects = () => {


  const currentProjects = [
    
      {
        title: 'The Role of Big Data in Analyzing Climate Change Impacts on Agricultural Productivity',
        description: '',
        status: 'In Progress',
        team: [
          { name: 'Vaishnavi', linkedin: '' },
          { name: 'Jayanith', linkedin: '' }
        ],
        deadline: ''
      },
      {
        title: 'Anomaly Detection in Cybersecurity Using Network Traffic Data',
        description: 'Use unsupervised learning techniques to find patterns in network traffic data and identify unusual behavior that might signal cybersecurity threats.',
        status: 'In Progress',
        team: [
          { name: 'Pardhu Madhu', linkedin: '' },
          { name: 'Hema Vardhan', linkedin: '' }
        ],
        deadline: ''
      },
      {
        title: 'Developing Machine Learning Models for Automated Text Classification in Legal Documents',
        description: '',
        status: 'In Progress',
        team: [
          { name: 'M. Vidya', linkedin: '' },
          { name: 'Bhagya Sri', linkedin: '' }
        ],
        deadline: ''
      },
      {
        title: 'Crime Prediction Using Data Science',
        description: 'Build predictive models using historical crime data and social factors to forecast future crime hotspots and assist law enforcement in proactive planning.',
        status: 'In Progress',
        team: [
          { name: 'K. Kavya', linkedin: '' },
          { name: 'C. Ramakrishna', linkedin: '' }
        ],
        deadline: ''
      },
      {
        title: 'Noisy Data Management in Environmental Monitoring',
        description: 'Develop machine learning models that clean and process noisy or incomplete environmental data (air quality, water levels), improving the accuracy of pollution tracking.',
        status: 'In Progress',
        team: [
          { name: 'Shusmitha', linkedin: '' },
          { name: 'Rohith', linkedin: '' }
        ],
        deadline: ''
      },
      {
        title: 'Automated Business Reporting with Data Visualization',
        description: 'Investigate the effectiveness of advanced data visualization techniques in automating business reporting, making complex data more accessible for decision-making.',
        status: 'In Progress',
        team: [
          { name: 'Udaya Sri', linkedin: '' },
          { name: 'Bhavya', linkedin: '' }
        ],
        deadline: ''
      },
      {
        title: 'Healthcare Data Privacy Using Differential Privacy',
        description: 'Apply data science techniques to protect patient privacy in healthcare systems by using differential privacy methods, ensuring that sensitive information is secure.',
        status: 'In Progress',
        team: [
          { name: 'Triveni', linkedin: '' },
          { name: 'Rupeesh', linkedin: '' }
        ],
        deadline: ''
      },
      {
        title: 'Real-Time Data Analytics in Traffic Management',
        description: 'Develop real-time analytics systems that use streaming data from traffic sensors to optimize traffic lights, reduce congestion, and improve overall urban mobility.',
        status: 'In Progress',
        team: [
          { name: 'Sreeja', linkedin: '' },
          { name: 'Siva Prasanna', linkedin: '' }
        ],
        deadline: ''
      },
      {
        title: 'The Role of Data Science in Crime Prediction and Prevention Strategies',
        description: '',
        status: 'In Progress',
        team: [
          { name: 'Vishal', linkedin: '' },
          { name: 'M. Tarun Shiva Kumar', linkedin: '' }
        ],
        deadline: ''
      },
      {
        title: 'Automating Data Preprocessing in the Data Science Lifecycle',
        description: 'Build automated tools that streamline data wrangling, cleaning, and feature selection processes, improving efficiency in the initial stages of the data science workflow.',
        status: 'In Progress',
        team: [
          { name: 'Keerthana', linkedin: '' },
          { name: 'B. Charan', linkedin: '' }
        ],
        deadline: ''
      },
      {
        title: 'Investigating the Effectiveness of Data Visualization Techniques in Business Reporting',
        description: '',
        status: 'In Progress',
        team: [
          { name: 'Sahitya', linkedin: '' },
          { name: 'M. Harsha Priya', linkedin: '' }
        ],
        deadline: ''
      },
      {
        title: 'Investigating the Use of Big Data in Urban Planning and Smart City Development',
        description: '',
        status: 'In Progress',
        team: [
          { name: 'Roshitha', linkedin: '' },
          { name: 'Sai Varshith', linkedin: '' }
        ],
        deadline: ''
      },
      {
        title: 'Developing Models for Analyzing Financial Time Series Data for Investment Strategies',
        description: '',
        status: 'In Progress',
        team: [
          { name: 'V. Sai Priya', linkedin: '' },
          { name: 'Buvana', linkedin: '' }
        ],
        deadline: ''
      }
    
    
    
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
