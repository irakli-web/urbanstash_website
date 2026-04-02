import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useVersion } from '../context/VersionContext';
import { useColor } from '../context/ColorContext';

export default function HeaderV2({ showFindStorage = true }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [versionDropdownOpen, setVersionDropdownOpen] = useState(false);
  const [colorPickerOpen, setColorPickerOpen] = useState(false);
  const { version, setVersion } = useVersion();
  const { accentColor, setAccentColor, bgColor, setBgColor, palette, bgPalette } = useColor() || {};
  const { pathname } = useLocation();

  const navLinks = [
    { to: '/sizing', label: 'Sizing' },
    { to: '/units', label: 'Locations' },
    { to: '/about', label: 'About' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-black/70 backdrop-blur-xl border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="text-xl font-extrabold tracking-tight text-white group-hover:opacity-80 transition-opacity">
            Urban<span className="text-accent">Stash</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1 text-sm">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`px-3.5 py-2 rounded-lg font-medium transition-colors ${
                pathname === link.to
                  ? 'text-accent'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
          {showFindStorage && (
            <Link to="/units" className="ml-3 bg-accent-cta text-accent-cta-contrast px-5 py-2 rounded-full font-semibold text-sm inline-flex items-center gap-1.5 hover:opacity-90">
              Find Storage
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          )}
          <button className="ml-1 px-3.5 py-2 rounded-lg text-zinc-400 hover:text-white font-medium">
            Login
          </button>
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-zinc-400 hover:text-white rounded-lg"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {version === 'v2' && palette && (
            <div className="hidden md:block relative">
              <button
                onClick={() => setColorPickerOpen(!colorPickerOpen)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-zinc-500 hover:text-zinc-300 border border-white/10 hover:border-white/20"
                title="Theme"
              >
                <span className="w-3.5 h-3.5 rounded-full border border-white/20" style={{ backgroundColor: accentColor }} />
                Theme
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {colorPickerOpen && (
                <>
                  <div className="fixed inset-0 z-40" onClick={() => setColorPickerOpen(false)} aria-hidden="true" />
                  <div className="absolute right-0 mt-2 p-4 w-60 glass-card-strong rounded-2xl shadow-2xl z-50 max-h-[80vh] overflow-y-auto">
                    <p className="text-[11px] font-semibold text-zinc-500 uppercase tracking-wider mb-2.5">Accent color</p>
                    <div className="grid grid-cols-6 gap-2 mb-3">
                      {palette.map((c) => (
                        <button
                          key={`accent-${c.hex}`}
                          onClick={() => setAccentColor(c.hex)}
                          className={`w-7 h-7 rounded-full border-2 hover:scale-110 ${accentColor === c.hex ? 'border-white ring-2 ring-white/30' : 'border-white/10'}`}
                          style={{ backgroundColor: c.hex }}
                          title={c.name}
                        />
                      ))}
                    </div>
                    <div className="flex gap-2 items-center mb-4">
                      <input
                        type="text"
                        placeholder="#000000"
                        defaultValue={accentColor}
                        className="flex-1 px-2.5 py-1.5 text-xs border border-white/10 rounded-lg font-mono bg-white/5 text-white focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent"
                        onBlur={(e) => {
                          const v = e.target.value.trim();
                          const hex = /^#?([0-9A-Fa-f]{6})$/.test(v) ? (v.startsWith('#') ? v : '#' + v) : null;
                          if (hex) setAccentColor(hex);
                        }}
                        onKeyDown={(e) => e.key === 'Enter' && e.target.blur()}
                      />
                      <span className="w-6 h-6 rounded-md border border-white/10 flex-shrink-0" style={{ backgroundColor: accentColor }} />
                    </div>
                    <p className="text-[11px] font-semibold text-zinc-500 uppercase tracking-wider mb-2.5">Background</p>
                    <div className="grid grid-cols-6 gap-2 mb-3">
                      {(bgPalette || palette).map((c) => (
                        <button
                          key={`bg-${c.hex}`}
                          onClick={() => setBgColor(c.hex)}
                          className={`w-7 h-7 rounded-full border-2 hover:scale-110 ${bgColor === c.hex ? 'border-white ring-2 ring-white/30' : 'border-white/10'}`}
                          style={{ backgroundColor: c.hex }}
                          title={c.name}
                        />
                      ))}
                    </div>
                    <div className="flex gap-2 items-center">
                      <input
                        type="text"
                        placeholder="#ffffff"
                        defaultValue={bgColor}
                        className="flex-1 px-2.5 py-1.5 text-xs border border-white/10 rounded-lg font-mono bg-white/5 text-white focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent"
                        onBlur={(e) => {
                          const v = e.target.value.trim();
                          const hex = /^#?([0-9A-Fa-f]{6})$/.test(v) ? (v.startsWith('#') ? v : '#' + v) : null;
                          if (hex) setBgColor(hex);
                        }}
                        onKeyDown={(e) => e.key === 'Enter' && e.target.blur()}
                      />
                      <span className="w-6 h-6 rounded-md border border-white/10 flex-shrink-0" style={{ backgroundColor: bgColor }} />
                    </div>
                  </div>
                </>
              )}
            </div>
          )}
          <div className="hidden md:block relative">
            <button
              onClick={() => setVersionDropdownOpen(!versionDropdownOpen)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-zinc-500 hover:text-zinc-300 border border-white/10 hover:border-white/20"
            >
              {version === 'v1' ? 'Original' : 'New'}
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {versionDropdownOpen && (
              <>
                <div className="fixed inset-0 z-40" onClick={() => setVersionDropdownOpen(false)} aria-hidden="true" />
                <div className="absolute right-0 mt-2 py-1.5 w-36 glass-card-strong rounded-xl shadow-2xl z-50">
                  {['v1', 'v2'].map((v) => (
                    <button
                      key={v}
                      onClick={() => { setVersion(v); setVersionDropdownOpen(false); }}
                      className={`block w-full text-left px-4 py-2 text-sm ${version === v ? 'text-accent font-semibold' : 'text-zinc-400 hover:text-white hover:bg-white/5'}`}
                    >
                      {v === 'v1' ? 'Original' : 'New'}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-white/[0.06] shadow-2xl">
          <nav className="flex flex-col gap-0.5 p-3 text-sm">
            {[{ to: '/', label: 'Home' }, ...navLinks].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`py-3 px-3 rounded-xl font-medium ${
                  pathname === link.to
                    ? 'text-accent bg-white/5'
                    : 'text-zinc-400 hover:text-white hover:bg-white/5'
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            {showFindStorage && (
              <Link to="/units" className="py-3 px-3 text-center bg-accent-cta text-accent-cta-contrast rounded-xl font-semibold mt-1" onClick={() => setMenuOpen(false)}>
                Find Storage
              </Link>
            )}
            <button className="py-3 px-3 text-zinc-400 hover:text-white hover:bg-white/5 rounded-xl font-medium text-left">
              Login
            </button>
            <hr className="border-white/[0.06] my-1.5" />
            <div className="py-1.5">
              <p className="px-3 text-zinc-600 text-[11px] uppercase tracking-wider font-semibold mb-1.5">Design</p>
              <div className="flex gap-1.5 px-3">
                {['v1', 'v2'].map((v) => (
                  <button
                    key={v}
                    onClick={() => { setVersion(v); setMenuOpen(false); }}
                    className={`flex-1 py-2 rounded-lg text-xs font-semibold text-center ${version === v ? 'bg-accent text-on-accent' : 'bg-white/5 text-zinc-400 hover:bg-white/10'}`}
                  >
                    {v === 'v1' ? 'Original' : 'New'}
                  </button>
                ))}
              </div>
            </div>
            {version === 'v2' && palette && (
              <div className="py-1.5">
                <p className="px-3 text-zinc-600 text-[11px] uppercase tracking-wider font-semibold mb-2">Theme color</p>
                <div className="flex gap-1.5 flex-wrap px-3">
                  {palette.slice(0, 12).map((c) => (
                    <button
                      key={`m-accent-${c.hex}`}
                      onClick={() => setAccentColor(c.hex)}
                      className={`w-8 h-8 rounded-full border-2 ${accentColor === c.hex ? 'border-white scale-110' : 'border-white/10'}`}
                      style={{ backgroundColor: c.hex }}
                    />
                  ))}
                </div>
                <div className="flex gap-2 items-center mt-2.5 px-3">
                  <input
                    type="text"
                    placeholder="#000000"
                    defaultValue={accentColor}
                    className="flex-1 px-2.5 py-1.5 text-xs border border-white/10 rounded-lg font-mono bg-white/5 text-white focus:outline-none focus:ring-2 focus:ring-accent/30"
                    onBlur={(e) => {
                      const v = e.target.value.trim();
                      const hex = /^#?([0-9A-Fa-f]{6})$/.test(v) ? (v.startsWith('#') ? v : '#' + v) : null;
                      if (hex) setAccentColor(hex);
                    }}
                    onKeyDown={(e) => e.key === 'Enter' && e.target.blur()}
                  />
                  <span className="w-6 h-6 rounded-md border border-white/10 flex-shrink-0" style={{ backgroundColor: accentColor }} />
                </div>
                <p className="px-3 text-zinc-600 text-[11px] uppercase tracking-wider font-semibold mt-3 mb-2">Background</p>
                <div className="flex gap-1.5 flex-wrap px-3">
                  {(bgPalette || palette).slice(0, 8).map((c) => (
                    <button
                      key={`m-bg-${c.hex}`}
                      onClick={() => setBgColor(c.hex)}
                      className={`w-8 h-8 rounded-full border-2 ${bgColor === c.hex ? 'border-white scale-110' : 'border-white/10'}`}
                      style={{ backgroundColor: c.hex }}
                    />
                  ))}
                </div>
                <div className="flex gap-2 items-center mt-2.5 px-3">
                  <input
                    type="text"
                    placeholder="#ffffff"
                    defaultValue={bgColor}
                    className="flex-1 px-2.5 py-1.5 text-xs border border-white/10 rounded-lg font-mono bg-white/5 text-white focus:outline-none focus:ring-2 focus:ring-accent/30"
                    onBlur={(e) => {
                      const v = e.target.value.trim();
                      const hex = /^#?([0-9A-Fa-f]{6})$/.test(v) ? (v.startsWith('#') ? v : '#' + v) : null;
                      if (hex) setBgColor(hex);
                    }}
                    onKeyDown={(e) => e.key === 'Enter' && e.target.blur()}
                  />
                  <span className="w-6 h-6 rounded-md border border-white/10 flex-shrink-0" style={{ backgroundColor: bgColor }} />
                </div>
              </div>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
