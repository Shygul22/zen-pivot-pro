import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calculator, TrendingUp, ShieldCheck, Briefcase, Minus, Plus, Info, Zap, Globe, Smartphone } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const SliderInput = ({ label, value, onChange, min = 0, max = 50, step = 1, icon: Icon, colorClass, profitPerClient }: any) => (
  <div className="space-y-4 p-6 rounded-3xl bg-slate-50 border border-slate-100 hover:border-primary/20 transition-all group">
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className={`p-2 rounded-xl bg-white shadow-sm border border-slate-100 ${colorClass}`}>
          <Icon className="w-5 h-5" />
        </div>
        <div className="flex flex-col">
          <span className="font-black text-slate-700 uppercase tracking-widest text-[10px]">{label}</span>
          <span className="text-[10px] font-bold text-primary italic">Profit: ₹{profitPerClient.toLocaleString('en-IN')}/client</span>
        </div>
      </div>
      <div className="text-xl font-black text-slate-900">{value}</div>
    </div>
    <input
      type="range"
      min={min}
      max={max}
      step={step}
      value={value}
      onChange={(e) => onChange(parseInt(e.target.value))}
      className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-primary"
    />
    <div className="flex justify-between text-[10px] font-black text-slate-400 uppercase tracking-widest">
      <span>{min} Clients</span>
      <span>{max} Max</span>
    </div>
  </div>
);

const EarningsCalculator = () => {
  const [appClients, setAppClients] = useState(4);
  const [webClients, setWebClients] = useState(3);
  const [crmClients, setCrmClients] = useState(3);
  const [whiteLabel, setWhiteLabel] = useState(false);

  // Constants based on split model
  const APP_PROFIT_PER = 4999;
  const WEB_PROFIT_PER = 29999;
  const CRM_PROFIT_PER = 39999;
  const ROYALTY_THRESHOLD = 25;
  const ROYALTY_RATE = 0.1;
  const WHITE_LABEL_RATE = 0.2;

  const calculations = useMemo(() => {
    const totalClients = appClients + webClients + crmClients;
    const totalGrossProfit = (appClients * APP_PROFIT_PER) + (webClients * WEB_PROFIT_PER) + (crmClients * CRM_PROFIT_PER);
    
    // 50-50 Split
    const basicYourShare = totalGrossProfit * 0.5;
    const zenShare = totalGrossProfit * 0.5;

    // Royalty Deduction (Applicable for clients > 25)
    let royaltyDeduction = 0;
    if (totalClients > ROYALTY_THRESHOLD) {
      const avgProfitPerClient = totalGrossProfit / totalClients;
      const chargeableClients = totalClients - ROYALTY_THRESHOLD;
      royaltyDeduction = chargeableClients * (avgProfitPerClient * ROYALTY_RATE);
    }

    // White Label Deduction (from Your Share)
    const whiteLabelDeduction = whiteLabel ? basicYourShare * WHITE_LABEL_RATE : 0;

    const finalYourShare = basicYourShare - royaltyDeduction - whiteLabelDeduction;

    return {
      totalClients,
      totalGrossProfit,
      basicYourShare,
      zenShare,
      royaltyDeduction,
      whiteLabelDeduction,
      finalYourShare
    };
  }, [appClients, webClients, crmClients, whiteLabel]);

  const formatCurrency = (val: number) => 
    new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(val);

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-primary/[0.02] -skew-y-6 translate-y-24 pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-20">
            <Badge variant="secondary" className="px-6 py-2 text-primary bg-primary/10 border-none rounded-full uppercase tracking-[0.2em] text-[10px] font-black">
              Project Your Earnings
            </Badge>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight">
              Example Split Model
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto font-black italic">
              Based on Client Requirements
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Controls */}
            <div className="lg:col-span-7 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <SliderInput
                  label="App Development"
                  icon={Zap}
                  value={appClients}
                  onChange={setAppClients}
                  max={100}
                  colorClass="text-blue-500"
                  profitPerClient={APP_PROFIT_PER}
                />
                <SliderInput
                  label="Website Building"
                  icon={Globe}
                  value={webClients}
                  onChange={setWebClients}
                  colorClass="text-indigo-500"
                  profitPerClient={WEB_PROFIT_PER}
                />
                <SliderInput
                  label="CRM & ERP Solutions"
                  icon={Briefcase}
                  value={crmClients}
                  onChange={setCrmClients}
                  colorClass="text-emerald-500"
                  profitPerClient={CRM_PROFIT_PER}
                />
                <div className="p-6 rounded-3xl bg-slate-900 text-white flex flex-col justify-between group transition-all">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-xl bg-white/10 border border-white/20">
                        <ShieldCheck className="w-5 h-5 text-primary" />
                      </div>
                      <span className="font-black uppercase tracking-widest text-[10px]">White Label Option</span>
                    </div>
                    <div
                      role="button"
                      onClick={() => setWhiteLabel(!whiteLabel)}
                      className={`w-12 h-6 rounded-full relative transition-all duration-300 ${whiteLabel ? 'bg-primary' : 'bg-slate-700'}`}
                    >
                      <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all duration-300 ${whiteLabel ? 'left-7' : 'left-1'}`} />
                    </div>
                  </div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-relaxed">
                    Deduct 20% for full brand white-labeling on all client dashboards.
                  </p>
                </div>
              </div>

              {/* Status Indicators */}
              <div className="flex flex-wrap gap-4">
                <div className={`px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest border transition-all ${calculations.totalClients > 25 ? 'bg-amber-50 border-amber-200 text-amber-600' : 'bg-emerald-50 border-emerald-200 text-emerald-600'}`}>
                  {calculations.totalClients > 25 ? 'Royalty Active (>25 Clients)' : 'Royalty Free (Tier 1)'}
                </div>
                {whiteLabel && (
                  <div className="px-4 py-2 rounded-full bg-indigo-50 border-indigo-200 text-indigo-600 text-[10px] font-black uppercase tracking-widest border">
                    White Label Applied
                  </div>
                )}
              </div>
            </div>

            {/* Results Display */}
            <div className="lg:col-span-5">
              <div className="p-10 rounded-[3.5rem] bg-white border border-slate-100 shadow-2xl shadow-slate-200/50 space-y-8 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -translate-y-16 translate-x-16 pointer-events-none" />
                
                <div className="space-y-2">
                  <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Calculated Monthly Revenue</div>
                  <motion.div 
                    key={calculations.finalYourShare}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-6xl font-black text-slate-900 tracking-tighter"
                  >
                    {formatCurrency(calculations.finalYourShare)}
                  </motion.div>
                  <p className="text-xs font-bold text-primary italic uppercase tracking-widest">Estimated net earnings (YOU)</p>
                </div>

                <div className="space-y-4 pt-8 border-t border-slate-100">
                  <div className="flex justify-between items-center group/row">
                    <span className="text-sm font-bold text-slate-500 group-hover/row:text-slate-900 transition-colors">Total Gross Profit</span>
                    <span className="text-sm font-black text-slate-900">{formatCurrency(calculations.totalGrossProfit)}</span>
                  </div>
                  <div className="flex justify-between items-center group/row">
                    <span className="text-sm font-bold text-slate-500 group-hover/row:text-slate-900 transition-colors">ZenJourney Split (50%)</span>
                    <span className="text-sm font-black text-slate-400">-{formatCurrency(calculations.zenShare)}</span>
                  </div>
                  <AnimatePresence>
                    {calculations.royaltyDeduction > 0 && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="flex justify-between items-center text-amber-600 group/row"
                      >
                        <span className="text-sm font-bold flex items-center gap-2">
                          Royalty (10% over 25) <Info className="w-3 h-3" />
                        </span>
                        <span className="text-sm font-black">-{formatCurrency(calculations.royaltyDeduction)}</span>
                      </motion.div>
                    )}
                    {calculations.whiteLabelDeduction > 0 && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="flex justify-between items-center text-indigo-600 group/row"
                      >
                        <span className="text-sm font-bold">White Label Fee (20%)</span>
                        <span className="text-sm font-black">-{formatCurrency(calculations.whiteLabelDeduction)}</span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div className="p-6 rounded-3xl bg-slate-50 border border-dash border-slate-200">
                  <div className="flex items-center gap-3 mb-2 text-primary">
                    <TrendingUp className="w-4 h-4" />
                    <span className="text-xs font-black uppercase tracking-widest">ROI Opportunity</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium">
                    At this volume, you recover your initial investment {calculations.finalYourShare > 29999 ? 'in under 1 month' : 'within average timeframe'}.
                  </p>
                </div>

                <Button className="w-full h-16 rounded-2xl bg-primary hover:bg-primary/90 text-lg font-black uppercase tracking-widest shadow-xl shadow-primary/20 group">
                  Start Your Sprint
                  <Calculator className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EarningsCalculator;
