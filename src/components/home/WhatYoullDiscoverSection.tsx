
import React from 'react';
import SectionWrapper from '@/components/SectionWrapper';
import { CheckCircle } from 'lucide-react';

const WhatYoullDiscoverSection: React.FC = () => {
  return (
    <SectionWrapper style={{ backgroundColor: "#F3E9D7" }}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-10 text-foreground">What You'll Discover</h2>
        <div className="space-y-6 text-lg text-muted-foreground">
          <p className="text-center mb-8">
            What does it mean to open your nervous system to love, safety, and purpose—and let life move through you with clarity and power?
          </p>
          <div className="grid md:grid-cols-1 gap-6">
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
              <p>In Attachment Alchemy, you'll learn to relate from a regulated, securely attached self—so your presence naturally inspires trust, depth, and transformation.</p>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
              <p>Develop the clarity, confidence, and embodied tools to show up authentically in your relationships, your work, and your leadership.</p>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
              <p>Learn to navigate complex relational dynamics and hold space for deep healing—whether that's with clients, teams, or loved ones.</p>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default WhatYoullDiscoverSection;
