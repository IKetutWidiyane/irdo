import React from 'react';
import { motion } from 'framer-motion';
import BackgroundPattern from './BackgroundPattern';

const tiers = [
  {
    name: 'Platinum',
    sponsors: ['TechGiant', 'RobotWorld'],
    size: 'h-16',
  },
  {
    name: 'Gold',
    sponsors: ['FutureTech', 'InnovateAI', 'SmartSystems'],
    size: 'h-14',
  },
  {
    name: 'Silver',
    sponsors: ['EduRobotics', 'AutoMech', 'CodeFuture'],
    size: 'h-12',
  },
];

const partners = ['MIT Robotics Lab', 'Stanford AI', 'ETH Zurich', 'Tokyo Tech'];

const Sponsors = () => {
  return (
    <section className="section-padding bg-surface-card dark:bg-surface-dark/50 relative overflow-hidden">
      <BackgroundPattern />
      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <div className="section-label mx-auto">Sponsors</div>
          <h2 className="section-title mb-4">Our Sponsors & Partners</h2>
          <p className="section-desc mx-auto">
            We're proud to collaborate with leading organizations in technology and education.
          </p>
        </div>

        <div className="space-y-16 mb-20">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <h3 className="text-sm font-semibold text-slate-400 dark:text-slate-500 text-center uppercase tracking-wider mb-8">
                {tier.name} Sponsors
              </h3>
              <div className="flex flex-wrap justify-center gap-6">
                {tier.sponsors.map((name) => (
                  <div
                    key={name}
                    className="card-hover px-8 py-6 flex items-center justify-center min-w-[160px]"
                  >
                    <span className="text-lg font-bold text-slate-400 dark:text-slate-600">
                      {name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Academic Partners */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <h3 className="text-sm font-semibold text-slate-400 dark:text-slate-500 text-center uppercase tracking-wider mb-8">
            Academic Partners
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {partners.map((name) => (
              <div
                key={name}
                className="card-hover px-6 py-4 flex items-center justify-center"
              >
                <span className="text-sm font-semibold text-slate-400 dark:text-slate-600">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
            Become a Sponsor
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 max-w-xl mx-auto">
            Join our prestigious list of sponsors and gain visibility among the brightest minds
            in robotics and technology.
          </p>
          <a href="/sponsorship-package.pdf" download className="btn-primary">
            Download Sponsorship Package
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Sponsors;