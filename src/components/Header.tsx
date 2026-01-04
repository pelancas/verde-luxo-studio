import { useState } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "@/components/NavLink";
import { Menu, X } from "lucide-react";
import gehausLogo from "@/assets/gehaus-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { to: "/", label: "Início", isNavLink: true },
    { to: "/projeto/residencia-ic-lagoa-santa", label: "Projetos", isNavLink: true },
    { to: "/#EngineerProfile", label: "Sobre", isNavLink: false },
    { to: "/#Services", label: "Serviços", isNavLink: false },
    { to: "/#Contact", label: "Contato", isNavLink: false },
  ];

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="bg-primary">
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* Logo com fundo branco - maior que o header */}
          <Link to="/" className="relative z-10">
            <div className="bg-white p-3 flex items-center justify-center" style={{ marginTop: '-8px', marginBottom: '-24px' }}>
              <img 
                src={gehausLogo} 
                alt="Gehaus Logo" 
                className="h-12 md:h-16 w-auto object-contain"
              />
            </div>
          </Link>

          {/* Menu Desktop */}
          <ul className="hidden md:flex items-center gap-8 py-4 ml-8">
            {menuItems.map((item) => (
              <li key={item.label}>
                {item.isNavLink ? (
                  <NavLink 
                    to={item.to} 
                    className="text-primary-foreground hover:text-primary-foreground/80 font-inter text-sm uppercase tracking-wider transition-colors"
                    activeClassName="font-semibold"
                  >
                    {item.label}
                  </NavLink>
                ) : (
                  <a 
                    href={item.to} 
                    className="text-primary-foreground hover:text-primary-foreground/80 font-inter text-sm uppercase tracking-wider transition-colors"
                  >
                    {item.label}
                  </a>
                )}
              </li>
            ))}
          </ul>

          {/* Botão Mobile */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-primary-foreground p-2"
            aria-label="Menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Menu Mobile */}
        {isMenuOpen && (
          <div className="md:hidden bg-primary border-t border-primary-foreground/10">
            <ul className="container mx-auto px-6 py-4 flex flex-col gap-4">
              {menuItems.map((item) => (
                <li key={item.label}>
                  {item.isNavLink ? (
                    <NavLink 
                      to={item.to}
                      onClick={closeMenu}
                      className="text-primary-foreground hover:text-primary-foreground/80 font-inter text-sm uppercase tracking-wider transition-colors block py-2"
                      activeClassName="font-semibold"
                    >
                      {item.label}
                    </NavLink>
                  ) : (
                    <a 
                      href={item.to}
                      onClick={closeMenu}
                      className="text-primary-foreground hover:text-primary-foreground/80 font-inter text-sm uppercase tracking-wider transition-colors block py-2"
                    >
                      {item.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
