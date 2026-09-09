import React, { useState } from 'react';
import { Terminal, Film, Sparkles, Play, RotateCcw } from 'lucide-react';

export const TwoWorlds: React.FC = () => {
  const [epoch, setEpoch] = useState(12);
  const [loss, setLoss] = useState('0.0418');
  const [accuracy, setAccuracy] = useState('94.2%');
  const [isTraining, setIsTraining] = useState(false);
  const [showSynthesisModal, setShowSynthesisModal] = useState(false);

  const handleStepTrain = () => {
    setIsTraining(true);
    setTimeout(() => {
      setEpoch(prev => (prev < 50 ? prev + 1 : 1));
      setLoss((Math.max(0.008, parseFloat(loss) - 0.0015)).toFixed(4));
      setAccuracy((Math.min(99.4, parseFloat(accuracy) + 0.3)).toFixed(1) + '%');
      setIsTraining(false);
    }, 400);
  };

  return (
    <section 
      id="two-worlds"
      className="w-full bg-surface-container-low px-space-md lg:px-margin-desktop py-space-3xl border-b border-surface-container-highest/60"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-space-xl">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-outline-variant/40 pb-space-md">
          <div>
            <span className="font-label-mono text-label-mono text-primary uppercase tracking-widest text-[11px]">
              ACT II // SYNTHESIS
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface font-normal text-[32px]">
              THE TWO WORLDS
            </h2>
            <p className="font-caption text-caption text-on-surface-variant mt-1 text-[12px]">
              Dual Mindset Architecture • Engineering vs Cinematic Observation
            </p>
          </div>
          <div className="mt-4 md:mt-0 font-timecode text-timecode text-primary border border-outline-variant/50 px-3 py-1 bg-surface-container text-[12px] flex items-center gap-2">
            <span>CONVERGENCE_FACTOR = 0.874</span>
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" />
          </div>
        </div>

        {/* The Tripartite Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-11 gap-space-md items-stretch">
          {/* Left: Technical Vector */}
          <div className="lg:col-span-5 bg-surface-container p-space-lg border border-surface-container-highest flex flex-col justify-between">
            <div className="flex flex-col gap-space-sm">
              <div className="flex items-center justify-between border-b border-outline-variant/30 pb-space-xs">
                <span className="font-label-mono text-label-mono text-primary uppercase tracking-wider flex items-center gap-1.5 text-[11px]">
                  <Terminal className="w-3.5 h-3.5 inline" />
                  <span>THE TECHNICAL SIDE</span>
                </span>
                <span className="font-timecode text-timecode text-outline text-[12px]">SYS.ENGINE</span>
              </div>
              
              <h3 className="font-headline-md text-headline-md text-on-surface font-normal text-[24px]">
                Logic, Tensors &amp; Computation
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Structuring unorganized entropy through algorithms, clean code pipelines, and mathematical models that solve practical problems.
              </p>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                <span className="px-2 py-1 bg-surface-container-lowest text-on-surface font-label-mono text-label-mono border border-outline-variant/40 text-[11px]">
                  AI &amp; Data Science
                </span>
                <span className="px-2 py-1 bg-surface-container-lowest text-on-surface font-label-mono text-label-mono border border-outline-variant/40 text-[11px]">
                  Python / Pandas
                </span>
                <span className="px-2 py-1 bg-surface-container-lowest text-on-surface font-label-mono text-label-mono border border-outline-variant/40 text-[11px]">
                  Data Structures
                </span>
                <span className="px-2 py-1 bg-surface-container-lowest text-on-surface font-label-mono text-label-mono border border-outline-variant/40 text-[11px]">
                  Systems Architecture
                </span>
                <span className="px-2 py-1 bg-surface-container-lowest text-on-surface font-label-mono text-label-mono border border-outline-variant/40 text-[11px]">
                  Empirical Testing
                </span>
              </div>

              {/* Terminal Mock Box with interactive training step */}
              <div className="mt-4 p-space-sm bg-surface-container-lowest border border-outline-variant/30 font-timecode text-timecode text-on-surface-variant flex flex-col gap-1 text-[12px]">
                <div className="flex items-center justify-between text-outline pb-1 border-b border-outline-variant/20">
                  <span className="text-primary font-semibold">$ python3 -m reva_research.train</span>
                  <button
                    onClick={handleStepTrain}
                    disabled={isTraining}
                    className="text-[10px] text-primary hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <Play className="w-2.5 h-2.5" />
                    <span>{isTraining ? 'STEPPING...' : 'STEP EPOCH'}</span>
                  </button>
                </div>
                <span className="text-outline">&gt; Initializing latent embedding space (dims=512)...</span>
                <span className="text-on-surface">&gt; Epoch [{epoch}/50] Loss: {loss} | Acc: {accuracy}</span>
                <span className="text-tertiary">&gt; Matrix convergence verified at REVA Lab B-04.</span>
              </div>
            </div>

            <div className="mt-6 pt-3 border-t border-outline-variant/20 font-label-mono text-label-mono text-outline text-[11px]">
              AXIS 01 // COMPUTATIONAL RIGOR
            </div>
          </div>

          {/* Center Collision Pillar */}
          <div 
            onClick={() => setShowSynthesisModal(true)}
            className="lg:col-span-1 flex flex-col items-center justify-center p-space-sm bg-surface-container-lowest border border-surface-container-highest text-center cursor-pointer group hover:border-primary transition-all"
            title="Click to view the Collision thesis"
          >
            <span className="font-label-mono text-label-mono text-outline uppercase [writing-mode:vertical-rl] tracking-widest hidden lg:block text-[11px]">
              COLLISION
            </span>
            <div className="my-4 w-12 h-12 rounded-full border border-primary/50 bg-primary-container/20 flex items-center justify-center text-primary font-headline-md text-headline-md font-bold group-hover:scale-110 transition-transform">
              ×
            </div>
            <span className="font-caption text-caption text-primary max-w-[120px] lg:max-w-none text-center text-[11px] leading-tight">
              What happens when they collide?
            </span>
          </div>

          {/* Right: Creative Vector */}
          <div className="lg:col-span-5 bg-surface-container p-space-lg border border-surface-container-highest flex flex-col justify-between">
            <div className="flex flex-col gap-space-sm">
              <div className="flex items-center justify-between border-b border-outline-variant/30 pb-space-xs">
                <span className="font-label-mono text-label-mono text-primary uppercase tracking-wider flex items-center gap-1.5 text-[11px]">
                  <Film className="w-3.5 h-3.5 inline" />
                  <span>THE CREATIVE SIDE</span>
                </span>
                <span className="font-timecode text-timecode text-outline text-[12px]">OPTICAL.LENS</span>
              </div>

              <h3 className="font-headline-md text-headline-md text-on-surface font-normal text-[24px]">
                Pacing, Optics &amp; Storytelling
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Exploring the human interior: composition, lens distortion, natural lighting, and rhythmic editorial cuts that evoke genuine emotion.
              </p>

              {/* Creative Tags */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                <span className="px-2 py-1 bg-surface-container-lowest text-on-surface font-label-mono text-label-mono border border-outline-variant/40 text-[11px]">
                  Film Direction
                </span>
                <span className="px-2 py-1 bg-surface-container-lowest text-on-surface font-label-mono text-label-mono border border-outline-variant/40 text-[11px]">
                  Cinematography (2.39:1)
                </span>
                <span className="px-2 py-1 bg-surface-container-lowest text-on-surface font-label-mono text-label-mono border border-outline-variant/40 text-[11px]">
                  3-Act Architecture
                </span>
                <span className="px-2 py-1 bg-surface-container-lowest text-on-surface font-label-mono text-label-mono border border-outline-variant/40 text-[11px]">
                  Pacing &amp; Rhythm
                </span>
                <span className="px-2 py-1 bg-surface-container-lowest text-on-surface font-label-mono text-label-mono border border-outline-variant/40 text-[11px]">
                  Visual Observation
                </span>
              </div>

              {/* Film Strip Preview Box */}
              <div className="mt-4 p-space-sm bg-surface-container-lowest border border-outline-variant/30 font-timecode text-timecode text-on-surface-variant flex flex-col gap-1 text-[12px]">
                <div className="flex items-center justify-between text-outline">
                  <span>SCENE 14 / INT. NIGHT / REVA</span>
                  <span className="text-primary flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block animate-ping" />
                    ● REC [24 FPS]
                  </span>
                </div>
                <span className="text-on-surface italic font-headline-md text-body-md font-normal text-[15px]">
                  "A lone sodium-vapor streetlamp flares across wet asphalt."
                </span>
                <span className="text-outline-variant text-[11px]">
                  LENS: 50mm Anamorphic 2x • Shutter: 1/48s • ISO: 1600
                </span>
              </div>
            </div>

            <div className="mt-6 pt-3 border-t border-outline-variant/20 font-label-mono text-label-mono text-outline text-[11px]">
              AXIS 02 // NARRATIVE POETRY
            </div>
          </div>
        </div>

        {/* Synthesis Callout */}
        <div className="p-space-md bg-surface-container border-l-4 border-primary text-on-surface flex flex-col md:flex-row items-start md:items-center justify-between gap-space-md">
          <p className="font-headline-md text-headline-md font-normal italic text-[22px] lg:text-[24px]">
            "Algorithms process patterns. Stories give them human meaning. The camera observes; the code automates."
          </p>
          <span className="font-label-mono text-label-mono text-primary font-semibold whitespace-nowrap uppercase tracking-widest text-[11px]">
            VD SYNTHESIS HYPOTHESIS
          </span>
        </div>
      </div>

      {/* Synthesis Modal */}
      {showSynthesisModal && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <div className="bg-surface-container border border-primary p-6 max-w-lg w-full">
            <div className="flex items-center justify-between pb-3 border-b border-outline-variant/40">
              <span className="font-label-mono text-primary text-xs uppercase tracking-widest">
                CONVERGENCE MANIFESTO // ACT II
              </span>
              <button 
                onClick={() => setShowSynthesisModal(false)}
                className="text-on-surface-variant hover:text-on-surface font-mono text-xs"
              >
                [CLOSE]
              </button>
            </div>
            <div className="py-4 flex flex-col gap-3 font-body-md text-on-surface">
              <p>
                To direct a film is to construct a reality frame by frame—deciding what enters the viewport, how long attention lingers, and where empathy settles.
              </p>
              <p>
                To architect an AI model is conceptually identical: selecting training data distributions, weighting focal attention heads, and minimizing perceptual loss.
              </p>
              <p className="text-primary italic font-headline-md text-lg">
                "Neither art nor mathematics exists in a vacuum. The greatest cinema is rigorously structured; the most transformative technology feels like narrative magic."
              </p>
            </div>
            <div className="pt-3 border-t border-outline-variant/30 flex justify-end">
              <button
                onClick={() => setShowSynthesisModal(false)}
                className="px-4 py-2 bg-primary-container text-on-primary font-label-mono text-xs font-semibold"
              >
                RETURN TO LAB
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
