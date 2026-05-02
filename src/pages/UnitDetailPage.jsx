import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LocationVideoCarousel from '../components/LocationVideoCarousel';
import { getLocationBySlug } from '../data/locations';
import imgFaithmtabo from '../assets/social/faithmtabo.png';
import imgJacqgilbertson from '../assets/social/jacqgilbertson.png';

const STAY_MONTHS = 12;

export default function UnitDetailPage() {
  const { slug } = useParams();
  const location = getLocationBySlug(slug);
  const [selectedSize, setSelectedSize] = useState('small');
  const [moveInDate, setMoveInDate] = useState('04/01/26');
  const [lightboxImg, setLightboxImg] = useState(null);

  if (!location) {
    return (
      <div className="min-h-screen bg-theme text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Location not found</h1>
          <Link to="/units" className="text-accent hover:underline">
            Back to locations
          </Link>
        </div>
      </div>
    );
  }

  const filteredUnits =
    selectedSize === 'small'
      ? location.units.filter((u) => u.sqft <= 24)
      : selectedSize === 'medium'
      ? location.units.filter((u) => u.sqft > 24 && u.sqft <= 50)
      : location.units.filter((u) => u.sqft > 50);

  return (
    <div className="min-h-screen bg-theme text-white">
      <Header showFindStorage={false} />
      <main>
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 py-4 text-sm text-zinc-600">
          <Link to="/" className="hover:text-white">Home</Link>
          <span className="mx-2">&rsaquo;</span>
          <Link to="/units" className="hover:text-white">Units</Link>
          <span className="mx-2">&rsaquo;</span>
          <span className="text-accent">{location.name}</span>
        </div>

        <div className="max-w-7xl mx-auto px-4 pb-12">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left column */}
            <div className="lg:col-span-2">
              <div className="rounded-2xl bg-charcoal h-64 flex items-center justify-center mb-6 border border-white/[0.06]">
                <span className="text-zinc-600">Gallery</span>
              </div>

              <h1 className="text-3xl font-black uppercase tracking-tight mb-2">{location.name}</h1>
              <p className="text-zinc-500 mb-4">{location.address}</p>
              <div className="flex items-center gap-2 mb-6">
                <span className="text-accent">&#9733;</span>
                <span className="text-zinc-500">{location.reviewCount} Reviews</span>
              </div>
              <div className="flex gap-4 mb-8">
                <Link to="/sizing" className="text-zinc-500 hover:text-accent text-sm">
                  Sizing guide
                </Link>
              </div>

              {/* Features */}
              <div className="mb-8">
                <h2 className="section-title text-lg font-bold text-accent uppercase tracking-wide mb-4">
                  Storage Facility Features
                </h2>
                <div className="grid grid-cols-2 gap-3">
                  {location.features.map((f, i) => (
                    <div key={i} className="flex items-center gap-2 text-zinc-400">
                      <svg className="w-5 h-5 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {f}
                    </div>
                  ))}
                </div>
              </div>

              {/* Hours */}
              <div className="mb-8">
                <h2 className="section-title text-lg font-bold text-accent uppercase tracking-wide mb-2">Access Hours</h2>
                <p className="text-zinc-400">{location.accessHours}</p>
              </div>

              {/* Availability */}
              <div className="mb-8">
                <h2 className="section-title text-xl font-black text-accent uppercase tracking-wide mb-4">Availability</h2>
                <div className="space-y-4">
                  {location.units.map((unit) => (
                    <div
                      key={unit.id}
                      className="flex items-center justify-between p-4 rounded-xl glass-card hover:bg-white/[0.06] transition-colors"
                    >
                      <div>
                        <p className="font-medium text-white">{unit.size} ({unit.sqft} sq ft)</p>
                        <p className="text-sm text-zinc-500">{unit.description}</p>
                      </div>
                      <p className="text-accent font-bold text-xl">${unit.price}/month</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* About */}
              <div className="mb-8">
                <h2 className="section-title text-lg font-bold text-accent uppercase tracking-wide mb-4">About this space</h2>
                <p className="text-zinc-400 leading-relaxed">{location.about}</p>
              </div>

              {location.videos?.length > 0 && (
                <LocationVideoCarousel
                  title="View our story & location videos"
                  items={location.videos}
                />
              )}

              {/* How it works */}
              <div className="mb-8">
                <h2 className="section-title text-lg font-bold text-accent uppercase tracking-wide mb-4">How It Works</h2>
                <div className="space-y-4">
                  {[
                    { t: 'Reserve Online', d: 'Choose your unit size and reserve for free. No credit card required upfront.' },
                    { t: 'Get Access', d: 'Receive your unique gate code and lock for instant access to your unit.' },
                    { t: 'Move-In', d: 'Complete your rental online or in-person. Bring your items to the facility.' },
                    { t: 'Manage Account', d: 'Pay bills, check history, and manage your rental from our mobile app.' },
                  ].map((step, i) => (
                    <div key={i} className="glass-card rounded-xl p-4 hover:bg-white/[0.06]">
                      <h3 className="font-semibold text-white mb-1">{step.t}</h3>
                      <p className="text-zinc-500 text-sm">{step.d}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social tags */}
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-1">
                  <h2 className="section-title text-lg font-bold text-accent uppercase tracking-wide">Recent stashers sharing</h2>
                </div>
                <p className="text-zinc-600 text-xs mb-4">Real posts from people who tagged us 🏷️</p>
                <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-1" style={{ scrollSnapType: 'x mandatory' }}>
                  {[
                    {
                      handle: 'faithmtabo',
                      avatar: 'F',
                      time: '1 hour ago',
                      tag: '@urbanstash_',
                      img: imgFaithmtabo,
                    },
                    {
                      handle: 'jacqgilbertson',
                      avatar: 'J',
                      time: '3 days ago',
                      tag: '@urbanstash_',
                      img: imgJacqgilbertson,
                    },
                    {
                      handle: 'priya.stashes',
                      avatar: 'P',
                      time: '5 days ago',
                      tag: '@urbanstash_',
                      img: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&h=600&fit=crop&q=80',
                    },
                    {
                      handle: 'milesnyc_',
                      avatar: 'M',
                      time: '1 week ago',
                      tag: '@urbanstash',
                      img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=600&fit=crop&q=80',
                    },
                  ].map((post, i) => (
                    <button
                      key={i}
                      onClick={() => setLightboxImg(post.img)}
                      className="flex-shrink-0 w-52 rounded-2xl overflow-hidden glass-card border border-white/[0.08] group text-left cursor-pointer"
                      style={{ scrollSnapAlign: 'start' }}
                    >
                      {/* Post image */}
                      <div className="relative h-64 overflow-hidden">
                        <img src={post.img} alt={post.tag} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                        {/* Instagram icon — top right */}
                        <div className="absolute top-3 right-3">
                          <svg className="w-6 h-6 text-white drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                          </svg>
                        </div>
                      </div>
                      {/* Tag footer */}
                      <div className="px-3 py-2 flex items-center gap-1.5">
                        <span className="text-accent text-[10px] font-bold">{post.tag}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Reviews */}
              <div className="mb-8">
                <h2 className="section-title text-lg font-bold text-accent uppercase tracking-wide mb-4">Reviews</h2>
                <div className="space-y-4">
                  {location.reviews.map((r, i) => (
                    <div key={i} className="p-4 rounded-xl glass-card">
                      <p className="text-zinc-300 mb-2">&ldquo;{r.text}&rdquo;</p>
                      <p className="font-medium text-white">{r.author}</p>
                      <p className="text-sm text-zinc-600">{r.time}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Booking sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 rounded-2xl glass-card-strong p-6">
                <h3 className="text-lg font-bold mb-4">Select your unit size</h3>
                <div className="flex gap-2 mb-4">
                  {['small', 'medium', 'large'].map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 rounded-full text-sm font-medium capitalize transition-colors ${
                        selectedSize === size
                          ? 'bg-accent text-on-accent'
                          : 'bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
                <Link to="/sizing" className="block text-zinc-500 hover:text-accent text-sm mb-4">
                  What size do I need?
                </Link>
                <select className="w-full glass-card border border-white/[0.08] rounded-xl px-4 py-3 text-white mb-4 focus:outline-none focus:border-accent">
                  <option>Select unit</option>
                  {filteredUnits.map((u) => (
                    <option key={u.id} value={u.id}>
                      {u.size} - ${u.price}/month
                    </option>
                  ))}
                </select>
                <div className="mb-4">
                  <label className="block text-sm text-zinc-500 mb-2 uppercase tracking-wide">Move-in</label>
                  <input
                    type="text"
                    value={moveInDate}
                    onChange={(e) => setMoveInDate(e.target.value)}
                    className="w-full glass-card border border-white/[0.08] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent"
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-sm text-zinc-500 mb-2 uppercase tracking-wide">Estimated stay</label>
                  <input
                    type="text"
                    value={`${STAY_MONTHS} Months`}
                    readOnly
                    className="w-full bg-white/5 border border-white/[0.08] rounded-xl px-4 py-3 text-white"
                  />
                </div>
                <button className="cta-btn w-full py-4 bg-accent-cta text-accent-cta-contrast font-bold rounded-full hover:opacity-90">
                  Book Now
                </button>
                <p className="text-center text-zinc-600 text-sm mt-3">
                  You won&apos;t be charged yet. Cancel anytime
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />

      {/* Lightbox */}
      {lightboxImg && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={() => setLightboxImg(null)}
        >
          <button
            onClick={() => setLightboxImg(null)}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <img
            src={lightboxImg}
            alt="Post"
            className="max-h-[90vh] max-w-[90vw] rounded-2xl object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}
