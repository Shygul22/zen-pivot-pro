import React from 'react';
import { motion } from "framer-motion";
import { GraduationCap, Headphones, Megaphone, UserPlus, Zap } from "lucide-react";

const SupportSystem = () => {
  const supportItems = [
    {
      icon: GraduationCap,
      title: "Onboarding Training",
      description: "Comprehensive product and sales training to get you started quickly."
    },
    {
      icon: Headphones,
      title: "Demo Support",
      description: "Our experts assist with your first few client demos to ensure closing."
    },
    {
      icon: Megaphone,
      title: "Marketing Materials",
      description: "Access to high-converting brochures, ads, and digital assets."
    },
    {
      icon: UserPlus,
      title: "Customer Onboarding",
      description: "We handle the technical setup and training for your new clients."
    },
    {
      icon: Zap,
      title: "Product Upgrades",
      description: "Llifetime access to all new features and security updates."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900">Full Support System</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            You are never alone. Our dedicated HQ team provides 360-degree support for your local operations.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto">
          {supportItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex flex-col items-center text-center p-8 rounded-[2rem] bg-slate-50 border border-slate-100 w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1.5rem)] hover:shadow-xl hover:bg-white transition-all group"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-800">{item.title}</h3>
              <p className="text-slate-500 font-medium leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SupportSystem;
