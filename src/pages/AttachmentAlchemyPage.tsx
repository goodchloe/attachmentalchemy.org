
import React from 'react';
import EmailPopup from '@/components/EmailPopup';
import HeroSection from '@/components/home/HeroSection';
import IntroductionSection from '@/components/home/IntroductionSection';
import AlivenessSection from '@/components/home/AlivenessSection';
import WhatYoullDiscoverSection from '@/components/home/WhatYoullDiscoverSection';
import WhoIsThisForSection from '@/components/home/WhoIsThisForSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import InsideAttachmentAlchemySection from '@/components/home/InsideAttachmentAlchemySection';
import MeetFacilitatorsSection from '@/components/home/MeetFacilitatorsSection';
import InvestmentSection from '@/components/home/InvestmentSection';
import OneDayImmersionSection from '@/components/home/OneDayImmersionSection';

const AttachmentAlchemyPage: React.FC = () => {
  return (
    <>
      <EmailPopup />
      
      {/* Hero Section with trees photo */}
      <HeroSection />

      {/* Add whitespace between hero and intro */}
      <div className="py-8"></div>

      {/* Introduction - Color Block Section */}
      <IntroductionSection />

      {/* Aliveness and Connection Images Section */}
      <AlivenessSection />

      {/* What does it mean section - Light grey */}
      <WhatYoullDiscoverSection />

      {/* Who is this for - Color Block Section */}
      <WhoIsThisForSection />

      {/* Testimonials - Light grey */}
      <TestimonialsSection />

      {/* Inside Attachment Alchemy - Color Block Section */}
      <InsideAttachmentAlchemySection />

      {/* Meet Your Facilitators - Light grey */}
      <MeetFacilitatorsSection />
      
      {/* Investment - Color Block Section */}
      <InvestmentSection />

      {/* One Day Immersion */}
      <OneDayImmersionSection />
    </>
  );
};

export default AttachmentAlchemyPage;
