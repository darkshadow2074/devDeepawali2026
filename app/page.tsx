import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { DevDeepawaliIntro } from '@/components/DevDeepawaliIntro';
import { BoatOptions } from '@/components/BoatOptions';
import { WhyBookWithUs } from '@/components/WhyBookWithUs';
import { Experiences } from '@/components/Experiences';
import { Gallery } from '@/components/Gallery';
import { BookingProcess } from '@/components/BookingProcess';
import { ImportantInfo } from '@/components/ImportantInfo';
import { FAQ } from '@/components/FAQ';
import { FinalCTA } from '@/components/FinalCTA';
import { Footer } from '@/components/Footer';
import { MobileStickyCTA } from '@/components/MobileStickyCTA';
import { Analytics } from '@/components/Analytics';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <DevDeepawaliIntro />
        <BoatOptions />
        <WhyBookWithUs />
        <Experiences />
        <Gallery />
        <BookingProcess />
        <ImportantInfo />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <MobileStickyCTA />
      {/* Bottom padding for mobile sticky CTA */}
      <div className="h-20 lg:hidden" aria-hidden="true" />
    </>
  );
}
