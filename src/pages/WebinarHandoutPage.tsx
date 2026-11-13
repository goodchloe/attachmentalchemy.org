import React, { useEffect } from 'react';
import SectionWrapper from '@/components/SectionWrapper';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Download, FileText } from 'lucide-react';

// A private page for participants of the "Secure Attachment in the Wild" webinar.
// It isn't linked from the menu or anywhere else on the site, and it asks search
// engines not to list it, so only people who are given the link will find it.

const GREEN = '#3A4A2E';
const TERRACOTTA = '#B5643D';

const PDF_FILE = '/downloads/attachment-alchemy-practice-guide.pdf';
const IMAGE_FILE = '/downloads/attachment-alchemy-practice-guide.jpg';

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
            <p className="font-serif text-lg md:text-xl mb-3" style={{ color: TERRACOTTA }}>
              For participants of Secure Attachment in the Wild
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-4 leading-tight" style={{ color: GREEN }}>
              Your Practice Guide
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto text-muted-foreground">
              Thank you for joining us. Here is the handout from the webinar: the attachment
              patterns, the six healing vectors, and the qualities of the Wise Adult, all in one place.
            </p>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-transparent">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <a
              href={PDF_FILE}
              download
              className="inline-flex items-center justify-center gap-2 rounded-md px-8 py-3 font-semibold text-white shadow-lg hover:opacity-90 transition-opacity"
              style={{ backgroundColor: TERRACOTTA }}
            >
              <Download className="h-5 w-5" />
              Download PDF
            </a>
            <a
              href={IMAGE_FILE}
              download
              className="inline-flex items-center justify-center gap-2 rounded-md px-8 py-3 font-semibold border-2 bg-white/80 hover:bg-white transition-colors"
              style={{ borderColor: GREEN, color: GREEN }}
            >
              <FileText className="h-5 w-5" />
              Download image
            </a>
          </div>

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
          <Link
            to="/"
            className="inline-block font-semibold underline underline-offset-4"
            style={{ color: TERRACOTTA }}
          >
            Learn about the program
          </Link>
        </div>
      </SectionWrapper>
    </>
  );
};

export default WebinarHandoutPage;
