import React from 'react';
import SEO from '../components/SEO';
import { Check } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <>
      <SEO 
        title="Nossos Serviços" 
        description="Pintura, lavagem, restauração e impermeabilização de fachadas em São Paulo. Técnicas de rapel e balancim."
      />
      
      <div className="bg-slate-100 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-slate-900 mb-4 text-center">Nossos Serviços</h1>
          <p className="text-slate-600 text-center max-w-2xl mx-auto mb-16">
            Soluções completas em engenharia e manutenção predial, executadas por profissionais certificados e com rigoroso controle de segurança.
          </p>

          <div className="space-y-16">
            <ServiceSection 
              id="pintura"
              title="Pintura de Fachadas"
              description="A pintura predial não é apenas estética, é a primeira barreira de proteção do edifício. Utilizamos tintas elastoméricas de alta durabilidade que protegem contra fissuras e infiltrações."
              benefits={[
                "Valorização do imóvel",
                "Proteção contra chuva e sol",
                "Correção de microfissuras",
                "Cores modernas e duráveis"
              ]}
              image="https://picsum.photos/id/122/800/500"
              alt="Pintor industrial utilizando cordas para pintar lateral de prédio alto"
              reversed={false}
            />

            <ServiceSection 
              id="lavagem"
              title="Lavagem e Limpeza Predial"
              description="Utilizamos hidrojateamento de alta pressão controlado para remover fuligem, fungos e poluição sem danificar o revestimento original. Ideal para pastilhas, texturas e vidros."
              benefits={[
                "Remoção de manchas de poluição",
                "Eliminação de fungos e limo",
                "Revitalização do brilho",
                "Economia na manutenção corretiva"
              ]}
              image="https://picsum.photos/id/203/800/500"
              alt="Equipe realizando hidrojateamento em fachada de vidro"
              reversed={true}
            />

            <ServiceSection 
              id="restauracao"
              title="Restauração e Reposição de Pastilhas"
              description="Realizamos o teste de percussão em toda a fachada para identificar áreas descoladas. Fazemos a reposição com materiais compatíveis e rejuntamento total para garantir a estanqueidade."
              benefits={[
                "Segurança para pedestres e moradores",
                "Estética uniforme",
                "Prevenção de infiltrações profundas",
                "Laudo técnico fotográfico"
              ]}
              image="https://picsum.photos/id/53/800/500"
              alt="Engenheiro inspecionando pastilhas em prédio"
              reversed={false}
            />

            <ServiceSection 
              id="alpinismo"
              title="Alpinismo Industrial (Acesso por Corda)"
              description="Nossa equipe é certificada em IRATA/ANEAC. O acesso por cordas permite agilidade, menor custo e alcance em áreas onde balancins e andaimes não chegam, com total segurança."
              benefits={[
                "Montagem rápida (sem andaimes)",
                "Menor impacto na rotina do condomínio",
                "Acesso a áreas confinadas ou difíceis",
                "Custo-benefício superior"
              ]}
              image="https://picsum.photos/id/95/800/500"
              alt="Profissional de acesso por corda descendo em fachada"
              reversed={true}
            />
          </div>
        </div>
      </div>
    </>
  );
};

interface ServiceSectionProps {
  id: string;
  title: string;
  description: string;
  benefits: string[];
  image: string;
  alt: string;
  reversed: boolean;
}

const ServiceSection: React.FC<ServiceSectionProps> = ({ id, title, description, benefits, image, alt, reversed }) => (
  <div id={id} className={`flex flex-col md:flex-row gap-8 items-center ${reversed ? 'md:flex-row-reverse' : ''} bg-white p-8 rounded-xl shadow-sm`}>
    <div className="w-full md:w-1/2">
      <img 
        src={image} 
        alt={alt} 
        loading="lazy"
        className="w-full h-80 object-cover rounded-lg shadow-md" 
      />
    </div>
    <div className="w-full md:w-1/2">
      <h2 className="text-2xl font-bold text-slate-800 mb-4">{title}</h2>
      <p className="text-slate-600 mb-6 leading-relaxed">
        {description}
      </p>
      <ul className="space-y-3 mb-8">
        {benefits.map((benefit, index) => (
          <li key={index} className="flex items-start gap-3">
            <div className="bg-green-100 text-green-600 p-1 rounded-full mt-0.5">
              <Check size={14} />
            </div>
            <span className="text-slate-700">{benefit}</span>
          </li>
        ))}
      </ul>
      <a href="/contact" className="inline-block bg-corporate-blue hover:bg-corporate-lightBlue text-white font-semibold py-2 px-6 rounded transition-colors">
        Pedir Cotação
      </a>
    </div>
  </div>
);

export default Services;