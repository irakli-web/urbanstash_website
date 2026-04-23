import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

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

function hexToHsl(hex) {
  const h = String(hex).replace(/^#/, '');
  let r = parseInt(h.slice(0, 2), 16) / 255;
  let g = parseInt(h.slice(2, 4), 16) / 255;
  let b = parseInt(h.slice(4, 6), 16) / 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  let hue = 0, sat = 0, light = (max + min) / 2;
  if (max !== min) {
    const d = max - min;
    sat = light > 0.5 ? d / (2 - max - min) : d / (max + min);
    if (max === r) hue = ((g - b) / d + (g < b ? 6 : 0)) / 6;
    else if (max === g) hue = ((b - r) / d + 2) / 6;
    else hue = ((r - g) / d + 4) / 6;
  }
  return [hue * 360, sat * 100, light * 100];
}

function hslToHex(h, s, l) {
  s /= 100; l /= 100;
  const a = s * Math.min(l, 1 - l);
  const f = (n) => {
    const k = (n + h / 30) % 12;
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * Math.max(0, Math.min(1, color))).toString(16).padStart(2, '0');
  };
  return `#${f(0)}${f(8)}${f(4)}`;
}

/** Normalize user or stored hex to #rrggbb (lowercase) */
export function normalizeHex(input) {
  if (input == null || typeof input !== 'string') return null;
  const v = input.trim();
  const raw = v.startsWith('#') ? v.slice(1) : v;
  if (!/^[0-9A-Fa-f]{6}$/.test(raw)) return null;
  return `#${raw.toLowerCase()}`;
}

/** Derive a warm complementary CTA color by shifting hue ~150 degrees and softening */
function deriveCtaColor(hex) {
  const h = String(hex).replace(/^#/, '');
  if (h.length !== 6) return '#ffa398';
  const [hue, sat, light] = hexToHsl(hex);
  const ctaHue = (hue + 150) % 360;
  const ctaSat = Math.min(85, sat * 0.8 + 20);
  const ctaLight = Math.max(55, Math.min(75, light * 0.6 + 40));
  return hslToHex(ctaHue, ctaSat, ctaLight);
}

export const PALETTE = [
  // Extended brand sheet (accent-friendly)
  { name: 'Pale Pink', hex: '#f9e2e8' },
  { name: 'Rose Pink', hex: '#e8b4be' },
  { name: 'Neon Aqua', hex: '#7dffc1' },
  { name: 'Mint', hex: '#eef7f2' },
  { name: 'Cloud', hex: '#e6e2dc' },
  { name: 'Icing Sugar', hex: '#f4f8fc' },
  { name: 'Coral', hex: '#f4a896' },
  { name: 'Extra', hex: '#e8f4fc' },
  { name: '911 Blue', hex: '#1fd3ff' },
  { name: 'Peach', hex: '#ffcfbe' },
  { name: 'Sock Yellow', hex: '#ffe94d' },
  { name: 'Watermelon', hex: '#ff5c7c' },
  { name: 'Black', hex: '#000000' },
  // Earlier brand palettes
  { name: 'Mint Julep', hex: '#c4dcc8' },
  { name: 'Cloud Dancer', hex: '#e0d8d0' },
  { name: 'Espresso', hex: '#1a1207' },
  { name: 'Peach Coral', hex: '#f8977d' },
  { name: 'Lime', hex: '#99fe1c' },
  { name: 'Citrus', hex: '#e7fe4b' },
  { name: 'Coral Deep', hex: '#ff533d' },
  { name: 'Salmon', hex: '#ffa398' },
  { name: 'Lavender', hex: '#f1f3ff' },
  { name: 'Purple', hex: '#d1c8ff' },
  { name: 'Yellow', hex: '#f0ff02' },
  { name: 'Sky Blue', hex: '#98d3f3' },
  { name: 'Aqua', hex: '#9afbda' },
  { name: 'Seafoam', hex: '#d3efe1' },
  { name: 'Pink', hex: '#fdc8ce' },
  { name: 'Blush', hex: '#f7e0e8' },
  { name: 'Rose', hex: '#f7dbd8' },
  { name: 'Coral Alt', hex: '#ff4f59' },
  { name: 'Teal', hex: '#0d9488' },
  { name: 'Emerald', hex: '#059669' },
  { name: 'Orange', hex: '#f97316' },
  { name: 'Amber', hex: '#f59e0b' },
  { name: 'Blue', hex: '#2563eb' },
  { name: 'Indigo', hex: '#4f46e5' },
  { name: 'Violet', hex: '#7c3aed' },
];

export const BG_PALETTE = [
  { name: 'Cloud (BG)', hex: '#e6e2dc' },
  { name: 'Icing Sugar', hex: '#f4f8fc' },
  { name: 'Mint', hex: '#eef7f2' },
  { name: 'Pale Pink', hex: '#f9e2e8' },
  { name: 'Extra', hex: '#e8f4fc' },
  { name: 'White', hex: '#ffffff' },
  { name: 'Cloud Dancer', hex: '#e0d8d0' },
  { name: 'Mint Julep', hex: '#c4dcc8' },
  { name: 'Peach', hex: '#ffcfbe' },
  { name: 'Black', hex: '#000000' },
  { name: 'Espresso', hex: '#1a1207' },
  { name: 'Dark Gray', hex: '#0a0a0a' },
  { name: 'Charcoal', hex: '#171717' },
  { name: 'Lavender', hex: '#f1f3ff' },
  { name: 'Rose', hex: '#f7dbd8' },
  { name: 'Light Gray', hex: '#f3f4f6' },
];

const DEFAULT_ACCENT = '#7dffc1';
const DEFAULT_BG = '#000000';

function isDarkBg(hex) {
  const h = String(hex).replace(/^#/, '');
  if (h.length !== 6) return false;
  const r = parseInt(h.slice(0, 2), 16);
  const g = parseInt(h.slice(2, 4), 16);
  const b = parseInt(h.slice(4, 6), 16);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance < 0.25;
}

export function getContrastColor(hex) {
  const h = String(hex).replace(/^#/, '');
  if (h.length !== 6) return '#ffffff';
  const r = parseInt(h.slice(0, 2), 16);
  const g = parseInt(h.slice(2, 4), 16);
  const b = parseInt(h.slice(4, 6), 16);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance >= 0.5 ? '#0f172a' : '#ffffff';
}

const ColorContext = createContext();

export function ColorProvider({ children }) {
  const [accentColor, setAccentColorState] = useState(() => {
    try {
      const raw = localStorage.getItem('urbanstash-accent');
      return normalizeHex(raw) || DEFAULT_ACCENT;
    } catch {
      return DEFAULT_ACCENT;
    }
  });

  const [bgColor, setBgColorState] = useState(() => {
    try {
      const raw = localStorage.getItem('urbanstash-bg');
      return normalizeHex(raw) || DEFAULT_BG;
    } catch {
      return DEFAULT_BG;
    }
  });

  const setAccentColor = useCallback((v) => {
    const n = normalizeHex(v);
    if (n) setAccentColorState(n);
  }, []);

  const setBgColor = useCallback((v) => {
    const n = normalizeHex(v);
    if (n) setBgColorState(n);
  }, []);

  const { secondary: accentSecondary, tertiary: accentTertiary } = deriveColorSet(accentColor);
  const accentCta = deriveCtaColor(accentColor);

  useEffect(() => {
    try {
      localStorage.setItem('urbanstash-accent', accentColor);
    } catch {}
    document.documentElement.style.setProperty('--accent-color', accentColor);
    document.documentElement.style.setProperty('--accent-secondary', accentSecondary);
    document.documentElement.style.setProperty('--accent-tertiary', accentTertiary);
    document.documentElement.style.setProperty('--accent-on-accent', getContrastColor(accentColor));
    document.documentElement.style.setProperty('--accent-cta', accentCta);
    document.documentElement.style.setProperty('--accent-cta-contrast', getContrastColor(accentCta));
    // Accent tint for dark section backgrounds: accent at 4% on black
    const ah = String(accentColor).replace(/^#/, '');
    if (ah.length === 6) {
      const r = parseInt(ah.slice(0, 2), 16);
      const g = parseInt(ah.slice(2, 4), 16);
      const b = parseInt(ah.slice(4, 6), 16);
      document.documentElement.style.setProperty('--bg-accent-tint', `rgba(${r},${g},${b},0.04)`);
    }
  }, [accentColor, accentSecondary, accentTertiary, accentCta]);

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
      bgColor, setBgColor,
      palette: PALETTE,
      bgPalette: BG_PALETTE,
    }}>
      {children}
    </ColorContext.Provider>
  );
}

export function useColor() {
  const context = useContext(ColorContext);
  return context;
}
