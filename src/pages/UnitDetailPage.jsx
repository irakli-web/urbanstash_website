import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { getLocationBySlug } from '../data/locations';

export default function UnitDetailPage() {
  const { slug } = useParams();
  const location = getLocationBySlug(slug);
  const [selectedSize, setSelectedSize] = useState('small');
  const [selectedUnit, setSelectedUnit] = useState(null);
  const [moveInDate, setMoveInDate] = useState('04/01/26');
  const [stayMonths, setStayMonths] = useState(12);

  if (!location) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Location not found</h1>
          <Link to="/units" className="text-orange-500 hover:underline">
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
    <div className="min-h-screen bg-black text-white">
      <Header showFindStorage={false} />
      <main>
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 py-4 text-sm text-zinc-500">
          <Link to="/" className="hover:text-white">Home</Link>
          <span className="mx-2">›</span>
          <Link to="/units" className="hover:text-white">Units</Link>
          <span className="mx-2">›</span>
          <span className="text-orange-500">{location.name}</span>
        </div>

        <div className="max-w-7xl mx-auto px-4 pb-12">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left column */}
            <div className="lg:col-span-2">
              {/* Gallery placeholder */}
              <div className="rounded-xl bg-zinc-900 h-64 flex items-center justify-center mb-6 border border-zinc-800">
                <span className="text-zinc-600">Gallery</span>
              </div>

              <h1 className="text-3xl font-bold mb-2">{location.name}</h1>
              <p className="text-zinc-500 mb-4">{location.address}</p>
              <div className="flex items-center gap-2 mb-6">
                <span className="text-orange-500">★</span>
                <span className="text-zinc-500">{location.reviewCount} Reviews</span>
              </div>
              <div className="flex gap-4 mb-8">
                <Link to="/sizing" className="text-zinc-400 hover:text-white text-sm">
                  Sizing guide
                </Link>
                <a href="#" className="text-zinc-400 hover:text-white text-sm">
                  View on Map
                </a>
              </div>

              {/* Storage Facility Features */}
              <div className="mb-8">
                <h2 className="text-lg font-semibold text-orange-500 mb-4">
                  Storage Facility Features
                </h2>
                <div className="grid grid-cols-2 gap-3">
                  {location.features.map((f, i) => (
                    <div key={i} className="flex items-center gap-2 text-zinc-400">
                      <svg className="w-5 h-5 text-orange-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {f}
                    </div>
                  ))}
                </div>
              </div>

              {/* Access Hours */}
              <div className="mb-8">
                <h2 className="text-lg font-semibold text-orange-500 mb-2">Access Hours</h2>
                <p className="text-zinc-400">{location.accessHours}</p>
              </div>

              {/* Availability */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-orange-500 mb-4">AVAILABILITY</h2>
                <p className="text-zinc-500 text-sm mb-4">Sort By Size</p>
                <div className="space-y-4">
                  {location.units.map((unit) => (
                    <div
                      key={unit.id}
                      className="flex items-center justify-between p-4 rounded-lg border border-zinc-700 bg-zinc-900/50 hover:border-orange-500/50 transition-colors"
                    >
                      <div>
                        <p className="font-medium text-white">{unit.size} ({unit.sqft} sq ft)</p>
                        <p className="text-sm text-zinc-500">{unit.description}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-orange-500 font-semibold text-xl">
                          ${unit.price}/month
                        </p>
                        <button
                          onClick={() => setSelectedUnit(unit)}
                          className="text-sm text-zinc-400 hover:text-orange-500 mt-1"
                        >
                          Show All Available Units
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* About this space */}
              <div className="mb-8">
                <h2 className="text-lg font-semibold text-orange-500 mb-4">About this space</h2>
                <p className="text-zinc-400 leading-relaxed">{location.about}</p>
              </div>

              {/* How it works */}
              <div className="mb-8">
                <h2 className="text-lg font-semibold text-orange-500 mb-4">How It Works</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium text-white mb-1">Reserve Online</h3>
                    <p className="text-zinc-500 text-sm">
                      Choose your unit size and reserve for free. No credit card required upfront.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-medium text-white mb-1">Get Access</h3>
                    <p className="text-zinc-500 text-sm">
                      Receive your unique gate code and lock for instant access to your unit.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-medium text-white mb-1">Move-In</h3>
                    <p className="text-zinc-500 text-sm">
                      Complete your rental online or in-person. Bring your items to the facility.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-medium text-white mb-1">Manage Account</h3>
                    <p className="text-zinc-500 text-sm">
                      Pay bills, check history, and manage your rental from our mobile app.
                    </p>
                  </div>
                </div>
              </div>

              {/* Reviews */}
              <div className="mb-8">
                <h2 className="text-lg font-semibold text-orange-500 mb-4">Reviews</h2>
                <div className="space-y-4">
                  {location.reviews.map((r, i) => (
                    <div key={i} className="p-4 rounded-lg border border-zinc-800">
                      <p className="text-zinc-300 mb-2">&ldquo;{r.text}&rdquo;</p>
                      <p className="font-medium text-white">{r.author}</p>
                      <p className="text-sm text-zinc-500">{r.time}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right column - Booking card */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 rounded-xl border border-zinc-800 bg-zinc-900 p-6">
                <h3 className="text-lg font-semibold mb-4">Select your unit size</h3>
                <div className="flex gap-2 mb-4">
                  {['small', 'medium', 'large'].map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium capitalize transition-colors ${
                        selectedSize === size
                          ? 'bg-orange-500 text-white'
                          : 'bg-zinc-800 text-zinc-400 hover:text-white'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
                <p className="text-zinc-500 text-sm mb-4">What size do I need?</p>
                <select className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white mb-4 focus:outline-none focus:border-orange-500">
                  <option>Select unit</option>
                  {filteredUnits.map((u) => (
                    <option key={u.id} value={u.id}>
                      {u.size} - ${u.price}/month
                    </option>
                  ))}
                </select>
                <div className="mb-4">
                  <label className="block text-sm text-zinc-500 mb-2">MOVE-IN</label>
                  <input
                    type="text"
                    value={moveInDate}
                    onChange={(e) => setMoveInDate(e.target.value)}
                    className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500"
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-sm text-zinc-500 mb-2">ESTIMATED STAY</label>
                  <input
                    type="text"
                    value={`${stayMonths} Months`}
                    readOnly
                    className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white"
                  />
                </div>
                <button className="w-full py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors">
                  Book Now
                </button>
                <p className="text-center text-zinc-500 text-sm mt-3">
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
