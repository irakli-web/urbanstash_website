import React, { useState, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

// ─── Item catalogue ───────────────────────────────────────────────────────────
const CATEGORIES = [
  {
    id: 'boxes',
    label: 'Boxes & Storage',
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    items: [
      { id: 'box-sm',    label: 'Small Box',        cuft: 1.5,  hint: '~1.5 cu ft' },
      { id: 'box-md',    label: 'Medium Box',       cuft: 3,    hint: '~3 cu ft' },
      { id: 'box-lg',    label: 'Large Box',        cuft: 4.5,  hint: '~4.5 cu ft' },
      { id: 'bin',       label: 'Storage Bin',      cuft: 2,    hint: '~2 cu ft' },
      { id: 'suitcase',  label: 'Large Suitcase',   cuft: 5,    hint: '~5 cu ft' },
      { id: 'luggage-sm',label: 'Carry-On Bag',     cuft: 1.5,  hint: '~1.5 cu ft' },
    ],
  },
  {
    id: 'bedroom',
    label: 'Bedroom',
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    items: [
      { id: 'mattress-twin',  label: 'Twin Mattress',      cuft: 20, hint: '~20 cu ft' },
      { id: 'mattress-full',  label: 'Full Mattress',      cuft: 27, hint: '~27 cu ft' },
      { id: 'mattress-queen', label: 'Queen Mattress',     cuft: 35, hint: '~35 cu ft' },
      { id: 'mattress-king',  label: 'King Mattress',      cuft: 45, hint: '~45 cu ft' },
      { id: 'bed-frame',      label: 'Bed Frame',          cuft: 20, hint: '~20 cu ft' },
      { id: 'dresser-sm',     label: 'Dresser (Small)',    cuft: 12, hint: '~12 cu ft' },
      { id: 'dresser-lg',     label: 'Dresser (Large)',    cuft: 20, hint: '~20 cu ft' },
      { id: 'nightstand',     label: 'Nightstand',         cuft: 4,  hint: '~4 cu ft' },
      { id: 'wardrobe',       label: 'Wardrobe / Armoire', cuft: 35, hint: '~35 cu ft' },
    ],
  },
  {
    id: 'living',
    label: 'Living Room',
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
      </svg>
    ),
    items: [
      { id: 'sofa-2',      label: 'Loveseat (2-seat)',  cuft: 40, hint: '~40 cu ft' },
      { id: 'sofa-3',      label: 'Sofa (3-seat)',      cuft: 60, hint: '~60 cu ft' },
      { id: 'sectional',   label: 'Sectional Sofa',    cuft: 90, hint: '~90 cu ft' },
      { id: 'armchair',    label: 'Armchair',           cuft: 15, hint: '~15 cu ft' },
      { id: 'coffee-tbl',  label: 'Coffee Table',       cuft: 10, hint: '~10 cu ft' },
      { id: 'tv-55',       label: 'TV 55"',             cuft: 8,  hint: '~8 cu ft' },
      { id: 'tv-65',       label: 'TV 65"+',            cuft: 14, hint: '~14 cu ft' },
      { id: 'bookshelf',   label: 'Bookshelf',          cuft: 12, hint: '~12 cu ft' },
      { id: 'rug-sm',      label: 'Area Rug (small)',   cuft: 3,  hint: '~3 cu ft' },
      { id: 'rug-lg',      label: 'Area Rug (large)',   cuft: 8,  hint: '~8 cu ft' },
    ],
  },
  {
    id: 'kitchen',
    label: 'Kitchen & Dining',
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    items: [
      { id: 'dining-tbl',    label: 'Dining Table',       cuft: 25, hint: '~25 cu ft' },
      { id: 'dining-chair',  label: 'Dining Chair',       cuft: 5,  hint: '~5 cu ft' },
      { id: 'fridge',        label: 'Refrigerator',       cuft: 30, hint: '~30 cu ft' },
      { id: 'washer',        label: 'Washer / Dryer',     cuft: 25, hint: '~25 cu ft' },
      { id: 'microwave',     label: 'Microwave',          cuft: 2,  hint: '~2 cu ft' },
      { id: 'kitchen-boxes', label: 'Kitchen Boxes',      cuft: 3,  hint: '~3 cu ft' },
    ],
  },
  {
    id: 'office',
    label: 'Office',
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    items: [
      { id: 'desk',        label: 'Desk',              cuft: 20, hint: '~20 cu ft' },
      { id: 'office-chair',label: 'Office Chair',      cuft: 8,  hint: '~8 cu ft' },
      { id: 'filing-cab',  label: 'Filing Cabinet',    cuft: 8,  hint: '~8 cu ft' },
      { id: 'monitor',     label: 'Monitor',           cuft: 3,  hint: '~3 cu ft' },
      { id: 'bookcase',    label: 'Bookcase',          cuft: 15, hint: '~15 cu ft' },
    ],
  },
  {
    id: 'outdoor',
    label: 'Sports & Outdoor',
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    items: [
      { id: 'bike',       label: 'Bicycle',           cuft: 15, hint: '~15 cu ft' },
      { id: 'ski-gear',   label: 'Ski / Snowboard Gear', cuft: 8, hint: '~8 cu ft' },
      { id: 'golf-bag',   label: 'Golf Bag',          cuft: 6,  hint: '~6 cu ft' },
      { id: 'garden-tools',label:'Garden Tools',      cuft: 8,  hint: '~8 cu ft' },
      { id: 'sports-equip',label:'Sports Equipment',  cuft: 10, hint: '~10 cu ft' },
      { id: 'stroller',   label: 'Stroller',          cuft: 8,  hint: '~8 cu ft' },
    ],
  },
  {
    id: 'clothing',
    label: 'Clothing & Personal',
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
    items: [
      { id: 'shoe-box',      label: 'Shoe Box (pair)',     cuft: 0.3, hint: '~0.3 cu ft' },
      { id: 'clothing-box',  label: 'Clothing Box',       cuft: 3,   hint: '~3 cu ft' },
      { id: 'hanging-clothes',label:'Hanging Clothes Bag', cuft: 4,  hint: '~4 cu ft' },
      { id: 'winter-coats',  label: 'Winter Coats (box)', cuft: 5,   hint: '~5 cu ft' },
    ],
  },
];

// ─── Unit recommendation logic ────────────────────────────────────────────────
const UNITS = [
  {
    size: 'small',
    label: 'Small Unit',
    dims: "4' × 2.5' × 4'",
    cuft: 40,
    sqft: 10,
    desc: 'Perfect for everyday overflow — shoes, seasonal items, a few boxes.',
    color: 'text-emerald-400',
    bg: 'bg-emerald-400/10',
    border: 'border-emerald-400/30',
  },
  {
    size: 'medium',
    label: 'Medium Unit',
    dims: "6' × 4' × 7.5'",
    cuft: 180,
    sqft: 24,
    desc: 'Ideal for apartment living — furniture, appliances, and boxes.',
    color: 'text-accent',
    bg: 'bg-accent/10',
    border: 'border-accent/30',
  },
  {
    size: 'large',
    label: 'Large Unit',
    dims: "5' × 8' × 7.5'",
    cuft: 300,
    sqft: 40,
    desc: 'For life transitions — full room or apartment worth of belongings.',
    color: 'text-purple-400',
    bg: 'bg-purple-400/10',
    border: 'border-purple-400/30',
  },
];

function getRecommendation(totalCuft) {
  if (totalCuft === 0) return null;
  if (totalCuft <= 40) return UNITS[0];
  if (totalCuft <= 180) return UNITS[1];
  return UNITS[2];
}

// ─── Main page ────────────────────────────────────────────────────────────────
export default function SizingCalculatorPage() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('boxes');
  const [cart, setCart] = useState({}); // { itemId: qty }

  const addItem = (item) => {
    setCart((prev) => ({ ...prev, [item.id]: (prev[item.id] || 0) + 1 }));
  };

  const setQty = (id, qty) => {
    if (qty <= 0) {
      setCart((prev) => { const n = { ...prev }; delete n[id]; return n; });
    } else {
      setCart((prev) => ({ ...prev, [id]: qty }));
    }
  };

  const allItems = useMemo(() => CATEGORIES.flatMap((c) => c.items), []);

  const cartItems = useMemo(() =>
    Object.entries(cart).map(([id, qty]) => {
      const item = allItems.find((i) => i.id === id);
      return { ...item, qty, subtotal: item.cuft * qty };
    }),
  [cart, allItems]);

  const totalCuft = useMemo(() =>
    cartItems.reduce((sum, i) => sum + i.subtotal, 0),
  [cartItems]);

  const recommendation = useMemo(() => getRecommendation(totalCuft), [totalCuft]);

  const fillPct = recommendation
    ? Math.min(100, (totalCuft / recommendation.cuft) * 100)
    : 0;

  const currentCategory = CATEGORIES.find((c) => c.id === activeCategory);

  return (
    <div className="min-h-screen bg-theme text-white">
      <Header showFindStorage={false} />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-20">

        {/* Breadcrumb */}
        <div className="text-sm text-zinc-600 mb-6">
          <Link to="/" className="hover:text-white">Home</Link>
          <span className="mx-2">›</span>
          <span className="text-accent">Storage Calculator</span>
        </div>

        {/* Page title */}
        <div className="mb-8">
          <p className="text-accent text-xs font-bold uppercase tracking-widest mb-2">Size calculator</p>
          <h1 className="section-title text-3xl md:text-4xl font-black uppercase tracking-tight mb-2">
            What are you <span className="text-accent">storing?</span>
          </h1>
          <p className="text-zinc-500 text-sm">Add your items and we&apos;ll recommend the right unit size.</p>
        </div>

        <div className="grid lg:grid-cols-[1fr_380px] gap-6">

          {/* ── LEFT — Item picker ── */}
          <div className="flex flex-col gap-4">

            {/* Category tabs */}
            <div className="flex gap-2 flex-wrap">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold transition-all ${
                    activeCategory === cat.id
                      ? 'bg-accent text-on-accent'
                      : 'glass-card border border-white/[0.06] text-zinc-400 hover:text-white hover:border-white/20'
                  }`}
                >
                  {cat.icon}
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Items grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {currentCategory?.items.map((item) => {
                const qty = cart[item.id] || 0;
                return (
                  <div
                    key={item.id}
                    className={`glass-card rounded-2xl p-4 border transition-all ${
                      qty > 0
                        ? 'border-accent/40 bg-accent/5'
                        : 'border-white/[0.06] hover:border-white/20'
                    }`}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <p className="text-white text-sm font-semibold leading-tight">{item.label}</p>
                        <p className="text-zinc-600 text-[11px] mt-0.5">{item.hint}</p>
                      </div>
                      {qty > 0 && (
                        <span className="text-[10px] font-bold text-accent bg-accent/15 px-1.5 py-0.5 rounded-full">×{qty}</span>
                      )}
                    </div>
                    {qty === 0 ? (
                      <button
                        onClick={() => addItem(item)}
                        className="w-full flex items-center justify-center gap-1.5 py-2 rounded-xl bg-white/[0.06] hover:bg-accent hover:text-on-accent text-zinc-400 text-xs font-bold transition-all"
                      >
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                        </svg>
                        Add
                      </button>
                    ) : (
                      <div className="flex items-center justify-between gap-2">
                        <button
                          onClick={() => setQty(item.id, qty - 1)}
                          className="w-7 h-7 rounded-lg bg-white/[0.06] hover:bg-white/10 flex items-center justify-center text-white transition-colors"
                        >
                          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M20 12H4" />
                          </svg>
                        </button>
                        <span className="text-white font-bold text-sm tabular-nums">{qty}</span>
                        <button
                          onClick={() => setQty(item.id, qty + 1)}
                          className="w-7 h-7 rounded-lg bg-accent/20 hover:bg-accent hover:text-on-accent flex items-center justify-center text-accent transition-colors"
                        >
                          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                          </svg>
                        </button>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* ── RIGHT — Summary + Recommendation ── */}
          <div className="flex flex-col gap-4">

            {/* Selected items list */}
            <div className="glass-card-strong rounded-2xl p-5">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-white text-sm uppercase tracking-wide">Your Items</h3>
                {cartItems.length > 0 && (
                  <button
                    onClick={() => setCart({})}
                    className="text-zinc-600 hover:text-zinc-400 text-xs transition-colors"
                  >
                    Clear all
                  </button>
                )}
              </div>

              {cartItems.length === 0 ? (
                <div className="text-center py-8">
                  <div className="w-12 h-12 rounded-2xl bg-white/[0.04] flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-zinc-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                  </div>
                  <p className="text-zinc-600 text-sm">Add items from the left to get started</p>
                </div>
              ) : (
                <div className="space-y-2 max-h-52 overflow-y-auto scrollbar-hide pr-1">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex items-center justify-between gap-2 py-1.5 border-b border-white/[0.04] last:border-0">
                      <div className="flex-1 min-w-0">
                        <p className="text-white text-xs font-medium truncate">{item.label}</p>
                        <p className="text-zinc-600 text-[10px]">{item.cuft} cu ft × {item.qty}</p>
                      </div>
                      <div className="flex items-center gap-2 flex-shrink-0">
                        <span className="text-accent text-xs font-bold tabular-nums">{item.subtotal.toFixed(1)} cuft</span>
                        <button
                          onClick={() => setQty(item.id, 0)}
                          className="text-zinc-700 hover:text-zinc-400 transition-colors"
                        >
                          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {cartItems.length > 0 && (
                <div className="mt-4 pt-3 border-t border-white/[0.08] flex items-center justify-between">
                  <span className="text-zinc-500 text-xs font-medium uppercase tracking-wide">Total</span>
                  <span className="text-white font-black text-base tabular-nums">{totalCuft.toFixed(1)} <span className="text-zinc-500 text-xs font-normal">cu ft</span></span>
                </div>
              )}
            </div>

            {/* Recommendation */}
            {recommendation ? (
              <div className={`rounded-2xl border p-5 ${recommendation.bg} ${recommendation.border}`}>
                {/* Header */}
                <div className="flex items-center gap-2 mb-1">
                  <svg className={`w-4 h-4 ${recommendation.color}`} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <p className="text-zinc-400 text-xs font-semibold uppercase tracking-widest">Recommended</p>
                </div>
                <h3 className={`text-xl font-black uppercase tracking-tight mb-0.5 ${recommendation.color}`}>
                  {recommendation.label}
                </h3>
                <p className="text-zinc-500 text-xs mb-4">{recommendation.dims} &middot; {recommendation.sqft} sq ft</p>
                <p className="text-zinc-300 text-sm leading-relaxed mb-5">{recommendation.desc}</p>

                {/* Fill meter */}
                <div className="mb-5">
                  <div className="flex justify-between text-[11px] text-zinc-500 mb-1.5">
                    <span>Unit capacity used</span>
                    <span className={`font-bold ${recommendation.color}`}>{Math.round(fillPct)}%</span>
                  </div>
                  <div className="h-2 bg-white/[0.06] rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${
                        recommendation.size === 'small' ? 'bg-emerald-400' :
                        recommendation.size === 'medium' ? 'bg-accent' : 'bg-purple-400'
                      }`}
                      style={{ width: `${fillPct}%` }}
                    />
                  </div>
                  <p className="text-zinc-600 text-[10px] mt-1.5">
                    {totalCuft.toFixed(0)} of {recommendation.cuft} cu ft estimated
                  </p>
                </div>

                {/* All unit sizes for reference */}
                <div className="space-y-1.5 mb-5">
                  {UNITS.map((u) => (
                    <div
                      key={u.size}
                      className={`flex items-center justify-between px-3 py-2 rounded-xl text-xs transition-all ${
                        u.size === recommendation.size
                          ? `${u.bg} ${u.border} border font-bold`
                          : 'bg-white/[0.03] text-zinc-600'
                      }`}
                    >
                      <span className={u.size === recommendation.size ? u.color : ''}>{u.label}</span>
                      <span>{u.dims}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <button
                  onClick={() => navigate(`/units?size=${recommendation.size}`)}
                  className="w-full py-3.5 rounded-full bg-accent text-on-accent font-bold text-sm hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                >
                  Find {recommendation.label}s near me
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
                <p className="text-center text-zinc-600 text-[11px] mt-2">Browse all available {recommendation.size} units</p>
              </div>
            ) : (
              /* Empty state */
              <div className="glass-card rounded-2xl p-6 text-center border border-white/[0.06]">
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-7 h-7 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 11h.01M12 11h.01M15 11h.01M4 19h16a2 2 0 002-2V7a2 2 0 00-2-2H4a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-white font-bold text-sm mb-1">Add items to get a recommendation</h3>
                <p className="text-zinc-600 text-xs leading-relaxed">Select from the categories on the left and we&apos;ll calculate the perfect unit size for you.</p>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
