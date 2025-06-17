
import React from 'react';
import SectionWrapper from '@/components/SectionWrapper';

const AlivenessSection: React.FC = () => {
  return (
    <SectionWrapper>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div className="text-center">
          <img src="/lovable-uploads/da4db7f4-3910-4ab7-890e-044cd741e8e1.png" alt="Joyful expression of aliveness" className="w-full h-64 object-cover rounded-lg shadow-lg mb-4" />
          <h3 className="text-xl font-semibold text-primary mb-2">Embodied Joy</h3>
          <p className="text-muted-foreground">Reconnect with your natural state of aliveness and authentic expression.</p>
        </div>
        <div className="text-center">
          <img src="/lovable-uploads/11813ee2-db4b-4b9d-b95f-2da7f45dd2cc.png" alt="Deep connection and intimacy" className="w-full h-64 object-cover rounded-lg shadow-lg mb-4" />
          <h3 className="text-xl font-semibold text-primary mb-2">Sacred Connection</h3>
          <p className="text-muted-foreground">Cultivate deeper intimacy and secure attachment in all your relationships.</p>
        </div>
        <div className="text-center">
          <img src="/lovable-uploads/2a291393-81d6-4433-ad3d-0f0978446463.png" alt="Lush green ferns in nature" className="w-full h-64 object-cover rounded-lg shadow-lg mb-4" />
          <h3 className="text-xl font-semibold text-primary mb-2">Natural Healing</h3>
          <p className="text-muted-foreground">Ground yourself in nature's wisdom as you heal and transform.</p>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default AlivenessSection;
