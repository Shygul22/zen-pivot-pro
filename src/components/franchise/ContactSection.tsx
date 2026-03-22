import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Mail, Phone, MessageSquare, Loader2, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    package: 'Starter Package',
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
      
      console.log("Sending lead data:", formData);
      
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
        toast.success("Interest form submitted successfully!");
        setFormData({
          name: '',
          email: '',
          phone: '',
          location: '',
          package: 'Starter Package',
          message: ''
        });

      } else {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to submit form");
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error("Failed to submit form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section id="contact-franchise" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto rounded-[3.5rem] bg-slate-900 overflow-hidden shadow-2xl flex flex-col lg:flex-row border border-white/5">
          {/* Left Side: Info */}
          <div className="lg:w-2/5 p-12 lg:p-16 bg-gradient-to-br from-slate-800 to-slate-900 text-white space-y-10">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-black">Ready to Partner?</h2>
              <p className="text-slate-400 font-medium leading-relaxed">
                Fill out the form below or book a discovery call. Limited franchise slots are available per territory.
              </p>
            </div>

            <div className="space-y-6">
              {[
                { icon: Mail, label: "Email Us", value: "info@zenjourney.io" },
                { icon: Phone, label: "Call Us", value: "+91 9092406569" },
                { icon: MessageSquare, label: "WhatsApp", value: "+91 9629236257" },
              ].map((item, i) => (
                <div key={i} className="flex gap-5">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">{item.label}</div>
                    <div className="text-lg font-bold">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-8 border-t border-white/5">
              <Button
                variant="outline"
                className="w-full h-16 rounded-2xl border-2 border-primary/50 hover:bg-primary/10 text-primary font-black text-lg gap-3"
                onClick={() => window.open("https://forms.gle/WXKcB8c5hpCeorbk9", "_blank")}
              >
                <Calendar className="w-6 h-6" />
                Book Free Consultation
              </Button>
            </div>

            <p className="text-[10px] text-slate-500 font-black uppercase tracking-[0.3em] text-center pt-4 animate-pulse">
              Limited Franchise Slots Available
            </p>
          </div>

          {/* Right Side: Form */}
          <div className="lg:w-3/5 p-12 lg:p-16 bg-white space-y-8 relative">
            <AnimatePresence>
              {isSuccess && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute inset-0 z-20 bg-white/90 backdrop-blur-sm flex flex-col items-center justify-center text-center p-8 space-y-4"
                >
                  <div className="w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-10 h-10 text-emerald-500" />
                  </div>
                  <h3 className="text-3xl font-black text-slate-900">Request Received!</h3>
                  <p className="text-slate-600 font-medium max-w-xs">
                    Thank you for your interest. Our team will contact you within 24-48 hours.
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
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Full Name</label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="h-14 rounded-xl border-slate-200 bg-slate-50 focus:bg-white transition-all font-bold"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Email Address</label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@company.com"
                    className="h-14 rounded-xl border-slate-200 bg-slate-50 focus:bg-white transition-all font-bold"
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Phone Number</label>
                  <Input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+91 98765 43210"
                    className="h-14 rounded-xl border-slate-200 bg-slate-50 focus:bg-white transition-all font-bold"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Location / City</label>
                  <Input
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    required
                    placeholder="City Name"
                    className="h-14 rounded-xl border-slate-200 bg-slate-50 focus:bg-white transition-all font-bold"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Interested Package</label>
                <select
                  name="package"
                  value={formData.package}
                  onChange={handleChange}
                  className="flex h-14 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm ring-offset-background border-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20 font-bold transition-all focus:bg-white"
                >
                  <option>Starter Package</option>
                  <option>Growth Package</option>
                  <option>Master Package</option>
                  <option>I'm not sure yet</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Your Message</label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your background and interest..."
                  className="min-h-[120px] rounded-xl border-slate-200 bg-slate-50 focus:bg-white transition-all font-bold"
                />
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-16 rounded-2xl text-lg font-black shadow-xl shadow-primary/20 transition-all active:scale-95 bg-primary hover:bg-primary/90"
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

export default ContactSection;
