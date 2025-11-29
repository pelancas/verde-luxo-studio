import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import ProjectGallery from "@/components/ProjectGallery";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project1Infrastructure from "@/assets/project1-infrastructure.jpg";
import project1Foundation from "@/assets/project1-foundation.jpg";
import project1Equipment from "@/assets/project1-equipment.jpg";
import project1Cad from "@/assets/project1-cad.jpg";
import project1Finishing from "@/assets/project1-finishing.jpg";
import project2Infrastructure from "@/assets/project2-infrastructure.jpg";
import project2Infrastructure2 from "@/assets/project2-infrastructure-2.jpg";
import project2Foundation from "@/assets/project2-foundation.jpg";
import project2Equipment from "@/assets/project2-equipment.jpg";
import project2Cad from "@/assets/project2-cad.jpg";
import project2Finishing from "@/assets/project2-finishing.jpg";
import project3Infrastructure from "@/assets/project3-infrastructure.jpg";
import project3Foundation from "@/assets/project3-foundation.jpg";
import project3Equipment from "@/assets/project3-equipment.jpg";
import project3Cad from "@/assets/project3-cad.jpg";
import project3Finishing from "@/assets/project3-finishing.jpg";

const projects = [
  {
    title: "Residencia IC Lagoa Santa",
    description: "Sistema de climatização integrada e automação residencial",
    image: project1,
    gallery: {
      infrastructure: [project1Infrastructure],
      foundation: [project1Foundation],
      equipment: [project1Equipment],
      cad: [project1Cad],
      finishing: [project1Finishing],
    },
  },
  {
    title: "Villa Sustentável",
    description: "Estrutura inteligente com captação solar e reuso de água",
    image: project2,
    gallery: {
      infrastructure: [project2Infrastructure, project2Infrastructure2],
      foundation: [project2Foundation],
      equipment: [project2Equipment],
      cad: [project2Cad],
      finishing: [project2Finishing],
    },
  },
  {
    title: "Cobertura Urbana",
    description: "Engenharia estrutural para terraço suspenso premium",
    image: project3,
    gallery: {
      infrastructure: [project3Infrastructure],
      foundation: [project3Foundation],
      equipment: [project3Equipment],
      cad: [project3Cad],
      finishing: [project3Finishing],
    },
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Nossos Projetos
          </h1>
          <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
            Conheça os projetos desenvolvidos com excelência técnica e inovação em engenharia.
          </p>
        </div>

        <div className="flex flex-col gap-6 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden border-border bg-card cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => setSelectedProject(index)}
            >
              <div className="flex flex-col md:flex-row">
                <div className="md:w-2/5 aspect-[16/10] md:aspect-auto overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="md:w-3/5 p-6 flex flex-col justify-center">
                  <h3 className="font-playfair text-2xl md:text-3xl font-semibold mb-3 text-card-foreground">
                    {project.title}
                  </h3>
                  <p className="font-inter text-lg text-muted-foreground">
                    {project.description}
                  </p>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        {selectedProject !== null && (
          <ProjectGallery
            isOpen={selectedProject !== null}
            onClose={() => setSelectedProject(null)}
            projectTitle={projects[selectedProject].title}
            galleryImages={projects[selectedProject].gallery}
          />
        )}
      </div>
    </div>
  );
};

export default Projects;
