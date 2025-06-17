
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const InsideAttachmentAlchemySection: React.FC = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 animate-fade-in" style={{
      backgroundColor: '#E07A5F'
    }}>
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-4 text-white">Inside Attachment Alchemy</h2>
        <p className="text-xl text-center mb-10 text-white">4 Months from August 6 - December 3</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="text-center bg-white/90">
            <CardHeader>
              <CardTitle className="text-lg text-primary">Kickoff Immersion</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">September 4-7 - 4-day in-person retreat in Northern California. *Food & Lodging not included in course cost</p>
            </CardContent>
          </Card>
          <Card className="text-center bg-white/90">
            <CardHeader>
              <CardTitle className="text-lg text-primary">1:1 Coaching Sessions</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Two 90-minute sessions with Chloe</p>
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
