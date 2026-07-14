import React from 'react';
import { motion } from 'framer-motion';
import BackgroundPattern from './BackgroundPattern';

const speakers = [
  {
    name: 'Dr. Elena Kepin',
    title: 'Robotics Professor at MIT',
    expertise: 'Autonomous Systems',
    initials: 'EK',
    color: 'from-irdo-500 to-indigo-500',
  },
  {
    name: 'Prof. Kevin Tanaka',
    title: 'AI Research Lead at Google',
    expertise: 'Machine Learning in Robotics',
    initials: 'KT',
    color: 'from-emerald-500 to-teal-500',
  },
  {
    name: 'Dr. Priya Patel',
    title: 'Director of Robotics Innovation Lab',
    expertise: 'Human-Robot Interaction',
    initials: 'PP',
    color: 'from-amber-500 to-orange-500',
  },
  {
    name: 'Dr. Markus Weber',
    title: 'CTO of RoboTech Inc.',
    expertise: 'Industrial Robotics',
    initials: 'MW',
    color: 'from-rose-500 to-pink-500',
  },
];

const Speakers = () => {
  return (
    <section id="speakers" className="section-padding bg-surface dark:bg-surface-dark relative overflow-hidden">
      <BackgroundPattern />
      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <div className="section-label mx-auto">Speakers & Judges</div>
          <h2 className="section-title mb-4">Our Distinguished Experts</h2>
          <p className="section-desc mx-auto">
            Learn from and be judged by the leading experts in robotics and artificial intelligence.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {speakers.map((speaker, i) => (
            <motion.div
              key={speaker.name}
              className="card-hover overflow-hidden group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              {/* Avatar area */}
              <div className="relative h-48 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 flex items-center justify-center">
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${speaker.color} flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110`}>
                  <span className="text-2xl font-bold text-white">{speaker.initials}</span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-base font-semibold text-slate-900 dark:text-white mb-1">
                  {speaker.name}
                </h3>
                <p className="text-sm text-irdo-600 dark:text-irdo-400 font-medium mb-1">
                  {speaker.title}
                </p>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  {speaker.expertise}
                </p>

                {/* Social links */}
                <div className="flex gap-3 mt-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                  {['twitter', 'linkedin'].map((social) => (
                    <button
                      key={social}
                      className="text-slate-400 hover:text-irdo-500 dark:hover:text-irdo-400 transition-colors duration-200"
                      aria-label={`${speaker.name}'s ${social}`}
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        {social === 'twitter' ? (
                          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                        ) : (
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        )}
                      </svg>
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Speakers;