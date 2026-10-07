'use client';

import { Phone } from 'lucide-react';
import { bookingSteps, siteConfig } from '@/data/site-config';
import { Reveal } from '@/components/Reveal';
import { getWhatsAppLink, trackWhatsAppClick, trackCallClick } from '@/lib/contact';

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export function BookingProcess() {
  return (
    <section id="contact" className="section-padding bg-navy-960/50">
      <div className="container-max">
        <Reveal className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          <p className="text-sm font-medium text-gold-300 uppercase tracking-widest mb-3">
            Booking Process
          </p>
          <h2 className="heading-serif text-3xl sm:text-4xl lg:text-5xl text-cream leading-tight">
            How To Book <span className="gold-text">Your Boat</span>
          </h2>
          <p className="mt-4 text-cream/65 text-base sm:text-lg">
            Booking is simple and takes just a few minutes.
          </p>
        </Reveal>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-4xl mx-auto mb-12">
          {bookingSteps.map((step, idx) => (
            <Reveal key={step.number} delay={idx * 150}>
              <div className="relative glass-card p-7 h-full text-center">
                <div className="text-5xl font-serif font-light gold-text mb-3">
                  {step.number}
                </div>
                <h3 className="font-serif text-xl text-cream mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-cream/65 leading-relaxed">
                  {step.description}
                </p>

                {/* Connector line */}
                {idx < bookingSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 lg:-right-5 w-8 h-px bg-gradient-to-r from-gold-500/40 to-transparent" />
                )}
              </div>
            </Reveal>
          ))}
        </div>

        {/* CTA */}
        <Reveal delay={200}>
          <div className="flex flex-col items-center gap-4">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick('booking_process_whatsapp')}
              className="btn-whatsapp px-8 py-4 text-base sm:text-lg inline-flex items-center gap-3"
            >
              <WhatsAppIcon className="w-6 h-6" />
              Book on WhatsApp
            </a>
            <a
              href={`tel:${siteConfig.contact.phoneRaw}`}
              onClick={() => trackCallClick('booking_process_call')}
              className="inline-flex items-center gap-2 text-cream/70 hover:text-gold-300 transition-colors text-lg"
            >
              <Phone className="w-4 h-4" />
              {siteConfig.contact.phone}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
