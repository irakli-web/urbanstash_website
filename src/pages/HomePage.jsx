import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const features = [
  {
    title: "We've got your back",
    desc: "24/7 monitoring and bank-level encryption for all transactions. Your belongings and data stay protected.",
  },
  {
    title: "IT'S ALL ABOUT CONVENIENCE",
    desc: "Access your unit on your schedule without fees or appointments. Choose insurance that fits your needs and storage that suits your lifestyle.",
  },
  {
    title: "We celebrate our community",
    desc: "Every location reflects the creativity and diversity of the people who use it. We create spaces where connection and belonging come to life.",
  },
  {
    title: "LIKE GRABBING A COFFEE AT YOUR LOCAL SPOT",
    desc: "Forget driving to industrial parks on the outskirts of town. Your stash is just a quick walk or bike ride away.",
  },
];

const howItWorks = [
  { title: "Find & book", desc: "Search available units in your area and book instantly online." },
  { title: "Get your code", desc: "Receive your personal access code immediately via email." },
  { title: "Start stashing", desc: "Access your unit whenever you're ready. Your secure code works 365 days a year." },
];

const testimonials = [
  { text: "Great service. Made my life so much easier and set a new standard for storage. Highly recommended", name: "Oren Klagsbald", time: "3 weeks ago" },
  { text: "Great storage service! clean, secure, and easy to access. The staff is friendly and professional. Highly recommended.", name: "Ori", time: "2 weeks ago" },
  { text: "Amazing experience — super easy and hassle-free! Everything felt secure, and it really helped me free up valuable space in my apartment. I highly recommend their services and will definitely continue using them.", name: "Maya Raichel", time: "3 weeks ago" },
  { text: "Super smooth from start to finish. Getting in and out is simple, everything is well organized, and it made a huge difference in clearing clutter from my apartment. It's been incredibly convenient and stress-free. Highly recommended!", name: "yaara tal", time: "2 weeks ago" },
];

const faqItems = [
  "How do I reserve a storage unit online?",
  "Are my payments secure on your website?",
  "Do you offer insurance for stored items?",
  "What size storage unit do I need?",
  "Are all storage units the same height?",
  "Can I cancel my storage anytime?",
  "What security measures are in place at your facilities?",
  "Do unit sizes and layouts vary by location?",
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative min-h-[70vh] flex items-center justify-center bg-zinc-950 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/80 to-black" />
          <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Storage that lives where you do
            </h1>
            <p className="text-lg md:text-xl text-zinc-400 mb-8">
              No more weekend trips to sketchy warehouses. Book online, access anytime, and never leave your neighborhood.
            </p>
            <Link
              to="/units"
              className="inline-block px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors"
            >
              Find storage
            </Link>
          </div>
        </section>

        {/* Features - Storage built for city living */}
        <section className="py-20 px-4 bg-zinc-950">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-16">
              Storage built for city living
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              {features.map((f, i) => (
                <div key={i} className="p-6 rounded-xl bg-zinc-900/50 border border-zinc-800">
                  <h3 className="text-orange-500 font-semibold text-lg mb-2">{f.title}</h3>
                  <p className="text-zinc-400">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="py-20 px-4 border-t border-zinc-800">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-16">
              How it works
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {howItWorks.map((step, i) => (
                <div key={i} className="text-center">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-4">
                    {i + 1}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-zinc-400">{step.desc}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <Link
                to="/units"
                className="inline-block px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors"
              >
                Find storage
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 px-4 bg-zinc-950">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-16">
              Testimonials
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((t, i) => (
                <div key={i} className="p-6 rounded-xl bg-zinc-900/50 border border-zinc-800">
                  <p className="text-zinc-300 mb-4">&ldquo;{t.text}&rdquo;</p>
                  <p className="font-semibold text-white">{t.name}</p>
                  <p className="text-sm text-zinc-500">{t.time}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 px-4 border-t border-zinc-800">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
              FAQ
            </h2>
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
