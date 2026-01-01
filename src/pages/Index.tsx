import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import EngineerProfile from "@/components/EngineerProfile";
import Services from "@/components/Services";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Portfolio />
      <EngineerProfile />
      <Services />
      <Contact />
    </div>
  );
};

export default Index;
