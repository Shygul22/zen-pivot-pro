import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Check, ShieldCheck, CreditCard, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [params, setParams] = useState({ plan: 'STARTER', price: '₹16,999' });
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const plan = searchParams.get('plan') || 'STARTER';
    const price = searchParams.get('price') || '₹16,999';
    setParams({ plan, price });
  }, [location]);

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      toast.success("Payment session created! Redirecting to dashboard...");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      
      <main className="pt-32 pb-24 container mx-auto px-4 max-w-6xl">
        <AnimatePresence mode="wait">
          {!isSuccess ? (
            <motion.div 
              key="checkout"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="grid lg:grid-cols-2 gap-12"
            >
              {/* Left Side: Form */}
              <div className="space-y-8">
                <div className="space-y-2">
                  <h1 className="text-3xl font-black text-slate-900">Checkout</h1>
                  <p className="text-slate-500 font-medium italic">Complete your franchise application process.</p>
                </div>

                <form onSubmit={handleCheckout} className="space-y-6 bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-xs font-black text-slate-400 uppercase tracking-widest">First Name</label>
                      <Input required className="border-slate-200 h-12" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Last Name</label>
                      <Input required className="border-slate-200 h-12" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Email Address</label>
                    <Input type="email" required className="border-slate-200 h-12" />
                  </div>

                  <div className="space-y-4 pt-4 border-t border-slate-100">
                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Payment Method</label>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-4 rounded-xl border-2 border-primary bg-primary/5">
                        <div className="flex items-center gap-3">
                          <CreditCard className="text-primary" />
                          <span className="font-bold text-slate-900">Secure Checkout</span>
                        </div>
                        <Check className="text-primary w-5 h-5" />
                      </div>
                    </div>
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isProcessing}
                    className="w-full h-14 rounded-xl text-lg font-black bg-primary hover:bg-primary/90 flex items-center justify-center gap-3"
                  >
                    {isProcessing ? (
                      <Loader2 className="animate-spin w-5 h-5" />
                    ) : (
                      <>
                        <ShieldCheck className="w-5 h-5" />
                        Pay {params.price} Now
                      </>
                    )}
                  </Button>
                  
                  <p className="text-[10px] text-slate-400 text-center font-bold">
                    Secure 256-bit SSL encrypted payment.
                  </p>
                </form>
              </div>

              {/* Right Side: Order Summary */}
              <div className="space-y-6">
                <div className="bg-slate-900 p-8 rounded-3xl text-white space-y-8">
                  <h3 className="text-xl font-bold uppercase tracking-widest text-slate-400">Order Summary</h3>
                  
                  <div className="flex justify-between items-center pb-6 border-b border-white/10">
                    <div>
                      <p className="font-black text-2xl text-primary">{params.plan} FRANCHISE</p>
                      <p className="text-sm font-medium text-slate-400 italic">One-time license fee</p>
                    </div>
                    <div className="text-2xl font-black">{params.price}</div>
                  </div>

                  <div className="space-y-4">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">What's included:</p>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3 text-sm font-medium text-slate-300">
                        <Check className="text-primary w-4 h-4 shrink-0" />
                        Lifetime Tech License
                      </li>
                      <li className="flex items-center gap-3 text-sm font-medium text-slate-300">
                        <Check className="text-primary w-4 h-4 shrink-0" />
                        Dedicated Brand Assets
                      </li>
                      <li className="flex items-center gap-3 text-sm font-medium text-slate-300">
                        <Check className="text-primary w-4 h-4 shrink-0" />
                        ZenJourney Training Suite
                      </li>
                    </ul>
                  </div>

                  <div className="pt-6 mt-6 border-t border-white/10 flex justify-between items-end">
                    <div className="text-xs font-bold text-slate-400 uppercase">Total Due</div>
                    <div className="text-4xl font-black text-white">{params.price}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div 
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-md mx-auto bg-white p-12 rounded-[3.5rem] border border-slate-200 text-center space-y-6 shadow-2xl"
            >
              <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-100">
                <Check className="w-10 h-10 text-green-500" />
              </div>
              <h1 className="text-3xl font-black text-slate-900">Success!</h1>
              <p className="text-slate-500 font-medium">
                Your payment was successful. Welcome to the ZenJourney team.
              </p>
              <Button onClick={() => navigate('/saas-franchise')} className="w-full h-12 rounded-xl font-bold">
                Go to Dashboard
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
};

export default Checkout;
