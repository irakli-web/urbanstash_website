import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

export const HEADING_FONT_CHOICES = [
  { id: 'inherit', label: '— Same as title —', family: 'inherit', googleHref: null },
  { id: 'site', label: 'Site default', family: 'var(--font-site)', googleHref: null },
  {
    id: 'urban-soft',
    label: 'Urbanstash Soft',
    family: "'Urbanstash Soft', 'SV Basic Manual', 'Courier New', Courier, monospace",
    googleHref: null,
  },
  {
    id: 'din-1451-alt',
    label: 'DIN 1451 Alt',
    family: "'DIN 1451 Alt', sans-serif",
    googleHref: null,
  },
  {
    id: 'little-kids-handwriting',
    label: 'Little Kids Handwriting',
    family: "'Little Kids Handwriting', cursive",
    googleHref: null,
  },
  {
    id: 'sv-basic',
    label: 'SV Basic Manual',
    family: "'SV Basic Manual', 'Courier New', Courier, monospace",
    googleHref: null,
  },
  { id: 'courier', label: 'Courier New', family: "'Courier New', Courier, monospace", googleHref: null },
  { id: 'georgia', label: 'Georgia (system)', family: "Georgia, 'Times New Roman', serif", googleHref: null },
  { id: 'system-ui', label: 'System UI', family: 'system-ui, -apple-system, BlinkMacSystemFont, sans-serif', googleHref: null },
  {
    id: 'permanent-marker',
    label: 'Permanent Marker',
    family: "'Permanent Marker', cursive",
    googleHref: 'https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap',
  },
  {
    id: 'bebas-neue',
    label: 'Bebas Neue',
    family: "'Bebas Neue', sans-serif",
    googleHref: 'https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap',
  },
  {
    id: 'space-grotesk',
    label: '★ Space Grotesk',
    family: "'Space Grotesk', sans-serif",
    googleHref: 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;600;700&display=swap',
  },
  {
    id: 'syne',
    label: 'Syne',
    family: "'Syne', sans-serif",
    googleHref: 'https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&display=swap',
  },
  {
    id: 'fraunces',
    label: 'Fraunces',
    family: "'Fraunces', serif",
    googleHref: 'https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,700&display=swap',
  },
  {
    id: 'dm-serif-display',
    label: 'DM Serif Display',
    family: "'DM Serif Display', serif",
    googleHref: 'https://fonts.googleapis.com/css2?family=DM+Serif+Display&display=swap',
  },
  {
    id: 'archivo-black',
    label: 'Archivo Black',
    family: "'Archivo Black', sans-serif",
    googleHref: 'https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap',
  },
  {
    id: 'jetbrains-mono',
    label: 'JetBrains Mono',
    family: "'JetBrains Mono', monospace",
    googleHref: 'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;600;700&display=swap',
  },
  {
    id: 'source-code-pro',
    label: 'Source Code Pro',
    family: "'Source Code Pro', monospace",
    googleHref: 'https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@400;600;700&display=swap',
  },
  {
    id: 'ibm-plex-mono',
    label: 'IBM Plex Mono',
    family: "'IBM Plex Mono', monospace",
    googleHref: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;600;700&display=swap',
  },
  {
    id: 'universal-typeface',
    label: '★ Noto Sans',
    family: "'Noto Sans', sans-serif",
    googleHref: 'https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;600;700&display=swap',
  },
  {
    id: 'noto-sans-regular',
    label: 'Noto Sans Regular',
    family: "'Noto Sans', sans-serif",
    googleHref: 'https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400&display=swap',
  },
  {
    id: 'noto-sans-medium',
    label: 'Noto Sans Medium',
    family: "'Noto Sans', sans-serif",
    googleHref: 'https://fonts.googleapis.com/css2?family=Noto+Sans:wght@500&display=swap',
  },
  {
    id: 'manrope',
    label: '★ Manrope',
    family: "'Manrope', sans-serif",
    googleHref: 'https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&display=swap',
  },
  {
    id: 'plus-jakarta-sans',
    label: '★ Plus Jakarta Sans',
    family: "'Plus Jakarta Sans', sans-serif",
    googleHref: 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap',
  },
  {
    id: 'general-sans',
    label: '★ General Sans',
    family: "'General Sans', sans-serif",
    googleHref: 'https://api.fontshare.com/v2/css?f[]=general-sans@400,500,600,700&display=swap',
  },
  {
    id: 'instrument-sans',
    label: '★ Instrument Sans',
    family: "'Instrument Sans', sans-serif",
    googleHref: 'https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600;700&display=swap',
  },
  {
    id: 'barlow-condensed',
    label: '★ Barlow Condensed',
    family: "'Barlow Condensed', sans-serif",
    googleHref: 'https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600;700&display=swap',
  },
];

const DEFAULTS = {
  heroTitle:    'urban-soft',
  heroSubtitle: 'site',
  cta:          'site',
  nav:          'site',
  footer:       'site',
  body:         'site',
  h1:           'site',
  h2:           'site',
  h3:           'site',
  sectionMix:   'inherit',
};

const LS_KEYS = {
  heroTitle:    'urbanstash-font-hero-title',
  heroSubtitle: 'urbanstash-font-hero-subtitle',
  cta:          'urbanstash-font-cta',
  nav:          'urbanstash-font-nav',
  footer:       'urbanstash-font-footer',
  body:         'urbanstash-font-body',
  h1:           'urbanstash-font-h1',
  h2:           'urbanstash-font-h2',
  h3:           'urbanstash-font-h3',
  sectionMix:   'urbanstash-font-section-mix',
};

const CSS_VARS = {
  heroTitle:    '--font-hero-title',
  heroSubtitle: '--font-hero-subtitle',
  cta:          '--font-cta',
  nav:          '--font-nav',
  footer:       '--font-footer',
  body:         '--font-body',
  h1:           '--font-h1',
  h2:           '--font-h2',
  h3:           '--font-h3',
  sectionMix:   '--font-section-mix',
};

const HERO_VERSION_KEY       = 'urbanstash-hero-version';
const HERO_TITLE_COLOR_KEY   = 'urbanstash-hero-title-color';
const HERO_SUB_COLOR_KEY     = 'urbanstash-hero-sub-color';
const HERO_TITLE_SIZE_KEY    = 'urbanstash-hero-title-size';
const HERO_SUB_SIZE_KEY      = 'urbanstash-hero-sub-size';

function loadStylesheetOnce(elementId, href) {
  if (typeof document === 'undefined' || document.getElementById(elementId)) return;
  const link = document.createElement('link');
  link.id = elementId;
  link.rel = 'stylesheet';
  link.href = href;
  document.head.appendChild(link);
}

function isValidChoiceId(id) {
  return HEADING_FONT_CHOICES.some((c) => c.id === id);
}

function readStored(key, fallback) {
  try {
    const v = localStorage.getItem(key);
    if (v && isValidChoiceId(v)) return v;
  } catch {}
  return fallback;
}

const HeadingFontContext = createContext(null);

export function HeadingFontProvider({ children }) {
  const [heroTitle,    setHeroTitleState]    = useState(() => readStored(LS_KEYS.heroTitle,    DEFAULTS.heroTitle));
  const [heroSubtitle, setHeroSubtitleState] = useState(() => readStored(LS_KEYS.heroSubtitle, DEFAULTS.heroSubtitle));
  const [cta,          setCtaState]          = useState(() => readStored(LS_KEYS.cta,          DEFAULTS.cta));
  const [nav,          setNavState]          = useState(() => readStored(LS_KEYS.nav,          DEFAULTS.nav));
  const [footer,       setFooterState]       = useState(() => readStored(LS_KEYS.footer,       DEFAULTS.footer));
  const [body,         setBodyState]         = useState(() => readStored(LS_KEYS.body,         DEFAULTS.body));
  const [h1,           setH1State]           = useState(() => readStored(LS_KEYS.h1,           DEFAULTS.h1));
  const [h2,           setH2State]           = useState(() => readStored(LS_KEYS.h2,           DEFAULTS.h2));
  const [h3,           setH3State]           = useState(() => readStored(LS_KEYS.h3,           DEFAULTS.h3));
  const [sectionMix,   setSectionMixState]   = useState(() => readStored(LS_KEYS.sectionMix,   DEFAULTS.sectionMix));
  const [heroVersion,      setHeroVersionState]     = useState(() => { try { return localStorage.getItem(HERO_VERSION_KEY) || 'split'; } catch { return 'split'; } });
  const [heroTitleColor,   setHeroTitleColorState]  = useState(() => { try { return localStorage.getItem(HERO_TITLE_COLOR_KEY) || ''; } catch { return ''; } });
  const [heroSubColor,     setHeroSubColorState]    = useState(() => { try { return localStorage.getItem(HERO_SUB_COLOR_KEY)   || ''; } catch { return ''; } });
  const [heroTitleSize,    setHeroTitleSizeState]   = useState(() => { try { return localStorage.getItem(HERO_TITLE_SIZE_KEY)  || ''; } catch { return ''; } });
  const [heroSubSize,      setHeroSubSizeState]     = useState(() => { try { return localStorage.getItem(HERO_SUB_SIZE_KEY)    || ''; } catch { return ''; } });

  const setHeroTitle    = useCallback((id) => { if (!isValidChoiceId(id)) return; setHeroTitleState(id);    try { localStorage.setItem(LS_KEYS.heroTitle,    id); } catch {} }, []);
  const setHeroSubtitle = useCallback((id) => { if (!isValidChoiceId(id)) return; setHeroSubtitleState(id); try { localStorage.setItem(LS_KEYS.heroSubtitle, id); } catch {} }, []);
  const setCta          = useCallback((id) => { if (!isValidChoiceId(id)) return; setCtaState(id);          try { localStorage.setItem(LS_KEYS.cta,          id); } catch {} }, []);
  const setNav          = useCallback((id) => { if (!isValidChoiceId(id)) return; setNavState(id);          try { localStorage.setItem(LS_KEYS.nav,          id); } catch {} }, []);
  const setFooter       = useCallback((id) => { if (!isValidChoiceId(id)) return; setFooterState(id);       try { localStorage.setItem(LS_KEYS.footer,       id); } catch {} }, []);
  const setBody         = useCallback((id) => { if (!isValidChoiceId(id)) return; setBodyState(id);         try { localStorage.setItem(LS_KEYS.body,         id); } catch {} }, []);
  const setH1           = useCallback((id) => { if (!isValidChoiceId(id)) return; setH1State(id);           try { localStorage.setItem(LS_KEYS.h1,           id); } catch {} }, []);
  const setH2           = useCallback((id) => { if (!isValidChoiceId(id)) return; setH2State(id);           try { localStorage.setItem(LS_KEYS.h2,           id); } catch {} }, []);
  const setH3           = useCallback((id) => { if (!isValidChoiceId(id)) return; setH3State(id);           try { localStorage.setItem(LS_KEYS.h3,           id); } catch {} }, []);
  const setSectionMix   = useCallback((id) => { if (!isValidChoiceId(id)) return; setSectionMixState(id);   try { localStorage.setItem(LS_KEYS.sectionMix,   id); } catch {} }, []);
  const setHeroVersion     = useCallback((v) => { setHeroVersionState(v);    try { localStorage.setItem(HERO_VERSION_KEY,     v); } catch {} }, []);
  const setHeroTitleColor  = useCallback((v) => { setHeroTitleColorState(v); try { localStorage.setItem(HERO_TITLE_COLOR_KEY, v); } catch {} }, []);
  const setHeroSubColor    = useCallback((v) => { setHeroSubColorState(v);   try { localStorage.setItem(HERO_SUB_COLOR_KEY,   v); } catch {} }, []);
  const setHeroTitleSize   = useCallback((v) => { setHeroTitleSizeState(v);  try { localStorage.setItem(HERO_TITLE_SIZE_KEY,  v); } catch {} }, []);
  const setHeroSubSize     = useCallback((v) => { setHeroSubSizeState(v);    try { localStorage.setItem(HERO_SUB_SIZE_KEY,    v); } catch {} }, []);

  useEffect(() => {
    const entries = { heroTitle, heroSubtitle, cta, nav, footer, body, h1, h2, h3, sectionMix };
    for (const [key, choiceId] of Object.entries(entries)) {
      const choice = HEADING_FONT_CHOICES.find((c) => c.id === choiceId) || HEADING_FONT_CHOICES[0];
      if (choice.googleHref) loadStylesheetOnce(`heading-font-${choice.id}`, choice.googleHref);
      document.documentElement.style.setProperty(CSS_VARS[key], choice.family);
    }
  }, [heroTitle, heroSubtitle, cta, nav, footer, body, h1, h2, h3, sectionMix]);

  const value = useMemo(() => ({
    heroTitle, setHeroTitle,
    heroSubtitle, setHeroSubtitle,
    cta, setCta,
    nav, setNav,
    footer, setFooter,
    body, setBody,
    h1, setH1,
    h2, setH2,
    h3, setH3,
    sectionMix, setSectionMix,
    heroVersion, setHeroVersion,
    heroTitleColor, setHeroTitleColor,
    heroSubColor, setHeroSubColor,
    heroTitleSize, setHeroTitleSize,
    heroSubSize, setHeroSubSize,
    choices: HEADING_FONT_CHOICES,
  }), [heroTitle, heroSubtitle, cta, nav, footer, body, h1, h2, h3, sectionMix, heroVersion, heroTitleColor, heroSubColor, heroTitleSize, heroSubSize,
       setHeroTitle, setHeroSubtitle, setCta, setNav, setFooter, setBody, setH1, setH2, setH3, setSectionMix, setHeroVersion, setHeroTitleColor, setHeroSubColor, setHeroTitleSize, setHeroSubSize]);

  return <HeadingFontContext.Provider value={value}>{children}</HeadingFontContext.Provider>;
}

export function useHeadingFonts() {
  return useContext(HeadingFontContext);
}
