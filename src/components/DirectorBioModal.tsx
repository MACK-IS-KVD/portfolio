import React from 'react';
import { Camera, BookOpen, MapPin, Award } from 'lucide-react';

interface DirectorBioModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DirectorBioModal: React.FC<DirectorBioModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-4">
      <div className="bg-surface-container border border-primary p-space-md lg:p-space-lg max-w-xl w-full flex flex-col gap-space-md">
        <div className="flex items-center justify-between border-b border-outline-variant/40 pb-2">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-primary inline-block" />
            <span className="font-label-mono text-xs text-primary uppercase tracking-widest font-bold">
              DIRECTOR SLATE // VINAY DIXITH
            </span>
          </div>
          <button
            onClick={onClose}
            className="text-on-surface-variant hover:text-on-surface font-mono text-xs cursor-pointer"
          >
            [CLOSE ✕]
          </button>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start">
          <div className="relative shrink-0">
            <img
              alt="Vinay Dixith"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqYKj-jntqTb2qrCFx9o3nh-vNWajTTogzYYnZfGdQ1-E8uai8dHMgHel2vXhChMXyReEzP-G7K049RIm8kuaNUCRMhLqyL8Ke4NTxn-fBo7TENw2gIefzz1dr8mVH6TDDnZhcRA4ar_1RZdPPIXNewwAOcrSqju1rndQ8IXTbGjL2l2l8aY7rJYWmdLBR0fcSu3aWDgUt27moSR3Ro9kv_W_VRog02Dykx66hjnw4OXuNr2pj9GPp"
              className="w-28 h-28 sm:w-36 sm:h-36 object-cover border-2 border-primary"
            />
            <span className="absolute bottom-1 right-1 px-1 py-0.5 bg-black/80 font-mono text-[9px] text-primary">
              VD-02
            </span>
          </div>

          <div className="flex flex-col gap-2 font-body-sm text-[13px] text-on-surface-variant">
            <h3 className="font-headline-lg text-on-surface text-[24px] font-normal">
              Vinay Dixith
            </h3>
            <span className="font-label-mono text-xs text-primary uppercase">
              BTech AI &amp; Data Science • Year 02
            </span>
            <div className="flex items-center gap-1.5 text-outline text-xs">
              <MapPin className="w-3.5 h-3.5 inline text-primary" />
              <span>REVA University, North Bengaluru, Karnataka</span>
            </div>

            <p className="mt-1 leading-relaxed text-on-surface">
              An undergraduate technologist and storyteller examining how algorithmic structures, data distributions, and cinematic lenses converge to reflect human truths.
            </p>
          </div>
        </div>

        {/* Technical & Cinema Specs */}
        <div className="grid grid-cols-2 gap-2 p-3 bg-surface-container-lowest border border-outline-variant/30 text-xs font-mono">
          <div>
            <span className="text-outline block text-[10px]">CORE ARCHITECTURE:</span>
            <span className="text-on-surface font-semibold">Python • PyTorch • Graph PWA</span>
          </div>
          <div>
            <span className="text-outline block text-[10px]">CINEMA PROFILE:</span>
            <span className="text-primary font-semibold">2.39:1 Anamorphic • 24.000 FPS</span>
          </div>
        </div>

        <div className="pt-3 border-t border-outline-variant/30 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-primary text-on-primary font-label-mono text-xs font-bold uppercase cursor-pointer"
          >
            DISMISS SLATE
          </button>
        </div>
      </div>
    </div>
  );
};
