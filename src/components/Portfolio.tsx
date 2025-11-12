import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ProjectGallery from "./ProjectGallery";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const projects = [
  {
    title: "Residência Verde Esmeralda",
    description: "Sistema de climatização integrada e automação residencial",
    image: project1,
  },
  {
    title: "Villa Sustentável",
    description: "Estrutura inteligente com captação solar e reuso de água",
    image: project2,
  },
  {
    title: "Cobertura Urbana",
    description: "Engenharia estrutural para terraço suspenso premium",
    image: project3,
  },
];

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Projetos Exclusivos
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
            Cada projeto é desenvolvido com tecnologia de ponta e precisão técnica, 
            garantindo soluções de engenharia que superam expectativas.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent>
            {projects.map((project, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                <Card 
                  className="overflow-hidden border-border bg-card h-full cursor-pointer hover:shadow-lg transition-shadow"
                  onClick={() => setSelectedProject(index)}
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
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
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        {selectedProject !== null && (
          <ProjectGallery
            isOpen={selectedProject !== null}
            onClose={() => setSelectedProject(null)}
            projectTitle={projects[selectedProject].title}
          />
        )}
      </div>
    </section>
  );
};

export default Portfolio;
