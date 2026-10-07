import { siteConfig } from '@/data/site-config';

export function getWhatsAppLink(message?: string): string {
  const text = encodeURIComponent(message ?? siteConfig.contact.whatsappMessage);
  return `https://wa.me/${siteConfig.contact.whatsapp}?text=${text}`;
}

export function getPhoneLink(): string {
  return `tel:${siteConfig.contact.phoneRaw}`;
}

type EventCategory =
  | 'whatsapp_click'
  | 'call_click'
  | 'boat_option_click'
  | 'main_cta_click'
  | 'faq_interaction';

export function trackEvent(category: EventCategory, label: string): void {
  if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
    (window as any).gtag('event', category, {
      event_label: label,
    });
  }
}

export function trackWhatsAppClick(label: string): void {
  trackEvent('whatsapp_click', label);
}

export function trackCallClick(label: string): void {
  trackEvent('call_click', label);
}
