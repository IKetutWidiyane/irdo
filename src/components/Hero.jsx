import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const pattern1 = `radial-gradient(circle at 50% 50%, rgba(255,255,255,0.04) 1px, transparent 0)`;
  const pattern2 = `linear-gradient(rgba(255,255,255,0.02) 1px, transparent 0)`;
  const pattern3 = `linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 0)`;
  const beforePattern = `repeating-linear-gradient(45deg, transparent, transparent 6px, rgba(255,255,255,0.02) 6px, rgba(255,255,255,0.02) 12px)`;
  const afterPattern = `radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)`;

  return (
    <section
      id="home"
      className="pt-16 pb-8 text-white relative overflow-hidden"
      style={{
        backgroundColor: '#121212',
        backgroundImage: `${pattern1}, ${pattern2}, ${pattern3}, linear-gradient(to right, #1e3a8a, #2563eb, #60a5fa)`,
        backgroundSize: '20px 20px, 10px 10px, 10px 10px, cover',
        backgroundRepeat: 'repeat',
      }}
    >
      <div
        className="absolute inset-0 z-0 dark:hidden"
        style={{
          backgroundImage: beforePattern,
          opacity: 0.5,
          pointerEvents: 'none',
        }}
      />
      <div
        className="absolute inset-0 z-0 dark:hidden"
        style={{
          backgroundImage: afterPattern,
          backgroundSize: '40px 40px',
          opacity: 0.4,
          pointerEvents: 'none',
        }}
      />

      {/* Dark mode overlay */}
      <div
        className="absolute inset-0 z-0 hidden dark:block"
        style={{
          backgroundColor: '#0f172a',
          backgroundImage: `
            radial-gradient(circle at 50% 50%, rgba(255,255,255,0.03) 1px, transparent 0),
            linear-gradient(rgba(255,255,255,0.01) 1px, transparent 0),
            linear-gradient(90deg, rgba(255,255,255,0.01) 1px, transparent 0)
          `,
          backgroundSize: '20px 20px, 10px 10px, 10px 10px',
          backgroundRepeat: 'repeat',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              International Robot Design Olympiad
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Where Innovation Meets Technology
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <button className="bg-white text-blue-600 font-semibold py-2 px-6 rounded-full hover:bg-gray-100 transition duration-300 mr-2 text-base dark:bg-blue-600 dark:text-white dark:hover:bg-blue-700">
                Register
              </button>
              <button className="border border-white text-white font-semibold py-2 px-6 rounded-full hover:bg-white hover:text-blue-600 transition duration-300 text-base dark:border-blue-400 dark:hover:bg-blue-400 dark:hover:text-blue-900">
                Learn More
              </button>
            </motion.div>
          </div>

          <div className="md:w-1/2">
            <motion.img
              src="/robot.png"
              alt="Robot Illustration"
              className="rounded-lg shadow-lg w-full max-w-sm mx-auto"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;