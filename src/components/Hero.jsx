import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center">
      {/* Minimal background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-gradient-to-br from-slate-200 to-white blur-3xl opacity-70" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-gradient-to-tr from-slate-100 to-white blur-3xl opacity-70" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 w-full pt-24">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs text-slate-600 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-slate-900" />
            Currently exploring minimal, mindful interfaces
          </div>

          <h1 className="mt-6 text-4xl md:text-6xl font-semibold leading-tight tracking-[-0.02em] text-slate-900">
            Quietly bold digital products
          </h1>

          <p className="mt-5 text-slate-600 text-lg md:text-xl max-w-2xl">
            I design and build elegant, purposeful experiences with a focus on clarity, calm motion, and craftsmanship.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/projects" className="px-5 py-2.5 rounded-full bg-slate-900 text-white hover:bg-slate-800 transition-colors">View work</Link>
            <Link to="/gallery" className="px-5 py-2.5 rounded-full border border-slate-300 text-slate-900 hover:bg-slate-50 transition-colors">Gallery</Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
