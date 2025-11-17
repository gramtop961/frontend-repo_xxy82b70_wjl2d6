import { useState } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { to: '/projects', label: 'Projects' },
    { to: '/gallery', label: 'Gallery' },
    { to: '/blog', label: 'Blog' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-white/30">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="font-semibold text-slate-900 tracking-tight text-lg">MyPortfolio</Link>
        <nav className="hidden md:flex items-center gap-6">
          {links.map(l => (
            <Link key={l.to} to={l.to} className="text-slate-700 hover:text-slate-900 transition-colors">{l.label}</Link>
          ))}
          <div className="h-6 w-px bg-slate-300" />
          <div className="flex items-center gap-3">
            <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="Github" className="p-2 rounded-full bg-white/60 hover:bg-white shadow-sm">
              <Github className="h-4 w-4" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-2 rounded-full bg-white/60 hover:bg-white shadow-sm">
              <Linkedin className="h-4 w-4" />
            </a>
            <Link to="/contact" aria-label="Email" className="p-2 rounded-full bg-white/60 hover:bg-white shadow-sm">
              <Mail className="h-4 w-4" />
            </Link>
          </div>
        </nav>
        <button className="md:hidden p-2 rounded-lg bg-white/70 border border-white/40" onClick={() => setOpen(o => !o)} aria-label="Toggle menu">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/40 bg-white/80">
          <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-3">
            {links.map(l => (
              <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="text-slate-700 py-1">{l.label}</Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
