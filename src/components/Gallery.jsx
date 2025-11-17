import { useState, useMemo, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1522199710521-72d69614c702?q=80&w=1200&auto=format&fit=crop'
];

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [hovered, setHovered] = useState(false);
  const intervalRef = useRef(null);

  const visible = 3; // items visible at once

  const slides = useMemo(() => {
    return [...images, ...images, ...images];
  }, []);

  const base = images.length;
  const current = base + index;

  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);
  const next = () => setIndex((i) => (i + 1) % images.length);

  // Autoplay with pause on hover
  useEffect(() => {
    if (hovered) return;
    intervalRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, 3500);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [hovered]);

  return (
    <section id="gallery" className="relative py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-10 flex items-end justify-between">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Gallery</h2>
          <div className="text-slate-600">Carousel view</div>
        </div>

        <div className="relative" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
          {/* Controls */}
          <button
            aria-label="Previous"
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 grid place-items-center h-10 w-10 rounded-full bg-white/80 backdrop-blur border border-slate-200 shadow hover:bg-white"
          >
            <ChevronLeft className="h-5 w-5 text-slate-900" />
          </button>
          <button
            aria-label="Next"
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 grid place-items-center h-10 w-10 rounded-full bg-white/80 backdrop-blur border border-slate-200 shadow hover:bg-white"
          >
            <ChevronRight className="h-5 w-5 text-slate-900" />
          </button>

          {/* Track */}
          <div className="overflow-hidden px-12">
            <motion.div
              className="flex gap-4"
              initial={false}
              animate={{ x: `calc((-100% / ${slides.length}) * ${current - 1})` }}
              transition={{ type: 'spring', stiffness: 120, damping: 20 }}
              style={{ width: `${slides.length * (100 / visible)}%` }}
            >
              {slides.map((src, i) => (
                <div key={`${src}-${i}`} className="basis-1/3 shrink-0">
                  <motion.div
                    className="relative overflow-hidden rounded-xl shadow-lg group"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: (i % images.length) * 0.03 }}
                  >
                    <img
                      src={src}
                      alt="Gallery item"
                      className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Dots */}
          <div className="mt-6 flex justify-center gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-2.5 w-2.5 rounded-full transition-all ${
                  i === index ? 'bg-slate-900 w-6' : 'bg-slate-300'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
