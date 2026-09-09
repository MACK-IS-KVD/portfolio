import React, { useState } from 'react';
import { Mail, MessageSquare, Send, CheckCircle2, Github, Linkedin, Film, Instagram } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [subject, setSubject] = useState('Short Film Collaboration');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setShowModal(false);
      setName('');
      setEmail('');
      setMessage('');
    }, 2000);
  };

  return (
    <section 
      id="contact"
      className="w-full bg-surface-container-lowest px-space-md lg:px-margin-desktop py-space-3xl border-b border-surface-container-highest/60"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-space-2xl">
        {/* Section Header */}
        <div className="flex flex-col gap-space-xs border-b border-outline-variant/40 pb-space-md">
          <span className="font-label-mono text-label-mono text-primary uppercase tracking-widest text-[11px]">
            ACT IX // FINALE
          </span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface font-normal text-[32px]">
            LET'S MAKE SOMETHING
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl text-[15px]">
            Open to conversations, collaborations, project ideas, hackathon teams, and good discussions about technology or cinema.
          </p>
        </div>

        {/* Transmission Stage */}
        <div className="p-space-lg bg-surface-container border border-outline-variant/50 flex flex-col md:flex-row items-start md:items-center justify-between gap-space-lg">
          <div className="flex flex-col gap-2 max-w-xl">
            <span className="font-label-mono text-xs text-primary uppercase tracking-wider font-semibold">
              TRANSMISSION TERMINAL // NORTH BENGALURU
            </span>
            <p className="font-headline-md text-headline-md text-on-surface text-[24px]">
              Got a script draft, an AI project idea, or want to build on campus?
            </p>
            <p className="font-body-sm text-body-sm text-on-surface-variant text-[13px]">
              Whether it's building a software tool for REVA students or scouting locations in Bengaluru at midnight, I'm always curious to connect.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-space-sm w-full md:w-auto">
            <button
              onClick={() => setShowModal(true)}
              className="px-space-md py-3 bg-primary-container text-on-primary font-label-mono text-xs uppercase tracking-widest font-bold hover:bg-primary transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
            >
              <MessageSquare className="w-4 h-4" />
              <span>START A CONVERSATION</span>
            </button>
            <a
              href="mailto:vinaydixith.reva@gmail.com"
              className="px-space-md py-3 bg-surface-container-low border border-outline-variant/60 text-on-surface hover:text-primary hover:border-primary font-label-mono text-xs uppercase tracking-widest transition-colors flex items-center justify-center gap-2"
            >
              <Mail className="w-4 h-4" />
              <span>DIRECT EMAIL</span>
            </a>
          </div>
        </div>

        {/* Social Vector Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-space-sm pt-2">
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="p-space-sm bg-surface-container-low border border-outline-variant/30 flex items-center justify-between hover:border-primary transition-colors group"
          >
            <span className="font-label-mono text-xs text-on-surface group-hover:text-primary flex items-center gap-2">
              <Github className="w-4 h-4" />
              <span>GITHUB</span>
            </span>
            <span className="font-mono text-[10px] text-outline">/vinaydixith</span>
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="p-space-sm bg-surface-container-low border border-outline-variant/30 flex items-center justify-between hover:border-primary transition-colors group"
          >
            <span className="font-label-mono text-xs text-on-surface group-hover:text-primary flex items-center gap-2">
              <Linkedin className="w-4 h-4" />
              <span>LINKEDIN</span>
            </span>
            <span className="font-mono text-[10px] text-outline">/in/vinaydixith</span>
          </a>

          <a
            href="https://letterboxd.com"
            target="_blank"
            rel="noreferrer"
            className="p-space-sm bg-surface-container-low border border-outline-variant/30 flex items-center justify-between hover:border-primary transition-colors group"
          >
            <span className="font-label-mono text-xs text-on-surface group-hover:text-primary flex items-center gap-2">
              <Film className="w-4 h-4" />
              <span>LETTERBOXD</span>
            </span>
            <span className="font-mono text-[10px] text-outline">@vinay_dixith</span>
          </a>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="p-space-sm bg-surface-container-low border border-outline-variant/30 flex items-center justify-between hover:border-primary transition-colors group"
          >
            <span className="font-label-mono text-xs text-on-surface group-hover:text-primary flex items-center gap-2">
              <Instagram className="w-4 h-4" />
              <span>INSTAGRAM</span>
            </span>
            <span className="font-mono text-[10px] text-outline">@vinay.cine</span>
          </a>
        </div>

        {/* Philosophical Sign-Off */}
        <div className="p-space-md border-t border-outline-variant/30 flex flex-col sm:flex-row items-center justify-between text-center sm:text-left gap-2">
          <p className="font-headline-md text-headline-md text-on-surface font-normal italic text-[20px]">
            "Still figuring it out. Still building anyway."
          </p>
          <span className="font-timecode text-timecode text-primary uppercase text-[11px]">
            VINAY DIXITH • 2025 // REVA UNIVERSITY
          </span>
        </div>
      </div>

      {/* Message Transmission Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-4">
          <div className="bg-surface-container border border-primary p-space-md lg:p-space-lg max-w-lg w-full flex flex-col gap-space-md">
            <div className="flex items-center justify-between border-b border-outline-variant/40 pb-2">
              <span className="font-label-mono text-xs text-primary uppercase tracking-widest font-bold">
                INITIATE DIRECT TRANSMISSION
              </span>
              <button
                onClick={() => setShowModal(false)}
                className="text-on-surface-variant hover:text-on-surface font-mono text-xs cursor-pointer"
              >
                [CANCEL ✕]
              </button>
            </div>

            {sent ? (
              <div className="py-8 flex flex-col items-center justify-center gap-3 text-center">
                <CheckCircle2 className="w-10 h-10 text-primary animate-bounce" />
                <span className="font-headline-md text-lg text-on-surface">Transmission Dispatched</span>
                <p className="font-caption text-xs text-on-surface-variant">
                  Message queued to Vinay's direct channel. Thank you for connecting.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-3 font-mono text-xs">
                <div className="flex flex-col gap-1">
                  <label className="text-outline uppercase text-[10px]">Transmission Subject</label>
                  <select
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="p-2 bg-surface-container-lowest border border-outline-variant/50 text-on-surface text-xs"
                  >
                    <option value="Short Film Collaboration">Short Film Collaboration</option>
                    <option value="Campus Project (REVA LiveMap)">Campus Project (REVA LiveMap)</option>
                    <option value="AI / Data Science Discussion">AI / Data Science Discussion</option>
                    <option value="Coffee / Quick Hello">Coffee / Quick Hello</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <div className="flex flex-col gap-1">
                    <label className="text-outline uppercase text-[10px]">Your Name / Handle</label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Alex"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="p-2 bg-surface-container-lowest border border-outline-variant/50 text-on-surface text-xs"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-outline uppercase text-[10px]">Your Contact / Email</label>
                    <input
                      required
                      type="email"
                      placeholder="e.g. alex@reva.edu"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="p-2 bg-surface-container-lowest border border-outline-variant/50 text-on-surface text-xs"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-outline uppercase text-[10px]">Message Transmission</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell me about your project, idea, or favorite film frame..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="p-2 bg-surface-container-lowest border border-outline-variant/50 text-on-surface font-sans text-xs"
                  />
                </div>

                <div className="pt-2 flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setShowModal(false)}
                    className="px-3 py-2 bg-surface-container-low border border-outline-variant/40 text-on-surface-variant text-xs cursor-pointer"
                  >
                    CANCEL
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-primary-container text-on-primary font-bold uppercase text-xs hover:bg-primary transition-colors cursor-pointer flex items-center gap-1.5"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>TRANSMIT DISPATCH</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
