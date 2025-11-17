import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const posts = [
  { id: 'calm-motion', title: 'Designing for Calm Motion', excerpt: 'Thoughts on using subtle animation to guide attention without distraction.' },
  { id: 'craftsmanship', title: 'Craftsmanship in Everyday UI', excerpt: 'Small details that make interfaces feel cared for and trustworthy.' },
  { id: 'systems', title: 'Building Systems, Not Pages', excerpt: 'How to think in tokens, components, and patterns.' },
];

export default function Blog() {
  return (
    <section id="blog" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Latest Notes</h2>
          <Link to="/blog" className="text-slate-700 hover:text-slate-900">View all</Link>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-2xl border border-slate-200 bg-white/70 backdrop-blur p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-semibold text-slate-900">{post.title}</h3>
              <p className="mt-2 text-slate-600">{post.excerpt}</p>
              <Link to={`/blog/${post.id}`} className="mt-4 inline-block text-slate-900 hover:underline">Read more →</Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
