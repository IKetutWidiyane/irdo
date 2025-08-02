import React from 'react';
import { motion } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Competition', href: '#competition' },
    { name: 'Speakers', href: '#speakers' },
    { name: 'Register', href: '#register' },
  ];

  return (
    <nav className="fixed w-full bg-white dark:bg-gray-900 shadow-md z-50 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            {/* Gunakan dua gambar, dan tampilkan sesuai mode */}
            <img
              src="/irdo-dark.png"
              alt="IRDO Logo Dark"
              className="h-11 w-auto hidden dark:block"
            />
            <img
              src="/irdo-light.png"
              alt="IRDO Logo Light"
              className="h-11 w-auto block dark:hidden"
            />
          </div>

          {/* Menu Items */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-irdo-purple hover:bg-gray-100 dark:hover:bg-gray-800"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Theme Toggle + Mobile Menu */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <div className="md:hidden">
              <button className="text-gray-700 dark:text-gray-300 hover:text-irdo-purple focus:outline-none">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
