import React from 'react';
import Socials from './Socials';
import footerLogo from '../assets/images/dogArt.png';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-3">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0 px-4">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-white rounded-full overflow-hidden">
            <img src={footerLogo} alt="BM PET CARE Logo" className="w-full h-full object-cover" />
          </div>
          <span className="text-lg font-semibold">BM PET CARE</span>
        </div>

        <div>
          <Socials />
        </div>

        <div className="flex space-x-4 text-sm">
          <a href="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</a>
          <a href="/terms" className="text-gray-400 hover:text-white">Terms of Service</a>
        </div>
      </div>

      <div className="text-center mt-2 px-4">
          <p className="text-xs text-gray-400 mb-1">
            We’re committed to providing your pets with a loving, comfortable, and safe environment. Reach out today and let us take care of your furry friends like they are our own!
          </p>
        </div>

      <div className="mt-2 text-center text-xs text-gray-400">
        &copy; {new Date().getFullYear()} BM PET CARE. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
