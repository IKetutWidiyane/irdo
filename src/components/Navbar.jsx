import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Competition', href: '#competition' },
  { name: 'Speakers', href: '#speakers' },
  { name: 'Schedule', href: '#schedule' },
  { name: 'Register', href: '#register' },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/80 dark:bg-surface-dark/80 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-800/50">
      <div className="section-container">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <a href="#home" className="flex-shrink-0 flex items-center gap-2">
            <img src="/irdo-dark.png" alt="IRDO" className="h-9 w-auto hidden dark:block" />
            <img src="/irdo-light.png" alt="IRDO" className="h-9 w-auto block dark:hidden" />
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="px-3 py-2 rounded-lg text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5 transition-all duration-200"
              >
                {item.name}
              </a>
            ))}
            <div className="ml-2 pl-2 border-l border-slate-200 dark:border-slate-800">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile: theme + hamburger */}
          <div className="flex items-center gap-3 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/5 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-surface-dark"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="section-container py-4 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-3 py-2.5 rounded-lg text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5 transition-all"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;