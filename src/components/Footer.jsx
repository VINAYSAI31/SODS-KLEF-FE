import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const navigation = {
    main: [
      { name: 'Home', href: '/' },
      { name: 'About', href: '/about' },
      { name: 'Activities', href: '/activities' },
      { name: 'Resources', href: '/resources' },
      { name: 'Gallery', href: '/gallery' },
    ],
    social: [
      { name: 'GitHub', icon: Github, href: '#' },
      { name: 'LinkedIn', icon: Linkedin, href: '#' },
      { name: 'Twitter', icon: Twitter, href: '#' },
      { name: 'Email', icon: Mail, href: 'mailto:contact@datasciclub.edu' },
    ],
  };

  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <nav className="flex flex-wrap justify-center space-x-6 md:space-x-12">
          {navigation.main.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="text-gray-600 hover:text-indigo-600 transition-colors duration-200"
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <div className="mt-8 flex justify-center space-x-6">
          {navigation.social.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-500 hover:text-indigo-600 transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">{item.name}</span>
                <Icon className="h-6 w-6" />
              </a>
            );
          })}
        </div>
        <p className="mt-8 text-center text-gray-500">
          &copy; {new Date().getFullYear()} School of Data Science Club. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;