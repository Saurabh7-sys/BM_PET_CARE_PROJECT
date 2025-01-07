import React, { useState } from 'react';
import { Transition } from '@headlessui/react';
import footerLogo from '../assets/images/dogArt.png';


const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen paw-background">
      <header className="w-full max-w-lg flex items-center justify-between p-4 bg-sangGreen shadow-md rounded-lg">
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full mr-4 flex items-center justify-center">
            <div className="w-14 h-14 bg-white rounded-full shadow-md flex justify-center items-center overflow-hidden">
              <img src={footerLogo} alt="BM PET CARE Logo" className="w-full h-full object-cover" />
            </div>
          </div>
          <h1 className="text-xl font-bold text-sand">BM Pet Care</h1>
        </div>
      </header>

      <div className="w-full max-w-lg bg-white shadow-lg rounded-lg overflow-hidden relative mb-12 mt-6">
        <div className="flex border-b">
          <button
            className={`w-1/2 p-4 text-center ${isLogin ? 'bg-sangGreen text-white' : 'bg-gray-200 text-[#333333]'}`}
            onClick={() => setIsLogin(true)}
          >
            Sign In
          </button>
          <button
            className={`w-1/2 p-4 text-center ${!isLogin ? 'bg-sangGreen text-white' : 'bg-gray-200 text-[#333333]'}`}
            onClick={() => setIsLogin(false)}
          >
            Sign Up
          </button>
        </div>

        <div className="relative h-[500px] flex items-center justify-center">
          <Transition
            show={isLogin}
            enter="transition-transform duration-300 ease-in-out"
            enterFrom="transform -translate-x-full"
            enterTo="transform translate-x-0"
            leave="transition-transform duration-300 ease-in-out"
            leaveFrom="transform translate-x-0"
            leaveTo="transform translate-x-full"
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
              <form className="w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-[#333333]">Sign In</h2>
                <div className="mb-4">
                  <label htmlFor="login-email" className="block text-[#333333] text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="login-email"
                    type="email"
                    className="mt-1 block w-full border border-gray-300 rounded px-4 py-2 text-sm"
                    placeholder="you@example.com"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="login-phone" className="block text-[#333333] text-sm font-medium">
                    Mobile Number
                  </label>
                  <input
                    id="login-phone"
                    type="tel"
                    className="mt-1 block w-full border border-gray-300 rounded px-4 py-2 text-sm"
                    placeholder="Enter your mobile number"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="login-password" className="block text-[#333333] text-sm font-medium">
                    Password
                  </label>
                  <input
                    id="login-password"
                    type="password"
                    className="mt-1 block w-full border border-gray-300 rounded px-4 py-2 text-sm"
                    placeholder="******"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-sangGreen text-white py-2 rounded hover:sangGreen"
                >
                  Sign In
                </button>
                <div className="mt-4 text-center">
                  <a href="#forgot-password" className="text-sangGreen hover:underline">
                    Forgot Password?
                  </a>
                </div>
              </form>
            </div>
          </Transition>
          <Transition
            show={!isLogin}
            enter="transition-transform duration-300 ease-in-out"
            enterFrom="transform translate-x-full"
            enterTo="transform translate-x-0"
            leave="transition-transform duration-300 ease-in-out"
            leaveFrom="transform translate-x-0"
            leaveTo="transform -translate-x-full"
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
              <form className="w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-[#333333]">Sign Up</h2>
                <div className="mb-4">
                  <label htmlFor="signup-email" className="block text-[#333333] text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="signup-email"
                    type="email"
                    className="mt-1 block w-full border border-gray-300 rounded px-4 py-2 text-sm"
                    placeholder="you@example.com"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="signup-phone" className="block text-[#333333] text-sm font-medium">
                    Mobile Number
                  </label>
                  <input
                    id="signup-phone"
                    type="tel"
                    className="mt-1 block w-full border border-gray-300 rounded px-4 py-2 text-sm"
                    placeholder="Enter your mobile number"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="signup-password" className="block text-[#333333] text-sm font-medium">
                    Password
                  </label>
                  <input
                    id="signup-password"
                    type="password"
                    className="mt-1 block w-full border border-gray-300 rounded px-4 py-2 text-sm"
                    placeholder="******"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#4a7766] text-white py-2 rounded hover:sangGreen"
                >
                  Sign Up
                </button>
              </form>
              <button
                className="w-full bg-red-600 text-white mt-4 py-2 rounded hover:bg-[#e67449]"
                onClick={() => alert('Google sign up functionality coming soon!')}
              >
                Sign up with Google
              </button>
            </div>
          </Transition>
        </div>
      </div>
    </div>
  );
};

export default Login;
