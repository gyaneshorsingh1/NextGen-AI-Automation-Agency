import { Link } from "react-router-dom";
import { MessageCircle, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <span className="font-display text-2xl font-bold">
                <span className="gradient-text">NextGen</span>
                <span className="text-foreground"> AI</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Smart websites and automation solutions that help businesses grow digitally and work smarter.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://wa.me/9779811010510"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-[#25D366] flex items-center justify-center hover:opacity-80 transition-opacity"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5 text-white" />
              </a>
              <a
                href="mailto:gyaneshorsingh9@gmail.com"
                className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center hover:opacity-80 transition-opacity"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 text-primary-foreground" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "Services", path: "/services" },
                { name: "Packages", path: "/packages" },
                { name: "Portfolio", path: "/portfolio" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-3">
              {[
                "Website Development",
                "Business Automation",
                "WhatsApp Integration",
                "Maintenance & Support",
              ].map((service) => (
                <li key={service}>
                  <span className="text-muted-foreground text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MessageCircle className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p className="text-sm text-muted-foreground">WhatsApp</p>
                  <a href="https://wa.me/9779811010510" className="text-sm text-foreground hover:text-primary transition-colors">
                    +977 9811010510
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a href="mailto:gyaneshorsingh9@gmail.com" className="text-sm text-foreground hover:text-primary transition-colors">
                    gyaneshorsingh9@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p className="text-sm text-muted-foreground">Service Area</p>
                  <p className="text-sm text-foreground">Global</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} NextGen AI Automation. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                About
              </Link>
              <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
