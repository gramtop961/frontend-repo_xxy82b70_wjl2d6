import Navbar from '../components/Navbar';
import Projects from '../components/Projects';
import Footer from '../components/Footer';

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main className="pt-16">
        <section className="py-10">
          <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">Projects</h1>
            <p className="text-slate-600 mb-8 max-w-2xl">A selection of recent work and experiments. Each project focuses on clarity, performance, and calm motion.</p>
          </div>
          <Projects />
        </section>
      </main>
      <Footer />
    </div>
  );
}
