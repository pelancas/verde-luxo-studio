const About = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Excelência em Cada Detalhe
          </h2>
          <p className="font-inter text-lg text-muted-foreground mb-8 leading-relaxed">
            Especializados em projetos arquitetônicos de alto padrão, criamos espaços únicos 
            que refletem a personalidade e os valores dos nossos clientes. Cada projeto é 
            desenvolvido com atenção meticulosa aos detalhes, incorporando as mais recentes 
            tendências em design sustentável e tecnologia.
          </p>
          <p className="font-inter text-lg text-muted-foreground leading-relaxed">
            Nossa filosofia combina estética contemporânea com funcionalidade excepcional, 
            sempre respeitando o meio ambiente e promovendo o bem-estar dos ocupantes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
