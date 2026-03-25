import { Mail, MessageCircle, Linkedin } from "lucide-react";
import { useState, FormEvent } from "react";
import ScrollReveal from "./ScrollReveal";

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "mnegi1704@gmail.com",
    href: "mailto:mnegi1704@gmail.com",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+91 9953037903",
    href: "https://wa.me/919953037903",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "mayank-negi-dev",
    href: "https://linkedin.com/in/mayank-negi-dev",
  },
];

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Let's Build Something</h2>
          <p className="text-muted-foreground text-lg">Got a project in mind? I typically respond within 24 hours.</p>
        </ScrollReveal>

        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
              {contactMethods.map((method) => (
                <a
                  key={method.label}
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card p-6 text-center hover:border-primary/30 transition-all duration-300 group"
                >
                  <method.icon className="w-6 h-6 text-primary mx-auto mb-3" />
                  <div className="text-sm font-medium text-foreground">{method.label}</div>
                  <div className="text-xs text-muted-foreground mt-1">{method.value}</div>
                </a>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <form onSubmit={handleSubmit} className="glass-card p-8 space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <input
                  type="text"
                  placeholder="Name"
                  required
                  className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
                />
                <input
                  type="email"
                  placeholder="Email"
                  required
                  className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
                />
              </div>
              <textarea
                placeholder="Message"
                rows={5}
                required
                className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors resize-none"
              />
              <button type="submit" className="glow-button w-full py-3.5 text-base">
                {submitted ? "Message Sent!" : "Send Message"}
              </button>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
