
import React from 'react';
import { InstagramIcon } from './icons/InstagramIcon';
import { FacebookIcon } from './icons/FacebookIcon';
import { LinkedinIcon } from './icons/LinkedinIcon';
import { WhatsAppIcon } from './icons/WhatsAppIcon';

const Footer: React.FC = () => {
  const socialLinks = [
    {
      name: 'Facebook',
      href: 'https://www.facebook.com',
      icon: <FacebookIcon className="w-6 h-6 transition-transform duration-200 group-hover:scale-110" aria-hidden="true" />,
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/a.eagledigital/',
      icon: <InstagramIcon className="w-6 h-6 transition-transform duration-200 group-hover:scale-110" aria-hidden="true" />,
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com',
      icon: <LinkedinIcon className="w-6 h-6 transition-transform duration-200 group-hover:scale-110" aria-hidden="true" />,
    },
    {
      name: 'WhatsApp',
      href: 'https://wa.me',
      icon: <WhatsAppIcon className="w-6 h-6 transition-transform duration-200 group-hover:scale-110" aria-hidden="true" />,
    },
  ];

  return (
    <footer className="bg-brand-gray dark:bg-black text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Logo e Descrição */}
          <div>
            <img 
              src="https://blogger.googleusercontent.com/img/a/AVvXsEhXgPFQIeTNOR-nGiUs4XHw9yUrocFME3YJsXr2p6uh8kbaDHSazM_OAqX8k2NVDv1FtHBrsPFADs5cyQh5asD2AHm9KFDZ4I6FhG4hS61t5DG6iouwzest0RSbnAYLHfJxBg52XIrg-wm_ngawLug34MPlDVusjWU8omeD9KXntbRkyOeLVZUmD4V3rq8=s1600" 
              alt="Eagle Agência Digital Logo" 
              className="h-16 mb-4" 
            />
            <p className="text-sm text-gray-400">
              Transformando o cenário de negócios no Brasil com tecnologia, inteligência de dados e estratégias digitais validadas.
            </p>
            <div className="flex gap-3 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="group w-11 h-11 flex items-center justify-center rounded-full border border-gray-700/70 text-gray-400 hover:text-black hover:bg-brand-gold hover:border-brand-gold/80 transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-brand-gold"
                >
                  <span className="sr-only">{social.name}</span>
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navegação */}
          <div>
            <h3 className="text-sm font-bold tracking-wider mb-4 pb-2 border-b border-brand-gold">NAVEGAÇÃO</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-400 hover:text-brand-gold transition text-sm">Soluções</a></li>
              <li><a href="#agency" className="text-gray-400 hover:text-brand-gold transition text-sm">Sobre a Agência</a></li>
              <li><a href="#differentials" className="text-gray-400 hover:text-brand-gold transition text-sm">Nossos Diferenciais</a></li>
              <li><a href="#cases" className="text-gray-400 hover:text-brand-gold transition text-sm">Cases de Sucesso</a></li>
              <li><a href="#blog" className="text-gray-400 hover:text-brand-gold transition text-sm">Blog</a></li>
            </ul>
          </div>

          {/* Políticas */}
          <div>
            <h3 className="text-sm font-bold tracking-wider mb-4 pb-2 border-b border-brand-gold">POLÍTICAS</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-brand-gold transition text-sm">Política de Privacidade</a></li>
              <li><a href="#" className="text-gray-400 hover:text-brand-gold transition text-sm">Política de Cookies</a></li>
              <li><a href="#" className="text-gray-400 hover:text-brand-gold transition text-sm">Termos de Serviço</a></li>
              <li><a href="#" className="text-gray-400 hover:text-brand-gold transition text-sm">Propoosta Comercial</a></li>
            </ul>
          </div>

          {/* Fale Conosco */}
          <div>
            <h3 className="text-sm font-bold tracking-wider mb-4 pb-2 border-b border-brand-gold">FALE CONOSCO</h3>
            <ul className="space-y-3">
              <li>
                <a href="tel:+5593999999999" className="text-gray-400 hover:text-brand-gold transition text-sm flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.72l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/></svg>
                  (93) 99999-9999
                </a>
              </li>
              <li>
                <a href="mailto:contato@eagledigital.com.br" className="text-gray-400 hover:text-brand-gold transition text-sm flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                  contato@eagledigital.com.br
                </a>
              </li>
              <li>
                <button className="text-brand-gold hover:bg-brand-gold hover:text-black transition text-sm font-semibold py-2 px-4 border border-brand-gold rounded">
                  Solicitar Contato →
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
            <p>&copy; 2026 Eagle Digital. Todos os direitos reservados.</p>
            <div className="flex items-center gap-2 mt-4 md:mt-0">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/></svg>
              <span>Base na 🌍 Amazônia, para o Brasil</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
