import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "What are the different franchise tiers available?",
      answer: "We offer three specialized packages: Starter (Solo license), Growth (Multi-Territory license), and Master (State-Wide license) to suit different ambitions and capacities."
    },
    {
      question: "What is the difference between Solo, Multi-Territory, and State-Wide licenses?",
      answer: "A Solo license covers a single territory. Multi-Territory allows operations in up to 3 cities, and State-Wide provides unlimited access across an entire state with exclusive market protection."
    },
    {
      question: "What kind of support is provided in each tier?",
      answer: "All tiers receive essential technical support. Growth partners get priority call support, while Master partners have a 24/7 dedicated account manager and strategic consulting."
    },
    {
      question: "Is training included in the package?",
      answer: "Yes, every tier includes training. We provide Level 1 (Basic Setup) for Starter, Level 2 (Sales Mastery) for Growth, and a Full Masterclass for our Master partners."
    },
    {
      question: "Can I upgrade my package later?",
      answer: "Absolutely. Many of our partners start with the Starter or Growth tier and upgrade to the Master level as their client base and territory footprint expand."
    }
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">Common Questions</h2>
            <p className="text-lg text-slate-600 font-medium">
              Everything you need to know about starting your ZenJourney franchise.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem 
                key={i} 
                value={`item-${i}`}
                className="bg-white border border-slate-200 rounded-3xl overflow-hidden px-6"
              >
                <AccordionTrigger className="text-left py-6 text-slate-900 font-black text-lg hover:no-underline hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-slate-600 font-medium leading-relaxed text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
