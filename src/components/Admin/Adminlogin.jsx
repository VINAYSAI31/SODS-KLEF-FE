import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { Shield, Key, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar';
import { Link } from "react-router-dom";

const Adminlogin = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Function to handle form submission

  return (
    <>
      <Navbar/>
      <div className="min-h-screen  flex items-center justify-center p-4">
        <div className="background-pattern max-w-md w-full bg-white backdrop-blur-lg rounded-2xl p-8 shadow-2xl transform hover:scale-[1.02] transition-transform duration-300">
          <div className="flex justify-center mb-8">
            <Shield className="h-12 w-12 text-purple-700" />
          </div>
          <h2 className="text-3xl font-bold text-center text-black mb-8">Admin Portal</h2>
          <form  className="space-y-6">
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-700 h-5 w-5" />
              <input
                type="text"
                {...register('username', { required: 'Username is required' })}
                className="w-full bg-white/20 border border-purple-300/30 rounded-lg py-3 px-12 text-black placeholder-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-400"
                placeholder="Your username"
              />
              {errors.username && (
                <span className="error text-red-500">{errors.username.message}</span>
              )}
            </div>
            <div className="relative">
              <Key className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-700 h-5 w-5" />
              <input
                type="password"
                {...register('password', { required: 'Password is required' })}
                className="w-full bg-white/20 border border-purple-300/30 rounded-lg py-3 px-12 text-black placeholder-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-400"
                placeholder="Password"
              />
              {errors.password && (
                <span className="error text-red-500">{errors.password.message}</span>
              )}
            </div>
            <Link to='/adminhome'><button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-300"
            >
              Login as Administrator
            </button></Link>
          </form>
          <p className="mt-4 text-center text-purple-400">
            Secure access for administrative controls
          </p>
        </div>
      </div>
    </>
  );
};

export default Adminlogin;
