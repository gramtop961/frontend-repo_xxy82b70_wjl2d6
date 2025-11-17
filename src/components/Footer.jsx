export default function Footer() {
  return (
    <footer id="contact" className="border-t bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-slate-600">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
        <div className="flex items-center gap-4 text-slate-700">
          <a href="mailto:you@example.com" className="hover:text-slate-900">you@example.com</a>
          <span className="h-4 w-px bg-slate-300" />
          <a href="#" className="hover:text-slate-900">Twitter</a>
          <a href="#" className="hover:text-slate-900">GitHub</a>
          <a href="#" className="hover:text-slate-900">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
