import React from 'react';
import { motion } from 'framer-motion';
import BackgroundPattern from './BackgroundPattern';

const features = [
  {
    title: 'Global Reach',
    desc: 'Participants from 30+ countries compete on a world stage.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
  },
  {
    title: 'Expert Judging',
    desc: 'Evaluated by renowned experts in robotics and AI from top institutions.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0-.5292-.4667l-.1336-.1195.1336-.1197A53.254 53.254 0 0 1 12.75 3.69a.75.75 0 0 1 .5 0c2.134.84 4.11 2.05 5.785 3.56m-6.285 7.5v.01M9.75 9.75A3 3 0 1 1 12 12.75h0A3 3 0 0 1 9.75 9.75h0z" />
      </svg>
    ),
  },
  {
    title: 'Multiple Categories',
    desc: 'Various competition tracks for different skill levels and interests.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
      </svg>
    ),
  },
  {
    title: 'Networking',
    desc: 'Connect with innovators, researchers, and industry leaders worldwide.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
      </svg>
    ),
  },
];

const About = () => {
  return (
    <section id="about" className="section-padding bg-surface dark:bg-surface-dark relative overflow-hidden">
      <BackgroundPattern />
      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <div className="section-label mx-auto">About</div>
          <h2 className="section-title mb-4">What is IRDO?</h2>
          <p className="section-desc mx-auto">
            The International Robot Design Olympiad (IRDO) is a prestigious global competition
            that brings together the brightest minds in robotics and technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            className="card p-8 lg:p-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Our Mission</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
              To foster innovation in robotics and inspire the next generation of engineers and
              scientists to push the boundaries of what's possible with robotic technology.
            </p>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              We believe in creating a platform where creativity meets technical excellence,
              enabling participants to showcase their skills on an international stage.
            </p>
          </motion.div>

          <motion.div
            className="card p-8 lg:p-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Our Vision</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
              A world where robotics and AI are accessible to all, driving progress and solving
              humanity's most pressing challenges through innovation and collaboration.
            </p>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              We strive to build a global community of robot enthusiasts, researchers, and
              entrepreneurs who will shape the future of technology.
            </p>
          </motion.div>
        </div>

        {/* Features grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              className="card-hover p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <div className="w-10 h-10 rounded-xl bg-irdo-50 dark:bg-irdo-500/10 text-irdo-600 dark:text-irdo-400 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h4 className="text-base font-semibold text-slate-900 dark:text-white mb-2">
                {feature.title}
              </h4>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;