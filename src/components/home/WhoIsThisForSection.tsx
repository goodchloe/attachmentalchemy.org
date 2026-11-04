import React from 'react';

const forYouIf = [
  'You’re a coach, therapist, or practitioner who wants to help people become more securely attached while also deepening your own secure attachment.',
  'You’ve done a ton of trainings and something still isn’t quite clicking for you relationally.',
  'You want to explore your own attachment patterns in a skilled, loving community and deepen your capacity to support healing through relationship.',
  'You work with people who long for closeness but keep returning to painful relationship patterns.',
  'You want to better understand anxious and avoidant attachment and learn how to support people in moving through these patterns.',
  'You’re looking for embodied, practical tools to help people build regulation, trust, and relational capacity.',
];

// Soft cards in two columns (one on phones), each opening with a small
// terracotta four-point star.
const Sparkle: React.FC = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 md:w-7 md:h-7 mb-4" aria-hidden="true">
    <path d="M12 1c.6 5.6 4.4 10.4 11 11-6.6.6-10.4 5.4-11 11-.6-5.6-4.4-10.4-11-11 6.6-.6 10.4-5.4 11-11z" fill="#B5643D" />
  </svg>
);

const WhoIsThisForSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 animate-fade-in">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-serif text-4xl md:text-6xl font-semibold" style={{ color: '#3A4A2E' }}>
              Who Is This For?
            </h2>
            <span className="block w-16 h-0.5 mx-auto mt-5 rounded-full" style={{ backgroundColor: '#B5643D' }} />
            <p className="font-serif italic text-xl md:text-2xl mt-6" style={{ color: '#B5643D' }}>
              This training is for you if…
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5 md:gap-8">
            {forYouIf.map((text, i) => (
              <div
                key={i}
                className="rounded-[2rem] bg-white/50 backdrop-blur-sm shadow-lg p-7 md:p-9"
              >
                <Sparkle />
                <p className="text-xl md:text-2xl leading-relaxed" style={{ color: '#3A4A2E' }}>
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoIsThisForSection;
