import React from 'react';

const pillars = [
  {
    title: 'Peer Support',
    text: 'Walk this path alongside others who understand, holding and being held as you grow.',
    src: '/images/peer-support-hands.jpg',
    alt: 'An adult hand gently holding a child’s hand',
    position: 'center',
  },
  {
    title: 'Consistent Secure Relating',
    text: 'Practice steady, attuned connection week after week until security lives in your body.',
    src: '/images/affectionate-couple-garden.jpg',
    alt: 'Chloe and Spencer smiling together, his arm around her shoulders',
    position: 'center 30%',
  },
  {
    title: 'Skilled Loving Community',
    text: 'Be met by warm, experienced guides and a circle that welcomes all of who you are.',
    src: '/images/community-circle.jpg',
    alt: 'A circle of people sitting close together, two of them holding hands and smiling warmly at each other',
    position: 'center 8%',
  },
];

// A full-width strip of three photos, divided by thin white lines,
// with each heading and line of text resting on the bottom of its photo.
const AlivenessSection: React.FC = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 animate-fade-in">
      <div className="flex flex-col md:flex-row gap-[2px] bg-white">
        {pillars.map((p) => (
          <figure key={p.title} className="relative w-full md:flex-1 h-80 md:h-[28rem] lg:h-[32rem] overflow-hidden">
            <img
              src={p.src}
              alt={p.alt}
              className="absolute inset-0 w-full h-full object-cover"
              style={{ objectPosition: p.position }}
            />
            <div className="absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-black/75 via-black/35 to-transparent" />
            <figcaption className="absolute inset-x-0 bottom-0 p-6 md:p-8 text-center text-white">
              <h3 className="font-serif text-2xl font-semibold mb-2 drop-shadow">{p.title}</h3>
              <p className="text-white/90 leading-relaxed max-w-sm mx-auto drop-shadow">{p.text}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
};

export default AlivenessSection;
