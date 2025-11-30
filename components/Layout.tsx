import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';
import WhatsAppButton from './WhatsAppButton';
import Logo from './Logo';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path ? 'text-corporate-accent font-bold' : 'text-slate-100 hover:text-corporate-accent';

  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Bar */}
      <div className="bg-slate-900 text-slate-300 py-2 text-xs hidden md:block border-b border-slate-700">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex gap-6">
            <span className="flex items-center gap-2"><Phone size={14} /> (11) 95177-8099</span>
            <span className="flex items-center gap-2"><Mail size={14} /> contato@solucaoengenhariapredial.com.br</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={14} /> Av. Paulista, 35 – São Paulo – SP
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-corporate-blue text-white sticky top-0 z-40 shadow-xl">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-4 group">
              <div className="bg-white p-1 rounded-full shadow-md group-hover:shadow-corporate-accent/50 transition-shadow overflow-hidden">
                 <Logo className="w-12 h-12 md:w-14 md:h-14" />
              </div>
              <div className="leading-tight flex flex-col justify-center">
                <h1 className="text-xl md:text-2xl font-bold tracking-wide uppercase text-white">Solução</h1>
                <span className="text-xs md:text-sm text-corporate-accent tracking-widest font-semibold uppercase">Engenharia Predial</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex gap-8 items-center">
              <Link to="/" className={`transition-colors ${isActive('/')}`}>Início</Link>
              <Link to="/services" className={`transition-colors ${isActive('/services')}`}>Serviços</Link>
              <Link to="/about" className={`transition-colors ${isActive('/about')}`}>A Empresa</Link>
              <Link to="/contact" className={`px-5 py-2 bg-corporate-accent text-slate-900 font-bold rounded hover:bg-yellow-400 transition-colors shadow-md`}>
                Solicitar Orçamento
              </Link>
            </nav>

            {/* Mobile Menu Toggle */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <nav className="md:hidden bg-slate-800 border-t border-slate-700 p-4 flex flex-col gap-4">
            <Link to="/" className="block py-2" onClick={() => setIsMenuOpen(false)}>Início</Link>
            <Link to="/services" className="block py-2" onClick={() => setIsMenuOpen(false)}>Serviços</Link>
            <Link to="/about" className="block py-2" onClick={() => setIsMenuOpen(false)}>A Empresa</Link>
            <Link to="/contact" className="block py-2 text-corporate-accent font-bold" onClick={() => setIsMenuOpen(false)}>Solicitar Orçamento</Link>
          </nav>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      <WhatsAppButton />

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Logo className="w-8 h-8" />
              <h3 className="text-white text-lg font-bold">Solução Engenharia</h3>
            </div>
            <p className="mb-4 text-sm leading-relaxed">
              Excelência em manutenção predial e industrial desde 1997. Segurança, qualidade e compromisso com o seu patrimônio.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-white transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-white transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-corporate-accent transition-colors">Página Inicial</Link></li>
              <li><Link to="/services" className="hover:text-corporate-accent transition-colors">Nossos Serviços</Link></li>
              <li><Link to="/about" className="hover:text-corporate-accent transition-colors">Quem Somos</Link></li>
              <li><Link to="/contact" className="hover:text-corporate-accent transition-colors">Fale Conosco</Link></li>
              <li><a href="#" className="hover:text-corporate-accent transition-colors">Blog de Manutenção</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Contato</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-2 items-start">
                <MapPin size={16} className="mt-1 flex-shrink-0 text-corporate-accent" />
                <span>Av. Paulista, 35<br />São Paulo – SP<br />CEP 04004-070</span>
              </li>
              <li className="flex gap-2 items-center">
                <Phone size={16} className="text-corporate-accent" />
                <span>(11) 95177-8099</span>
              </li>
              <li className="flex gap-2 items-center">
                <Mail size={16} className="text-corporate-accent" />
                <span>contato@solucaoengenhariapredial.com.br</span>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Legal</h3>
            <p className="text-sm mb-2">CNPJ: 21.861.878/0001-91</p>
            <p className="text-xs">
              &copy; {new Date().getFullYear()} Solução Engenharia Predial Ltda. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;