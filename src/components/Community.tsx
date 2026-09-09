import React from 'react';
import { GraduationCap, Users, Compass, ExternalLink } from 'lucide-react';

export const Community: React.FC = () => {
  return (
    <section 
      id="community"
      className="w-full bg-surface-container-lowest px-space-md lg:px-margin-desktop py-space-3xl border-b border-surface-container-highest/60"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-space-2xl">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-outline-variant/40 pb-space-md">
          <div>
            <span className="font-label-mono text-label-mono text-primary uppercase tracking-widest text-[11px]">
              ACT VII // TRAJECTORY
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface font-normal text-[32px]">
              COMMUNITY &amp; LEARNING
            </h2>
            <p className="font-caption text-caption text-on-surface-variant mt-1 text-[12px]">
              Academic Environment &amp; Collaborative Nodes
            </p>
          </div>
          <div className="mt-4 md:mt-0 font-timecode text-timecode text-outline border border-outline-variant/40 px-3 py-1 bg-surface-container text-[12px]">
            TIMELINE [2023 ➔ PRESENT]
          </div>
        </div>

        {/* 3 Trajectory Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
          {/* Card 1 */}
          <div className="bg-surface-container-low p-space-md border border-outline-variant/40 flex flex-col justify-between">
            <div className="flex flex-col gap-space-sm">
              <div className="flex items-center justify-between border-b border-outline-variant/30 pb-2">
                <span className="font-timecode text-timecode text-primary text-[12px] flex items-center gap-1.5">
                  <GraduationCap className="w-3.5 h-3.5" />
                  <span>ACADEMIA</span>
                </span>
                <span className="font-label-mono text-[10px] text-outline">2023 - PRESENT</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold text-[18px]">
                REVA University
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed text-[13px]">
                BTech Artificial Intelligence &amp; Data Science (Year 02). North Bengaluru campus life, lab sessions, machine learning projects, engineering mathematics, and building alongside classmates.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-outline-variant/20 font-label-mono text-[10px] text-primary uppercase">
              REVA CAMPUS • NORTH BENGALURU
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-surface-container-low p-space-md border border-outline-variant/40 flex flex-col justify-between">
            <div className="flex flex-col gap-space-sm">
              <div className="flex items-center justify-between border-b border-outline-variant/30 pb-2">
                <span className="font-timecode text-timecode text-primary text-[12px] flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5" />
                  <span>COMMUNITY</span>
                </span>
                <span className="font-label-mono text-[10px] text-outline">ONGOING</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold text-[18px]">
                Student Creative Guild
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed text-[13px]">
                Screenwriting circles, student film showcases, hackathons, open feedback critique tables, and exploring the overlap between algorithmic code and narrative media.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-outline-variant/20 font-label-mono text-[10px] text-primary uppercase">
              COLLABORATIVE CRITIQUE • PEER CIRCLES
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-surface-container-low p-space-md border border-outline-variant/40 flex flex-col justify-between">
            <div className="flex flex-col gap-space-sm">
              <div className="flex items-center justify-between border-b border-outline-variant/30 pb-2">
                <span className="font-timecode text-timecode text-primary text-[12px] flex items-center gap-1.5">
                  <Compass className="w-3.5 h-3.5" />
                  <span>HORIZON</span>
                </span>
                <span className="font-label-mono text-[10px] text-outline">2025 - 2026</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold text-[18px]">
                Next Frontiers
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed text-[13px]">
                Directing my first complete narrative short film, open-sourcing campus tools (like REVA LiveMap), and building software that genuinely serves student communities.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-outline-variant/20 font-label-mono text-[10px] text-primary uppercase">
              SHIPPING REAL ARTIFACTS
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
