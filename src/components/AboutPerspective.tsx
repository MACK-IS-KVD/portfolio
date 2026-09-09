import React, { useState } from 'react';
import { RefreshCw, Sparkles, AlertTriangle, Lightbulb, Code2, Play } from 'lucide-react';

export const AboutPerspective: React.FC = () => {
  const [activeNode, setActiveNode] = useState<number | null>(null);

  const pipelineNodes = [
    {
      id: 1,
      tag: 'NODE 01',
      title: 'LEARN',
      color: 'text-on-surface',
      desc: 'Absorbing core mathematics, linear algebra, vector calculus, and film history from Ray to Kubrick.',
    },
    {
      id: 2,
      tag: 'NODE 02',
      title: 'BUILD',
      color: 'text-primary',
      desc: 'Transforming theoretical algorithms into working code prototypes and cutting first rough assembly edits.',
    },
    {
      id: 3,
      tag: 'NODE 03',
      title: 'BREAK',
      color: 'text-error',
      desc: 'Debugging memory leaks in Python, bad tensor shapes, underexposed 16mm test shots, and broken routes.',
    },
    {
      id: 4,
      tag: 'NODE 04',
      title: 'UNDERSTAND',
      color: 'text-on-surface',
      desc: 'Grasping why the algorithm failed, why the cut rhythm felt unnatural, and where true craft lives.',
    },
    {
      id: 5,
      tag: 'NODE 05',
      title: 'CREATE',
      color: 'text-primary',
      desc: 'Shipping tangible software tools and capturing authentic student narratives on REVA campus.',
    },
  ];

  return (
    <section 
      id="about"
      className="w-full bg-surface-container-lowest px-space-md lg:px-margin-desktop py-space-2xl border-b border-surface-container-highest/60"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-space-xl">
        {/* Section Tag / Sidebar */}
        <div className="lg:col-span-4 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-surface-container-highest/60 pb-space-lg lg:pb-0 lg:pr-space-lg">
          <div className="flex flex-col gap-space-xs">
            <span className="font-label-mono text-label-mono text-primary uppercase tracking-widest text-[11px]">
              ACT I // PERSPECTIVE
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface font-normal text-[32px]">
              WHO IS VINAY?
            </h2>
            <span className="font-timecode text-timecode text-on-surface-variant mt-1 text-[12px]">
              IDENTITY PROFILE [VD-02-REVA]
            </span>
          </div>

          <div className="mt-space-lg lg:mt-0 p-space-md bg-surface-container-low border border-outline-variant/40">
            <span className="font-label-mono text-label-mono text-primary block mb-1 text-[11px] font-semibold">
              HONEST DISCLOSURE
            </span>
            <p className="font-caption text-caption text-on-surface-variant text-[12px] leading-relaxed">
              "Status: 2nd Year undergraduate embracing the beginner's mind. Building real systems, learning through failed compilations, and shooting test rolls."
            </p>
          </div>
        </div>

        {/* Section Body Narrative */}
        <div className="lg:col-span-8 flex flex-col gap-space-lg">
          <div className="font-headline-md text-headline-md text-on-surface font-normal leading-relaxed text-[24px]">
            I'm Vinay, a second-year BTech Artificial Intelligence &amp; Data Science student at REVA University.
          </div>
          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed text-[18px]">
            I'm interested in technology, AI, data, programming and building things that solve real problems. At the same time, another part of my brain is constantly thinking about films, directing, visuals and stories.
          </p>
          <p className="font-body-lg text-body-lg text-primary italic leading-relaxed text-[18px]">
            "I'm still figuring out exactly where those two worlds meet. That's probably the interesting part."
          </p>

          {/* Horizontal Visual Pipeline Ticker */}
          <div className="mt-space-md border border-outline-variant/50 bg-surface-container p-space-md">
            <div className="flex items-center justify-between mb-space-sm border-b border-outline-variant/30 pb-2">
              <span className="font-label-mono text-label-mono text-on-surface uppercase tracking-wider flex items-center gap-2 text-[11px]">
                <RefreshCw className="w-3.5 h-3.5 text-primary inline animate-spin-slow" />
                <span>RECURSIVE HEURISTIC PIPELINE</span>
              </span>
              <span className="font-timecode text-timecode text-primary text-[12px]">
                CYCLE 02 // SEM_04
              </span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-6 gap-2 pt-2">
              {pipelineNodes.map(node => (
                <button
                  key={node.id}
                  onClick={() => setActiveNode(activeNode === node.id ? null : node.id)}
                  className={`p-2 bg-surface-container-low border text-center transition-all cursor-pointer ${
                    activeNode === node.id
                      ? 'border-primary bg-surface-container-high'
                      : 'border-outline-variant/30 hover:border-outline'
                  }`}
                >
                  <span className="font-timecode text-timecode text-outline block text-[11px]">
                    {node.tag}
                  </span>
                  <span className={`font-label-mono text-label-mono font-semibold text-[11px] ${node.color}`}>
                    {node.title}
                  </span>
                </button>
              ))}

              <button
                onClick={() => setActiveNode(6)}
                className={`p-2 bg-surface-container-low border text-center transition-all cursor-pointer ${
                  activeNode === 6 ? 'border-primary bg-primary-container/20' : 'border-primary/50 hover:border-primary'
                }`}
              >
                <span className="font-timecode text-timecode text-primary block text-[11px]">
                  LOOP
                </span>
                <span className="font-label-mono text-label-mono text-primary font-semibold text-[11px]">
                  REPEAT ➔
                </span>
              </button>
            </div>

            {/* Active Node Interactive Inspector */}
            {activeNode && (
              <div className="mt-3 p-2.5 bg-surface-container-lowest border border-outline-variant/40 font-body-sm text-body-sm text-on-surface-variant flex items-center justify-between">
                <div>
                  <span className="text-primary font-mono text-xs uppercase mr-2">
                    {activeNode <= 5 ? `[${pipelineNodes[activeNode - 1].title}]` : '[CONTINUOUS REFINEMENT]'}
                  </span>
                  <span>
                    {activeNode <= 5 
                      ? pipelineNodes[activeNode - 1].desc
                      : 'Iterative feedback loop: Every script edit informs system architecture; every algorithm debug informs storytelling precision.'}
                  </span>
                </div>
                <button
                  onClick={() => setActiveNode(null)}
                  className="text-xs text-outline hover:text-on-surface ml-3"
                >
                  [DISMISS]
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
