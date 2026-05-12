import React, { useState } from 'react';
import { useParams, useSearchParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { getLocationBySlug } from '../data/locations';

const STEPS = ['Contact Details', 'Billing and Purchase'];

const COUNTRIES = [
  { code: 'US', flag: '🇺🇸', dial: '+1' },
  { code: 'IL', flag: '🇮🇱', dial: '+972' },
  { code: 'GB', flag: '🇬🇧', dial: '+44' },
  { code: 'CA', flag: '🇨🇦', dial: '+1' },
  { code: 'AU', flag: '🇦🇺', dial: '+61' },
  { code: 'DE', flag: '🇩🇪', dial: '+49' },
  { code: 'FR', flag: '🇫🇷', dial: '+33' },
];

function getSizeTier(sqft) {
  if (sqft <= 24) return 'SMALL';
  if (sqft <= 50) return 'MEDIUM';
  return 'LARGE';
}

function getProratedInfo(monthly) {
  const today = new Date();
  const y = today.getFullYear();
  const m = today.getMonth();
  const d = today.getDate();
  const daysInMonth = new Date(y, m + 1, 0).getDate();
  const daysRemaining = daysInMonth - d + 1;
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  const nm = m === 11 ? 0 : m + 1;
  const ny = m === 11 ? y + 1 : y;
  return {
    amount: (daysRemaining / daysInMonth) * monthly,
    daysRemaining,
    daysInMonth,
    day: d,
    monthName: months[m],
    nextBilling: `${months[nm]} 1st ${ny}`,
    todayStr: `${String(m + 1).padStart(2,'0')}/${String(d).padStart(2,'0')}/${y}`,
  };
}

/* ─── Sidebar summary ─── */
function UnitSummary({ unit, location }) {
  const PROTECTION = 20;
  const monthly = unit.price + PROTECTION;
  const { amount, daysRemaining, daysInMonth, day, monthName, nextBilling, todayStr } = getProratedInfo(monthly);

  return (
    <div className="glass-card-strong rounded-2xl p-5 sticky top-24">
      <div className="flex gap-3 mb-5 pb-5 border-b border-white/[0.08]">
        <div className="w-16 h-16 rounded-xl bg-charcoal flex-shrink-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1600585152915-d208bec867a1?w=120&h=120&fit=crop&q=80"
            alt="unit"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="min-w-0">
          <p className="text-sm font-bold">
            <span className="text-accent">{getSizeTier(unit.sqft)}</span>
            <span className="text-zinc-400 font-normal text-xs ml-1">(Upper unit – {unit.size})</span>
          </p>
          <p className="text-zinc-500 text-xs mt-0.5 leading-snug">{location.address}</p>
          <p className="text-zinc-400 text-xs mt-1.5">
            Move-In date: <span className="text-white">{todayStr}</span>
          </p>
        </div>
      </div>

      <p className="text-white font-bold text-sm mb-3">Monthly Recurring</p>
      <div className="space-y-2.5 mb-4 text-sm">
        <div className="flex justify-between">
          <span className="text-zinc-400">Storage rental</span>
          <span className="text-white">${unit.price.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-zinc-400 flex items-center gap-1">
            Protection plan
            <span className="w-3.5 h-3.5 rounded-full border border-zinc-600 text-zinc-500 text-[8px] flex items-center justify-center">i</span>
          </span>
          <span className="text-white">${PROTECTION.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-zinc-400">Smart lock</span>
          <span className="text-accent">Free</span>
        </div>
        <div className="flex justify-between">
          <span className="text-zinc-400">Service fee</span>
          <span className="text-accent">Free</span>
        </div>
      </div>

      <div className="flex justify-between text-sm font-bold border-t border-white/[0.08] pt-3 mb-4">
        <span className="text-white">Monthly Subtotal</span>
        <span className="text-white">${monthly.toFixed(2)}</span>
      </div>

      <div className="flex justify-between font-bold mb-1">
        <span className="text-white">Due Today</span>
        <span className="text-white">${amount.toFixed(2)}</span>
      </div>
      <p className="text-zinc-500 text-xs mb-4">
        Prorated first month for {monthName} {day}–{daysInMonth} ({daysRemaining} days)
      </p>

      <div className="border-t border-white/[0.08] pt-4">
        <p className="text-white font-bold text-sm mb-1">Next Billing</p>
        <p className="text-zinc-500 text-xs leading-relaxed">
          Your next monthly payment of{' '}
          <span className="text-zinc-300">${monthly.toFixed(2)}</span> will be charged on{' '}
          <span className="text-zinc-300">{nextBilling}</span> and automatically renews on the 1st of the month.
          You can cancel anytime.
        </p>
      </div>
    </div>
  );
}

/* ─── Step 1: Contact Details ─── */
function StepContact({ form, setForm }) {
  const [country, setCountry] = useState(COUNTRIES[0]);
  const [countryOpen, setCountryOpen] = useState(false);

  const toggle = (field) => setForm((f) => ({ ...f, [field]: !f[field] }));

  return (
    <div className="glass-card-strong rounded-2xl p-6 space-y-5">
      <h2 className="text-white font-bold text-lg">Contact Details</h2>

      {/* Name + Email */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-xs text-zinc-500 mb-1.5">*Full Legal Name</label>
          <input
            type="text"
            value={form.fullName}
            onChange={(e) => setForm({ ...form, fullName: e.target.value })}
            placeholder="Full legal name"
            className="w-full glass-card border border-white/[0.08] rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-accent bg-transparent"
          />
        </div>
        <div>
          <label className="block text-xs text-zinc-500 mb-1.5">*Email</label>
          <input
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="Email address"
            className="w-full glass-card border border-white/[0.08] rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-accent bg-transparent"
          />
        </div>
      </div>

      {/* Phone */}
      <div>
        <label className="block text-xs text-zinc-500 mb-1.5">*Phone Number</label>
        <div className="flex gap-2">
          <div className="relative">
            <button
              type="button"
              onClick={() => setCountryOpen(!countryOpen)}
              className="flex items-center gap-2 glass-card border border-white/[0.08] rounded-xl px-3 py-3 text-white text-sm focus:outline-none min-w-[96px] h-full"
            >
              <span>{country.flag}</span>
              <span className="text-zinc-400 text-xs">{country.dial}</span>
              <svg className="w-3 h-3 text-zinc-500 ml-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {countryOpen && (
              <div className="absolute top-full left-0 mt-1 z-20 glass-card-strong border border-white/[0.1] rounded-xl overflow-hidden min-w-[150px]">
                {COUNTRIES.map((c) => (
                  <button
                    key={c.code}
                    type="button"
                    onClick={() => { setCountry(c); setCountryOpen(false); }}
                    className="flex items-center gap-2 w-full px-3 py-2.5 text-sm text-zinc-300 hover:bg-white/10 text-left"
                  >
                    <span>{c.flag}</span>
                    <span>{c.code}</span>
                    <span className="text-zinc-500 ml-auto text-xs">{c.dial}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
          <input
            type="tel"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            placeholder="Phone number"
            className="flex-1 glass-card border border-white/[0.08] rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-accent bg-transparent"
          />
        </div>
      </div>

      {/* Address */}
      <div>
        <label className="block text-xs text-zinc-500 mb-1.5">Address</label>
        <input
          type="text"
          value={form.address}
          onChange={(e) => setForm({ ...form, address: e.target.value })}
          placeholder="Your home address"
          className="w-full glass-card border border-white/[0.08] rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-accent bg-transparent"
        />
      </div>

      {/* Divider */}
      <div className="border-t border-white/[0.06]" />

      {/* SMS consent */}
      <label className="flex items-start gap-3 cursor-pointer select-none">
        <input
          type="checkbox"
          checked={form.smsConsent}
          onChange={() => toggle('smsConsent')}
          className="mt-0.5 flex-shrink-0"
        />
        <span className="text-zinc-400 text-xs leading-relaxed">
          Please check to agree to receive automated texts and emails about your unit reservation. You may receive up to 5 msgs/mo. Text and data rates may apply. Reply STOP to opt out at any time. Please see our{' '}
          <span className="text-accent underline cursor-pointer">Terms</span> and{' '}
          <span className="text-accent underline cursor-pointer">Privacy Policy</span> for more info.
        </span>
      </label>

      {/* Rental agreement — required */}
      <label className="flex items-start gap-3 cursor-pointer select-none">
        <input
          type="checkbox"
          checked={form.agreeRental}
          onChange={() => toggle('agreeRental')}
          className="mt-0.5 flex-shrink-0"
        />
        <div>
          <span className="text-zinc-300 text-sm">
            By checking this box, I acknowledge that I have read, understand, acknowledge, and agree to Urbanstash&apos;s{' '}
            <span className="text-accent underline cursor-pointer">Rental Agreement</span>,{' '}
            <span className="text-accent underline cursor-pointer">Privacy Policy</span>, and{' '}
            <span className="text-accent underline cursor-pointer">Terms of Service</span>.
          </span>
        </div>
      </label>
    </div>
  );
}

/* ─── Step 2: Billing ─── */
function StepBilling({ form, setForm }) {
  const fmtCard = (v) => v.replace(/\D/g, '').slice(0, 16).replace(/(.{4})/g, '$1 ').trim();
  const fmtExpiry = (v) => {
    const d = v.replace(/\D/g, '').slice(0, 4);
    return d.length >= 3 ? d.slice(0, 2) + '/' + d.slice(2) : d;
  };

  return (
    <div className="glass-card-strong rounded-2xl p-6 space-y-4">
      <h2 className="text-white font-bold text-lg">Billing and Purchase</h2>

      <div>
        <label className="block text-xs text-zinc-500 mb-1.5">*Cardholder Name</label>
        <input
          type="text"
          value={form.cardName}
          onChange={(e) => setForm({ ...form, cardName: e.target.value })}
          placeholder="Name on card"
          className="w-full glass-card border border-white/[0.08] rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-accent bg-transparent"
        />
      </div>

      <div>
        <label className="block text-xs text-zinc-500 mb-1.5">*Card Number</label>
        <div className="relative">
          <input
            type="text"
            value={form.cardNumber}
            onChange={(e) => setForm({ ...form, cardNumber: fmtCard(e.target.value) })}
            placeholder="1234 5678 9012 3456"
            className="w-full glass-card border border-white/[0.08] rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-accent bg-transparent pr-16"
          />
          <div className="absolute right-3 top-1/2 -translate-y-1/2 flex">
            <div className="w-7 h-5 bg-red-500 rounded opacity-90" />
            <div className="w-7 h-5 bg-yellow-400 rounded opacity-90 -ml-3" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-xs text-zinc-500 mb-1.5">*Expiry Date</label>
          <input
            type="text"
            value={form.expiry}
            onChange={(e) => setForm({ ...form, expiry: fmtExpiry(e.target.value) })}
            placeholder="MM/YY"
            className="w-full glass-card border border-white/[0.08] rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-accent bg-transparent"
          />
        </div>
        <div>
          <label className="block text-xs text-zinc-500 mb-1.5">*CVV</label>
          <input
            type="text"
            value={form.cvv}
            onChange={(e) => setForm({ ...form, cvv: e.target.value.replace(/\D/g, '').slice(0, 4) })}
            placeholder="123"
            className="w-full glass-card border border-white/[0.08] rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-accent bg-transparent"
          />
        </div>
      </div>

      <div className="glass-card rounded-xl p-4 flex items-center gap-3">
        <svg className="w-5 h-5 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
        <p className="text-zinc-400 text-xs">Your payment is encrypted and secure. We never store your card details.</p>
      </div>
    </div>
  );
}

/* ─── Main Page ─── */
export default function BookingPage() {
  const { slug } = useParams();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const unitId = searchParams.get('unit');

  const location = getLocationBySlug(slug);
  const unit = location?.units.find((u) => u.id === unitId) || location?.units[0];

  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    fullName: '', email: '', phone: '', address: '',
    smsConsent: true,
    agreeRental: false, age18: false, noProhibited: false,
    cardName: '', cardNumber: '', expiry: '', cvv: '',
  });

  if (!location || !unit) {
    return (
      <div className="min-h-screen bg-theme text-white flex items-center justify-center">
        <p className="text-zinc-400">Unit not found.</p>
      </div>
    );
  }

  const canContinue = () => {
    if (step === 0) return !!(form.fullName && form.email && form.phone && form.agreeRental);
    if (step === 1) return !!(form.cardName && form.cardNumber.replace(/\s/g, '').length === 16 && form.expiry && form.cvv);
    return false;
  };

  const handleContinue = () => {
    if (step < STEPS.length - 1) {
      setStep(step + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate(`/units/${slug}`);
    }
  };

  return (
    <div className="min-h-screen bg-theme text-white">
      <Header showFindStorage={false} />
      <main className="max-w-5xl mx-auto px-4 pt-8 pb-28">
        <h1 className="text-2xl font-black uppercase tracking-tight text-center mb-6">Complete Your Booking</h1>

        {/* Step tabs */}
        <div className="flex border-b border-white/[0.08] mb-8">
          {STEPS.map((s, i) => (
            <button
              key={i}
              onClick={() => i < step && setStep(i)}
              className={`flex-1 pb-3 text-sm font-medium text-center border-b-2 transition-colors ${
                i === step
                  ? 'border-accent text-accent'
                  : i < step
                  ? 'border-white/20 text-zinc-400 cursor-pointer hover:text-white'
                  : 'border-transparent text-zinc-600 cursor-default'
              }`}
            >
              {s}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-5 gap-6">
          <div className="lg:col-span-3">
            {step === 0 && <StepContact form={form} setForm={setForm} />}
            {step === 1 && <StepBilling form={form} setForm={setForm} />}
          </div>
          <div className="lg:col-span-2">
            <UnitSummary unit={unit} location={location} />
          </div>
        </div>
      </main>

      {/* Fixed bottom bar */}
      <div className="fixed bottom-0 left-0 right-0 z-10 border-t border-white/[0.06]" style={{ backgroundColor: 'var(--bg-color, #000)' }}>
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-end gap-4">
          <button
            onClick={() => step === 0 ? navigate(-1) : setStep(step - 1)}
            className="flex items-center gap-1.5 text-white text-sm font-medium hover:text-accent transition-colors px-2"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back
          </button>
          <button
            onClick={handleContinue}
            disabled={!canContinue()}
            className={`px-8 py-3 rounded-full font-bold text-sm transition-opacity ${
              canContinue()
                ? 'bg-accent-cta text-accent-cta-contrast cursor-pointer hover:opacity-90'
                : 'bg-white/10 text-zinc-500 cursor-not-allowed'
            }`}
          >
            {step === STEPS.length - 1 ? 'Complete Booking' : 'Continue'}
          </button>
        </div>
      </div>
    </div>
  );
}
