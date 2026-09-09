import React, { useState, useEffect } from 'react';
import { 
  Compass, 
  MapPin, 
  Bus, 
  Layers, 
  Radio, 
  Code, 
  Sparkles, 
  Eye, 
  FileText, 
  CheckCircle2, 
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { Project } from '../types';

export const Projects: React.FC = () => {
  const [mapMode, setMapMode] = useState<'2d' | 'graph' | 'satellite'>('2d');
  const [activeBuilding, setActiveBuilding] = useState<string>('Central Library');
  const [selectedRoute, setSelectedRoute] = useState<'route1' | 'route2' | 'route3'>('route1');
  const [shuttlePosition, setShuttlePosition] = useState<number>(20); // 0 to 100%
  const [expandedCaseStudy, setExpandedCaseStudy] = useState(false);

  // Secondary Project 02: Interactive Color Lab
  const [activeFilmPalette, setActiveFilmPalette] = useState<'blade' | 'mood' | 'paris'>('blade');
  const palettes = {
    blade: {
      film: 'BLADE RUNNER 2049 (2017)',
      dp: 'Roger Deakins, ASC, BSC',
      aspect: '2.39:1 Anamorphic',
      colors: [
        { hex: '#f97316', label: 'Sodium Vapor Orange', weight: '38%' },
        { hex: '#0f172a', label: 'Smog Midnight Blue', weight: '29%' },
        { hex: '#06b6d4', label: 'Hologram Neon Cyan', weight: '18%' },
        { hex: '#78350f', label: 'Desert Dust Amber', weight: '15%' },
      ],
    },
    mood: {
      film: 'IN THE MOOD FOR LOVE (2000)',
      dp: 'Christopher Doyle, HKSC',
      aspect: '1.66:1 Flat',
      colors: [
        { hex: '#b91c1c', label: 'Crimson Velvet Curtain', weight: '42%' },
        { hex: '#1e293b', label: 'Rainy Alley Charcoal', weight: '26%' },
        { hex: '#d97706', label: 'Tungsten Amber Glow', weight: '20%' },
        { hex: '#047857', label: 'Jade Cheongsam Green', weight: '12%' },
      ],
    },
    paris: {
      film: 'PARIS, TEXAS (1984)',
      dp: 'Robby Müller, NSC, BVK',
      aspect: '1.66:1 European Wide',
      colors: [
        { hex: '#ef4444', label: 'Mohair Billboard Red', weight: '35%' },
        { hex: '#38bdf8', label: 'Desert Daylight Sky', weight: '31%' },
        { hex: '#fbbf24', label: 'Gas Station Yellow', weight: '22%' },
        { hex: '#1c1917', label: 'Diner Booth Shadow', weight: '12%' },
      ],
    },
  };

  // Secondary Project 03: Script parser sample
  const [analyzedScene, setAnalyzedScene] = useState(1);

  // Shuttle movement animation loop
  useEffect(() => {
    const timer = setInterval(() => {
      setShuttlePosition((prev) => (prev >= 100 ? 0 : prev + 2));
    }, 400);
    return () => clearInterval(timer);
  }, []);

  const buildings = [
    { name: 'Central Library', code: 'REVA-K-01', desc: '4-Story Central Knowledge Hub & Digital Repository', pos: { x: 50, y: 45 } },
    { name: 'Science & Tech Block', code: 'REVA-ST-04', desc: 'AI & Data Science Labs, Server Racks & Workstations', pos: { x: 30, y: 30 } },
    { name: 'C.V. Raman Block', code: 'REVA-CVR-02', desc: 'Engineering Lecture Halls & Electronics Wings', pos: { x: 70, y: 32 } },
    { name: 'Amphitheatre', code: 'REVA-OAT-01', desc: 'Outdoor Cultural Stage, Screenings & Film Showcases', pos: { x: 42, y: 70 } },
    { name: 'Shuttle Gate 1', code: 'REVA-BAY-01', desc: 'Main Campus Transit Hub, Bus Fleet & Waypoints', pos: { x: 20, y: 80 } },
  ];

  return (
    <section 
      id="work"
      className="w-full bg-surface-container-lowest px-space-md lg:px-margin-desktop py-space-3xl border-b border-surface-container-highest/60"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-space-2xl">
        {/* Section Header */}
        <div className="flex flex-col gap-space-xs border-b border-outline-variant/40 pb-space-md">
          <span className="font-label-mono text-label-mono text-primary uppercase tracking-widest text-[11px]">
            ACT III // REAL-WORLD ARTIFACTS
          </span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface font-normal text-[32px]">
            SELECTED EXPERIMENTS &amp; PROJECTS
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl text-[15px]">
            What I've built, what I'm building, and what I want to build next. Bridging software architecture and user-facing experiences.
          </p>
        </div>

        {/* PRIMARY HERO PROJECT: REVA LIVEMAP */}
        <div 
          id="project-reva-livemap"
          className="border border-outline-variant/60 bg-surface-container-low p-space-md lg:p-space-xl flex flex-col gap-space-lg"
        >
          {/* Project Title Bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-sm border-b border-outline-variant/40 pb-space-md">
            <div>
              <div className="flex items-center gap-space-xs">
                <span className="font-timecode text-timecode text-primary text-[12px]">PROJECT 01</span>
                <span className="text-outline">/</span>
                <span className="font-label-mono text-label-mono text-on-surface uppercase tracking-wider text-[11px]">
                  CAMPUS DIGITAL TWIN CONCEPT
                </span>
              </div>
              <h3 className="font-headline-lg text-headline-lg text-on-surface font-normal mt-1 text-[28px] lg:text-[32px]">
                REVA LiveMap
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant text-[15px]">
                Spatial intelligence &amp; campus transit graph navigation for REVA University's 45-acre campus.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 bg-primary-container/20 text-primary border border-primary/40 font-label-mono text-label-mono uppercase tracking-wider text-[11px]">
                ACTIVE CONCEPT
              </span>
              <span className="px-2.5 py-1 bg-surface-container text-on-surface-variant font-label-mono text-label-mono border border-outline-variant/40 text-[11px]">
                PWA / GRAPH / IOT
              </span>
            </div>
          </div>

          {/* Interactive Digital Twin Vector Stage */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-md items-stretch">
            {/* Vector Canvas Container */}
            <div className="lg:col-span-8 bg-surface-container-lowest border border-outline-variant/40 relative min-h-[380px] p-4 flex flex-col justify-between overflow-hidden">
              {/* Map Canvas Header Toolbar */}
              <div className="relative z-10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setMapMode('2d')}
                    className={`px-2 py-1 font-label-mono text-[11px] uppercase cursor-pointer border ${
                      mapMode === '2d' ? 'bg-primary text-on-primary border-primary font-bold' : 'bg-surface-container text-on-surface-variant border-outline-variant/40'
                    }`}
                  >
                    2D Vector
                  </button>
                  <button
                    onClick={() => setMapMode('graph')}
                    className={`px-2 py-1 font-label-mono text-[11px] uppercase cursor-pointer border ${
                      mapMode === 'graph' ? 'bg-primary text-on-primary border-primary font-bold' : 'bg-surface-container text-on-surface-variant border-outline-variant/40'
                    }`}
                  >
                    Graph Nodes
                  </button>
                  <button
                    onClick={() => setMapMode('satellite')}
                    className={`px-2 py-1 font-label-mono text-[11px] uppercase cursor-pointer border ${
                      mapMode === 'satellite' ? 'bg-primary text-on-primary border-primary font-bold' : 'bg-surface-container text-on-surface-variant border-outline-variant/40'
                    }`}
                  >
                    Satellite Grid
                  </button>
                </div>

                <div className="font-timecode text-[11px] text-primary bg-surface-container px-2 py-0.5 border border-outline-variant/40 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" />
                  <span>CAMPUS SHUTTLE 02: IN TRANSIT</span>
                </div>
              </div>

              {/* Vector SVG Schematic Map of REVA Campus */}
              <div className="relative my-4 h-64 w-full flex items-center justify-center">
                <svg className="w-full h-full" viewBox="0 0 600 320" fill="none">
                  {/* Background Grid */}
                  <pattern id="campusGrid" width="30" height="30" patternUnits="userSpaceOnUse">
                    <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#292a2b" strokeWidth="0.6" />
                  </pattern>
                  <rect width="600" height="320" fill="url(#campusGrid)" />

                  {/* Satellite or Satellite contours if active */}
                  {mapMode === 'satellite' && (
                    <g opacity="0.25">
                      <rect x="50" y="40" width="500" height="240" fill="#1b1c1d" stroke="#554336" strokeDasharray="3,3" />
                      <circle cx="300" cy="160" r="140" stroke="#0297e8" strokeWidth="1" strokeDasharray="5,5" />
                    </g>
                  )}

                  {/* Campus Roads & Paths */}
                  <path d="M 70 260 L 160 210 L 290 210 L 440 100 L 530 110" stroke="#39393a" strokeWidth="6" strokeLinecap="round" />
                  <path d="M 160 210 L 190 90 L 320 90 L 440 100" stroke="#554336" strokeWidth="3" strokeDasharray="4,4" />
                  <path d="M 290 210 L 260 270 L 400 270 L 440 100" stroke="#554336" strokeWidth="2.5" />

                  {/* Active Selected Path from C.V. Raman to Central Library */}
                  <path d="M 430 105 L 300 150" stroke="#ffb77d" strokeWidth="3" strokeDasharray="6,4" className="animate-pulse" />

                  {/* Campus Blocks / Buildings */}
                  {/* Science & Tech */}
                  <g 
                    onClick={() => setActiveBuilding('Science & Tech Block')}
                    className="cursor-pointer group"
                  >
                    <rect x="150" y="60" width="80" height="60" fill={activeBuilding === 'Science & Tech Block' ? '#d97707' : '#1f2021'} stroke="#ffb77d" strokeWidth="1.5" />
                    <text x="190" y="95" fill="#e3e2e3" fontSize="10" fontFamily="JetBrains Mono" textAnchor="middle">SCI &amp; TECH</text>
                  </g>

                  {/* Central Library */}
                  <g 
                    onClick={() => setActiveBuilding('Central Library')}
                    className="cursor-pointer group"
                  >
                    <rect x="260" y="125" width="85" height="55" fill={activeBuilding === 'Central Library' ? '#d97707' : '#292a2b'} stroke="#ffdcc3" strokeWidth="2" />
                    <text x="302" y="156" fill="#ffdcc3" fontSize="10" fontWeight="bold" fontFamily="JetBrains Mono" textAnchor="middle">LIBRARY</text>
                  </g>

                  {/* C.V. Raman Block */}
                  <g 
                    onClick={() => setActiveBuilding('C.V. Raman Block')}
                    className="cursor-pointer group"
                  >
                    <rect x="400" y="70" width="90" height="65" fill={activeBuilding === 'C.V. Raman Block' ? '#d97707' : '#1f2021'} stroke="#ffb77d" strokeWidth="1.5" />
                    <text x="445" y="106" fill="#e3e2e3" fontSize="10" fontFamily="JetBrains Mono" textAnchor="middle">C.V. RAMAN</text>
                  </g>

                  {/* Open Air Amphitheatre */}
                  <g 
                    onClick={() => setActiveBuilding('Amphitheatre')}
                    className="cursor-pointer group"
                  >
                    <polygon points="230,240 280,240 300,280 210,280" fill={activeBuilding === 'Amphitheatre' ? '#d97707' : '#1b1c1d'} stroke="#a38c7c" strokeWidth="1" />
                    <text x="255" y="265" fill="#dbc2b0" fontSize="9" fontFamily="JetBrains Mono" textAnchor="middle">OAT / STAGE</text>
                  </g>

                  {/* Shuttle Gate 1 */}
                  <g 
                    onClick={() => setActiveBuilding('Shuttle Gate 1')}
                    className="cursor-pointer group"
                  >
                    <circle cx="80" cy="255" r="16" fill={activeBuilding === 'Shuttle Gate 1' ? '#d97707' : '#1f2021'} stroke="#96ccff" strokeWidth="1.5" />
                    <text x="80" y="259" fill="#96ccff" fontSize="9" fontFamily="JetBrains Mono" textAnchor="middle">GATE 1</text>
                  </g>

                  {/* Moving Shuttle Bus Icon on the Loop */}
                  {(() => {
                    // interpolate on path
                    const t = shuttlePosition / 100;
                    const bx = 70 + (460 * t);
                    const by = 260 - (150 * Math.sin(t * Math.PI));
                    return (
                      <g transform={`translate(${bx}, ${by})`}>
                        <circle cx="0" cy="0" r="10" fill="#ffb77d" />
                        <circle cx="0" cy="0" r="15" stroke="#ffb77d" strokeWidth="1" opacity="0.4" className="animate-ping" />
                        <text x="0" y="3" fill="#4d2600" fontSize="8" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle">🚌</text>
                      </g>
                    );
                  })()}
                </svg>
              </div>

              {/* Map Footer Status Bar */}
              <div className="relative z-10 flex flex-wrap items-center justify-between pt-2 border-t border-outline-variant/30 text-[11px] font-timecode text-on-surface-variant">
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-primary inline" />
                  <span className="text-on-surface font-semibold">{activeBuilding}</span>
                  <span className="text-outline">|</span>
                  <span>{buildings.find(b => b.name === activeBuilding)?.code}</span>
                </div>
                <div className="text-primary">
                  ROUTE 4A: C.V. RAMAN ➔ CENTRAL LIB (4 MINS WALK - 280M)
                </div>
              </div>
            </div>

            {/* Right Map Detail Sidebar */}
            <div className="lg:col-span-4 bg-surface-container p-space-md border border-outline-variant/40 flex flex-col justify-between">
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between border-b border-outline-variant/30 pb-2">
                  <span className="font-label-mono text-label-mono text-primary uppercase tracking-wider text-[11px]">
                    INSPECTED NODE
                  </span>
                  <span className="font-timecode text-timecode text-outline text-[12px]">GEO.02.REVA</span>
                </div>

                <div>
                  <h4 className="font-headline-md text-headline-md text-on-surface font-normal text-[22px]">
                    {activeBuilding}
                  </h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 leading-relaxed text-[13px]">
                    {buildings.find(b => b.name === activeBuilding)?.desc}
                  </p>
                </div>

                {/* Live Campus Telemetry Readings */}
                <div className="p-2.5 bg-surface-container-lowest border border-outline-variant/30 flex flex-col gap-1.5 text-[11px] font-timecode">
                  <div className="flex justify-between">
                    <span className="text-outline">PEDESTRIAN DENSITY:</span>
                    <span className="text-emerald-400">MODERATE (34%)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-outline">NEXT SHUTTLE ETA:</span>
                    <span className="text-primary font-bold">02 MINS 18 SECS</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-outline">WI-FI SIGNAL MESH:</span>
                    <span className="text-on-surface">-52 dBm [EXCELLENT]</span>
                  </div>
                </div>

                {/* Route Presets */}
                <div className="flex flex-col gap-1.5 pt-1">
                  <span className="font-label-mono text-[10px] text-outline uppercase tracking-wider">
                    FREQUENT STUDENT PATHWAYS
                  </span>
                  <button 
                    onClick={() => { setActiveBuilding('Central Library'); setSelectedRoute('route1'); }}
                    className={`p-2 text-left text-xs font-mono border transition-colors cursor-pointer flex items-center justify-between ${
                      selectedRoute === 'route1' ? 'border-primary bg-primary-container/20 text-on-surface' : 'border-outline-variant/30 bg-surface-container-low text-on-surface-variant'
                    }`}
                  >
                    <span>C.V. Raman ➔ Library</span>
                    <span className="text-primary">4 min</span>
                  </button>
                  <button 
                    onClick={() => { setActiveBuilding('Science & Tech Block'); setSelectedRoute('route2'); }}
                    className={`p-2 text-left text-xs font-mono border transition-colors cursor-pointer flex items-center justify-between ${
                      selectedRoute === 'route2' ? 'border-primary bg-primary-container/20 text-on-surface' : 'border-outline-variant/30 bg-surface-container-low text-on-surface-variant'
                    }`}
                  >
                    <span>Main Gate ➔ Sci &amp; Tech</span>
                    <span className="text-primary">6 min</span>
                  </button>
                </div>
              </div>

              <div className="pt-4 border-t border-outline-variant/30">
                <button
                  onClick={() => setExpandedCaseStudy(!expandedCaseStudy)}
                  className="w-full py-2 bg-surface-container-low border border-primary/60 hover:bg-primary-container hover:text-on-primary text-primary font-label-mono text-label-mono uppercase tracking-widest text-[11px] transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>{expandedCaseStudy ? 'COLLAPSE SYSTEM ARCHITECTURE' : 'READ 5-STEP CASE STUDY'}</span>
                  <ChevronRight className={`w-3.5 h-3.5 transition-transform ${expandedCaseStudy ? 'rotate-90' : ''}`} />
                </button>
              </div>
            </div>
          </div>

          {/* 4 Feature Architecture Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-sm pt-2">
            <div className="p-space-sm bg-surface-container border border-outline-variant/30 flex flex-col gap-1">
              <div className="flex items-center gap-1.5 text-primary text-[11px] font-label-mono uppercase">
                <Compass className="w-3.5 h-3.5 inline" />
                <span>01 Wayfinding Engine</span>
              </div>
              <p className="font-caption text-caption text-on-surface-variant text-[12px] leading-relaxed">
                Directed acyclic graph routing between campus lecture halls, laboratories, and cafeteria zones.
              </p>
            </div>

            <div className="p-space-sm bg-surface-container border border-outline-variant/30 flex flex-col gap-1">
              <div className="flex items-center gap-1.5 text-primary text-[11px] font-label-mono uppercase">
                <Bus className="w-3.5 h-3.5 inline" />
                <span>02 Shuttle Telemetry</span>
              </div>
              <p className="font-caption text-caption text-on-surface-variant text-[12px] leading-relaxed">
                Real-time GPS beacon ingestion for REVA bus fleets navigating North Bengaluru outer ring traffic.
              </p>
            </div>

            <div className="p-space-sm bg-surface-container border border-outline-variant/30 flex flex-col gap-1">
              <div className="flex items-center gap-1.5 text-primary text-[11px] font-label-mono uppercase">
                <Radio className="w-3.5 h-3.5 inline" />
                <span>03 Live Bulletin</span>
              </div>
              <p className="font-caption text-caption text-on-surface-variant text-[12px] leading-relaxed">
                Decentralized student club noticeboard and seminar rooms schedule tied directly to building geofences.
              </p>
            </div>

            <div className="p-space-sm bg-surface-container border border-outline-variant/30 flex flex-col gap-1">
              <div className="flex items-center gap-1.5 text-primary text-[11px] font-label-mono uppercase">
                <Eye className="w-3.5 h-3.5 inline" />
                <span>04 Horizon Tech</span>
              </div>
              <p className="font-caption text-caption text-on-surface-variant text-[12px] leading-relaxed">
                Computer vision edge density estimation for cafeteria queues and library seating availability.
              </p>
            </div>
          </div>

          {/* Expanded 5-Step Deep Dive Case Study */}
          {expandedCaseStudy && (
            <div className="p-space-lg bg-surface-container-lowest border-t-2 border-primary mt-2 flex flex-col gap-space-md">
              <div className="flex items-center justify-between border-b border-outline-variant/40 pb-2">
                <span className="font-headline-md text-on-surface text-[20px] font-semibold">
                  REVA LiveMap // Architectural Blueprint &amp; Philosophy
                </span>
                <span className="font-timecode text-xs text-primary">DOC_ID: LIVEMAP-ENG-01</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-5 gap-space-md pt-2">
                <div className="flex flex-col gap-2 p-3 bg-surface-container border border-outline-variant/30">
                  <span className="font-timecode text-xs text-primary font-bold">01 // FRICTION</span>
                  <h5 className="font-label-mono text-xs font-semibold text-on-surface">Campus Scale</h5>
                  <p className="font-caption text-[11px] text-on-surface-variant leading-relaxed">
                    Over 15,000 students navigating 45 sprawling acres during 10-minute lecture transition windows with high disorientation.
                  </p>
                </div>

                <div className="flex flex-col gap-2 p-3 bg-surface-container border border-outline-variant/30">
                  <span className="font-timecode text-xs text-primary font-bold">02 // ARCHITECTURE</span>
                  <h5 className="font-label-mono text-xs font-semibold text-on-surface">Low-Latency PWA</h5>
                  <p className="font-caption text-[11px] text-on-surface-variant leading-relaxed">
                    Zero-app-store requirement: installs instantly on student devices via service workers and caches campus vectors offline.
                  </p>
                </div>

                <div className="flex flex-col gap-2 p-3 bg-surface-container border border-outline-variant/30">
                  <span className="font-timecode text-xs text-primary font-bold">03 // ALGORITHM</span>
                  <h5 className="font-label-mono text-xs font-semibold text-on-surface">Vector Graph Routing</h5>
                  <p className="font-caption text-[11px] text-on-surface-variant leading-relaxed">
                    Bidirectional Dijkstra shortest path calculation on weighted walking graph with ADA-accessible ramp preferences.
                  </p>
                </div>

                <div className="flex flex-col gap-2 p-3 bg-surface-container border border-outline-variant/30">
                  <span className="font-timecode text-xs text-primary font-bold">04 // AESTHETIC</span>
                  <h5 className="font-label-mono text-xs font-semibold text-on-surface">Tactile Dark UI</h5>
                  <p className="font-caption text-[11px] text-on-surface-variant leading-relaxed">
                    High contrast dark palette inspired by aviation head-up displays, optimized for sunlight legibility across North Bengaluru.
                  </p>
                </div>

                <div className="flex flex-col gap-2 p-3 bg-surface-container border border-outline-variant/30">
                  <span className="font-timecode text-xs text-primary font-bold">05 // DATA</span>
                  <h5 className="font-label-mono text-xs font-semibold text-on-surface">Open Student APIs</h5>
                  <p className="font-caption text-[11px] text-on-surface-variant leading-relaxed">
                    Community-contributed timetable feeds and club event geo-anchors enabling peer-to-peer campus discovery.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* SECONDARY PROJECTS GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-space-lg">
          {/* Project 02: Algorithmic Cinematography Color Lab */}
          <div className="border border-outline-variant/50 bg-surface-container-low p-space-md flex flex-col justify-between">
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between border-b border-outline-variant/30 pb-2">
                <span className="font-timecode text-timecode text-primary text-[12px]">PROJECT 02</span>
                <span className="font-label-mono text-label-mono text-outline text-[11px]">CINE × PYTHON</span>
              </div>

              <h4 className="font-headline-md text-headline-md text-on-surface font-normal text-[22px]">
                Cinematography Color Lab
              </h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed text-[13px]">
                K-Means clustering algorithm extracting dominant color palettes, luminance curves, and chromatic balance from film stills.
              </p>

              {/* Interactive Palette Selector */}
              <div className="flex gap-1 pt-1">
                {(['blade', 'mood', 'paris'] as const).map((key) => (
                  <button
                    key={key}
                    onClick={() => setActiveFilmPalette(key)}
                    className={`px-2 py-1 text-[10px] font-mono border cursor-pointer uppercase ${
                      activeFilmPalette === key
                        ? 'border-primary bg-primary text-on-primary font-bold'
                        : 'border-outline-variant/40 bg-surface-container text-on-surface-variant'
                    }`}
                  >
                    {key === 'blade' ? 'Deakins' : key === 'mood' ? 'Doyle' : 'Müller'}
                  </button>
                ))}
              </div>

              {/* Active Film Palette Card */}
              <div className="p-3 bg-surface-container-lowest border border-outline-variant/40 flex flex-col gap-2">
                <div className="flex justify-between text-[11px] font-timecode text-outline">
                  <span>{palettes[activeFilmPalette].film}</span>
                  <span className="text-primary">{palettes[activeFilmPalette].aspect}</span>
                </div>
                
                {/* Color Swatches */}
                <div className="grid grid-cols-4 gap-1.5 h-12 my-1">
                  {palettes[activeFilmPalette].colors.map((c, i) => (
                    <div 
                      key={i} 
                      style={{ backgroundColor: c.hex }}
                      className="h-full w-full rounded-none relative group flex items-end justify-center p-1"
                      title={`${c.label} (${c.hex})`}
                    >
                      <span className="text-[9px] font-mono font-bold bg-black/60 px-1 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                        {c.weight}
                      </span>
                    </div>
                  ))}
                </div>

                <span className="font-label-mono text-[10px] text-on-surface-variant">
                  DP: {palettes[activeFilmPalette].dp}
                </span>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-outline-variant/30 flex items-center justify-between text-[11px] font-label-mono text-outline">
              <span>ALGORITHM: K-MEANS ++ (K=4)</span>
              <span className="text-primary">SCIENTIFIC EDA</span>
            </div>
          </div>

          {/* Project 03: Script-to-Timeline NLP Parser */}
          <div className="border border-outline-variant/50 bg-surface-container-low p-space-md flex flex-col justify-between">
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between border-b border-outline-variant/30 pb-2">
                <span className="font-timecode text-timecode text-primary text-[12px]">PROJECT 03</span>
                <span className="font-label-mono text-label-mono text-outline text-[11px]">NLP × SCREENWRITING</span>
              </div>

              <h4 className="font-headline-md text-headline-md text-on-surface font-normal text-[22px]">
                Script-to-Timeline NLP
              </h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed text-[13px]">
                Natural Language Processing pipeline parsing Fountain/Final Draft screenplays into dramatic tension curves and pacing metrics.
              </p>

              {/* Sample Scene Tension Visualizer */}
              <div className="p-3 bg-surface-container-lowest border border-outline-variant/40 flex flex-col gap-2">
                <div className="flex justify-between text-[11px] font-timecode text-outline">
                  <span>SAMPLE: ACT II MIDPOINT CLIMAX</span>
                  <span className="text-primary">TENSION: 88/100</span>
                </div>

                {/* SVG Tension Arc Graph */}
                <div className="h-14 w-full flex items-center justify-center">
                  <svg className="w-full h-full" viewBox="0 0 240 50">
                    <path d="M 10 40 Q 60 38 90 25 T 150 10 T 210 32 T 230 42" fill="none" stroke="#ffb77d" strokeWidth="2" />
                    <circle cx="150" cy="10" r="3" fill="#ffb4ab" />
                    <line x1="150" x2="150" y1="10" y2="48" stroke="#554336" strokeDasharray="2,2" />
                    <text x="155" y="16" fill="#ffb77d" fontSize="8" fontFamily="JetBrains Mono">INCITING BEAT</text>
                  </svg>
                </div>

                <div className="flex justify-between text-[10px] font-mono text-on-surface-variant">
                  <span>Dialogue: 62%</span>
                  <span>Action Blocks: 38%</span>
                  <span>Cut Frequency: 3.4s</span>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-outline-variant/30 flex items-center justify-between text-[11px] font-label-mono text-outline">
              <span>STACK: PYTHON, REGEX, NLTK</span>
              <span className="text-primary">NARRATIVE DATA</span>
            </div>
          </div>

          {/* Project 04: Academic Resource Radar */}
          <div className="border border-outline-variant/50 bg-surface-container-low p-space-md flex flex-col justify-between">
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between border-b border-outline-variant/30 pb-2">
                <span className="font-timecode text-timecode text-primary text-[12px]">PROJECT 04</span>
                <span className="font-label-mono text-label-mono text-outline text-[11px]">STUDENT TOOLKIT</span>
              </div>

              <h4 className="font-headline-md text-headline-md text-on-surface font-normal text-[22px]">
                Academic Resource Radar
              </h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed text-[13px]">
                Curated open knowledge index for REVA AI &amp; Data Science students: core mathematical derivations, PyTorch notebooks, and datasets.
              </p>

              {/* Curated Module List */}
              <div className="p-3 bg-surface-container-lowest border border-outline-variant/40 flex flex-col gap-2 text-xs font-mono">
                <div className="flex items-center justify-between text-on-surface">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                    <span>Linear Algebra &amp; SVD</span>
                  </span>
                  <span className="text-[10px] text-outline">SEM_03</span>
                </div>
                <div className="flex items-center justify-between text-on-surface">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                    <span>Data Structures in C++/Python</span>
                  </span>
                  <span className="text-[10px] text-outline">SEM_03</span>
                </div>
                <div className="flex items-center justify-between text-primary">
                  <span className="flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-primary" />
                    <span>Machine Learning Foundations</span>
                  </span>
                  <span className="text-[10px] text-primary">IN PROGRESS</span>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-outline-variant/30 flex items-center justify-between text-[11px] font-label-mono text-outline">
              <span>REVA SYLLABUS ALIGNED</span>
              <span className="text-primary">OPEN REPOSITORY</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
