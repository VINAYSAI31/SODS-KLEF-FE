import React from 'react';
import { 
  Menu, 
  Home, 
  User, 
  LayoutDashboard, 
  Heart, 
  History, 
  Settings, 
  LogOut 
} from 'lucide-react';
import { Link } from 'react-router-dom';

// Donor Navbar Component
const Adminnavbar = () => {

  const handleLogout = async () => {
    try {
      const response = await fetch('http://localhost:2024/donor/api/logout', {
        method: 'POST',
        credentials: 'include',
      });

      if (response.ok) {
        // Clear tokens and redirect to login page
        localStorage.removeItem('token');
        sessionStorage.removeItem('token');
        window.location.href = '/donorlogin';
      } else {
        console.error('Failed to logout:', response.statusText);
        alert('Logout failed. Please try again.');
      }
    } catch (error) {
      console.error('Error during logout:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <nav className="w-64 h-screen bg-gray-900 fixed left-0 top-0 border-r border-gray-800">
      <div className="flex flex-col h-full">
        {/* Header */}
        <header className="p-6 border-b border-gray-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Menu className="w-6 h-6 text-primary-500" />
            <h1 className="text-xl font-bold text-white">Admin</h1>
          </div>
        </header>
        
        <div className="p-6 border-b border-gray-800">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center">
              <User className="w-5 h-5 text-gray-300" />
            </div>
            <div>
              <h2 className="text-sm font-medium text-white">Welcome</h2>
              <p className="text-xs text-gray-200">Admin</p>
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex-1 py-6 space-y-1 px-3 text-gray-100">
          <div className="space-y-2 px-3">
            <NavItem icon={Home} text="Home" to="/donorhome" />
            <NavItem icon={User} text="Activities" to="/allactivities" />
            <NavItem icon={LayoutDashboard} text="Add Activity" to="/addactivity" />
            <NavItem icon={Heart} text="Team Members" to="/teammembers" />
            <NavItem icon={History} text="Projects" to="/allprojects" />
            <NavItem icon={Settings} text="Settings" to="/settings" />
          </div>
        </div>

        {/* Footer */}
        <div className="p-3 border-t border-indigo-700">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 p-3 rounded-lg text-red-200 hover:bg-red-900/50 transition-colors"
          >
            <LogOut size={20} />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

// Navigation Item Component
const NavItem = ({ icon: Icon, text, to }) => {
  return (
    <Link
      to={to}
      className="flex items-center gap-3 p-3 rounded-lg hover:bg-indigo-700/50 transition-colors"
    >
      <Icon size={20} />
      <span>{text}</span>
    </Link>
  );
};

export default Adminnavbar;
