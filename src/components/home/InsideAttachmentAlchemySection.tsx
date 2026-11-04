import React from 'react';
import type { LucideProps } from 'lucide-react';
import { Trees, Sunrise, MessageCircleHeart, MessagesSquare, Headphones, Wind, Users, MapPin } from 'lucide-react';

const GREEN = '#3A4A2E';
const TERRACOTTA = '#B5643D';

type IconComponent = React.ComponentType<LucideProps>;

// A small group of three people, drawn in the same line style as the other icons.
const PeopleGroup: React.FC<LucideProps> = ({ className, style, strokeWidth = 2, size: _size, absoluteStrokeWidth: _abs, ...rest }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    style={style}
    {...rest}
  >
    <circle cx="12" cy="7" r="3" />
    <path d="M6.5 20v-1.5a5.5 5.5 0 0 1 11 0V20" />
    <circle cx="4.5" cy="9.5" r="2.2" />
    <path d="M1 19v-1a4 4 0 0 1 4.6-3.95" />
    <circle cx="19.5" cy="9.5" r="2.2" />
    <path d="M23 19v-1a4 4 0 0 0-4.6-3.95" />
  </svg>
);

const cardClass = 'rounded-[2rem] bg-white/50 backdrop-blur-sm shadow-lg p-7 md:p-9 text-center';

const IconBadge: React.FC<{ icon: IconComponent }> = ({ icon: Icon }) => (
  <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-white/70 shadow-md flex items-center justify-center">
    <Icon className="w-8 h-8" style={{ color: TERRACOTTA }} strokeWidth={1.5} aria-hidden="true" />
  </div>
);

const CardTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h3 className="font-serif text-2xl md:text-[1.7rem] font-semibold leading-tight mb-4" style={{ color: GREEN }}>
    {children}
  </h3>
);

// One gathering inside an immersion card: a small terracotta label, its name,
// the date in large serif type, and where it happens.
const Gathering: React.FC<{ label: string; name: string; when: string; where: string }> = ({ label, name, when, where }) => (
  <div className="flex-1 px-2">
    <p className="text-sm font-semibold tracking-[0.2em] uppercase" style={{ color: TERRACOTTA }}>{label}</p>
    <p className="text-base md:text-lg mt-1" style={{ color: GREEN }}>{name}</p>
    <p className="font-serif text-2xl md:text-3xl mt-2" style={{ color: GREEN }}>{when}</p>
    <p className="flex items-start justify-center gap-1.5 text-base mt-2 leading-snug" style={{ color: GREEN }}>
      <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: TERRACOTTA }} aria-hidden="true" />
      <span>{where}</span>
    </p>
  </div>
);

const Divider: React.FC = () => (
  <span className="block w-12 h-px sm:w-px sm:h-auto sm:self-stretch mx-auto" style={{ backgroundColor: 'rgba(181, 100, 61, 0.35)' }} />
);

const Footnote: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <p className="text-sm italic mt-1 opacity-80" style={{ color: GREEN }}>{children}</p>
);

const offerings: { icon: IconComponent; title: string; lines: string[] }[] = [
  {
    icon: MessageCircleHeart,
    title: '1:1 Coaching',
    lines: ['One 1:1 Coaching Session with an Advanced Practitioner', 'Two Group Coaching Sessions with Chloe, Lead Facilitator and Practitioner'],
  },
  {
    icon: PeopleGroup,
    title: 'Live Group Sessions',
    lines: ['Weekly sessions with live teaching, coaching and practices, alternating with peer led small group practice pod meetings for deeper integration and support.'],
  },
  {
    icon: MessagesSquare,
    title: 'Peer Counseling Practice Partners',
    lines: ['Weekly practice with peers to deepen secure attachment and work through blocks together'],
  },
  {
    icon: Headphones,
    title: 'Recorded Resources',
    lines: ['Meditations and tailored assignments to integrate learnings'],
  },
  {
    icon: Wind,
    title: 'Movement & Meditation Practices',
    lines: ['Practices to integrate transformations in your body and nervous system'],
  },
  {
    icon: Users,
    title: 'Supportive Community',
    lines: ['Deep, loving, supportive, intelligent peers'],
  },
];

const InsideAttachmentAlchemySection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 animate-fade-in">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-4xl md:text-6xl font-semibold" style={{ color: GREEN }}>
            Inside Attachment Alchemy
          </h2>
          <span className="block w-16 h-0.5 mx-auto mt-5 rounded-full" style={{ backgroundColor: TERRACOTTA }} />
          <p className="font-serif italic text-xl md:text-2xl mt-6" style={{ color: TERRACOTTA }}>
            5 Months from January 20 - June 9, 2027
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-6 md:space-y-8">
          <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
            <div className={cardClass}>
              <IconBadge icon={Trees} />
              <CardTitle>Two In Person 4-Day Immersions</CardTitle>
              <div className="flex flex-col sm:flex-row gap-6 sm:gap-4 mt-6">
                <Gathering label="Initiation" name="Immersion 1" when="Feb 10-14" where="Retreat Center in N. California" />
                <Divider />
                <Gathering label="Depth" name="Immersion 2" when="April 14-18" where="Retreat Center in N. California" />
              </div>
              <div className="mt-7">
                <Footnote>*Food & Lodging not included in course cost</Footnote>
                <Footnote>**Some dates subject to change with ample notice</Footnote>
              </div>
            </div>

            <div className={cardClass}>
              <IconBadge icon={Sunrise} />
              <CardTitle>Two Half Day Immersions</CardTitle>
              <div className="flex flex-col sm:flex-row gap-6 sm:gap-4 mt-6">
                <Gathering label="Beginning" name="Half Day Immersion 1" when="January 23" where="Online and in Person in N. California & Boulder" />
                <Divider />
                <Gathering label="Completion" name="Half Day Immersion 2" when="May 22" where="Online and in Person in N. California & Boulder" />
              </div>
              <p className="font-serif italic text-lg mt-5" style={{ color: TERRACOTTA }}>10a-2:30p</p>
              <div className="mt-2">
                <Footnote>*Some dates subject to change with ample notice</Footnote>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {offerings.map(({ icon, title, lines }) => (
              <div key={title} className={cardClass}>
                <IconBadge icon={icon} />
                <CardTitle>{title}</CardTitle>
                {lines.map((line, i) => (
                  <React.Fragment key={line}>
                    {i > 0 && <span className="block w-8 h-px mx-auto my-3" style={{ backgroundColor: 'rgba(181, 100, 61, 0.5)' }} />}
                    <p className="text-lg md:text-xl leading-relaxed" style={{ color: GREEN }}>{line}</p>
                  </React.Fragment>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsideAttachmentAlchemySection;
