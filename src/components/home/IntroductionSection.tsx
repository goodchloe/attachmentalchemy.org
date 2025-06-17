
import React from 'react';

const IntroductionSection: React.FC = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 animate-fade-in" style={{
      backgroundColor: '#8FB5A3'
    }}>
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-white">ATTACHMENT ALCHEMY</h2>
          <p className="text-lg md:text-xl mb-6">
            is a four-month transformational journey to rewire your nervous system, repair core attachment wounds, and reclaim your innate capacity for deep love, safety, and aliveness—within yourself and in relationship.
          </p>
          <p className="text-lg md:text-xl mb-6">
            This is your invitation to root into secure attachment, dissolve old protection strategies, and open fully to intimacy, purpose, and connection.
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
