import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        
        {/* Logo Section */}
        <div className="flex-1">
          <Link to="/">
            <img 
              src="https://cdn.discordapp.com/attachments/738139138208825407/1167936216105226310/nothing_2.png?ex=654ff05d&is=653d7b5d&hm=b62886892d741a1d4b39ca4d7c1bcd0fbf0b844e21eba3feb278a29b11aae5ba&" 
              alt="A.I.utism Logo" 
              className="w-64"
            />
          </Link>
        </div>
        
        {/* Link Section with Gradient */}
        <div className="hidden lg:flex flex-1 justify-center items-center space-x-20">
  <Link to="/" className="text-sm font-semibold leading-6 text-gray-700">Home</Link>
  <Link to="/About-us" className="text-sm font-semibold leading-6 text-gray-700">About Us</Link>
  <Link to="/child" className="text-sm font-semibold leading-6 text-gray-700">Child</Link>
  <Link to="/adult" className="text-sm font-semibold leading-6 text-gray-700">Adult</Link>
</div>





        {/* Profile and Login Button Section */}
        <div className="flex-1 flex justify-end items-center space-x-6">
          {isAuthenticated ? (
            <Link to="/profile" className="text-sm font-semibold leading-6 text-gray-900">
              Profile <span aria-hidden="true">&rarr;</span>
            </Link>
          ) : (
            <button onClick={() => loginWithRedirect()} className="text-sm font-semibold leading-6 text-gray-900">
              Log in <span aria-hidden="true">&rarr;</span>
            </button>
          )}
          
          {/* Hamburger Menu Button for Mobile */}
          <div className="lg:hidden">
            <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
              <span className="sr-only">Open main menu</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
