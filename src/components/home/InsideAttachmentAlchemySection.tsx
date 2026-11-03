
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import heroBg from '@/assets/hero-watercolor.jpg';

const InsideAttachmentAlchemySection: React.FC = () => {
  return (
    <section className="relative py-12 md:py-16 lg:py-20 animate-fade-in bg-transparent">
      <div className="relative w-full px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-4" style={{ color: '#3A4A2E' }}>Inside Attachment Alchemy</h2>
        <p className="text-xl text-center mb-10" style={{ color: '#3A4A2E' }}>5 Months from January 20 - June 9, 2027</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8 max-w-6xl mx-auto">
          <Card className="organic-card soft-warm-shadow bg-white/30 watercolor-blur md:col-span-1 lg:col-span-3">
            <CardHeader className="text-center">
              <CardTitle className="text-lg text-primary">Two In Person 4-Day Immersions</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-muted-foreground text-left list-disc pl-5 space-y-2">
                <li>
                  Initiation | Immersion 1
                  <ul className="list-[circle] pl-5 mt-1 space-y-1">
                    <li>Feb 10-14</li>
                    <li>Retreat Center in N. California</li>
                  </ul>
                </li>
                <li>
                  Depth | Immersion 2
                  <ul className="list-[circle] pl-5 mt-1 space-y-1">
                    <li>April 14-18</li>
                    <li>Retreat Center in N. California</li>
                  </ul>
                </li>
              </ul>
              <p className="text-muted-foreground text-center mt-4 text-sm">*Food & Lodging not included in course cost</p>
              <p className="text-muted-foreground text-center mt-1 text-sm">**Some dates subject to change with ample notice</p>
            </CardContent>
          </Card>
          <Card className="organic-card soft-warm-shadow bg-white/30 watercolor-blur md:col-span-1 lg:col-span-3">
            <CardHeader className="text-center">
              <CardTitle className="text-lg text-primary">Two Half Day Immersions</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-muted-foreground text-left list-disc pl-5 space-y-2">
                <li>
                  Beginning | Half Day Immersion 1
                  <ul className="list-[circle] pl-5 mt-1 space-y-1">
                    <li>January 23, 10a-2:30p</li>
                    <li>Online and in Person in N. California & Boulder</li>
                  </ul>
                </li>
                <li>
                  Completion | Half Day Immersion 2
                  <ul className="list-[circle] pl-5 mt-1 space-y-1">
                    <li>May 22, 10a-2:30p</li>
                    <li>Online and in Person in N. California & Boulder</li>
                  </ul>
                </li>
              </ul>
              <p className="text-muted-foreground text-center mt-4 text-sm">*Some dates subject to change with ample notice</p>
            </CardContent>
          </Card>
          <Card className="organic-card soft-warm-shadow bg-white/30 watercolor-blur lg:col-span-2">
            <CardHeader className="text-center">
              <CardTitle className="text-lg text-primary">1:1 Coaching</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-muted-foreground list-disc pl-5 space-y-1 text-left">
                <li>One 1:1 Coaching Session with an Advanced Practitioner</li>
                <li>Two Group Coaching Sessions with Chloe</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="organic-card soft-warm-shadow text-center bg-white/30 watercolor-blur lg:col-span-2">
            <CardHeader>
              <CardTitle className="text-lg text-primary">Live Group Sessions</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Weekly sessions with live teaching, coaching and practices, alternating with peer led small group practice pod meetings for deeper integration and support.</p>
            </CardContent>
          </Card>
          <Card className="organic-card soft-warm-shadow text-center bg-white/30 watercolor-blur lg:col-span-2">
            <CardHeader>
              <CardTitle className="text-lg text-primary">Peer Counseling Practice Partners</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Weekly practice with peers to deepen secure attachment and work through blocks together</p>
            </CardContent>
          </Card>
          <Card className="organic-card soft-warm-shadow text-center bg-white/30 watercolor-blur lg:col-span-2">
            <CardHeader>
              <CardTitle className="text-lg text-primary">Recorded Resources</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Meditations and tailored assignments to integrate learnings</p>
            </CardContent>
          </Card>
          <Card className="organic-card soft-warm-shadow text-center bg-white/30 watercolor-blur lg:col-span-2">
            <CardHeader>
              <CardTitle className="text-lg text-primary">Movement & Energy Practices</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Practices to integrate transformations in your body and nervous system</p>
            </CardContent>
          </Card>
          <Card className="organic-card soft-warm-shadow text-center bg-white/30 watercolor-blur lg:col-span-2">
            <CardHeader>
              <CardTitle className="text-lg text-primary">Supportive Community</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Deep, loving, supportive, intelligent peers</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default InsideAttachmentAlchemySection;
