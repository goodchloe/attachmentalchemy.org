
import React from 'react';
import SectionWrapper from '@/components/SectionWrapper';
import CallToActionButton from '@/components/CallToActionButton';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { CheckCircle, Users, Leaf, Mic, BookOpen } from 'lucide-react';

const FeatureCard: React.FC<{
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
}> = ({
  icon: Icon,
  title,
  children
}) => <Card className="h-full">
    <CardHeader className="flex flex-row items-center space-x-3 pb-2">
      <Icon className="h-8 w-8 text-primary" />
      <CardTitle className="text-xl">{title}</CardTitle>
    </CardHeader>
    <CardContent className="text-muted-foreground">
      {children}
    </CardContent>
  </Card>;

const HomePage: React.FC = () => {
  return <>
      {/* Hero Section with trees photo */}
      <SectionWrapper className="!py-0">
        <div className="relative min-h-[70vh] md:min-h-[80vh] flex items-center justify-center text-center rounded-lg overflow-hidden">
          <img src="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" alt="Forest trees reaching toward the sky" className="absolute inset-0 w-full h-full object-cover filter brightness-50" />
          <div className="relative z-10 p-8 max-w-4xl mx-auto text-white">
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight animate-fade-in">Attachment Alchemy: 
4 Month Journey to Embodied Secure Attachment</h1>
            <div className="mt-8">
              <CallToActionButton href="https://goodcoaching.as.me/schedule/abc6511b/appointment/76158763/calendar/294178?appointmentTypeIds[]=76158763" className="bg-white text-primary hover:bg-gray-100" size="lg">
                Book a Clarity Call
              </CallToActionButton>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Add whitespace between hero and intro */}
      <div className="py-8"></div>

      {/* Introduction - Color Block Section */}
      <section className="py-12 md:py-16 lg:py-20 animate-fade-in" style={{
      backgroundColor: '#8FB5A3'
    }}>
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-white">ATTACHMENT ALCHEMY</h2>
            <p className="text-lg md:text-xl mb-6">
              is a four-month transformational journey to rewire your nervous system, repair core attachment wounds, and reclaim your innate capacity for deep love, safety, and aliveness—within yourself and in relationship.
            </p>
            <p className="text-lg md:text-xl mb-6">
              This is your invitation to root into secure attachment, dissolve old protection strategies, and open fully to intimacy, purpose, and connection.
            </p>
            <p className="text-lg md:text-xl font-semibold">
              This is more than a course—it's a path to a life of deep intimacy, aliveness and purpose.
            </p>
          </div>
        </div>
      </section>

      {/* Aliveness and Connection Images Section */}
      <SectionWrapper>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="text-center">
            <img src="/lovable-uploads/da4db7f4-3910-4ab7-890e-044cd741e8e1.png" alt="Joyful expression of aliveness" className="w-full h-64 object-cover rounded-lg shadow-lg mb-4" />
            <h3 className="text-xl font-semibold text-primary mb-2">Embodied Joy</h3>
            <p className="text-muted-foreground">Reconnect with your natural state of aliveness and authentic expression.</p>
          </div>
          <div className="text-center">
            <img src="/lovable-uploads/11813ee2-db4b-4b9d-b95f-2da7f45dd2cc.png" alt="Deep connection and intimacy" className="w-full h-64 object-cover rounded-lg shadow-lg mb-4" />
            <h3 className="text-xl font-semibold text-primary mb-2">Sacred Connection</h3>
            <p className="text-muted-foreground">Cultivate deeper intimacy and secure attachment in all your relationships.</p>
          </div>
          <div className="text-center">
            <img src="/lovable-uploads/2a291393-81d6-4433-ad3d-0f0978446463.png" alt="Lush green ferns in nature" className="w-full h-64 object-cover rounded-lg shadow-lg mb-4" />
            <h3 className="text-xl font-semibold text-primary mb-2">Natural Healing</h3>
            <p className="text-muted-foreground">Ground yourself in nature's wisdom as you heal and transform.</p>
          </div>
        </div>
      </SectionWrapper>

      {/* What does it mean section - Light grey */}
      <SectionWrapper className="bg-secondary/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-10 text-foreground">What You'll Discover</h2>
          <div className="space-y-6 text-lg text-muted-foreground">
            <p className="text-center mb-8">
              What does it mean to open your nervous system to love, safety, and purpose—and let life move through you with clarity and power?
            </p>
            <div className="grid md:grid-cols-1 gap-6">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <p>In Attachment Alchemy, you'll learn to relate from a regulated, securely attached self—so your presence naturally inspires trust, depth, and transformation.</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <p>Develop the clarity, confidence, and embodied tools to show up authentically in your relationships, your work, and your leadership.</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <p>Learn to navigate complex relational dynamics and hold space for deep healing—whether that's with clients, teams, or loved ones.</p>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Who is this for - Color Block Section */}
      <section className="py-12 md:py-16 lg:py-20 animate-fade-in" style={{
      backgroundColor: '#D4B5A0'
    }}>
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-semibold text-center mb-10 text-white">Who is this for?</h2>
            <div className="grid md:grid-cols-1 gap-6 text-lg text-white">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-white flex-shrink-0 mt-1" />
                <p>You've done a lot of work on yourself but you keep running into the same pattern that you can't seem to overcome.</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-white flex-shrink-0 mt-1" />
                <p>You're wanting more closeness and intimacy in your relationships and can't quite get there.</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-white flex-shrink-0 mt-1" />
                <p>You're wanting to go for bigger dreams and feel like you need more support.</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-white flex-shrink-0 mt-1" />
                <p>You did everything you were 'supposed' to do and still don't feel satisfied.</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-white flex-shrink-0 mt-1" />
                <p>You're longing to welcome a committed partner into your life while maintaining your authenticity and working through anxious or avoidant patterns that have sabotaged your relationships in the past.</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-white flex-shrink-0 mt-1" />
                <p>You're in a relationship and you want to deepen your secure attachment with each other and learn to metabolize insecure attachment patterns that get in the way of deeper connection.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - Light grey */}
      <SectionWrapper className="bg-secondary/30">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-10 text-foreground">What participants are saying...</h2>
        <div className="grid md:grid-cols-1 gap-8 max-w-4xl mx-auto">
          <Card className="text-center">
            <CardContent className="p-8">
              <p className="text-lg text-muted-foreground mb-4 italic">
                "This was the most transformative workshop I have ever taken."
              </p>
              <p className="font-semibold text-primary">- J.D., Attachment Alchemy Participant</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-8">
              <p className="text-lg text-muted-foreground mb-4 italic">
                "Chloe leads with an incredible combination of skill, deep love and compassion, and so much joy. Just being in her presence and having her as your cheerleader and fierce ally throughout the course will up-level your life!"
              </p>
              <p className="font-semibold text-primary">- J.E., Attachment Alchemy Participant</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-8">
              <p className="text-lg text-muted-foreground mb-4 italic">
                "I can honestly say I could have paid 10x what she charges and it still would have been worth it."
              </p>
              <p className="font-semibold text-primary">- C.S., CEO Tech Startup</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-8">
              <p className="text-lg text-muted-foreground mb-4 italic">
                "Having taught Tantra for 30 years, I know when a container is pristinely held and was impressed with how Spencer built and held it."
              </p>
              <p className="font-semibold text-primary">- E.R.</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-8">
              <p className="text-lg text-muted-foreground mb-4 italic">
                "I felt so much trust in Spencer's facilitation that I was able to surrender and allow the container to truly hold me."
              </p>
              <p className="font-semibold text-primary">- H.R.</p>
            </CardContent>
          </Card>
        </div>
      </SectionWrapper>

      {/* Inside Attachment Alchemy - Color Block Section */}
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

      {/* Meet Your Facilitators - Light grey */}
      <SectionWrapper className="bg-secondary/30">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-10 text-foreground">Meet Your Facilitators</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card className="text-center">
            <CardHeader>
              <img src="/lovable-uploads/9d76db4c-e415-4080-9e67-67cca0b43cd5.png" alt="Chloe Good, program facilitator" className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
              <CardTitle className="text-2xl text-primary">Chloe Good</CardTitle>
              <CardDescription className="text-lg">Somatic Attachment Repair & Executive Coach</CardDescription>
            </CardHeader>
            <CardContent className="text-muted-foreground text-left">
              <p className="mb-4">
                Chloe has guided hundreds of visionary women and men to move towards secure attachment and align their lives to their higher purpose for the past 12 years. Chloe taught Leadership for Stanford & Sonoma State University and consults Leaders at companies like eBay, Accenture, Square, Facebook and various San Francisco Bay Area startups aligning leaders to their higher purpose to create the world we all want to live in.
              </p>
              <p className="mb-4">
                Chloe integrates over 20,000 hours of training and experience and 50 trainings, including the Adult Attachment Repair Model (aka stick work), Secure Attachment to Nature, Hakomi Somatic Therapy, mindfulness meditation, Life Purpose Work, Internal Family Systems, Energy Work, Strengths Based Leadership and Integrative Quantum Medicine. She earned her BA from Columbia University in the City of New York.
              </p>
              <p>
                Chloe is a community builder, having co-created over 40 Co-Housing Living Communities in San Francisco and NYC. Chloe also loves to travel and has visited over 30 countries on 5 continents. Chloe is also the founder of Own Your Magic, which combines Chloe's ability to guide women and men to deep transformation, secure attachment and fulfill their higher purpose supported by an amazing network and community.
              </p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardHeader>
              <img src="/lovable-uploads/eb1444c1-90a6-4ce6-8c93-b289c40276fe.png" alt="Spencer Jacobson, Leadership Coach" className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
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
      
      {/* Investment - Color Block Section */}
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
    </>;
};
export default HomePage;
