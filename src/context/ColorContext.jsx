import React, { createContext, useContext, useState, useEffect } from 'react';

/** Derive secondary (lighter tint) and tertiary (darker shade) from a hex color for UI harmony */
function deriveColorSet(hex) {
  const h = String(hex).replace(/^#/, '');
  if (h.length !== 6) return { secondary: hex, tertiary: hex };
  const r = parseInt(h.slice(0, 2), 16);
  const g = parseInt(h.slice(2, 4), 16);
  const b = parseInt(h.slice(4, 6), 16);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

  const toHex = (nr, ng, nb) =>
    '#' + [nr, ng, nb].map((x) => Math.round(Math.min(255, Math.max(0, x))).toString(16).padStart(2, '0')).join('');

  let secondary, tertiary;
  if (luminance > 0.75) {
    secondary = toHex(r * 0.92, g * 0.92, b * 0.92);
    tertiary = toHex(r * 0.75, g * 0.75, b * 0.75);
  } else if (luminance < 0.25) {
    secondary = toHex(r + (255 - r) * 0.5, g + (255 - g) * 0.5, b + (255 - b) * 0.5);
    tertiary = toHex(r + (255 - r) * 0.25, g + (255 - g) * 0.25, b + (255 - b) * 0.25);
  } else {
    secondary = toHex(r + (255 - r) * 0.35, g + (255 - g) * 0.35, b + (255 - b) * 0.35);
    tertiary = toHex(r * 0.78, g * 0.78, b * 0.78);
  }
  return { secondary, tertiary };
}

// Urban Stash extended color palette from brand guidelines (each with derived secondary/tertiary)
export const PALETTE = [
  { name: 'Lime', hex: '#99fe1c', ...deriveColorSet('#99fe1c') },
  { name: 'Citrus', hex: '#e7fe4b' },
  { name: 'Stone', hex: '#efeee9' },
  { name: 'Coral', hex: '#ff533d' },
  { name: 'Peach', hex: '#fecfbd' },
  { name: 'Salmon', hex: '#ffa398' },
  { name: 'Lavender', hex: '#f1f3ff' },
  { name: 'Purple', hex: '#d1c8ff' },
  { name: 'Yellow', hex: '#f0ff02' },
  { name: 'Cream', hex: '#faffc7' },
  { name: 'Sky Blue', hex: '#98d3f3' },
  { name: 'Mint', hex: '#daf2f2' },
  { name: 'Aqua', hex: '#9afbda' },
  { name: 'Seafoam', hex: '#d3efe1' },
  { name: 'Pink', hex: '#fdc8ce' },
  { name: 'Blush', hex: '#f7e0e8' },
  { name: 'Rose', hex: '#f7dbd8' },
  { name: 'Coral Alt', hex: '#ff4f59' },
  // Additional colors for more choice
  { name: 'Navy', hex: '#1e3a5f' },
  { name: 'Teal', hex: '#0d9488' },
  { name: 'Emerald', hex: '#059669' },
  { name: 'Orange', hex: '#f97316' },
  { name: 'Amber', hex: '#f59e0b' },
  { name: 'Red', hex: '#dc2626' },
  { name: 'Blue', hex: '#2563eb' },
  { name: 'Indigo', hex: '#4f46e5' },
  { name: 'Violet', hex: '#7c3aed' },
  { name: 'Slate', hex: '#64748b' },
  { name: 'Charcoal', hex: '#334155' },
];

// Background-friendly colors (light + dark options)
export const BG_PALETTE = [
  { name: 'White', hex: '#ffffff' },
  { name: 'Black', hex: '#000000' },
  { name: 'Dark Gray', hex: '#0a0a0a' },
  { name: 'Charcoal Dark', hex: '#171717' },
  { name: 'Cream', hex: '#faffc7' },
  { name: 'Lavender', hex: '#f1f3ff' },
  { name: 'Mint', hex: '#daf2f2' },
  { name: 'Seafoam', hex: '#d3efe1' },
  { name: 'Blush', hex: '#f7e0e8' },
  { name: 'Rose', hex: '#f7dbd8' },
  { name: 'Peach', hex: '#fecfbd' },
  { name: 'Stone', hex: '#efeee9' },
  { name: 'Light Gray', hex: '#f3f4f6' },
  { name: 'Cool Gray', hex: '#f1f5f9' },
  { name: 'Warm Gray', hex: '#fafaf9' },
  { name: 'Sky', hex: '#e0f2fe' },
  { name: 'Sage', hex: '#ecfdf5' },
  { name: 'Lilac', hex: '#ede9fe' },
];

const DEFAULT_ACCENT = '#f97316';
const DEFAULT_BG = '#ffffff';

/** Check if a hex color is dark (for switching to light text) */
function isDarkBg(hex) {
  const h = String(hex).replace(/^#/, '');
  if (h.length !== 6) return false;
  const r = parseInt(h.slice(0, 2), 16);
  const g = parseInt(h.slice(2, 4), 16);
  const b = parseInt(h.slice(4, 6), 16);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance < 0.25;
}

/** Get contrasting text color for text on accent: white on dark accents, dark on light accents */
export function getContrastColor(hex) {
  const h = String(hex).replace(/^#/, '');
  if (h.length !== 6) return '#ffffff';
  const r = parseInt(h.slice(0, 2), 16);
  const g = parseInt(h.slice(2, 4), 16);
  const b = parseInt(h.slice(4, 6), 16);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance >= 0.5 ? '#0f172a' : '#ffffff';
}

/** Each main color with its pre-computed secondary and tertiary for UI harmony */
export const PALETTE_WITH_TRIADS = PALETTE.map((c) => ({
  ...c,
  ...deriveColorSet(c.hex),
}));

const ColorContext = createContext();

export function ColorProvider({ children }) {
  const [accentColor, setAccentColor] = useState(() => {
    try {
      return localStorage.getItem('urbanstash-accent') || DEFAULT_ACCENT;
    } catch {
      return DEFAULT_ACCENT;
    }
  });

  const [bgColor, setBgColor] = useState(() => {
    try {
      return localStorage.getItem('urbanstash-bg') || DEFAULT_BG;
    } catch {
      return DEFAULT_BG;
    }
  });

  const { secondary: accentSecondary, tertiary: accentTertiary } = deriveColorSet(accentColor);

  useEffect(() => {
    try {
      localStorage.setItem('urbanstash-accent', accentColor);
    } catch {}
    document.documentElement.style.setProperty('--accent-color', accentColor);
    document.documentElement.style.setProperty('--accent-secondary', accentSecondary);
    document.documentElement.style.setProperty('--accent-tertiary', accentTertiary);
    document.documentElement.style.setProperty('--accent-on-accent', getContrastColor(accentColor));
  }, [accentColor, accentSecondary, accentTertiary]);

  useEffect(() => {
    try {
      localStorage.setItem('urbanstash-bg', bgColor);
    } catch {}
    document.documentElement.style.setProperty('--bg-color', bgColor);
    document.documentElement.setAttribute('data-theme', isDarkBg(bgColor) ? 'dark' : 'light');
  }, [bgColor]);

  return (
    <ColorContext.Provider value={{
      accentColor, setAccentColor,
      accentSecondary, accentTertiary,
      bgColor, setBgColor,
      palette: PALETTE,
      bgPalette: BG_PALETTE,
      deriveColorSet,
    }}>
      {children}
    </ColorContext.Provider>
  );
}

export function useColor() {
  const context = useContext(ColorContext);
  return context;
}
