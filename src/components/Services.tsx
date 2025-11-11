import { Home, PenTool, Trees, Building2 } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Projetos Residenciais",
    description: "Casas e residências de luxo personalizadas, do conceito à execução.",
  },
  {
    icon: Building2,
    title: "Arquitetura Comercial",
    description: "Espaços corporativos sofisticados que impressionam e inspiram.",
  },
  {
    icon: PenTool,
    title: "Design de Interiores",
    description: "Ambientes refinados que combinam estética e funcionalidade.",
  },
  {
    icon: Trees,
    title: "Arquitetura Sustentável",
    description: "Soluções eco-friendly que respeitam o meio ambiente.",
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
            Oferecemos soluções completas em arquitetura e design para 
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
