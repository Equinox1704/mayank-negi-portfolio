import ScrollReveal from "./ScrollReveal";

const stats = [
  { value: "3+ Years", label: "Building production apps" },
  { value: "5+ Projects", label: "Shipped to production" },
  { value: "1 Day", label: "Average demo delivery time" },
];

const Hero = () => (
  <section className="relative min-h-screen flex items-center justify-center dot-grid overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
    <div className="container mx-auto px-6 pt-20 pb-16 relative z-10">
      <ScrollReveal className="flex flex-col items-center text-center max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-secondary/50 mb-8">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-sm text-muted-foreground">Available for freelance work</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight tracking-tight mb-6">
          <span className="gradient-text">I Build Websites & AI Tools</span>
          <br />
          <span className="gradient-text">That Actually Work.</span>
        </h1>

        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
          I help founders ship fast — landing pages, web apps, and AI chatbots. Based in Germany, working globally.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <a href="#work" className="glow-button text-base px-8 py-3.5">See My Work</a>
          <a href="#contact" className="outline-button text-base px-8 py-3.5">Let's Talk</a>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.2}>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {stats.map((stat) => (
            <div key={stat.value} className="bg-white/5 backdrop-blur-xl border border-primary/20 rounded-xl p-6 text-center">
              <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default Hero;
