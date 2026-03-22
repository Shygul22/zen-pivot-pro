import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Rocket, ShieldCheck, Users, TrendingUp } from "lucide-react";

const HeroSection = () => {
  const navigate = useNavigate();
  const stats = [
    { label: "Revenue Share", value: "70-80%", icon: TrendingUp },
    { label: "Target Industries", value: "4 Key Sectors", icon: Rocket },
    { label: "Support", value: "Full HQ Backend", icon: ShieldCheck },
  ];

  return (
    <section className="relative pt-20 pb-32 overflow-hidden bg-slate-50">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 translate-x-1/2 pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="secondary" className="px-4 py-1 text-primary bg-primary/10 border-primary/20 hover:bg-primary/20 transition-colors uppercase tracking-widest text-xs font-bold">
              Franchise Opportunity
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.1]"
          >
            Build Your Own SaaS Business <br className="hidden md:block" />
            <span className="text-primary italic">Without Coding</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed"
          >
            Partner with ZenJourney and offer enterprise-grade software solutions to your local market. 
            We provide the tech, you drive the growth.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
          >
            <Button 
              size="lg" 
              className="px-10 h-16 text-lg font-bold shadow-2xl shadow-primary/20 bg-primary hover:bg-primary/90"
              onClick={() => navigate("/checkout?plan=STARTER&price=₹16,999")}
            >
              Apply for Franchise
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="px-10 h-16 text-lg font-bold border-2"
              onClick={() => window.open("https://forms.gle/WXKcB8c5hpCeorbk9", "_blank")}
            >
              Book a Free Consultation
            </Button>
          </motion.div>

          {/* Key Stats Bar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-20 pt-12 border-t border-slate-200"
          >
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col items-center p-4 rounded-2xl bg-white/50 backdrop-blur-sm shadow-sm border border-slate-100 hover:shadow-md transition-all">
                <stat.icon className="w-6 h-6 text-primary mb-2 opacity-80" />
                <span className="text-2xl font-bold text-slate-900">{stat.value}</span>
                <span className="text-xs text-slate-500 font-semibold uppercase tracking-wider">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
