import React, { useRef, useState, useCallback } from 'react';

export default function LocationVideoCarousel({ title = 'Watch our story & location', items = [] }) {
  const scrollerRef = useRef(null);
  const [activeVideo, setActiveVideo] = useState(null);

  const scrollBy = useCallback((dir) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector('[data-video-card]');
    const step = card ? card.offsetWidth + 16 : 200;
    el.scrollBy({ left: dir * step, behavior: 'smooth' });
  }, []);

  if (!items.length) return null;

  return (
    <div className="mb-10">
      <div className="flex items-center justify-between gap-4 mb-4">
        <h2 className="text-lg font-bold text-accent uppercase tracking-wide">{title}</h2>
        <div className="flex gap-2 flex-shrink-0">
          <button
            type="button"
            onClick={() => scrollBy(-1)}
            className="w-9 h-9 rounded-full glass-card text-zinc-400 hover:text-white hover:bg-white/10 flex items-center justify-center transition-colors"
            aria-label="Previous videos"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => scrollBy(1)}
            className="w-9 h-9 rounded-full glass-card text-zinc-400 hover:text-white hover:bg-white/10 flex items-center justify-center transition-colors"
            aria-label="Next videos"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      <div
        ref={scrollerRef}
        className="flex gap-4 overflow-x-auto pb-2 scroll-smooth scrollbar-hide -mx-1 px-1"
      >
        {items.map((item, i) => (
          <button
            key={item.id || i}
            type="button"
            data-video-card
            onClick={() => setActiveVideo(item)}
            className="group flex flex-col flex-shrink-0 w-[140px] sm:w-[160px] text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-2xl"
          >
            <div className="relative aspect-[9/16] w-full rounded-2xl overflow-hidden border border-white/[0.06] bg-zinc-900 shadow-lg">
              <img
                src={item.thumbnail}
                alt=""
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/35 transition-colors" />
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                <svg className="w-5 h-5 text-zinc-900 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            </div>
            <p className="mt-3 text-sm font-semibold text-white leading-snug line-clamp-2">{item.title}</p>
          </button>
        ))}
      </div>

      {activeVideo && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Video player"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="relative w-full max-w-3xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/[0.06]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveVideo(null)}
              className="absolute top-3 right-3 z-10 w-10 h-10 rounded-full glass-card-strong text-white hover:bg-white/20 flex items-center justify-center"
              aria-label="Close video"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <iframe
              key={activeVideo.id || activeVideo.videoUrl}
              title={activeVideo.title}
              src={
                activeVideo.videoUrl.includes('?')
                  ? `${activeVideo.videoUrl}&autoplay=1`
                  : `${activeVideo.videoUrl}?autoplay=1`
              }
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </div>
  );
}
