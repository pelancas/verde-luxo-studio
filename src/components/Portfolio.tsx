import { Card, CardContent } from "@/components/ui/card";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const projects = [
  {
    title: "Residência Verde Esmeralda",
    description: "Interior contemporâneo com jardim vertical integrado",
    image: project1,
  },
  {
    title: "Villa Sustentável",
    description: "Arquitetura moderna com jardins verticais",
    image: project2,
  },
  {
    title: "Cobertura Urbana",
    description: "Terraço de luxo com vista panorâmica",
    image: project3,
  },
];

const Portfolio = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Projetos Exclusivos
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
            Cada projeto é uma obra única, criada especialmente para refletir 
            a visão e o estilo de vida dos nossos clientes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="overflow-hidden border-border hover:shadow-xl transition-shadow duration-300 bg-card"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-playfair text-2xl font-semibold mb-2 text-card-foreground">
                  {project.title}
                </h3>
                <p className="font-inter text-muted-foreground">
                  {project.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
