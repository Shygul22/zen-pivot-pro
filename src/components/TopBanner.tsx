
import { useState } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const TopBanner = () => {
    const [isVisible, setIsVisible] = useState(true);

    if (!isVisible) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="bg-primary text-primary-foreground relative z-[60]"
            >
                <div className="container mx-auto px-4 py-2 flex items-center justify-between gap-4 text-xs md:text-sm font-medium">
                    <div className="flex-1 text-center md:text-left flex flex-col md:flex-row items-center gap-2 md:gap-4 justify-center">
                        <span>
                            🎉 <span className="font-bold">Limited Time Offer:</span> Custom Android & Website App Development @ ₹17,000
                        </span>
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

export default TopBanner;
