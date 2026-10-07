'use client';

import { siteConfig } from '@/data/site-config';
import { Reveal } from '@/components/Reveal';
import { getWhatsAppLink, trackWhatsAppClick } from '@/lib/contact';

const highlights = [
  { emoji: '🪔', text: 'Thousands of Diyas' },
  { emoji: '🌊', text: 'Ganga River Experience' },
  { emoji: '🏛️', text: 'Illuminated Ghats' },
  { emoji: '🙏', text: 'Spiritual Atmosphere' },
  { emoji: '📸', text: 'Incredible Photo Opportunities' },
];

export function DevDeepawaliIntro() {
  return (
    <section id="experience" className="section-padding relative">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Image */}
          <Reveal>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden gold-border shadow-2xl shadow-black/50">
                <img
                  src={siteConfig.images.intro}
                  alt="Ganga Aarti at Dashashwamedh Ghat in Varanasi at night"
                  className="w-full h-[400px] sm:h-[500px] lg:h-[560px] object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-960/50 to-transparent" />
              </div>
              {/* Decorative glow */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gold-500/10 rounded-full blur-3xl -z-10" />
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-saffron-500/10 rounded-full blur-2xl -z-10" />
            </div>
          </Reveal>

          {/* Right: Content */}
          <Reveal delay={150}>
            <div>
              <p className="text-sm font-medium text-gold-300 uppercase tracking-widest mb-3">
                Dev Deepawali
              </p>
              <h2 className="heading-serif text-3xl sm:text-4xl lg:text-5xl text-cream leading-tight text-balance">
                Where the Ganga Glows with a{' '}
                <span className="gold-text">Million Lights</span>
              </h2>
              <p className="mt-6 text-base sm:text-lg text-cream/70 leading-relaxed">
                Once a year, the ghats of Varanasi transform into a breathtaking river
                of light. Thousands of diyas illuminate the steps of the Ganga, temples
                glow against the night sky and the river reflects the magic of one of
                India&apos;s most spectacular celebrations.
              </p>
              <p className="mt-4 text-base sm:text-lg text-cream/70 leading-relaxed">
                Experiencing Dev Deepawali from a boat provides a unique panoramic view
                of the illuminated ghats — a perspective impossible to match from the
                shore.
              </p>

              {/* Highlights */}
              <ul className="mt-8 grid sm:grid-cols-2 gap-3">
                {highlights.map((item) => (
                  <li
                    key={item.text}
                    className="flex items-center gap-3 glass-card px-4 py-3"
                  >
                    <span className="text-xl" aria-hidden="true">
                      {item.emoji}
                    </span>
                    <span className="text-sm sm:text-base text-cream/85 font-medium">
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppClick('intro_enquire')}
                  className="btn-gold px-6 py-3 inline-flex items-center gap-2 text-sm"
                >
                  Enquire on WhatsApp
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
