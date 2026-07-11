import React from 'react';
import SectionWrapper from '@/components/SectionWrapper';
import CallToActionButton from '@/components/CallToActionButton';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { MapPin, ArrowRight } from 'lucide-react';

const EventsPage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <SectionWrapper className="!py-0">
        <div className="relative min-h-[50vh] md:min-h-[60vh] flex items-center justify-center text-center rounded-lg overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#F5F0E6]/90 via-[#E8DCC8]/80 to-[#D4C4A8]/70" />
          <div className="relative z-10 p-8 max-w-4xl mx-auto">
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight animate-fade-in" style={{ color: '#3A4A2E' }}>
              Attachment Alchemy Events & Programs
            </h1>
            <p className="font-serif text-xl md:text-2xl mb-6" style={{ color: '#B5643D' }}>
              In-person immersions, group journeys, and workshops for embodied secure attachment
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* One Day Immersions */}
      <SectionWrapper className="bg-transparent">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-center mb-10" style={{ color: '#3A4A2E' }}>
            One Day Immersions — Attachment Alchemy
          </h2>

          <div className="space-y-8">
            <Card className="bg-white/80 border-none shadow-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:w-2/3">
                  <CardHeader>
                    <CardTitle className="font-serif text-2xl md:text-3xl" style={{ color: '#3A4A2E' }}>
                      Berkeley, CA — Saturday, September 26th, 2026
                    </CardTitle>
                    <CardDescription className="text-lg" style={{ color: '#B5643D' }}>
                      An Introduction to the 5-Month Journey to Embodied Secure Attachment
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <MapPin className="h-5 w-5 mt-1 flex-shrink-0" style={{ color: '#B5643D' }} />
                      <p className="text-muted-foreground">Berkeley, California</p>
                    </div>
                    <div className="pt-4">
                      <CallToActionButton
                        href="https://goodcoaching.as.me/?appointmentType=80123371"
                        className="text-white hover:opacity-90"
                        style={{ backgroundColor: '#B5643D' }}
                      >
                        Register for Berkeley Immersion
                      </CallToActionButton>
                    </div>
                  </CardContent>
                </div>
                <div className="md:w-1/3 bg-gradient-to-br from-[#C9A24B]/20 to-[#4A5A3A]/20 flex items-center justify-center p-8">
                  <MapPin className="h-24 w-24" style={{ color: '#4A5A3A' }} />
                </div>
              </div>
            </Card>

            <Card className="bg-white/80 border-none shadow-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:w-2/3">
                  <CardHeader>
                    <CardTitle className="font-serif text-2xl md:text-3xl" style={{ color: '#3A4A2E' }}>
                      Boulder, CO — Sunday, October 18th, 2026
                    </CardTitle>
                    <CardDescription className="text-lg" style={{ color: '#B5643D' }}>
                      An Introduction to the 5-Month Journey to Embodied Secure Attachment
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <MapPin className="h-5 w-5 mt-1 flex-shrink-0" style={{ color: '#B5643D' }} />
                      <p className="text-muted-foreground">Boulder, Colorado</p>
                    </div>
                    <div className="pt-4">
                      <CallToActionButton
                        href="https://goodcoaching.as.me/?appointmentType=80123371"
                        className="text-white hover:opacity-90"
                        style={{ backgroundColor: '#B5643D' }}
                      >
                        Register for Boulder Immersion
                      </CallToActionButton>
                    </div>
                  </CardContent>
                </div>
                <div className="md:w-1/3 bg-gradient-to-br from-[#C9A24B]/20 to-[#4A5A3A]/20 flex items-center justify-center p-8">
                  <MapPin className="h-24 w-24" style={{ color: '#4A5A3A' }} />
                </div>
              </div>
            </Card>

            <Card className="bg-white/80 border-none shadow-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:w-2/3">
                  <CardHeader>
                    <CardTitle className="font-serif text-2xl md:text-3xl" style={{ color: '#3A4A2E' }}>
                      Berkeley, CA — Saturday, December 12th, 2026
                    </CardTitle>
                    <CardDescription className="text-lg" style={{ color: '#B5643D' }}>
                      An Introduction to the 5-Month Journey to Embodied Secure Attachment
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <MapPin className="h-5 w-5 mt-1 flex-shrink-0" style={{ color: '#B5643D' }} />
                      <p className="text-muted-foreground">Berkeley, California</p>
                    </div>
                    <div className="pt-4">
                      <CallToActionButton
                        href="https://goodcoaching.as.me/?appointmentType=80123371"
                        className="text-white hover:opacity-90"
                        style={{ backgroundColor: '#B5643D' }}
                      >
                        Register for Berkeley Immersion
                      </CallToActionButton>
                    </div>
                  </CardContent>
                </div>
                <div className="md:w-1/3 bg-gradient-to-br from-[#C9A24B]/20 to-[#4A5A3A]/20 flex items-center justify-center p-8">
                  <MapPin className="h-24 w-24" style={{ color: '#4A5A3A' }} />
                </div>
              </div>
            </Card>
          </div>
        </div>
      </SectionWrapper>

      {/* 5-Month Journey */}
      <SectionWrapper className="bg-transparent">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white/80 border-none shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-2/3">
                <CardHeader>
                  <CardTitle className="font-serif text-2xl md:text-3xl" style={{ color: '#3A4A2E' }}>
                    5-Month Journey to Embodied Secure Attachment
                  </CardTitle>
                  <CardDescription className="text-lg" style={{ color: '#B5643D' }}>
                    Attachment Alchemy
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-lg">
                    A five-month transformational journey combining somatic healing, attachment repair, nervous system regulation, and community support. January 13 — June 16, 2027.
                  </p>
                  <div className="pt-4">
                    <CallToActionButton
                      to="/"
                      className="text-white hover:opacity-90"
                      style={{ backgroundColor: '#B5643D' }}
                    >
                      Learn More About Attachment Alchemy <ArrowRight className="ml-2 h-4 w-4 inline" />
                    </CallToActionButton>
                  </div>
                </CardContent>
              </div>
              <div className="md:w-1/3 bg-gradient-to-br from-[#4A5A3A]/20 to-[#B5643D]/20 flex items-center justify-center p-8">
                <ArrowRight className="h-24 w-24" style={{ color: '#B5643D' }} />
              </div>
            </div>
          </Card>
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper className="bg-transparent">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-4" style={{ color: '#3A4A2E' }}>
            Not sure which offering is right for you?
          </h2>
          <p className="text-lg mb-8" style={{ color: '#3A4A2E' }}>
            Book a complimentary Clarity Call to explore which program fits your journey.
          </p>
          <CallToActionButton
            href="https://goodcoaching.as.me/?appointmentType=80123371"
            className="text-white hover:opacity-90"
            style={{ backgroundColor: '#B5643D' }}
          >
            Book a Clarity Call
          </CallToActionButton>
        </div>
      </SectionWrapper>
    </>
  );
};

export default EventsPage;