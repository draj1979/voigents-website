import React from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Problem from './components/sections/Problem';
import Solution from './components/sections/Solution';
import HowItWorks from './components/sections/HowItWorks';
import Features from './components/sections/Features';
import UseCases from './components/sections/UseCases';
import WhyVoigents from './components/sections/WhyVoigents';
import Trust from './components/sections/Trust';
import CallToAction from './components/sections/CallToAction';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="bg-dark text-white overflow-hidden" style={{ minHeight: '100vh' }}>
      <Navbar />

      <main>
        <Hero />
        <Problem />
        <Solution />
        <Features />
        <HowItWorks />
        <UseCases />
        <WhyVoigents />
        <Trust />
        <CallToAction />
      </main>

      <Footer />
    </div>
  );
}

export default App;
