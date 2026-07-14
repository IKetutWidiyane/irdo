import React from 'react';
import { motion } from 'framer-motion';
import BackgroundPattern from './BackgroundPattern';

const categories = [
  {
    name: 'Creative Robot',
    desc: 'Design and build innovative robots with unique functionalities and creative designs.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
      </svg>
    ),
    color: 'from-irdo-500 to-indigo-500',
  },
  {
    name: 'Capstone Project',
    desc: 'Showcase your final-year or major project integrating robotics and technology solutions.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
      </svg>
    ),
    color: 'from-emerald-500 to-teal-500',
  },
  {
    name: 'Autonomous Systems',
    desc: 'Develop self-navigating robots capable of complex tasks without human intervention.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
      </svg>
    ),
    color: 'from-amber-500 to-orange-500',
  },
  {
    name: 'AI Innovation',
    desc: 'Combine artificial intelligence with robotics to create intelligent, adaptive systems.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h9v9h-9v-9Z" />
      </svg>
    ),
    color: 'from-rose-500 to-pink-500',
  },
];

const timeline = [
  { date: 'Oct 1, 2026', event: 'Registration Opens', desc: 'Start building your team and preparing your proposal.' },
  { date: 'Nov 15, 2026', event: 'Preliminary Submission', desc: 'Submit your initial proposal and design concept.' },
  { date: 'Dec 10, 2026', event: 'Qualifiers Announced', desc: 'Top teams advance to the final round.' },
  { date: 'Jan 20, 2027', event: 'Final Submission', desc: 'Submit your complete project and documentation.' },
  { date: 'Feb 15-17, 2027', event: 'Final Competition', desc: 'Present your robot at the grand event.' },
];

const Competition = () => {
  return (
    <section id="competition" className="section-padding bg-surface-card dark:bg-surface-dark/50 relative overflow-hidden">
      <BackgroundPattern />
      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <div className="section-label mx-auto">Competition</div>
          <h2 className="section-title mb-4">Competition Details</h2>
          <p className="section-desc mx-auto">
            Four exciting categories designed to challenge and inspire the next generation of roboticists.
          </p>
        </div>

        {/* Categories */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.name}
              className="card-hover p-6 relative overflow-hidden group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${cat.color} opacity-5 rounded-bl-[100%] group-hover:opacity-10 transition-opacity duration-300`} />
              <div className="w-10 h-10 rounded-xl bg-irdo-50 dark:bg-irdo-500/10 text-irdo-600 dark:text-irdo-400 flex items-center justify-center mb-4">
                {cat.icon}
              </div>
              <h4 className="text-base font-semibold text-slate-900 dark:text-white mb-2">{cat.name}</h4>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{cat.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white text-center mb-12">Competition Timeline</h3>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-800 md:-translate-x-px" />

            <div className="space-y-8">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.event}
                  className={`relative flex items-start gap-6 md:gap-0 md:items-center ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  {/* Dot */}
                  <div className="absolute left-6 md:left-1/2 w-3 h-3 rounded-full bg-irdo-500 border-2 border-white dark:border-surface-dark -translate-x-1/2 z-10" />

                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${i % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'}`}>
                    <div className="card p-5">
                      <span className="text-xs font-mono text-irdo-600 dark:text-irdo-400 font-medium">{item.date}</span>
                      <h4 className="text-base font-semibold text-slate-900 dark:text-white mt-1">{item.event}</h4>
                      <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{item.desc}</p>
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block md:w-[calc(50%-2rem)]" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Requirements */}
        <div className="card p-8 lg:p-10">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 text-center">Participation Requirements</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              'Teams of 2-5 members (individual participation allowed in junior category)',
              'Original work — no plagiarism allowed',
              'Technical documentation and video demonstration required',
              'Registration fee: $50 per team (waivers available)',
            ].map((req, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 dark:bg-white/[0.02]">
                <div className="w-5 h-5 rounded-full bg-irdo-100 dark:bg-irdo-500/20 text-irdo-600 dark:text-irdo-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400">{req}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Competition;