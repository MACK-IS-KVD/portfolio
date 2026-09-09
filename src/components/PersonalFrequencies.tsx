import React from 'react';
import { Coffee, Film, Sparkles, Moon } from 'lucide-react';

export const PersonalFrequencies: React.FC = () => {
  const interests = [
    'Films',
    'Directing',
    'Ideas',
    'Technology',
    'Building Things',
    'Visual Creativity',
    'Learning',
    'North Bengaluru',
    'Late Night Writing',
    '24fps Rhythm',
    'Chai Breaks',
    'Kodak Film Stocks',
    'Aviation Heads-Up Displays',
  ];

  return (
    <section 
      id="personal-frequencies"
      className="w-full bg-surface-container-low px-space-md lg:px-margin-desktop py-space-3xl border-b border-surface-container-highest/60"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-space-2xl">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-outline-variant/40 pb-space-md">
          <div>
            <span className="font-label-mono text-label-mono text-primary uppercase tracking-widest text-[11px]">
              ACT VIII // PERSONAL FREQUENCIES
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface font-normal text-[32px]">
              OUTSIDE THE CODE
            </h2>
            <p className="font-caption text-caption text-on-surface-variant mt-1 text-[12px]">
              What occupies my mind when the terminal and camera are off.
            </p>
          </div>
          <div className="mt-4 md:mt-0 font-timecode text-timecode text-outline border border-outline-variant/40 px-3 py-1 bg-surface-container text-[12px]">
            SPECTRUM: REVA / 2025
          </div>
        </div>

        {/* Interests Cloud */}
        <div className="flex flex-wrap gap-2">
          {interests.map((tag, idx) => (
            <span
              key={idx}
              className="px-3 py-1.5 bg-surface-container border border-outline-variant/40 text-on-surface font-label-mono text-[11px] uppercase tracking-wider hover:border-primary hover:text-primary transition-colors cursor-default"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* 3 Analog Sticky Note Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md pt-2">
          {/* Note 1 */}
          <div className="p-space-md bg-surface-container-lowest border border-outline-variant/50 relative flex flex-col justify-between min-h-[130px] shadow-sm transform -rotate-1 hover:rotate-0 transition-transform">
            <div className="w-12 h-2 bg-outline-variant/40 absolute -top-1 left-6" />
            <span className="font-timecode text-[10px] text-primary">CARD 01 // BRAIN STATE</span>
            <p className="font-headline-md text-headline-md text-on-surface italic font-normal text-[20px] my-2">
              "Probably thinking about a film."
            </p>
            <span className="font-label-mono text-[10px] text-outline uppercase">
              ALWAYS IN FRAME
            </span>
          </div>

          {/* Note 2 */}
          <div className="p-space-md bg-surface-container-lowest border border-outline-variant/50 relative flex flex-col justify-between min-h-[130px] shadow-sm transform rotate-1 hover:rotate-0 transition-transform">
            <div className="w-12 h-2 bg-outline-variant/40 absolute -top-1 left-6" />
            <span className="font-timecode text-[10px] text-tertiary">CARD 02 // LOG</span>
            <p className="font-headline-md text-headline-md text-on-surface italic font-normal text-[20px] my-2">
              "This idea seemed good at 2:13 AM."
            </p>
            <span className="font-label-mono text-[10px] text-outline uppercase">
              SCRATCHPAD EPHEMERA
            </span>
          </div>

          {/* Note 3 */}
          <div className="p-space-md bg-surface-container-lowest border border-outline-variant/50 relative flex flex-col justify-between min-h-[130px] shadow-sm transform -rotate-0.5 hover:rotate-0 transition-transform">
            <div className="w-12 h-2 bg-outline-variant/40 absolute -top-1 left-6" />
            <span className="font-timecode text-[10px] text-primary-container">CARD 03 // ON-SET REALITY</span>
            <p className="font-headline-md text-headline-md text-on-surface italic font-normal text-[20px] my-2">
              "Needs more coffee (and another SD card)."
            </p>
            <span className="font-label-mono text-[10px] text-outline uppercase">
              STUDENT CINEMATOGRAPHER PERIL
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
