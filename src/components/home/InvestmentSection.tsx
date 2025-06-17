
import React from 'react';
import CallToActionButton from '@/components/CallToActionButton';
import { Card, CardTitle, CardDescription } from '@/components/ui/card';

const InvestmentSection: React.FC = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 animate-fade-in" style={{
      backgroundColor: '#3F5F5F'
    }}>
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-white">Investment</h2>
          <p className="text-xl text-white mb-6">This is a significant investment in your transformation.</p>
          <Card className="p-6 mb-8 bg-white">
            <CardTitle className="text-primary mb-2 text-lg">Program Cost: 
Sliding scale $4500 - $7000</CardTitle>
            <CardDescription>Payment plans and partial scholarships available.</CardDescription>
            <p className="text-sm text-muted-foreground mt-2">*In person retreat food & lodging not included in course cost.</p>
          </Card>
          
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-white">Ready to Transform Your Life?</h2>
          <p className="text-lg text-white mb-8">If Attachment Alchemy resonates with you, the next step is to book a complimentary Clarity Call. This is an opportunity to connect, discuss your needs, and see if this program is the right fit for your journey.</p>
          <CallToActionButton href="https://goodcoaching.as.me/schedule/abc6511b/appointment/76158763/calendar/294178?appointmentTypeIds[]=76158763" className="bg-white text-primary hover:bg-gray-100">
            Book Your Free Clarity Call
          </CallToActionButton>
          <p className="mt-4 text-sm text-white">
        </p>
        </div>
      </div>
    </section>
  );
};

export default InvestmentSection;
