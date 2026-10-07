'use client';

import { Eye, MessageCircle, Anchor, MapPin, ShieldCheck, Users } from 'lucide-react';
import { whyBookWithUs } from '@/data/site-config';
import { Reveal } from '@/components/Reveal';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Eye,
  MessageCircle,
  Anchor,
  MapPin,
  ShieldCheck,
  Users,
};

export function WhyBookWithUs() {
  return (
    <section className="section-padding">
      <div className="container-max">
        <Reveal className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          <p className="text-sm font-medium text-gold-300 uppercase tracking-widest mb-3">
            Why Book With Us
          </p>
          <h2 className="heading-serif text-3xl sm:text-4xl lg:text-5xl text-cream leading-tight">
            A Premium <span className="gold-text">River Experience</span>
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {whyBookWithUs.map((feature, idx) => {
            const Icon = iconMap[feature.icon] ?? Eye;
            return (
              <Reveal key={feature.title} delay={idx * 100}>
                <div className="group h-full glass-card overflow-hidden flex flex-col transition-all duration-300 hover:border-gold-500/30 hover:bg-white/[0.07]">
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                    <div className="absolute bottom-3 left-4">
                      <div className="w-10 h-10 rounded-full bg-gold-500/20 backdrop-blur-sm border border-gold-500/30 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-gold-300" />
                      </div>
                    </div>
                  </div>
                  <div className="p-5 flex-1">
                    <h3 className="font-serif text-xl text-cream mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-cream/65 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
