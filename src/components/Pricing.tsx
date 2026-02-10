import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { fadeInUp, staggerContainer, staggerItem, scaleIn } from "@/lib/animations";

const Pricing = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const plans = [
    {
      name: "Starter",
      description: "Perfect for small teams",
      price: "Contact Us",
      features: [
        "Up to 5 team members",
        "Basic collaboration tools",
        "Email support",
        "Weekly progress reports",
        "Standard integration",
      ],
      popular: false
    },
    {
      name: "Professional",
      description: "For growing businesses",
      price: "Custom",
      features: [
        "Up to 20 team members",
        "Advanced collaboration suite",
        "Priority support 24/7",
        "Daily progress reports",
        "Advanced integrations",
        "Dedicated account manager",
        "Custom workflows",
      ],
      popular: true
    },
    {
      name: "Enterprise",
      description: "Tailored for large organizations",
      price: "Custom",
      features: [
        "Unlimited team members",
        "Full platform access",
        "White-glove support",
        "Real-time reporting",
        "Custom integrations",
        "Dedicated success team",
        "Advanced analytics",
        "SLA guarantee",
      ],
      popular: false
    }
  ];

  return (
    <section ref={ref} id="pricing" className="py-24 px-4 bg-background">
      <div className="container mx-auto">
        <motion.div 
          initial="initial"
          animate={isVisible ? "animate" : "initial"}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
            Custom Pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Flexible plans designed to match your unique business needs
          </p>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="initial"
          animate={isVisible ? "animate" : "initial"}
          className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {plans.map((plan, index) => (
            <motion.div key={index} variants={staggerItem}>
              <motion.div
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Card 
                  className={`relative border-2 transition-all duration-300 h-full ${
                    plan.popular 
                      ? 'border-primary shadow-[var(--shadow-elegant)] bg-primary/5' 
                      : 'border-primary/20 hover:border-primary/40 bg-card'
                  }`}
                >
                  {plan.popular && (
                    <motion.div 
                      initial={{ y: -20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.5 }}
                      className="absolute -top-4 left-1/2 -translate-x-1/2"
                    >
                      <Badge className="bg-primary text-primary-foreground px-4 py-1">
                        Most Popular
                      </Badge>
                    </motion.div>
                  )}
                  
                  <CardHeader className="text-center pb-8">
                    <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                    <CardDescription className="text-base">{plan.description}</CardDescription>
                    <motion.div 
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={isVisible ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
                      transition={{ delay: index * 0.2 }}
                      className="pt-4"
                    >
                      <span className="text-4xl font-bold text-primary">{plan.price}</span>
                    </motion.div>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    <ul className="space-y-3">
                      {plan.features.map((feature, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                          transition={{ delay: 0.3 + idx * 0.05 }}
                          className="flex items-start gap-3"
                        >
                          <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>

                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button 
                        className="w-full"
                        variant="hero"
                        size="lg"
                        onClick={() => window.location.href = "mailto:shygulakbar@zenjourney.life"}
                      >
                        <Mail className="mr-2 h-4 w-4" />
                        Get Quote
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
