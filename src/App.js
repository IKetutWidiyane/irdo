import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Competition from './components/Competition';
import Speakers from './components/Speakers';
import Schedule from './components/Schedule';
import Register from './components/Register';
import Sponsors from './components/Sponsors';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors duration-200">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <About />
        <Competition />
        <Speakers />
        <Schedule />
        <Register />
        <Sponsors />
      </main>
      <Footer />
    </div>
  );
}

export default App;