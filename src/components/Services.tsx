import { Monitor, MessageCircle, Code, Zap } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const services = [
  {
    icon: Monitor,
    title: "Landing Pages & Websites",
    description: "Clean, fast, conversion-focused sites built in days not weeks. Custom design, no templates.",
    price: "Delivered in 3-5 days",
  },
  {
    icon: MessageCircle,
    title: "AI Chatbots",
    description: "Custom GPT-powered chatbots embedded directly in your site. Answer questions, qualify leads, support customers 24/7.",
    price: "Live on your site in 48 hrs",
  },
  {
    icon: Code,
    title: "Web Applications",
    description: "Full-stack apps with auth, database, and APIs. React, Node.js, PostgreSQL. Built to scale.",
    price: "Built to scale from day one",
  },
  {
    icon: Zap,
    title: "AI Automation",
    description: "Automate repetitive workflows — lead follow-up, content generation, internal reporting. Save 10+ hours per week.",
    price: "Save 10+ hours per week",
  },
];

const Services = () => (
  <section id="services" className="py-24">
    <div className="container mx-auto px-6">
      <ScrollReveal className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">What I Build</h2>
        <p className="text-muted-foreground text-lg">End-to-end solutions from idea to deployment.</p>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {services.map((service, i) => (
          <ScrollReveal key={service.title} delay={i * 0.1}>
            <div className="glass-card p-8 h-full group hover:border-primary/30 transition-all duration-300">
              <service.icon className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{service.description}</p>
              <span className="inline-block text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                {service.price}
              </span>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
