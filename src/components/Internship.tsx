import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, Award, Briefcase, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";
import { Link } from "react-router-dom";

const Internship = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const benefits = [
    {
      icon: GraduationCap,
      title: "Learning",
      description: "Hands-on experience with modern tech stacks like React, Vite, and Supabase."
    },
    {
      icon: Briefcase,
      title: "Real Projects",
      description: "Contribute to live projects and see your work in production."
    },
    {
      icon: Award,
      title: "Certification",
      description: "Receive a completion certificate and a letter of recommendation."
    }
  ];

  return (
    <section ref={ref} id="internship" className="py-24 px-4 bg-muted/30">
      <div className="container mx-auto">
        <motion.div
          initial="initial"
          animate={isVisible ? "animate" : "initial"}
          variants={fadeInUp}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Launch Your Career
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join ZenJourney's internship program and gain the experience you need to excel in the tech industry.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate={isVisible ? "animate" : "initial"}
          className="grid md:grid-cols-3 gap-8 mb-12"
        >
          {benefits.map((benefit, index) => (
            <motion.div key={index} variants={staggerItem}>
              <Card className="p-8 h-full bg-card hover:shadow-md transition-all group">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                  <benefit.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.6 }}
          className="text-center space-y-6"
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="px-8 py-6 text-lg"
              onClick={() => window.open("https://forms.gle/abRVA2qKTRkQVMu18", "_blank")}
            >
              Apply Now <ChevronRight className="ml-2 w-5 h-5" />
            </Button>
            <Link to="/internship-policy">
              <Button variant="outline" size="lg" className="px-8 py-6 text-lg">
                View Policy
              </Button>
            </Link>
          </div>
          <p className="text-sm text-muted-foreground">
            Questions? Email us at <a href="mailto:info@zenjourney.io" className="text-primary hover:underline">info@zenjourney.io</a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Internship;
