
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import heroBg from '@/assets/hero-watercolor.jpg';

const InsideAttachmentAlchemySection: React.FC = () => {
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
      <div className="relative w-full px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-4" style={{ color: '#3A4A2E' }}>Inside Attachment Alchemy</h2>
        <p className="text-xl text-center mb-10" style={{ color: '#3A4A2E' }}>5 Months from January 13 - June 16, 2027</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="bg-white/90">
            <CardHeader className="text-center">
              <CardTitle className="text-lg text-primary">Three In Person Immersions</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-center mb-3">Two 4-day in person retreats & One Half Day Immersion in Northern California</p>
              <p className="text-muted-foreground text-center mt-3 text-sm">*Food & Lodging not included in course cost</p>
            </CardContent>
          </Card>
          <Card className="bg-white/90">
            <CardHeader className="text-center">
              <CardTitle className="text-lg text-primary">1:1 Coaching Sessions</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-muted-foreground list-disc pl-5 space-y-1 text-left">
                <li>One 1:1 Coaching session</li>
                <li>Two Group Coaching Sessions</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="text-center bg-white/90">
            <CardHeader>
              <CardTitle className="text-lg text-primary">Live Group Sessions</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Weekly sessions with live teaching, coaching and practices, alternating with peer led small group practice pod meetings for deeper integration and support.</p>
            </CardContent>
          </Card>
          <Card className="text-center bg-white/90">
            <CardHeader>
              <CardTitle className="text-lg text-primary">Peer Counseling Practice Partners</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Deepen secure attachment and work through blocks together</p>
            </CardContent>
          </Card>
          <Card className="text-center bg-white/90">
            <CardHeader>
              <CardTitle className="text-lg text-primary">Recorded Resources</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Meditations and tailored assignments to integrate learnings</p>
            </CardContent>
          </Card>
          <Card className="text-center bg-white/90">
            <CardHeader>
              <CardTitle className="text-lg text-primary">Movement & Energy Practices</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Practices to integrate transformations in your body and nervous system</p>
            </CardContent>
          </Card>
        </div>
        <div className="text-center mt-8">
          <Card className="bg-white/90 inline-block">
            <CardContent className="p-6">
              <CardTitle className="text-lg text-primary mb-2">Supportive Community</CardTitle>
              <p className="text-muted-foreground">Deep, loving, supportive, intelligent peers</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default InsideAttachmentAlchemySection;
