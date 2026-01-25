import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    category: "The Hybrid Model",
    questions: [
      {
        q: "What is the Zenjourney Hybrid Model?",
        a: "Unlike traditional agencies that charge hefty upfront fees, our Hybrid Model combines Business Consulting with Zero-Cost Web Development. You pay a non refundable security advance, we build your website & app for free, and you pay a monthly retainer that covers both technical maintenance AND ongoing strategic support."
      },
      {
        q: "How is this different from hiring a regular web agency?",
        a: "Regular agencies ask 'What colors do you want?' — we ask 'How do you want to grow?' We're not just developers; we're Growth Partners. We analyze your market, define your audience, and build a digital presence that solves real business problems. You get strategy + execution from one partner."
      },
      {
        q: "What does 'Zero Development Cost' actually mean?",
        a: "It means exactly that — you don't pay for the website & app development itself. No ₹50,000 or ₹1,00,000 upfront development charges. We invest in building your website & app because we earn through the ongoing monthly partnership. Your success is our success."
      },
    ]
  },
  {
    category: "Security Advance",
    questions: [
      {
        q: "What is the Security Advance?",
        a: "The Security Advance is a one-time non refundable deposit paid before we begin work. It demonstrates commitment from both sides and covers our initial investment in your project. Think of it as a good-faith deposit, not a payment for services."
      },
      {
        q: "Is the Security Advance refundable?",
        a: "No, the Security Advance is non-refundable. It covers our initial strategic investment and resource allocation for your project. This ensures commitment from both sides as we invest our expertise into your business growth."
      },
      {
        q: "How much is the Security Advance?",
        a: "The Security Advance varies based on project complexity and scope. We discuss this during your free consultation call after understanding your specific requirements. It's always transparent with no hidden charges."
      },
    ]
  },
  {
    category: "Monthly Retainer",
    questions: [
      {
        q: "What's included in the Monthly Retainer?",
        a: "The retainer covers two things: Technical Maintenance (hosting, backups, security updates, bug fixes, minor updates) AND Strategic Support (depending on your tier — this can include monthly strategy calls, SEO audits, content suggestions, and business reviews)."
      },
      {
        q: "What's the difference between Basic Digital and Growth Partner tiers?",
        a: "Basic Digital covers essential technical maintenance — keeping your website running smoothly. Growth Partner includes everything in Basic PLUS monthly 1-hour strategy calls, SEO optimization, content strategy suggestions, priority support, and quarterly business reviews. It's for businesses serious about growth."
      },
      {
        q: "Can I upgrade or downgrade my tier later?",
        a: "Absolutely! Start with Basic Digital and upgrade to Growth Partner when you're ready for strategic support. We're flexible because we want the partnership to work for your current business stage."
      },
      {
        q: "What happens if I want to cancel?",
        a: "We believe in earning your business every month. If you wish to cancel, provide 30 days notice as per our agreement. There are no long-term lock-ins. We'll ensure a smooth handover of all your assets."
      },
    ]
  },
  {
    category: "Getting Started",
    questions: [
      {
        q: "How do I get started?",
        a: "Simple! Book a free consultation call via WhatsApp (+91 9092406569) or email. We'll discuss your business goals, explain the model in detail, and determine if we're the right fit for each other. No obligations, no pressure."
      },
      {
        q: "How long does it take to build my website?",
        a: "Typical timelines are 2-4 weeks depending on complexity. But remember, we start with strategy first — understanding your business takes priority over rushing to code. Quality and alignment matter more than speed."
      },
      {
        q: "Do I own my website?",
        a: "Yes, you own your content, branding, and business assets. The technical infrastructure is maintained by us as part of the retainer. If you ever leave, we provide a complete handover of your website & app files and data."
      },
    ]
  }
];

const FAQ = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section ref={ref} id="faq" className="py-24 px-4 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto">
        <motion.div
          initial="initial"
          animate={isVisible ? "animate" : "initial"}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <HelpCircle className="w-5 h-5 text-secondary" />
            <span className="text-foreground font-semibold">Got Questions?</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground text-glow">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about our Hybrid Model, pricing, and partnership
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate={isVisible ? "animate" : "initial"}
          className="max-w-4xl mx-auto space-y-10"
        >
          {faqs.map((category, catIndex) => (
            <motion.div key={catIndex} variants={staggerItem}>
              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary text-sm font-bold">
                  {catIndex + 1}
                </span>
                {category.category}
              </h3>
              <Accordion type="single" collapsible className="space-y-3">
                {category.questions.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`${catIndex}-${index}`}
                    className="border border-primary/10 rounded-lg px-6 bg-card/50 backdrop-blur-sm data-[state=open]:bg-primary/5 transition-colors"
                  >
                    <AccordionTrigger className="text-left hover:no-underline py-5">
                      <span className="font-medium text-foreground pr-4">{faq.q}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial="initial"
          animate={isVisible ? "animate" : "initial"}
          variants={fadeInUp}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-4">
            Still have questions? We're happy to help.
          </p>
          <a
            href="https://wa.me/919092406569?text=Hi%2C%20I%20have%20a%20question%20about%20the%20Zenjourney%20model"
            className="inline-flex items-center gap-2 text-secondary font-semibold hover:underline"
          >
            Chat with us on WhatsApp →
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
