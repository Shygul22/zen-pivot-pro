import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-12"
          >
            <div className="text-center space-y-4">
              <h1 className="text-4xl md:text-6xl font-black text-slate-900">About ZenJourney</h1>
              <p className="text-xl text-slate-600 font-medium">Empowering entrepreneurs to scale through technology-driven franchising.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-slate-900">Our Mission</h2>
                <p className="text-slate-600 leading-relaxed">
                  ZenJourney was founded with a single goal: to bridge the gap between high-level SaaS technology and local entrepreneurial ambition. We provide a turnkey "business-in-a-box" solution that allows partners to launch and scale their own digital service agencies without the technical overhead.
                </p>
              </div>
              <div className="bg-slate-100 rounded-3xl h-64 flex items-center justify-center text-slate-400 font-bold border-2 border-dashed border-slate-200">
                [Mission Image Placeholder]
              </div>
            </div>

            <div className="space-y-8">
              <h2 className="text-2xl font-bold text-slate-900 text-center">Our Core Values</h2>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                {[
                  { title: "Transparency", desc: "Open revenue shares and clear operational models." },
                  { title: "Innovation", desc: "Constant tech updates to keep our partners ahead." },
                  { title: "Support", desc: "Dedicated success managers for every franchise tier." }
                ].map((value, i) => (
                  <div key={i} className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                    <h3 className="font-bold text-slate-900 mb-2">{value.title}</h3>
                    <p className="text-sm text-slate-600 font-medium">{value.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-12 rounded-[2.5rem] bg-slate-900 text-white text-center space-y-6">
              <h2 className="text-3xl font-black">Building the Future of SaaS</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                Join our network of 50+ partners across the globe and start your journey today.
              </p>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;
