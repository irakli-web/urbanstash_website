import React from 'react';
import { useVersion } from '../context/VersionContext';

export default function VersionSwitcher() {
  const { version, toggleVersion } = useVersion();

  return (
    <button
      onClick={toggleVersion}
      className="fixed bottom-4 right-4 z-[100] px-4 py-2 rounded-full text-sm font-medium shadow-lg transition-all bg-slate-800 hover:bg-slate-700 text-white border border-slate-600"
      title="Switch between design versions"
    >
      Design: {version === 'v1' ? 'Original' : 'New'} — click to switch
    </button>
  );
}
