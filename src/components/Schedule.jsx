import React from 'react';

const Schedule = () => {
  const days = [
    {
      date: "February 15, 2024",
      events: [
        { time: "08:00 - 09:00", title: "Registration", description: "Team check-in and materials distribution" },
        { time: "09:00 - 10:30", title: "Opening Ceremony", description: "Welcome speeches and competition overview" },
        { time: "10:30 - 12:00", title: "Preliminary Rounds", description: "First round of competition judging" },
        { time: "12:00 - 13:30", title: "Lunch Break", description: "Networking and exhibition viewing" },
        { time: "13:30 - 17:00", title: "Workshops", description: "Parallel technical workshops on robotics topics" },
      ]
    },
    {
      date: "February 16, 2024",
      events: [
        { time: "09:00 - 12:00", title: "Main Competition", description: "Teams present their solutions to judges" },
        { time: "12:00 - 13:30", title: "Lunch Break", description: "Keynote speaker during lunch" },
        { time: "13:30 - 16:00", title: "Final Demonstrations", description: "Final round for top teams" },
        { time: "16:00 - 17:30", title: "Panel Discussion", description: "Future of Robotics with industry leaders" },
      ]
    },
    {
      date: "February 17, 2024",
      events: [
        { time: "10:00 - 11:30", title: "Award Ceremony", description: "Announcement of winners and prize distribution" },
        { time: "11:30 - 13:00", title: "Closing Lunch", description: "Celebration and networking" },
        { time: "13:00 - 16:00", title: "Public Exhibition", description: "Open showcase of competition entries" },
      ]
    }
  ];

  return (
    <section id="schedule" className="py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Event Schedule</h2>
          <div className="w-20 h-1 bg-irdo-blue dark:bg-irdo-purple mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Three days of competition, learning, and networking with robotics enthusiasts from around the world.
          </p>
        </div>

        <div className="space-y-12">
          {days.map((day, dayIndex) => (
            <div key={dayIndex} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-colors duration-200">
              <div className="bg-irdo-blue dark:bg-irdo-purple text-white px-6 py-4">
                <h3 className="text-xl font-semibold">{day.date}</h3>
              </div>
              <div className="divide-y divide-gray-200 dark:divide-gray-700">
                {day.events.map((event, eventIndex) => (
                  <div key={eventIndex} className="p-6 hover:bg-gray-50 dark:hover:bg-gray-700 transition duration-150">
                    <div className="md:flex md:items-center md:justify-between">
                      <div className="md:w-1/4 mb-2 md:mb-0">
                        <span className="text-irdo-blue dark:text-irdo-purple font-medium">{event.time}</span>
                      </div>
                      <div className="md:w-3/4">
                        <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">{event.title}</h4>
                        <p className="text-gray-600 dark:text-gray-300 mt-1">{event.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schedule;