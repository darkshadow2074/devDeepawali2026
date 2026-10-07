'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { siteConfig, navLinks } from '@/data/site-config';
import { getWhatsAppLink, trackWhatsAppClick, trackCallClick } from '@/lib/contact';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          scrolled
            ? 'bg-navy-950/90 backdrop-blur-lg border-b border-gold-500/15 shadow-lg shadow-black/40'
            : 'bg-transparent'
        )}
      >
        <nav className="container-max px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2 group"
            aria-label={siteConfig.business.name}
          >
            <span className="text-2xl" aria-hidden="true">🪔</span>
            <span className="font-serif text-lg sm:text-xl font-medium text-cream/90 group-hover:text-gold-300 transition-colors leading-tight">
              {siteConfig.business.name}
            </span>
          </a>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-sm font-medium text-cream/70 hover:text-gold-300 transition-colors duration-200 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold-400 transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${siteConfig.contact.phoneRaw}`}
              onClick={() => trackCallClick('navbar')}
              className="flex items-center gap-2 text-sm text-cream/70 hover:text-gold-300 transition-colors"
              aria-label={`Call ${siteConfig.contact.phone}`}
            >
              <Phone className="w-4 h-4" />
              <span>{siteConfig.contact.phone}</span>
            </a>
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick('navbar_book_your_boat')}
              className="btn-gold px-5 py-2.5 text-sm inline-flex items-center gap-2"
            >
              <span aria-hidden="true">🪔</span>
              Book Your Boat
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden flex items-center justify-center w-10 h-10 text-cream/90 hover:text-gold-300 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-navy-960/95 backdrop-blur-xl pt-20"
            onClick={() => setMobileOpen(false)}
          >
            <nav className="container-max px-6 flex flex-col gap-2" onClick={(e) => e.stopPropagation()}>
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-xl font-serif text-cream/90 hover:text-gold-300 transition-colors py-4 border-b border-white/5"
                >
                  {link.label}
                </a>
              ))}
              <div className="flex flex-col gap-3 mt-6">
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppClick('mobile_menu_book')}
                  className="btn-gold px-6 py-3.5 text-base text-center"
                >
                  🪔 Book Your Boat
                </a>
                <a
                  href={`tel:${siteConfig.contact.phoneRaw}`}
                  onClick={() => trackCallClick('mobile_menu_call')}
                  className="btn-outline-gold px-6 py-3.5 text-base text-center flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  {siteConfig.contact.phone}
                </a>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
