import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main className="pt-16">
        <section className="py-16">
          <div className="max-w-3xl mx-auto px-4 prose prose-slate">
            <h1>Sample Post</h1>
            <p>This is a placeholder post. Replace with your content, or wire it to the backend later.</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
