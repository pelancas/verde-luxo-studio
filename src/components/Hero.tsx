import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-architecture.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-foreground/40" />
      </div>
      
      <div className="relative z-10 container mx-auto px-6 py-32 text-center text-white">
        <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          Arquitetura de Luxo
        </h1>
        <p className="font-inter text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-light">
          Transformando espaços em obras de arte. Projetos exclusivos que harmonizam elegância, 
          sustentabilidade e sofisticação.
        </p>
        <Button 
          size="lg" 
          className="bg-primary hover:bg-primary/90 text-primary-foreground font-inter font-medium text-lg px-8 py-6"
        >
          Conheça Nossos Projetos
        </Button>
      </div>
    </section>
  );
};

export default Hero;
