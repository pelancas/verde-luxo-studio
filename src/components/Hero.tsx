import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-architecture.jpg";
import logoGehaus from "@/assets/gehauslogobrancargb.png";

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
        
        <Link to="/projetos">
          <button
            className="bg-primary hover:bg-primary/30 p-4 rounded-lg transition cursor-pointer shadow-md hover:shadow-lg"
            style={{ width: "200px", margin: "0 auto" }}
          >
            <img
              src={logoGehaus}
              alt="Logo"
              className="w-full h-full object-contain opacity-60 hover:opacity-100 transition"
            />
          </button>
        </Link>
        <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          Gehaus Engenharia
        </h1>
        <p className="font-inter text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-light">
          Soluções técnicas inovadoras para imóveis de alto padrão. Excelência em estruturas, 
          sistemas e tecnologia de ponta.
        </p>
        <Link to="/projetos">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-inter font-medium text-lg px-8 py-6"
          >
            Conheça Nossos Projetos
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
