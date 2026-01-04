import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface ProjectGalleryProps {
  isOpen: boolean;
  onClose: () => void;
  projectTitle: string;
  galleryImages: {
    infrastructure: string[];
    foundation: string[];
    equipment: string[];
    finishing: string[];
  };
}

const ProjectGallery = ({ isOpen, onClose, projectTitle, galleryImages }: ProjectGalleryProps) => {
  const [selectedCategory, setSelectedCategory] = useState("infrastructure");
  
  const galleryCategories = [
    {
      id: "infrastructure",
      label: "Infraestrutura",
      images: galleryImages.infrastructure,
    },
    {
      id: "foundation",
      label: "Terraplanagem e Fundação",
      images: galleryImages.foundation,
    },
    {
      id: "equipment",
      label: "Máquinas e Equipamentos",
      images: galleryImages.equipment,
    },
    {
      id: "finishing",
      label: "Acabamento",
      images: galleryImages.finishing,
    },
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-playfair text-3xl">{projectTitle}</DialogTitle>
        </DialogHeader>
        
        {/* Mobile: Select Dropdown */}
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
        <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full hidden md:block">
          <TabsList className="grid w-full grid-cols-5">
            {galleryCategories.map((category) => (
              <TabsTrigger 
                key={category.id} 
                value={category.id}
                className="text-xs md:text-sm"
              >
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        {/* Gallery Content (shared by both mobile and desktop) */}
        <div className="mt-6">
          {galleryCategories.map((category) => (
            selectedCategory === category.id && (
              <div key={category.id} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.images.map((image, index) => (
                  <div 
                    key={index} 
                    className="aspect-[4/3] overflow-hidden rounded-lg border border-border"
                  >
                    <img
                      src={image}
                      alt={`${category.label} - Foto ${index + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            )
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectGallery;
