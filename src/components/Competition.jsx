import React from 'react';

const Competition = () => {
  const categories = [
    {
      name: "Creative Robot",
      description: "Design and build innovative robots with unique functionalities and creative designs.",
      icon: "🤖"
    },
    {
      name: "Capstone Project",
      description: "Showcase your final-year or major project integrating robotics and technology solutions.",
      icon: "📚"
    }
  ];

  const timeline = [
    { date: "October 1, 2023", event: "Registration Opens" },
    { date: "November 15, 2023", event: "Preliminary Proposal Submission" },
    { date: "December 10, 2023", event: "Announcement of Qualifiers" },
    { date: "January 20, 2024", event: "Final Submission Deadline" },
    { date: "February 15-17, 2024", event: "Final Competition & Exhibition" }
  ];

  return (
    <section id="competition" className="py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Competition Details</h2>
          <div className="w-20 h-1 bg-irdo-blue dark:bg-irdo-purple mx-auto"></div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6 text-center">Competition Categories</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {categories.map((category, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg dark:hover:shadow-gray-700 transition duration-300">
                <div className="text-4xl mb-4">{category.icon}</div>
                <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">{category.name}</h4>
                <p className="text-gray-600 dark:text-gray-300">{category.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6 text-center">Competition Timeline</h3>
          <div className="relative">
            <div className="absolute h-full w-0.5 bg-irdo-blue dark:bg-irdo-purple left-1/2 transform -translate-x-1/2 hidden md:block"></div>
            <div className="space-y-8 md:space-y-0">
              {timeline.map((item, index) => (
                <div key={index} className={`relative md:flex ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}>
                  <div className={`md:w-1/2 p-4 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md dark:shadow-gray-700">
                      <div className="flex items-center mb-2">
                        <div className="hidden md:flex absolute w-4 h-4 rounded-full bg-irdo-blue dark:bg-irdo-purple border-4 border-white dark:border-gray-900 -left-2 transform -translate-x-1/2"></div>
                        <h4 className="text-lg font-semibold text-irdo-blue dark:text-irdo-purple">{item.date}</h4>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300">{item.event}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md dark:shadow-gray-700">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4 text-center">Participation Requirements</h3>
          <ul className="grid md:grid-cols-2 gap-4">
            {[
              "Teams of 2-5 members (individual participation allowed in junior category)",
              "Original work (no plagiarism allowed)",
              "Technical documentation and video demonstration required",
              "Registration fee: $50 per team (waivers available)"
            ].map((requirement, index) => (
              <li key={index} className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 text-irdo-blue dark:text-irdo-purple mt-1">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="ml-3 text-gray-600 dark:text-gray-300">{requirement}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Competition;
