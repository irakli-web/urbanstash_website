import React from 'react';
import { Link } from 'react-router-dom';
import HeaderV2 from '../components/HeaderV2';
import FooterV2 from '../components/FooterV2';
import PageFaqSectionV2 from '../components/PageFaqSectionV2';
import { locations } from '../data/locations';

const FACILITY_IMG =
  'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=800&fit=crop&q=80';

export default function UnitsPageV2() {
  return (
    <div className="min-h-screen bg-black text-white">
      <HeaderV2 showFindStorage={false} />
      <main>
        {/* ── Hero header ── */}
        <section className="relative py-20 md:py-28 px-4 md:px-6 overflow-hidden">
          <div className="gradient-orb w-[500px] h-[500px] -top-32 right-0" />
          <div className="relative max-w-7xl mx-auto">
            <nav className="text-sm text-zinc-600 mb-6 flex items-center gap-1.5">
              <Link to="/" className="hover:text-accent">Home</Link>
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              <span className="text-zinc-400 font-medium">Units</span>
            </nav>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight leading-[0.95] mb-4">
              Available units
              <br />
              in <span className="text-accent">NYC</span>
            </h1>
            <p className="text-zinc-500 text-lg">{locations.length} location{locations.length !== 1 && 's'} found</p>
          </div>
        </section>

        {/* ── Location cards ── */}
        <section className="bg-charcoal py-16 md:py-20 px-4 md:px-6 border-t border-white/[0.04] relative overflow-hidden">
          <div className="gradient-orb-cta w-[400px] h-[400px] bottom-0 -right-20" />
          <div className="relative max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8 lg:gap-10">
              <div className="lg:col-span-2 space-y-6">
                {locations.map((loc) => {
                  const smallUnit = loc.units.find((u) => u.sqft <= 24);
                  const mediumUnit = loc.units.find((u) => u.sqft > 24 && u.sqft <= 50);
                  const largeUnit = loc.units.find((u) => u.sqft > 50);
                  return (
                    <article key={loc.id} className="rounded-2xl glass-card-strong hover:bg-white/[0.08] overflow-hidden group">
                      <div className="p-6 md:p-8">
                        <div className="flex flex-col sm:flex-row gap-5 mb-5">
                          <div className="w-full sm:w-36 h-36 flex-shrink-0 rounded-xl overflow-hidden bg-zinc-900 border border-white/[0.06]">
                            <img src={FACILITY_IMG} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h2 className="text-lg md:text-xl font-bold text-white mb-1">{loc.name}</h2>
                            <p className="text-zinc-500 text-sm flex items-start gap-1.5 mb-3">
                              <svg className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg>
                              {loc.address}
                            </p>
                            <div className="flex items-center gap-2 mb-4">
                              <div className="flex text-accent">
                                {[1, 2, 3, 4, 5].map((s) => (
                                  <svg key={s} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                  </svg>
                                ))}
                              </div>
                              <span className="text-xs font-medium text-zinc-500">{loc.reviewCount} verified reviews</span>
                            </div>
                            <blockquote className="text-zinc-400 text-sm italic border-l-2 border-accent/30 pl-3">
                              &ldquo;{loc.featuredReview.text}&rdquo;
                              <span className="block not-italic font-semibold text-zinc-300 mt-1.5 text-xs">{loc.featuredReview.author}</span>
                            </blockquote>
                          </div>
                        </div>

                        <div className="grid grid-cols-3 gap-2.5 mb-5">
                          {[
                            { label: 'Small', unit: smallUnit },
                            { label: 'Medium', unit: mediumUnit },
                            { label: 'Large', unit: largeUnit },
                          ].filter((x) => x.unit).map(({ label, unit }) => (
                            <div key={label} className="rounded-xl border border-white/[0.06] bg-white/[0.03] p-3.5 hover:border-accent/20 transition-colors">
                              <p className="text-[11px] font-bold text-zinc-500 uppercase tracking-wider mb-0.5">{label}</p>
                              <p className="text-base font-bold text-white">from ${unit.price}<span className="text-xs font-normal text-zinc-500">/mo</span></p>
                              <p className="text-[11px] text-zinc-500 mt-1 font-mono">{unit.size}</p>
                              <p className="text-[11px] font-bold text-accent mt-1.5 uppercase tracking-wider">Available</p>
                            </div>
                          ))}
                        </div>

                        <Link
                          to={`/units/${loc.slug}`}
                          className="block w-full text-center py-3.5 bg-accent-cta text-accent-cta-contrast font-bold rounded-full hover:opacity-90"
                        >
                          Check availability
                        </Link>
                      </div>
                    </article>
                  );
                })}
              </div>

              <aside className="lg:col-span-1 hidden lg:block">
                <div className="sticky top-24 rounded-2xl glass-card-strong min-h-[480px] flex flex-col items-center justify-center p-6 text-center overflow-hidden">
                  <div className="w-10 h-10 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center mb-4">
                    <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <p className="text-zinc-400 text-sm font-medium mb-1">Interactive map</p>
                  <p className="text-zinc-600 text-xs">Coming soon</p>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <PageFaqSectionV2 />
      </main>
      <FooterV2 />
    </div>
  );
}
