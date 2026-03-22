import React from 'react';
import { motion } from "framer-motion";
import { Quote, Star, TrendingUp, CheckCircle2, ArrowRight } from "lucide-react";

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

  const caseStudy = {
    title: "Partner Success: The 90-Day Sprint",
    partner: "Rahul S., Growth Package",
    stats: [
      { label: "Month 1 Revenue", value: "₹45,000" },
      { label: "Month 3 Revenue", value: "₹1,85,000" },
      { label: "Active Clients", value: "12" }
    ],
    story: "Rahul joined in Oct 2025. By leveraging our CRM and Website Builder tools, he closed 3 local dental clinics in his first 15 days. By month 3, his recurring revenue exceeded his previous 9-5 salary."
  };

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

        {/* Case Study Feature */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto p-12 rounded-[3.5rem] bg-slate-900 text-white relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/10 -skew-x-12 translate-x-1/2 pointer-events-none" />
          
          <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-black uppercase tracking-widest text-primary">
                Case Study
              </div>
              <h3 className="text-4xl font-black">{caseStudy.title}</h3>
              <p className="text-slate-400 text-lg leading-relaxed">{caseStudy.story}</p>
              <div className="flex items-center gap-4 text-sm font-bold text-slate-300">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-primary" />
                </div>
                Foundational stats for {caseStudy.partner}
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {caseStudy.stats.map((stat, i) => (
                <div key={i} className="text-center p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm">
                  <div className="text-3xl font-black text-white mb-1">{stat.value}</div>
                  <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{stat.label}</div>
                </div>
              ))}
              <div className="md:col-span-3 p-6 rounded-3xl bg-primary/20 border border-primary/30 flex items-center justify-between">
                <div className="space-y-1">
                  <div className="text-sm font-bold text-white">First 30 Days Trajectory</div>
                  <div className="text-xs text-slate-400">Average partner path starting from zero.</div>
                </div>
                <ArrowRight className="text-primary" />
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default SocialProof;
