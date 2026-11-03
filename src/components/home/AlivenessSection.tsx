import React from 'react';
import SectionWrapper from '@/components/SectionWrapper';

const pillars = [
  {
    title: 'Peer Support',
    text: 'Walk this path alongside others who understand, holding and being held as you grow.',
    src: '/images/peer-support-hands.jpg',
    alt: 'An adult hand gently holding a child’s hand',
    shape: 'organic-photo',
  },
  {
    title: 'Consistent Secure Relating',
    text: 'Practice steady, attuned connection week after week until security lives in your body.',
    src: '/images/affectionate-couple-garden.jpg',
    alt: 'Chloe and Spencer smiling together, his arm around her shoulders',
    shape: 'organic-photo-alt',
  },
  {
    title: 'Skilled Loving Community',
    text: 'Be met by warm, experienced guides and a circle that welcomes all of who you are.',
    src: '/images/chloe-arms-open.jpg',
    alt: 'Chloe laughing with her arms open wide by the water',
    shape: 'organic-photo-soft',
  },
];

const AlivenessSection: React.FC = () => {
  return (
    <SectionWrapper>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {pillars.map((p) => (
          <div key={p.title} className="text-center">
            <img src={p.src} alt={p.alt} className={`w-full h-64 object-cover ${p.shape} soft-warm-shadow mb-4`} />
            <h3 className="text-xl font-semibold text-primary mb-2">{p.title}</h3>
            <p className="text-muted-foreground">{p.text}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default AlivenessSection;
