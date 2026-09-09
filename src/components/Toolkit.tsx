import React from 'react';
import { Cpu, Database, Layout, Clapperboard, Sparkles } from 'lucide-react';
import { SkillPillar } from '../types';

export const Toolkit: React.FC = () => {
  const pillars: (SkillPillar & { icon: React.ReactNode })[] = [
    {
      number: '01',
      name: 'COMPUTATIONAL',
      icon: <Cpu className="w-4 h-4 text-primary" />,
      skills: ['Python', 'SQL', 'Data Structures & Algorithms', 'Git & GitHub', 'Algorithmic Problem-Solving'],
      focus: 'Core engineering discipline, clean code conventions, memory management, and reproducible workflow pipelines.',
    },
    {
      number: '02',
      name: 'AI & DATA SCIENCE',
      icon: <Database className="w-4 h-4 text-primary" />,
      skills: ['Mathematical Foundations', 'Pandas & NumPy', 'Matplotlib & Seaborn', 'Exploratory Data Analysis', 'Supervised Learning Basics'],
      focus: 'Extracting signal from noise, rigorous statistical hypothesis testing, and loss surface intuition.',
    },
    {
      number: '03',
      name: 'BUILDING & WEB',
      icon: <Layout className="w-4 h-4 text-primary" />,
      skills: ['HTML5 / CSS3 / Modern Tailwind', 'JavaScript & React Basics', 'UI / UX Prototyping', 'REST API Integration', 'Fast Hackathon Prototyping'],
      focus: 'Translating concepts into tactile digital artifacts that people can actually touch, test, and understand immediately.',
    },
    {
      number: '04',
      name: 'CREATIVE & FILM',
      icon: <Clapperboard className="w-4 h-4 text-primary" />,
      skills: ['Filmmaking Fundamentals', 'Anamorphic Framing (2.39:1)', 'Screenplay Architecture (Fountain)', 'Color Grading Workflows', 'Editorial Rhythm & Montage'],
      focus: 'Visual storytelling, character empathy, blocking actors within camera geometry, and sonic ambiance.',
    },
  ];

  return (
    <section 
      id="toolkit"
      className="w-full bg-surface-container-low px-space-md lg:px-margin-desktop py-space-3xl border-b border-surface-container-highest/60"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-space-2xl">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-outline-variant/40 pb-space-md">
          <div>
            <span className="font-label-mono text-label-mono text-primary uppercase tracking-widest text-[11px]">
              ACT IV // INSTRUMENTS
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface font-normal text-[32px]">
              CURRENT TOOLKIT
            </h2>
            <p className="font-caption text-caption text-on-surface-variant mt-1 text-[12px]">
              Skill Matrix &amp; Technology Stack • Four Core Pillars of Practice
            </p>
          </div>
          <div className="mt-4 md:mt-0 font-timecode text-timecode text-outline border border-outline-variant/40 px-3 py-1 bg-surface-container text-[12px]">
            MATRIX_ID: VD-SKILL-2025.04
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md">
          {pillars.map((pillar) => (
            <div 
              key={pillar.number}
              className="bg-surface-container p-space-md border border-surface-container-highest flex flex-col justify-between hover:border-primary/60 transition-colors"
            >
              <div className="flex flex-col gap-space-sm">
                <div className="flex items-center justify-between border-b border-outline-variant/30 pb-2">
                  <span className="font-timecode text-timecode text-primary text-[12px] font-bold">
                    PILLAR {pillar.number}
                  </span>
                  {pillar.icon}
                </div>

                <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold text-[16px] tracking-wide">
                  {pillar.name}
                </h3>

                <ul className="flex flex-col gap-1.5 pt-1">
                  {pillar.skills.map((skill, index) => (
                    <li 
                      key={index}
                      className="font-label-mono text-label-mono text-on-surface-variant flex items-center gap-2 text-[11px]"
                    >
                      <span className="w-1.5 h-1.5 bg-outline-variant inline-block" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-3 border-t border-outline-variant/30">
                <p className="font-caption text-caption text-outline text-[11px] leading-relaxed italic">
                  Focus: {pillar.focus}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Currently Evolving Banner */}
        <div className="p-space-md bg-surface-container-lowest border border-primary/40 flex flex-col md:flex-row items-start md:items-center justify-between gap-space-md">
          <div className="flex items-start gap-3">
            <div className="p-2 bg-primary-container/20 text-primary mt-0.5">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <span className="font-label-mono text-label-mono text-primary font-bold uppercase tracking-wider block text-[11px]">
                CURRENTLY EVOLVING // THIS SEMESTER
              </span>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5 text-[13px] leading-relaxed">
                Deepening neural network intuition, exploring computer vision applications for video streams, practicing camera blocking, and writing 10-minute short scripts.
              </p>
            </div>
          </div>
          <span className="font-timecode text-timecode text-outline border border-outline-variant/40 px-3 py-1 bg-surface-container whitespace-nowrap text-[11px]">
            Year 02 / Semester 04 • Continuous iteration.
          </span>
        </div>
      </div>
    </section>
  );
};
