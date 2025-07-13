import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/20 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo/Name */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-gradient">Mehul Pal</h3>
            <p className="text-muted-foreground text-sm">Full Stack Developer</p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            {[
              { icon: Github, href: "#", label: "GitHub" },
              { icon: Linkedin, href: "#", label: "LinkedIn" },
              { icon: Mail, href: "mailto:mehul.pal.dev@gmail.com", label: "Email" }
            ].map((social) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="p-3 card-glass rounded-full transition-slow hover:scale-110 hover:glow-effect"
                >
                  <IconComponent className="w-5 h-5" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-border/20 text-center">
          <p className="text-muted-foreground text-sm flex items-center justify-center gap-2">
            © 2024 Mehul Pal. Made with <Heart className="w-4 h-4 text-red-500 fill-current" /> and passion
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;