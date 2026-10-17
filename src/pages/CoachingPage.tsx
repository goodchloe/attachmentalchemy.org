
import React from 'react';
import SectionWrapper from '@/components/SectionWrapper';
import CallToActionButton from '@/components/CallToActionButton';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const CoachingPage: React.FC = () => {
  return (
    <>
      {/* Hero Section with healing photo */}
      <section className="py-0">
        <div className="relative min-h-[70vh] md:min-h-[80vh] flex items-center justify-center text-center overflow-hidden">
          <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" alt="Healing hands and nature" className="absolute inset-0 w-full h-full object-cover filter brightness-50" />
          <div className="relative z-10 p-8 max-w-4xl mx-auto text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Attachment Repair Somatic Coaching</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Deep, personalized somatic healing to help you rewire your nervous system, feel safe in your body, and transform your life from the inside out.
            </p>
          </div>
        </div>
      </section>

      {/* Add whitespace */}
      <div className="py-8"></div>

      {/* Introduction - Color Block Section */}
      <section className="py-12 md:py-16 lg:py-20" style={{ backgroundColor: '#8FB5A3' }}>
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-lg text-white space-y-6 text-center">
            <p className="text-2xl font-semibold">"My work is about getting into the source code, the mainframe of your psychology and nervous system."</p>
            <p>
              Traditional talk therapy often scratches the surface. Somatic coaching, as I practice it, delves deeper. We work with the body's wisdom to access and heal the root causes of distress, attachment wounds, and trauma. It's about feeling the unfelt, nurturing your inner "wise parent," and cultivating a profound sense of safety and aliveness within.
            </p>
            <p>
              Clients typically experience significant shifts within the first 3 months, though many choose to continue this transformative work longer-term, viewing me as a trusted life advisor.
            </p>
          </div>
        </div>
      </section>

      {/* Transformation Image Section */}
      <SectionWrapper>
        <div className="text-center max-w-4xl mx-auto">
          <img src="/images/coaching-crystal-ball.png" alt="Woman holding a crystal ball in golden light" className="w-full max-w-2xl mx-auto h-96 object-cover rounded-lg shadow-xl mb-8" />
          <h3 className="text-2xl font-semibold text-primary mb-4">Clarity Through Embodied Presence</h3>
          <p className="text-lg text-muted-foreground">
            When we cultivate safety in our nervous system and presence in our body, clarity naturally emerges. 
            This work helps you access your inner wisdom and make decisions from a place of deep knowing rather than fear or reactivity.
          </p>
        </div>
      </SectionWrapper>

      {/* My 1-on-1 Offerings - Color Block Section */}
      <section className="py-12 md:py-16 lg:py-20" style={{ backgroundColor: '#D4B5A0' }}>
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-10 text-white">My 1-on-1 Offerings</h2>
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="h-full bg-white/90">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Ongoing Somatic Attachment Repair Coaching</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground space-y-3">
                <p>This is my core 1-on-1 offering. We meet regularly (weekly or 3x/month initially, tapering as you integrate) to:
                </p>
                <ul className="list-disc list-inside space-y-1 pl-4">
                  <li>Gently process and release stored trauma and emotional blockages.</li>
                  <li>Develop skills for nervous system regulation and resilience.</li>
                  <li>Rewire attachment patterns towards security and connection.</li>
                  <li>Cultivate self-compassion and a strong inner "wise parent."</li>
                  <li>Integrate somatic awareness into your daily life.</li>
                </ul>
                <p>This journey is tailored to your unique needs and pace, creating a safe container for profound healing and growth.</p>
              </CardContent>
            </Card>
            <Card className="h-full bg-white/90">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Day-Longs in Nature</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground space-y-3">
                <p>For a more immersive experience, I offer personalized day-long intensives set in the healing embrace of nature.</p>
                <p>These extended sessions allow for:
                </p>
                <ul className="list-disc list-inside space-y-1 pl-4">
                  <li>Deeper dives into specific themes or challenges.</li>
                  <li>Extended somatic practices and nature-based therapies.</li>
                  <li>Profound connection with the natural world as a co-regulator.</li>
                  <li>Dedicated time for integration and reflection.</li>
                </ul>
                <p>Day-longs are powerful catalysts for breakthroughs and deep resourcing. (Details and availability discussed during a discovery call).</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Nature Connection Section */}
      <SectionWrapper className="bg-secondary/30">
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto items-center">
          <div>
            <img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" alt="Forest path with sunlight streaming through trees" className="w-full h-80 object-cover rounded-lg shadow-lg" />
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-primary">Healing in Nature's Embrace</h3>
            <p className="text-lg text-muted-foreground">
              Nature is one of our most powerful co-regulators. When we ground ourselves in the natural world, our nervous systems naturally soften and find safety. This creates the perfect container for deep healing work.
            </p>
            <p className="text-lg text-muted-foreground">
              My day-long intensives harness this healing power, combining somatic practices with the restorative energy of forests, mountains, and open spaces.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* What to Expect - Light grey */}
      <SectionWrapper>
        <Card className="max-w-2xl mx-auto text-center shadow-lg">
            <CardHeader>
                <CardTitle className="text-3xl text-primary">What to Expect in a Session</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-3">
                <p>Our sessions are a collaborative exploration. We start by checking in with your present experience – sensations, emotions, thoughts. </p>
                <p>Guided by your nervous system's cues, we may incorporate gentle movement, breathwork, focused awareness, or therapeutic dialogue to help you connect with and process what arises in a safe and supported way. </p>
                <p>The emphasis is always on your felt sense and building resources for self-regulation and inner safety. There's no pressure, only curiosity and compassion.</p>
            </CardContent>
        </Card>
      </SectionWrapper>

      {/* Ready to Explore - Color Block Section */}
      <section className="py-12 md:py-16 lg:py-20" style={{ backgroundColor: '#E07A5F' }}>
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-white">Ready to Explore 1-on-1 Work?</h2>
            <p className="text-lg text-white mb-8">
              If you're feeling called to this deep, personalized work, I invite you to schedule a complimentary discovery call. We'll discuss your aspirations, answer your questions, and explore if we're a good fit to embark on this journey together.
            </p>
            <CallToActionButton
              href="https://goodcoaching.as.me/?appointmentType=80123371"
              className="bg-white text-primary hover:bg-gray-100"
            >
              Schedule Your Free Discovery Call
            </CallToActionButton>
          </div>
        </div>
      </section>
    </>
  );
};

export default CoachingPage;
