import React, { useState } from 'react';
import { Bookmark, Plus, Sparkles, Filter, Check } from 'lucide-react';
import { ScratchpadItem } from '../types';

export const CreativeArchive: React.FC = () => {
  const [filter, setFilter] = useState<string>('ALL');
  const [showAddForm, setShowAddForm] = useState(false);
  const [newTag, setNewTag] = useState('[FILM IDEA]');
  const [newQuote, setNewQuote] = useState('');
  const [newMeta, setNewMeta] = useState('STUDENT VISITOR NOTE • LIVE SCRATCHPAD');

  const [notes, setNotes] = useState<ScratchpadItem[]>([
    {
      id: 'sc-01',
      category: 'FILM IDEAS',
      titleTag: '[FILM IDEA 04]',
      quote:
        'A movie about two engineering students who accidentally build an AI that writes better screenplays than their film professor.',
      meta: 'NOTE // LOGLINE DRAFT • NORTH BENGALURU',
      colorTag: 'text-primary',
    },
    {
      id: 'sc-02',
      category: 'EXPERIMENTS',
      titleTag: '[VISUAL EXPERIMENT]',
      quote:
        '35mm optical grain test under the sodium-vapor high mast lamps right outside the REVA University main gate after monsoon rain.',
      meta: 'NOTE // CINE EXPERIMENT • 500T GRAIN',
      colorTag: 'text-tertiary',
    },
    {
      id: 'sc-03',
      category: 'DATA NARRATIVES',
      titleTag: '[DATA NARRATIVE]',
      quote:
        'The memory of a city captured entirely through GPS speed logs of Bengaluru BMTC buses navigating evening traffic jams.',
      meta: 'NOTE // URBAN DATA SCIENCE • GEO',
      colorTag: 'text-primary-container',
    },
    {
      id: 'sc-04',
      category: 'EXPERIMENTS',
      titleTag: '[AUDIO SYNTHESIS]',
      quote:
        'An open-source student short film scored entirely by pure code-generated ambient modular synthesizer drones.',
      meta: 'NOTE // SOUND DESIGN • ALGORITHMIC',
      colorTag: 'text-secondary-fixed-dim',
    },
  ]);

  const handleAddNote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newQuote.trim()) return;
    const item: ScratchpadItem = {
      id: `sc-${Date.now()}`,
      category: newTag.includes('FILM') ? 'FILM IDEAS' : newTag.includes('DATA') ? 'DATA NARRATIVES' : 'EXPERIMENTS',
      titleTag: newTag,
      quote: newQuote.trim(),
      meta: newMeta,
      colorTag: 'text-primary',
    };
    setNotes([item, ...notes]);
    setNewQuote('');
    setShowAddForm(false);
  };

  const filteredNotes = filter === 'ALL' ? notes : notes.filter((n) => n.category === filter);

  return (
    <section 
      id="archive"
      className="w-full bg-surface-container-low px-space-md lg:px-margin-desktop py-space-3xl border-b border-surface-container-highest/60"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-space-2xl">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-outline-variant/40 pb-space-md">
          <div>
            <span className="font-label-mono text-label-mono text-primary uppercase tracking-widest text-[11px]">
              ACT VI // SCRATCHPAD
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface font-normal text-[32px]">
              THE CREATIVE ARCHIVE
            </h2>
            <p className="font-caption text-caption text-on-surface-variant mt-1 text-[12px]">
              Raw thoughts, unpolished concepts, midnight notes, and visual hypotheses.
            </p>
          </div>

          <div className="mt-4 md:mt-0 flex items-center gap-2">
            <button
              onClick={() => setShowAddForm(!showAddForm)}
              className="px-3 py-1 bg-surface-container border border-primary/60 text-primary hover:bg-primary hover:text-on-primary font-label-mono text-xs uppercase tracking-wider transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>{showAddForm ? 'CANCEL NOTE' : 'PIN TO SCRATCHPAD'}</span>
            </button>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 flex-wrap">
          <span className="font-label-mono text-xs text-outline uppercase mr-2 flex items-center gap-1">
            <Filter className="w-3 h-3" />
            <span>FILTER:</span>
          </span>
          {['ALL', 'FILM IDEAS', 'EXPERIMENTS', 'DATA NARRATIVES'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-2.5 py-1 text-[11px] font-mono border uppercase cursor-pointer transition-colors ${
                filter === cat
                  ? 'bg-primary text-on-primary border-primary font-bold'
                  : 'bg-surface-container text-on-surface-variant border-outline-variant/40 hover:border-outline'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Pin Note Form */}
        {showAddForm && (
          <form onSubmit={handleAddNote} className="p-4 bg-surface-container border border-primary flex flex-col gap-3">
            <div className="flex items-center justify-between text-xs font-mono text-primary border-b border-outline-variant/30 pb-1">
              <span>CONTRIBUTE RAW THOUGHT TO ARCHIVE</span>
              <span>EPHEMERAL CACHE</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <select
                value={newTag}
                onChange={(e) => setNewTag(e.target.value)}
                className="bg-surface-container-lowest border border-outline-variant/50 text-xs text-on-surface p-2 font-mono"
              >
                <option value="[FILM IDEA]">[FILM IDEA]</option>
                <option value="[VISUAL EXPERIMENT]">[VISUAL EXPERIMENT]</option>
                <option value="[DATA NARRATIVE]">[DATA NARRATIVE]</option>
                <option value="[CAMPUS DIALOGUE]">[CAMPUS DIALOGUE]</option>
              </select>
              <input
                type="text"
                value={newMeta}
                onChange={(e) => setNewMeta(e.target.value)}
                placeholder="Author / Context metadata..."
                className="bg-surface-container-lowest border border-outline-variant/50 text-xs text-on-surface p-2 font-mono"
              />
            </div>
            <textarea
              rows={2}
              value={newQuote}
              onChange={(e) => setNewQuote(e.target.value)}
              placeholder="Type raw concept or observation..."
              className="bg-surface-container-lowest border border-outline-variant/50 text-sm text-on-surface p-2 font-sans"
            />
            <div className="flex justify-end">
              <button
                type="submit"
                className="px-4 py-1.5 bg-primary text-on-primary text-xs font-mono font-bold uppercase cursor-pointer"
              >
                COMMIT NOTE ➔
              </button>
            </div>
          </form>
        )}

        {/* Notes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md">
          {filteredNotes.map((item) => (
            <div 
              key={item.id}
              className="bg-surface-container p-space-md border border-surface-container-highest flex flex-col justify-between hover:border-primary/50 transition-colors"
            >
              <div className="flex flex-col gap-space-sm">
                <div className="flex items-center justify-between border-b border-outline-variant/30 pb-2">
                  <span className={`font-timecode text-timecode font-bold text-[12px] ${item.colorTag || 'text-primary'}`}>
                    {item.titleTag}
                  </span>
                  <Bookmark className="w-3.5 h-3.5 text-outline" />
                </div>
                <p className="font-body-md text-body-md text-on-surface leading-relaxed text-[15px] italic">
                  "{item.quote}"
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-outline-variant/30">
                <span className="font-label-mono text-label-mono text-outline uppercase tracking-wider block text-[10px]">
                  {item.meta}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
