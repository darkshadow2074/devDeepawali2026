'use client';

import { Phone } from 'lucide-react';
import { siteConfig } from '@/data/site-config';
import { Reveal } from '@/components/Reveal';
import { getWhatsAppLink, trackWhatsAppClick, trackCallClick } from '@/lib/contact';

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={siteConfig.images.finalCta}
          alt="Ganga Aarti ceremony on the ghats of Varanasi at night"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-960/85 via-navy-960/75 to-navy-960/90" />
      </div>

      {/* Floating diya particles */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {[
          { left: '20%', bottom: '15%', delay: '0s', duration: '7s' },
          { left: '70%', bottom: '10%', delay: '2s', duration: '6s' },
          { left: '45%', bottom: '25%', delay: '1s', duration: '8s' },
        ].map((p, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-gold-400/50"
            style={{
              left: p.left,
              bottom: p.bottom,
              animation: `float-up ${p.duration} ease-out ${p.delay} infinite`,
              boxShadow: '0 0 8px rgba(255, 180, 50, 0.7)',
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container-max px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36 text-center">
        <Reveal>
          <h2 className="heading-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-cream leading-tight text-balance max-w-3xl mx-auto">
            Make This Dev Deepawali{' '}
            <span className="gold-text">Unforgettable</span>
          </h2>
        </Reveal>

        <Reveal delay={150}>
          <p className="mt-6 text-base sm:text-lg lg:text-xl text-cream/75 max-w-2xl mx-auto leading-relaxed text-balance">
            See Varanasi illuminated from the Ganga and experience one of India&apos;s
            most magical nights from the river.
          </p>
        </Reveal>

        <Reveal delay={300}>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick('final_cta_book')}
              className="btn-gold px-8 py-4 text-base sm:text-lg w-full sm:w-auto inline-flex items-center justify-center gap-2"
            >
              <span aria-hidden="true">🪔</span>
              Book Your Boat
            </a>
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick('final_cta_whatsapp')}
              className="btn-whatsapp px-8 py-4 text-base sm:text-lg w-full sm:w-auto inline-flex items-center justify-center gap-2"
            >
              <WhatsAppIcon className="w-5 h-5" />
              WhatsApp: {siteConfig.contact.phone}
            </a>
            <a
              href={`tel:${siteConfig.contact.phoneRaw}`}
              onClick={() => trackCallClick('final_cta_call')}
              className="btn-outline-gold px-8 py-4 text-base sm:text-lg w-full sm:w-auto inline-flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
