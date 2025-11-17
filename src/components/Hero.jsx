import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/ESO6PnMadasO0hU3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/30 to-white/80 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 w-full pt-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="backdrop-blur-xl bg-white/50 rounded-2xl border border-white/60 shadow-xl p-8 md:p-12"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-slate-700/80 mb-3">Designer • Engineer • Writer</p>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight">
            Creating delightful digital experiences
          </h1>
          <p className="mt-4 text-slate-700 text-lg max-w-2xl">
            I blend design, code, and storytelling to craft modern websites and products with soul. Explore my work, visual experiments, and long-form notes.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#projects" className="px-5 py-2.5 rounded-full bg-slate-900 text-white shadow hover:-translate-y-0.5 transition-transform">See Projects</a>
            <a href="#gallery" className="px-5 py-2.5 rounded-full bg-white/70 border border-white text-slate-900 hover:bg-white">Open Gallery</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
