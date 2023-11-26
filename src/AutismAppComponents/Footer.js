import React from 'react';
import { SiFacebook, SiTwitter, SiInstagram } from 'react-icons/si';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#ffdb87] to-[#fffd87] text-blue-700">
      <div className="py-8 px-6 sm:px-8 lg:px-12 mx-auto flex items-center justify-between min-w-7xl">
        
        <div className="flex-1 pr-10 text-center">
          <p className="font-bold text-lg mb-4">Useful Links</p>
          <ul className="space-y-2">
            <li><Link to="/" className="text-sm hover:text-blue-700">Home</Link></li>
            <li><Link to="/about" className="text-sm hover:text-blue-700">About Us</Link></li>
            <li><Link to="/resources" className="text-sm hover:text-blue-700">Resources</Link></li>
            <li><Link to="/contact" className="text-sm hover:text-blue-700">Contact</Link></li>
          </ul>
        </div>

        <div className="px-10 text-center">
          <p className="font-bold text-lg mb-4">A.I.utism</p>
          <p className="text-sm mb-4">A crucial resource for individuals with autism and dyslexia,</p>
          <p className="text-sm mb-4">pursuing empowerment, inclusive community involvement,</p>
          <p className="text-sm mb-4">and avenues to champion positive transformation. </p>
          <div className="flex space-x-4 mt-4 justify-center">
            <Link to="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><SiFacebook className="text-2xl transform hover:scale-110 transition-all duration-300" /></Link>
            <Link to="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><SiTwitter className="text-2xl transform hover:scale-110 transition-all duration-300" /></Link>
            <Link to="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><SiInstagram className="text-2xl transform hover:scale-110 transition-all duration-300" /></Link>
          </div>
        </div>
        
        <div className="flex-1 pl-10 text-center">
          <p className="font-bold text-lg mb-4">Contact Us</p>
          <p className="text-sm mb-4">White House</p>
          <p className="text-sm mb-4">Email: info@aiutism.com</p>
          <p className="text-sm">Phone: 123-456-7890</p>
        </div>
      </div>

      <div className="bg-[rgba(0,0,0,0.1)] py-4 px-6 sm:px-8 lg:px-12 flex items-center justify-center min-w-7xl">
        <p className="text-sm">© 2023 A.I.utism. All rights reserved.</p>
        <p className="text-sm ml-4">Privacy Policy | Terms of Service</p>
      </div>
    </footer>
  );
};

export default Footer;
