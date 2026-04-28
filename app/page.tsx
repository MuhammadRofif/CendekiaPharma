import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import KeunggulanSection from '@/components/sections/KeunggulanSection';
import KelasOnlineSection from '@/components/sections/KelasOnlineSection';
import KelasTatapMukaSection from '@/components/sections/KelasTatapMukaSection';
import TryoutSection from '@/components/sections/TryoutSection';
import VideoSection from '@/components/sections/VideoSection';
import ModulSection from '@/components/sections/ModulSection';
import MentorSection from '@/components/sections/MentorSection';
import StatistikSection from '@/components/sections/StatistikSection';
import TestimoniSection from '@/components/sections/TestimoniSection';
import MobileAppSection from '@/components/sections/MobileAppSection';
import AboutSection from '@/components/sections/AboutSection';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <section id="hero">
          <HeroSection />
        </section>
        <section id="keunggulan">
          <KeunggulanSection />
        </section>
        <section id="kelas-online">
          <KelasOnlineSection />
        </section>
        <section id="kelas-tatap-muka">
          <KelasTatapMukaSection />
        </section>
        <section id="tryout">
          <TryoutSection />
        </section>
        <section id="video">
          <VideoSection />
        </section>
        <section id="modul">
          <ModulSection />
        </section>
        <section id="mentor">
          <MentorSection />
        </section>
        <section id="statistik">
          <StatistikSection />
        </section>
        <section id="testimoni">
          <TestimoniSection />
        </section>
        <section id="mobile-app">
          <MobileAppSection />
        </section>
        <section id="about">
          <AboutSection />
        </section>
      </main>
      <Footer />
    </>
  );
}
