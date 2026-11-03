
import React from 'react';
import SectionWrapper from '@/components/SectionWrapper';
import { Card, CardContent } from '@/components/ui/card';

const TestimonialsSection: React.FC = () => {
  return (
    <SectionWrapper className="bg-transparent">
      <h2 className="section-title text-3xl md:text-4xl font-semibold text-center mb-10" style={{ color: '#3A4A2E' }}>What participants are saying...</h2>
      {/* YouTube Videos */}
      <div className="flex flex-col md:flex-row justify-center gap-12 mb-10">
        <div className="flex flex-col items-center">
          <div className="w-full max-w-xs aspect-[9/16] organic-photo-soft overflow-hidden soft-warm-shadow">
            <iframe
              src="https://www.youtube.com/embed/x-T9smce_d8"
              title="Participant Testimonial - Sophie"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
          <p className="mt-3 text-lg font-semibold" style={{ color: '#3A4A2E' }}>Sophie</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-full max-w-xs aspect-[9/16] organic-photo-soft overflow-hidden soft-warm-shadow">
            <iframe
              src="https://www.youtube.com/embed/rZRBAK8776o"
              title="Participant Testimonial - Mark & Malia"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
          <p className="mt-3 text-lg font-semibold" style={{ color: '#3A4A2E' }}>Mark & Malia</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-full max-w-xs aspect-[9/16] organic-photo-soft overflow-hidden soft-warm-shadow">
            <iframe
              src="https://www.youtube.com/embed/H1vAhZ6O438"
              title="Participant Testimonial - Verenice"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
          <p className="mt-3 text-lg font-semibold" style={{ color: '#3A4A2E' }}>Verenice</p>
        </div>
      </div>

      <div className="grid md:grid-cols-1 gap-8 max-w-4xl mx-auto">
        <Card className="organic-card soft-warm-shadow border-none text-center bg-white/40 watercolor-blur">
          <CardContent className="p-8 pt-6">
            <span aria-hidden="true" className="block font-serif text-6xl leading-none h-8" style={{ color: '#B5643D' }}>&ldquo;</span>
            <p className="font-serif text-lg md:text-xl mb-4 italic leading-relaxed" style={{ color: '#3A4A2E' }}>
              This was the most transformative workshop I have ever taken.
            </p>
            <p className="text-sm font-semibold tracking-wide uppercase" style={{ color: '#B5643D' }}>J.D., Attachment Alchemy Participant</p>
          </CardContent>
        </Card>
        <Card className="organic-card soft-warm-shadow border-none text-center bg-white/40 watercolor-blur">
          <CardContent className="p-8 pt-6">
            <span aria-hidden="true" className="block font-serif text-6xl leading-none h-8" style={{ color: '#B5643D' }}>&ldquo;</span>
            <p className="font-serif text-lg md:text-xl mb-4 italic leading-relaxed" style={{ color: '#3A4A2E' }}>
              Chloe leads with an incredible combination of skill, deep love and compassion, and so much joy. Just being in her presence and having her as your cheerleader and fierce ally throughout the course will up-level your life!
            </p>
            <p className="text-sm font-semibold tracking-wide uppercase" style={{ color: '#B5643D' }}>J.E., Attachment Alchemy Participant</p>
          </CardContent>
        </Card>
        <Card className="organic-card soft-warm-shadow border-none text-center bg-white/40 watercolor-blur">
          <CardContent className="p-8 pt-6">
            <span aria-hidden="true" className="block font-serif text-6xl leading-none h-8" style={{ color: '#B5643D' }}>&ldquo;</span>
            <p className="font-serif text-lg md:text-xl mb-4 italic leading-relaxed" style={{ color: '#3A4A2E' }}>
              I can honestly say I could have paid 10x what they charge and it still would have been worth it.
            </p>
            <p className="text-sm font-semibold tracking-wide uppercase" style={{ color: '#B5643D' }}>C.S., CEO Tech Startup</p>
          </CardContent>
        </Card>
        <Card className="organic-card soft-warm-shadow border-none text-center bg-white/40 watercolor-blur">
          <CardContent className="p-8 pt-6">
            <span aria-hidden="true" className="block font-serif text-6xl leading-none h-8" style={{ color: '#B5643D' }}>&ldquo;</span>
            <p className="font-serif text-lg md:text-xl mb-4 italic leading-relaxed" style={{ color: '#3A4A2E' }}>
              I felt so much trust in Spencer's facilitation that I was able to surrender and allow the container to truly hold me.
            </p>
            <p className="text-sm font-semibold tracking-wide uppercase" style={{ color: '#B5643D' }}>H.R.</p>
          </CardContent>
        </Card>
      </div>
    </SectionWrapper>
  );
};

export default TestimonialsSection;
