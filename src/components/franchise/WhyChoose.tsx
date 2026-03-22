import React from 'react';
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const WhyChoose = () => {
  const benefits = [
    "No Coding or Technical Skills Required",
    "High Recurring Revenue Streams",
    "Partners recover investment in 60–90 days on average",
    "Scalable Business Architecture",
    "Exclusive Territory Rights",
    "Continuous Product Upgrades & Innovation"
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900">Why Choose ZenJourney?</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We provide an end-to-end ecosystem that eliminates the traditional barriers to entry in the tech industry.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="flex items-center gap-4 p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all"
            >
              <div className="shrink-0">
                <CheckCircle2 className="w-6 h-6 text-emerald-500" />
              </div>
              <span className="text-slate-700 font-bold leading-snug">{benefit}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
