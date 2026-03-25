import { ExternalLink } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const projects = [
  {
    title: "NestIQ — AI PropTech Platform",
    shortName: "NestIQ",
    description: "Full landing page with embedded AI chatbot for an Indian property management startup. Built and deployed in under 24 hours.",
    tags: ["React", "TypeScript", "GPT-4o-mini", "Vercel"],
    link: "https://nest-iq.vercel.app",
    linkLabel: "View Live",
    gradient: "from-[#f97316] to-[#1e293b]",
  },
  {
    title: "The Wild Oasis — Hotel Management",
    shortName: "Wild Oasis",
    description: "Full-stack hotel management system with booking management, cabin tracking, dark mode, and real-time dashboard analytics.",
    tags: ["React", "Supabase", "PostgreSQL", "Tailwind CSS"],
    link: "https://the-wild-oasis-mayank.vercel.app",
    linkLabel: "View Live",
    gradient: "from-[#10b981] to-[#1e293b]",
  },
  {
    title: "Secure Ballot — Blockchain Voting",
    shortName: "Secure Ballot",
    description: "Decentralized voting system on blockchain. Published research on smart contract security. Tamper-proof, transparent, fully on-chain.",
    tags: ["Blockchain", "Solidity", "Smart Contracts", "Web3"],
    link: "https://github.com/Equinox1704/Secure-Ballot-Using-Blockchain",
    linkLabel: "View on GitHub",
    gradient: "from-[#8b5cf6] to-[#1e293b]",
  },
];

const Projects = () => (
  <section id="work" className="py-24">
    <div className="container mx-auto px-6">
      <ScrollReveal className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Recent Work</h2>
        <p className="text-muted-foreground text-lg">Things I've actually built and shipped.</p>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {projects.map((project, i) => (
          <ScrollReveal key={project.title} delay={i * 0.1}>
            <div className="bg-card border border-border rounded-xl overflow-hidden glow-border h-full flex flex-col">
              <div className={`h-44 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                <span className="text-2xl font-bold text-white/90 tracking-tight">{project.shortName}</span>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs bg-secondary px-2.5 py-1 rounded-full text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-primary font-medium hover:underline"
                >
                  {project.linkLabel} <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
