import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const pattern1 = `radial-gradient(circle at 50% 50%, rgba(255,255,255,0.05) 1px, transparent 0)`;
  const pattern2 = `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 0)`;
  const pattern3 = `linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 0)`;
  const beforePattern = `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.03) 10px, rgba(255,255,255,0.03) 20px)`;
  const afterPattern = `radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)`;

  return (
    <section
      id="home"
      className="pt-24 pb-12 md:pt-32 md:pb-20 text-white relative overflow-hidden"
      style={{
        backgroundColor: '#121212',
        backgroundImage: `${pattern1}, ${pattern2}, ${pattern3}, linear-gradient(to right, #1e3a8a, #2563eb, #60a5fa)`,
        backgroundSize: '40px 40px, 20px 20px, 20px 20px, cover',
        backgroundRepeat: 'repeat',
      }}
    >
      {/* ::before pattern effect */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: beforePattern,
          opacity: 0.8,
          pointerEvents: 'none',
        }}
      />
      {/* ::after pattern effect */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: afterPattern,
          backgroundSize: '60px 60px',
          opacity: 0.6,
          pointerEvents: 'none',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          {/* Teks utama */}
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
              <button className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition duration-300 mr-4">
                Register Now
              </button>
              <button className="border-2 border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:text-blue-600 transition duration-300">
                Learn More
              </button>
            </motion.div>
          </div>

          {/* Gambar ilustrasi */}
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
