import React, { useState } from 'react';
import SEO from '../components/SEO';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'pintura',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      // Reset form could happen here
    }, 1500);
  };

  return (
    <>
      <SEO title="Fale Conosco" description="Solicite um orçamento para manutenção predial em São Paulo. Atendemos WhatsApp e Email." />
      
      <div className="bg-slate-50 min-h-screen py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-center text-slate-900 mb-12">Fale Conosco</h1>

          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Form Side */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold mb-6 text-slate-800">Solicitar Orçamento</h2>
              
              {status === 'success' ? (
                <div className="bg-green-100 border border-green-200 text-green-700 p-6 rounded text-center">
                  <h3 className="font-bold text-lg mb-2">Mensagem Enviada!</h3>
                  <p>Agradecemos o contato. Nossa equipe técnica retornará em breve.</p>
                  <button onClick={() => setStatus('idle')} className="mt-4 text-sm underline">Enviar nova mensagem</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Nome Completo</label>
                    <input 
                      type="text" id="name" name="name" required 
                      className="w-full px-4 py-2 border border-slate-300 rounded focus:ring-2 focus:ring-corporate-lightBlue focus:border-transparent outline-none transition-all"
                      placeholder="Seu nome ou do Condomínio"
                      value={formData.name} onChange={handleChange}
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">E-mail</label>
                      <input 
                        type="email" id="email" name="email" required 
                        className="w-full px-4 py-2 border border-slate-300 rounded focus:ring-2 focus:ring-corporate-lightBlue outline-none"
                        placeholder="seu@email.com"
                        value={formData.email} onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">Telefone / WhatsApp</label>
                      <input 
                        type="tel" id="phone" name="phone" required 
                        className="w-full px-4 py-2 border border-slate-300 rounded focus:ring-2 focus:ring-corporate-lightBlue outline-none"
                        placeholder="(11) 99999-9999"
                        value={formData.phone} onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-1">Tipo de Serviço</label>
                    <select 
                      id="service" name="service" 
                      className="w-full px-4 py-2 border border-slate-300 rounded focus:ring-2 focus:ring-corporate-lightBlue outline-none bg-white"
                      value={formData.service} onChange={handleChange}
                    >
                      <option value="pintura">Pintura de Fachada</option>
                      <option value="lavagem">Lavagem Predial</option>
                      <option value="pastilhas">Reposição de Pastilhas</option>
                      <option value="impermeabilizacao">Impermeabilização</option>
                      <option value="alpinismo">Alpinismo Industrial</option>
                      <option value="outro">Outro</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Mensagem</label>
                    <textarea 
                      id="message" name="message" rows={4}
                      className="w-full px-4 py-2 border border-slate-300 rounded focus:ring-2 focus:ring-corporate-lightBlue outline-none"
                      placeholder="Descreva brevemente sua necessidade..."
                      value={formData.message} onChange={handleChange}
                    ></textarea>
                  </div>

                  <button 
                    type="submit" disabled={status === 'submitting'}
                    className="w-full bg-corporate-blue hover:bg-slate-800 text-white font-bold py-3 px-6 rounded transition-colors flex items-center justify-center gap-2 disabled:opacity-70"
                  >
                    {status === 'submitting' ? 'Enviando...' : <><Send size={18} /> Enviar Solicitação</>}
                  </button>
                </form>
              )}
            </div>

            {/* Info Side */}
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-6 text-slate-800 border-b pb-2">Informações de Contato</h3>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="bg-corporate-accent/20 p-3 rounded-full text-slate-900">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">Endereço</h4>
                      <p className="text-slate-600">Av. Paulista, 35</p>
                      <p className="text-slate-600">São Paulo – SP, 04004-070</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="bg-corporate-accent/20 p-3 rounded-full text-slate-900">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">Telefone / WhatsApp</h4>
                      <p className="text-slate-600">(11) 95177-8099</p>
                      <p className="text-xs text-slate-500 mt-1">Segunda a Sexta: 08:00 - 18:00</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="bg-corporate-accent/20 p-3 rounded-full text-slate-900">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">E-mail</h4>
                      <p className="text-slate-600">contato@solucaoengenhariapredial.com.br</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Map */}
              <div className="rounded-xl overflow-hidden shadow-lg h-80 border-4 border-white">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.327663478985!2d-46.64716182374665!3d-23.564616161421062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa363%3A0x19769f0e13c84852!2sAv.%20Paulista%2C%2035%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001310-000!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr" 
                  width="100%" 
                  height="100%" 
                  style={{border:0}} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mapa de Localização Solução Engenharia"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;