import React, { useState } from 'react';
import { ArrowRight, ArrowUpRight, Camera, Focus, SlidersHorizontal } from 'lucide-react';

interface HeroProps {
  onExploreWork: () => void;
  onEnterArchive: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreWork, onEnterArchive }) => {
  // Interactive camera lens simulator
  const [lensIndex, setLensIndex] = useState(1); // 50mm default
  const lenses = [
    { label: '35mm Full-Frame', fStop: 'f/1.4', shutter: '1/48s', iso: '400', fov: '63°' },
    { label: '50mm Anamorphic 2x', fStop: 'f/1.8', shutter: '1/48s', iso: '800', fov: '47°' },
    { label: '85mm Portrait Cine', fStop: 'f/2.0', shutter: '1/96s', iso: '1600', fov: '28°' },
  ];

  const currentLens = lenses[lensIndex];

  const handleCycleLens = () => {
    setLensIndex((prev) => (prev + 1) % lenses.length);
  };

  return (
    <section 
      id="hero"
      className="relative w-full bg-surface-container-lowest px-space-md lg:px-margin-desktop py-space-2xl lg:py-space-4xl overflow-hidden border-b border-surface-container-highest/60"
    >
      {/* Viewfinder Reticle Graphic Elements */}
      <div className="absolute top-space-lg left-space-md lg:left-margin-desktop text-outline-variant/70 font-label-mono text-label-mono pointer-events-none select-none flex items-center gap-2 text-[11px]">
        <span className="text-primary font-bold">⌜</span>
        <span>CAM A // APERTURE {currentLens.fStop} // SENSOR {currentLens.label.toUpperCase()}</span>
      </div>
      <div className="absolute top-space-lg right-space-md lg:right-margin-desktop text-outline-variant/70 font-label-mono text-label-mono pointer-events-none select-none flex items-center gap-2 text-[11px]">
        <span>SHUTTER {currentLens.shutter} // ISO {currentLens.iso}</span>
        <span className="text-primary font-bold">⌝</span>
      </div>
      <div className="absolute bottom-space-lg left-space-md lg:left-margin-desktop text-outline-variant/70 font-label-mono text-label-mono pointer-events-none select-none text-[11px]">
        <span className="text-primary font-bold">⌞</span> CALIBRATED
      </div>
      <div className="absolute bottom-space-lg right-space-md lg:right-margin-desktop text-outline-variant/70 font-label-mono text-label-mono pointer-events-none select-none text-[11px]">
        PROD [VD-ARCHIVE] <span className="text-primary font-bold">⌟</span>
      </div>

      {/* Central Hero Grid */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center pt-4 lg:pt-0">
        {/* Left Editorial Column */}
        <div className="lg:col-span-7 flex flex-col gap-space-md">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-surface-container-low border border-outline-variant/50 w-fit">
            <span className="w-1.5 h-1.5 bg-primary-container inline-block" />
            <span className="font-label-mono text-label-mono text-primary font-medium tracking-widest uppercase text-[11px]">
              SCENE 01 / TAKE 02 — BENGALURU, INDIA
            </span>
          </div>

          <h1 className="font-headline-lg lg:font-display-xl text-headline-lg lg:text-display-xl text-on-surface tracking-tight font-normal leading-none mt-2">
            VINAY DIXITH
          </h1>

          <div className="flex flex-col gap-1 border-l-2 border-primary pl-4 py-0.5">
            <p className="font-label-mono text-label-mono text-primary uppercase tracking-wider font-medium text-[12px]">
              BTech Artificial Intelligence &amp; Data Science — Year 02
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant">
              REVA University, North Bengaluru, India
            </p>
          </div>

          <div className="pt-2">
            <p className="font-headline-md text-headline-md text-on-surface italic font-normal tracking-tight max-w-2xl text-[22px] lg:text-[24px]">
              "Building with technology. Thinking through stories."
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant/90 max-w-xl mt-2 leading-relaxed">
              AI/DS student • Builder • Filmmaker-in-training • Visual storyteller exploring the threshold where tensor models meet human perception.
            </p>
          </div>

          {/* Action Callouts */}
          <div className="flex flex-wrap items-center gap-space-sm pt-space-sm">
            <button
              id="hero-view-work-btn"
              onClick={onExploreWork}
              className="px-space-md py-3 bg-primary-container text-on-primary font-label-mono text-label-mono uppercase tracking-widest font-semibold hover:bg-primary transition-colors flex items-center gap-2 cursor-pointer text-[12px]"
            >
              <span>VIEW MY WORK</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              id="hero-enter-archive-btn"
              onClick={onEnterArchive}
              className="px-space-md py-3 bg-surface-container-low border border-outline-variant/60 text-on-surface hover:text-primary hover:border-primary font-label-mono text-label-mono uppercase tracking-widest transition-colors flex items-center gap-2 cursor-pointer text-[12px]"
            >
              <span>ENTER THE ARCHIVE</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Right Interactive Visual Viewfinder Module */}
        <div className="lg:col-span-5 flex flex-col gap-space-xs mt-6 lg:mt-0">
          <div className="relative bg-surface-container border border-surface-container-highest p-space-md overflow-hidden">
            {/* Live Aperture Slate Graphic */}
            <div className="flex items-center justify-between border-b border-outline-variant/40 pb-2 mb-3">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-primary-container inline-block" />
                <span className="font-label-mono text-label-mono text-on-surface uppercase tracking-wider text-[11px]">
                  APERTURE PROTOCOL
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleCycleLens}
                  className="px-1.5 py-0.5 bg-surface-container-lowest border border-outline-variant/50 text-[10px] text-primary hover:border-primary font-mono cursor-pointer flex items-center gap-1"
                  title="Cycle simulated camera lens"
                >
                  <SlidersHorizontal className="w-2.5 h-2.5" />
                  <span>{currentLens.fStop}</span>
                </button>
                <span className="font-timecode text-timecode text-primary text-[12px]">
                  LIVE LATENT FEED
                </span>
              </div>
            </div>

            {/* Central Crosshair & Dual Matrix Canvas */}
            <div 
              id="hero-viewfinder-canvas"
              onClick={handleCycleLens}
              className="relative h-64 w-full bg-surface-container-lowest border border-outline-variant/30 flex items-center justify-center overflow-hidden cursor-pointer group"
              title="Click to switch optical profile"
            >
              {/* Background Radial Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-container/10 via-transparent to-tertiary/5 pointer-events-none" />

              {/* Optical Grid Overlay */}
              <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 opacity-20 pointer-events-none">
                <div className="border-r border-b border-outline-variant" />
                <div className="border-r border-b border-outline-variant" />
                <div className="border-r border-b border-outline-variant" />
                <div className="border-r border-b border-outline-variant" />
                <div className="border-r border-b border-outline-variant" />
                <div className="border-b border-outline-variant" />
                <div className="border-r border-b border-outline-variant" />
                <div className="border-r border-b border-outline-variant" />
                <div className="border-r border-b border-outline-variant" />
                <div className="border-r border-b border-outline-variant" />
                <div className="border-r border-b border-outline-variant" />
                <div className="border-b border-outline-variant" />
              </div>

              {/* Central Iris Monogram Vector Inspired by User Slate */}
              <div className="relative z-10 flex flex-col items-center">
                <svg className="w-28 h-28 text-primary transition-transform duration-500 group-hover:scale-105" fill="none" stroke="currentColor" viewBox="0 0 120 120">
                  {/* Outer Crosshairs */}
                  <line stroke="currentColor" strokeDasharray="2,2" strokeWidth="1.2" x1="60" x2="60" y1="5" y2="25" />
                  <line stroke="currentColor" strokeDasharray="2,2" strokeWidth="1.2" x1="60" x2="60" y1="95" y2="115" />
                  <line stroke="currentColor" strokeDasharray="2,2" strokeWidth="1.2" x1="5" x2="25" y1="60" y2="60" />
                  <line stroke="currentColor" strokeDasharray="2,2" strokeWidth="1.2" x1="95" x2="115" y1="60" y2="60" />

                  {/* Geometric Iris / Monogram VD Rings */}
                  <circle cx="60" cy="60" r="44" stroke="#ffb77d" strokeOpacity="0.8" strokeWidth="1.5" />
                  <circle cx="60" cy="60" r="32" stroke="#554336" strokeDasharray="4,3" strokeWidth="1" />

                  {/* Iris Blades / Interlocking Letterforms */}
                  <path d="M40 32 L75 88 L90 55 Z" stroke="#ffdcc3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  <path d="M30 65 L60 28 L72 45 L48 90 Z" fill="currentColor" fillOpacity="0.12" stroke="#ffb77d" strokeWidth="2" />
                  <path d="M60 60 L85 85" stroke="#ffb77d" strokeWidth="1.5" />
                </svg>
                <span className="mt-2 font-timecode text-timecode text-on-surface tracking-widest font-semibold text-[12px]">
                  VD // SCOPE 2.39:1
                </span>
              </div>

              {/* Focus Corner Brackets */}
              <div className="absolute top-3 left-3 text-primary font-label-mono text-label-mono text-[11px]">
                ⌜ 13°11'52"N
              </div>
              <div className="absolute top-3 right-3 text-primary font-label-mono text-label-mono text-[11px]">
                77°38'05"E ⌝
              </div>
              <div className="absolute bottom-3 left-3 text-on-surface-variant font-label-mono text-label-mono text-[11px]">
                ⌞ ISO_{currentLens.iso}
              </div>
              <div className="absolute bottom-3 right-3 text-on-surface-variant font-label-mono text-label-mono text-[11px]">
                {currentLens.fStop} {currentLens.label.split(' ')[0]} ⌟
              </div>
            </div>

            {/* Micro Parameter Matrix */}
            <div className="mt-3 grid grid-cols-2 gap-2 text-on-surface-variant font-label-mono text-label-mono border-t border-outline-variant/30 pt-2 text-[11px]">
              <div>
                <span className="text-outline">ACADEMIC STATE:</span>
                <span className="text-on-surface block font-timecode text-[12px]">REVA BTECH YR_02</span>
              </div>
              <div>
                <span className="text-outline">PRIMARY NODES:</span>
                <span className="text-primary block font-timecode text-[12px]">AI.TENSOR // 35MM.LENS</span>
              </div>
            </div>
          </div>

          {/* Telemetry Card Footer */}
          <div className="bg-surface-container-low border border-surface-container-highest/60 p-2.5 flex items-center justify-between font-label-mono text-label-mono text-on-surface-variant text-[11px]">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-tertiary" />
              <span>NODE STATUS: INGESTING DATA</span>
            </div>
            <span className="text-outline">SYS.BUILD.2025.V2</span>
          </div>
        </div>
      </div>
    </section>
  );
};
