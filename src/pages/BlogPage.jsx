import Navbar from '../components/Navbar';
import Blog from '../components/Blog';
import Footer from '../components/Footer';

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main className="pt-16">
        <section className="py-10">
          <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">Blog</h1>
            <p className="text-slate-600 mb-8 max-w-2xl">Notes on design, engineering, and process.</p>
          </div>
          <Blog />
        </section>
      </main>
      <Footer />
    </div>
  );
}
