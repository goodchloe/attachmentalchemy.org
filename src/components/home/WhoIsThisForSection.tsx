
import React from 'react';

const WhoIsThisForSection: React.FC = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 animate-fade-in bg-transparent">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-10" style={{ color: '#3A4A2E' }}>Who is this for?</h2>
          <div className="grid md:grid-cols-1 gap-6 text-lg" style={{ color: '#3A4A2E' }}>
            <div className="flex items-start">
              <span className="mt-3 mr-3 h-1.5 w-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: '#B5643D' }} />
              <p>You've done a lot of work on yourself but you keep running into the same pattern that you can't seem to overcome.</p>
            </div>
            <div className="flex items-start">
              <span className="mt-3 mr-3 h-1.5 w-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: '#B5643D' }} />
              <p>You're wanting more closeness and intimacy in your relationships and can't quite get there.</p>
            </div>
            <div className="flex items-start">
              <span className="mt-3 mr-3 h-1.5 w-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: '#B5643D' }} />
              <p>You're wanting to go for bigger dreams and feel like you need more support.</p>
            </div>
            <div className="flex items-start">
              <span className="mt-3 mr-3 h-1.5 w-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: '#B5643D' }} />
              <p>You did everything you were 'supposed' to do and still don't feel satisfied.</p>
            </div>
            <div className="flex items-start">
              <span className="mt-3 mr-3 h-1.5 w-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: '#B5643D' }} />
              <p>You're longing to welcome a committed partner into your life while maintaining your authenticity and working through anxious or avoidant patterns that have sabotaged your relationships in the past.</p>
            </div>
            <div className="flex items-start">
              <span className="mt-3 mr-3 h-1.5 w-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: '#B5643D' }} />
              <p>You're in a relationship and you want to deepen your secure attachment with each other and learn to metabolize insecure attachment patterns that get in the way of deeper connection.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoIsThisForSection;

