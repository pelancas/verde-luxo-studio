import { Button } from "@/components/ui/button";
import { Mail, Instagram, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-24 bg-primary text-primary-foreground" id="Contact">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
            Vamos Criar Algo Extraordinário
          </h2>
          <p className="font-inter text-lg mb-12 opacity-90">
            Entre em contato conosco para discutir seu próximo projeto de engenharia. 
            Estamos prontos para desenvolver soluções técnicas inovadoras.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <a 
              href="https://www.instagram.com/gehaus_eng/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-col items-center hover:opacity-80 transition-opacity"
            >
              <div className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center mb-4">
                <Instagram className="w-6 h-6" />
              </div>
              <p className="font-inter font-medium">@gehaus_eng</p>
            </a>

            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center mb-4">
                <Mail className="w-6 h-6" />
              </div>
              <p className="font-inter font-medium">evandro@gehaus.com.br</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6" />
              </div>
              <p className="font-inter font-medium">Belo Horizonte, MG</p>
            </div>
          </div>

          <Button 
            size="lg"
            variant="secondary"
            className="font-inter font-medium text-lg px-8 py-6"
          >
            Agendar Consulta
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
