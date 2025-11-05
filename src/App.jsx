import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Features from './components/Features.jsx';
import CTASection from './components/CTASection.jsx';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-emerald-50 text-emerald-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <CTASection />
      </main>
      <footer className="border-t border-emerald-200/60 bg-white/60 py-8 text-sm text-emerald-900/70 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
            <p>© {new Date().getFullYear()} FreshSip. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <a href="#features" className="hover:text-emerald-900">Features</a>
              <a href="#cta" className="hover:text-emerald-900">Buy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
