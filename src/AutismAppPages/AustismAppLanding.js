import React, { useState } from 'react';
import Navbar from '../AutismAppComponents/Navbar';
import { Link } from 'react-router-dom';
import { BiTargetLock, BiGlobe } from 'react-icons/bi';
import { FaUserFriends, FaHandsHelping } from 'react-icons/fa';
import { AnimatePresence, motion } from 'framer-motion';
import About from './About';
import Features from './Features';

const AutismAppLanding = () => {
  const testimonials = [
    {
      name: 'John Doe',
      testimonial: 'I\'m amazed by the support and understanding I received from the A.I.utism community. It has truly made a positive impact in my life.'
    },
    {
      name: 'Jane Smith',
      testimonial: 'Thanks to A.I.utism, I was able to find resources and connect with others who share similar experiences. It has been a game changer for me.'
    }
  ];
  const missionVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  const visionVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <div style={{ backgroundColor: "#fdff9e" }}>
      <Navbar />
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-20">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
        <div className="neon-box opacity-50 border-t border-gray-200 pt-4 bg-gradient-to-br from-rose-200 to-rose-300 p-8 rounded-lg">
            A.I.utism: Unlocking Potential Together.
            <Link to="/adult/ShareStories" className="font-semibold text-[#0D79F4]">
              <span className="absolute inset-0" aria-hidden="true">
              </span>Read more <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
        <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#12E0B7] to-[#07F76B] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}></div>
      </div>
      <div>
        <div class="text-center">
          <h1 class="text-4xl font-bold tracking-tight bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-transparent bg-clip-text sm:text-6xl py-4">Empowering Neurodiverse Lives</h1>
          <p class="mt-6 text-lg leading-8 text-gray-600">A vital resource for individuals on the autism spectrum and those with dyslexia who seek empowerment, community engagement, and the opportunity to advocate for positive change.</p>
          <div class="mt-10 flex items-center justify-center gap-x-6">
            <Link to="/About-us" class="rounded-md bg-[#0D79F4] px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">See more</Link>
            <Link to="/About-us/team" class="text-sm font-semibold leading-6 text-gray-900">Learn more <span aria-hidden="true">→</span></Link>
          </div>
        </div>
      </div>
      {/* Mission and Vision section */}
      <div className="flex justify-center">
        <motion.div
          className="w-1/2 bg-white rounded-md shadow-md p-6 m-4 relative z-10"
          variants={missionVariants}
          initial="hidden"
          animate="visible"
          style={{ backgroundColor: "#c8f40d1f" }}
        >
          <div className="flex items-center justify-center">
            <BiTargetLock className="text-4xl text-[#57C7FF]" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mt-4">Our Objective</h2>
          <p className="text-gray-600 mt-2">
            At the core of our mission is the unwavering commitment to deliver holistic support and an extensive range of resources to individuals who find themselves on the autism spectrum and those who grapple with dyslexia. Our vision is not merely to assist but to empower. We firmly believe that everyone, regardless of their neurodiversity, possesses untapped potential waiting to be discovered. By nurturing their unique strengths and addressing their specific needs, we aim to foster an environment where they can flourish.
          </p>
        </motion.div>

        <motion.div
          className="w-1/2 bg-white rounded-md shadow-md p-6 m-4 relative z-10"
          variants={visionVariants}
          initial="hidden"
          animate="visible"
          style={{ backgroundColor: "#c8f40d1f" }}
        >
          <div className="flex items-center justify-center">
            <BiGlobe className="text-4xl text-[#FF9335]" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mt-4">Our Outlook</h2>
          <p className="text-gray-600 mt-2">
            Our unwavering dedication lies in furnishing comprehensive support and a vast array of resources to individuals on the autism spectrum and those affected by dyslexia. Our goal is to empower them, enabling them to tap into their full potential and embark on journeys filled with purpose and significance. At the heart of our mission is a deep understanding of the unique challenges and incredible capabilities that come with neurodiversity.
          </p>
        </motion.div>
      </div>
      <Features />
    </div>
  );
};

export default AutismAppLanding;
