import React from 'react';
import { motion } from 'framer-motion';
import ScrambleText from './ScrambleText';
import BackgroundPattern from './BackgroundPattern';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-irdo-50 dark:from-surface-dark dark:via-surface-dark dark:to-irdo-950/30"
    >
      <BackgroundPattern />

      {/* Radial glows - light mode */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-irdo-200/30 dark:hidden rounded-full blur-[160px] translate-x-1/3 -translate-y-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-200/20 dark:hidden rounded-full blur-[120px] -translate-x-1/4 translate-y-1/3 pointer-events-none" />

      {/* Radial glows - dark mode */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-irdo-500/8 hidden dark:block rounded-full blur-[160px] translate-x-1/3 -translate-y-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-500/6 hidden dark:block rounded-full blur-[120px] -translate-x-1/4 translate-y-1/3 pointer-events-none" />

      {/* Binary rain decoration */}
      <div className="absolute right-12 top-1/2 -translate-y-1/2 hidden lg:block font-mono text-[10px] leading-relaxed text-irdo-500/20 dark:text-irdo-500/10 select-none pointer-events-none">
        {Array.from({ length: 20 }, (_, i) => (
          <div key={i} className="opacity-0 animate-pulse" style={{ animationDelay: `${i * 0.2}s`, animationDuration: '3s' }}>
            {Array.from({ length: 12 }, () => Math.round(Math.random())).join('')}
          </div>
        ))}
      </div>

      <div className="relative z-10 w-full section-container py-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-3 py-1.5 mb-8 text-xs font-medium text-irdo-600 dark:text-irdo-300 bg-irdo-100 dark:bg-irdo-500/10 border border-irdo-200 dark:border-irdo-500/20 rounded-full"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-irdo-500 animate-pulse-slow" />
            International Competition 2027
          </motion.div>

          {/* Scramble headline with binary */}
          <ScrambleText
            text="International Robot Design Olympiad"
            className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.05] mb-6"
            scrambleSpeed={55}
            delay={400}
            duration={1800}
            perspective={true}
            hoverEffect={true}
          />

          {/* Subheadline */}
          <motion.p
            className="text-lg sm:text-xl text-slate-500 dark:text-slate-400 max-w-2xl mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Where innovation meets technology — showcasing the future of robotics
            and design from the brightest minds across the globe.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <button className="btn-primary">
              Register Now
            </button>
            <button className="btn-secondary">
              Learn More
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="flex flex-wrap gap-10 sm:gap-16 mt-16 pt-12 border-t border-slate-200 dark:border-slate-800"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            {[
              { value: '500+', label: 'Participants' },
              { value: '30+', label: 'Countries' },
              { value: '50+', label: 'Speakers' },
              { value: '$50K', label: 'Prize Pool' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white font-mono">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-500 dark:text-slate-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;