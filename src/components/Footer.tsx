
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-muted/50 text-muted-foreground py-8 mt-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm mb-2">
          &copy; {currentYear} Attachment Alchemy. All rights reserved.
        </p>
        <p className="text-sm mb-2">
          Facilitated by{' '}
          <a href="https://chloegood.com" className="hover:text-primary transition-colors underline">Chloe Good</a>
          {' '}and Spencer Jacobson.
        </p>
        <div className="space-x-4">
          <Link to="/privacy-policy" className="text-sm hover:text-primary transition-colors">Privacy Policy</Link>
          <Link to="/terms-of-service" className="text-sm hover:text-primary transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
