import React from 'react';
import { motion } from "framer-motion";
import { 
  Compass, 
  Smartphone, 
  Globe, 
  Settings, 
  Briefcase,
  CheckCircle2,
  Code2,
  Database,
  UserCheck,
  Users
} from "lucide-react";

const BusinessOverview = () => {
  const centralTeam = [
    { title: "Development (Apps & Websites)", icon: Code2, color: "text-blue-500" },
    { title: "Server & SaaS management", icon: Database, color: "text-indigo-500" },
    { title: "QA & deployment", icon: Settings, color: "text-slate-500" },
    { title: "Technical support", icon: UserCheck, color: "text-emerald-500" }
  ];

  const partnerRole = [
    { title: "Lead generation", icon: Users, color: "text-primary" },
    { title: "Client communication", icon: Globe, color: "text-primary" },
    { title: "Sales closing", icon: Briefcase, color: "text-primary" },
    { title: "Basic support", icon: Compass, color: "text-primary" }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-100 text-slate-500 font-black uppercase tracking-[0.2em] text-[10px] mb-4">
              <span>Business Overview</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight">
              ZenJourney SaaS Franchise Model
            </h2>
            <p className="text-lg text-primary font-black uppercase tracking-widest bg-primary/5 inline-block px-6 py-2 rounded-full border border-primary/10">
              Paytm Integrated Business System
            </p>
          </div>

          <div className="space-y-12">
            <div className="p-10 rounded-[3rem] bg-slate-50 border border-slate-100 shadow-xl shadow-slate-200/50">
              <h3 className="text-2xl font-black text-slate-800 mb-8 border-b border-slate-200 pb-4">
                Hybrid SaaS + Service Model
              </h3>
              <p className="text-lg text-slate-600 font-medium leading-relaxed mb-12">
                Experience the best of both worlds. ZenJourney operates as a unique hybrid system where partners can scale both recurring revenue and high-ticket service contracts.
              </p>

              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <h4 className="text-sm font-black uppercase tracking-[0.2em] text-slate-400 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300" /> CENTRAL TEAM (ZENJOURNEY)
                  </h4>
                  <div className="space-y-4">
                    {centralTeam.map((item, i) => (
                      <div key={i} className="flex items-center gap-4 bg-slate-100/50 p-4 rounded-2xl border border-slate-200 group transition-all">
                        <item.icon className={`w-6 h-6 ${item.color}`} />
                        <span className="font-bold text-slate-600">{item.title}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-6">
                  <h4 className="text-sm font-black uppercase tracking-[0.2em] text-primary flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" /> FRANCHISE PARTNER ROLE
                  </h4>
                  <div className="space-y-4">
                    {partnerRole.map((item, i) => (
                      <div key={i} className="flex items-center gap-4 bg-white p-4 rounded-2xl border border-slate-100 shadow-sm group hover:border-primary/20 transition-all">
                        <item.icon className={`w-6 h-6 ${item.color}`} />
                        <span className="font-bold text-slate-700">{item.title}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center p-8 bg-slate-900 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-[80px] -z-10 group-hover:bg-primary/30 transition-all"></div>
              <p className="text-lg font-bold text-slate-300">
                Franchise partners act as <span className="text-primary italic">local digital solution providers</span>, while HQ drives the technical innovation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessOverview;
