import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaChild, FaGamepad, FaVideo, FaPuzzlePiece } from 'react-icons/fa';
import Navbar from '../../AutismAppComponents/Navbar';
import ButtonPrimary from '../../AutismAppComponents/ButtonPrimary';

const ChildHome = () => {
  const buttonVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.1, rotate: 5 },
  };

  return (
    <div className="bg-gradient-to-r from-yellow-200 via-red-200 to-orange-200 min-h-screen flex flex-col items-center justify-center">
      {/* <Navbar /> */}
      <div className='p-10 bg-gradient-to-tr from-orange-400 to-red-400 border-orange-500 border-2 hover:shadow-lg rounded-lg w-screen h-screen'>
        <h1 className="text-6xl font-bold mb-8">Welcome to the Child Section</h1>
        <p className="text-3xl mb-4">Explore fun and educational content designed just for kids!</p>
        <div className="flex flex-col items-center justify-center space-y-4">
        </div>
        <div>
        <Link to="/">
  <motion.div
    className="flex items-center bg-orange-400 hover:bg-red-500 text-white font-semibold py-4 px-8 rounded-full text-4xl transition-all duration-300"
    variants={buttonVariants}
    initial="initial"
    whileHover="hover"
  >
    Get Started
  </motion.div>
</Link>

          <div className='p-5 items-center align-center text-center'>
            <div>
              <Link to="/games">
                <motion.div
                  className="flex items-center bg-gradient-to-tr from-orange-600 to-red-600 hover:bg-red-600 text-white font-semibold py-4 px-8 rounded-full hover:text-orange-500 text-4xl transition-all duration-300"
                  variants={buttonVariants}
                  style={{ marginBottom: "15px" }}
                  initial="initial"
                  whileHover="hover"
                >
                  <FaGamepad className="mr-4 text-5xl" />
                  Play Games
                </motion.div>
              </Link>
            </div>
            <div>
              <Link to="videos">
                <motion.div
                  className="flex items-center bg-gradient-to-tr from-orange-600 to-red-600 hover:bg-red-600 text-white font-semibold py-4 px-8 rounded-full hover:text-orange-500 text-4xl transition-all duration-300"
                  variants={buttonVariants}
                  style={{ marginBottom: "15px" }}
                  initial="initial"
                  whileHover="hover"
                >
                  <FaVideo className="mr-4 text-5xl" />
                  Watch Videos
                </motion.div>
              </Link>
            </div>
            <Link to="puzzles">
              <div>
                <motion.div
                  className="flex items-center bg-gradient-to-tr from-orange-600 to-red-600 hover:bg-red-600 text-white font-semibold py-4 px-8 rounded-full text-4xl transition-all duration-300"
                  variants={buttonVariants}
                  initial="initial"
                  whileHover="hover"
                >
                  <FaPuzzlePiece className="mr-4 text-5xl" />
                  Solve Puzzles
                </motion.div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className='p-6'>
        <Link to="/">
          <ButtonPrimary text="Go Back to Homepage" />
        </Link>
      </div>
    </div>
  );
};

export default ChildHome;
