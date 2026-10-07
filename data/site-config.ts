export const siteConfig = {
  business: {
    name: 'Banaras Dev Deepawali',
    tagline: 'Dev Deepawali Boat Experience • Varanasi',
    description:
      'Book your Dev Deepawali boat experience in Varanasi and witness the illuminated ghats, thousands of diyas and magical Ganga views from the river.',
    url: '',
    ogImage:
      'https://images.pexels.com/photos/27670662/pexels-photo-27670662.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630&fit=crop',
  },
  contact: {
    phone: '+91 81155 33981',
    phoneRaw: '+918115533981',
    whatsapp: '918115533981',
    whatsappMessage:
      'Hello, I want to book a Dev Deepawali boat in Varanasi. Please share boat options, availability and pricing.',
  },
  event: {
    name: 'Dev Deepawali 2026',
    location: 'Varanasi (Banaras), India',
    year: '2026',
  },
  seo: {
    title:
      'Dev Deepawali Boat Booking Varanasi | Experience Dev Deepawali From Ganga',
    description:
      'Book your Dev Deepawali boat experience in Varanasi and witness the illuminated ghats, thousands of diyas and magical Ganga views from the river.',
    keywords: [
      'Dev Deepawali boat booking',
      'Dev Deepawali Varanasi',
      'Varanasi boat booking',
      'Dev Deepawali boat ride',
      'Ganga boat ride',
      'Varanasi Ganga boat',
      'Dev Deepawali 2026',
      'Banaras Dev Deepawali',
    ],
  },
  images: {
    hero: 'https://images.pexels.com/photos/27670662/pexels-photo-27670662.jpeg?auto=compress&cs=tinysrgb&w=1920',
    heroFallback:
      'https://images.pexels.com/photos/8112552/pexels-photo-8112552.jpeg?auto=compress&cs=tinysrgb&w=1920',
    intro:
      'https://images.pexels.com/photos/12387057/pexels-photo-12387057.jpeg?auto=compress&cs=tinysrgb&w=1200',
    finalCta:
      'https://images.pexels.com/photos/35622524/pexels-photo-35622524.jpeg?auto=compress&cs=tinysrgb&w=1920',
  },
} as const;

export interface BoatOption {
  id: string;
  name: string;
  suitableFor: string;
  features: string[];
  priceLabel: string;
  image: string;
  ctaLabel: string;
  capacity: string;
  duration: string;
  departureLocation: string;
  departureTime: string;
  popular?: boolean;
}

export const boatOptions: BoatOption[] = [
  {
    id: 'shared',
    name: 'Shared Motor Boat',
    suitableFor: 'Couples, friends and small groups',
    features: [
      'Comfortable seating',
      'Panoramic ghat views',
      'Shared Dev Deepawali experience',
      'Shared motor boat',
      'Ideal for budget travellers',
    ],
    priceLabel: 'Price on Request',
    image:
      'https://images.pexels.com/photos/36527284/pexels-photo-36527284.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ctaLabel: 'Book Shared Boat',
    capacity: 'To be confirmed at booking',
    duration: 'To be confirmed at booking',
    departureLocation: 'To be confirmed at booking',
    departureTime: 'To be confirmed at booking',
  },
  {
    id: 'private',
    name: 'Private Boat',
    suitableFor: 'Families, couples and private groups',
    features: [
      'Private boat just for your group',
      'Exclusive river experience',
      'Flexible group experience',
      'Better photography opportunities',
      'Comfortable seating',
    ],
    priceLabel: 'Starting From ₹4500',
    image:
      'https://images.pexels.com/photos/8112552/pexels-photo-8112552.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ctaLabel: 'Book Private Boat',
    capacity: 'To be confirmed at booking',
    duration: 'To be confirmed at booking',
    departureLocation: 'To be confirmed at booking',
    departureTime: 'To be confirmed at booking',
    popular: true,
  },
];

export interface Feature {
  icon: string;
  title: string;
  description: string;
  image: string;
}

export const whyBookWithUs: Feature[] = [
  {
    icon: 'Eye',
    title: 'Prime Ganga Experience',
    description:
      'Enjoy panoramic views of Varanasi’s illuminated ghats from the river.',
    image:
      'https://images.pexels.com/photos/21047821/pexels-photo-21047821.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: 'MessageCircle',
    title: 'Easy Booking',
    description: 'Quick booking through WhatsApp or phone.',
    image:
      'https://images.pexels.com/photos/36613304/pexels-photo-36613304.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: 'Anchor',
    title: 'Limited Boats',
    description:
      'Dev Deepawali is one of the busiest nights in Varanasi. Advance booking is recommended.',
    image:
      'https://images.pexels.com/photos/36440702/pexels-photo-36440702.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: 'MapPin',
    title: 'Local Experience',
    description:
      'Experience the festival from the Ganga rather than only watching it from the ghats.',
    image:
      'https://images.pexels.com/photos/12112985/pexels-photo-12112985.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: 'ShieldCheck',
    title: 'Safe & Comfortable',
    description: 'Comfort-focused boating experience.',
    image:
      'https://images.pexels.com/photos/33329480/pexels-photo-33329480.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: 'Users',
    title: 'Perfect for Groups',
    description: 'Options suitable for couples, families and groups.',
    image:
      'https://images.pexels.com/photos/39974822/pexels-photo-39974822.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export interface ExperienceItem {
  emoji: string;
  title: string;
  description: string;
  image: string;
}

export const experiences: ExperienceItem[] = [
  {
    emoji: '🪔',
    title: 'Thousands of Diyas',
    description: 'Countless oil lamps line the ghats, turning the riverfront into a river of light.',
    image:
      'https://images.pexels.com/photos/3135229/pexels-photo-3135229.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    emoji: '🏛️',
    title: 'Illuminated Varanasi Ghats',
    description: 'The ancient stone steps of Varanasi glow with the warm light of diyas.',
    image:
      'https://images.pexels.com/photos/21047823/pexels-photo-21047823.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    emoji: '🌊',
    title: 'Ganga Aarti Atmosphere',
    description: 'Experience the powerful Ganga Aarti from the river, surrounded by chanting and light.',
    image:
      'https://images.pexels.com/photos/21826914/pexels-photo-21826914.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    emoji: '🛕',
    title: 'Ancient Temples & Heritage',
    description: 'Centuries-old temples and palaces rise from the ghats, lit against the night sky.',
    image:
      'https://images.pexels.com/photos/18215015/pexels-photo-18215015.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    emoji: '📸',
    title: 'Stunning Night Photography',
    description: 'Capture unforgettable reflections of diyas, ghats and fireworks on the Ganga.',
    image:
      'https://images.pexels.com/photos/35655143/pexels-photo-35655143.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    emoji: '✨',
    title: 'The Magical Dev Deepawali Night',
    description: 'One of India’s most spectacular festival nights, best witnessed from the river.',
    image:
      'https://images.pexels.com/photos/36675455/pexels-photo-36675455.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export interface GalleryImage {
  src: string;
  alt: string;
}

export const galleryImages: GalleryImage[] = [
  {
    src: 'https://images.pexels.com/photos/27670662/pexels-photo-27670662.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Ganga Aarti ceremony at night in Varanasi',
  },
  {
    src: 'https://images.pexels.com/photos/10182772/pexels-photo-10182772.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Traditional Diwali diyas with warm glow',
  },
  {
    src: 'https://images.pexels.com/photos/8112552/pexels-photo-8112552.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Illuminated Varanasi waterfront at twilight',
  },
  {
    src: 'https://images.pexels.com/photos/12387057/pexels-photo-12387057.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Ganga Aarti at Dashashwamedh Ghat at night',
  },
  {
    src: 'https://images.pexels.com/photos/36527284/pexels-photo-36527284.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Boats moored on the Ganges River at dawn',
  },
  {
    src: 'https://images.pexels.com/photos/35622524/pexels-photo-35622524.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Hindu priest performing Ganga Aarti on the ghats',
  },
  {
    src: 'https://images.pexels.com/photos/1580085/pexels-photo-1580085.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Fireworks lighting up the night sky during an Indian festival',
  },
  {
    src: 'https://images.pexels.com/photos/38023851/pexels-photo-38023851.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Colorful boats along the Ganges River at sunset',
  },
  {
    src: 'https://images.pexels.com/photos/4078516/pexels-photo-4078516.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Traditional oil lamps decorated with marigold flowers',
  },
  {
    src: 'https://images.pexels.com/photos/18215015/pexels-photo-18215015.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Festive crowd on the Ganges River at dusk in Varanasi',
  },
  {
    src: 'https://images.pexels.com/photos/21047822/pexels-photo-21047822.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Ganga Aarti ritual on the ghats of Varanasi',
  },
  {
    src: 'https://images.pexels.com/photos/27403391/pexels-photo-27403391.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Ganga Aarti ceremony with devoted participants at night',
  },
];

export interface BookingStep {
  number: string;
  title: string;
  description: string;
}

export const bookingSteps: BookingStep[] = [
  {
    number: '01',
    title: 'Choose Your Boat',
    description: 'Select shared or private boat based on your group size and preference.',
  },
  {
    number: '02',
    title: 'Contact Us',
    description:
      'WhatsApp or call us with your preferred date, group size and boat type.',
  },
  {
    number: '03',
    title: 'Confirm Your Booking',
    description:
      'Our team will share availability, pricing and booking details with you.',
  },
];

export const importantInfo: string[] = [
  'Advance booking is recommended for Dev Deepawali.',
  'Boat availability is limited.',
  'Exact departure point will be confirmed at the time of booking.',
  'Boat timing may depend on river conditions and local administration.',
  'Pricing may vary depending on boat type, capacity and timing.',
  'Please arrive at the boarding point before the scheduled departure.',
  'Follow all local boating and safety instructions.',
];

export interface FAQItem {
  question: string;
  answer: string;
}

export const faqItems: FAQItem[] = [
  {
    question: 'When is Dev Deepawali celebrated in Varanasi?',
    answer:
      'Dev Deepawali is celebrated on the full moon night (Kartik Purnima) in the Hindu month of Kartik. For 2026, please check the exact date closer to the festival. Please contact us on WhatsApp for the latest availability and details.',
  },
  {
    question: 'How can I book a Dev Deepawali boat?',
    answer:
      'You can book by sending us a WhatsApp message or calling us directly. Share your preferred date, group size and boat type, and our team will confirm availability and pricing.',
  },
  {
    question: 'Do you offer shared boats?',
    answer:
      'Yes, we offer shared motor boats suitable for couples, friends and small groups. Please contact us on WhatsApp for the latest availability and details.',
  },
  {
    question: 'Do you offer private boats?',
    answer:
      'Yes, we offer private boats for families, couples and private groups. Please contact us on WhatsApp for the latest availability and details.',
  },
  {
    question: 'How many people can a boat accommodate?',
    answer:
      'Boat capacity depends on the boat type. Please contact us on WhatsApp with your group size and we will share the suitable options.',
  },
  {
    question: 'What time should I reach the boarding point?',
    answer:
      'We recommend arriving at the boarding point before the scheduled departure time. The exact timing will be confirmed at the time of booking. Please contact us on WhatsApp for the latest details.',
  },
  {
    question: 'Where does the boat depart from?',
    answer:
      'The exact departure point will be confirmed at the time of booking. Please contact us on WhatsApp for the latest details.',
  },
  {
    question: 'Can families and children join?',
    answer:
      'Yes, families and children are welcome. Please follow all local boating and safety instructions. Please contact us on WhatsApp for the latest availability and details.',
  },
  {
    question: 'Can I book for a group?',
    answer:
      'Yes, we can accommodate groups. Please contact us on WhatsApp with your group size and requirements.',
  },
  {
    question: 'How do I contact you?',
    answer:
      'You can reach us on WhatsApp or by phone at +91 81155 33981. We recommend WhatsApp for faster communication.',
  },
];

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Experience', href: '#experience' },
  { label: 'Boats', href: '#boats' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];
