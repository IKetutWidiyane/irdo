import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="pt-24 pb-12 md:pt-32 md:pb-20 bg-gradient-to-r from-irdo-blue to-irdo-purple text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              International Robot Design Olympiad
            </motion.h1>
            <motion.p 
              className="text-xl mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Where Innovation Meets Technology
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <button className="bg-white text-irdo-blue font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition duration-300 mr-4">
                Register Now
              </button>
              <button className="border-2 border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:text-irdo-blue transition duration-300">
                Learn More
              </button>
            </motion.div>
          </div>
          <div className="md:w-1/2">
            <motion.img 
              src="https://via.placeholder.com/600x400?text=Robot+Illustration" 
              alt="Robot Illustration"
              className="rounded-lg shadow-2xl"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;