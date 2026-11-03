
import React from 'react';
import SectionWrapper from '@/components/SectionWrapper';
import { CheckCircle } from 'lucide-react';

const WhatYoullDiscoverSection: React.FC = () => {
  return (
    <SectionWrapper className="bg-transparent">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-10 text-foreground">What You'll Discover</h2>
        <div className="space-y-6 text-lg text-muted-foreground">
          <div className="grid md:grid-cols-1 gap-6">
            <div className="flex items-start">
              <span className="mt-3 mr-3 h-1.5 w-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: '#B5643D' }} />
              <p>What does it mean to open your nervous system to love, safety, and purpose—and let life move through you with clarity and power?</p>
            </div>
            <div className="flex items-start">
              <span className="mt-3 mr-3 h-1.5 w-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: '#B5643D' }} />
              <p>In Attachment Alchemy, you'll learn to relate from a regulated, securely attached self—so your presence naturally inspires trust, depth, and transformation.</p>
            </div>
            <div className="flex items-start">
              <span className="mt-3 mr-3 h-1.5 w-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: '#B5643D' }} />
              <p>Develop the clarity, confidence, and embodied tools to show up authentically in your relationships, your work, and your leadership.</p>
            </div>
            <div className="flex items-start">
              <span className="mt-3 mr-3 h-1.5 w-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: '#B5643D' }} />
              <p>Learn to navigate complex relational dynamics and hold space for deep healing—whether that's with clients, teams, or loved ones.</p>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default WhatYoullDiscoverSection;
