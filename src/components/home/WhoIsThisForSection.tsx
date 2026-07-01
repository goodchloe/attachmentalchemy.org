
import React from 'react';
import { CheckCircle } from 'lucide-react';

const WhoIsThisForSection: React.FC = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 animate-fade-in" style={{
      backgroundColor: '#C9A24B'
    }}>
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-10 text-white">Who is this for?</h2>
          <div className="grid md:grid-cols-1 gap-6 text-lg text-white">
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-6 w-6 text-white flex-shrink-0 mt-1" />
              <p>You've done a lot of work on yourself but you keep running into the same pattern that you can't seem to overcome.</p>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-6 w-6 text-white flex-shrink-0 mt-1" />
              <p>You're wanting more closeness and intimacy in your relationships and can't quite get there.</p>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-6 w-6 text-white flex-shrink-0 mt-1" />
              <p>You're wanting to go for bigger dreams and feel like you need more support.</p>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-6 w-6 text-white flex-shrink-0 mt-1" />
              <p>You did everything you were 'supposed' to do and still don't feel satisfied.</p>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-6 w-6 text-white flex-shrink-0 mt-1" />
              <p>You're longing to welcome a committed partner into your life while maintaining your authenticity and working through anxious or avoidant patterns that have sabotaged your relationships in the past.</p>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-6 w-6 text-white flex-shrink-0 mt-1" />
              <p>You're in a relationship and you want to deepen your secure attachment with each other and learn to metabolize insecure attachment patterns that get in the way of deeper connection.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoIsThisForSection;
