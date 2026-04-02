import React from 'react';
import { Link } from 'react-router-dom';
import HeaderV2 from '../components/HeaderV2';
import FooterV2 from '../components/FooterV2';
import PageFaqSectionV2 from '../components/PageFaqSectionV2';
import heroImage from '../assets/hero-liberty.jpg';

const featureCards = [
  {
    title: 'Fortress-Grade Secure',
    desc: '24/7 biometric access, AI-monitored surveillance, and individual unit alarms for peace of mind.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'Truly Local',
    desc: "Located in the heart of your neighborhood — walk, don't drive.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: 'Modern Tech',
    desc: 'Digital keys and remote monitoring via our mobile app.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
];

const steps = [
  {
    title: 'Find',
    desc: 'Enter your zip code and browse available premium units in your immediate neighborhood.',
    num: '01',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    title: 'Book',
    desc: 'Select your size and sign your lease digitally in under 60 seconds. No hidden fees, ever.',
    num: '02',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Stash',
    desc: "Move in whenever you're ready using your instant mobile key. Your space is waiting.",
    num: '03',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
];

const sizingOptions = [
  { label: 'The Closet (5x5)', desc: 'Perfect for seasonal gear and up to 10 boxes.', size: 'S' },
  { label: 'The Studio (5x10)', desc: 'Fits a standard bedroom or studio apartment items.', size: 'M' },
  { label: 'The Loft (10x10)', desc: 'Room for furniture, appliances, or a small move.', size: 'L' },
];

const testimonials = [
  { quote: "The cleanest storage facility I've ever seen. It feels more like a high-end gym than a warehouse. Booking was a breeze.", name: 'James R.', location: 'Upper East Side, NY' },
  { quote: "Urban Stash saved my studio apartment. Being able to access my gear 24/7 with just my phone is a game changer.", name: 'Sarah L.', location: 'Brooklyn Heights, NY' },
  { quote: "The climate control is excellent. I store my vintage record collection here and never worry about the humidity.", name: 'Marcus T.', location: 'Silver Lake, CA' },
];

const trustPartners = ['THE PIER', 'SOHO HOUSE', 'URBAN LOFT', 'METRO PK', 'SKYLINE'];

export default function HomePageV2() {
  return (
    <div className="min-h-screen bg-black text-white">
      <HeaderV2 />
      <main>
        {/* ── Hero ── */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
          {/* Background image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImage})` }}
          />
          {/* Dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
          <div className="gradient-orb w-[600px] h-[600px] -top-40 -right-40 z-[1]" />
          <div className="gradient-orb-cta w-[400px] h-[400px] bottom-20 -left-32 z-[1]" />
          <div className="relative z-10 max-w-5xl mx-auto px-4 text-center py-24">
            <span className="inline-block px-4 py-1.5 rounded-full glass-card text-white/70 text-xs font-semibold uppercase tracking-widest mb-10 border border-white/10">
              NYC's modern storage experience
            </span>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight leading-[0.95] mb-8 drop-shadow-lg">
              Storage that
              <br />
              <span className="text-accent">lives where</span>
              <br />
              you do
            </h1>
            <p className="text-lg md:text-xl text-white/70 mb-12 max-w-xl mx-auto leading-relaxed">
              No more weekend trips to sketchy warehouses. Book online, access anytime, and never leave your neighborhood.
            </p>
            <Link to="/units" className="inline-flex items-center gap-2 px-8 py-4 bg-accent-cta text-accent-cta-contrast font-bold rounded-full text-base hover:opacity-90 shadow-lg">
              Find storage
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </section>

        {/* ── Trust bar ── */}
        <section className="bg-charcoal py-10 px-4 md:px-6 border-t border-white/[0.04]">
          <div className="max-w-5xl mx-auto">
            <p className="text-center text-zinc-600 text-xs uppercase tracking-[0.25em] font-semibold mb-6">Trusted by residents across</p>
            <div className="flex flex-wrap justify-center gap-x-12 gap-y-3">
              {trustPartners.map((p) => (
                <span key={p} className="text-zinc-500 font-bold text-sm tracking-wider">{p}</span>
              ))}
            </div>
          </div>
        </section>

        {/* ── Features ── */}
        <section className="bg-charcoal py-24 px-4 md:px-6 relative overflow-hidden">
          <div className="gradient-orb w-[500px] h-[500px] top-10 right-0 opacity-10" />
          <div className="relative max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div className="lg:sticky lg:top-28">
                <p className="text-accent text-xs font-bold uppercase tracking-widest mb-4">Why Urban Stash</p>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-[0.95] mb-6">
                  The storage
                  <br />
                  experience
                  <br />
                  <span className="text-accent">you deserve.</span>
                </h2>
                <p className="text-zinc-400 text-lg mb-8 leading-relaxed max-w-md">
                  We&apos;ve reimagined self-storage to fit into your modern lifestyle — clean, secure, and completely effortless.
                </p>
                <Link to="/units" className="text-accent font-semibold inline-flex items-center gap-2 group text-sm">
                  Explore all features
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
              <div className="space-y-4">
                {featureCards.map((card, i) => (
                  <div key={i} className="p-6 rounded-2xl glass-card hover:bg-white/[0.07] group flex gap-5">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:text-on-accent transition-colors">
                      {card.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-white mb-1.5">{card.title}</h3>
                      <p className="text-zinc-400 text-sm leading-relaxed">{card.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Testimonials ── */}
        <section className="bg-black py-24 px-4 md:px-6 relative">
          <div className="gradient-orb-cta w-[500px] h-[500px] -top-20 left-1/2 -translate-x-1/2" />
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-accent text-xs font-bold uppercase tracking-widest mb-4">Testimonials</p>
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-4">
                Trusted by the <span className="text-accent">neighborhood</span>
              </h2>
              <div className="inline-flex items-center gap-2 text-zinc-500 text-sm font-medium">
                <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                4.9/5 on Google Reviews &middot; 500+ happy neighbors
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((t, i) => (
                <div key={i} className="p-6 rounded-2xl glass-card hover:bg-white/[0.07] flex flex-col">
                  <div className="text-accent text-4xl font-serif leading-none mb-4">&ldquo;</div>
                  <p className="text-zinc-300 text-sm leading-relaxed flex-1 mb-6">{t.quote}</p>
                  <div className="flex items-center gap-3 pt-4 border-t border-white/[0.06]">
                    <div className="w-9 h-9 rounded-full bg-accent/15 text-accent flex items-center justify-center font-bold text-sm">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-white text-sm">{t.name}</p>
                      <p className="text-xs text-zinc-500">{t.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Sizing teaser ── */}
        <section className="bg-accent-tint py-24 px-4 md:px-6 border-t border-white/[0.04] relative overflow-hidden">
          <div className="gradient-orb w-[400px] h-[400px] -bottom-20 right-10" />
          <div className="relative max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="rounded-2xl aspect-[4/3] overflow-hidden bg-zinc-900 border border-white/[0.06]">
                <img
                  src={`${process.env.PUBLIC_URL || ''}/images/sizing-cart.png`}
                  alt="Urban Stash storage cart"
                  className="w-full h-full object-cover"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
              </div>
              <div>
                <p className="text-accent text-xs font-bold uppercase tracking-widest mb-4">Storage sizes</p>
                <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight leading-[0.95] mb-6">
                  Not sure
                  <br />
                  <span className="text-accent">what size</span>
                  <br />
                  you need?
                </h2>
                <p className="text-zinc-400 mb-10 leading-relaxed max-w-md">
                  We&apos;ve simplified our sizing into three intuitive categories — Small, Medium, and Large — to help you choose the perfect fit.
                </p>
                <div className="space-y-3 mb-8">
                  {sizingOptions.map((opt, i) => (
                    <Link key={i} to="/sizing" className="flex items-center gap-4 p-4 rounded-xl glass-card hover:bg-white/[0.07] group">
                      <div className="w-11 h-11 rounded-lg bg-accent text-on-accent flex items-center justify-center font-bold text-sm flex-shrink-0">
                        {opt.size}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-bold text-white text-sm">{opt.label}</p>
                        <p className="text-xs text-zinc-500 mt-0.5">{opt.desc}</p>
                      </div>
                      <svg className="w-5 h-5 text-zinc-600 group-hover:text-accent group-hover:translate-x-0.5 transition-all flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  ))}
                </div>
                <Link to="/sizing" className="inline-flex items-center gap-2 text-accent font-semibold group text-sm">
                  Full sizing guide
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── How it works ── */}
        <section className="bg-accent-tint py-24 px-4 md:px-6 border-t border-white/[0.04] relative overflow-hidden">
          <div className="gradient-orb-cta w-[400px] h-[400px] top-0 left-1/2 -translate-x-1/2 opacity-10" />
          <div className="relative max-w-5xl mx-auto text-center">
            <p className="text-accent text-xs font-bold uppercase tracking-widest mb-4">How it works</p>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-4 text-white">
              Simple. Human. <span className="text-accent">Urban.</span>
            </h2>
            <p className="text-zinc-500 mb-16 text-lg">Three steps to a more spacious life.</p>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              {steps.map((step, i) => (
                <div key={i} className="relative p-8 rounded-2xl glass-card-strong hover:bg-white/[0.08] group">
                  <span className="absolute top-6 right-6 text-6xl font-black text-white/[0.04] leading-none select-none">{step.num}</span>
                  <div className="w-12 h-12 rounded-xl bg-accent/15 text-accent flex items-center justify-center mb-5 group-hover:bg-accent group-hover:text-on-accent transition-colors">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-black text-white uppercase tracking-tight mb-2">{step.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <PageFaqSectionV2 />
      </main>
      <FooterV2 />
    </div>
  );
}
