import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main className="pt-16">
        <section className="py-16">
          <div className="max-w-3xl mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">About</h1>
            <p className="text-slate-600 mb-6">I'm a designer-engineer who loves building calm, elegant products. I blend thoughtful UX, accessible UI, and reliable engineering to deliver end-to-end experiences.</p>
            <p className="text-slate-600">Outside of work, you'll find me exploring visual studies, writing notes, and tinkering with small tools that make life a bit nicer.</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
