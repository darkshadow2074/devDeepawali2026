'use client';

import { Users, Clock, MapPin, Sunrise, Check } from 'lucide-react';
import { boatOptions } from '@/data/site-config';
import { Reveal } from '@/components/Reveal';
import { getWhatsAppLink, trackWhatsAppClick } from '@/lib/contact';
import { cn } from '@/lib/utils';

export function BoatOptions() {
  return (
    <section id="boats" className="section-padding relative bg-navy-960/50">
      <div className="container-max">
        <Reveal className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          <p className="text-sm font-medium text-gold-300 uppercase tracking-widest mb-3">
            Boat Booking Options
          </p>
          <h2 className="heading-serif text-3xl sm:text-4xl lg:text-5xl text-cream leading-tight">
            Choose Your <span className="gold-text">Ganga Experience</span>
          </h2>
          <p className="mt-4 text-cream/65 text-base sm:text-lg">
            Whether you&apos;re a couple seeking a shared adventure or a family wanting
            a private evening on the river, we have the perfect boat for your Dev
            Deepawali experience.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {boatOptions.map((boat, idx) => (
            <Reveal key={boat.id} delay={idx * 150}>
              <div
                className={cn(
                  'relative h-full glass-card overflow-hidden group flex flex-col',
                  boat.popular && 'gold-border glow-gold'
                )}
              >
                {boat.popular && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-gradient-to-r from-gold-400 to-saffron-500 text-navy-950">
                      Popular
                    </span>
                  </div>
                )}

                {/* Image */}
                <div className="relative h-52 sm:h-60 overflow-hidden">
                  <img
                    src={boat.image}
                    alt={boat.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7 flex flex-col flex-1">
                  <h3 className="heading-serif text-2xl sm:text-3xl text-cream">
                    {boat.name}
                  </h3>
                  <p className="mt-1 text-sm text-cream/55">
                    Suitable for: {boat.suitableFor}
                  </p>

                  {/* Price */}
                  <div className="mt-4">
                    <span className="text-lg sm:text-xl font-medium text-gold-300">
                      {boat.priceLabel}
                    </span>
                  </div>

                  {/* Features */}
                  <ul className="mt-5 space-y-2.5 flex-1">
                    {boat.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5 text-sm text-cream/75">
                        <Check className="w-4 h-4 text-gold-400 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Boat details */}
                  <div className="mt-5 grid grid-cols-2 gap-3 text-xs text-cream/50 border-t border-white/5 pt-5">
                    <div className="flex items-center gap-2">
                      <Users className="w-3.5 h-3.5 text-gold-400/60" />
                      <span>Capacity: {boat.capacity}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-gold-400/60" />
                      <span>Duration: {boat.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-gold-400/60" />
                      <span>Departure: {boat.departureLocation}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Sunrise className="w-3.5 h-3.5 text-gold-400/60" />
                      <span>Time: {boat.departureTime}</span>
                    </div>
                  </div>

                  {/* CTA */}
                  <a
                    href={getWhatsAppLink(
                      `Hello, I want to book a ${boat.name} for Dev Deepawali in Varanasi. Please share availability and pricing.`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackWhatsAppClick(`boat_${boat.id}`)}
                    className={cn(
                      'mt-6 w-full text-center py-3.5 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]',
                      boat.popular
                        ? 'btn-gold'
                        : 'btn-outline-gold'
                    )}
                  >
                    {boat.ctaLabel}
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
