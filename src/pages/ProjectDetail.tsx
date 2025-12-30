import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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

const projectsData: Record<string, {
  title: string;
  description: string;
  image: string;
  gallery: {
    infrastructure: string[];
    foundation: string[];
    equipment: string[];
    cad: string[];
    finishing: string[];
  };
}> = {
  "residencia-ic-lagoa-santa": {
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
  "villa-sustentavel": {
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
  "cobertura-urbana": {
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
};

const galleryCategories = [
  { id: "infrastructure", label: "Infraestrutura" },
  { id: "foundation", label: "Fundação" },
  { id: "equipment", label: "Equipamentos" },
  { id: "cad", label: "CAD" },
  { id: "finishing", label: "Acabamento" },
];

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [selectedCategory, setSelectedCategory] = useState("infrastructure");

  const project = slug ? projectsData[slug] : null;

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-playfair text-3xl font-bold mb-4 text-foreground">
            Projeto não encontrado
          </h1>
          <Link to="/projetos">
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar aos Projetos
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const currentImages = project.gallery[selectedCategory as keyof typeof project.gallery] || [];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-12">
        <Link to="/projetos">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar aos Projetos
          </Button>
        </Link>

        <div className="mb-12">
          <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden mb-8">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <h1 className="font-playfair text-3xl md:text-5xl font-bold text-foreground mb-2">
                {project.title}
              </h1>
              <p className="font-inter text-lg text-muted-foreground">
                {project.description}
              </p>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="font-playfair text-2xl md:text-3xl font-semibold mb-6 text-foreground">
            Galeria do Projeto
          </h2>

          {/* Mobile: Select dropdown */}
          <div className="md:hidden mb-6">
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Selecione uma categoria" />
              </SelectTrigger>
              <SelectContent>
                {galleryCategories.map((category) => (
                  <SelectItem key={category.id} value={category.id}>
                    {category.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Desktop: Tabs */}
          <div className="hidden md:block">
            <Tabs value={selectedCategory} onValueChange={setSelectedCategory}>
              <TabsList className="mb-6">
                {galleryCategories.map((category) => (
                  <TabsTrigger key={category.id} value={category.id}>
                    {category.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentImages.map((image, index) => (
              <div
                key={index}
                className="aspect-[4/3] rounded-lg overflow-hidden border border-border"
              >
                <img
                  src={image}
                  alt={`${project.title} - ${selectedCategory} ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>

          {currentImages.length === 0 && (
            <p className="text-center text-muted-foreground py-12">
              Nenhuma imagem disponível nesta categoria.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
