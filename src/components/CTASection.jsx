import React from 'react';
import { Sparkles } from 'lucide-react';

export default function CTASection() {
  return (
    <section id="cta" className="relative py-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 mx-auto h-64 max-w-4xl rounded-full bg-emerald-200/40 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-emerald-300/40 bg-gradient-to-r from-emerald-600 to-emerald-500 p-1 shadow-lg">
        <div className="flex flex-col items-center gap-6 rounded-[calc(1.5rem-4px)] bg-white/10 px-8 py-12 text-center text-white backdrop-blur sm:flex-row sm:justify-between sm:text-left">
          <div>
            <h3 className="text-2xl font-bold tracking-tight">Ready to taste the chill?</h3>
            <p className="mt-2 max-w-xl text-white/80">Join the early sippers and get exclusive access to limited flavors and launch-day perks.</p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-emerald-700 shadow hover:bg-emerald-50 focus:outline-none focus:ring-2 focus:ring-white/60"
            >
              <Sparkles size={18} /> Preorder Now
            </a>
            <a
              href="#features"
              className="inline-flex items-center rounded-xl border border-white/30 bg-transparent px-5 py-3 text-sm font-semibold text-white/90 backdrop-blur hover:bg-white/10"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      <p className="mx-auto mt-8 max-w-3xl px-4 text-center text-xs text-emerald-900/70">
        Crafted for freshness. Served in a clear plastic cup for that crisp, visual delight. Perfect for the fresh drink category you love.
      </p>
    </section>
  );
}
