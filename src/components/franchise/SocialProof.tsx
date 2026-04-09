import React from 'react';
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const SocialProof = () => {
  const testimonials = [
    {
      name: "Arjun Mehta",
      role: "Growth Partner, Mumbai",
      content: "I recovered my initial investment in just 68 days. The HQ support is seamless; I focus on sales, they handle all the tech.",
      rating: 5
    },
    {
      name: "Sarah Williams",
      role: "Starter Partner, London",
      content: "ZenJourney allowed me to launch a tech agency without hiring a single developer. My first client paid for 4 months of royalty upfront.",
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight">Proven by Partners</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto font-medium">
            Real stories, real numbers, and real growth from our global network.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 space-y-6 relative"
            >
              <Quote className="w-12 h-12 text-primary opacity-10 absolute top-8 right-8" />
              <div className="flex gap-1">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-lg font-bold text-slate-700 leading-relaxed italic">"{t.content}"</p>
              <div className="pt-4 border-t border-slate-200/60">
                <div className="font-black text-slate-900">{t.name}</div>
                <div className="text-xs font-bold text-primary uppercase tracking-widest">{t.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
