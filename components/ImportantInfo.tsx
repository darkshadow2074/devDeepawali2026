'use client';

import { Info } from 'lucide-react';
import { importantInfo } from '@/data/site-config';
import { Reveal } from '@/components/Reveal';

export function ImportantInfo() {
  return (
    <section className="section-padding">
      <div className="container-max">
        <Reveal className="max-w-3xl mx-auto">
          <div className="glass-card p-6 sm:p-8 lg:p-10 gold-border">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 rounded-full bg-gold-500/20 border border-gold-500/30 flex items-center justify-center flex-shrink-0">
                <Info className="w-5 h-5 text-gold-300" />
              </div>
              <h2 className="heading-serif text-2xl sm:text-3xl lg:text-4xl text-cream">
                Before You <span className="gold-text">Book</span>
              </h2>
            </div>

            <ul className="space-y-4">
              {importantInfo.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-cream/70">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-400 mt-2.5 flex-shrink-0" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
