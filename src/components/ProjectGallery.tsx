import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface ProjectGalleryProps {
  isOpen: boolean;
  onClose: () => void;
  projectTitle: string;
  galleryImages: {
    infrastructure: string[];
    foundation: string[];
    equipment: string[];
    cad: string[];
    finishing: string[];
  };
}

const ProjectGallery = ({ isOpen, onClose, projectTitle, galleryImages }: ProjectGalleryProps) => {
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
      id: "cad",
      label: "Desenho e CAD",
      images: galleryImages.cad,
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
        
        <Tabs defaultValue="infrastructure" className="w-full">
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
          
          {galleryCategories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
            </TabsContent>
          ))}
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectGallery;
