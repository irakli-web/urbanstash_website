import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useVersion } from '../context/VersionContext';

export default function Header({ showFindStorage = true }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [versionDropdownOpen, setVersionDropdownOpen] = useState(false);
  const { version, setVersion } = useVersion();

  const navLinks = (
    <>
      <Link to="/" className="text-zinc-400 hover:text-white transition-colors" onClick={() => setMenuOpen(false)}>
        Home
      </Link>
      <Link to="/sizing" className="text-zinc-400 hover:text-white transition-colors" onClick={() => setMenuOpen(false)}>
        Sizing
      </Link>
      <Link to="/units" className="text-zinc-400 hover:text-white transition-colors" onClick={() => setMenuOpen(false)}>
        Locations
      </Link>
      <Link to="/about" className="text-zinc-400 hover:text-white transition-colors hidden sm:inline" onClick={() => setMenuOpen(false)}>
        About
      </Link>
      {showFindStorage && (
        <Link to="/units" className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-medium transition-colors" onClick={() => setMenuOpen(false)}>
          Find Storage
        </Link>
      )}
      <button className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors">
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
        Login
      </button>
    </>
  );

  return (
    <header className="border-b border-zinc-800 sticky top-0 z-50 bg-black">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold hover:opacity-90 transition-opacity">
          <span className="text-white">URBAN</span>
          <span className="text-orange-500">STASH</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {navLinks}
        </nav>

        {/* Burger + version switcher */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-zinc-400 hover:text-white transition-colors"
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
          <div className="hidden md:block relative">
            <button
              onClick={() => setVersionDropdownOpen(!versionDropdownOpen)}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors border border-zinc-700"
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
                <div className="absolute right-0 mt-1 py-1 w-40 bg-zinc-800 border border-zinc-700 rounded-lg shadow-xl z-50">
                  <button
                    onClick={() => { setVersion('v1'); setVersionDropdownOpen(false); }}
                    className={`block w-full text-left px-3 py-2 text-sm ${version === 'v1' ? 'text-orange-500 font-medium' : 'text-zinc-400 hover:text-white'}`}
                  >
                    Original
                  </button>
                  <button
                    onClick={() => { setVersion('v2'); setVersionDropdownOpen(false); }}
                    className={`block w-full text-left px-3 py-2 text-sm ${version === 'v2' ? 'text-orange-500 font-medium' : 'text-zinc-400 hover:text-white'}`}
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
        <div className="md:hidden absolute top-full left-0 right-0 bg-zinc-900 border-b border-zinc-800 shadow-xl">
          <nav className="flex flex-col gap-1 p-4 text-sm">
            <Link to="/" className="py-3 px-2 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
            <Link to="/sizing" className="py-3 px-2 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors" onClick={() => setMenuOpen(false)}>
              Sizing
            </Link>
            <Link to="/units" className="py-3 px-2 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors" onClick={() => setMenuOpen(false)}>
              Locations
            </Link>
            <Link to="/about" className="py-3 px-2 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors" onClick={() => setMenuOpen(false)}>
              About
            </Link>
            {showFindStorage && (
              <Link to="/units" className="py-3 px-2 text-center bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-medium transition-colors" onClick={() => setMenuOpen(false)}>
                Find Storage
              </Link>
            )}
            <button className="flex items-center gap-2 py-3 px-2 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors w-full text-left">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Login
            </button>
            <hr className="border-zinc-700 my-2" />
            <div className="py-2">
              <p className="px-2 text-zinc-500 text-xs uppercase tracking-wider mb-1">Design version</p>
              <div className="flex flex-col gap-0.5">
                <button
                  onClick={() => { setVersion('v1'); setMenuOpen(false); }}
                  className={`flex items-center justify-between py-2.5 px-2 rounded-lg text-sm transition-colors w-full text-left ${version === 'v1' ? 'text-orange-500 font-medium bg-zinc-800' : 'text-zinc-400 hover:text-white hover:bg-zinc-800'}`}
                >
                  Original
                  {version === 'v1' && <span className="text-orange-500">✓</span>}
                </button>
                <button
                  onClick={() => { setVersion('v2'); setMenuOpen(false); }}
                  className={`flex items-center justify-between py-2.5 px-2 rounded-lg text-sm transition-colors w-full text-left ${version === 'v2' ? 'text-orange-500 font-medium bg-zinc-800' : 'text-zinc-400 hover:text-white hover:bg-zinc-800'}`}
                >
                  New
                  {version === 'v2' && <span className="text-orange-500">✓</span>}
                </button>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
