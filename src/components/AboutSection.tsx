import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Globe, Smartphone } from "lucide-react";

const AboutSection = () => {
  const skills = [
    { icon: Code, title: "Frontend", techs: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
    { icon: Database, title: "Backend", techs: ["Node.js", "Express", "MongoDB", "PostgreSQL"] },
    { icon: Globe, title: "Full Stack", techs: ["MERN Stack", "REST APIs", "GraphQL", "WebSocket"] },
    { icon: Smartphone, title: "Mobile", techs: ["React Native", "PWA", "Responsive Design"] }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a passionate 20-year-old full-stack developer with expertise in modern web technologies. 
            I love creating innovative solutions and bringing ideas to life through code.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-primary">My Journey</h3>
            <p className="text-muted-foreground leading-relaxed">
              Started coding at 16, I quickly fell in love with web development. Over the past 4 years, 
              I've mastered the MERN stack and Next.js, building numerous projects that showcase my 
              passion for clean code and exceptional user experiences.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I specialize in creating scalable web applications with modern frameworks, 
              focusing on performance, accessibility, and user-centered design principles.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {skills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <Card 
                  key={skill.title} 
                  className="card-glass p-6 transition-slow hover:scale-105 hover:glow-effect"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-primary/20 rounded-lg">
                      <IconComponent className="w-5 h-5 text-primary" />
                    </div>
                    <h4 className="font-semibold">{skill.title}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skill.techs.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { number: "4+", label: "Years Coding" },
            { number: "50+", label: "Projects Built" },
            { number: "15+", label: "Technologies" },
            { number: "100%", label: "Passion" }
          ].map((stat, index) => (
            <div 
              key={stat.label} 
              className="text-center animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;