import React from 'react';
import { HeartHandshake, Hand, Users, Sprout } from 'lucide-react';

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

const ways = [
  {
    icon: HeartHandshake,
    title: 'Heal Through Relationship',
    text: 'Go beyond understanding attachment patterns through repeated, supported relational experiences that help build new ways of connecting.',
  },
  {
    icon: Hand,
    title: 'Develop Embodied Skills',
    text: 'Learn an integrative toolkit drawn from somatic attachment repair, IFS, Hakomi, body-based practices, and relational facilitation.',
  },
  {
    icon: Users,
    title: 'Practice in Skilled Community',
    text: 'Develop through consistent peer practice, feedback, real connection, and immersive learning rather than relying on occasional sessions alone.',
  },
  {
    icon: Sprout,
    title: 'Embody What You Teach',
    text: 'Bring the work into your own life so you can meet others with greater presence, discernment, compassion, and practical skill.',
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

      {/* Four ways the training works, under the photo strip */}
      <div className="px-4 sm:px-6 lg:px-8 mt-14 md:mt-20">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {ways.map(({ icon: Icon, title, text }) => (
            <div key={title} className="text-center">
              <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-5 rounded-full bg-white/60 backdrop-blur-sm shadow-lg flex items-center justify-center">
                <Icon className="w-8 h-8 md:w-9 md:h-9" style={{ color: '#B5643D' }} strokeWidth={1.5} aria-hidden="true" />
              </div>
              <h3 className="font-serif text-2xl md:text-[1.7rem] font-semibold leading-tight mb-3" style={{ color: '#3A4A2E' }}>
                {title}
              </h3>
              <p className="text-lg md:text-xl leading-relaxed max-w-sm mx-auto" style={{ color: '#3A4A2E' }}>
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AlivenessSection;
