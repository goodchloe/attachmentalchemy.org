
import React from 'react';

const IntroductionSection: React.FC = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 animate-fade-in bg-transparent">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center" style={{ color: '#3A4A2E' }}>
          <h2 className="section-title text-2xl md:text-3xl font-semibold tracking-[0.2em] mb-8" style={{ color: '#3A4A2E' }}>ATTACHMENT ALCHEMY</h2>
          <p className="text-lg md:text-xl mb-6">
            A five-month immersive training for therapists, coaches, healers, and facilitators ready to develop powerful relational healing skills while transforming their own attachment patterns.
          </p>
          <p className="text-lg md:text-xl mb-6">
            Through embodied practice, peer-to-peer healing, and skilled community, learn to bring greater security, depth, and presence to your relationships and your work.
          </p>
          <p className="text-lg md:text-xl mb-6">
            Attachment Alchemy combines the best practices from the cutting edge modalities that heal attachment wounding - Internal Family Systems, Hakomi, Somatic Experiencing, Ideal Parent Figure Protocol, the Adult Attachment Repair Model & peer counseling to rewire your nervous system, repair core attachment wounds, and reclaim your innate capacity for deep love, safety, and aliveness—within yourself and in relationship.
          </p>
          <p className="text-lg md:text-xl mb-6 font-semibold">
            Taking all of these trainings individually would cost you $50,000+.
          </p>
          <p className="text-lg md:text-xl mb-6">
            This is your invitation to root into secure attachment, dissolve old protection strategies, and open fully to intimacy, purpose, and connection for yourself and your clients.
          </p>
          <p className="text-lg md:text-xl font-semibold">
            This is more than a course—it's a path to a life of deep intimacy, aliveness and purpose.
          </p>
        </div>
      </div>
    </section>
  );
};

export default IntroductionSection;
