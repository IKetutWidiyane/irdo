import React, { useState } from 'react';
import { motion } from 'framer-motion';
import BackgroundPattern from './BackgroundPattern';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    teamName: '',
    category: '',
    members: '',
    country: '',
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Registration submitted successfully!');
  };

  const fields = [
    { label: 'Team Leader Name*', name: 'name', type: 'text', placeholder: 'Enter your full name' },
    { label: 'Email*', name: 'email', type: 'email', placeholder: 'your.email@example.com' },
    { label: 'Team Name*', name: 'teamName', type: 'text', placeholder: 'Team Innovators' },
    { label: 'Country*', name: 'country', type: 'text', placeholder: 'Your country' },
  ];

  return (
    <section id="register" className="section-padding bg-surface dark:bg-surface-dark relative overflow-hidden">
      <BackgroundPattern />
      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <div className="section-label mx-auto">Registration</div>
          <h2 className="section-title mb-4">Register for IRDO 2027</h2>
          <p className="section-desc mx-auto">
            Join the premier international robotics competition and showcase your innovation.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <motion.form
            onSubmit={handleSubmit}
            className="card p-8 lg:p-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid sm:grid-cols-2 gap-5">
              {fields.map((field) => (
                <div key={field.name}>
                  <label htmlFor={field.name} className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    id={field.name}
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    required
                    className="input-field"
                    placeholder={field.placeholder}
                  />
                </div>
              ))}

              <div>
                <label htmlFor="category" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                  Competition Category*
                </label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                  className="input-field"
                >
                  <option value="" disabled>Select a category</option>
                  <option value="creative">Creative Robot</option>
                  <option value="capstone">Capstone Project</option>
                  <option value="autonomous">Autonomous Systems</option>
                  <option value="ai">AI Innovation</option>
                </select>
              </div>

              <div>
                <label htmlFor="members" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                  Team Members (2-5)*
                </label>
                <input
                  type="number"
                  id="members"
                  name="members"
                  min="2"
                  max="5"
                  value={formData.members}
                  onChange={handleChange}
                  required
                  className="input-field"
                />
              </div>
            </div>

            <div className="mt-6">
              <div className="flex items-start gap-3">
                <input
                  id="agree"
                  name="agree"
                  type="checkbox"
                  checked={formData.agree}
                  onChange={handleChange}
                  required
                  className="mt-0.5 w-4 h-4 rounded border-slate-300 dark:border-slate-700 text-irdo-600 focus:ring-irdo-500/50"
                />
                <label htmlFor="agree" className="text-sm text-slate-600 dark:text-slate-400">
                  I agree to the{' '}
                  <a href="/terms" className="text-irdo-600 dark:text-irdo-400 underline hover:text-irdo-500">
                    terms and conditions
                  </a>{' '}
                  and confirm that all information provided is accurate.
                </label>
              </div>
            </div>

            <button
              type="submit"
              disabled={!formData.agree}
              className="btn-primary w-full mt-8 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Submit Registration
            </button>
          </motion.form>

          <motion.div
            className="mt-10 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
              Have questions? Contact{' '}
              <a href="mailto:registration@irdo.org" className="text-irdo-600 dark:text-irdo-400 underline hover:text-irdo-500">
                registration@irdo.org
              </a>
            </p>
            <a
              href="/competition-guidelines.pdf"
              download
              className="btn-secondary text-sm"
            >
              Download Guidelines
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Register;