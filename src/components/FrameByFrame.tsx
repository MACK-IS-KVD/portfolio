import React, { useState } from 'react';
import { Film, Eye, Sparkles, X, Camera, MapPin, Video } from 'lucide-react';
import { CineFrame } from '../types';

export const FrameByFrame: React.FC = () => {
  const [activeFrame, setActiveFrame] = useState<CineFrame | null>(null);

  const frames: CineFrame[] = [
    {
      id: 'fr-001',
      tag: 'FR_001 // CONCEPT',
      aspect: '2.39:1 ANAMORPHIC',
      title: 'NIGHT SHIFT BENGALURU',
      phase: 'DEVELOPMENT // SCRIPT TREATMENT',
      status: 'LOGLINE DRAFTED',
      synopsis:
        'An IT technician and an auto driver cross paths at a 3:00 AM roadside chai stall in North Bengaluru. Both carry secrets about a vanished hard drive containing campus research data.',
      details: {
        lens: 'Kowa Prominar 50mm Anamorphic (2x squeeze)',
        format: 'ARRIRAW 3.2K 24.000 fps',
        locations: 'Hebbal Flyover underpass, REVA main gate road, Kogilu Cross night stall',
        directorNote:
          'The city at 3 AM does not sleep; it merely changes operators. The amber glow of high-pressure sodium lamps creates a dreamlike threshold where code and human solitude collide.',
      },
    },
    {
      id: 'fr-002',
      tag: 'FR_002 // ESSAY',
      aspect: '1.85:1 FLAT',
      title: 'THE APERTURE PROTOCOL',
      phase: 'SHORT FORM VIDEO ESSAY',
      status: 'PRE-PRODUCTION',
      synopsis:
        'A visual reflection on how cinema lenses distort human memory. Comparing computational portrait mode depth-map algorithms with physical glass spherical aberration.',
      details: {
        lens: 'Canon FD 35mm f/2.0 vintage prime',
        format: 'ProRes 422 HQ 10-bit',
        locations: 'REVA Central Library stack room, Optoelectronics research bench',
        directorNote:
          'Smartphones simulate blur by segmenting edge masks and blurring pixels. True glass captures volumetric light rays that embrace flaws. Which one remembers more truthfully?',
      },
    },
    {
      id: 'fr-003',
      tag: 'FR_003 // VIGNETTE',
      aspect: '1.33:1 ACADEMY',
      title: "CAMPUS REEL '25",
      phase: 'DOCUMENTARY SHORT',
      status: 'FILMING IN PROGRESS',
      synopsis:
        'Observing the quiet rhythm of REVA University at sunrise—before 15,000 students arrive. Groundskeepers watering ferns, stray campus dogs sleeping on warm stone, library fluorescent hums.',
      details: {
        lens: 'Bolex 16mm Switar 25mm f/1.4 equivalent',
        format: '16mm 50D Kodak Vision3 emulated',
        locations: 'REVA Open Amphitheatre, Science Block corridor, Canteen lawn',
        directorNote:
          'Campus life is always documented in frenzy—fests, hackathons, seminars. But universities have a sacred stillness at 6:15 AM that feels like an abandoned cathedral.',
      },
    },
  ];

  return (
    <section 
      id="film-directing"
      className="w-full bg-surface-container-lowest px-space-md lg:px-margin-desktop py-space-3xl border-b border-surface-container-highest/60"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-space-2xl">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-outline-variant/40 pb-space-md">
          <div>
            <span className="font-label-mono text-label-mono text-primary uppercase tracking-widest text-[11px]">
              ACT V // THE CINEMA EYE
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface font-normal text-[32px]">
              FRAME BY FRAME
            </h2>
            <p className="font-caption text-caption text-on-surface-variant mt-1 text-[12px]">
              Visual Storytelling, Screenplay Drafting &amp; Directing Notebook
            </p>
          </div>
          <div className="mt-4 md:mt-0 font-timecode text-timecode text-primary border border-outline-variant/40 px-3 py-1 bg-surface-container text-[12px] flex items-center gap-2">
            <Film className="w-3.5 h-3.5 inline text-primary" />
            <span>DIRECTOR NOTEBOOK // REVA</span>
          </div>
        </div>

        {/* 35mm Film Sprocket Border Top */}
        <div className="w-full bg-surface-container-lowest border-y border-outline-variant/40 py-2 flex items-center justify-between px-2 overflow-hidden select-none">
          <div className="flex gap-4 items-center">
            {Array.from({ length: 18 }).map((_, i) => (
              <div key={i} className="w-4 h-3 rounded-none bg-surface-container-high border border-outline-variant/60" />
            ))}
          </div>
          <span className="font-label-mono text-[10px] text-outline uppercase tracking-widest hidden md:inline">
            35MM SAFETY FILM // 24 FPS KODAK VISION3 500T
          </span>
          <div className="flex gap-4 items-center">
            {Array.from({ length: 18 }).map((_, i) => (
              <div key={i} className="w-4 h-3 rounded-none bg-surface-container-high border border-outline-variant/60" />
            ))}
          </div>
        </div>

        {/* 3 Cine Frames Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-space-lg">
          {frames.map((frame) => (
            <div 
              key={frame.id}
              className="bg-surface-container border border-outline-variant/50 p-space-md flex flex-col justify-between hover:border-primary transition-all group"
            >
              <div className="flex flex-col gap-space-sm">
                <div className="flex items-center justify-between border-b border-outline-variant/30 pb-2">
                  <span className="font-timecode text-timecode text-primary text-[12px]">
                    {frame.tag}
                  </span>
                  <span className="font-label-mono text-label-mono text-outline text-[11px]">
                    {frame.aspect}
                  </span>
                </div>

                {/* Aspect Ratio Viewport Simulation */}
                <div 
                  onClick={() => setActiveFrame(frame)}
                  className="relative w-full bg-surface-container-lowest border border-outline-variant/40 flex items-center justify-center p-3 cursor-pointer group-hover:border-primary/60 transition-colors min-h-[140px]"
                >
                  <div className="text-center flex flex-col items-center">
                    <Video className="w-6 h-6 text-primary mb-1 opacity-80 group-hover:scale-110 transition-transform" />
                    <span className="font-headline-sm text-headline-sm text-on-surface font-semibold text-[16px]">
                      {frame.title}
                    </span>
                    <span className="font-timecode text-[10px] text-primary mt-1">
                      CLICK TO VIEW TREATMENT &amp; SHOT LIST
                    </span>
                  </div>
                  
                  {/* Subtle Grid Reticle */}
                  <span className="absolute top-1 left-1 text-[8px] font-mono text-outline">⌜ 2.39:1</span>
                  <span className="absolute bottom-1 right-1 text-[8px] font-mono text-outline">24 FPS ⌟</span>
                </div>

                <div className="flex flex-col gap-1 pt-1">
                  <span className="font-label-mono text-[10px] text-primary uppercase tracking-wider font-semibold">
                    {frame.phase}
                  </span>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed text-[13px]">
                    {frame.synopsis}
                  </p>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-outline-variant/30 flex items-center justify-between">
                <span className="font-label-mono text-[10px] text-outline uppercase">
                  STATUS: {frame.status}
                </span>
                <button
                  onClick={() => setActiveFrame(frame)}
                  className="px-2.5 py-1 bg-surface-container-low hover:bg-primary hover:text-on-primary text-primary border border-primary/50 text-[11px] font-mono uppercase transition-colors cursor-pointer"
                >
                  TREATMENT ↗
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* 35mm Film Sprocket Border Bottom */}
        <div className="w-full bg-surface-container-lowest border-y border-outline-variant/40 py-2 flex items-center justify-between px-2 overflow-hidden select-none">
          <div className="flex gap-4 items-center">
            {Array.from({ length: 18 }).map((_, i) => (
              <div key={i} className="w-4 h-3 rounded-none bg-surface-container-high border border-outline-variant/60" />
            ))}
          </div>
          <span className="font-label-mono text-[10px] text-primary uppercase tracking-widest hidden md:inline">
            REVA UNIVERSITY CINEMA LAB // DIRECTORS LOG
          </span>
          <div className="flex gap-4 items-center">
            {Array.from({ length: 18 }).map((_, i) => (
              <div key={i} className="w-4 h-3 rounded-none bg-surface-container-high border border-outline-variant/60" />
            ))}
          </div>
        </div>

        {/* Director's Notebook Pull Quote */}
        <div className="p-space-md bg-surface-container-low border-l-2 border-primary text-on-surface-variant font-body-md text-[15px] italic flex flex-col md:flex-row items-start md:items-center justify-between gap-2">
          <span>
            "STATUS: Somewhere between 'I have an incredible idea' and 'WHY DID I START THIS?'"
          </span>
          <span className="font-label-mono text-[11px] text-primary not-italic uppercase font-semibold">
            VINAY DIXITH // ON-SET CONFESSION
          </span>
        </div>
      </div>

      {/* Frame Details Treatment Modal */}
      {activeFrame && (
        <div className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-4">
          <div className="bg-surface-container border border-primary p-space-md lg:p-space-lg max-w-xl w-full flex flex-col gap-space-md">
            <div className="flex items-center justify-between border-b border-outline-variant/40 pb-2">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary inline-block" />
                <span className="font-label-mono text-primary text-xs uppercase tracking-widest">
                  {activeFrame.tag} • TREATMENT FILE
                </span>
              </div>
              <button
                onClick={() => setActiveFrame(null)}
                className="text-on-surface-variant hover:text-on-surface font-mono text-xs cursor-pointer"
              >
                [CLOSE ✕]
              </button>
            </div>

            <div className="flex flex-col gap-3">
              <h3 className="font-headline-lg text-on-surface text-[26px]">
                {activeFrame.title}
              </h3>
              <span className="font-label-mono text-xs text-primary uppercase">
                {activeFrame.aspect} • {activeFrame.phase}
              </span>

              <div className="p-3 bg-surface-container-lowest border border-outline-variant/30 flex flex-col gap-2 font-body-sm text-on-surface-variant text-[13px]">
                <div>
                  <span className="text-primary font-mono text-xs uppercase mr-2">LOGLINE:</span>
                  <span>{activeFrame.synopsis}</span>
                </div>
                {activeFrame.details && (
                  <>
                    <div className="pt-2 border-t border-outline-variant/20">
                      <span className="text-outline font-mono text-xs uppercase mr-2">CAMERA PACKAGE:</span>
                      <span className="text-on-surface font-mono">{activeFrame.details.lens} // {activeFrame.details.format}</span>
                    </div>
                    <div>
                      <span className="text-outline font-mono text-xs uppercase mr-2">LOCATION SCOUT:</span>
                      <span className="text-on-surface">{activeFrame.details.locations}</span>
                    </div>
                    <div className="pt-2 border-t border-outline-variant/20 italic text-primary">
                      <span className="text-outline font-mono text-xs uppercase mr-2 not-italic">DIRECTOR STATEMENT:</span>
                      "{activeFrame.details.directorNote}"
                    </div>
                  </>
                )}
              </div>
            </div>

            <div className="pt-3 border-t border-outline-variant/30 flex justify-end">
              <button
                onClick={() => setActiveFrame(null)}
                className="px-4 py-2 bg-primary text-on-primary font-label-mono text-xs font-bold uppercase cursor-pointer"
              >
                RETURN TO LAB VIEW
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
