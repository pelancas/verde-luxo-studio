import { Link } from "react-router-dom";
import { NavLink } from "@/components/NavLink";
import gehausLogo from "@/assets/gehaus-logo.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="bg-primary">
        <div className="container mx-auto px-6 flex items-center">
          {/* Logo com fundo branco - maior que o header */}
          <Link to="/" className="relative z-10">
            <div className="bg-white p-3 flex items-center justify-center" style={{ marginTop: '-8px', marginBottom: '-24px' }}>
              <img 
                src={gehausLogo} 
                alt="Gehaus Logo" 
                className="h-16 w-auto object-contain"
              />
            </div>
          </Link>

          {/* Menu */}
          <ul className="flex items-center gap-8 py-4 ml-8">
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
                to="/projeto/residencia-ic-lagoa-santa" 
                className="text-primary-foreground hover:text-primary-foreground/80 font-inter text-sm uppercase tracking-wider transition-colors"
                activeClassName="font-semibold"
              >
                Projetos
              </NavLink>
            </li>
            <li>
              <a 
                href="/#EngineerProfile" 
                className="text-primary-foreground hover:text-primary-foreground/80 font-inter text-sm uppercase tracking-wider transition-colors"
              >
                Sobre
              </a>
            </li>
            <li>
              <a 
                href="/#Services" 
                className="text-primary-foreground hover:text-primary-foreground/80 font-inter text-sm uppercase tracking-wider transition-colors"
              >
                Serviços
              </a>
            </li>
            <li>
              <a 
                href="/#Contact" 
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
