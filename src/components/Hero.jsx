import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 sm:pt-32">
      {/* Background gradients */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-1/4 left-1/2 h-[60rem] w-[60rem] -translate-x-1/2 rounded-full bg-emerald-200/50 blur-3xl" />
        <div className="absolute bottom-[-10%] right-[-10%] h-[40rem] w-[40rem] rounded-full bg-emerald-300/40 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-300/50 bg-white/60 px-3 py-1 text-xs font-medium text-emerald-700 backdrop-blur">
              Fresh Drink • Plastic Glass • Bubble Style
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight text-emerald-900 sm:text-5xl lg:text-6xl">
              Sip the Fresh. Feel the Chill.
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-emerald-900/80 sm:text-lg">
              A crisp, revitalizing beverage served in a clear plastic cup. Crafted for
              sunny days, breezy walks, and happy moments. Naturally refreshing.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a href="#cta" className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-md transition-colors hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-400">
                Get a Bottle
              </a>
              <a href="#features" className="inline-flex items-center justify-center rounded-xl border border-emerald-300/60 bg-white/70 px-5 py-3 text-sm font-semibold text-emerald-800 backdrop-blur transition-colors hover:bg-white">
                Why it's different
              </a>
            </div>
          </motion.div>

          {/* Floating badges */}
          <div className="pointer-events-none mt-8 flex gap-4">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="rounded-2xl border border-emerald-300/40 bg-white/70 px-4 py-3 text-sm text-emerald-900 shadow-sm backdrop-blur"
            >
              Low sugar • Real flavors
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.6 }}
              className="rounded-2xl border border-emerald-300/40 bg-white/70 px-4 py-3 text-sm text-emerald-900 shadow-sm backdrop-blur"
            >
              Chill-served freshness
            </motion.div>
          </div>
        </div>

        {/* 3D Spline Scene */}
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-emerald-300/40 bg-white/60 shadow-lg backdrop-blur lg:aspect-[5/4]">
          <Spline
            scene="https://prod.spline.design/Tddl75W6Ij9Qp77j/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />

          {/* Overlay gradient to tint scene toward green without blocking interaction */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-emerald-100/40 via-transparent to-emerald-200/40" />
        </div>
      </div>
    </section>
  );
}
