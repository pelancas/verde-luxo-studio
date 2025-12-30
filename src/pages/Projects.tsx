import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import project1 from "@/assets/projects/residencia-ic-lagoa-santa/main.jpg";
import project2 from "@/assets/projects/villa-sustentavel/main.jpg";
import project3 from "@/assets/projects/cobertura-urbana/main.jpg";

const projects = [
  {
    title: "Residencia IC Lagoa Santa",
    description: "Sistema de climatização integrada e automação residencial",
    image: project1,
    slug: "residencia-ic-lagoa-santa",
  },
  {
    title: "Villa Sustentável",
    description: "Estrutura inteligente com captação solar e reuso de água",
    image: project2,
    slug: "villa-sustentavel",
  },
  {
    title: "Cobertura Urbana",
    description: "Engenharia estrutural para terraço suspenso premium",
    image: project3,
    slug: "cobertura-urbana",
  },
];

const Projects = () => {
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
            <Link key={index} to={`/projeto/${project.slug}`}>
              <Card className="overflow-hidden border-border bg-card cursor-pointer hover:shadow-lg transition-shadow">
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
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
