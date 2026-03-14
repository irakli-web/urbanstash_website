import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useVersion } from '../context/VersionContext';
import { useColor } from '../context/ColorContext';

export default function HeaderV2({ showFindStorage = true }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [versionDropdownOpen, setVersionDropdownOpen] = useState(false);
  const [colorPickerOpen, setColorPickerOpen] = useState(false);
  const { version, setVersion } = useVersion();
  const { accentColor, setAccentColor, bgColor, setBgColor, palette, bgPalette } = useColor() || {};

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold text-blue-900 hover:opacity-90 transition-opacity">
          Urban Stash
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link to="/sizing" className="text-gray-700 hover:text-blue-600 transition-colors">
            Sizing
          </Link>
          <Link to="/units" className="text-gray-700 hover:text-blue-600 transition-colors">
            Locations
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-blue-600 transition-colors hidden sm:inline">
            About
          </Link>
          {showFindStorage && (
            <Link to="/units" className="bg-accent hover:opacity-90 text-white px-5 py-2.5 rounded-full font-medium transition-colors">
              Find Storage
            </Link>
          )}
          <button className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
            Login
          </button>
        </nav>

        {/* Burger + version switcher */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors"
            aria-label="Open menu"
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
                className="flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors border border-gray-200"
                title="Choose theme color"
              >
                <span className="w-4 h-4 rounded-full border border-gray-300" style={{ backgroundColor: accentColor }} />
                Theme color
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {colorPickerOpen && (
                <>
                  <div className="fixed inset-0 z-40" onClick={() => setColorPickerOpen(false)} aria-hidden="true" />
                  <div className="absolute right-0 mt-1 p-3 w-56 bg-white border border-gray-200 rounded-xl shadow-xl z-50 max-h-[80vh] overflow-y-auto">
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Accent color</p>
                    <div className="grid grid-cols-6 gap-2 mb-4">
                      {palette.map((c) => (
                        <button
                          key={`accent-${c.hex}`}
                          onClick={() => setAccentColor(c.hex)}
                          className={`w-7 h-7 rounded-full border-2 transition-transform hover:scale-110 ${accentColor === c.hex ? 'border-gray-800 ring-2 ring-gray-300' : 'border-gray-200'}`}
                          style={{ backgroundColor: c.hex }}
                          title={c.name}
                        />
                      ))}
                    </div>
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Background</p>
                    <div className="grid grid-cols-6 gap-2">
                      {(bgPalette || palette).map((c) => (
                        <button
                          key={`bg-${c.hex}`}
                          onClick={() => setBgColor(c.hex)}
                          className={`w-7 h-7 rounded-full border-2 transition-transform hover:scale-110 ${bgColor === c.hex ? 'border-gray-800 ring-2 ring-gray-300' : 'border-gray-200'}`}
                          style={{ backgroundColor: c.hex }}
                          title={c.name}
                        />
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>
          )}
          <div className="hidden md:block relative">
            <button
              onClick={() => setVersionDropdownOpen(!versionDropdownOpen)}
              className="flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors border border-gray-200"
              title="Switch design version"
            >
              Design: {version === 'v1' ? 'Original' : 'New'}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {versionDropdownOpen && (
              <>
                <div className="fixed inset-0 z-40" onClick={() => setVersionDropdownOpen(false)} aria-hidden="true" />
                <div className="absolute right-0 mt-1 py-1 w-40 bg-white border border-gray-200 rounded-xl shadow-xl z-50">
                  <button
                    onClick={() => { setVersion('v1'); setVersionDropdownOpen(false); }}
                    className={`block w-full text-left px-3 py-2 text-sm ${version === 'v1' ? 'text-blue-600 font-medium' : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'}`}
                  >
                    Original
                  </button>
                  <button
                    onClick={() => { setVersion('v2'); setVersionDropdownOpen(false); }}
                    className={`block w-full text-left px-3 py-2 text-sm ${version === 'v2' ? 'text-blue-600 font-medium' : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'}`}
                  >
                    New
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-xl">
          <nav className="flex flex-col gap-1 p-4 text-sm">
            <Link to="/" className="py-3 px-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
            <Link to="/sizing" className="py-3 px-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors" onClick={() => setMenuOpen(false)}>
              Sizing
            </Link>
            <Link to="/units" className="py-3 px-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors" onClick={() => setMenuOpen(false)}>
              Locations
            </Link>
            <Link to="/about" className="py-3 px-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors" onClick={() => setMenuOpen(false)}>
              About
            </Link>
            {showFindStorage && (
              <Link to="/units" className="py-3 px-2 text-center bg-accent hover:opacity-90 text-white rounded-full font-medium transition-colors" onClick={() => setMenuOpen(false)}>
                Find Storage
              </Link>
            )}
            <button className="flex items-center gap-2 py-3 px-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors w-full text-left">
              Login
            </button>
            <hr className="border-gray-200 my-2" />
            <div className="py-2">
              <p className="px-2 text-gray-500 text-xs uppercase tracking-wider mb-1">Design version</p>
              <div className="flex flex-col gap-0.5">
                <button
                  onClick={() => { setVersion('v1'); setMenuOpen(false); }}
                  className={`flex items-center justify-between py-2.5 px-2 rounded-lg text-sm transition-colors w-full text-left ${version === 'v1' ? 'text-blue-600 font-medium bg-blue-50' : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'}`}
                >
                  Original
                  {version === 'v1' && <span className="text-blue-600">✓</span>}
                </button>
                <button
                  onClick={() => { setVersion('v2'); setMenuOpen(false); }}
                  className={`flex items-center justify-between py-2.5 px-2 rounded-lg text-sm transition-colors w-full text-left ${version === 'v2' ? 'text-blue-600 font-medium bg-blue-50' : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'}`}
                >
                  New
                  {version === 'v2' && <span className="text-blue-600">✓</span>}
                </button>
              </div>
            </div>
            {version === 'v2' && palette && (
              <div className="py-2">
                <p className="px-2 text-gray-500 text-xs uppercase tracking-wider mb-1">Theme color</p>
                <div className="flex gap-1 flex-wrap">
                  {palette.slice(0, 12).map((c) => (
                    <button
                      key={`m-accent-${c.hex}`}
                      onClick={() => setAccentColor(c.hex)}
                      className={`w-8 h-8 rounded-full border-2 ${accentColor === c.hex ? 'border-gray-800' : 'border-gray-200'}`}
                      style={{ backgroundColor: c.hex }}
                    />
                  ))}
                </div>
                <p className="px-2 text-gray-500 text-xs uppercase tracking-wider mt-3 mb-1">Background</p>
                <div className="flex gap-1 flex-wrap">
                  {(bgPalette || palette).slice(0, 8).map((c) => (
                    <button
                      key={`m-bg-${c.hex}`}
                      onClick={() => setBgColor(c.hex)}
                      className={`w-8 h-8 rounded-full border-2 ${bgColor === c.hex ? 'border-gray-800' : 'border-gray-200'}`}
                      style={{ backgroundColor: c.hex }}
                    />
                  ))}
                </div>
              </div>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
