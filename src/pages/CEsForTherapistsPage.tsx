import React from 'react';
import SectionWrapper from '@/components/SectionWrapper';
import CallToActionButton from '@/components/CallToActionButton';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

// When the registration page is ready, put its web address here.
// While this is empty, the page shows "Registration opening soon" and an email button instead.
const REGISTRATION_LINK = '';

const CONTACT_EMAIL = 'Kelinlcsw@gmail.com';

const GREEN = '#3A4A2E';
const TERRACOTTA = '#B5643D';

const courseDetails: { label: string; value: string }[] = [
  { label: 'Course title', value: 'Relational and Somatic Practices for Healing Attachment Wounds' },
  { label: 'Date and time', value: 'December 13, 2026, 10:00 a.m. – 5:00 p.m. (check-in opens 9:30 a.m.)' },
  { label: 'Delivery format', value: 'In-person' },
  { label: 'Location', value: 'TBD near Berkeley, CA' },
  { label: 'CE amount', value: '5.5 clinical CE credits' },
];

const learningObjectives = [
  'Explain the core components and proposed mechanisms of healing of the Adult Attachment Repair Model.',
  'Identify indicators of client readiness and circumstances that call for adapting, slowing, or postponing the practice.',
  'Demonstrate introducing and concluding the “Stickwork” practice with a client.',
  'Name common relational wounds of each attachment style and somatic experiences that support healing.',
  'Describe ways to introduce AARM within their current therapeutic approach, in person and via telehealth.',
];

const agenda: { time: string; topic: string; muted?: boolean }[] = [
  { time: '9:30 – 10:00 a.m.', topic: 'Check-in and sign-in (not included in CE credit)', muted: true },
  {
    time: '10:00 – 10:45 a.m.',
    topic:
      'Overview of the theory and flow of somatic and relational work for repairing attachment wounding; introduction to the Adult Attachment Repair Model',
  },
  {
    time: '10:45 – 11:30 a.m.',
    topic:
      'Teaching and demo: introducing and concluding the practice with clients — theoretical, practical, and somatic considerations, including client readiness and when to adapt, slow, or postpone the practice, drawing on the SE concepts of titration, pendulation, resourcing, and interoceptive tracking',
  },
  { time: '11:30 – 11:45 a.m.', topic: 'Break', muted: true },
  { time: '11:45 a.m. – 12:30 p.m.', topic: 'Practice sessions and debrief: introducing and concluding' },
  { time: '12:30 – 1:30 p.m.', topic: 'Lunch', muted: true },
  {
    time: '1:30 – 2:45 p.m.',
    topic:
      'Teaching and demo: somatic and relational skills and techniques for working with different attachment styles, including cultural and individual differences in attachment and proximity norms',
  },
  { time: '2:45 – 3:30 p.m.', topic: 'Practice sessions applying skills and techniques; debrief' },
  { time: '3:30 – 3:45 p.m.', topic: 'Break', muted: true },
  {
    time: '3:45 – 5:00 p.m.',
    topic: 'Integrating the practice into sessions, including adaptations for telehealth; case examples; Q&A',
  },
];

const SectionHeading: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6 text-center" style={{ color: GREEN }}>
    {children}
  </h2>
);

const SubHeading: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h3 className="font-serif text-xl md:text-2xl font-semibold mb-2" style={{ color: TERRACOTTA }}>
    {children}
  </h3>
);

const EmailLink: React.FC = () => (
  <a href={`mailto:${CONTACT_EMAIL}`} className="underline underline-offset-2 break-all" style={{ color: TERRACOTTA }}>
    {CONTACT_EMAIL}
  </a>
);

const RegisterButton: React.FC = () =>
  REGISTRATION_LINK ? (
    <CallToActionButton
      href={REGISTRATION_LINK}
      className="text-white hover:opacity-90"
      style={{ backgroundColor: TERRACOTTA }}
    >
      Register Now
    </CallToActionButton>
  ) : (
    <div className="space-y-3">
      <p className="font-serif text-lg italic" style={{ color: GREEN }}>
        Registration opening soon
      </p>
      <CallToActionButton
        href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('CE course: Relational and Somatic Practices')}`}
        className="text-white hover:opacity-90"
        style={{ backgroundColor: TERRACOTTA }}
      >
        Email Us About Registering
      </CallToActionButton>
    </div>
  );

const CEsForTherapistsPage: React.FC = () => {
  return (
    <>
      {/* Hero */}
      <SectionWrapper className="!py-0">
        <div className="relative min-h-[35vh] md:min-h-[40vh] flex items-center justify-center text-center organic-card overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#F5F0E6]/90 via-[#E8DCC8]/80 to-[#D4C4A8]/70" />
          <div className="relative z-10 p-6 max-w-4xl mx-auto">
            <p className="uppercase tracking-widest text-sm md:text-base font-semibold mb-4" style={{ color: TERRACOTTA }}>
              CEs for Therapists
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight animate-fade-in" style={{ color: GREEN }}>
              Relational and Somatic Practices for Healing Attachment Wounds
            </h1>
            <p className="font-serif text-xl md:text-2xl mb-2" style={{ color: TERRACOTTA }}>
              A 5.5-hour in-person CE course
            </p>
            <p className="text-lg mb-6" style={{ color: GREEN }}>
              December 13, 2026 · near Berkeley, CA · 5.5 clinical CE credits
            </p>
            <RegisterButton />
          </div>
        </div>
      </SectionWrapper>

      {/* Overview & description */}
      <SectionWrapper className="bg-transparent">
        <div className="max-w-3xl mx-auto">
          <SectionHeading>Course Overview</SectionHeading>
          <div className="space-y-5 text-lg leading-relaxed" style={{ color: GREEN }}>
            <p>
              Kelin Hall, LCSW, PLLC and Chloe Good Coaching present <em>Relational and Somatic Practices for Healing
              Attachment Wounds</em>, a 5.5-hour in-person CE course.
            </p>
            <p>
              This 5.5-hour CE program teaches clinicians relational, somatic practices for healing attachment wounds
              that they can integrate into their current therapeutic approaches. Grounded in adult attachment theory and
              interpersonal neurobiology, and drawing on concepts from Hakomi, Internal Family Systems (IFS), and Somatic
              Experiencing (SE), the training explores the relational wounds associated with each attachment style and
              the somatic experiences that support their healing.
            </p>
            <p>
              Participants will learn to introduce and practice “Stickwork,” the core somatic component of the Adult
              Attachment Repair Model (AARM; Cummings). In it, therapist and client hold a stick between them and
              explore pushing and pulling, offering a felt experience of attachment patterns and an opportunity to shift
              them. Through teaching, demonstration, guided practice, and discussion, clinicians working from diverse
              perspectives and modalities will leave with a practical way to bring somatic, relational work into their
              sessions.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* Details card */}
      <SectionWrapper className="bg-transparent">
        <div className="max-w-3xl mx-auto">
          <Card className="bg-white/80 border-none shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="font-serif text-2xl md:text-3xl" style={{ color: GREEN }}>
                Course Details
              </CardTitle>
            </CardHeader>
            <CardContent>
              <dl className="divide-y divide-[#E8DCC8]">
                {courseDetails.map((item) => (
                  <div key={item.label} className="py-3 sm:grid sm:grid-cols-3 sm:gap-4">
                    <dt className="font-semibold" style={{ color: TERRACOTTA }}>{item.label}</dt>
                    <dd className="sm:col-span-2 mt-1 sm:mt-0" style={{ color: GREEN }}>{item.value}</dd>
                  </div>
                ))}
              </dl>
            </CardContent>
          </Card>
        </div>
      </SectionWrapper>

      {/* Who it's for */}
      <SectionWrapper className="bg-transparent">
        <div className="max-w-3xl mx-auto">
          <SectionHeading>Who This Course Is For</SectionHeading>
          <div className="space-y-6 text-lg leading-relaxed" style={{ color: GREEN }}>
            <div>
              <SubHeading>Target audience</SubHeading>
              <p>
                Social workers, counselors, psychologists, and other mental health clinicians. Best suited to clinicians
                who see clients in person; adaptations for telehealth are addressed.
              </p>
            </div>
            <div>
              <SubHeading>Course level</SubHeading>
              <p>Beginner</p>
            </div>
            <div>
              <SubHeading>Prerequisite</SubHeading>
              <p>
                Participants must attend the{' '}
                <a href="/events" className="underline underline-offset-2" style={{ color: TERRACOTTA }}>
                  Attachment Alchemy 1-Day Immersion
                </a>{' '}
                on December 12, 2026 (or have attended a prior Attachment Alchemy 1-Day Immersion). This immersion lays
                the foundation in attachment theory and introduces the Stickwork practice through direct experience. It
                does not carry CE credit. The immersion is a separate public workshop; it is not part of this course or
                its CE approval.
              </p>
            </div>
            <div>
              <SubHeading>Scope</SubHeading>
              <p>
                This introductory training does not confer certification in AARM, Hakomi, SE, or IFS, and does not
                qualify participants to train others in AARM. Participants should integrate these skills only within
                their license and scope of competence.
              </p>
            </div>
            <div>
              <SubHeading>Participation</SubHeading>
              <p>
                This course includes paired practice with a stick held between two people, involving pushing and
                pulling. Participation is always optional: you may choose an observer role or pause at any point,
                without explanation. The practice does not involve touch; partners connect through the stick. If you
                have an injury, physical limitation, or anything that makes the practice feel unsafe, you’re welcome to
                observe or to contact us beforehand to talk through adaptations. This is professional training, not
                therapy.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Learning objectives */}
      <SectionWrapper className="bg-transparent">
        <div className="max-w-3xl mx-auto">
          <Card className="bg-white/80 border-none shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="font-serif text-2xl md:text-3xl" style={{ color: GREEN }}>
                Learning Objectives
              </CardTitle>
              <p className="text-lg pt-2" style={{ color: TERRACOTTA }}>
                After attending this course, participants will be able to:
              </p>
            </CardHeader>
            <CardContent>
              <ol className="space-y-4 text-lg" style={{ color: GREEN }}>
                {learningObjectives.map((objective, i) => (
                  <li key={i} className="flex gap-4">
                    <span
                      className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white font-semibold text-base"
                      style={{ backgroundColor: TERRACOTTA }}
                    >
                      {i + 1}
                    </span>
                    <span className="pt-0.5">{objective}</span>
                  </li>
                ))}
              </ol>
            </CardContent>
          </Card>
        </div>
      </SectionWrapper>

      {/* Instructors */}
      <SectionWrapper className="bg-transparent">
        <div className="max-w-3xl mx-auto">
          <SectionHeading>About the Instructors</SectionHeading>
          <div className="space-y-8">
            <Card className="bg-white/80 border-none shadow-lg">
              <CardHeader>
                <CardTitle className="font-serif text-2xl" style={{ color: GREEN }}>
                  Kelin Hall, LCSW (Illinois)
                </CardTitle>
              </CardHeader>
              <CardContent className="text-lg leading-relaxed" style={{ color: GREEN }}>
                <p>
                  Kelin has specialized in healing attachment trauma for a decade, integrating psychodynamic and
                  relational approaches, Internal Family Systems, EMDR, and somatic work in her private practice, where
                  she also supervises clinicians working toward licensure. Before founding her practice, she spent four
                  years working with children and families impacted by sexual violence. A University of Chicago MSW, she
                  brings IFS training and teaching experience, including serving as an IFS Institute Level 1 Program
                  Assistant, and has co-developed CE programs for licensed clinicians. She also teaches “Dancing with Our
                  Parts” workshops that unite her love of dance with embodied IFS. She has been stunned by how useful
                  Stickwork is in helping clients see and work with their attachment patterns. She finds it makes
                  concrete the push-pull dynamics that happen in relational therapy, and lets the therapeutic dyad
                  observe and shift them with less shame.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 border-none shadow-lg">
              <CardHeader>
                <CardTitle className="font-serif text-2xl" style={{ color: GREEN }}>
                  Chloe Good, Somatic Educator and Group Facilitator
                </CardTitle>
              </CardHeader>
              <CardContent className="text-lg leading-relaxed space-y-4" style={{ color: GREEN }}>
                <p className="italic">
                  Chloe is not a licensed mental health professional; clinical application is taught by Kelin Hall,
                  LCSW.
                </p>
                <p>
                  Chloe trained in the Adult Attachment Repair Model directly with its developer, Peter Cummings, and
                  founded Attachment Alchemy, a training that integrates AARM with Hakomi and Internal Family Systems.
                  She brings more than 15 years of designing and leading programs in attachment repair, leadership
                  development, and somatic healing, grounded in training at the Hakomi Institute of California and in
                  developmental trauma work taught in part by Somatic Experiencing practitioners. She has taught
                  leadership at Stanford University and in Sonoma State University’s Executive MBA program, and her work
                  has been featured in Forbes. Her approach is deeply personal: her own path through profound loss, more
                  than 10,000 hours of mindfulness meditation, and somatic therapy inspires her to help others move
                  toward embodied secure attachment.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </SectionWrapper>

      {/* Agenda */}
      <SectionWrapper className="bg-transparent">
        <div className="max-w-3xl mx-auto">
          <Card className="bg-white/80 border-none shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="font-serif text-2xl md:text-3xl" style={{ color: GREEN }}>
                Course Agenda
              </CardTitle>
              <p className="text-lg pt-2" style={{ color: TERRACOTTA }}>
                Sunday, December 13, 2026
              </p>
            </CardHeader>
            <CardContent>
              <div className="divide-y divide-[#E8DCC8]">
                {agenda.map((item) => (
                  <div key={item.time} className="py-4 sm:grid sm:grid-cols-[11rem_1fr] sm:gap-6">
                    <div className="font-semibold whitespace-nowrap" style={{ color: TERRACOTTA }}>
                      {item.time}
                    </div>
                    <div
                      className={`mt-1 sm:mt-0 ${item.muted ? 'italic text-muted-foreground' : ''}`}
                      style={item.muted ? undefined : { color: GREEN }}
                    >
                      {item.topic}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </SectionWrapper>

      {/* Registration */}
      <SectionWrapper className="bg-transparent">
        <div className="max-w-3xl mx-auto">
          <SectionHeading>Registration and Information</SectionHeading>
          <div className="space-y-6 text-lg leading-relaxed" style={{ color: GREEN }}>
            <div>
              <SubHeading>Fees and registration</SubHeading>
              <p>
                One registration covers both this course ($200, including your CE certificate, tea, and snacks) and the
                separate prerequisite, the Attachment Alchemy 1-Day Immersion on December 12, 2026 ($100; no CE
                credit), for a total of $300. If you have attended a prior Attachment Alchemy 1-Day Immersion, register
                for this course only ($200). Registration closes December 11, 2026.
              </p>
            </div>
            <div>
              <SubHeading>Disclosure</SubHeading>
              <p>Instructor Chloe Good offers the prerequisite immersion and receives its registration fees.</p>
            </div>
            <div>
              <SubHeading>Questions, concerns, or grievances</SubHeading>
              <p>
                Please contact Kelin Hall at <EmailLink /> or{' '}
                <a href="tel:+13127723038" className="underline underline-offset-2 whitespace-nowrap" style={{ color: TERRACOTTA }}>
                  312-772-3038
                </a>
                .
              </p>
            </div>
            <div>
              <SubHeading>ADA accommodations</SubHeading>
              <p>
                Email <EmailLink /> to request accommodations.
              </p>
            </div>
            <div>
              <SubHeading>Cancellation and refunds</SubHeading>
              <div className="space-y-3">
                <p>
                  Cancel before November 12, 2026, for a full refund by emailing <EmailLink />. After that, registration
                  fees are non-refundable, but you may transfer your registration to another clinician by emailing{' '}
                  <EmailLink /> by 9:00 a.m. PT on December 12, 2026. (The new registrant must have completed the
                  prerequisite to receive CE credit.)
                </p>
                <p>
                  If we cancel or reschedule this course or the prerequisite immersion, you’ll receive a full refund of
                  the fees for that event within 10 business days.
                </p>
                <p>
                  Special circumstances? Email us. Requests outside this policy are reviewed under our grievance policy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Completion & CE info */}
      <SectionWrapper className="bg-transparent">
        <div className="max-w-3xl mx-auto">
          <Card className="bg-white/80 border-none shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="font-serif text-2xl md:text-3xl" style={{ color: GREEN }}>
                Course Completion and CE Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-lg leading-relaxed" style={{ color: GREEN }}>
              <div>
                <SubHeading>Completion requirements</SubHeading>
                <p>
                  To be eligible for CE credit, participants must have completed the prerequisite, attend this entire
                  course, sign in and out, and complete a course evaluation. Partial credit is not available.
                </p>
              </div>
              <div>
                <SubHeading>Certificates</SubHeading>
                <p>Certificates of completion will be emailed within 10 business days of course completion.</p>
              </div>
              {/*
                ACE approval statement: held back until the course number and approval period are known.
                Fill in the brackets and the ending, then remove the comment markers around this block.

              <div>
                <SubHeading>ACE approval statement</SubHeading>
                <p>
                  Relational and Somatic Practices for Healing Attachment Wounds, [course number], is approved by the
                  Association of Social Work Boards (ASWB) Approved Continuing Education (ACE) program to be offered by
                  Kelin Hall, LCSW, PLLC as an individual course. Regulatory boards are the final authority on courses
                  accepted for continuing education credit. ACE course approval period: [start date] – [end date].
                  Social workers completing this course receive [...]
                </p>
              </div>
              */}
            </CardContent>
          </Card>
        </div>
      </SectionWrapper>

      {/* Closing CTA */}
      <SectionWrapper className="bg-transparent">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-4" style={{ color: GREEN }}>
            Join us in December
          </h2>
          <p className="text-lg mb-8" style={{ color: GREEN }}>
            Registration closes December 11, 2026.
          </p>
          <RegisterButton />
        </div>
      </SectionWrapper>
    </>
  );
};

export default CEsForTherapistsPage;
