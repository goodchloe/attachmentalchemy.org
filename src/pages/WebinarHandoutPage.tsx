import React, { useEffect } from 'react';
import SectionWrapper from '@/components/SectionWrapper';
import { Card, CardContent } from '@/components/ui/card';
import CallToActionButton from '@/components/CallToActionButton';
import { Download, FileText, Headphones } from 'lucide-react';

// A private page for participants of the "Secure Attachment in the Wild" webinar.
// It isn't linked from the menu or anywhere else on the site, and it asks search
// engines not to list it, so only people who are given the link will find it.

const GREEN = '#3A4A2E';
const TERRACOTTA = '#B5643D';

const PDF_FILE = '/downloads/attachment-alchemy-practice-guide.pdf';
const BOOKING_LINK = 'https://goodcoaching.as.me/?appointmentType=80123371';
const IMAGE_FILE = '/downloads/attachment-alchemy-practice-guide.jpg';
const MEDITATION_FILE = '/downloads/wise-inner-adult-meditation.mp3';

const WebinarHandoutPage: React.FC = () => {
  // Ask search engines not to list this page.
  useEffect(() => {
    const meta = document.createElement('meta');
    meta.name = 'robots';
    meta.content = 'noindex, nofollow';
    document.head.appendChild(meta);
    return () => {
      document.head.removeChild(meta);
    };
  }, []);

  return (
    <>
      <SectionWrapper className="!py-0">
        <div className="relative min-h-[30vh] flex items-center justify-center text-center organic-card overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#F5F0E6]/90 via-[#E8DCC8]/80 to-[#D4C4A8]/70" />
          <div className="relative z-10 p-6 max-w-4xl mx-auto">
            <p className="text-sm md:text-base uppercase tracking-widest mb-2 text-muted-foreground">
              For participants of the webinar
            </p>
            <p className="font-serif text-lg md:text-xl mb-5 max-w-2xl mx-auto leading-snug" style={{ color: TERRACOTTA }}>
              Secure Attachment in the Wild: 6 Steps You Can Actually Take Towards Trust, Connection &amp; Living Your Full Potential
            </p>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-3 leading-tight" style={{ color: GREEN }}>
              Attachment Patterns, Healing Vectors &amp; Wise Adult Qualities
            </h1>
            <p className="font-serif text-xl md:text-2xl mb-4" style={{ color: GREEN }}>
              Your Practice Guide
            </p>
            <p className="text-lg md:text-xl max-w-2xl mx-auto text-muted-foreground">
              Thank you for joining us. Here is the handout from the webinar: the attachment
              patterns, the six healing vectors, and the qualities of the Wise Adult, all in one place,
              plus a guided Wise Inner Adult meditation.
            </p>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-transparent">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-serif text-xl md:text-2xl mb-4" style={{ color: GREEN }}>
            Your downloads
          </p>
          <div className="grid grid-cols-2 gap-3 md:gap-5 mb-10 max-w-xl mx-auto">
            {[
              { href: PDF_FILE, Icon: FileText, label: 'Practice Guide', type: 'PDF', name: undefined },
              {
                href: MEDITATION_FILE,
                Icon: Headphones,
                label: 'Wise Inner Adult Meditation',
                type: '9-min audio',
                name: 'Wise Inner Adult Meditation - Attachment Alchemy.mp3',
              },
            ].map(({ href, Icon, label, type, name }) => (
              <a
                key={href}
                href={href}
                download={name ?? true}
                className="group flex flex-col items-center text-center rounded-xl bg-white/80 shadow-lg px-2 py-5 md:px-4 md:py-7 hover:bg-white hover:-translate-y-0.5 transition-all"
              >
                <span
                  className="flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full mb-3"
                  style={{ backgroundColor: TERRACOTTA }}
                >
                  <Icon className="h-6 w-6 md:h-7 md:w-7 text-white" />
                </span>
                <span className="font-serif font-bold text-sm md:text-lg leading-tight mb-1" style={{ color: GREEN }}>
                  {label}
                </span>
                <span className="text-xs md:text-sm text-muted-foreground mb-3">{type}</span>
                <span
                  className="mt-auto inline-flex items-center gap-1 text-xs md:text-sm font-semibold"
                  style={{ color: TERRACOTTA }}
                >
                  <Download className="h-4 w-4" />
                  Download
                </span>
              </a>
            ))}
          </div>

          <Card className="bg-white/80 border-none shadow-lg mb-10">
            <CardContent className="p-6 md:p-8">
              <Headphones className="h-8 w-8 mx-auto mb-3" style={{ color: TERRACOTTA }} />
              <h2 className="font-serif text-2xl md:text-3xl font-bold mb-2" style={{ color: GREEN }}>
                Wise Inner Adult Meditation
              </h2>
              <p className="text-muted-foreground mb-5">
                A 9-minute guided meditation to meet and strengthen your Wise Inner Adult.
                Listen here, or download it to come back to whenever you need it.
              </p>
              <audio controls preload="none" src={MEDITATION_FILE} className="w-full mb-5">
                Your browser can't play this audio here, but you can still download it below.
              </audio>
              <a
                href={MEDITATION_FILE}
                download="Wise Inner Adult Meditation - Attachment Alchemy.mp3"
                className="inline-flex items-center justify-center gap-2 rounded-md px-8 py-3 font-semibold text-white shadow-lg hover:opacity-90 transition-opacity"
                style={{ backgroundColor: TERRACOTTA }}
              >
                <Download className="h-5 w-5" />
                Download meditation (MP3)
              </a>
            </CardContent>
          </Card>

          <Card className="bg-white/80 border-none shadow-lg overflow-hidden">
            <CardContent className="p-3 md:p-6">
              <img
                src={IMAGE_FILE}
                alt="Attachment Alchemy practice guide: the Wave, Island, Mixed and Anchor attachment patterns, the qualities of the Wise Adult, and the six healing vectors for attachment repair"
                className="w-full h-auto rounded"
              />
            </CardContent>
          </Card>

          <p className="font-serif text-xl md:text-2xl mt-10 mb-4" style={{ color: GREEN }}>
            Want to go deeper?
          </p>
          <p className="text-lg text-muted-foreground mb-6">
            Attachment Alchemy is a 5-month journey to embodied secure attachment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CallToActionButton
              href={BOOKING_LINK}
              className="text-white hover:opacity-90"
              style={{ backgroundColor: TERRACOTTA }}
            >
              Schedule a Call
            </CallToActionButton>
            <CallToActionButton
              to="/"
              variant="outline"
              className="border-2 bg-white/80 hover:bg-white"
              style={{ borderColor: GREEN, color: GREEN }}
            >
              Learn About the Program
            </CallToActionButton>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
};

export default WebinarHandoutPage;
