import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-16 bg-white dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">About IRDO</h2>
          <div className="w-20 h-1 bg-irdo-blue dark:bg-irdo-purple mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">What is IRDO?</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              The International Robot Design Olympiad (IRDO) is a prestigious global competition that brings together 
              the brightest minds in robotics and technology. Participants from around the world compete to design, 
              build, and program innovative robots that solve real-world challenges.
            </p>
            
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Our Vision</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              To foster innovation in robotics and inspire the next generation of engineers and scientists to push 
              the boundaries of what's possible with robotic technology.
            </p>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-md dark:shadow-gray-700 transition-colors duration-200">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Key Features</h3>
            <ul className="space-y-4">
              {[
                "International competition with participants from 30+ countries",
                "Multiple competition categories for different skill levels",
                "Judging by renowned experts in robotics and AI",
                "Opportunities for networking and collaboration"
              ].map((feature, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-irdo-blue dark:text-irdo-purple">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-600 dark:text-gray-300">{feature}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;