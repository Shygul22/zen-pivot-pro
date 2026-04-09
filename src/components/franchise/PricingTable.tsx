import React from 'react';
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Info, Check, Minus } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const PricingTable = () => {
  const navigate = useNavigate();
  const packages = [
    {
      name: "STARTER",
      description: "Perfect for individual entrepreneurs starting their journey.",
      price: "₹16,999",
      features: [
        "Core SaaS Platform Access",
        "Lifetime Product Upgrades",
        "Standard HQ Tech Support",
        "Standard Onboarding Training",
        "Solo Territory Rights",
        "25 Client Royalty-Free"
      ],
      popular: false
    },
    {
      name: "GROWTH",
      description: "Designed for small teams looking to scale quickly.",
      price: "₹29,999",
      features: [
        "Everything in Starter +",
        "CRM & Partner Tools",
        "3 Projects Client Portfolio",
        "Priority Support Level",
        "Multi-Territory Rights",
        "Advanced Marketing Kit"
      ],
      popular: true
    },
    {
      name: "MASTER",
      description: "Maximum authority and revenue potential for area developers.",
      price: "₹62,999",
      features: [
        "Everything in Growth +",
        "Full Client Portfolio Access",
        "Dedicated Support Manager",
        "State-wide Licensing",
        "White Label Option Ready",
        "Premium Strategic Consulting"
      ],
      popular: false
    }
  ];

  const comparisonData = [
    {
      category: "ONE-TIME FEE",
      rows: [
        { 
          feature: "One-Time Investment", 
          starter: "₹16,999", 
          growth: "₹29,999", 
          master: "₹62,999",
          details: "180 DAYS REFUND GUARANTEE: If you have zero active clients within 180 days, we return your investment (Starter tier is eligible for a 50% refund)."
        },
      ]
    },
    {
      category: "CORE SAAS PLATFORM",
      rows: [
        { feature: "Core ZenJourney SaaS Platform", starter: true, growth: true, master: true },
        { feature: "Lifetime Product Upgrades", starter: true, growth: true, master: true },
        { feature: "CRM & Partner Tools", starter: false, growth: true, master: true },
        { feature: "ZenJourney Clients Portfolio", starter: false, growth: "3 Projects", master: true },
      ]
    },
    {
      category: "SUPPORT LEVEL",
      rows: [
        { feature: "HQ Tech Support", starter: "Standard", growth: "Priority", master: "Dedicated" },
        { feature: "Closing Support", starter: "Standard", growth: "Priority", master: "Dedicated" },
        { feature: "Customer Onboarding Handled", starter: "Standard", growth: "Priority", master: "Dedicated" },
      ]
    },
    {
      category: "TRAINING & MATERIALS",
      rows: [
        { feature: "Onboarding Training", starter: true, growth: true, master: true },
        { feature: "Marketing Materials", starter: true, growth: true, master: true },
      ]
    },
    {
      category: "ROYALTY & FEES",
      rows: [
        { feature: "Royalty Free Until", starter: "25 clients", growth: "25 clients", master: "25 clients" },
        { 
          feature: "Royalty (after 25 clients)", 
          starter: "4% to 15%", 
          growth: "4% to 15%", 
          master: "4% to 15%",
          details: "Ongoing Royalty: Applicable after 25 active clients. Royalty fee per client ranges from 4% to 15%, scaling based on the Franchise net income."
        },
        { 
          feature: "White Label Fee", 
          starter: "15% to 30%", 
          growth: "15% to 30%", 
          master: "15% to 30%",
          details: "Ongoing White Label fee per client ranges from 15% to 30%, scaling based on the Franchise net income."
        },
      ]
    },
    {
      category: "TERRITORY RIGHTS",
      rows: [
        { feature: "Solo Territory", starter: true, growth: true, master: true },
        { feature: "Multi-Territory Rights", starter: false, growth: true, master: true },
        { feature: "State-wide License", starter: false, growth: false, master: true },
      ]
    }
  ];

  const renderValue = (val) => {
    if (val === true) return <Check className="w-5 h-5 text-emerald-500 mx-auto" />;
    if (val === false) return <Minus className="w-5 h-5 text-slate-300 mx-auto" />;
    return <span className="text-sm font-bold text-slate-700">{val}</span>;
  };

  return (
    <section className="py-24 bg-white" id="pricing">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 uppercase tracking-tight">Franchise Packages</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-medium">
            Select the tier that aligns with your ambition and capacity. Every plan includes the core tech.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-24">
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
                  : "border-slate-200 bg-white shadow-xl shadow-slate-100/50"
              } space-y-8 flex flex-col`}
            >
              {pkg.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-[0.2em] shadow-lg">
                  Most Popular
                </div>
              )}

              <div className="space-y-2 text-center">
                <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight">{pkg.name}</h3>
                <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">{pkg.description}</p>
              </div>

              <div className="text-center py-6 border-y border-slate-100">
                <div className="text-5xl font-black text-primary tracking-tighter">{pkg.price}</div>
                <div className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] pt-2">One-time Investment</div>
                <div className="text-[9px] font-bold text-primary/60 uppercase mt-1 tracking-tighter">
                  180-Day "No Clients" Refund Guarantee*
                </div>
              </div>

              <div className="flex-1 space-y-4">
                {pkg.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                      <Check className="w-3 h-3 text-primary stroke-[3]" />
                    </div>
                    <span className="text-sm font-bold text-slate-600 tracking-tight">{feature}</span>
                  </div>
                ))}
              </div>

              <Button 
                variant={pkg.popular ? "default" : "outline"}
                className={`w-full h-14 font-black rounded-2xl text-sm uppercase tracking-widest ${pkg.popular ? "shadow-xl bg-primary hover:bg-primary/90" : "border-2 border-slate-200 hover:bg-slate-50 text-slate-600"}`}
                onClick={() => navigate("/contact")}
              >
                Get Started
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight">Detailed Comparison</h3>
            <p className="text-sm text-slate-500 font-bold uppercase tracking-widest">Everything you need to know about our tiers</p>
          </div>

          <div className="bg-white rounded-[2.5rem] border border-slate-200 overflow-hidden shadow-2xl shadow-slate-200/50">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader className="bg-slate-50/50">
                  <TableRow className="hover:bg-transparent border-slate-100">
                    <TableHead className="w-[40%] text-slate-400 font-black uppercase tracking-widest text-[10px] py-6 pl-8">Feature</TableHead>
                    <TableHead className="text-center text-slate-900 font-black uppercase tracking-widest text-[10px] py-6">Starter</TableHead>
                    <TableHead className="text-center text-primary font-black uppercase tracking-widest text-[10px] py-6">Growth</TableHead>
                    <TableHead className="text-center text-slate-900 font-black uppercase tracking-widest text-[10px] py-6">Master</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {comparisonData.map((cat, idx) => (
                    <React.Fragment key={idx}>
                      <TableRow className="bg-slate-50/30 hover:bg-slate-50/30">
                        <TableCell colSpan={4} className="py-4 pl-8">
                          <span className="text-[10px] font-black text-primary uppercase tracking-[0.2em]">{cat.category}</span>
                        </TableCell>
                      </TableRow>
                      {cat.rows.map((row, rowIdx) => (
                        <TableRow key={rowIdx} className="group hover:bg-slate-50/50 transition-colors border-slate-100">
                          <TableCell className="font-bold text-slate-600 py-4 pl-8">
                            <div className="flex items-center gap-2">
                              {row.feature}
                              {row.details && (
                                <TooltipProvider>
                                  <Tooltip>
                                    <TooltipTrigger>
                                      <Info className="w-3.5 h-3.5 text-slate-300 hover:text-primary transition-colors" />
                                    </TooltipTrigger>
                                    <TooltipContent className="max-w-xs p-4 bg-slate-900 text-white rounded-xl border-none shadow-2xl">
                                      <p className="text-xs font-medium leading-relaxed">{row.details}</p>
                                    </TooltipContent>
                                  </Tooltip>
                                </TooltipProvider>
                              )}
                            </div>
                          </TableCell>
                          <TableCell className="text-center py-4">{renderValue(row.starter)}</TableCell>
                          <TableCell className="text-center py-4">{renderValue(row.growth)}</TableCell>
                          <TableCell className="text-center py-4">{renderValue(row.master)}</TableCell>
                        </TableRow>
                      ))}
                    </React.Fragment>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger className="flex items-center gap-2 mx-auto text-slate-400 font-bold text-sm bg-slate-50 px-6 py-3 rounded-full border border-slate-100 hover:text-primary transition-all hover:shadow-lg">
                <Info className="w-4 h-4" />
                <span>Need a custom plan?</span>
              </TooltipTrigger>
              <TooltipContent className="bg-slate-900 text-white border-none rounded-xl p-3">
                <p className="text-xs font-bold">We offer customized agreements for existing agencies.</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </section>
  );
};

export default PricingTable;
