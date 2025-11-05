import React from 'react';
import { Droplet, Shield, Clock, Leaf } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: Droplet,
    title: 'Ultra-Refreshing',
    desc: 'Lightly chilled and perfectly balanced for a smooth, thirst-quenching sip.'
  },
  {
    icon: Leaf,
    title: 'Naturally Inspired',
    desc: 'Clean ingredients with playful flavors that feel bright and real.'
  },
  {
    icon: Shield,
    title: 'Sealed Fresh',
    desc: 'Served in a clear plastic cup with a dome lid to lock in freshness.'
  },
  {
    icon: Clock,
    title: 'On-the-go Ready',
    desc: 'Grab-and-go convenience for busy days, picnics, and sunny strolls.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative py-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-10%] top-1/3 h-72 w-72 rounded-full bg-emerald-200/50 blur-3xl" />
        <div className="absolute right-[-10%] top-1/4 h-72 w-72 rounded-full bg-emerald-300/40 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-emerald-900 sm:text-4xl">Made to refresh, designed to delight</h2>
          <p className="mt-3 text-emerald-900/80">A playful 3D vibe with real-world practicality — the perfect fresh drink experience.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              viewport={{ once: true, amount: 0.4 }}
              className="group rounded-2xl border border-emerald-300/40 bg-white/70 p-6 shadow-sm backdrop-blur transition-transform hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                <f.icon size={22} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-emerald-900">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-emerald-900/80">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
