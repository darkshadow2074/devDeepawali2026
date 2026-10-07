'use client';

import { experiences } from '@/data/site-config';
import { Reveal } from '@/components/Reveal';

export function Experiences() {
  return (
    <section className="section-padding bg-navy-960/50">
      <div className="container-max">
        <Reveal className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          <p className="text-sm font-medium text-gold-300 uppercase tracking-widest mb-3">
            What You Will Experience
          </p>
          <h2 className="heading-serif text-3xl sm:text-4xl lg:text-5xl text-cream leading-tight">
            An Unforgettable <span className="gold-text">Night on the Ganga</span>
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {experiences.map((exp, idx) => (
            <Reveal key={exp.title} delay={idx * 80}>
              <div className="group relative h-72 rounded-2xl overflow-hidden cursor-default">
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-960 via-navy-960/40 to-transparent" />

                <div className="absolute inset-0 flex flex-col justify-end p-5">
                  <span className="text-3xl mb-2" aria-hidden="true">
                    {exp.emoji}
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl text-cream mb-1.5">
                    {exp.title}
                  </h3>
                  <p className="text-sm text-cream/65 leading-relaxed">
                    {exp.description}
                  </p>
                </div>

                {/* Gold border on hover */}
                <div className="absolute inset-0 border-2 border-gold-500/0 rounded-2xl transition-all duration-300 group-hover:border-gold-500/40" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
