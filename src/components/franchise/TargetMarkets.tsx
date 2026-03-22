import React from 'react';
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { 
  Stethoscope, 
  Scissors, 
  UtensilsCrossed, 
  Pizza, 
  Briefcase, 
  ShoppingBag, 
  GraduationCap, 
  Building2 
} from "lucide-react";

const TargetMarkets = () => {
  const industries = [
    {
      icon: Stethoscope,
      title: "Healthcare",
      description: "Clinic management, patient portals, and lab reporting solutions.",
    },
    {
      icon: ShoppingBag,
      title: "Retail",
      description: "Smart inventory, POS systems, and customer loyalty solutions.",
    },
    {
      icon: GraduationCap,
      title: "Education",
      description: "Learning management, student portals, and administrative tools.",
    },
    {
      icon: Briefcase,
      title: "Prof. Services",
      description: "Project tracking, billing, and CRM for consultants and firms.",
    },
    {
      icon: Scissors,
      title: "Beauty & Wellness",
      description: "Booking engines and inventory tracking for salons and spas.",
    }
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 text-center">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900">Target Markets</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Our SaaS portfolio covers high-growth industries with massive demand for digital transformation.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
          {industries.map((industry, i) => (
            <motion.div
              key={i}
              className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className="p-8 h-full bg-white hover:shadow-2xl transition-all border-slate-200 hover:border-primary/50 group text-left">
                <div className={`w-16 h-16 rounded-2xl bg-white shadow-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <industry.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-800">{industry.title}</h3>
                <p className="text-slate-500 font-medium leading-relaxed">{industry.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetMarkets;
