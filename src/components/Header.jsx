import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useColor, normalizeHex } from '../context/ColorContext';
import { useHeadingFonts } from '../context/HeadingFontContext';
import HeadingFontPanel from './HeadingFontPanel';

export default function Header({ showFindStorage = true, variant = 'default' }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [settingsTab, setSettingsTab] = useState('theme'); // 'theme' | 'fonts'

  const { accentColor, setAccentColor, bgColor, setBgColor, palette, bgPalette } = useColor();
  const { heroVersion, setHeroVersion, heroTitleColor, setHeroTitleColor, heroSubColor, setHeroSubColor, heroTitleSize, setHeroTitleSize, heroSubSize, setHeroSubSize } = useHeadingFonts() || {};
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


  return (
    <header className={`${headerShell}${isLight ? ' header-home-light' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 flex items-center">
        {/* Logo — left */}
        <Link to="/" className="flex items-center gap-2 group shrink-0">
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

        {/* Nav links — center */}
        <nav className="site-nav hidden md:flex flex-1 items-center justify-center gap-0.5 text-sm">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={
                isLight
                  ? `px-3 py-2 rounded-lg font-mono text-[11px] sm:text-xs tracking-wide transition-colors ${
                      pathname === link.to ? 'text-black font-medium' : 'text-black/80 hover:text-black'
                    }`
                  : `px-3.5 py-2 rounded-lg font-medium transition-colors ${
                      pathname === link.to ? 'text-accent' : 'text-zinc-400 hover:text-white'
                    }`
              }
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTAs — right */}
        <div className="hidden md:flex items-center gap-2 shrink-0">
          <Link
            to="/units"
            className="cta-btn bg-accent text-on-accent px-5 py-2 rounded-full font-semibold text-sm inline-flex items-center gap-1.5 hover:opacity-90"
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
                ? 'px-4 py-2 rounded-full bg-neutral-200/90 hover:bg-neutral-300/90 text-black font-mono text-[11px] sm:text-xs'
                : 'px-3.5 py-2 rounded-lg text-zinc-400 hover:text-white font-medium'
            }
          >
            Login
          </button>

          {/* Settings gear */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setSettingsOpen(!settingsOpen)}
              className={
                isLight
                  ? `p-2 rounded-full border border-black/10 hover:bg-black/5 transition-colors ${settingsOpen ? 'bg-black/8' : ''}`
                  : `p-2 rounded-full border border-white/10 hover:border-white/20 transition-colors ${settingsOpen ? 'border-white/20 text-white' : 'text-zinc-400 hover:text-white'}`
              }
              title="Settings"
              aria-label="Settings"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </button>

            {settingsOpen && (
              <>
                <div className="fixed inset-0 z-40" onClick={() => setSettingsOpen(false)} aria-hidden="true" />
                <div className={`absolute right-0 mt-2 z-50 ${
                  settingsTab === 'fonts'
                    ? isLight ? 'p-5 w-[42rem] bg-white border border-gray-200 rounded-2xl shadow-2xl max-h-[85vh] overflow-y-auto' : 'p-5 w-[42rem] glass-card-strong rounded-2xl shadow-2xl max-h-[85vh] overflow-y-auto'
                    : isLight ? 'p-4 w-64 bg-white border border-gray-200 rounded-2xl shadow-2xl max-h-[80vh] overflow-y-auto' : 'p-4 w-64 glass-card-strong rounded-2xl shadow-2xl max-h-[80vh] overflow-y-auto'
                }`}>
                  {/* Tabs */}
                  <div className={`flex gap-1 mb-4 p-1 rounded-xl ${isLight ? 'bg-gray-100' : 'bg-white/5'}`}>
                    {['theme', 'fonts'].map((tab) => (
                      <button
                        key={tab}
                        type="button"
                        onClick={() => setSettingsTab(tab)}
                        className={`flex-1 py-1.5 rounded-lg text-xs font-semibold capitalize transition-colors ${
                          settingsTab === tab
                            ? isLight ? 'bg-white text-gray-900 shadow-sm' : 'bg-white/10 text-white'
                            : isLight ? 'text-gray-500 hover:text-gray-700' : 'text-zinc-500 hover:text-zinc-300'
                        }`}
                      >
                        {tab === 'theme' ? 'Theme' : 'Fonts'}
                      </button>
                    ))}
                  </div>

                  {/* Theme tab */}
                  {settingsTab === 'theme' && (
                    <>
                      {/* Hero version toggle */}
                      {setHeroVersion && (
                        <div className="mb-5">
                          <p className={`text-[11px] font-semibold uppercase tracking-wider mb-2 ${isLight ? 'text-gray-500' : 'text-zinc-500'}`}>Hero layout</p>
                          <div className={`flex gap-1 p-1 rounded-xl ${isLight ? 'bg-gray-100' : 'bg-white/5'}`}>
                            {[{ id: 'split', label: 'Split' }, { id: 'fullscreen', label: 'Fullscreen' }].map((v) => (
                              <button
                                key={v.id}
                                type="button"
                                onClick={() => setHeroVersion(v.id)}
                                className={`flex-1 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                                  heroVersion === v.id
                                    ? isLight ? 'bg-white text-gray-900 shadow-sm' : 'bg-white/10 text-white'
                                    : isLight ? 'text-gray-500 hover:text-gray-700' : 'text-zinc-500 hover:text-zinc-300'
                                }`}
                              >
                                {v.label}
                              </button>
                            ))}
                          </div>
                          {/* Hero text colors & sizes */}
                          <div className="mt-3 space-y-3">
                            {[
                              { label: 'Title', color: heroTitleColor, setColor: setHeroTitleColor, size: heroTitleSize, setSize: setHeroTitleSize, sizeMin: 1, sizeMax: 12, sizeDefault: 5.5 },
                              { label: 'Subtitle', color: heroSubColor, setColor: setHeroSubColor, size: heroSubSize, setSize: setHeroSubSize, sizeMin: 0.5, sizeMax: 4, sizeDefault: 1.125 },
                            ].map(({ label, color, setColor, size, setSize, sizeMin, sizeMax, sizeDefault }) => (
                              <div key={label}>
                                <p className={`text-[10px] font-bold uppercase tracking-wider mb-1.5 ${isLight ? 'text-gray-400' : 'text-zinc-500'}`}>{label}</p>
                                <div className="flex items-center gap-2 mb-1.5">
                                  <span className={`text-[10px] ${isLight ? 'text-gray-500' : 'text-zinc-500'} w-8`}>Color</span>
                                  <input
                                    type="color"
                                    value={color || '#ffffff'}
                                    onChange={(e) => setColor(e.target.value)}
                                    className="w-7 h-7 rounded-md cursor-pointer border-0 p-0.5 bg-transparent"
                                  />
                                  {color && (
                                    <button type="button" onClick={() => setColor('')} className={`text-[10px] ${isLight ? 'text-gray-400 hover:text-gray-600' : 'text-zinc-600 hover:text-zinc-400'}`} title="Reset">✕</button>
                                  )}
                                </div>
                                <div className="flex items-center gap-2">
                                  <span className={`text-[10px] ${isLight ? 'text-gray-500' : 'text-zinc-500'} w-8`}>Size</span>
                                  <input
                                    type="range"
                                    min={sizeMin}
                                    max={sizeMax}
                                    step={0.25}
                                    value={size || sizeDefault}
                                    onChange={(e) => setSize(e.target.value)}
                                    className="flex-1 h-1 accent-accent cursor-pointer"
                                  />
                                  <span className={`text-[10px] font-mono w-10 text-right ${isLight ? 'text-gray-500' : 'text-zinc-400'}`}>{size ? `${size}rem` : 'auto'}</span>
                                  {size && (
                                    <button type="button" onClick={() => setSize('')} className={`text-[10px] ${isLight ? 'text-gray-400 hover:text-gray-600' : 'text-zinc-600 hover:text-zinc-400'}`} title="Reset">✕</button>
                                  )}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </>
                  )}
                  {settingsTab === 'theme' && palette && (
                    <>
                      <p className={`text-[11px] font-semibold uppercase tracking-wider mb-2.5 ${isLight ? 'text-gray-500' : 'text-zinc-500'}`}>Accent color</p>
                      <div className="grid grid-cols-6 gap-2 mb-3">
                        {palette.map((c) => (
                          <button key={`accent-${c.name}`} type="button" onClick={() => setAccentColor(c.hex)}
                            className={`w-7 h-7 rounded-full border-2 hover:scale-110 ${accentColor?.toLowerCase() === c.hex.toLowerCase() ? (isLight ? 'border-gray-900 ring-2 ring-gray-300' : 'border-white ring-2 ring-white/30') : (isLight ? 'border-gray-200' : 'border-white/10')}`}
                            style={{ backgroundColor: c.hex }} title={c.name} />
                        ))}
                      </div>
                      <div className="flex gap-2 items-center mb-4">
                        <input key={accentColor} type="text" placeholder="#000000" defaultValue={accentColor}
                          className={isLight ? 'flex-1 px-2.5 py-1.5 text-xs border border-gray-200 rounded-lg font-mono bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent' : 'flex-1 px-2.5 py-1.5 text-xs border border-white/10 rounded-lg font-mono bg-white/5 text-white focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent'}
                          onBlur={(e) => { const hex = normalizeHex(e.target.value.trim()); if (hex) setAccentColor(hex); }}
                          onKeyDown={(e) => e.key === 'Enter' && e.target.blur()} />
                        <span className={`w-6 h-6 rounded-md border flex-shrink-0 ${isLight ? 'border-gray-200' : 'border-white/10'}`} style={{ backgroundColor: accentColor }} />
                      </div>
                      <p className={`text-[11px] font-semibold uppercase tracking-wider mb-2.5 ${isLight ? 'text-gray-500' : 'text-zinc-500'}`}>Background</p>
                      <div className="grid grid-cols-6 gap-2 mb-3">
                        {(bgPalette || palette).map((c) => (
                          <button key={`bg-${c.name}`} type="button" onClick={() => setBgColor(c.hex)}
                            className={`w-7 h-7 rounded-full border-2 hover:scale-110 ${bgColor?.toLowerCase() === c.hex.toLowerCase() ? (isLight ? 'border-gray-900 ring-2 ring-gray-300' : 'border-white ring-2 ring-white/30') : (isLight ? 'border-gray-200' : 'border-white/10')}`}
                            style={{ backgroundColor: c.hex }} title={c.name} />
                        ))}
                      </div>
                      <div className="flex gap-2 items-center">
                        <input key={bgColor} type="text" placeholder="#ffffff" defaultValue={bgColor}
                          className={isLight ? 'flex-1 px-2.5 py-1.5 text-xs border border-gray-200 rounded-lg font-mono bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent' : 'flex-1 px-2.5 py-1.5 text-xs border border-white/10 rounded-lg font-mono bg-white/5 text-white focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent'}
                          onBlur={(e) => { const hex = normalizeHex(e.target.value.trim()); if (hex) setBgColor(hex); }}
                          onKeyDown={(e) => e.key === 'Enter' && e.target.blur()} />
                        <span className={`w-6 h-6 rounded-md border flex-shrink-0 ${isLight ? 'border-gray-200' : 'border-white/10'}`} style={{ backgroundColor: bgColor }} />
                      </div>
                    </>
                  )}

                  {/* Fonts tab */}
                  {settingsTab === 'fonts' && <HeadingFontPanel isLight={isLight} />}
                </div>
              </>
            )}
          </div>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className={
            isLight
              ? 'md:hidden ml-auto p-2 text-black hover:bg-black/5 rounded-lg'
              : 'md:hidden ml-auto p-2 text-zinc-400 hover:text-white rounded-lg'
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
