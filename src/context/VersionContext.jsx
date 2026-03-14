import React, { createContext, useContext, useState } from 'react';

const VersionContext = createContext();

export function VersionProvider({ children }) {
  const [version, setVersion] = useState('v1'); // 'v1' = original dark, 'v2' = new design

  const toggleVersion = () => {
    setVersion((prev) => (prev === 'v1' ? 'v2' : 'v1'));
  };

  return (
    <VersionContext.Provider value={{ version, setVersion, toggleVersion }}>
      {children}
    </VersionContext.Provider>
  );
}

export function useVersion() {
  const context = useContext(VersionContext);
  if (!context) {
    throw new Error('useVersion must be used within a VersionProvider');
  }
  return context;
}
