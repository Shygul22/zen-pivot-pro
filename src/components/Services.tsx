import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Briefcase, Users, Target, Lightbulb, TrendingUp, Rocket, MessageSquare, BarChart3, Globe } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";

const Services = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const modelSteps = [
    {
      icon: Lightbulb,
      step: "01",
      title: "Consulting",
      description: "We map out your digital roadmap & customer journey. Identify revenue bottlenecks and opportunities.",
    },
    {
      icon: Rocket,
      step: "02",
      title: "Execution",
      description: "We build your custom website & app at Zero Development Cost. Strategy-first, not template-first.",
    },
    {
      icon: TrendingUp,
      step: "03",
      title: "Growth",
      description: "Monthly fee covers technical maintenance AND ongoing strategic support. We grow with you.",
    },
  ];



  return (
    <section ref={ref} id="services" className="py-24 px-4 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          initial="initial"
          animate={isVisible ? "animate" : "initial"}
          variants={fadeInUp}
          className="text-center space-y-4 mb-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            The Zenjourney Hybrid Model
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stop paying for code. Start paying for clarity and growth.
            We bridge the gap between "Business Goals" and "Technical Execution."
          </p>
        </motion.div>

        {/* Value Proposition Banner */}
        <motion.div
          initial="initial"
          animate={isVisible ? "animate" : "initial"}
          variants={fadeInUp}
          className="max-w-4xl mx-auto mb-16"
        >
          <Card className="p-8 border-primary/20 bg-primary/5">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <Target className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-lg mb-2">Security Advance</h3>
                <p className="text-sm text-muted-foreground">One-time non refundable deposit to begin partnership</p>
              </div>
              <div>
                <Briefcase className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-lg mb-2">Zero Dev Cost</h3>
                <p className="text-sm text-muted-foreground">We build your website & app at no development charge</p>
              </div>
              <div>
                <BarChart3 className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-lg mb-2">Monthly Retainer</h3>
                <p className="text-sm text-muted-foreground">Tech support + strategic consulting included</p>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* How It Works - The Model */}
        <motion.div
          initial="initial"
          animate={isVisible ? "animate" : "initial"}
          variants={fadeInUp}
          className="mb-20"
        >
          <h3 className="text-2xl font-bold text-center mb-10 text-foreground">How The Model Works</h3>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate={isVisible ? "animate" : "initial"}
            className="grid md:grid-cols-3 gap-6"
          >
            {modelSteps.map((step, index) => (
              <motion.div key={index} variants={staggerItem}>
                <motion.div
                  whileHover={{ y: -8, boxShadow: "var(--shadow-float)" }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="p-6 h-full transition-all duration-300 border-primary/20 bg-card/80 backdrop-blur-sm group cursor-pointer relative overflow-hidden">
                    <div className="absolute top-4 right-4 text-6xl font-bold text-foreground/5">
                      {step.step}
                    </div>
                    <div className="relative z-10">
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                        className="w-14 h-14 rounded-lg bg-primary flex items-center justify-center mb-4"
                      >
                        <step.icon className="w-7 h-7 text-primary-foreground" />
                      </motion.div>
                      <h4 className="text-xl font-semibold mb-3 text-foreground group-hover:text-secondary transition-colors">
                        {step.title}
                      </h4>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>



        {/* CTA */}
        <motion.div
          initial="initial"
          animate={isVisible ? "animate" : "initial"}
          variants={fadeInUp}
          className="text-center"
        >
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Your business deserves more than just a template. It deserves a strategy.
          </p>
          <Button
            variant="hero"
            size="lg"
            onClick={() => window.location.href = "https://wa.me/919092406569?text=Hi%2C%20I'm%20interested%20in%20the%20Growth%20Partner%20model"}
          >
            <MessageSquare className="w-5 h-5 mr-2" />
            DM "STRATEGY" to Start
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
