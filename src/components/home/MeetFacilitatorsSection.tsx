
import React from 'react';
import SectionWrapper from '@/components/SectionWrapper';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

const MeetFacilitatorsSection: React.FC = () => {
  return (
    <SectionWrapper className="bg-transparent">
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-10 text-foreground">Meet Your Facilitators</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <Card className="text-center bg-white/30 watercolor-blur">
          <CardHeader>
            <img src="/images/chloe-bio.jpg" alt="Chloe Good smiling in a red sweater in front of greenery" className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
            <CardTitle className="text-2xl text-primary">Chloe Good</CardTitle>
            <CardDescription className="text-lg">Somatic Attachment Repair & Executive Coach</CardDescription>
          </CardHeader>
          <CardContent className="text-muted-foreground text-left">
            <p className="mb-4">
              Chloe has guided hundreds of visionary women and men to move towards secure attachment and align their lives to their higher purpose for the past 12 years. Chloe taught Leadership for Stanford & Sonoma State University and consults Leaders at companies like eBay, Accenture, Square, Facebook and various San Francisco Bay Area startups aligning leaders to their higher purpose to create the world we all want to live in.
            </p>
            <p className="mb-4">
              Chloe integrates over 20,000 hours of training and experience and 50 trainings, including the Adult Attachment Repair Model (aka stick work), Secure Attachment to Nature, Hakomi Somatic Therapy, mindfulness meditation, Life Purpose Work, Internal Family Systems, Energy Work, Strengths Based Leadership and Integrative Quantum Medicine. I earned my BA from Columbia University in the City of New York.
            </p>
            <p>
              Chloe is a community builder, having co-created over 40 Co-Housing Living Communities in San Francisco and NYC. Chloe also loves to travel and has visited over 30 countries on 5 continents. Chloe is also the founder of Own Your Magic, which combines Chloe's ability to guide women and men to deep transformation, secure attachment and fulfill their higher purpose supported by an amazing network and community.
            </p>
          </CardContent>
        </Card>
        <Card className="text-center bg-white/30 watercolor-blur">
          <CardHeader>
            <img src="/images/spencer-jacobson.png" alt="Spencer Jacobson, Leadership Coach" className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
            <CardTitle className="text-2xl text-primary">Spencer Jacobson</CardTitle>
            <CardDescription className="text-lg">Leadership Coach, Founder Dance Meets Tantra</CardDescription>
          </CardHeader>
          <CardContent className="text-muted-foreground text-left">
            <p className="mb-4">
              Spencer is a transformational facilitator, DJ, poet and serial entrepreneur with a passion for the art of gathering humans to experience the deepest truths of ourselves individually and collectively. His facilitation style invites self-expression, connection, and creativity while playfully and safely exploring the edges of our comfort zone.
            </p>
            <p className="mb-4">
              He is forever a student of embodiment and healing arts - having studied 5Rhythms dance, tantra, contact improv, ontological coaching, cranialsacral therapy, and yoga. Through his training and deep personal experiences, he is committed to creating safer spaces that hold a trauma-informed perspective.
            </p>
            <p className="mb-4">
              He is co-founder of www.dancemeetstantra.com and www.emergence.love - and previously founded www.guided.co - an organization that has coached thousands of business leaders around the world.
            </p>
            <p className="italic">
              "Your heart knows the way, run in that direction" - Rumi | www.spencerjacobson.com | @spencerjacobson_
            </p>
          </CardContent>
        </Card>
      </div>
    </SectionWrapper>
  );
};

export default MeetFacilitatorsSection;
