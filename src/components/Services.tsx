import { Home, PenTool, Trees, Building2 } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Engenharia Estrutural",
    description: "Cálculos e projetos estruturais de alta complexidade para imóveis de luxo.",
  },
  {
    icon: Building2,
    title: "Sistemas Prediais",
    description: "Instalações elétricas, hidráulicas e HVAC de última geração.",
  },
  {
    icon: PenTool,
    title: "Automação Residencial",
    description: "Tecnologia inteligente para máximo conforto e eficiência.",
  },
  {
    icon: Trees,
    title: "Engenharia Sustentável",
    description: "Sistemas de energia renovável e eficiência energética.",
  },
];

const Services = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Nossos Serviços
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
            Oferecemos soluções completas em engenharia e tecnologia para 
            transformar suas ideias em realidade.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="text-center p-8 rounded-lg border border-border bg-card hover:border-primary/50 transition-colors duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-playfair text-xl font-semibold mb-3 text-card-foreground">
                  {service.title}
                </h3>
                <p className="font-inter text-muted-foreground">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
