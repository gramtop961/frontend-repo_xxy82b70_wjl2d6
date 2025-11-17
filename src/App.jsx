import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Gallery from './components/Gallery';
import Blog from './components/Blog';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Gallery />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}

export default App
