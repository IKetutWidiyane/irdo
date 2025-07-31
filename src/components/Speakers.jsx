import React from 'react';

const Speakers = () => {
  const speakers = [
    {
      name: "Dr. Elena Rodriguez",
      title: "Robotics Professor at MIT",
      expertise: "Autonomous Systems",
      image: "https://via.placeholder.com/150?text=Dr.Elena",
      twitter: "https://twitter.com/elena_mit",
      linkedin: "https://linkedin.com/in/elena-mit"
    },
    {
      name: "Prof. James Tanaka",
      title: "AI Research Lead at Google",
      expertise: "Machine Learning in Robotics",
      image: "https://via.placeholder.com/150?text=Prof.James",
      twitter: "https://twitter.com/james_google",
      linkedin: "https://linkedin.com/in/james-google"
    },
    {
      name: "Dr. Priya Patel",
      title: "Director of Robotics Innovation Lab",
      expertise: "Human-Robot Interaction",
      image: "https://via.placeholder.com/150?text=Dr.Priya",
      twitter: "https://twitter.com/priya_lab",
      linkedin: "https://linkedin.com/in/priya-lab"
    },
    {
      name: "Dr. Markus Weber",
      title: "CTO of RoboTech Inc.",
      expertise: "Industrial Robotics",
      image: "https://via.placeholder.com/150?text=Dr.Markus",
      twitter: "https://twitter.com/markus_robot",
      linkedin: "https://linkedin.com/in/markus-robot"
    }
  ];

  return (
    <section id="speakers" className="py-16 bg-white dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Distinguished Speakers & Judges</h2>
          <div className="w-20 h-1 bg-irdo-blue dark:bg-irdo-purple mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Learn from and be judged by the leading experts in robotics and artificial intelligence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {speakers.map((speaker, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg dark:hover:shadow-gray-700 transition duration-300">
              <img 
                src={speaker.image} 
                alt={`Portrait of ${speaker.name}`} 
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-1">{speaker.name}</h3>
                <p className="text-irdo-blue dark:text-irdo-purple text-sm font-medium mb-2">{speaker.title}</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{speaker.expertise}</p>
                <div className="flex space-x-2">
                  {speaker.twitter && (
                    <a 
                      href={speaker.twitter} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-irdo-blue dark:text-irdo-purple hover:text-irdo-purple dark:hover:text-irdo-blue"
                      aria-label={`${speaker.name}'s Twitter profile`}
                    >
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                      </svg>
                    </a>
                  )}
                  {speaker.linkedin && (
                    <a 
                      href={speaker.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-irdo-blue dark:text-irdo-purple hover:text-irdo-purple dark:hover:text-irdo-blue"
                      aria-label={`${speaker.name}'s LinkedIn profile`}
                    >
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Speakers;