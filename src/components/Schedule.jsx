import React from 'react';
import { motion } from 'framer-motion';
import BackgroundPattern from './BackgroundPattern';

const days = [
  {
    date: 'February 15, 2027',
    day: 'Day 1',
    events: [
      { time: '08:00', title: 'Registration', desc: 'Team check-in and materials distribution' },
      { time: '09:00', title: 'Opening Ceremony', desc: 'Welcome speeches and competition overview' },
      { time: '10:30', title: 'Preliminary Rounds', desc: 'First round of competition judging' },
      { time: '12:00', title: 'Networking Lunch', desc: 'Exhibition viewing and connections' },
      { time: '13:30', title: 'Technical Workshops', desc: 'Parallel sessions on robotics topics' },
    ],
  },
  {
    date: 'February 16, 2027',
    day: 'Day 2',
    events: [
      { time: '09:00', title: 'Main Competition', desc: 'Teams present solutions to judges' },
      { time: '12:00', title: 'Keynote Lunch', desc: 'Special address from industry leaders' },
      { time: '13:30', title: 'Final Demonstrations', desc: 'Top teams compete in finale' },
      { time: '16:00', title: 'Panel Discussion', desc: 'Future of Robotics with experts' },
    ],
  },
  {
    date: 'February 17, 2027',
    day: 'Day 3',
    events: [
      { time: '10:00', title: 'Award Ceremony', desc: 'Winners announced and prizes awarded' },
      { time: '11:30', title: 'Closing Reception', desc: 'Celebration and networking' },
      { time: '13:00', title: 'Public Exhibition', desc: 'Open showcase of all entries' },
    ],
  },
];

const Schedule = () => {
  return (
    <section id="schedule" className="section-padding bg-surface-card dark:bg-surface-dark/50 relative overflow-hidden">
      <BackgroundPattern />
      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <div className="section-label mx-auto">Schedule</div>
          <h2 className="section-title mb-4">Event Schedule</h2>
          <p className="section-desc mx-auto">
            Three days of competition, learning, and networking with robotics enthusiasts worldwide.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {days.map((day, i) => (
            <motion.div
              key={day.date}
              className="card overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              {/* Day header */}
              <div className="bg-gradient-to-r from-irdo-600 to-irdo-700 px-6 py-4">
                <span className="text-xs font-medium text-irdo-200">{day.day}</span>
                <h3 className="text-base font-semibold text-white mt-0.5">{day.date}</h3>
              </div>

              {/* Events */}
              <div className="divide-y divide-slate-100 dark:divide-slate-800">
                {day.events.map((event, j) => (
                  <div key={j} className="p-5 hover:bg-slate-50 dark:hover:bg-white/[0.02] transition-colors duration-150">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-14 text-right">
                        <span className="text-xs font-mono font-medium text-irdo-600 dark:text-irdo-400">
                          {event.time}
                        </span>
                      </div>
                      <div className="min-w-0">
                        <h4 className="text-sm font-semibold text-slate-900 dark:text-white">
                          {event.title}
                        </h4>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                          {event.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schedule;