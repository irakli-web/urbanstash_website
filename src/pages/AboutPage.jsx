import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { faqItems } from '../data/sizes';

const sections = [
  {
    title: "Making storage personal",
    content: "Traditional storage treats everyone the same. We design each location to reflect its neighborhood. We get to know our stashers. We understand that your belongings matter to you, and we treat them as our own.",
  },
  {
    title: "Built by locals, for locals",
    content: "We live in the neighborhoods we serve. We navigate the same narrow hallways, deal with the same tiny closets, and understand why you need that bike but have nowhere to put it. Our team isn't making decisions from some suburban office park. We're your neighbors who face the same urban space challenges every day. Our local knowledge shapes everything we do. Each location is crafted for its specific neighborhood by people who actually live there. Every Urban Stash is designed with real New York Stashers in mind because we are real urban dwellers too. This isn't corporate storage with a city address. It's storage that actually belongs to the neighborhood.",
  },
  {
    title: "Storage that works for city life",
    content: "We believe storage should feel as easy and natural as having an extra closet down the block. That's why we design every location to be convenient, secure, and straightforward to use. Whether you're moving, decluttering, or just need more breathing room, we make storage simple, so you can focus on living your life, not managing your stuff.",
  },
  {
    title: "Where we're headed",
    content: "We're reimagining what storage can be—accessible, local, and designed for the way city people actually live. One neighborhood at a time, we're building storage you'll want to use, because it makes your life easier. And we're just getting started.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main>
        {/* Hero */}
        <section className="py-20 px-4 border-b border-zinc-800">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              Started in the neighborhood
            </h1>
            <p className="text-lg md:text-xl text-zinc-400 mb-8">
              We wanted storage that felt close to home. Just a quick walk away, not an hour-long drive to some industrial park.
            </p>
            <Link
              to="/units"
              className="inline-block px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors"
            >
              Find storage
            </Link>
          </div>
        </section>

        {/* Image placeholder */}
        <section className="py-8 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="rounded-xl bg-zinc-900 h-64 md:h-96 flex items-center justify-center border border-zinc-800">
              <span className="text-zinc-600">Hero image placeholder</span>
            </div>
          </div>
        </section>

        {/* Content sections */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto space-y-16">
            {sections.map((section, i) => (
              <div key={i}>
                <h2 className="text-2xl font-bold text-orange-500 mb-4">
                  {section.title}
                </h2>
                <p className="text-zinc-400 leading-relaxed">
                  {section.content}
                </p>
              </div>
            ))}
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
