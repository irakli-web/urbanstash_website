import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LocationVideoCarousel from '../components/LocationVideoCarousel';
import { getLocationBySlug } from '../data/locations';

const STAY_MONTHS = 12;

export default function UnitDetailPage() {
  const { slug } = useParams();
  const location = getLocationBySlug(slug);
  const [selectedSize, setSelectedSize] = useState('small');
  const [moveInDate, setMoveInDate] = useState('04/01/26');

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
              <div className="rounded-2xl bg-zinc-900 h-64 flex items-center justify-center mb-6 border border-white/[0.06]">
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
                <h2 className="text-lg font-bold text-accent uppercase tracking-wide mb-4">
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
                <h2 className="text-lg font-bold text-accent uppercase tracking-wide mb-2">Access Hours</h2>
                <p className="text-zinc-400">{location.accessHours}</p>
              </div>

              {/* Availability */}
              <div className="mb-8">
                <h2 className="text-xl font-black text-accent uppercase tracking-wide mb-4">Availability</h2>
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
                <h2 className="text-lg font-bold text-accent uppercase tracking-wide mb-4">About this space</h2>
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
                <h2 className="text-lg font-bold text-accent uppercase tracking-wide mb-4">How It Works</h2>
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

              {/* Reviews */}
              <div className="mb-8">
                <h2 className="text-lg font-bold text-accent uppercase tracking-wide mb-4">Reviews</h2>
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
                <select className="w-full bg-white/5 border border-white/[0.08] rounded-xl px-4 py-3 text-white mb-4 focus:outline-none focus:border-accent">
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
                    className="w-full bg-white/5 border border-white/[0.08] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent"
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
    </div>
  );
}
