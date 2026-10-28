import React from 'react';
import SectionWrapper from '@/components/SectionWrapper';
import CallToActionButton from '@/components/CallToActionButton';
import heroBg from '@/assets/hero-watercolor.jpg';


const HeroSection: React.FC = () => {
  return (
    <SectionWrapper className="!py-0">
      <div className="relative min-h-[70vh] md:min-h-[80vh] flex items-center justify-center text-center rounded-lg overflow-hidden">
        <img src={heroBg} alt="Watercolor mountains in earthy tones" className="absolute inset-0 w-full h-full object-cover" />
        <div className="relative z-10 p-8 max-w-4xl mx-auto" style={{ color: '#3A4A2E' }}>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold mb-2 leading-tight animate-fade-in">Attachment Alchemy</h1>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-tight" style={{ color: '#3A4A2E' }}>5 Month Journey to Embodied Secure Attachment</h2>
          
          <p className="font-serif text-xl md:text-2xl mb-6 font-medium" style={{ color: '#B5643D' }}>
            January 20 - June 9, 2027
          </p>
          
          {/* Photo of facilitators */}
          <div className="flex justify-center mb-6">
            <img
              src="/images/chloe-and-spencer.jpg"
              alt="Chloe Good and Spencer Jacobson smiling together outdoors"
              className="w-64 md:w-80 aspect-[3/2] rounded-lg object-cover shadow-lg"
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
