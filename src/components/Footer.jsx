import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');

  return (
    <footer className="site-footer">
      {/* Newsletter band */}
      <div className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, var(--accent-color, #f97316), var(--accent-cta, #ffa398))' }}>
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative max-w-7xl mx-auto py-14 px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-black text-on-accent uppercase tracking-tight mb-2">Stay in the loop</h3>
            <p className="text-on-accent/90 text-sm">Tips, launches, and neighborhood updates — no spam.</p>
          </div>
          <div className="flex w-full md:w-auto gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 md:w-64 px-4 py-3 rounded-full border border-white/20 bg-white/15 text-on-accent placeholder:text-on-accent/60 focus:outline-none focus:ring-2 focus:ring-white/30 text-sm backdrop-blur-sm"
            />
            <button className="px-6 py-3 bg-black text-white font-bold rounded-full hover:bg-zinc-900 whitespace-nowrap text-sm">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="relative bg-black py-16 px-4 md:px-6 overflow-hidden">
        {/* Watermark decoration */}
        <div className="absolute bottom-0 left-0 right-0 text-[12vw] font-black text-white/[0.02] uppercase tracking-tight leading-none select-none pointer-events-none text-center whitespace-nowrap overflow-hidden">
          UrbanStash
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-10 md:gap-8">
            <div className="md:col-span-1">
              <div className="text-xl font-extrabold text-white mb-3">
                Urban<span className="text-accent">Stash</span>
              </div>
              <p className="text-zinc-500 text-sm leading-relaxed mb-5">
                Storage that lives where you do.
              </p>
              <div className="flex gap-3">
                {[
                  { label: 'Instagram', path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' },
                  { label: 'X', path: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' },
                  { label: 'LinkedIn', path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
                ].map((s) => (
                  <a key={s.label} href="#" className="w-9 h-9 rounded-lg bg-white/5 hover:bg-accent/15 flex items-center justify-center text-zinc-500 hover:text-accent" aria-label={s.label}>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d={s.path} /></svg>
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-bold text-zinc-300 text-xs uppercase tracking-wider mb-4">Company</h4>
              <div className="flex flex-col gap-2.5">
                <Link to="/about" className="text-zinc-500 hover:text-accent text-sm">About</Link>
                <Link to="/units" className="text-zinc-500 hover:text-accent text-sm">Locations</Link>
                <Link to="/sizing" className="text-zinc-500 hover:text-accent text-sm">Sizing</Link>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-zinc-300 text-xs uppercase tracking-wider mb-4">Legal</h4>
              <div className="flex flex-col gap-2.5">
                <a href="#" className="text-zinc-500 hover:text-accent text-sm">Terms & Conditions</a>
                <a href="#" className="text-zinc-500 hover:text-accent text-sm">Privacy Policy</a>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-zinc-300 text-xs uppercase tracking-wider mb-4">Support</h4>
              <div className="flex flex-col gap-2.5">
                <a href="#" className="text-zinc-500 hover:text-accent text-sm">FAQ</a>
                <a href="#" className="text-zinc-500 hover:text-accent text-sm">Contact us</a>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row justify-between items-center gap-3">
            <p className="text-zinc-600 text-xs">&copy; {new Date().getFullYear()} Urban Stash. All rights reserved.</p>
            <p className="text-zinc-600 text-xs">32 Mercer St, New York, NY 10013</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
