import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const projects = [
  {
    title: 'Neon UI Kit',
    description: 'A modern component kit with glassmorphism and neon accents.',
    tags: ['React', 'Tailwind', 'Framer Motion'],
    to: '/projects'
  },
  {
    title: 'Realtime Chat',
    description: 'Lightweight chat with websockets and optimistic UI.',
    tags: ['FastAPI', 'WebSocket', 'MongoDB'],
    to: '/projects'
  },
  {
    title: '3D Experiments',
    description: 'Interactive 3D scenes and motion explorations.',
    tags: ['Spline', 'Three.js'],
    to: '/projects'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Featured Projects</h2>
          <Link to="/projects" className="text-slate-700 hover:text-slate-900">View all</Link>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group relative rounded-2xl border border-white bg-white/70 backdrop-blur-xl p-6 shadow-lg hover:shadow-xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/10 via-cyan-400/10 to-violet-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-slate-900">{p.title}</h3>
                  <ExternalLink className="h-4 w-4 text-slate-700" />
                </div>
                <p className="mt-2 text-slate-700">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map(t => (
                    <span key={t} className="text-xs px-2 py-1 rounded-full bg-white border border-white text-slate-700">{t}</span>
                  ))}
                </div>
                <Link to={p.to} className="mt-4 inline-block text-slate-900 hover:underline">Open project →</Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
