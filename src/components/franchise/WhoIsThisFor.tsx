import React from 'react';
import { motion } from "framer-motion";
import { UserCheck, Briefcase, Glasses, Compass } from "lucide-react";

const WhoIsThisFor = () => {
  const audiences = [
    {
      icon: UserCheck,
      title: "Entrepreneurs",
      description: "Visionaries looking to enter the high-growth SaaS market."
    },
    {
      icon: Briefcase,
      title: "Sales Professionals",
      description: "Experts who want to leverage their sales skills for significant recurring income."
    },
    {
      icon: Glasses,
      title: "Consultants",
      description: "Business advisors who want to offer additional value to their existing clients."
    },
    {
      icon: Compass,
      title: "Income Seekers",
      description: "Individuals looking for a sustainable, high-potential business model."
    }
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900">Who Is This For?</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto italic font-medium leading-relaxed">
            Whether you're a seasoned pro or just starting out, our model is designed to adapt to your skills.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {audiences.map((audience, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-lg transition-all text-center space-y-4"
            >
              <div className="w-12 h-12 mx-auto rounded-full bg-slate-50 flex items-center justify-center">
                <audience.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-slate-800">{audience.title}</h3>
              <p className="text-slate-500 font-medium leading-relaxed">{audience.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoIsThisFor;
