
import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

const EmailPopup: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show popup after 10 seconds
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Load beehiiv script
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://subscribe-forms.beehiiv.com/embed.js';
    document.head.appendChild(script);

    return () => {
      // Cleanup script if component unmounts
      const existingScript = document.querySelector('script[src="https://subscribe-forms.beehiiv.com/embed.js"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-md p-0 bg-white">
        <DialogHeader className="p-6 pb-4">
          <DialogTitle className="text-2xl font-semibold text-center text-primary">
            Stay Connected & Inspired
          </DialogTitle>
          <DialogDescription className="text-center text-muted-foreground">
            Get insights, resources, and updates on healing and transformation directly to your inbox.
          </DialogDescription>
        </DialogHeader>
        
        <div className="px-6 pb-6">
          <iframe 
            src="https://subscribe-forms.beehiiv.com/c67a5af1-d12a-4d90-9a7b-2fb422daba82" 
            className="beehiiv-embed w-full h-64" 
            data-test-id="beehiiv-embed" 
            frameBorder="0" 
            scrolling="no"
            style={{
              margin: 0,
              borderRadius: '0px 0px 0px 0px',
              backgroundColor: 'transparent',
              boxShadow: '0 0 #0000'
            }}
          />
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="absolute right-4 top-4"
          onClick={() => setIsOpen(false)}
        >
          <X className="h-4 w-4" />
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default EmailPopup;
