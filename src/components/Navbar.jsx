import React from 'react';
import { Leaf, Sparkles } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-emerald-300/30 bg-white/60 backdrop-blur supports-[backdrop-filter]:bg-white/40">
          <div className="flex items-center justify-between px-4 py-3 sm:px-6">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500 text-white shadow">
                <Leaf size={20} />
              </div>
              <span className="font-semibold text-emerald-900">FreshSip</span>
            </div>
            <nav className="hidden items-center gap-6 text-sm text-emerald-900/80 sm:flex">
              <a href="#features" className="hover:text-emerald-900 transition-colors">Features</a>
              <a href="#flavors" className="hover:text-emerald-900 transition-colors">Flavors</a>
              <a href="#cta" className="hover:text-emerald-900 transition-colors">Buy</a>
            </nav>
            <button className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-400">
              <Sparkles size={16} /> Try Now
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
