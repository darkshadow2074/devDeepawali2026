'use client';

import { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { galleryImages } from '@/data/site-config';
import { Reveal } from '@/components/Reveal';
import { cn } from '@/lib/utils';

export function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const showNext = useCallback(() => {
    setLightboxIndex((prev) =>
      prev === null ? prev : (prev + 1) % galleryImages.length
    );
  }, []);

  const showPrev = useCallback(() => {
    setLightboxIndex((prev) =>
      prev === null ? prev : (prev - 1 + galleryImages.length) % galleryImages.length
    );
  }, []);

  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') showNext();
      if (e.key === 'ArrowLeft') showPrev();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKey);
    };
  }, [lightboxIndex, closeLightbox, showNext, showPrev]);

  return (
    <section id="gallery" className="section-padding">
      <div className="container-max">
        <Reveal className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          <p className="text-sm font-medium text-gold-300 uppercase tracking-widest mb-3">
            Gallery
          </p>
          <h2 className="heading-serif text-3xl sm:text-4xl lg:text-5xl text-cream leading-tight">
            Glimpses of <span className="gold-text">Dev Deepawali</span>
          </h2>
          <p className="mt-4 text-cream/65 text-base sm:text-lg">
            A visual journey through the magic of Varanasi&apos;s ghats, diyas and the
            Ganga at night.
          </p>
        </Reveal>

        {/* Masonry grid */}
        <div className="columns-2 sm:columns-3 lg:columns-4 gap-3 sm:gap-4 [&>*]:mb-3 sm:[&>*]:mb-4">
          {galleryImages.map((image, idx) => (
            <Reveal key={idx} delay={(idx % 4) * 80}>
              <button
                onClick={() => setLightboxIndex(idx)}
                className="group relative w-full rounded-xl overflow-hidden gold-border block"
                aria-label={`View image: ${image.alt}`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  style={{ aspectRatio: idx % 3 === 0 ? '3/4' : idx % 3 === 1 ? '1/1' : '4/3' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-960/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-xs text-cream/80 line-clamp-2">{image.alt}</p>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-navy-960/95 backdrop-blur-xl flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 w-11 h-11 rounded-full glass-card flex items-center justify-center text-cream hover:text-gold-300 transition-colors z-10"
            aria-label="Close gallery"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Prev */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
            className="absolute left-2 sm:left-6 w-11 h-11 rounded-full glass-card flex items-center justify-center text-cream hover:text-gold-300 transition-colors z-10"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Image */}
          <div
            className="max-w-5xl w-full px-16 sm:px-20"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={galleryImages[lightboxIndex].src.replace('w=800', 'w=1600')}
              alt={galleryImages[lightboxIndex].alt}
              className="w-full max-h-[80vh] object-contain rounded-lg"
            />
            <p className="mt-4 text-center text-sm text-cream/60">
              {galleryImages[lightboxIndex].alt}
            </p>
          </div>

          {/* Next */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            className="absolute right-2 sm:right-6 w-11 h-11 rounded-full glass-card flex items-center justify-center text-cream hover:text-gold-300 transition-colors z-10"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      )}
    </section>
  );
}
