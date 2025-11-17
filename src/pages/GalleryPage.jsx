import Navbar from '../components/Navbar';
import Gallery from '../components/Gallery';
import Footer from '../components/Footer';

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main className="pt-16">
        <section className="py-10">
          <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">Gallery</h1>
            <p className="text-slate-600 mb-8 max-w-2xl">A rotating collection of visuals. Use the arrows or dots to browse.</p>
          </div>
          <Gallery />
        </section>
      </main>
      <Footer />
    </div>
  );
}
