import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Rocket, Briefcase } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/?scroll=' + sectionId);
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const menuItems = [
    { label: "About", action: () => navigate('/about') },
    { label: "Services", action: () => scrollToSection('services') },
    { label: "Contact", action: () => navigate('/contact') },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
          >
            <a href="/" className="text-2xl font-bold text-foreground hover:text-primary transition-colors">
              ZenJourney
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <motion.button
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-1 text-foreground hover:text-primary transition-colors font-medium outline-none"
                >
                  For Business <ChevronDown className="w-4 h-4" />
                </motion.button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-72 p-3 backdrop-blur-2xl bg-background/95 border-border/50 shadow-2xl rounded-2xl">
                <DropdownMenuItem asChild className="cursor-pointer focus:bg-primary/5 rounded-xl transition-all p-3 mb-1 group">
                  <Link to="/saas-franchise" className="flex items-center gap-4 w-full">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <Rocket className="w-5 h-5 transition-transform group-hover:scale-110" />
                    </div>
                    <div className="space-y-0.5">
                      <div className="font-black text-sm text-foreground">SaaS Franchise Partner</div>
                      <div className="text-[10px] text-muted-foreground uppercase tracking-[0.1em] font-black">Join our tech ecosystem</div>
                    </div>
                  </Link>
                </DropdownMenuItem>
                
                <DropdownMenuItem 
                  onClick={() => scrollToSection('services')}
                  className="cursor-pointer focus:bg-primary/5 rounded-xl transition-all p-3 group"
                >
                  <div className="flex items-center gap-4 w-full">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <Briefcase className="w-5 h-5 transition-transform group-hover:scale-110" />
                    </div>
                    <div className="space-y-0.5">
                      <div className="font-black text-sm text-foreground">B2B Services</div>
                      <div className="text-[10px] text-muted-foreground uppercase tracking-[0.1em] font-black">Apps & business support</div>
                    </div>
                  </div>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {menuItems.map((item, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: (index + 2) * 0.1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={item.action}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                {item.label}
              </motion.button>
            ))}
            <motion.a
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.1 }}
              href="https://zenjourney.io/blog/"
              className="text-foreground hover:text-primary transition-colors"
            >
              Blog
            </motion.a>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="hero"
                size="sm"
                onClick={() => navigate("/checkout")}
              >
                Get Started
              </Button>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.div whileTap={{ scale: 0.9 }}>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <AnimatePresence mode="wait">
                  {isMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="h-6 w-6" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="h-6 w-6" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden border-t border-border/50"
            >
              <div className="py-4 space-y-4">
                <div className="px-4 py-2">
                  <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-2">For Business</p>
                  <div className="space-y-1">
                    <Link
                      to="/saas-franchise"
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center gap-3 w-full px-4 py-3 text-foreground hover:text-primary hover:bg-primary/5 rounded-2xl transition-all font-bold"
                    >
                      <Rocket className="w-5 h-5 text-primary" />
                      <div>
                        <div>SaaS Franchise Partner</div>
                        <div className="text-[10px] text-muted-foreground uppercase tracking-wider">Join our tech ecosystem</div>
                      </div>
                    </Link>
                    <button
                      onClick={() => scrollToSection('services')}
                      className="flex items-center gap-3 w-full px-4 py-3 text-foreground hover:text-primary hover:bg-primary/5 rounded-2xl transition-all font-bold"
                    >
                      <Briefcase className="w-5 h-5 text-primary" />
                      <div>
                        <div>B2B Services</div>
                        <div className="text-[10px] text-muted-foreground uppercase tracking-wider">Apps & business support</div>
                      </div>
                    </button>
                  </div>
                </div>

                <div className="px-4 py-2 border-t border-border/50">
                  <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-2">Quick Links</p>
                  {menuItems.map((item, index) => (
                    <motion.button
                      key={index}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ x: 5, backgroundColor: "hsl(var(--primary) / 0.05)" }}
                      whileTap={{ scale: 0.98 }}
                      onClick={item.action}
                      className="block w-full text-left px-4 py-2 text-foreground hover:text-primary rounded transition-colors"
                    >
                      {item.label}
                    </motion.button>
                  ))}
                </div>
                <motion.a
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  whileHover={{ x: 5, backgroundColor: "hsl(var(--primary) / 0.05)" }}
                  href="https://zenjourney.io/blog/"
                  className="block w-full text-left px-4 py-2 text-foreground hover:text-primary rounded transition-colors"
                >
                  Blog
                </motion.a>
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="px-4 pt-2"
                >
                  <Button
                    variant="hero"
                    className="w-full"
                    onClick={() => {
                      navigate("/checkout");
                      setIsMenuOpen(false);
                    }}
                  >
                    Get Started
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navigation;
