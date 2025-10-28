
import React from 'react';
import SectionWrapper from '@/components/SectionWrapper';
import CallToActionButton from '@/components/CallToActionButton';

const HeroSection: React.FC = () => {
  return (
    <SectionWrapper className="!py-0">
      <div className="relative min-h-[70vh] md:min-h-[80vh] flex items-center justify-center text-center rounded-lg overflow-hidden">
        <img src="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" alt="Forest trees reaching toward the sky" className="absolute inset-0 w-full h-full object-cover filter brightness-50" />
        <div className="relative z-10 p-8 max-w-4xl mx-auto text-white">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight animate-fade-in">Attachment Alchemy: 
5 Month Journey to Embodied Secure Attachment</h1>
          
          <p className="text-xl md:text-2xl mb-6 text-white/90 font-medium">
            March 11 - July 29 2026
          </p>
          
          {/* Photos of facilitators */}
          <div className="flex justify-center items-center gap-6 mb-6">
            <div className="flex flex-col items-center">
              <img 
                src="/lovable-uploads/9d76db4c-e415-4080-9e67-67cca0b43cd5.png" 
                alt="Chloe Good" 
                className="w-24 h-24 md:w-28 md:h-28 rounded-full object-cover shadow-lg"
              />
            </div>
            <div className="flex flex-col items-center">
              <img 
                src="/lovable-uploads/eb1444c1-90a6-4ce6-8c93-b289c40276fe.png" 
                alt="Spencer Jacobson" 
                className="w-24 h-24 md:w-28 md:h-28 rounded-full object-cover shadow-lg"
              />
            </div>
          </div>
          
          <p className="text-lg md:text-xl mb-8 text-white/90">
            Guided by Chloe Good & Spencer Jacobson
          </p>
          
          <div className="mt-8">
            <CallToActionButton href="https://goodcoaching.as.me/?appointmentType=80123371" className="bg-white text-primary hover:bg-gray-100" size="lg">
              Book a Clarity Call
            </CallToActionButton>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default HeroSection;
