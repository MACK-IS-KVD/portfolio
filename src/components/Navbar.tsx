import React, { useState, useEffect } from 'react';
import { Menu, X, Timer } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenBuildingModal: () => void;
  onOpenBioModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onNavigate,
  onOpenBuildingModal,
  onOpenBioModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [wallClock, setWallClock] = useState('23:59:42:12');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hh = now.getHours().toString().padStart(2, '0');
      const mm = now.getMinutes().toString().padStart(2, '0');
      const ss = now.getSeconds().toString().padStart(2, '0');
      const ms = Math.floor(now.getMilliseconds() / 41.6).toString().padStart(2, '0');
      setWallClock(`${hh}:${mm}:${ss}:${ms}`);
    };
    const interval = setInterval(updateTime, 42);
    return () => clearInterval(interval);
  }, []);

  const navItems = [
    { id: 'work', label: 'WORK' },
    { id: 'about', label: 'ABOUT' },
    { id: 'two-worlds', label: 'TWO WORLDS' },
    { id: 'toolkit', label: 'TOOLKIT' },
    { id: 'film-directing', label: 'FILM & DIRECTING' },
    { id: 'archive', label: 'ARCHIVE' },
    { id: 'community', label: 'COMMUNITY' },
    { id: 'contact', label: 'CONTACT' },
  ];

  return (
    <header 
      id="main-header"
      className="fixed top-0 left-0 w-full z-50 bg-surface-container-lowest/95 backdrop-blur-md border-b border-surface-container-highest/60"
    >
      <div className="h-16 w-full px-space-md lg:px-margin-desktop flex items-center justify-between gap-space-md">
        {/* Left: Brand Identity */}
        <div 
          onClick={() => onNavigate('hero')}
          className="flex items-center gap-space-md min-w-max cursor-pointer group"
          id="header-branding"
        >
          <img
            alt="VD Cinema Lab Emblem"
            className="h-8 w-auto object-contain transition-transform group-hover:scale-105"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMtmY41pKndkA-COKXEJC6W485TioAh_xNdTbYkJiOv-ZfptBnA_rtDPwvMScfIiAs_MELPLAUaXaNqnDfG60gfBA5hWf3GyRqf0Q-a5lPDnJRW4qpwNWzG-FTFG0RHx9EJzvq96OVNKy5EPjwCPXCpuw2LRrCvK4tgSRavOVIJGXe6Mw9ommDVhAbBP4Aq3_PY8FmASVkM1P8a2HpAiarZaa3CSiHuRwxcTt8sccIBCTcDoGROsNQ"
          />
          <div className="flex flex-col">
            <div className="flex items-center gap-space-xs">
              <span className="font-headline-sm text-headline-sm tracking-tight text-on-surface font-semibold group-hover:text-primary transition-colors">
                VINAY DIXITH
              </span>
              <span className="hidden xl:inline-block font-label-mono text-label-mono text-primary px-1.5 py-0.5 border border-outline-variant/60 bg-surface-container-low uppercase">
                2.39:1 CINEMATIC LAB
              </span>
            </div>
            <span className="hidden sm:inline-block font-label-mono text-label-mono text-on-surface-variant uppercase tracking-widest text-[11px]">
              BTech AI &amp; Data Science • REVA University
            </span>
          </div>
        </div>

        {/* Desktop Nav Links */}
        <nav 
          id="desktop-navigation"
          className="hidden lg:flex items-center gap-space-lg"
        >
          {navItems.map(item => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                id={`nav-${item.id}`}
                onClick={() => onNavigate(item.id)}
                className={`font-label-mono text-label-mono uppercase tracking-wider py-1 transition-colors cursor-pointer text-[11px] ${
                  isActive
                    ? 'text-primary border-b-2 border-primary'
                    : 'text-on-surface-variant hover:text-on-surface'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right Actions / Telemetry widgets */}
        <div className="flex items-center gap-space-md min-w-max">
          <button
            id="status-currently-building-btn"
            onClick={onOpenBuildingModal}
            className="hidden md:flex items-center gap-space-xs px-2.5 py-1 border border-outline-variant/50 bg-surface-container-low hover:border-primary transition-colors cursor-pointer"
            title="Click to view current sprint & development active status"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="font-label-mono text-label-mono text-primary font-medium uppercase tracking-wider text-[11px]">
              CURRENTLY BUILDING
            </span>
          </button>

          <div 
            id="timecode-ticker-clock"
            className="hidden sm:flex items-center gap-1.5 px-2 py-1 font-timecode text-timecode text-on-surface-variant border border-outline-variant/30 bg-surface-container-lowest text-[12px]"
          >
            <Timer className="w-3.5 h-3.5 text-primary inline" />
            <span>{wallClock}</span>
          </div>

          <button
            id="profile-avatar-btn"
            onClick={onOpenBioModal}
            className="cursor-pointer group relative"
            title="View Vinay Dixith Director Slate"
          >
            <img
              alt="Profile"
              className="w-8 h-8 rounded-full object-cover border border-outline-variant/80 group-hover:border-primary transition-all"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqYKj-jntqTb2qrCFx9o3nh-vNWajTTogzYYnZfGdQ1-E8uai8dHMgHel2vXhChMXyReEzP-G7K049RIm8kuaNUCRMhLqyL8Ke4NTxn-fBo7TENw2gIefzz1dr8mVH6TDDnZhcRA4ar_1RZdPPIXNewwAOcrSqju1rndQ8IXTbGjL2l2l8aY7rJYWmdLBR0fcSu3aWDgUt27moSR3Ro9kv_W_VRog02Dykx66hjnw4OXuNr2pj9GPp"
            />
            <span className="absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-500 border border-[#0d0e0f]" />
          </button>

          {/* Mobile hamburger */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1 text-on-surface hover:text-primary"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div 
          id="mobile-drawer"
          className="lg:hidden bg-surface-container-lowest border-b border-surface-container-highest px-space-md py-space-md flex flex-col gap-3"
        >
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => {
                onNavigate(item.id);
                setMobileMenuOpen(false);
              }}
              className={`text-left font-label-mono text-label-mono uppercase tracking-wider py-2 border-b border-outline-variant/20 ${
                activeSection === item.id ? 'text-primary' : 'text-on-surface-variant'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-2 flex items-center justify-between text-xs font-timecode text-primary">
            <span>TC {wallClock}</span>
            <span className="text-outline">REVA CAMPUS [24 FPS]</span>
          </div>
        </div>
      )}
    </header>
  );
};
