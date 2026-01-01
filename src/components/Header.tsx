import { Link } from "react-router-dom";
import { NavLink } from "@/components/NavLink";
import gehausLogo from "@/assets/gehaus-logo.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Logo com fundo branco */}
      <div className="bg-white flex justify-center py-4">
        <Link to="/">
          <img 
            src={gehausLogo} 
            alt="Gehaus Logo" 
            className="h-20 w-auto object-contain"
          />
        </Link>
      </div>
      
      {/* Menu verde */}
      <nav className="bg-primary">
        <div className="container mx-auto px-6">
          <ul className="flex justify-center items-center gap-8 py-3">
            <li>
              <NavLink 
                to="/" 
                className="text-primary-foreground hover:text-primary-foreground/80 font-inter text-sm uppercase tracking-wider transition-colors"
                activeClassName="font-semibold"
              >
                Início
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/projetos" 
                className="text-primary-foreground hover:text-primary-foreground/80 font-inter text-sm uppercase tracking-wider transition-colors"
                activeClassName="font-semibold"
              >
                Projetos
              </NavLink>
            </li>
            <li>
              <a 
                href="/#about" 
                className="text-primary-foreground hover:text-primary-foreground/80 font-inter text-sm uppercase tracking-wider transition-colors"
              >
                Sobre
              </a>
            </li>
            <li>
              <a 
                href="/#services" 
                className="text-primary-foreground hover:text-primary-foreground/80 font-inter text-sm uppercase tracking-wider transition-colors"
              >
                Serviços
              </a>
            </li>
            <li>
              <a 
                href="/#contact" 
                className="text-primary-foreground hover:text-primary-foreground/80 font-inter text-sm uppercase tracking-wider transition-colors"
              >
                Contato
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
