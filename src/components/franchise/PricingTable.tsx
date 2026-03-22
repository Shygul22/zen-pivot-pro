import React from 'react';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Info } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const PricingTable = () => {
  const packages = [
    {
      name: "STARTER",
      description: "Perfect for individual entrepreneurs starting their journey.",
      price: "₹16,999",
      features: [
        "License: Solo (1 Territory)",
        "Support: Essential (Email/Chat)",
        "Training: Level 1 (Basic Setup)",
        "Basic Marketing Kit",
        "Standard Analytics Suite",
        "Standard Launch Support"
      ],
      popular: false
    },
    {
      name: "GROWTH",
      description: "Designed for small teams looking to scale quickly.",
      price: "₹29,999",
      features: [
        "License: Multi-Territory (3 Cities)",
        "Support: Priority (Direct Call)",
        "Training: Level 2 (Sales Mastery)",
        "Advanced Marketing Kit",
        "Market Protection Rights",
        "Performance Coaching"
      ],
      popular: true
    },
    {
      name: "MASTER",
      description: "Maximum authority and revenue potential for area developers.",
      price: "₹62,999",
      features: [
        "License: State-Wide (Unlimited)",
        "Support: 24/7 Dedicated Manager",
        "Training: Full Masterclass (Complete)",
        "Premium Marketing Kit",
        "White-Label Options:",
        "• ₹29,999 + 50% Share (All Clients)",
        "• Maintenance Fee + 10% (Per Client)",
        "Strategic Consulting",
        "Global Expansion Rights"
      ],
      popular: false
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900">Franchise Packages</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Select the tier that aligns with your ambition and capacity. Every plan includes the core tech.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {packages.map((pkg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`p-10 rounded-[2.5rem] border ${
                pkg.popular 
                  ? "border-primary shadow-2xl shadow-primary/10 bg-slate-50 relative lg:translate-y-[-10px]" 
                  : "border-slate-200 bg-white"
              } space-y-8 flex flex-col`}
            >
              {pkg.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-[0.2em] shadow-lg">
                  Most Popular
                </div>
              )}

              <div className="space-y-2 text-center">
                <h3 className="text-2xl font-black text-slate-900">{pkg.name}</h3>
                <p className="text-sm font-medium text-slate-500">{pkg.description}</p>
              </div>

              <div className="text-center py-4 border-y border-slate-100">
                <div className="text-4xl font-black text-primary">{pkg.price}</div>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-widest pt-1">One-time Investment</div>
              </div>

              <div className="flex-1 flex flex-col items-center justify-center p-8 bg-slate-50/50 rounded-3xl border border-dashed border-slate-200">
                <div className="text-lg font-black text-slate-400 uppercase tracking-widest">Coming Soon</div>
                <p className="text-xs text-slate-400 font-bold mt-2 text-center uppercase tracking-tighter">Features & Modules TBD</p>
              </div>

              <Button 
                variant={pkg.popular ? "default" : "outline"}
                disabled={true}
                className={`w-full h-14 font-black rounded-2xl ${pkg.popular ? "shadow-xl" : ""}`}
              >
                Coming Soon
              </Button>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger className="flex items-center gap-2 mx-auto text-slate-400 font-bold text-sm bg-slate-50 px-4 py-2 rounded-full border border-slate-100 hover:text-primary transition-colors">
                <Info className="w-4 h-4" />
                <span>Need a custom plan?</span>
              </TooltipTrigger>
              <TooltipContent>
                <p>We offer customized agreements for existing agencies.</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </section>
  );
};

export default PricingTable;
