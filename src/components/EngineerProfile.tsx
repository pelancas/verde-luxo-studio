import { Award, GraduationCap, Building2, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import engineerPhoto from "@/assets/engineer-profile.jpg";

const EngineerProfile = () => {
  const qualifications = [
    "CREA Ativo - Registro Profissional",
    "Especialização em Estruturas de Alto Padrão",
    "MBA em Gestão de Projetos Complexos",
    "Certificação LEED em Construção Sustentável",
  ];

  const stats = [
    { icon: Building2, label: "Projetos Executados", value: "150+" },
    { icon: Award, label: "Anos de Experiência", value: "20+" },
    { icon: GraduationCap, label: "Certificações", value: "12" },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Engenheiro Responsável
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
            Conheça o profissional que transforma projetos de luxo em realidade
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="order-2 lg:order-1">
            <h3 className="font-playfair text-3xl font-bold mb-4 text-foreground">
              Eng. Ricardo Mendes
            </h3>
            <p className="font-inter text-lg text-muted-foreground mb-6">
              Engenheiro Civil especializado em projetos de alto padrão, com mais de duas 
              décadas de experiência em construções de luxo. Formado pela Universidade de 
              São Paulo (USP), possui especializações em estruturas complexas e sustentabilidade.
            </p>

            <div className="grid grid-cols-3 gap-4 mb-8">
              {stats.map((stat, index) => (
                <Card key={index} className="bg-secondary/30 border-border">
                  <CardContent className="p-4 text-center">
                    <stat.icon className="w-8 h-8 mx-auto mb-2 text-primary" />
                    <p className="font-playfair text-2xl font-bold text-foreground mb-1">
                      {stat.value}
                    </p>
                    <p className="font-inter text-xs text-muted-foreground">
                      {stat.label}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="space-y-3">
              <h4 className="font-playfair text-xl font-semibold text-foreground mb-4">
                Qualificações
              </h4>
              {qualifications.map((qual, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="font-inter text-muted-foreground">{qual}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="aspect-[3/4] overflow-hidden rounded-lg shadow-2xl">
                <img
                  src={engineerPhoto}
                  alt="Eng. Ricardo Mendes - Engenheiro Civil Responsável"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-lg shadow-xl">
                <p className="font-playfair text-4xl font-bold">20+</p>
                <p className="font-inter text-sm">Anos de Excelência</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EngineerProfile;
