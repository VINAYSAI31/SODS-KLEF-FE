import { FaGithub, FaLinkedin, FaTelegramPlane, FaEnvelope,FaInstagram } from 'react-icons/fa'; // Import icons from react-icons
import { Link } from 'react-router-dom';

const Footer = () => {
  const navigation = {
    main: [
      { name: 'Home', href: '/' },
      { name: 'About', href: '/about' },
      { name: 'Activities', href: '/activities' },
      { name: 'Projects', href: '/resources' },
      { name: 'Team', href: '/team' },
      { name: 'Gallery', href: '/gallery' },
      { name: 'Contact', href: '/contact' },
    ],
    social: [
      { name: 'GitHub', icon: FaGithub, href: 'https://github.com/VINAYSAI31' },
      { name: 'LinkedIn', icon: FaLinkedin, href: 'https://www.linkedin.com/in/sods-klef/' },
      { name: 'Telegram', icon: FaTelegramPlane, href: 'https://t.me/+D6MR2RJjIo4wZmQ9' },
      { name: 'Instagram', icon: FaInstagram, href: 'https://www.instagram.com/sods_klef/' }, // Added Instagram
      { name: 'Email', icon: FaEnvelope, href: 'mailto:datascience.sods@kluniveristy.in' },
    ],
  };

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-12 px-6 lg:px-8">
        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center space-x-6 md:space-x-12">
          {navigation.main.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-lg font-medium"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Social Icons */}
        <div className="mt-10 flex justify-center space-x-8">
          {navigation.social.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-500 hover:text-gray-900 transition-transform transform hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">{item.name}</span>
                <Icon className="h-6 w-6" />
              </a>
            );
          })}
        </div>

        {/* Footer Text */}
        <p className="mt-10 text-center text-gray-500 text-sm md:text-base">
          &copy; {new Date().getFullYear()} School of SODS Club. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
