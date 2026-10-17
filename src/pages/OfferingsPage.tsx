
import React from 'react';
import SectionWrapper from '@/components/SectionWrapper';
import CallToActionButton from '@/components/CallToActionButton';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

// Different tree photo
const heroImageUrl = "https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80";

const OfferingsPage: React.FC = () => {
  return <>
      {/* Hero Section */}
      <SectionWrapper className="!py-0">
        <div className="relative min-h-[70vh] md:min-h-[80vh] flex items-center justify-center text-center rounded-lg overflow-hidden">
          <img src={heroImageUrl} alt="Serene natural landscape" className="absolute inset-0 w-full h-full object-cover filter brightness-50" />
          <div className="relative z-10 p-8 max-w-3xl mx-auto text-white">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight animate-fade-in" style={{
            animationDelay: '0.2s'
          }}>
              Reclaim Your Aliveness: Healing Attachment, Embodying Safety
            </h1>
            <p className="text-lg md:text-xl mb-8 animate-fade-in" style={{
            animationDelay: '0.4s'
          }}>You can live a full, embodied life.</p>
            <div className="space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in" style={{
            animationDelay: '0.6s'
          }}>
              <CallToActionButton href="https://goodcoaching.as.me/?appointmentType=80123371" className="bg-black text-white hover:bg-gray-800">
                Book a Discovery Call
              </CallToActionButton>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Brief Intro to Chloe */}
      <SectionWrapper>
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-foreground">
            Hi, I'm Chloe. I've Been There.
          </h2>
          <img src="/images/chloe-portrait.png" alt="Chloe Good, smiling warmly" className="w-48 h-48 rounded-full mx-auto mb-6 object-cover shadow-lg" />
          <p className="text-lg text-muted-foreground mb-6">My journey through complex trauma and into profound healing has equipped me with may tools and a deep passion for guiding others towards their own "embodied secure attachment." I know what it's like to search for safety and aliveness, and I'm here to walk that path with you.</p>
          <CallToActionButton to="/about" variant="link" className="text-primary hover:text-primary/80">
            Learn More About My Journey
          </CallToActionButton>
        </div>
      </SectionWrapper>

      {/* Connection and Nature Section */}
      <SectionWrapper className="bg-secondary/30">
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto items-center">
          <div>
            <img src="/images/golden-light-crystal-ball.png" alt="Woman in golden light holding a crystal ball" className="w-full h-80 object-cover rounded-lg shadow-lg" />
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-primary">Embracing Your Inner Light</h3>
            <p className="text-lg text-muted-foreground">
              Through somatic practices and embodied healing, we reconnect you with your natural radiance and wisdom. This work isn't just about healing wounds—it's about reclaiming the brilliant essence that is uniquely yours.
            </p>
            <p className="text-lg text-muted-foreground">
              When we feel safe in our bodies, we naturally open to deeper connection, clearer purpose, and authentic aliveness.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* Are You Experiencing...? Section */}
      <SectionWrapper>
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-foreground">Are You Experiencing...?</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left text-lg text-muted-foreground">
            {["Struggles in relationships, feeling misunderstood or disconnected?", "A sense of not feeling safe in your own body or with others?", "Feeling disconnected from your emotions or physical sensations?", "A cycle of anxiety, depression, or overwhelm that therapy hasn't fully resolved?", "Tired of traditional talk therapy that doesn't seem to create lasting change?"].map((item, index) => <li key={index} className="flex items-start space-x-3 p-4 bg-card rounded-md shadow">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <span>{item}</span>
              </li>)}
          </ul>
          <p className="mt-8 text-lg text-muted-foreground">If any of this resonates, you're in the right place. Healing is possible.</p>
        </div>
      </SectionWrapper>

      {/* Connection and Support Section */}
      <SectionWrapper className="bg-secondary/30">
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto items-center">
          <div className="order-2 md:order-1 space-y-4">
            <h3 className="text-2xl font-semibold text-primary">Deep Connection & Support</h3>
            <p className="text-lg text-muted-foreground">
              Healing happens in relationship. Whether through our group programs or 1-on-1 work, you'll experience the power of being truly seen, held, and supported as you navigate your transformation.
            </p>
            <p className="text-lg text-muted-foreground">
              Our community creates a safe container where vulnerability becomes strength and authentic connection flourishes.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <img src="/images/hands-connecting.png" alt="Hands connecting in support" className="w-full h-80 object-cover rounded-lg shadow-lg" />
          </div>
        </div>
      </SectionWrapper>

      {/* Introduction to Attachment Alchemy */}
      <SectionWrapper>
        <Card className="overflow-hidden shadow-xl md:flex">
          <div className="md:w-1/2">
             <img src="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" // Placeholder nature image
          alt="Path to healing in nature" className="w-full h-64 md:h-full object-cover" />
          </div>
          <div className="md:w-1/2">
            <CardHeader>
              <CardTitle className="text-3xl md:text-4xl text-primary">Attachment Alchemy</CardTitle>
              <CardDescription className="text-lg">Your 5-Month Journey to Embodied Secure Attachment</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <CallToActionButton to="/">
                  Learn More About Attachment Alchemy
                </CallToActionButton>
              </div>
              <p className="text-muted-foreground mb-6 text-lg">
                Attachment Alchemy is a transformative group program designed to help you heal attachment wounds, cultivate deep self-awareness, and build a thriving, securely attached community. Experience profound shifts in how you relate to yourself and others.
              </p>
              <ul className="space-y-2 text-muted-foreground mb-6">
                <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-2" /> Feel safe and at home in your body.</li>
                <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-2" /> Build nourishing, authentic connections.</li>
                <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-2" /> Develop resilience to navigate life's challenges.</li>
                <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-2" /> Deepen the intimacy and connection in your romantic relationship by healing insecure attachment patterns.</li>
              </ul>
            </CardContent>
          </div>
        </Card>
      </SectionWrapper>

      {/* Introduction to 1-on-1 Coaching */}
      <SectionWrapper className="bg-muted/30 rounded-lg">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-foreground">Personalized 1-on-1 Somatic Coaching</h2>
          <p className="text-lg text-muted-foreground mb-6">
            For those seeking deep, individualized support, my 1-on-1 somatic coaching offers a tailored approach to "get into your source code," reprogram limiting patterns, and cultivate lasting change from the nervous system up.
          </p>
          <CallToActionButton to="/coaching">
            Explore 1-on-1 Coaching
          </CallToActionButton>
        </div>
      </SectionWrapper>

      {/* Newsletter Signup */}
      <SectionWrapper id="contact-cta">
        <div className="max-w-xl mx-auto bg-card p-8 md:p-10 rounded-lg shadow-xl text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-3 text-primary">Stay Connected & Inspired</h2>
          <p className="text-muted-foreground mb-6">
            Receive insights, resources, and updates on upcoming programs and offerings directly to your inbox.
          </p>
          <form action="https://docs.google.com/forms/d/e/1FAIpQLSdyourformid/formResponse" method="POST" className="space-y-4">
            <Input type="text" name="entry.yournameentry" placeholder="Your Name" className="bg-background" required />
            <Input type="email" name="entry.youremailentry" placeholder="Your Email" className="bg-background" required />
            <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">Subscribe</Button>
          </form>
        </div>
      </SectionWrapper>
    </>;
};
export default OfferingsPage;
