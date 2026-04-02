import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HeaderV2 from '../components/HeaderV2';
import FooterV2 from '../components/FooterV2';
import PageFaqSectionV2 from '../components/PageFaqSectionV2';
import { sizes, whyStashItems } from '../data/sizes';

const SIZE_DESCRIPTION = {
  Small:
    "Our Small units are ideal for compact storage needs. These units are efficiently designed and double-stacked, making them perfect for items that store well vertically. Store moving boxes, suitcases, seasonal clothing, holiday decorations, shoes, documents, and other compact belongings you don't need daily.",
  Medium:
    'Medium units balance footprint with flexibility — think apartment extras, furniture, bikes, and gear you rotate through the seasons. Enough room to breathe without a long trek to the suburbs.',
  Large:
    'Large units are built for studio overflow, bigger moves, and life transitions. When you need serious square footage without leaving the neighborhood, this is your category.',
};

const WHY_ICONS = [
  <svg key="pin" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
  <svg key="phone" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>,
  <svg key="shield" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
];

export default function SizingPageV2() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = sizes[activeIndex];
  const category = active.category;

  return (
    <div className="min-h-screen bg-black text-white">
      <HeaderV2 />
      <main>
        {/* ── Hero ── */}
        <section className="relative py-24 md:py-32 px-4 md:px-6 overflow-hidden">
          <div className="gradient-orb w-[500px] h-[500px] top-0 -right-32" />
          <div className="relative max-w-5xl mx-auto text-center">
            <p className="text-accent text-xs font-bold uppercase tracking-widest mb-6">Sizing guide</p>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight leading-[0.95] mb-8">
              Find your
              <br />
              <span className="text-accent">perfect fit</span>
            </h1>
            <p className="text-zinc-400 text-lg md:text-xl mb-12 max-w-lg mx-auto leading-relaxed">
              From micro units for holiday decorations to spacious rooms for your entire apartment — sized for how you actually live in the city.
            </p>
            <Link
              to="/units"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent-cta text-accent-cta-contrast font-bold rounded-full text-base hover:opacity-90"
            >
              Find storage
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </section>

        {/* ── Storage unit guide ── */}
        <section className="bg-charcoal py-20 md:py-24 px-4 md:px-6 border-t border-white/[0.04] relative overflow-hidden">
          <div className="gradient-orb-cta w-[400px] h-[400px] -bottom-20 -left-20" />
          <div className="relative max-w-7xl mx-auto">
            <p className="text-accent text-xs font-bold uppercase tracking-widest text-center mb-3">Browse units</p>
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-center mb-14">
              Storage unit <span className="text-accent">guide</span>
            </h2>
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
              <div className="lg:col-span-5 xl:col-span-4 space-y-2 max-h-[520px] overflow-y-auto pr-1 scrollbar-hide">
                {sizes.map((s, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setActiveIndex(i)}
                    className={`w-full text-left rounded-xl border px-4 py-3.5 transition-all ${
                      activeIndex === i
                        ? 'border-accent/40 bg-accent/5 glass-card-strong ring-1 ring-accent/20'
                        : 'border-white/[0.06] hover:border-white/10 glass-card hover:bg-white/[0.05]'
                    }`}
                  >
                    <span className={`text-[11px] font-bold uppercase tracking-wider ${activeIndex === i ? 'text-accent' : 'text-zinc-500'}`}>{s.category}</span>
                    <p className="font-semibold text-white mt-0.5 text-sm">{s.dimensions}</p>
                    <p className="text-xs text-zinc-500 mt-0.5">{s.for}</p>
                  </button>
                ))}
              </div>
              <div className="lg:col-span-7 xl:col-span-8 flex flex-col">
                <div className="rounded-2xl overflow-hidden border border-white/[0.06] bg-zinc-900 aspect-video mb-6">
                  <div className="w-full h-full flex items-center justify-center text-zinc-600">
                    <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                  </div>
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase">{category}</span>
                  <span className="text-sm text-zinc-500 font-mono">{active.dimensions}</span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">{active.for}</h3>
                <p className="text-zinc-400 leading-relaxed mb-8">{SIZE_DESCRIPTION[category]}</p>
                <Link
                  to="/units"
                  className="inline-flex self-start items-center gap-2 px-7 py-3 bg-accent text-on-accent font-bold rounded-full hover:opacity-90"
                >
                  Find storage
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── Compare table ── */}
        <section className="bg-charcoal py-20 md:py-24 px-4 md:px-6 border-t border-white/[0.04]">
          <div className="max-w-5xl mx-auto overflow-x-auto">
            <p className="text-accent text-xs font-bold uppercase tracking-widest text-center mb-3">Side by side</p>
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-center mb-12">
              Compare <span className="text-accent">stash</span> sizes
            </h2>
            <div className="rounded-2xl border border-white/[0.06] overflow-hidden glass-card">
              <table className="w-full text-left text-sm min-w-[560px]">
                <thead>
                  <tr className="border-b border-white/[0.06]">
                    <th className="py-4 px-5 font-semibold text-zinc-500 text-xs uppercase tracking-wider">Size</th>
                    <th className="py-4 px-5 font-semibold text-zinc-500 text-xs uppercase tracking-wider">Dimensions</th>
                    <th className="py-4 px-5 font-semibold text-zinc-500 text-xs uppercase tracking-wider">Perfect for</th>
                  </tr>
                </thead>
                <tbody>
                  {sizes.map((s, i) => (
                    <tr
                      key={i}
                      className={`border-b border-white/[0.04] last:border-0 cursor-pointer hover:bg-white/[0.03] transition-colors ${activeIndex === i ? 'bg-accent/5' : ''}`}
                      onClick={() => setActiveIndex(i)}
                    >
                      <td className="py-3.5 px-5">
                        <span className="px-2.5 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold">{s.category}</span>
                      </td>
                      <td className="py-3.5 px-5 text-zinc-400 font-mono text-xs">{s.dimensions}</td>
                      <td className="py-3.5 px-5 text-zinc-300 font-medium">{s.for}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── Why stash ── */}
        <section className="bg-accent-tint py-24 px-4 md:px-6 border-t border-white/[0.04] relative overflow-hidden">
          <div className="gradient-orb w-[400px] h-[400px] bottom-0 left-0 opacity-10" />
          <div className="relative max-w-7xl mx-auto">
            <p className="text-accent text-xs font-bold uppercase tracking-widest text-center mb-3">The Urban Stash difference</p>
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-center mb-14 text-white">
              Why stash <span className="text-accent">with us</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {whyStashItems.map((item, i) => (
                <div key={i} className="text-center p-8 rounded-2xl glass-card-strong hover:bg-white/[0.08] group">
                  <div className="w-14 h-14 rounded-2xl bg-accent/15 text-accent flex items-center justify-center mx-auto mb-5 group-hover:bg-accent group-hover:text-on-accent transition-colors">
                    {WHY_ICONS[i]}
                  </div>
                  <h3 className="font-black text-white uppercase tracking-tight mb-2">{item.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <PageFaqSectionV2 />
      </main>
      <FooterV2 />
    </div>
  );
}
