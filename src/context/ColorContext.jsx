import React, { createContext, useContext, useState, useEffect } from 'react';

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

const DEFAULT_ACCENT = '#99fe1c';
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
      accentSecondary, accentTertiary,
      accentCta,
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
