import React from 'react';
import SectionWrapper from '@/components/SectionWrapper';
import CallToActionButton from '@/components/CallToActionButton';
import heroBg from '@/assets/hero-watercolor.jpg';


const HeroSection: React.FC = () => {
  return (
    <SectionWrapper className="!py-0">
      <div className="relative min-h-[70vh] md:min-h-[80vh] flex items-center justify-center text-center organic-card overflow-hidden">
        <img src={heroBg} alt="Watercolor mountains in earthy tones" className="absolute inset-0 w-full h-full object-cover" />
        <div className="relative z-10 p-8 max-w-4xl mx-auto" style={{ color: '#3A4A2E' }}>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold mb-2 leading-tight animate-fade-in">Attachment Alchemy</h1>
          <h2 className="font-sans text-base sm:text-lg md:text-xl font-semibold uppercase tracking-[0.15em] mb-6 leading-snug" style={{ color: '#3A4A2E' }}>
            Somatic Attachment &amp; Relational Practitioner Training
          </h2>

          <p className="font-serif italic text-2xl md:text-3xl mb-6 leading-snug" style={{ color: '#B5643D' }}>
            Deepen your capacity to heal, connect, and guide others.
          </p>

          <div className="max-w-2xl mx-auto space-y-4 text-lg md:text-xl leading-relaxed mb-8" style={{ color: '#3A4A2E' }}>
            <p>
              A five-month immersive training for therapists, coaches, healers, and facilitators ready to develop powerful relational healing skills while transforming their own attachment patterns.
            </p>
            <p>
              Through embodied practice, peer-to-peer healing, and skilled community, learn to bring greater security, depth, and presence to your relationships and your work.
            </p>
          </div>
          
          <p className="font-serif text-xl md:text-2xl mb-6 font-medium" style={{ color: '#B5643D' }}>
            January 20 - June 9, 2027
          </p>
          
          {/* Photo of Chloe & Spencer together */}
          <div className="flex justify-center items-center mb-6">
            <img
              src="/images/affectionate-couple-garden.jpg"
              alt="Chloe Good and Spencer Jacobson together in a leafy garden"
              className="w-[60vw] h-[60vw] max-w-[27rem] max-h-[27rem] rounded-full object-cover shadow-lg"
            />
          </div>
          
          <p className="text-lg md:text-xl mb-8" style={{ color: '#3A4A2E' }}>
            Guided by Chloe Good & Spencer Jacobson
          </p>
          
          <div className="mt-8">
            <CallToActionButton href="https://goodcoaching.as.me/?appointmentType=80123371" className="text-white hover:opacity-90" style={{ backgroundColor: '#B5643D' }} size="lg">
              Book a Clarity Call
            </CallToActionButton>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default HeroSection;
