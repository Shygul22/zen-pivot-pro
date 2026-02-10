import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, MessageSquare, Cog, Rocket } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";

const Process = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const steps = [
    {
      icon: MessageSquare,
      number: "01",
      title: "Discovery Call",
      description: "We ask 'How do you want to grow?' not 'What colors do you want?' Free consultation to understand your business."
    },
    {
      icon: Cog,
      number: "02",
      title: "Strategy Design",
      description: "We map your digital roadmap, analyze your market, and define your target audience before writing a single line of code."
    },
    {
      icon: CheckCircle2,
      number: "03",
      title: "Agile Development",
      description: "We build your custom Android app and website with speed and precision, delivering high-quality results in under 8 weeks."
    },
    {
      icon: Rocket,
      number: "04",
      title: "Long-Term Support",
      description: "We don't just hand you an app and walk away. Continuous technical support and maintenance to ensure your business keeps growing."
    }
  ];

  return (
    <section ref={ref} id="process" className="py-24 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <motion.div
          initial="initial"
          animate={isVisible ? "animate" : "initial"}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            The Strategy-First Process
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From business problem to digital solution — we partner with you every step of the way
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate={isVisible ? "animate" : "initial"}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div key={index} variants={staggerItem}>
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="border-primary/10 bg-card h-full hover:shadow-[var(--shadow-elegant)] transition-all duration-300 group cursor-pointer">
                    <CardContent className="p-6 space-y-4">
                      <div className="flex items-start justify-between">
                        <motion.div
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                          className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors"
                        >
                          <Icon className="w-7 h-7 text-primary" />
                        </motion.div>
                        <motion.span
                          initial={{ opacity: 0.1 }}
                          whileHover={{ opacity: 0.3, scale: 1.1 }}
                          className="text-5xl font-bold text-primary/10 group-hover:text-primary/20 transition-colors"
                        >
                          {step.number}
                        </motion.span>
                      </div>
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Process;
