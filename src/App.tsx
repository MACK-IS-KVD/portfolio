import React, { useState, useEffect } from 'react';
import { TelemetryBar } from './components/TelemetryBar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutPerspective } from './components/AboutPerspective';
import { TwoWorlds } from './components/TwoWorlds';
import { Projects } from './components/Projects';
import { Toolkit } from './components/Toolkit';
import { FrameByFrame } from './components/FrameByFrame';
import { CreativeArchive } from './components/CreativeArchive';
import { Community } from './components/Community';
import { PersonalFrequencies } from './components/PersonalFrequencies';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CurrentlyBuildingModal } from './components/CurrentlyBuildingModal';
import { DirectorBioModal } from './components/DirectorBioModal';

export function App() {
  const [activeSection, setActiveSection] = useState<string>('work');
  const [showBuildingModal, setShowBuildingModal] = useState(false);
  const [showBioModal, setShowBioModal] = useState(false);

  // Scroll navigation handler
  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // ScrollSpy to highlight active section in Navbar
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'hero',
        'work',
        'about',
        'two-worlds',
        'toolkit',
        'film-directing',
        'archive',
        'community',
        'personal-frequencies',
        'contact',
      ];
      const scrollPos = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-surface-container-lowest text-on-surface flex flex-col selection:bg-primary selection:text-on-primary">
      {/* Top Fixed Registration Telemetry Bar & Navbar */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenBuildingModal={() => setShowBuildingModal(true)}
        onOpenBioModal={() => setShowBioModal(true)}
      />

      {/* Spacer for fixed 64px header */}
      <div className="h-16 w-full" />

      {/* Persistent Telemetry Bar */}
      <TelemetryBar />

      {/* Main Content Sections */}
      <main className="flex-1 w-full flex flex-col">
        {/* Hero Section / Scene 01 Take 02 */}
        <Hero
          onExploreWork={() => handleNavigate('work')}
          onEnterArchive={() => handleNavigate('archive')}
        />

        {/* Act I: Perspective - Who is Vinay? */}
        <AboutPerspective />

        {/* Act II: Synthesis - The Two Worlds */}
        <TwoWorlds />

        {/* Act III: Real-World Artifacts - REVA LiveMap & Secondary Projects */}
        <Projects />

        {/* Act IV: Instruments - Current Toolkit */}
        <Toolkit />

        {/* Act V: The Cinema Eye - Frame By Frame */}
        <FrameByFrame />

        {/* Act VI: Scratchpad - The Creative Archive */}
        <CreativeArchive />

        {/* Act VII: Trajectory - Community & Learning */}
        <Community />

        {/* Act VIII: Personal Frequencies - Outside the Code */}
        <PersonalFrequencies />

        {/* Act IX: Finale - Let's Make Something */}
        <ContactSection />
      </main>

      {/* Archival Footer */}
      <Footer onScrollToTop={handleScrollToTop} />

      {/* Interactive Modals */}
      <CurrentlyBuildingModal
        isOpen={showBuildingModal}
        onClose={() => setShowBuildingModal(false)}
      />

      <DirectorBioModal
        isOpen={showBioModal}
        onClose={() => setShowBioModal(false)}
      />
    </div>
  );
}

export default App;
