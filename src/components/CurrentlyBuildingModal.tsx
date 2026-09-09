import React from 'react';
import { X, Wrench, CheckCircle2, Clock, Sparkles } from 'lucide-react';

interface CurrentlyBuildingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CurrentlyBuildingModal: React.FC<CurrentlyBuildingModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-4">
      <div className="bg-surface-container border border-primary p-space-md lg:p-space-lg max-w-lg w-full flex flex-col gap-space-md">
        <div className="flex items-center justify-between border-b border-outline-variant/40 pb-2">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
            <span className="font-label-mono text-xs text-primary uppercase tracking-widest font-bold">
              ACTIVE SPRINT // WORK IN PROGRESS
            </span>
          </div>
          <button
            onClick={onClose}
            className="text-on-surface-variant hover:text-on-surface font-mono text-xs cursor-pointer"
          >
            [CLOSE ✕]
          </button>
        </div>

        <div className="flex flex-col gap-3 font-body-sm text-[13px] text-on-surface-variant">
          <p className="text-on-surface">
            Current developmental focus across engineering and cinematic disciplines for Semester 04:
          </p>

          <div className="flex flex-col gap-2 pt-1">
            <div className="p-3 bg-surface-container-lowest border border-outline-variant/40 flex items-start gap-2.5">
              <Clock className="w-4 h-4 text-primary mt-0.5 shrink-0" />
              <div>
                <span className="font-mono text-xs text-primary font-bold block">
                  REVA LiveMap Campus Transit Routing
                </span>
                <span className="text-xs text-on-surface-variant">
                  Writing the weighted graph walking routing algorithm and testing live GPS shuttle ping latency with local BMTC telemetry models.
                </span>
              </div>
            </div>

            <div className="p-3 bg-surface-container-lowest border border-outline-variant/40 flex items-start gap-2.5">
              <Sparkles className="w-4 h-4 text-tertiary mt-0.5 shrink-0" />
              <div>
                <span className="font-mono text-xs text-tertiary font-bold block">
                  Night Shift Bengaluru Screenplay Draft
                </span>
                <span className="text-xs text-on-surface-variant">
                  Drafting Act II midpoint confrontation beat; location scouting under the Hebbal flyover and Kogilu cross roadside stalls.
                </span>
              </div>
            </div>

            <div className="p-3 bg-surface-container-lowest border border-outline-variant/40 flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
              <div>
                <span className="font-mono text-xs text-emerald-400 font-bold block">
                  Color Lab K-Means Refinement
                </span>
                <span className="text-xs text-on-surface-variant">
                  Benchmarking perceptual Delta E color distance against Roger Deakins' and Christopher Doyle's 35mm film filmography.
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-3 border-t border-outline-variant/30 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-primary text-on-primary font-label-mono text-xs font-bold uppercase cursor-pointer"
          >
            DISMISS
          </button>
        </div>
      </div>
    </div>
  );
};
