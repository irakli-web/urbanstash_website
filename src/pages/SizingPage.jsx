import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { sizes, whyStashItems, faqItems } from '../data/sizes';

export default function SizingPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main>
        {/* Hero */}
        <section className="py-16 px-4 border-b border-zinc-800">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              About our stash sizes
            </h1>
            <p className="text-zinc-400 text-lg mb-8">
              From micro units that hold your holiday decorations to spacious rooms that fit your entire apartment, we've designed our sizes around how people actually live in the city. Every unit gets the same security we'd want for our own belongings.
            </p>
            <Link
              to="/units"
              className="inline-block px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors"
            >
              Find storage
            </Link>
          </div>
        </section>

        {/* Storage Unit Guide */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-orange-500 mb-12 text-center">
              STORAGE UNIT GUIDE
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
              {sizes.map((s, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-orange-500/50 transition-colors"
                >
                  <span className="text-xs font-semibold text-orange-500 uppercase">{s.category}</span>
                  <p className="text-white font-semibold mt-1">{s.dimensions}</p>
                  <p className="text-sm text-zinc-500">{s.for}</p>
                </div>
              ))}
            </div>

            {/* Small unit detail */}
            <div className="max-w-2xl mx-auto text-center mb-16">
              <h3 className="text-xl font-semibold text-orange-500 mb-2">SMALL — For seasonal essentials</h3>
              <p className="text-zinc-400">
                4 x 3 x 4 (12 sq ft) — Our Small units are ideal for compact storage needs. These units are efficiently designed and double-stacked, making them perfect for items that store well vertically. Store moving boxes, suitcases, seasonal clothing, holiday decorations, shoes, documents, and other compact belongings you don't need daily.
              </p>
              <Link
                to="/units"
                className="inline-block mt-6 px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors"
              >
                Find storage
              </Link>
            </div>
          </div>
        </section>

        {/* Compare table */}
        <section className="py-16 px-4 bg-zinc-950">
          <div className="max-w-6xl mx-auto overflow-x-auto">
            <h2 className="text-2xl font-bold text-orange-500 mb-8 text-center">
              Compare stash sizes
            </h2>
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-zinc-700">
                  <th className="py-3 px-4 text-zinc-400 font-medium">Size</th>
                  <th className="py-3 px-4 text-zinc-400 font-medium">Square feet</th>
                  <th className="py-3 px-4 text-zinc-400 font-medium">Perfect for</th>
                </tr>
              </thead>
              <tbody>
                {sizes.map((s, i) => (
                  <tr key={i} className="border-b border-zinc-800">
                    <td className="py-3 px-4">{s.category}</td>
                    <td className="py-3 px-4 text-zinc-400">{s.dimensions}</td>
                    <td className="py-3 px-4">{s.for}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Why stash with us */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-16">
              Why stash with us
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {whyStashItems.map((item, i) => (
                <div key={i} className="text-center p-6 rounded-xl bg-zinc-900 border border-zinc-800">
                  <h3 className="text-orange-500 font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-zinc-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-4 border-t border-zinc-800">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-12">FAQ</h2>
            <div className="space-y-4">
              {faqItems.map((q, i) => (
                <div key={i} className="py-4 border-b border-zinc-800 text-zinc-400">
                  {q}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
