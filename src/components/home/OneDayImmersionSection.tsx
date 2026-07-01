import React from 'react';
import CallToActionButton from '@/components/CallToActionButton';
import { Card, CardContent } from '@/components/ui/card';
import heroBg from '@/assets/hero-watercolor.jpg';

const OneDayImmersionSection: React.FC = () => {
  return (
    <section
      className="relative py-12 md:py-16 lg:py-20 animate-fade-in"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-white/30" />
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <p className="uppercase tracking-widest text-sm mb-3" style={{ color: '#B5643D' }}>
            A Full Day to Reset, Reconnect and Remember What Matters
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-semibold mb-6" style={{ color: '#4A5A3A' }}>
            One Day Immersion
          </h2>
          <div className="w-16 h-px mx-auto mb-6" style={{ backgroundColor: '#C9A24B' }} />
          <Card className="bg-white/70 border-none shadow-sm">
            <CardContent className="p-8 md:p-10">
              <p className="font-serif text-2xl md:text-3xl mb-2" style={{ color: '#4A5A3A' }}>
                September 26, 2027
              </p>
              <p className="text-lg mb-6" style={{ color: '#4A5A3A' }}>
                Berkeley, CA
              </p>
              <p className="text-base md:text-lg mb-4 text-muted-foreground">
                A complete day of teachings, practices, movement, connection and community.
              </p>
              <p className="italic mb-8" style={{ color: '#B5643D' }}>
                All are welcome.
              </p>
              <CallToActionButton
                href="https://goodcoaching.as.me/?appointmentType=80123371"
                className="text-white hover:opacity-90"
                style={{ backgroundColor: '#B5643D' }}
              >
                Learn More & Register
              </CallToActionButton>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default OneDayImmersionSection;