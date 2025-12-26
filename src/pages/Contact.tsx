import { Helmet } from "react-helmet-async";
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import {
  MessageCircle,
  Mail,
  MapPin,
  Send,
  Phone,
} from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Create WhatsApp message with form data
    const message = `Hi, I'm ${formData.name}.%0A%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0A%0AMessage: ${formData.message}`;
    window.open(`https://wa.me/9779811010510?text=${message}`, "_blank");

    toast({
      title: "Message Sent!",
      description: "Redirecting you to WhatsApp for instant communication.",
    });

    setFormData({ name: "", email: "", phone: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <>
      <Helmet>
        <title>Contact | NextGen AI Automation</title>
        <meta
          name="description"
          content="Get in touch with NextGen AI Automation. Contact us via WhatsApp or our contact form for website development and business automation enquiries."
        />
      </Helmet>
      <Layout>
        {/* Hero */}
        <section className="section-padding relative overflow-hidden">
          <div className="hero-glow top-20 left-0" />
          <div className="container-custom relative z-10">
            <div className="max-w-3xl">
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Get in <span className="gradient-text">Touch</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Ready to start your project? Have questions? We'd love to hear from you. Reach out via WhatsApp for the fastest response.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8">
                  Contact Information
                </h2>

                <div className="space-y-6 mb-10">
                  <div className="flex items-start gap-4 p-5 rounded-xl bg-card border border-border">
                    <div className="w-12 h-12 rounded-xl bg-[#25D366]/20 flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="w-6 h-6 text-[#25D366]" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-foreground mb-1">
                        WhatsApp (Preferred)
                      </h3>
                      <p className="text-muted-foreground text-sm mb-2">
                        Fastest way to reach us
                      </p>
                      <a
                        href="https://wa.me/9779811010510"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline font-medium"
                      >
                        +977 9811010510
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-5 rounded-xl bg-card border border-border">
                    <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-foreground mb-1">
                        Email
                      </h3>
                      <p className="text-muted-foreground text-sm mb-2">
                        For detailed enquiries
                      </p>
                      <a
                        href="mailto:gyaneshorsingh9@gmail.com"
                        className="text-primary hover:underline font-medium"
                      >
                        gyaneshorsingh9@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-5 rounded-xl bg-card border border-border">
                    <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-foreground mb-1">
                        Service Areas
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        We serve clients across India with remote services and support.
                      </p>
                    </div>
                  </div>
                </div>

                <Button
                  variant="whatsapp"
                  size="xl"
                  className="w-full sm:w-auto"
                  onClick={() =>
                    window.open(
                      "https://wa.me/9779811010510?text=Hi, I'm interested in your services.",
                      "_blank"
                    )
                  }
                >
                  <MessageCircle className="w-5 h-5" />
                  Chat on WhatsApp
                </Button>
              </div>

              {/* Contact Form */}
              <div className="card-glass p-8 gradient-border">
                <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                  Send a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Your Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      className="bg-secondary/50 border-border"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      className="bg-secondary/50 border-border"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                      className="bg-secondary/50 border-border"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Your Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project requirements..."
                      rows={5}
                      className="bg-secondary/50 border-border resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="hero"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Start Your Project
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Contact;
