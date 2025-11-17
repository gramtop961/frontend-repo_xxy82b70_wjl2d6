import { motion } from 'framer-motion';

const posts = [
  {
    title: 'Designing for Delight: Micro-interactions',
    excerpt: 'How tiny animations can transform the way users feel your product.',
    date: 'Oct 8, 2025'
  },
  {
    title: 'From Idea to MVP in a Weekend',
    excerpt: 'A practical approach to validating concepts with minimal code.',
    date: 'Sep 30, 2025'
  },
  {
    title: 'What I Learned Building 3D Interfaces',
    excerpt: 'Takeaways from experimenting with Spline and Three.js.',
    date: 'Sep 12, 2025'
  }
];

export default function Blog() {
  return (
    <section id="blog" className="relative py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Latest notes</h2>
          <a href="#" className="text-slate-700 hover:text-slate-900">Read the blog</a>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="relative rounded-2xl border border-white bg-white/70 backdrop-blur-xl p-6 shadow-lg hover:shadow-xl"
            >
              <p className="text-xs uppercase tracking-widest text-slate-500">{p.date}</p>
              <h3 className="mt-2 text-xl font-semibold text-slate-900">{p.title}</h3>
              <p className="mt-2 text-slate-700">{p.excerpt}</p>
              <a href="#" className="mt-4 inline-block text-slate-900 font-medium">Read more →</a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
