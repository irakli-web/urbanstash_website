import { faqEntries } from '../data/sizes';

export default function PageFaqSectionV2() {
  return (
    <section className="bg-charcoal py-20 md:py-24 px-4 md:px-6 border-t border-white/[0.04]">
      <div className="max-w-3xl mx-auto">
        <p className="text-accent text-xs font-bold uppercase tracking-widest text-center mb-3">Got questions?</p>
        <h2 className="text-3xl md:text-4xl font-black text-white text-center mb-12 uppercase tracking-tight">
          FAQ
        </h2>
        <div className="space-y-3">
          {faqEntries.map((item, i) => (
            <details
              key={i}
              className="group rounded-xl glass-card overflow-hidden hover:bg-white/[0.06]"
            >
              <summary className="px-5 py-4 cursor-pointer font-medium text-white list-none flex justify-between items-center gap-4 transition-colors">
                <span>{item.q}</span>
                <svg
                  className="w-5 h-5 text-accent flex-shrink-0 group-open:rotate-90 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </summary>
              <div className="px-5 pb-4 text-zinc-400 text-sm leading-relaxed border-t border-white/[0.04] pt-3">
                {item.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
