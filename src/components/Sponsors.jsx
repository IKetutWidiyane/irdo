import React from 'react';

const Sponsors = () => {
  const sponsors = [
    { name: "TechGiant", logo: "https://via.placeholder.com/150x80?text=TechGiant", tier: "platinum" },
    { name: "RobotWorld", logo: "https://via.placeholder.com/150x80?text=RobotWorld", tier: "platinum" },
    { name: "FutureTech", logo: "https://via.placeholder.com/150x80?text=FutureTech", tier: "gold" },
    { name: "InnovateAI", logo: "https://via.placeholder.com/150x80?text=InnovateAI", tier: "gold" },
    { name: "SmartSystems", logo: "https://via.placeholder.com/150x80?text=SmartSystems", tier: "gold" },
    { name: "EduRobotics", logo: "https://via.placeholder.com/150x80?text=EduRobotics", tier: "silver" },
    { name: "AutoMech", logo: "https://via.placeholder.com/150x80?text=AutoMech", tier: "silver" },
    { name: "CodeFuture", logo: "https://via.placeholder.com/150x80?text=CodeFuture", tier: "silver" },
  ];

  const partners = [
    { name: "MIT Robotics Lab", logo: "https://via.placeholder.com/120x60?text=MIT" },
    { name: "Stanford AI", logo: "https://via.placeholder.com/120x60?text=Stanford" },
    { name: "ETH Zurich", logo: "https://via.placeholder.com/120x60?text=ETH" },
    { name: "Tokyo Tech", logo: "https://via.placeholder.com/120x60?text=TokyoTech" },
  ];

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Sponsors & Partners</h2>
          <div className="w-20 h-1 bg-irdo-blue dark:bg-irdo-purple mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We're proud to collaborate with leading organizations in technology and education.
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-xl font-semibold text-center text-gray-800 dark:text-gray-200 mb-8">Platinum Sponsors</h3>
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            {sponsors.filter(s => s.tier === 'platinum').map((sponsor, index) => (
              <div key={index} className="flex items-center justify-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md dark:hover:shadow-gray-700 transition duration-300">
                <img src={sponsor.logo} alt={sponsor.name} className="h-16 object-contain" loading="lazy" />
              </div>
            ))}
          </div>

          <h3 className="text-xl font-semibold text-center text-gray-800 dark:text-gray-200 mb-8">Gold Sponsors</h3>
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            {sponsors.filter(s => s.tier === 'gold').map((sponsor, index) => (
              <div key={index} className="flex items-center justify-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md dark:hover:shadow-gray-700 transition duration-300">
                <img src={sponsor.logo} alt={sponsor.name} className="h-14 object-contain" loading="lazy" />
              </div>
            ))}
          </div>

          <h3 className="text-xl font-semibold text-center text-gray-800 dark:text-gray-200 mb-8">Silver Sponsors</h3>
          <div className="flex flex-wrap justify-center gap-8">
            {sponsors.filter(s => s.tier === 'silver').map((sponsor, index) => (
              <div key={index} className="flex items-center justify-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md dark:hover:shadow-gray-700 transition duration-300">
                <img src={sponsor.logo} alt={sponsor.name} className="h-12 object-contain" loading="lazy" />
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-center text-gray-800 dark:text-gray-200 mb-8">Academic Partners</h3>
          <div className="flex flex-wrap justify-center gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="flex items-center justify-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md dark:hover:shadow-gray-700 transition duration-300">
                <img src={partner.logo} alt={partner.name} className="h-10 object-contain" loading="lazy" />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Interested in becoming a sponsor?</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            Join our prestigious list of sponsors and gain visibility among the brightest minds in robotics and technology.
          </p>
          <a href="/sponsorship-package.pdf" download className="inline-block bg-irdo-blue dark:bg-irdo-purple text-white font-bold py-3 px-8 rounded-full hover:bg-irdo-purple dark:hover:bg-irdo-blue transition duration-300">
            Download Sponsorship Package
          </a>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;