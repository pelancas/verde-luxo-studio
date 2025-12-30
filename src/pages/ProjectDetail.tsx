import { ArrowLeft, ZoomIn, X } from "lucide-react";
import { useState } from "react";

// ============================================
// CONFIGURAÇÃO DOS PROJETOS
// ============================================
const projectsData: Record<string, {
  title: string;
  description: string;
  location?: string;
  year?: string;
  area?: string;
}> = {
  "residencia-ic-lagoa-santa": {
    title: "Residência IC Lagoa Santa",
    description: "Sistema de climatização integrada e automação residencial",
    location: "Lagoa Santa, MG",
    year: "2024",
    area: "350m²",
  },
  "villa-sustentavel": {
    title: "Villa Sustentável",
    description: "Estrutura inteligente com captação solar e reuso de água",
    location: "Belo Horizonte, MG",
    year: "2023",
    area: "420m²",
  },
  "cobertura-urbana": {
    title: "Cobertura Urbana",
    description: "Engenharia estrutural para terraço suspenso premium",
    location: "Nova Lima, MG",
    year: "2024",
    area: "280m²",
  },
};

// ============================================
// FUNÇÃO PARA IMPORTAR IMAGENS AUTOMATICAMENTE
// ============================================
// Esta função pega TODAS as imagens da pasta do projeto
const importProjectImages = (projectSlug: string) => {
  // import.meta.glob busca todos os arquivos que correspondem ao padrão
  const images = import.meta.glob('/assets/projects/**/*.{jpg,jpeg,png,webp}', { eager: true });
  
  const projectImages: string[] = [];
  
  Object.entries(images).forEach(([path, module]: [string, any]) => {
    // Filtra apenas as imagens da pasta do projeto específico
    if (path.includes(`/projects/${projectSlug}/`)) {
      projectImages.push(module.default);
    }
  });
  
  return projectImages;
};

// ============================================
// COMPONENTE PRINCIPAL
// ============================================
const ProjectGalleryAuto = () => {
  const [currentProject, setCurrentProject] = useState<string>("residencia-ic-lagoa-santa");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const project = projectsData[currentProject];
  // Carrega automaticamente todas as imagens da pasta
  const images = importProjectImages(currentProject);

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 py-12">
        
        {/* Seletor de Projetos */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-4">Nossos Projetos</h1>
          <div className="flex flex-wrap gap-2">
            {Object.entries(projectsData).map(([slug, proj]) => (
              <button
                key={slug}
                onClick={() => setCurrentProject(slug)}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  currentProject === slug
                    ? 'bg-slate-900 text-white shadow-md'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {proj.title}
              </button>
            ))}
          </div>
        </div>

        {/* Hero Section do Projeto */}
        <div className="mb-12">
          {images[0] && (
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl mb-8">
              <img
                src={images[0]}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 text-white">
                <h2 className="text-4xl font-bold mb-2">
                  {project.title}
                </h2>
                <p className="text-lg text-white/90 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-4 text-sm">
                  {project.location && <span>📍 {project.location}</span>}
                  {project.year && <span>📅 {project.year}</span>}
                  {project.area && <span>📐 {project.area}</span>}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Galeria */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-slate-900">
              Galeria
            </h3>
            <span className="text-sm text-slate-600 bg-white px-3 py-1 rounded-full border">
              {images.length} {images.length === 1 ? 'foto' : 'fotos'}
            </span>
          </div>

          {images.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {images.map((image, index) => (
                <div
                  key={index}
                  className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer bg-slate-200 shadow-md hover:shadow-xl transition-all"
                  onClick={() => setSelectedImage(image)}
                >
                  <img
                    src={image}
                    alt={`${project.title} - Foto ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                    <ZoomIn className="w-10 h-10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white rounded-xl border-2 border-dashed border-slate-300">
              <p className="text-slate-600 text-lg mb-2">
                📸 Nenhuma imagem disponível
              </p>
              <p className="text-sm text-slate-500">
                Adicione fotos em: <code className="bg-slate-100 px-2 py-1 rounded text-xs">
                  /assets/projects/{currentProject}/
                </code>
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Lightbox (Modal para imagem ampliada) */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-slate-300 transition-colors"
          >
            <X className="w-10 h-10" />
          </button>
          <img
            src={selectedImage}
            alt="Imagem ampliada"
            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default ProjectGalleryAuto;