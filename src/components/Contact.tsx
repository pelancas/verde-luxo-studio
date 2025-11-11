import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-24 bg-primary text-primary-foreground">
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
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center mb-4">
                <Phone className="w-6 h-6" />
              </div>
              <p className="font-inter font-medium">+55 (11) 9999-9999</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center mb-4">
                <Mail className="w-6 h-6" />
              </div>
              <p className="font-inter font-medium">contato@engenharialuxo.com</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6" />
              </div>
              <p className="font-inter font-medium">São Paulo, SP</p>
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
