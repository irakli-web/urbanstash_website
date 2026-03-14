import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { locations } from '../data/locations';

export default function UnitsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header showFindStorage={false} />
      <main className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Available Units in NYC</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Locations list */}
          <div className="lg:col-span-2 space-y-6">
            {locations.map((loc) => {
              const minPrice = Math.min(...loc.units.map((u) => u.price));
              const smallUnit = loc.units.find((u) => u.sqft <= 24);
              const mediumUnit = loc.units.find((u) => u.sqft > 24 && u.sqft <= 50);
              const largeUnit = loc.units.find((u) => u.sqft > 50);
              return (
                <div
                  key={loc.id}
                  className="rounded-xl border border-zinc-800 bg-zinc-900/50 overflow-hidden"
                >
                  <div className="p-6">
                    <h2 className="text-xl font-bold mb-2">{loc.name}</h2>
                    <p className="text-zinc-500 text-sm mb-4">{loc.address}</p>
                    <p className="text-sm text-zinc-400 italic mb-4">
                      &ldquo;{loc.featuredReview.text}&rdquo;
                      <br />
                      <span className="not-italic font-medium">{loc.featuredReview.author}</span>
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {smallUnit && (
                        <span className="px-2 py-1 bg-zinc-800 rounded text-xs">
                          Small from ${smallUnit.price}/mo — {smallUnit.size}
                        </span>
                      )}
                      {mediumUnit && (
                        <span className="px-2 py-1 bg-zinc-800 rounded text-xs">
                          Medium from ${mediumUnit.price}/mo
                        </span>
                      )}
                      {largeUnit && (
                        <span className="px-2 py-1 bg-zinc-800 rounded text-xs">
                          Large from ${largeUnit.price}/mo
                        </span>
                      )}
                    </div>
                    <Link
                      to={`/units/${loc.slug}`}
                      className="inline-block px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-lg transition-colors"
                    >
                      Check Availability
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Map placeholder */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 rounded-xl border border-zinc-800 bg-zinc-900 h-[400px] flex items-center justify-center">
              <span className="text-zinc-600">Map placeholder</span>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
