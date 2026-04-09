import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import CommonContact from '@/components/CommonContact';

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <CommonContact />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactUs;
