
import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

const EmailPopup: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    console.log('EmailPopup mounted, setting timer for 10 seconds');
    // Show popup after 10 seconds
    const timer = setTimeout(() => {
      console.log('Timer fired, showing popup');
      setIsOpen(true);
    }, 10000);

    return () => {
      console.log('EmailPopup cleanup, clearing timer');
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    console.log('EmailPopup isOpen state changed:', isOpen);
  }, [isOpen]);

  useEffect(() => {
    console.log('Loading beehiiv script');
    // Load beehiiv script
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://subscribe-forms.beehiiv.com/embed.js';
    document.head.appendChild(script);

    script.onload = () => {
      console.log('Beehiiv script loaded successfully');
    };

    script.onerror = () => {
      console.error('Failed to load beehiiv script');
    };

    return () => {
      // Cleanup script if component unmounts
      const existingScript = document.querySelector('script[src="https://subscribe-forms.beehiiv.com/embed.js"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
        console.log('Beehiiv script removed');
      }
    };
  }, []);

  const handleClose = () => {
    console.log('Popup closed by user');
    setIsOpen(false);
  };

  console.log('EmailPopup rendering, isOpen:', isOpen);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-lg p-0 bg-white border-0 shadow-xl">
        <div className="relative">
          <DialogHeader className="p-8 pb-6 text-center">
            <DialogTitle className="text-2xl font-serif font-semibold text-primary mb-3">
              Attachment Alchemy Updates
            </DialogTitle>
            <DialogDescription className="text-base text-muted-foreground leading-relaxed">
              Upcoming Courses & Attachment Teachings
            </DialogDescription>
          </DialogHeader>
          
          <div className="px-8 pb-8">
            <iframe 
              src="https://subscribe-forms.beehiiv.com/c67a5af1-d12a-4d90-9a7b-2fb422daba82" 
              className="w-full h-40 border-0" 
              data-test-id="beehiiv-embed" 
              frameBorder="0" 
              scrolling="no"
              style={{
                margin: 0,
                borderRadius: '8px',
                backgroundColor: 'transparent',
                overflow: 'hidden'
              }}
            />
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-4 hover:bg-gray-100"
            onClick={handleClose}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EmailPopup;
