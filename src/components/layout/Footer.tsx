import { Link } from "react-router-dom";
import { MessageCircle, Mail, MapPin } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/9779811010510?text=Hi,%20I'm%20interested%20in%20your%20services";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <span className="font-heading text-2xl font-bold">
                <span className="text-gradient">Nep</span>
                <span className="text-foreground">Grow</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Complete digital solutions for growing businesses. 
              Web development, apps, marketing & design.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: "Services", path: "/services" },
                { name: "Packages", path: "/packages" },
                { name: "Industries", path: "/industries" },
                { name: "Portfolio", path: "/portfolio" },
                { name: "About", path: "/about" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground text-sm hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-2">
              <li className="text-muted-foreground text-sm">Web Development</li>
              <li className="text-muted-foreground text-sm">App Development</li>
              <li className="text-muted-foreground text-sm">Digital Marketing</li>
              <li className="text-muted-foreground text-sm">Graphic Design</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">Get in Touch</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground text-sm hover:text-primary transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  +977-9811010510
                </a>
              </li>
              <li>
                <a
                  href="mailto:nepgrow10@gmail.com"
                  className="flex items-center gap-2 text-muted-foreground text-sm hover:text-primary transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  nepgrow10@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground text-sm">
                <MapPin className="w-4 h-4" />
                Nepal
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} NepGrow. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/contact" className="text-muted-foreground text-sm hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link to="/contact" className="text-muted-foreground text-sm hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;