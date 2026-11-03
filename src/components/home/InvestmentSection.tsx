
import React from 'react';
import CallToActionButton from '@/components/CallToActionButton';
import { Card, CardTitle, CardDescription } from '@/components/ui/card';

const InvestmentSection: React.FC = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 animate-fade-in bg-transparent">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4" style={{ color: '#3A4A2E' }}>Investment</h2>
          <p className="text-xl mb-6" style={{ color: '#3A4A2E' }}>This is a significant investment in your transformation.</p>
          <Card className="organic-card soft-warm-shadow p-6 mb-8 bg-white/30 watercolor-blur">
            <CardTitle className="text-primary mb-2 text-lg">Program Cost: Sliding scale $7000 - $10,000</CardTitle>
            <CardDescription>Payment plans and partial scholarships available.</CardDescription>
            <p className="text-sm text-muted-foreground mt-2">*In person retreat food & lodging not included in course cost.</p>
            <p className="text-sm text-muted-foreground mt-1">**Some dates subject to change with ample notice.</p>
          </Card>
          
          <h2 className="text-3xl md:text-4xl font-semibold mb-4" style={{ color: '#3A4A2E' }}>Ready to Transform Your Life?</h2>
          <p className="text-lg mb-8" style={{ color: '#3A4A2E' }}>If Attachment Alchemy resonates with you, the next step is to book a complimentary Clarity Call. This is an opportunity to connect, discuss your needs, and see if this program is the right fit for your journey.</p>
          <CallToActionButton href="https://goodcoaching.as.me/?appointmentType=80123371" className="text-white hover:opacity-90" style={{ backgroundColor: '#B5643D' }}>
            Book Your Free Clarity Call
          </CallToActionButton>
          <p className="mt-4 text-sm" style={{ color: '#3A4A2E' }}>
        </p>
        </div>
      </div>
    </section>
  );
};

export default InvestmentSection;
