import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { Paintbrush, Droplets, Grid, HardHat, Mountain, CheckCircle, Building2, Star } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <>
      <SEO title="Página Inicial" description="Excelência em manutenção de fachadas e engenharia predial em São Paulo." />

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center text-white overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://picsum.photos/id/1076/1600/900" 
            alt="Trabalhadores em altura com equipamentos de segurança realizando manutenção de fachada"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-slate-900/30"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <span className="inline-block bg-corporate-accent text-slate-900 font-bold px-3 py-1 rounded mb-4 text-sm">
              Desde 1997
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Excelência em <br />Manutenção Predial
            </h1>
            <p className="text-lg md:text-xl text-slate-200 mb-8 max-w-lg">
              Especialistas em fachadas, pintura, limpeza e alpinismo industrial. Segurança total e equipe qualificada na Av. Paulista e região.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="bg-corporate-accent hover:bg-yellow-400 text-slate-900 font-bold py-3 px-8 rounded shadow-lg text-center transition-transform hover:-translate-y-1">
                Solicitar Orçamento
              </Link>
              <Link to="/services" className="bg-transparent border-2 border-white hover:bg-white/10 text-white font-bold py-3 px-8 rounded shadow-lg text-center transition-colors">
                Nossos Serviços
              </Link>
            </div>
          </div>
          
          {/* Trust Badge / Highlight */}
          <div className="hidden md:block">
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg border border-white/20 max-w-sm ml-auto">
              <h3 className="text-xl font-bold mb-4 border-b border-white/20 pb-2">Por que nos escolher?</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle className="text-corporate-accent" size={20} />
                  <span>NR-35 Trabalho em Altura</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="text-corporate-accent" size={20} />
                  <span>Equipe Uniformizada e com EPIs</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="text-corporate-accent" size={20} />
                  <span>Mais de 25 anos de experiência</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="text-corporate-accent" size={20} />
                  <span>Materiais de 1ª Linha</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview (Nossas Especialidades) */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Nossas Especialidades</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Oferecemos soluções completas para a manutenção e valorização do seu patrimônio, com técnicas modernas e segurança garantida.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceHighlight 
              icon={Paintbrush}
              title="Pintura de Fachadas"
              description="Revitalização estética e proteção contra intempéries com tintas de alta performance."
              image="https://i.ibb.co/cSBG6NWH/Screenshot-20251128-154659-Chrome.png"
              link="/services#pintura"
            />
            <ServiceHighlight 
              icon={Droplets}
              title="Lavagem Predial"
              description="Hidrojateamento profissional para remoção de poluição, fungos e sujeira incrustada."
              image="https://i.ibb.co/zhDgXRMH/Screenshot-20251128-154059-Chrome.png"
              link="/services#lavagem"
            />
            <ServiceHighlight 
              icon={Grid}
              title="Reposição de Pastilhas"
              description="Teste de percussão e recolocação de pastilhas com materiais compatíveis e seguros."
              image="https://i.ibb.co/ZRWhngwy/Screenshot-20251128-154454-Chrome.png"
              link="/services#restauracao"
            />
            <ServiceHighlight 
              icon={Mountain}
              title="Alpinismo Industrial"
              description="Acesso por cordas para locais de difícil alcance, reduzindo custos com andaimes."
              image="https://i.ibb.co/hFsXnqRV/Screenshot-20251128-160259-Chrome.png"
              link="/services#alpinismo"
            />
            <ServiceHighlight 
              icon={HardHat}
              title="Impermeabilização"
              description="Tratamento de trincas e impermeabilização de lajes e áreas expostas."
              image="https://i.ibb.co/S7m4qB9j/Screenshot-20251128-160544-Chrome.png"
              link="/services#impermeabilizacao"
            />
            <ServiceHighlight 
              icon={Building2}
              title="Manutenção e Retrofit"
              description="Modernização de fachadas e adequações técnicas para valorizar seu imóvel."
              image="https://i.ibb.co/21jX6QH0/Screenshot-20251128-161522-Chrome.png"
              link="/services"
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">O que dizem nossos clientes</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <TestimonialCard 
              name="Carlos Mendes"
              role="Síndico Profissional"
              text="A Solução Engenharia transformou a fachada do nosso prédio na Paulista. A equipe de alpinismo foi extremamente ágil e segura."
            />
            <TestimonialCard 
              name="Ana Paula Souza"
              role="Gerente Predial"
              text="Profissionalismo desde o orçamento até a entrega. A limpeza das pastilhas ficou impecável, parece um prédio novo."
            />
            <TestimonialCard 
              name="Roberto Almeida"
              role="Condomínio Jardins"
              text="Transparência total e cumprimento rigoroso dos prazos. Recomendo para obras grandes que exigem segurança."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-corporate-accent text-slate-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Seu prédio precisa de manutenção?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Não espere os problemas aumentarem. Solicite uma visita técnica gratuita e receba um orçamento detalhado.
          </p>
          <Link to="/contact" className="inline-block bg-slate-900 text-white font-bold py-4 px-10 rounded shadow-lg hover:bg-slate-800 transition-colors text-lg">
            Falar com Especialista
          </Link>
        </div>
      </section>
    </>
  );
};

// Helper Components

interface ServiceHighlightProps {
  icon: React.ElementType;
  title: string;
  description: string;
  image: string;
  link: string;
}

const ServiceHighlight: React.FC<ServiceHighlightProps> = ({ icon: Icon, title, description, image, link }) => (
  <Link to={link} className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full border border-slate-100">
    <div className="h-48 overflow-hidden relative">
      <img 
        src={image} 
        alt={title} 
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-slate-900/30 group-hover:bg-slate-900/10 transition-colors"></div>
    </div>
    <div className="p-6 flex flex-col flex-grow">
      <div className="flex items-center gap-3 mb-3">
        <div className="p-2 bg-corporate-accent/10 rounded-lg text-corporate-lightBlue group-hover:bg-corporate-accent group-hover:text-slate-900 transition-colors">
          <Icon size={24} />
        </div>
        <h3 className="text-xl font-bold text-slate-800 group-hover:text-corporate-lightBlue transition-colors">{title}</h3>
      </div>
      <p className="text-slate-600 mb-4 flex-grow text-sm leading-relaxed">{description}</p>
      <span className="text-corporate-lightBlue font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
        Saiba mais <span className="text-lg">→</span>
      </span>
    </div>
  </Link>
);

interface TestimonialCardProps {
  name: string;
  role: string;
  text: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, role, text }) => (
  <div className="bg-slate-800 p-8 rounded-lg border border-slate-700">
    <div className="flex text-corporate-accent mb-4">
      {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
    </div>
    <p className="text-slate-300 mb-6 italic">"{text}"</p>
    <div>
      <h4 className="font-bold text-white">{name}</h4>
      <span className="text-sm text-slate-500">{role}</span>
    </div>
  </div>
);

export default Home;