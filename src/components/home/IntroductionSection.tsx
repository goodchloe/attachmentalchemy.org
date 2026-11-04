import React from 'react';
import type { LucideProps } from 'lucide-react';
import { Puzzle, Feather, Waves, Baby, Ear } from 'lucide-react';

const GREEN = '#3A4A2E';
const TERRACOTTA = '#B5643D';

// A simple straight stick with two small twigs, in the same line
// style as the other icons (the Adult Attachment Repair Model is "stick work").
const Stick: React.FC<LucideProps> = ({ className, style, strokeWidth = 2, size: _size, absoluteStrokeWidth: _abs, ...rest }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    style={style}
    {...rest}
  >
    <path d="M4 20 20 4" />
    <path d="M9.5 14.5 5.5 13" />
    <path d="M14 10l1.4-4" />
  </svg>
);

const modalities = [
  { icon: Puzzle, name: 'Internal Family Systems' },
  { icon: Feather, name: 'Hakomi' },
  { icon: Waves, name: 'Somatic Experiencing' },
  { icon: Baby, name: 'Ideal Parent Figure Protocol' },
  { icon: Stick, name: 'Adult Attachment Repair Model' },
  { icon: Ear, name: 'Peer Counseling' },
];

const IntroductionSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 animate-fade-in">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center" style={{ color: GREEN }}>
          <h2 className="font-serif text-2xl md:text-3xl font-semibold tracking-[0.25em]">ATTACHMENT ALCHEMY</h2>
          <span className="block w-16 h-0.5 mx-auto mt-5 rounded-full" style={{ backgroundColor: TERRACOTTA }} />

          {/* Opening */}
          <p className="font-serif text-2xl md:text-4xl leading-snug md:leading-snug mt-10 max-w-4xl mx-auto">
            A five-month immersive training for therapists, coaches, healers, and facilitators ready to develop powerful relational healing skills while transforming their own attachment patterns.
          </p>
          <p className="text-lg md:text-2xl leading-relaxed mt-6 max-w-3xl mx-auto">
            Through embodied practice, peer-to-peer healing, and skilled community, learn to bring greater security, depth, and presence to your relationships and your work.
          </p>

          {/* Modalities */}
          <p className="font-serif italic text-xl md:text-2xl mt-16 md:mt-20 mb-8 max-w-3xl mx-auto" style={{ color: TERRACOTTA }}>
            Attachment Alchemy combines the best practices from the cutting edge modalities that heal attachment wounding
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {modalities.map(({ icon: Icon, name }) => (
              <div key={name} className="rounded-[2rem] bg-white/50 backdrop-blur-sm shadow-lg px-4 py-7 md:py-9 flex flex-col items-center">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white/70 shadow-md flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 md:w-8 md:h-8" style={{ color: TERRACOTTA }} strokeWidth={1.5} aria-hidden="true" />
                </div>
                <p className="font-serif text-lg md:text-2xl font-semibold leading-tight">{name}</p>
              </div>
            ))}
          </div>
          <p className="text-lg md:text-2xl leading-relaxed mt-8 max-w-3xl mx-auto">
            …to rewire your nervous system, repair core attachment wounds, and reclaim your innate capacity for deep love, safety, and aliveness—within yourself and in relationship.
          </p>

          {/* Value */}
          <div className="mt-14 md:mt-16 inline-block rounded-[2rem] px-8 md:px-14 py-8 md:py-10 bg-white/40 backdrop-blur-sm shadow-lg">
            <p className="text-base md:text-lg tracking-wide">Taking all of these trainings individually would cost you</p>
            <p className="font-serif text-5xl md:text-7xl font-semibold mt-2" style={{ color: TERRACOTTA }}>$50,000+</p>
          </div>

          {/* Invitation */}
          <p className="text-lg md:text-2xl leading-relaxed mt-14 md:mt-16 max-w-3xl mx-auto">
            This is your invitation to root into secure attachment, dissolve old protection strategies, and open fully to intimacy, purpose, and connection for yourself and your clients.
          </p>
          <p className="font-serif italic text-2xl md:text-4xl leading-snug md:leading-snug mt-8 max-w-4xl mx-auto" style={{ color: TERRACOTTA }}>
            This is more than a course—it’s a path to a life of deep intimacy, aliveness and purpose.
          </p>
        </div>
      </div>
    </section>
  );
};

export default IntroductionSection;
