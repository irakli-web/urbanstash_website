import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FaqSection from '../components/FaqSection';

const sections = [
  {
    title: 'Making storage personal',
    content:
      'Traditional storage treats everyone the same. We design each location to reflect its neighborhood. We get to know our stashers. We understand that your belongings matter to you, and we treat them as our own.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: 'Built by locals, for locals',
    content:
      "We live in the neighborhoods we serve. We navigate the same narrow hallways, deal with the same tiny closets, and understand why you need that bike but have nowhere to put it.\n\nOur local knowledge shapes everything we do. Each location is crafted for its specific neighborhood by people who actually live there.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: 'Storage that works for city life',
    content:
      "We believe storage should feel as easy and natural as having an extra closet down the block. That's why we design every location to be convenient, secure, and straightforward to use. Whether you're moving, decluttering, or just need more breathing room, we make storage simple.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: "Where we're headed",
    content:
      "We're reimagining what storage can be — accessible, local, and designed for the way city people actually live. One neighborhood at a time, we're building storage you'll want to use, because it makes your life easier. And we're just getting started.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
];

const IMG_TEAM = 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop&q=80';
const IMG_CITY = 'https://images.unsplash.com/photo-1449965408860-eaa67f0e8c0a?w=800&h=600&fit=crop&q=80';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-theme text-white">
      <Header />
      <main>
        {/* Hero */}
        <section className="hero-section relative py-28 md:py-40 px-4 md:px-6 overflow-hidden">
          <div className="gradient-orb w-[600px] h-[600px] -top-40 -left-40" />
          <div className="gradient-orb-cta w-[400px] h-[400px] bottom-0 right-0" />
          <div className="relative max-w-5xl mx-auto">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[6rem] font-black uppercase tracking-tight leading-[0.92] mb-8">
              Started
              <br />
              in the
              <br />
              <span className="text-accent">Neighborhood</span>
            </h1>
            <p className="hero-subtitle text-zinc-400 text-lg md:text-xl max-w-lg leading-relaxed mb-10">
              We wanted storage that felt close to home. Just a quick walk away, not an hour-long drive to some industrial park.
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

        {/* Image strip */}
        <section className="py-4 md:py-6 px-4 md:px-6">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-4 md:gap-6">
            <div className="rounded-2xl overflow-hidden aspect-[16/10] border border-white/[0.06] relative group">
              <img src={IMG_TEAM} alt="Team" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[16/10] border border-white/[0.06] relative group">
              <img src={IMG_CITY} alt="City life" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="bg-charcoal py-24 md:py-32 px-4 md:px-6 border-t border-white/[0.04] relative overflow-hidden">
          <div className="gradient-orb w-[500px] h-[500px] top-1/2 -translate-y-1/2 right-0" />
          <div className="relative max-w-4xl mx-auto">
            <p className="text-accent text-xs font-bold uppercase tracking-widest mb-4 text-center">Our story</p>
            <h2 className="section-title text-4xl md:text-5xl font-black uppercase tracking-tight text-center mb-20">
              What drives <span className="text-accent">us</span>
            </h2>
            <div className="space-y-0">
              {sections.map((section, i) => (
                <div key={i} className="relative pl-16 md:pl-20 pb-16 md:pb-20 last:pb-0 group">
                  {i < sections.length - 1 && (
                    <div className="absolute left-[26px] md:left-[30px] top-14 bottom-0 w-px bg-white/[0.06]" />
                  )}
                  <div className="absolute left-0 top-0 w-[52px] h-[52px] md:w-[60px] md:h-[60px] rounded-2xl glass-card-strong text-accent flex items-center justify-center group-hover:bg-accent group-hover:text-on-accent transition-colors">
                    {section.icon}
                  </div>
                  <span className="absolute left-16 md:left-20 top-0 text-7xl md:text-8xl font-black text-white/[0.03] leading-none select-none pointer-events-none">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h2 className="text-xl md:text-2xl font-black text-white uppercase tracking-tight mb-3 pt-2">
                    {section.title}
                  </h2>
                  <div className="text-zinc-400 leading-relaxed whitespace-pre-line">{section.content}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}
