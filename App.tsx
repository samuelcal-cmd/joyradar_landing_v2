import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import EditorialSection from './components/EditorialSection';
import LinksSection from './components/LinksSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <main className="w-full min-h-screen bg-joy-black text-white selection:bg-joy-orange selection:text-black">
      <Hero />
      <Features />
      <HowItWorks />
      <EditorialSection />
      <LinksSection />
      <Footer />
    </main>
  );
};

export default App;