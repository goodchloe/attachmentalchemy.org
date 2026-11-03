
import React from 'react';
import SectionWrapper from '@/components/SectionWrapper';

const AlivenessSection: React.FC = () => {
  return (
    <SectionWrapper>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div className="text-center">
          <img src="/images/aliveness-joy.png" alt="Joyful expression of aliveness" className="w-full h-64 object-cover organic-photo soft-warm-shadow mb-4" />
          <h3 className="text-xl font-semibold text-primary mb-2">Embodied Joy</h3>
          <p className="text-muted-foreground">Reconnect with your natural state of aliveness and authentic expression.</p>
        </div>
        <div className="text-center">
          <img src="/images/aliveness-connection.png" alt="Deep connection and intimacy" className="w-full h-64 object-cover organic-photo-alt soft-warm-shadow mb-4" />
          <h3 className="text-xl font-semibold text-primary mb-2">Sacred Connection</h3>
          <p className="text-muted-foreground">Cultivate deeper intimacy and secure attachment in all your relationships.</p>
        </div>
        <div className="text-center">
          <img src="/images/aliveness-ferns.png" alt="Lush green ferns in nature" className="w-full h-64 object-cover organic-photo-soft soft-warm-shadow mb-4" />
          <h3 className="text-xl font-semibold text-primary mb-2">Natural Healing</h3>
          <p className="text-muted-foreground">Ground yourself in nature's wisdom as you heal and transform.</p>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default AlivenessSection;
