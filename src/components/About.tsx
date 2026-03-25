import ScrollReveal from "./ScrollReveal";

const skills = [
  "React", "TypeScript", "Node.js","JavaScript", "Python", "PostgreSQL",
  "MongoDB", "OpenAI API", "LangChain", "Supabase", "Django",
  "Git", "Vercel", "Docker", "REST APIs", "Blockchain", "Solidity",
];

const experiences = [
  { company: "Zidio Development", role: "Web Developer Intern" },
  { company: "MethodTech", role: "Software Developer Intern" },
];

const About = () => (
  <section id="about" className="py-24">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              I'm Mayank — a full-stack developer and AI builder currently pursuing M.Sc. Computer Science at RPTU Kaiserslautern, Germany.
            </p>
            <p>
              I've built production systems across two internships, shipped AI-integrated apps, and published research on blockchain security.
            </p>
            <p>
              I don't just write code. I build things that solve real problems for real businesses. Fast.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
            {experiences.map((exp) => (
              <div key={exp.company} className="glass-card p-5">
                <div className="font-semibold text-foreground text-sm">{exp.company}</div>
                <div className="text-muted-foreground text-xs mt-1">{exp.role}</div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <h3 className="text-lg font-semibold text-muted-foreground mb-6">Tech Stack</h3>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="text-sm bg-secondary border border-border px-4 py-2 rounded-lg text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all duration-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
);

export default About;
