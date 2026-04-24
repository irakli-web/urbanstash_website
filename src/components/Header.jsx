import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useColor, normalizeHex } from '../context/ColorContext';
import HeadingFontPanel from './HeadingFontPanel';

export default function Header({ showFindStorage = true, variant = 'default' }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [colorPickerOpen, setColorPickerOpen] = useState(false);
  const [fontPickerOpen, setFontPickerOpen] = useState(false);
  const { accentColor, setAccentColor, bgColor, setBgColor, palette, bgPalette } = useColor();
  const { pathname } = useLocation();

  const isLight = variant === 'homeLight';

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/sizing', label: 'Sizing' },
    { to: '/units', label: 'Locations' },
    { to: '/about', label: 'About' },
  ];

  const headerShell = isLight
    ? 'sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-black/[0.08]'
    : 'sticky top-0 z-50 bg-black/70 backdrop-blur-xl border-b border-white/[0.06]';

  const dropdownPanel = isLight
    ? 'absolute right-0 mt-2 p-4 w-60 bg-white border border-gray-200 rounded-2xl shadow-2xl z-50 max-h-[80vh] overflow-y-auto'
    : 'absolute right-0 mt-2 p-4 w-60 glass-card-strong rounded-2xl shadow-2xl z-50 max-h-[80vh] overflow-y-auto';

  const fontDropdownPanel = isLight
    ? 'absolute right-0 mt-2 p-5 w-[42rem] bg-white border border-gray-200 rounded-2xl shadow-2xl z-50 max-h-[85vh] overflow-y-auto'
    : 'absolute right-0 mt-2 p-5 w-[42rem] glass-card-strong rounded-2xl shadow-2xl z-50 max-h-[85vh] overflow-y-auto';

  return (
    <header className={`${headerShell}${isLight ? ' header-home-light' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          {isLight ? (
            <span className="text-base sm:text-lg font-black tracking-tight text-black uppercase">
              UrbanStash
            </span>
          ) : (
            <span className="text-xl font-extrabold tracking-tight text-white group-hover:opacity-80 transition-opacity">
              Urban<span className="text-accent">Stash</span>
            </span>
          )}
        </Link>

        <nav className="site-nav hidden md:flex items-center gap-0.5 text-sm">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={
                isLight
                  ? `px-3 py-2 rounded-lg font-mono text-[11px] sm:text-xs tracking-wide transition-colors ${
                      pathname === link.to
                        ? 'text-black font-medium'
                        : 'text-black/80 hover:text-black'
                    }`
                  : `px-3.5 py-2 rounded-lg font-medium transition-colors ${
                      pathname === link.to
                        ? 'text-accent'
                        : 'text-zinc-400 hover:text-white'
                    }`
              }
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/units"
            className="cta-btn ml-3 bg-accent text-on-accent px-5 py-2 rounded-full font-semibold text-sm inline-flex items-center gap-1.5 hover:opacity-90"
          >
            Find Storage
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <button
            type="button"
            className={
              isLight
                ? 'ml-2 px-4 py-2 rounded-full bg-neutral-200/90 hover:bg-neutral-300/90 text-black font-mono text-[11px] sm:text-xs'
                : 'ml-1 px-3.5 py-2 rounded-lg text-zinc-400 hover:text-white font-medium'
            }
          >
            Login
          </button>
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className={
              isLight
                ? 'md:hidden p-2 text-black hover:bg-black/5 rounded-lg'
                : 'md:hidden p-2 text-zinc-400 hover:text-white rounded-lg'
            }
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

          {palette && (
            <div className="hidden md:block relative">
              <button
                type="button"
                onClick={() => {
                  setColorPickerOpen(!colorPickerOpen);
                  setFontPickerOpen(false);
                }}
                className={
                  isLight
                    ? 'flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono text-black/70 hover:bg-black/5 border border-black/10'
                    : 'flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-zinc-500 hover:text-zinc-300 border border-white/10 hover:border-white/20'
                }
                title="Theme"
              >
                <span className="w-3.5 h-3.5 rounded-full border border-black/20" style={{ backgroundColor: accentColor }} />
                Theme
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {colorPickerOpen && (
                <>
                  <div className="fixed inset-0 z-40" onClick={() => setColorPickerOpen(false)} aria-hidden="true" />
                  <div className={dropdownPanel}>
                    <p className={`text-[11px] font-semibold uppercase tracking-wider mb-2.5 ${isLight ? 'text-gray-500' : 'text-zinc-500'}`}>Accent color</p>
                    <div className="grid grid-cols-6 gap-2 mb-3">
                      {palette.map((c) => (
                        <button
                          key={`accent-${c.name}`}
                          type="button"
                          onClick={() => setAccentColor(c.hex)}
                          className={`w-7 h-7 rounded-full border-2 hover:scale-110 ${accentColor?.toLowerCase() === c.hex.toLowerCase() ? (isLight ? 'border-gray-900 ring-2 ring-gray-300' : 'border-white ring-2 ring-white/30') : (isLight ? 'border-gray-200' : 'border-white/10')}`}
                          style={{ backgroundColor: c.hex }}
                          title={c.name}
                        />
                      ))}
                    </div>
                    <div className="flex gap-2 items-center mb-4">
                      <input
                        key={accentColor}
                        type="text"
                        placeholder="#000000"
                        defaultValue={accentColor}
                        className={
                          isLight
                            ? 'flex-1 px-2.5 py-1.5 text-xs border border-gray-200 rounded-lg font-mono bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent'
                            : 'flex-1 px-2.5 py-1.5 text-xs border border-white/10 rounded-lg font-mono bg-white/5 text-white focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent'
                        }
                        onBlur={(e) => {
                          const hex = normalizeHex(e.target.value.trim());
                          if (hex) setAccentColor(hex);
                        }}
                        onKeyDown={(e) => e.key === 'Enter' && e.target.blur()}
                      />
                      <span className={`w-6 h-6 rounded-md border flex-shrink-0 ${isLight ? 'border-gray-200' : 'border-white/10'}`} style={{ backgroundColor: accentColor }} />
                    </div>
                    <p className={`text-[11px] font-semibold uppercase tracking-wider mb-2.5 ${isLight ? 'text-gray-500' : 'text-zinc-500'}`}>Background</p>
                    <div className="grid grid-cols-6 gap-2 mb-3">
                      {(bgPalette || palette).map((c) => (
                        <button
                          key={`bg-${c.name}`}
                          type="button"
                          onClick={() => setBgColor(c.hex)}
                          className={`w-7 h-7 rounded-full border-2 hover:scale-110 ${bgColor?.toLowerCase() === c.hex.toLowerCase() ? (isLight ? 'border-gray-900 ring-2 ring-gray-300' : 'border-white ring-2 ring-white/30') : (isLight ? 'border-gray-200' : 'border-white/10')}`}
                          style={{ backgroundColor: c.hex }}
                          title={c.name}
                        />
                      ))}
                    </div>
                    <div className="flex gap-2 items-center">
                      <input
                        key={bgColor}
                        type="text"
                        placeholder="#ffffff"
                        defaultValue={bgColor}
                        className={
                          isLight
                            ? 'flex-1 px-2.5 py-1.5 text-xs border border-gray-200 rounded-lg font-mono bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent'
                            : 'flex-1 px-2.5 py-1.5 text-xs border border-white/10 rounded-lg font-mono bg-white/5 text-white focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent'
                        }
                        onBlur={(e) => {
                          const hex = normalizeHex(e.target.value.trim());
                          if (hex) setBgColor(hex);
                        }}
                        onKeyDown={(e) => e.key === 'Enter' && e.target.blur()}
                      />
                      <span className={`w-6 h-6 rounded-md border flex-shrink-0 ${isLight ? 'border-gray-200' : 'border-white/10'}`} style={{ backgroundColor: bgColor }} />
                    </div>
                  </div>
                </>
              )}
            </div>
          )}

          <div className="hidden md:block relative">
            <button
              type="button"
              onClick={() => {
                setFontPickerOpen(!fontPickerOpen);
                setColorPickerOpen(false);
              }}
              className={
                isLight
                  ? 'flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono text-black/70 hover:bg-black/5 border border-black/10'
                  : 'flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-zinc-500 hover:text-zinc-300 border border-white/10 hover:border-white/20'
              }
              title="Typography (headings, hero, CTAs)"
            >
              Fonts
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {fontPickerOpen && (
              <>
                <div className="fixed inset-0 z-40" onClick={() => setFontPickerOpen(false)} aria-hidden="true" />
                <div className={fontDropdownPanel}>
                  <HeadingFontPanel isLight={isLight} />
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {menuOpen && (
        <div
          className={
            isLight
              ? 'md:hidden absolute top-full left-0 right-0 bg-white border-b border-black/[0.08] shadow-lg'
              : 'md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-white/[0.06] shadow-2xl'
          }
        >
          <nav className="site-nav flex flex-col gap-0.5 p-3 text-sm">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={
                  isLight
                    ? `py-3 px-3 rounded-xl font-mono text-xs ${
                        pathname === link.to
                          ? 'text-black font-medium bg-black/5'
                          : 'text-black/80 hover:bg-black/5'
                      }`
                    : `py-3 px-3 rounded-xl font-medium ${
                        pathname === link.to
                          ? 'text-accent bg-white/5'
                          : 'text-zinc-400 hover:text-white hover:bg-white/5'
                      }`
                }
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/units" className="cta-btn py-3 px-3 text-center bg-accent text-on-accent rounded-xl font-semibold mt-1" onClick={() => setMenuOpen(false)}>
              Find Storage
            </Link>
            <button
              type="button"
              className={
                isLight
                  ? 'py-3 px-3 text-black font-mono text-xs hover:bg-black/5 rounded-xl text-left'
                  : 'py-3 px-3 text-zinc-400 hover:text-white hover:bg-white/5 rounded-xl font-medium text-left'
              }
            >
              Login
            </button>
            <hr className={isLight ? 'border-black/[0.06] my-1.5' : 'border-white/[0.06] my-1.5'} />
            {palette && (
              <div className="py-1.5">
                <p className={`px-3 text-[11px] uppercase tracking-wider font-semibold mb-2 ${isLight ? 'text-gray-500' : 'text-zinc-600'}`}>Theme color</p>
                <div className="flex gap-1.5 flex-wrap px-3 max-h-40 overflow-y-auto">
                  {palette.slice(0, 24).map((c) => (
                    <button
                      key={`m-accent-${c.name}`}
                      type="button"
                      onClick={() => setAccentColor(c.hex)}
                      className={`w-8 h-8 rounded-full border-2 shrink-0 ${accentColor?.toLowerCase() === c.hex.toLowerCase() ? (isLight ? 'border-gray-900 scale-110' : 'border-white scale-110') : (isLight ? 'border-gray-200' : 'border-white/10')}`}
                      style={{ backgroundColor: c.hex }}
                      title={c.name}
                    />
                  ))}
                </div>
                <div className="flex gap-2 items-center mt-2.5 px-3">
                  <input
                    key={accentColor}
                    type="text"
                    placeholder="#000000"
                    defaultValue={accentColor}
                    className={
                      isLight
                        ? 'flex-1 px-2.5 py-1.5 text-xs border border-gray-200 rounded-lg font-mono bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-accent/30'
                        : 'flex-1 px-2.5 py-1.5 text-xs border border-white/10 rounded-lg font-mono bg-white/5 text-white focus:outline-none focus:ring-2 focus:ring-accent/30'
                    }
                    onBlur={(e) => {
                      const hex = normalizeHex(e.target.value.trim());
                      if (hex) setAccentColor(hex);
                    }}
                    onKeyDown={(e) => e.key === 'Enter' && e.target.blur()}
                  />
                  <span className={`w-6 h-6 rounded-md border flex-shrink-0 ${isLight ? 'border-gray-200' : 'border-white/10'}`} style={{ backgroundColor: accentColor }} />
                </div>
                <p className={`px-3 text-[11px] uppercase tracking-wider font-semibold mt-3 mb-2 ${isLight ? 'text-gray-500' : 'text-zinc-600'}`}>Background</p>
                <div className="flex gap-1.5 flex-wrap px-3">
                  {(bgPalette || palette).map((c) => (
                    <button
                      key={`m-bg-${c.name}`}
                      type="button"
                      onClick={() => setBgColor(c.hex)}
                      className={`w-8 h-8 rounded-full border-2 shrink-0 ${bgColor?.toLowerCase() === c.hex.toLowerCase() ? (isLight ? 'border-gray-900 scale-110' : 'border-white scale-110') : (isLight ? 'border-gray-200' : 'border-white/10')}`}
                      style={{ backgroundColor: c.hex }}
                      title={c.name}
                    />
                  ))}
                </div>
                <div className="flex gap-2 items-center mt-2.5 px-3">
                  <input
                    key={bgColor}
                    type="text"
                    placeholder="#ffffff"
                    defaultValue={bgColor}
                    className={
                      isLight
                        ? 'flex-1 px-2.5 py-1.5 text-xs border border-gray-200 rounded-lg font-mono bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-accent/30'
                        : 'flex-1 px-2.5 py-1.5 text-xs border border-white/10 rounded-lg font-mono bg-white/5 text-white focus:outline-none focus:ring-2 focus:ring-accent/30'
                    }
                    onBlur={(e) => {
                      const hex = normalizeHex(e.target.value.trim());
                      if (hex) setBgColor(hex);
                    }}
                    onKeyDown={(e) => e.key === 'Enter' && e.target.blur()}
                  />
                  <span className={`w-6 h-6 rounded-md border flex-shrink-0 ${isLight ? 'border-gray-200' : 'border-white/10'}`} style={{ backgroundColor: bgColor }} />
                </div>
              </div>
            )}
            <div className={isLight ? 'py-1.5 px-3 border-t border-black/[0.06] mt-1.5 pt-3' : 'py-1.5 px-3 border-t border-white/[0.06] mt-1.5 pt-3'}>
              <HeadingFontPanel isLight={isLight} />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
