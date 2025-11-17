import { useState } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: '#projects', label: 'Projects' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#blog', label: 'Blog' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-white/30">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#" className="font-semibold text-slate-900 tracking-tight text-lg">MyPortfolio</a>
        <nav className="hidden md:flex items-center gap-6">
          {links.map(l => (
            <a key={l.href} href={l.href} className="text-slate-700 hover:text-slate-900 transition-colors">{l.label}</a>
          ))}
          <div className="h-6 w-px bg-slate-300" />
          <div className="flex items-center gap-3">
            <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="Github" className="p-2 rounded-full bg-white/60 hover:bg-white shadow-sm">
              <Github className="h-4 w-4" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-2 rounded-full bg-white/60 hover:bg-white shadow-sm">
              <Linkedin className="h-4 w-4" />
            </a>
            <a href="#contact" aria-label="Email" className="p-2 rounded-full bg-white/60 hover:bg-white shadow-sm">
              <Mail className="h-4 w-4" />
            </a>
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
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-slate-700 py-1">{l.label}</a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
