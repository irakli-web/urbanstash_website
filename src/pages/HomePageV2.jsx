import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HeaderV2 from '../components/HeaderV2';
import FooterV2 from '../components/FooterV2';
import heroImage from '../assets/hero-liberty.jpg';

const featureCards = [
  {
    title: 'Fortress-Grade Secure',
    desc: '24/7 biometric access, AI-monitored surveillance, and individual unit alarms for peace of mind.',
    icon: 'shield',
  },
  {
    title: 'Truly Local',
    desc: 'Located in the heart of your neighborhood.',
    icon: 'location',
  },
  {
    title: 'Modern Tech',
    desc: 'Digital keys and remote monitoring via app.',
    icon: 'tech',
  },
];

const steps = [
  {
    title: 'Find',
    desc: 'Enter your zip code and browse available premium units in your immediate neighborhood.',
    num: 1,
  },
  {
    title: 'Book',
    desc: 'Select your size and sign your lease digitally in under 60 seconds. No hidden fees, ever.',
    num: 2,
  },
  {
    title: 'Stash',
    desc: 'Move in whenever you\'re ready using your instant mobile key. Your space is waiting.',
    num: 3,
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
  const [email, setEmail] = useState('');

  return (
    <div className="min-h-screen bg-theme text-gray-900">
      <HeaderV2 />
      <main>
        {/* Hero Section - centered image with rounded corners */}
        <section className="max-w-7xl mx-auto px-4 py-8 md:px-6 md:py-10">
          <div className="relative min-h-[75vh] flex items-center justify-center overflow-hidden rounded-3xl w-full">
            <div className="absolute inset-0 bg-gradient-to-b from-slate-800/90 via-slate-900/80 to-slate-950" />
            <div
              className="absolute inset-0 bg-cover bg-center opacity-50"
              style={{ backgroundImage: `url(${heroImage})` }}
            />
            <div className="relative z-10 max-w-4xl mx-auto px-4 text-center py-24">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white tracking-tight leading-tight">
              STORAGE THAT LIVES
              <br />
              WHERE YOU DO
            </h1>
            <p className="text-base md:text-lg text-white/95 mb-10 max-w-2xl mx-auto font-normal">
              No more weekend trips to sketchy warehouses. Book online, access anytime, and never leave your neighborhood.
            </p>
            <div className="flex justify-center">
              <Link to="/units" className="px-8 py-4 bg-accent hover:opacity-90 text-white font-semibold rounded-2xl transition-colors">
                Find storage
              </Link>
            </div>
          </div>
        </div>
        </section>

        {/* Trusted By */}
        <section className="py-12 px-4 md:px-6 border-b border-gray-200">
          <div className="max-w-7xl mx-auto">
          <p className="text-center text-gray-500 text-sm uppercase tracking-wider mb-6">Trusted by residents across</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {trustPartners.map((partner) => (
              <span key={partner} className="text-gray-700 font-semibold text-sm uppercase tracking-wide">
                {partner}
            </span>
          ))}
          </div>
          </div>
        </section>

        {/* The storage experience / Features */}
        <section className="py-20 px-4 md:px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold mb-4">
                  The storage experience <br />
                  <span className="text-accent">you actually deserve.</span>
                </h2>
                <p className="text-gray-600 mb-6">
                  We've reimagined self-storage to fit into your modern lifestyle—clean, secure, and completely effortless.
                </p>
                <Link to="/units" className="text-accent font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all">
                  Explore all features
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
              <div className="grid gap-6">
                {featureCards.map((card, i) => (
                  <div key={i} className="p-6 rounded-2xl bg-gray-50 border border-gray-100 flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/15 flex items-center justify-center flex-shrink-0">
                      {card.icon === 'shield' && (
                        <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      )}
                      {card.icon === 'location' && (
                        <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      )}
                      {card.icon === 'tech' && (
                        <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      )}
                      {card.icon === 'logistics' && (
                        <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      )}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">{card.title}</h3>
                      <p className="text-gray-600 text-sm">{card.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Trusted by the neighborhood */}
        <section className="py-20 px-4 md:px-6 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">Trusted by the neighborhood</h2>
            <div className="flex justify-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2.5 text-gray-600 text-sm font-medium">
                <svg className="w-5 h-5 text-amber-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                4.9/5 stars on Google Reviews with 500+ happy neighbors
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((t, i) => (
                <div key={i} className="p-6 rounded-2xl bg-white shadow-sm border border-gray-100">
                  <div className="flex gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4">&ldquo;{t.quote}&rdquo;</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 font-bold text-sm">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{t.name}</p>
                      <p className="text-sm text-gray-500">{t.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sizing Section */}
        <section className="py-20 px-4 md:px-6 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="rounded-2xl aspect-[4/3] overflow-hidden bg-gray-100">
                <img
                  src={`${process.env.PUBLIC_URL || ''}/images/sizing-cart.png`}
                  alt="Urban Stash storage cart with packages"
                  className="w-full h-full object-cover"
                  onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling?.classList.remove('hidden'); }}
                />
                <span className="hidden w-full h-full flex items-center justify-center text-gray-500 bg-gray-200">Storage cart image</span>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Not sure what size you need?</h2>
                <p className="text-gray-600 mb-6">
                  We've simplified our sizing into three intuitive categories—Small, Medium, and Large—to help you choose the perfect fit for your lifestyle.
                </p>
                <div className="space-y-3 mb-6">
                  {sizingOptions.map((opt, i) => (
                    <Link key={i} to="/sizing" className="flex items-center gap-4 p-4 rounded-xl bg-white border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all group">
                      <div className="w-10 h-10 rounded-lg bg-accent text-white flex items-center justify-center font-bold text-sm">
                        {opt.size}
                      </div>
                      <div className="flex-1">
                        <p className="font-bold text-gray-900">{opt.label}</p>
                        <p className="text-sm text-gray-500">{opt.desc}</p>
                      </div>
                      <svg className="w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  ))}
                </div>
                <Link to="/sizing" className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all">
                  Sizing Guide
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="py-20 px-4 md:px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">
              Simple. Human. Urban.
            </h2>
            <p className="text-center text-gray-600 mb-16">Three steps to a more spacious life.</p>
            <div className="grid md:grid-cols-3 gap-8">
              {steps.map((step, i) => (
                <div key={i} className="relative">
                  <div className="absolute -top-2 -left-2 text-7xl font-bold text-gray-100/80">{step.num}</div>
                  <div className="relative p-6">
                    <div className="w-14 h-14 rounded-2xl bg-gray-100 flex items-center justify-center mb-4">
                      <svg className="w-7 h-7 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        {step.icon === 'search' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />}
                        {step.icon === 'calendar' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />}
                        {step.icon === 'box' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10m8-4v-10l-8-4" />}
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20 px-4 md:px-6 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently asked questions</h2>
            <div className="space-y-4">
              {[
                { q: 'How do I access my storage unit?', a: 'Use our app for instant digital key access 24/7. Simply tap to unlock your unit—no physical keys needed.' },
                { q: 'What sizes are available?', a: 'We offer sizes from 5×5 (The Closet) to 10×20, plus larger options. Use our Sizing Guide to find your perfect fit.' },
                { q: 'Is there climate control?', a: 'Yes. All units are climate-controlled to protect your belongings from humidity and temperature extremes.' },
                { q: 'How far in advance can I book?', a: 'You can reserve a unit online anytime. Same-day booking is available at most locations.' },
                { q: 'Can I change or cancel my reservation?', a: 'Yes. Modify or cancel through the app or your account. Our flexible plans let you adjust as your needs change.' },
              ].map((faq, i) => (
                <details key={i} className="group rounded-xl border border-gray-200 bg-gray-50/50 overflow-hidden">
                  <summary className="px-6 py-4 cursor-pointer font-semibold text-gray-900 hover:bg-gray-50 transition-colors list-none flex justify-between items-center">
                    <span>{faq.q}</span>
                    <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-4 pt-0 text-gray-600 text-sm">{faq.a}</div>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>
      <FooterV2 />
    </div>
  );
}
