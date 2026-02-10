import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Globe } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";

const Contact = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const contacts = [
    {
      icon: Mail,
      title: "Email",
      values: ["hello@zenjourney.in", "zenjourney.in@gmail.com"],
      href: "mailto:hello@zenjourney.in"
    },
    {
      icon: Phone,
      title: "Phone",
      values: ["+91 9092406569", "+91 9629236257"],
      href: "tel:+919092406569"
    },
    {
      icon: Globe,
      title: "Website",
      values: ["ZenJourney.in"],
      href: "https://zenjourney.in"
    }
  ];

  return (
    <section ref={ref} id="contact" className="py-24 px-4 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial="initial"
          animate={isVisible ? "animate" : "initial"}
          variants={fadeInUp}
          className="text-center space-y-4 mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground">
            Ready to elevate your business globally? Let's start your ZenJourney today.
          </p>
        </motion.div>

        <motion.div
          initial="initial"
          animate={isVisible ? "animate" : "initial"}
          variants={fadeInUp}
        >
          <Card className="p-8 md:p-12 border-primary/20 bg-card/80 backdrop-blur-sm shadow-[var(--shadow-elegant)]">
            <motion.div
              variants={staggerContainer}
              className="grid md:grid-cols-3 gap-8"
            >
              {contacts.map((contact, index) => (
                <motion.a
                  key={index}
                  variants={staggerItem}
                  href={contact.href}
                  target={contact.title === "Website" ? "_blank" : undefined}
                  rel={contact.title === "Website" ? "noopener noreferrer" : undefined}
                  whileHover={{ y: -5, scale: 1.05 }}
                  className="flex flex-col items-center text-center space-y-3 p-6 rounded-lg hover:bg-primary/5 transition-all group"
                >
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                    className="w-14 h-14 rounded-full bg-primary flex items-center justify-center group-hover:shadow-[var(--glow-hover)] transition-all"
                  >
                    <contact.icon className="w-7 h-7 text-primary-foreground" />
                  </motion.div>
                  <div>
                    <h3 className="font-semibold text-lg text-foreground mb-1 group-hover:text-primary transition-colors">
                      {contact.title}
                    </h3>
                    <div className="flex flex-col gap-1">
                      {contact.values.map((val, i) => (
                        <p key={i} className="text-muted-foreground text-sm">{val}</p>
                      ))}
                    </div>
                  </div>
                </motion.a>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.6 }}
              className="mt-12 text-center"
            >
              <motion.div
                whileHover={{ scale: 1.05, boxShadow: "var(--glow-hover)" }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  variant="hero"
                  className="text-lg px-10 py-6"
                  onClick={() => window.location.href = 'mailto:hello@zenjourney.in'}
                >
                  Start Your Journey
                </Button>
              </motion.div>
            </motion.div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
