import React from 'react';
import SEO from '../components/SEO';
import { Award, ShieldCheck, Users, Clock } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Pintura', value: 40 },
  { name: 'Restauração', value: 30 },
  { name: 'Limpeza', value: 20 },
  { name: 'Impermeabilização', value: 10 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const About: React.FC = () => {
  return (
    <>
      <SEO title="Quem Somos" description="História da Solução Engenharia Predial. Missão, visão e compromisso com a segurança desde 1997." />
      
      {/* Header Info */}
      <section className="bg-corporate-blue text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Nossa História</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Desde 1997 transformando a paisagem urbana de São Paulo com segurança e excelência técnica.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Sobre a Solução Engenharia</h2>
              <p className="text-slate-600 mb-4 leading-relaxed">
                Fundada em 1997, a Solução Engenharia Predial Ltda nasceu com o objetivo de elevar o padrão de qualidade nos serviços de manutenção predial em São Paulo. Localizada no coração da cidade, na Av. Paulista, atendemos condomínios, empresas e indústrias com rigor técnico absoluto.
              </p>
              <p className="text-slate-600 mb-4 leading-relaxed">
                Nosso diferencial está na capacitação contínua. Todos os nossos colaboradores passam por treinamentos rigorosos de segurança (NR-35, NR-18) e técnicas de aplicação de materiais.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-slate-50 p-4 rounded border border-slate-100 text-center">
                  <Clock className="mx-auto text-corporate-accent mb-2" size={32} />
                  <span className="block font-bold text-2xl text-slate-800">+25 Anos</span>
                  <span className="text-sm text-slate-500">de Mercado</span>
                </div>
                <div className="bg-slate-50 p-4 rounded border border-slate-100 text-center">
                  <Users className="mx-auto text-corporate-accent mb-2" size={32} />
                  <span className="block font-bold text-2xl text-slate-800">+500</span>
                  <span className="text-sm text-slate-500">Projetos Entregues</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://picsum.photos/id/435/800/600" 
                alt="Equipe de engenharia analisando projeto" 
                loading="lazy"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg border-l-4 border-corporate-accent max-w-xs hidden md:block">
                <p className="font-bold text-slate-800 italic">"Segurança não é negociável. É a base de todo nosso trabalho."</p>
              </div>
            </div>
          </div>

          {/* Mission/Vision/Values */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-corporate-lightBlue">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Award className="text-corporate-lightBlue" /> Missão
              </h3>
              <p className="text-slate-600">
                Prover soluções de engenharia e manutenção que valorizem o patrimônio dos clientes, garantindo a integridade física de todos os envolvidos.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-corporate-accent">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <EyeIcon className="text-corporate-accent" /> Visão
              </h3>
              <p className="text-slate-600">
                Ser referência absoluta em manutenção de fachadas em São Paulo, reconhecida pela excelência técnica e inovação em acesso por cordas.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-slate-800">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <ShieldCheck className="text-slate-800" /> Valores
              </h3>
              <ul className="text-slate-600 space-y-2">
                <li>• Segurança em primeiro lugar</li>
                <li>• Transparência nos orçamentos</li>
                <li>• Respeito ao meio ambiente</li>
                <li>• Qualidade técnica superior</li>
              </ul>
            </div>
          </div>

          {/* Safety & Chart Section */}
          <div className="bg-slate-50 rounded-2xl p-8 md:p-12">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-slate-900">Distribuição de Serviços</h2>
              <p className="text-slate-600">Nosso foco técnico nos últimos anos</p>
            </div>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-12">
               <div className="w-full md:w-1/2 h-64">
                 <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        fill="#8884d8"
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {data.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                      <Legend />
                    </PieChart>
                 </ResponsiveContainer>
               </div>
               <div className="w-full md:w-1/2">
                 <h3 className="text-2xl font-bold mb-4 text-slate-800">Compromisso com Segurança</h3>
                 <p className="text-slate-600 mb-4">
                   Não iniciamos nenhuma obra sem o planejamento rigoroso de segurança. Utilizamos equipamentos homologados e seguimos estritamente as normas regulamentadoras.
                 </p>
                 <ul className="grid grid-cols-2 gap-3 text-sm font-semibold text-slate-700">
                   <li className="flex items-center gap-2"><div className="w-2 h-2 bg-green-500 rounded-full"></div> PPRA / PCMSO</li>
                   <li className="flex items-center gap-2"><div className="w-2 h-2 bg-green-500 rounded-full"></div> Seguro de Vida</li>
                   <li className="flex items-center gap-2"><div className="w-2 h-2 bg-green-500 rounded-full"></div> Seguro de Responsabilidade Civil</li>
                   <li className="flex items-center gap-2"><div className="w-2 h-2 bg-green-500 rounded-full"></div> ART (Anotação de Resp. Técnica)</li>
                 </ul>
               </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

// Helper icon component since Lucide Eye requires import
const EyeIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" height="24" viewBox="0 0 24 24" 
    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" 
    className={className}
  >
    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/>
    <circle cx="12" cy="12" r="3"/>
  </svg>
);

export default About;