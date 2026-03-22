import React from 'react';
import { motion } from "framer-motion";
import { ArrowRight, Server, Users, DollarSign } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Server,
      title: "HQ Provides Platform",
      description: "Get access to white-label software, infrastructure, and ongoing technical support.",
      color: "blue"
    },
    {
      icon: Users,
      title: "You Sell Locally",
      description: "Leverage your network and sales expertise to find businesses in need of digitalization.",
      color: "green"
    }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900">How It Works</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto italic">
            A simple, transparent partnership model designed for mutual success.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-[44%] left-0 right-0 h-1 bg-slate-100 -z-10" />

          <div className="grid md:grid-cols-2 gap-12 relative max-w-4xl mx-auto">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className="flex flex-col items-center text-center space-y-6 group"
              >
                <div className="w-24 h-24 rounded-full bg-slate-50 flex items-center justify-center border-4 border-white shadow-xl group-hover:scale-110 transition-transform duration-300 relative">
                  <step.icon className="w-10 h-10 text-primary" />
                  {i < steps.length - 1 && (
                    <div className="hidden lg:flex absolute -right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full items-center justify-center shadow-lg z-20">
                      <ArrowRight className="w-6 h-6 text-slate-300" />
                    </div>
                  )}
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-slate-800">{step.title}</h3>
                  <p className="text-slate-600 leading-relaxed font-medium">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Model Explanation Cards */}
          <div className="mt-20 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100 space-y-4">
              <div className="flex items-center gap-3 text-slate-900 font-black uppercase tracking-wider text-sm mb-4">
                Central Team (ZenJourney)
              </div>
              <ul className="space-y-3">
                {[
                  "Development (Apps & Websites)",
                  "Server & SaaS management",
                  "QA & deployment",
                  "Technical support"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-slate-600 font-bold text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 rounded-[2rem] bg-primary/[0.03] border border-primary/10 space-y-4">
              <div className="flex items-center gap-3 text-primary font-black uppercase tracking-wider text-sm mb-4">
                Franchise Partner Role
              </div>
              <ul className="space-y-3">
                {[
                  "Lead generation",
                  "Client communication",
                  "Sales closing",
                  "Basic support"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-slate-700 font-bold text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
