import gehausLogoBranca from "@/assets/gehauslogobrancargb.png";

const Footer = () => {
  return (
    <footer className="bg-primary py-12">
      <div className="container mx-auto px-6 flex flex-col items-center">
        <img 
          src={gehausLogoBranca} 
          alt="Gehaus Logo" 
          className="h-24 w-auto object-contain mb-6 opacity-80"
        />
        <p className="text-primary-foreground/60 font-inter text-sm">
          © {new Date().getFullYear()} Gehaus. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
