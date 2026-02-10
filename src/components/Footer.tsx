import { Link } from "react-router-dom";
import { Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border/50 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-primary">
              ZenJourney
            </h3>
            <p className="text-muted-foreground text-sm">
              Balance Your Time, Elevate Your Life
            </p>
            <p className="text-xs text-muted-foreground font-medium">
              UDYAM Registration: UDYAM-TN-04-0104781
            </p>
            <div className="flex gap-4 pt-2">
              <a href="https://www.linkedin.com/company/zenjourney-in/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="https://www.instagram.com/zenjourney.in?igsh=MTgyb3F0OG9xaDl1eg==" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {/* Home link removed */}
              <li>
                <Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/refund" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Refund Policy
                </Link>
              </li>
              <li>
                <a
                  href="https://docs.google.com/document/d/e/2PACX-1vT4l_0fu0j9WuQlHSUgLUV-f__SenaCNTTFY4Eibr6fgoMT6b3SMmpxy0CdZTByduVFP039HW3PpZFc/pub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Service Agreement
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>hello@zenjourney.in</li>
              <li>zenjourney.in@gmail.com</li>
              <li>+91 9092406569</li>
              <li>+91 9629236257</li>
              <li>ZenJourney.in</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} ZenJourney. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span>Secured by:</span>
            <span className="font-semibold">PhonePe</span>
            <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
            <span className="font-semibold">PayPal</span>
            <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
            <span className="font-semibold">Dodo Payments</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
