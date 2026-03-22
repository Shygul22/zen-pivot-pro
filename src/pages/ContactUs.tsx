import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ContactSection from '@/components/franchise/ContactSection';
import { motion } from 'framer-motion';

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12 space-y-4"
          >
            <h1 className="text-4xl md:text-6xl font-black text-slate-900">Get In Touch</h1>
            <p className="text-xl text-slate-600 font-medium italic">We're here to answer your questions about the ZenJourney Franchise.</p>
          </motion.div>
          
          <ContactSection />

          <div className="mt-20 grid md:grid-cols-2 gap-8 text-center max-w-4xl mx-auto">
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 space-y-4">
              <h3 className="text-xl font-bold text-slate-900">Official Email</h3>
              <p className="text-primary font-black text-lg">info@zenjourney.io</p>
            </div>
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 space-y-4">
              <h3 className="text-xl font-bold text-slate-900">Direct Contact</h3>
              <p className="text-primary font-black text-lg text-sm md:text-lg">
                +91 9092406569 <br/> +91 9629236257
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactUs;
