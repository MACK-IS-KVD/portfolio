import React from 'react';
import { ArrowUp } from 'lucide-react';

interface FooterProps {
  onScrollToTop: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onScrollToTop }) => {
  return (
    <footer 
      id="main-footer"
      className="w-full bg-surface-container-lowest px-space-md lg:px-margin-desktop py-space-xl border-t border-surface-container-highest/80 flex flex-col md:flex-row items-center justify-between gap-space-md text-on-surface-variant font-label-mono text-label-mono text-[11px]"
    >
      <div className="flex flex-col gap-1 text-center md:text-left">
        <span className="font-headline-sm text-headline-sm text-on-surface tracking-wider font-semibold text-[15px]">
          CODE × CINEMA × CURIOSITY
        </span>
        <p className="font-caption text-caption text-outline text-[12px]">
          Vinay Dixith • BTech Artificial Intelligence &amp; Data Science (Year 02) • REVA University, Bengaluru
        </p>
      </div>

      <div className="flex items-center gap-space-lg">
        <span className="text-outline hidden sm:inline">INDEX [VD-2025-ARCHIVE] • ALL RIGHTS RESERVED</span>
        <button
          onClick={onScrollToTop}
          className="flex items-center gap-1.5 px-3 py-1.5 bg-surface-container border border-outline-variant/50 text-primary hover:border-primary hover:bg-surface-container-high transition-colors cursor-pointer uppercase"
          title="Scroll back to top of page"
        >
          <span>TOP</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  );
};
