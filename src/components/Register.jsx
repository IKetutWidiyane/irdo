import React, { useState } from 'react';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    teamName: '',
    category: '',
    members: '',
    country: '',
    agree: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert('Registration submitted successfully!');
  };

  return (
    <section id="register" className="py-16 bg-white dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Register for IRDO 2024</h2>
          <div className="w-20 h-1 bg-irdo-blue dark:bg-irdo-purple mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Join the premier international robotics competition and showcase your innovation.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-md dark:shadow-gray-700 transition-colors duration-200">
            <form onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Team Leader Name*</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-irdo-blue dark:focus:ring-irdo-purple focus:border-irdo-blue dark:focus:border-irdo-purple bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email*</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-irdo-blue dark:focus:ring-irdo-purple focus:border-irdo-blue dark:focus:border-irdo-purple bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="teamName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Team Name*</label>
                  <input
                    type="text"
                    id="teamName"
                    name="teamName"
                    value={formData.teamName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-irdo-blue dark:focus:ring-irdo-purple focus:border-irdo-blue dark:focus:border-irdo-purple bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    placeholder="Team Innovators"
                  />
                </div>
                <div>
                  <label htmlFor="category" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Competition Category*</label>
                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-irdo-blue dark:focus:ring-irdo-purple focus:border-irdo-blue dark:focus:border-irdo-purple bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  >
                    <option value="" disabled>Select a category</option>
                    <option value="autonomous">Autonomous Robotics</option>
                    <option value="humanoid">Humanoid Robotics</option>
                    <option value="ai">AI Innovation</option>
                    <option value="junior">Junior Division</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="members" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Number of Team Members (2-5)*</label>
                  <input
                    type="number"
                    id="members"
                    name="members"
                    min="2"
                    max="5"
                    value={formData.members}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-irdo-blue dark:focus:ring-irdo-purple focus:border-irdo-blue dark:focus:border-irdo-purple bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                </div>
                <div>
                  <label htmlFor="country" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Country*</label>
                  <input
                    type="text"
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-irdo-blue dark:focus:ring-irdo-purple focus:border-irdo-blue dark:focus:border-irdo-purple bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    placeholder="Your country"
                  />
                </div>
              </div>

              <div className="mt-6">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="agree"
                      name="agree"
                      type="checkbox"
                      checked={formData.agree}
                      onChange={handleChange}
                      required
                      className="focus:ring-irdo-blue dark:focus:ring-irdo-purple h-4 w-4 text-irdo-blue dark:text-irdo-purple border-gray-300 dark:border-gray-600 rounded"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="agree" className="font-medium text-gray-700 dark:text-gray-300">
                      I agree to the <a href="/terms" className="text-irdo-blue dark:text-irdo-purple underline hover:text-irdo-purple dark:hover:text-irdo-blue">terms and conditions</a> and confirm that all information provided is accurate.
                    </label>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <button
                  type="submit"
                  className="w-full bg-irdo-blue dark:bg-irdo-purple text-white font-bold py-3 px-4 rounded-md hover:bg-irdo-purple dark:hover:bg-irdo-blue transition duration-300 disabled:opacity-50"
                  disabled={!formData.agree}
                >
                  Submit Registration
                </button>
              </div>
            </form>
          </div>

          <div className="mt-12 text-center">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Have questions about registration?</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">Contact our registration team at <a href="mailto:registration@irdo.org" className="text-irdo-blue dark:text-irdo-purple underline hover:text-irdo-purple dark:hover:text-irdo-blue">registration@irdo.org</a></p>
            <a href="/competition-guidelines.pdf" download className="inline-block border-2 border-irdo-blue dark:border-irdo-purple text-irdo-blue dark:text-irdo-purple font-bold py-3 px-8 rounded-full hover:bg-irdo-blue dark:hover:bg-irdo-purple hover:text-white transition duration-300">
              Download Competition Guidelines
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;