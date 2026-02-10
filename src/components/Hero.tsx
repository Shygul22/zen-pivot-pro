import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Phone } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";
import { motion } from "framer-motion";
import { fadeInUp, fadeInDown, staggerContainer, staggerItem } from "@/lib/animations";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <img
          src={heroImage}
          alt="Zen-inspired balance and flow"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/80" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="max-w-4xl mx-auto text-center space-y-8"
        >
          <div className="space-y-4">
            <motion.div
              variants={fadeInUp}
              className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4"
            >
              <span className="text-foreground font-semibold">Android Apps • Web Development • Business Support</span>
            </motion.div>
            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-7xl font-bold text-foreground leading-tight"
            >
              Transforming Ideas into
              <br />
              Digital Reality
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            >
              Expert Custom Android & Website App Development starts at ₹30,600.
              Comprehensive business support to ensure your long-term success.
            </motion.p>
          </div>

          <motion.div
            variants={staggerItem}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="hero"
                className="text-lg px-8 py-6 group"
                onClick={() => window.location.href = "https://wa.me/919629236257?text=Hi%2C%20I'm%20interested%20in%20your%20services"}
              >
                Get Started
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Services
              </Button>
            </motion.div>
          </motion.div>

        </motion.div>
      </div>

    </section>
  );
};

export default Hero;
