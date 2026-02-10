import { Card } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";

const clients = [
    {
        name: "BowBow Bliss Restaurant",
        description: "Restaurant ",
        url: "https://bowbowbliss.com",
        category: "Food & Beverage"
    },
    {
        name: "Imaasa",
        description: "Mobile App & Website",
        url: "https://imaasa.in",
        category: "Mobile App"
    },
    {
        name: "Option Tamil Trader",
        description: "Mobile App & Website",
        url: "https://optiontamiltrader.sbs",
        category: "Education"
    },
    {
        name: "Foodie Mpt",
        description: "Food Delivery Solution",
        url: null,
        category: "Mobile App"
    }
];

const Clients = () => {
    const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

    return (
        <section ref={ref} id="clients" className="py-24 px-4 bg-muted/30">
            <div className="container mx-auto">
                <motion.div
                    initial="initial"
                    animate={isVisible ? "animate" : "initial"}
                    variants={fadeInUp}
                    className="text-center space-y-4 mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                        Trusted by Innovators
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        We've helped these businesses transform their digital presence.
                    </p>
                </motion.div>

                <motion.div
                    variants={staggerContainer}
                    initial="initial"
                    animate={isVisible ? "animate" : "initial"}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {clients.map((client, index) => (
                        <motion.div
                            key={index}
                            variants={staggerItem}
                            whileHover={{ y: -5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <Card className="h-full p-6 hover:shadow-xl transition-all duration-300 border-primary/10 bg-card/50 backdrop-blur-sm group">
                                <div className="flex flex-col h-full justify-between space-y-4">
                                    <div>
                                        <span className="text-xs font-medium px-2 py-1 rounded-full bg-primary/10 text-primary mb-3 inline-block">
                                            {client.category}
                                        </span>
                                        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                                            {client.name}
                                        </h3>
                                        <p className="text-sm text-muted-foreground mt-2">
                                            {client.description}
                                        </p>
                                    </div>

                                    {client.url ? (
                                        <a
                                            href={client.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors mt-auto"
                                        >
                                            Visit Website <ExternalLink className="w-4 h-4 ml-1" />
                                        </a>
                                    ) : (
                                        <span className="text-sm text-muted-foreground italic mt-auto">
                                            Coming Soon
                                        </span>
                                    )}
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Clients;
