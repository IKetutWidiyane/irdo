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
import CursorTrail from './components/CursorTrail';

function App() {
  return (
    <div className="min-h-screen">
      <CursorTrail />
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