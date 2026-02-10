import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Briefcase, Smartphone, Globe, ShoppingBag, Chrome, Check, ChevronDown, ChevronUp } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";
import { useState } from "react";

const ServiceCard = ({ service, iconColorClass = "text-primary", buttonVariant = "outline" }: { service: any, iconColorClass?: string, buttonVariant?: "outline" | "default" | "secondary" | "destructive" | "ghost" | "link" }) => {
  const [showAll, setShowAll] = useState(false);
  const visibleFeatures = showAll ? service.features : service.features.slice(0, 5);
  const hasMore = service.features.length > 5;

  return (
    <Card className={`p-8 h-full bg-card/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300 relative overflow-hidden group flex flex-col ${service.popular
      ? "border-primary shadow-md ring-1 ring-primary/20"
      : `border-${iconColorClass.replace('text-', '')}/20`
      }`}>
      {service.popular && (
        <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-bl-lg z-20">
          Limited Time Offer
        </div>
      )}

      <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
        <service.icon className={`w-24 h-24 ${iconColorClass === 'text-secondary' ? 'text-secondary' : ''}`} />
      </div>

      <div className="relative z-10 flex-1">
        <div className={`w-12 h-12 rounded-lg bg-${iconColorClass.replace('text-', '')}/10 flex items-center justify-center mb-6`}>
          <service.icon className={`w-6 h-6 ${iconColorClass}`} />
        </div>

        <h4 className="text-2xl font-bold mb-2">{service.title}</h4>
        <p className="text-muted-foreground mb-4">{service.plan}</p>

        <div className="flex items-baseline gap-2 mb-2">
          <span className={`text-3xl font-bold ${iconColorClass}`}>{service.price}</span>
          {service.mrp && (
            <span className="text-lg text-muted-foreground line-through">
              {service.mrp}
            </span>
          )}
        </div>

        {service.description && (
          <p className="text-sm text-muted-foreground mb-4 italic">
            {service.description}
          </p>
        )}

        <ul className="space-y-3 mb-8 mt-4">
          {visibleFeatures.map((feature: string, i: number) => (
            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
              <Check className="w-4 h-4 text-green-500 mt-1 shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {hasMore && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setShowAll(!showAll)}
            className="w-full mb-4 text-muted-foreground hover:text-foreground"
          >
            {showAll ? (
              <>
                Show Less <ChevronUp className="w-4 h-4 ml-2" />
              </>
            ) : (
              <>
                Show More <ChevronDown className="w-4 h-4 ml-2" />
              </>
            )}
          </Button>
        )}
      </div>

      <div className="relative z-10 mt-auto space-y-3">
        {service.url ? (
          <a href={service.url} target="_blank" rel="noopener noreferrer" className="block w-full">
            <Button className="w-full group" variant={service.popular ? "default" : buttonVariant}>
              {service.price === "Free" ? "Install Now" : "Get Started"}
            </Button>
          </a>
        ) : (
          <Button
            className="w-full group"
            variant={service.popular ? "default" : buttonVariant}
            onClick={() => window.open("https://wa.me/919629236257?text=Hi%2C%20I'm%20interested%20in%20your%20services", "_blank")}
          >
            {service.price === "Free" ? "Install Now" : "Get Started"}
          </Button>
        )}
        {service.serviceAgreement && (
          <a
            href={service.serviceAgreement}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center text-xs text-muted-foreground hover:text-primary underline transition-colors"
          >
            View Service Agreement
          </a>
        )}
      </div>
    </Card>
  );
};

const Services = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const b2bServices = [
    {
      icon: Smartphone,
      title: "Custom Android & Website App Development",
      plan: "Startup Plan",
      price: "₹17,000",
      mrp: "₹34,000",
      popular: true,
      serviceAgreement: "https://docs.google.com/document/d/e/2PACX-1vT4l_0fu0j9WuQlHSUgLUV-f__SenaCNTTFY4Eibr6fgoMT6b3SMmpxy0CdZTByduVFP039HW3PpZFc/pub",
      features: [
        "Native Android App",
        "Free Domain",
        "Free hosting",
        "Limited Database",
        "Play Store publish",
        "Maintenance fee (one-time, covering three months)",
        "Project delivery under 8 weeks"
      ]
    },
    {
      icon: Briefcase,
      title: "Business Support",
      plan: "One Month Support",
      price: "₹5,000",
      mrp: "₹10,000",
      features: [
        "Day-to-day technical assistance",
        "System monitoring & optimization",
        "Incident management & rapid response",
        "Regular maintenance & health checks",
        "Bug fixes, patches & security updates",
        "Infrastructure stability management",
        "Continuous feature development",
        "Platform upgrades & modernization",
        "Integration of new tools & APIs",
        "Scalability planning & optimization",
        "Performance tuning for growth",
        "Support for new market launches",
        "Dedicated support plans",
        "Proactive improvement recommendations",
        "Flexible engagement models"
      ]
    }
  ];

  const b2cServices = [
    {
      icon: Chrome,
      title: "Zenaura Extension",
      plan: "Productivity Tool",
      price: "Free",
      mrp: null,
      url: "https://chromewebstore.google.com/detail/jljicmbnlammjaapklcggfaogiladlcf?utm_source=item-share-cb",
      features: [
        "Focus Mode",
        "Task Management",
        "Ambient Sounds",
        "Daily Analytics"
      ]
    },
    {
      icon: ShoppingBag,
      title: "Playstore Console Purchase",
      plan: "Developer Account",
      price: "$30",
      mrp: null,
      description: "Account purchasing $25 + $5 charges (zenjoureny)",
      features: [
        "Google Play Console Access",
        "Lifetime Validity",
        "Global App Distribution",
        "Monetization Features"
      ]
    }
  ];

  return (
    <section ref={ref} id="services" className="py-24 px-4 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          initial="initial"
          animate={isVisible ? "animate" : "initial"}
          variants={fadeInUp}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Zenjourney Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive solutions for businesses and individuals.
          </p>
        </motion.div>

        {/* B2B Services */}
        <div className="mb-20">
          <motion.div
            initial="initial"
            animate={isVisible ? "animate" : "initial"}
            variants={fadeInUp}
            className="flex items-center justify-center gap-3 mb-10"
          >
            <Briefcase className="w-8 h-8 text-primary" />
            <h3 className="text-3xl font-bold text-foreground">For Business (B2B)</h3>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate={isVisible ? "animate" : "initial"}
            className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          >
            {b2bServices.map((service, index) => (
              <motion.div key={index} variants={staggerItem} className="h-full">
                <ServiceCard service={service} iconColorClass="text-primary" />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* B2C Services */}
        <div>
          <motion.div
            initial="initial"
            animate={isVisible ? "animate" : "initial"}
            variants={fadeInUp}
            className="flex items-center justify-center gap-3 mb-10"
          >
            <Globe className="w-8 h-8 text-secondary" />
            <h3 className="text-3xl font-bold text-foreground">For Consumers (B2C)</h3>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate={isVisible ? "animate" : "initial"}
            className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          >
            {b2cServices.map((service, index) => (
              <motion.div key={index} variants={staggerItem} className="h-full">
                <ServiceCard service={service} iconColorClass="text-secondary" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
