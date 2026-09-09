import React, { useState, useEffect } from 'react';

export const TelemetryBar: React.FC = () => {
  const [frames, setFrames] = useState(3224); // Starting frame count
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    if (!isRunning) return;
    const interval = setInterval(() => {
      setFrames(prev => prev + 1);
    }, 1000 / 24); // 24 FPS
    return () => clearInterval(interval);
  }, [isRunning]);

  // Format frames into SMPTE Timecode HH:MM:SS:FF
  const formatTimecode = (totalFrames: number) => {
    const ff = totalFrames % 24;
    const totalSeconds = Math.floor(totalFrames / 24);
    const ss = totalSeconds % 60;
    const totalMinutes = Math.floor(totalSeconds / 60);
    const mm = totalMinutes % 60;
    const hh = Math.floor(totalMinutes / 60);

    const pad = (n: number) => n.toString().padStart(2, '0');
    return `TC ${pad(hh)}:${pad(mm)}:${pad(ss)}:${pad(ff)}`;
  };

  return (
    <section 
      id="telemetry-bar"
      className="w-full bg-surface-container-lowest px-space-md lg:px-margin-desktop py-space-xs border-b border-surface-container-highest/60 flex items-center justify-between text-on-surface-variant font-label-mono text-label-mono uppercase tracking-widest select-none text-[11px]"
    >
      <div className="flex items-center gap-space-sm">
        <span className="inline-block w-2 h-2 rounded-none bg-primary animate-pulse" />
        <span className="text-on-surface">LOC: REVA UNIVERSITY [13.1145° N, 77.6347° E]</span>
        <span className="hidden sm:inline text-outline-variant">|</span>
        <span className="hidden sm:inline">FRAME RATE: 24.000 FPS SYNC</span>
      </div>
      <div className="flex items-center gap-space-md">
        <span className="hidden md:inline text-outline">ANAMORPHIC SCOPE 2.39:1</span>
        <button
          onClick={() => setIsRunning(!isRunning)}
          title={isRunning ? "Pause timecode generator" : "Resume timecode generator"}
          className="text-primary font-timecode text-timecode hover:underline cursor-pointer flex items-center gap-1"
        >
          <span>{formatTimecode(frames)}</span>
          <span className="text-[9px] text-outline opacity-60">[{isRunning ? 'RUN' : 'HOLD'}]</span>
        </button>
      </div>
    </section>
  );
};
