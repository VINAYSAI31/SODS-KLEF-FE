import React, { useState } from 'react';
import { Linkedin, Mail, Github } from 'lucide-react';
import Navbar from './Navbar';

const Team = () => {
  // Define the team members with their roles and other details
  const allTeamMembers = [
    // y22 Roles
   
    {
      name: 'Vaishnavi',
      role: 'President',
      bio: 'Vaishnavi is the president, overseeing all strategic decisions and leading the club towards success.',
      image: './images/president.jpg',
      linkedin: 'https://linkedin.com/in/michael-williams',
      email: 'michael@datasciclub.edu',
      github: 'https://github.com/michael-williams',
      year: 'y22',
    },
    {
      name: 'Pardhu Madhu',
      role: 'Vice President',
      bio: 'Pardhu assists the president in managing the club and works on fostering collaboration across teams.',
      image: './images/vicepresident.jpg',
      linkedin: 'https://www.linkedin.com/in/pardhu-madhu-71b50b25a/',
      email: '2200032358@kluniversity.in',
      github: 'https://github.com/pardhumadhu1025',
      year: 'y22',
    },
    {
      name: 'Vinay Sai',
      role: 'Mentor & Web Developer',
      bio: 'Vinay mentors club members on projects and is the developer behind the club\'s website, handling both design and functionality.',
      image: './images/mentor.jpg',
      linkedin: 'https://www.linkedin.com/in/vinay-sai-89243b250/',
      email: '2200032358@kluniversity.in',
      github: 'https://github.com/VINAYSAI31',
      year: 'y22',
    },
    
    {
      name: 'Vidya Madineni',
      role: 'Technical Lead',
      bio: 'Vidya is a passionate technical lead with expertise in system architecture and software development.',
      image: './images/technicallead.jpg',
      linkedin: 'https://linkedin.com/in/alex-thompson',
      email: '2200031989@kluniversity.in',
      github: 'https://github.com/alex-thompson',
      year: 'y22',
    },
    {
      name: 'Vishal Srivatsav',
      role: 'Non-Technical Lead',
      bio: 'Vishal leads the non-technical side of the club, ensuring smooth operations and management.',
      image: './images/nontechnicallead.jpg',
      linkedin: 'https://www.linkedin.com/in/k-vishal-srivatsav-4bb395258/',
      email: '2200032583@kluniversity.in',

      github: 'https://github.com/Vishaltsuki',
      year: 'y22',
    },
    {
      name: 'Keerthana Sanagapalli',
      role: 'Secretary',
      bio: 'Keerthana is responsible for managing all administrative tasks and keeping records of meetings and events.',
      image: './images/secretary.jpg',
      linkedin: 'https://www.linkedin.com/in/keerthana-sanagapalli-a2b0b1246/',
      email: '2200031118@kluniversity.in',
      github: 'https://github.com/sanagapallisreekeerthana',
      year: 'y22',
    },
    {
      name: 'Kunigiri Kavya',
      role: 'Project Lead',
      bio: 'Kavya oversees all projects, ensuring timely execution and delivering high-quality results.',
      image: './images/projectlead.jpg',
      linkedin: 'http://www.linkedin.com/in/kunigiri-kavya-093333288',
      email: '2200032927@kluniversity.in',
      github: 'https://github.com/olivia-brown',
      year: 'y22',
    },
    {
      name: 'Maguluri Triveni',
      role: 'Protocol Head',
      bio: 'Triveni manages the protocols for events and ensures all activities run according to the guidelines.',
      image: './images/protocalhead.jpg',
      linkedin: 'https://www.linkedin.com/in/triveni-maguluri-31995528a/?originalSubdomain=in',
      email: '2200032292@kluniversity.in',
      github: 'http://github.com/Triveni2918',
      year: 'y22',
    },
    {
      name: 'Veeram Sreeja',
      role: 'Research Lead',
      bio: 'Sreeja leads the research team, driving innovation and analysis in the club’s research initiatives.',
      image: './images/researchlead.jpg',
      linkedin: 'https://www.linkedin.com/in/veeramreddy-sreeja-59b733285/',
      email: '2200030712@kluniversity.in',
      github: 'https://github.com/vsreeja-Reddy',
      year: 'y22',
    },
    {
      name: 'Shusmitha Nallamothu',
      role: 'Drafting Lead',
      bio: 'Shusmitha Nallamothu is in charge of drafting documentation and ensuring that all content is clear and concise.',
      image: './images/draftinglead.jpg',
      linkedin: 'http://www.linkedin.com/in/shusmithanallamothu',
      email: '22000321868@kluniversity.in',
      github: 'https://github.com/ShusmithaNallamothu',
      year: 'y22',
    },
    {
      name: 'Yakkala Udaya Sri',
      role: 'Content Writing Lead',
      bio: ' Udaya Sri leads the content writing team, ensuring that all written materials are well-crafted and impactful.',
      image: './images/contentwritinglead.jpg',
      linkedin: 'http://www.linkedin.com/in/yakkala-udaya-sri-a53318265',
      email: '2200032495@kluniversity.in',
      github: 'https://github.com/Udayasri2407',
      year: 'y22',
    },

    // Other members for y21 and y23
    {
      name: 'ALLA SAI SURYA',
      role: 'Technical Advisor',
      bio: 'Sai Surya provides technical expertise and guidance to support the growth of new technologies and projects.',
      image: './images/advisor1.jpg',
      linkedin: 'https://linkedin.com/in/john-smith',
      email: '2100031646@kluniversity.in',
      github: 'https://github.com/john-smith',
      year: 'y21',
    },
    {
      name: 'venkat',
      role: 'Technical Advisor',
      bio: 'venkat offers strategic advice and insights to help steer projects in the right direction and drive innovation.',
      image: './images/advisor2.jpg',
      linkedin: 'https://linkedin.com/in/emily-davis',
      email: '2100032078@kluniversity.in',
      github: 'https://github.com/emily-davis',
      year: 'y21',
    },
    // {
    //   name: 'Michael Johnson',
    //   role: 'Technical Advisor',
    //   bio: 'Michael works closely with the team to provide technical leadership and direction in the development of new solutions.',
    //   image: './images/advisor3.jpg',
    //   linkedin: 'https://linkedin.com/in/michael-johnson',
    //   email: '2200032358@kluniversity.in',
    //   github: 'https://github.com/michael-johnson',
    //   year: 'y21',
    // },
    
    // {
    //   name: 'Veeram Reddy Sreeja ',
    //   role: 'Research Lead',
    //   bio: 'Sreeja leads the research initiatives, focusing on data analysis and machine learning algorithms.',
    //   image: '',
    //   linkedin: 'https://linkedin.com/in/david-kumar',
    //   email: 'david@datasciclub.edu',
    //   github: 'https://github.com/david-kumar',
    //   year: 'y23',
    // },
  ];

  // State to filter members based on selected year
  const [selectedYear, setSelectedYear] = useState('y22');

  // Filter team members based on selected year
  const filteredTeamMembers = allTeamMembers.filter(
    (member) => member.year === selectedYear
  );

  return (
    <>
      <Navbar />

      <div className="bg-white">
        {/* Year Filter Buttons */}
        <section className="py-10 bg-indigo-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <button
              onClick={() => setSelectedYear('y21')}
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 mr-4"
            >
              Y21
            </button>
            <button
              onClick={() => setSelectedYear('y22')}
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 mr-4"
            >
              Y22
            </button>
            <button
              onClick={() => setSelectedYear('y23')}
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
            >
              Y23
            </button>
          </div>
        </section>

        {/* Team Members Section */}
        <section className="py-16 bg-gradient-to-b from-indigo-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Meet Our Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {filteredTeamMembers.map((member, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-200"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {member.name}
                    </h3>
                    <p className="text-indigo-600 mb-4">{member.role}</p>
                    <p className="text-gray-600 mb-4">{member.bio}</p>
                    <div className="flex space-x-4">
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          className="text-gray-600 hover:text-indigo-600 transition-colors duration-200"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Linkedin className="h-5 w-5" />
                        </a>
                      )}
                      {member.email && (
                        <a
                          href={`mailto:${member.email}`}
                          className="text-gray-600 hover:text-indigo-600 transition-colors duration-200"
                        >
                          <Mail className="h-5 w-5" />
                        </a>
                      )}
                      {member.github && (
                        <a
                          href={member.github}
                          className="text-gray-600 hover:text-indigo-600 transition-colors duration-200"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="h-5 w-5" />
                        </a>
                      )}
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

export default Team;
