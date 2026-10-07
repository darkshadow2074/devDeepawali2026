'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { faqItems } from '@/data/site-config';
import { Reveal } from '@/components/Reveal';
import { getWhatsAppLink, trackWhatsAppClick } from '@/lib/contact';

export function FAQ() {
  return (
    <section id="faq" className="section-padding bg-navy-960/50">
      <div className="container-max">
        <Reveal className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          <p className="text-sm font-medium text-gold-300 uppercase tracking-widest mb-3">
            FAQ
          </p>
          <h2 className="heading-serif text-3xl sm:text-4xl lg:text-5xl text-cream leading-tight">
            Frequently Asked <span className="gold-text">Questions</span>
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-3">
              {faqItems.map((item, idx) => (
                <AccordionItem
                  key={idx}
                  value={`item-${idx}`}
                  className="glass-card border-b-0 px-5 sm:px-6 rounded-2xl overflow-hidden data-[state=open]:border-gold-500/30 transition-colors"
                >
                  <AccordionTrigger
                    className="text-left text-cream font-medium text-base sm:text-lg hover:no-underline hover:text-gold-200 transition-colors py-5 [&[data-state=open]>span]:text-gold-300"
                    onClick={() => trackWhatsAppClick(`faq_open_${idx}`)}
                  >
                    <span className="pr-4">{item.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-cream/65 text-sm sm:text-base leading-relaxed pb-5">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            {/* Still have questions CTA */}
            <div className="mt-8 text-center">
              <p className="text-cream/60 mb-4 text-sm sm:text-base">
                Still have questions?
              </p>
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick('faq_contact')}
                className="btn-gold px-6 py-3 inline-flex items-center gap-2 text-sm"
              >
                Ask on WhatsApp
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
