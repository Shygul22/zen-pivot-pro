
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
                        <span className="hidden md:inline">•</span>
                        <span>Includes Sitemaps & Indexing</span>
                        <span className="hidden md:inline">•</span>
                        <a
                            href="https://docs.google.com/document/d/e/2PACX-1vT4l_0fu0j9WuQlHSUgLUV-f__SenaCNTTFY4Eibr6fgoMT6b3SMmpxy0CdZTByduVFP039HW3PpZFc/pub"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline hover:text-accent transition-colors"
                        >
                            View Service Agreement
                        </a>
                    </div>
                    <button
                        onClick={() => setIsVisible(false)}
                        className="p-1 hover:bg-primary-foreground/10 rounded-full transition-colors shrink-0"
                        aria-label="Close banner"
                    >
                        <X className="w-4 h-4" />
                    </button>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

export default TopBanner;
