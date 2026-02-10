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
    category: "App & Web Development",
    questions: [
      {
        q: "What is included in the package?",
        a: "The ₹30,600 package covers ONE platform: either a Native Android App OR a Website Application. It includes Free Domain & Hosting (ZenJourney owned), Play Store publishing, and 3 months of basic maintenance."
      },
      {
        q: "Can I get both an App and a Website?",
        a: "The standard Startup Plan covers one platform. Developing both a Website and an Android App is subject to additional fees as per our Service Agreement."
      },
      {
        q: "Do I own the source code?",
        a: "Under the Startup Plan, the Intellectual Property (IP) and Source Code remain with ZenJourney to keep development costs affordable. However, you retain full ownership of your content, media, and user data."
      },
      {
        q: "How long does development take?",
        a: "We guarantee project delivery in under 8 weeks."
      }
    ]
  },
  {
    category: "Eligibility & Policies",
    questions: [
      {
        q: "Who is eligible for this Startup Plan?",
        a: "This plan is exclusive to Udyam/MSME registered businesses with a yearly customer base of fewer than 1,000."
      },
      {
        q: "What about Domain & Hosting ownership?",
        a: "We provide Free Domain and Hosting to reduce your costs, but ownership of these assets remains non-transferable and stays with ZenJourney."
      },
      {
        q: "Is the payment refundable?",
        a: "No, all payments including the advance and final balance are non-refundable once services have commenced."
      }
    ]
  },
  {
    category: "Business Support",
    questions: [
      {
        q: "What does the Business Support plan cover?",
        a: "For ₹5,000/month, you get day-to-day technical assistance, system monitoring, bug fixes, security updates, and continuous feature enhancements."
      },
      {
        q: "How does the maintenance renewal work?",
        a: "After the initial 3-month period, an Auto-Pay system is enabled for the monthly maintenance fee to ensure your services remain uninterrupted."
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
