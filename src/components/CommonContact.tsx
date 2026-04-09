import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Mail, Phone, MessageSquare, Loader2, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

const CommonContact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    package: 'General Inquiry',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const FORMSPREE_URL = "https://formspree.io/f/xpqygwre";
      
      const response = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSuccess(true);
        toast.success("Message sent successfully!");
        setFormData({
          name: '',
          email: '',
          phone: '',
          location: '',
          package: 'General Inquiry',
          message: ''
        });
      } else {
        throw new Error("Failed to submit form");
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto rounded-[2rem] md:rounded-[3.5rem] bg-slate-900 overflow-hidden shadow-2xl flex flex-col lg:flex-row border border-white/5">
          {/* Left Side: Info (Sidebar) */}
          <div className="lg:w-2/5 p-8 lg:p-16 bg-gradient-to-br from-slate-800 to-slate-900 text-white space-y-10">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-5xl font-black tracking-tight">Ready to Partner?</h2>
              <p className="text-slate-400 font-medium leading-relaxed">
                Fill out the form below or book a discovery call. Limited franchise slots are available per territory.
              </p>
            </div>

            <div className="space-y-6">
              {[
                { icon: Mail, label: "EMAIL US", value: "info@zenjourney.io", href: "mailto:info@zenjourney.io" },
                { icon: Phone, label: "CALL US", value: "+91 9092406569", href: "tel:+919092406569" },
                { icon: MessageSquare, label: "WHATSAPP", value: "+91 9629236257", href: "https://wa.me/919629236257" },
                { icon: CheckCircle2, label: "CIN NO", value: "U62013TN2026PTC191867", href: "#" },
              ].map((item, i) => (
                <a 
                  key={i} 
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-5 group hover:bg-white/5 p-2 rounded-2xl transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 group-hover:border-primary/50 transition-all">
                    <item.icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                  </div>
                  <div>
                    <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{item.label}</div>
                    <div className="text-lg font-bold group-hover:text-primary transition-colors">{item.value}</div>
                  </div>
                </a>
              ))}
            </div>

            <div className="pt-8 border-t border-white/5">
              <Button
                variant="outline"
                className="w-full h-16 rounded-2xl border-2 border-primary/50 hover:bg-primary/10 text-primary font-black text-lg gap-3 bg-transparent"
                onClick={() => window.open("https://forms.gle/WXKcB8c5hpCeorbk9", "_blank")}
              >
                <Calendar className="w-6 h-6" />
                Book Free Consultation
              </Button>
            </div>

            <p className="text-[10px] text-slate-500 font-black uppercase tracking-[0.3em] text-center pt-4 opacity-50">
              Limited Slots Available
            </p>
          </div>

          {/* Right Side: Form */}
          <div className="lg:w-3/5 p-8 lg:p-16 bg-white space-y-8 relative">
            <AnimatePresence>
              {isSuccess && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="absolute inset-0 z-20 bg-white/95 backdrop-blur-md flex flex-col items-center justify-center text-center p-8 space-y-4"
                >
                  <div className="w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-10 h-10 text-emerald-500" />
                  </div>
                  <h3 className="text-3xl font-black text-slate-900">Request Received!</h3>
                  <p className="text-slate-600 font-medium max-w-xs mx-auto">
                    Thank you for reaching out. Our team will contact you within 24-48 hours.
                  </p>
                  <Button
                    variant="outline"
                    className="mt-6 rounded-xl font-bold"
                    onClick={() => setIsSuccess(false)}
                  >
                    Send Another Request
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-500 uppercase tracking-widest ml-1">Full Name</label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="h-14 rounded-xl border-slate-200 bg-slate-50 focus:bg-white transition-all font-bold placeholder:font-normal"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-500 uppercase tracking-widest ml-1">Email Address</label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@company.com"
                    className="h-14 rounded-xl border-slate-200 bg-slate-50 focus:bg-white transition-all font-bold placeholder:font-normal"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-500 uppercase tracking-widest ml-1">Phone Number</label>
                  <Input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+91 98765 43210"
                    className="h-14 rounded-xl border-slate-200 bg-slate-50 focus:bg-white transition-all font-bold placeholder:font-normal"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-500 uppercase tracking-widest ml-1">Location / City</label>
                  <Input
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    required
                    placeholder="City Name"
                    className="h-14 rounded-xl border-slate-200 bg-slate-50 focus:bg-white transition-all font-bold placeholder:font-normal"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black text-slate-500 uppercase tracking-widest ml-1">Interested Package</label>
                <div className="relative">
                  <select
                    name="package"
                    value={formData.package}
                    onChange={handleChange}
                    className="flex h-14 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 font-bold transition-all focus:bg-white appearance-none cursor-pointer"
                  >
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Starter Package (Franchise)">Starter Package (Franchise)</option>
                    <option value="Growth Package (Franchise)">Growth Package (Franchise)</option>
                    <option value="Master Package (Franchise)">Master Package (Franchise)</option>
                    <option value="App Development">Custom App Development</option>
                    <option value="Web Development">Website Development</option>
                    <option value="Business Support">Business Support Services</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none opacity-50">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black text-slate-500 uppercase tracking-widest ml-1">Your Message</label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your background and interest..."
                  className="min-h-[120px] rounded-xl border-slate-200 bg-slate-50 focus:bg-white transition-all font-bold placeholder:font-normal resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-16 rounded-2xl text-lg font-black shadow-xl shadow-primary/20 transition-all active:scale-[0.98] bg-primary hover:bg-primary/90 text-white"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  "Submit Interest Form"
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommonContact;
