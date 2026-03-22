import React from 'react';
import { motion } from "framer-motion";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const ServiceRevenue = () => {
  const modelData = [
    { 
      service: "App Development", 
      price: "₹34,999", 
      partner: "₹10K-₹15K", 
      you: "Remaining",
      highlight: true
    },
    { 
      service: "Website", 
      price: "₹15K-₹25K", 
      partner: "30-40%", 
      you: "60-70%",
      highlight: false
    },
    { 
      service: "Custom SaaS", 
      price: "₹50K+", 
      partner: "Negotiable", 
      you: "High margin",
      highlight: false
    }
  ];

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight">
              Service-Based Revenue
            </h2>
            <p className="text-xl text-slate-600 font-bold italic">
              Franchise partners sell services <span className="text-primary mx-2">→</span> ZenJourney fulfills.
            </p>
          </div>

          <div className="bg-white rounded-[3rem] border border-slate-200 overflow-hidden shadow-2xl shadow-slate-200/50">
            <div className="p-8 border-b border-slate-100 bg-slate-50/50">
              <h3 className="text-2xl font-black text-slate-800 flex items-center gap-3">
                Example Split Model
                <Badge variant="secondary" className="bg-primary/10 text-primary border-none font-black uppercase tracking-widest text-[10px] px-3">
                  High Margin
                </Badge>
              </h3>
            </div>
            
            <div className="overflow-x-auto">
              <Table>
                <TableHeader className="bg-slate-50">
                  <TableRow className="hover:bg-transparent border-slate-100">
                    <TableHead className="w-[30%] text-slate-400 font-black uppercase tracking-widest text-[10px] py-6 pl-8">Service</TableHead>
                    <TableHead className="text-slate-400 font-black uppercase tracking-widest text-[10px] py-6">Price</TableHead>
                    <TableHead className="text-slate-400 font-black uppercase tracking-widest text-[10px] py-6 text-primary">YOU</TableHead>
                    <TableHead className="text-slate-400 font-black uppercase tracking-widest text-[10px] py-6 text-right pr-8">ZENJOURNEY</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {modelData.map((item, i) => (
                    <TableRow key={i} className={`group hover:bg-slate-50/50 transition-colors border-slate-100 ${item.highlight ? 'bg-primary/[0.02]' : ''}`}>
                      <TableCell className="font-black text-slate-900 py-6 pl-8 text-lg">
                        {item.service}
                      </TableCell>
                      <TableCell className="font-bold text-slate-600 py-6">
                        {item.price}
                      </TableCell>
                      <TableCell className="font-black text-primary py-6 italic">
                        {item.partner}
                      </TableCell>
                      <TableCell className="font-black text-slate-900 py-6 text-right pr-8">
                        {item.you}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            
            <div className="p-8 bg-primary/5 border-t border-slate-100 text-center">
              <p className="text-sm font-black text-primary uppercase tracking-[0.2em]">
                Maximize Your Potential with Custom Packages
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceRevenue;
