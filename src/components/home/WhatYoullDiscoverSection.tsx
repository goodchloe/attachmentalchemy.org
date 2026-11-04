import React from 'react';

const discoveries = [
  'Recognize attachment patterns and support people in building secure attachment from the inside out.',
  'Work with the nervous system to create new experiences of safety and connection.',
  'Bring your own regulated, embodied presence to your work with clarity, attunement, and care.',
  'Navigate complex relational dynamics and support the healing of attachment wounds.',
  'Explore, heal, and integrate your own attachment patterns so you can hold space for others with greater awareness and confidence.',
];

// A numbered list with large terracotta numerals and hairline dividers,
// closing with a pull-quote.
const WhatYoullDiscoverSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 animate-fade-in">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-serif text-4xl md:text-6xl font-semibold" style={{ color: '#3A4A2E' }}>
              What You’ll Discover
            </h2>
            <span className="block w-16 h-0.5 mx-auto mt-5 rounded-full" style={{ backgroundColor: '#B5643D' }} />
          </div>

          <ol>
            {discoveries.map((text, i) => (
              <li
                key={i}
                className="flex items-baseline gap-5 md:gap-10 py-6 md:py-8 border-t last:border-b"
                style={{ borderColor: 'rgba(181, 100, 61, 0.3)' }}
              >
                <span
                  className="font-serif italic text-4xl md:text-6xl leading-none w-12 md:w-20 flex-shrink-0 text-right"
                  style={{ color: '#B5643D' }}
                  aria-hidden="true"
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="font-serif text-xl md:text-3xl leading-snug md:leading-snug" style={{ color: '#3A4A2E' }}>
                  {text}
                </p>
              </li>
            ))}
          </ol>

          <figure className="relative mt-16 md:mt-20 text-center px-6 md:px-16 py-12 md:py-14 rounded-[2.5rem] bg-white/40 backdrop-blur-sm shadow-lg">
            <span
              className="absolute left-1/2 -translate-x-1/2 -top-8 font-serif text-8xl md:text-9xl leading-none select-none"
              style={{ color: '#B5643D' }}
              aria-hidden="true"
            >
              “
            </span>
            <blockquote className="font-serif italic text-2xl md:text-4xl leading-snug md:leading-snug" style={{ color: '#3A4A2E' }}>
              We believe the best practitioners have walked the path themselves.
            </blockquote>
            <p className="mt-6 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto" style={{ color: '#3A4A2E' }}>
              By tending to your own inner and relational landscape, you deepen your capacity to support others on their journey.
            </p>
          </figure>
        </div>
      </div>
    </section>
  );
};

export default WhatYoullDiscoverSection;
