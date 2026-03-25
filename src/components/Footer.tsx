import { Github, Linkedin } from "lucide-react";

const Footer = () => (
  <footer className="py-12 border-t border-border">
    <div className="container mx-auto px-6 text-center">
      <div className="flex justify-center gap-5 mb-4">
        <a
          href="https://github.com/Equinox1704"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          <Github className="w-5 h-5" />
        </a>
        <a
          href="https://linkedin.com/in/mayank-negi-dev"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          <Linkedin className="w-5 h-5" />
        </a>
      </div>
      <p className="text-sm text-muted-foreground mb-1">
        © 2026 Mayank Negi. Designed & built with React.
      </p>
      <p className="text-xs text-muted-foreground/60">Based in Kaiserslautern, Germany</p>
    </div>
  </footer>
);

export default Footer;
