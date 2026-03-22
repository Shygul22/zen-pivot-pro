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
      price: "Coming Soon", 
      partner: "Coming Soon", 
      you: "TBD",
      highlight: true
    },
    { 
      service: "Website", 
      price: "Coming Soon", 
      partner: "Coming Soon", 
      you: "TBD",
      highlight: false
    },
    { 
      service: "Custom SaaS", 
      price: "Coming Soon", 
      partner: "Coming Soon", 
      you: "TBD",
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
            
            <div className="p-8 bg-primary/5 border-t border-slate-100 text-center space-y-4">
              <p className="text-sm font-black text-primary uppercase tracking-[0.2em]">
                Maximize Your Potential with Custom Packages
              </p>
              
              <div className="pt-6 border-t border-primary/10 mt-6 grid md:grid-cols-2 gap-8 items-center text-left">
                <div className="space-y-2">
                  <h4 className="text-lg font-black text-slate-900 uppercase tracking-tight">Ongoing Royalty</h4>
                  <p className="text-sm text-slate-600 font-medium leading-relaxed">
                    Applicable <span className="text-primary font-bold">after 25 active clients</span>. 
                    Royalty fee per client ranges from <span className="text-primary font-bold">4% to 15%</span>, 
                    scaling based on the Franchise net income.
                  </p>
                </div>
                <div className="bg-white/50 p-4 rounded-2xl border border-primary/10 backdrop-blur-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-slate-400 uppercase">Retention Threshold</span>
                    <span className="text-xs font-black text-primary font-mono">25 CLIENTS</span>
                  </div>
                  <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                    <div className="bg-primary h-full w-[40%]" />
                  </div>
                  <p className="text-[10px] text-slate-400 font-bold mt-2 uppercase tracking-widest text-right">Royalty Free Until 25 Clients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceRevenue;
