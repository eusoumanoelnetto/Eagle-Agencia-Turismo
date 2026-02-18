
import React from 'react';
import { InstagramIcon } from './icons/InstagramIcon';

const Footer: React.FC = () => {
  const socialLinks = [
    {
      name: 'Facebook',
      href: 'https://www.facebook.com',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M24 12.073C24 5.446 18.627 0 12 0S0 5.446 0 12.073c0 5.99 4.387 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.512c-1.49 0-1.955.925-1.955 1.874v2.25h3.327l-.532 3.47h-2.795v8.385C19.613 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/a.eagledigital/',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.204-.012 3.584-.07 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.058 1.28-.072 1.688-.072 4.947 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.28.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.057-1.28.071-1.689.071-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.058-1.69-.072-4.949-.072zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zm12.324-6.257a1.44 1.44 0 1 1 2.881 0 1.44 1.44 0 0 1-2.881 0z" />
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.05-8.736 0-9.643h3.554v1.364c.429-.66 1.191-1.599 2.905-1.599 2.122 0 3.714 1.388 3.714 4.373v5.505zM5.337 8.855c-1.144 0-1.915-.761-1.915-1.712 0-.951.77-1.71 1.956-1.71 1.187 0 1.914.759 1.942 1.71 0 .951-.755 1.712-1.983 1.712zm1.946 11.597H3.392V9.809h3.891v10.643zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
        </svg>
      ),
    },
    {
      name: 'WhatsApp',
      href: 'https://wa.me',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.419-7.956c.504 0 1.008.149 1.492.441l.109.063 1.104-.286-.282 1.082.079.098c.326.405.515.929.515 1.465 0 1.666-1.356 3.022-3.022 3.022-1.666 0-3.021-1.356-3.021-3.022 0-1.666 1.356-3.022 3.022-3.022m5.023-9.05C6.063 2.266.06 8.27.06 15.516c0 2.394.577 4.72 1.68 6.778l-1.782 6.514 6.728-1.763c1.985 1.083 4.21 1.655 6.514 1.655 7.247 0 13.25-6.003 13.25-13.25S22.763 2.266 15.516 2.266" />
        </svg>
      ),
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
                  className="w-11 h-11 flex items-center justify-center rounded-full border border-gray-700/70 text-gray-400 hover:text-black hover:bg-brand-gold hover:border-brand-gold/80 transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1"
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
