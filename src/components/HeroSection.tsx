import { Button } from "@/components/ui/button";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import heroImg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 hero-gradient opacity-80 z-10" />
      
      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hi, I'm{" "}
            <span className="text-gradient">
              Mehul Pal
            </span>
          </h1>
        </div>
        
        <div className="animate-fade-in-up-delay">
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            20-year-old Full Stack Developer specializing in{" "}
            <span className="text-primary font-semibold">MERN Stack</span> &{" "}
            <span className="text-secondary font-semibold">Next.js</span>
          </p>
        </div>
        
        <div className="animate-fade-in-up-delay-2 flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button 
            size="lg" 
            className="glow-effect transition-slow hover:scale-105"
          >
            View My Work
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="card-glass transition-slow hover:scale-105"
          >
            Download CV
          </Button>
        </div>
        
        {/* Social Links */}
        <div className="animate-fade-in-up-delay-2 flex gap-6 justify-center mb-16">
          <a 
            href="#" 
            className="p-3 card-glass rounded-full transition-slow hover:scale-110 glow-effect"
          >
            <Github className="w-6 h-6" />
          </a>
          <a 
            href="#" 
            className="p-3 card-glass rounded-full transition-slow hover:scale-110 glow-effect"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a 
            href="#" 
            className="p-3 card-glass rounded-full transition-slow hover:scale-110 glow-effect"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>
        
        {/* Scroll Indicator */}
        <div className="animate-float">
          <ChevronDown className="w-8 h-8 mx-auto text-primary opacity-60" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;