
import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';

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
      <DialogContent className="max-w-xl p-0 bg-white border-0 shadow-xl">
        <iframe 
          src="https://subscribe-forms.beehiiv.com/c67a5af1-d12a-4d90-9a7b-2fb422daba82" 
          className="w-full h-96 border-0 rounded-lg" 
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
      </DialogContent>
    </Dialog>
  );
};

export default EmailPopup;
