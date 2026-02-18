import React from 'react';
import { InstagramIcon } from './icons/InstagramIcon';

const InstagramFeed: React.FC = () => {
  // Usa proxy para evitar bloqueios de hotlink nas imagens do Instagram
  const getImageSrc = (imageUrl: string) => {
    const sanitizedUrl = imageUrl.replace(/^https?:\/\//, '');
    return `https://images.weserv.nl/?url=${encodeURIComponent(`ssl:${sanitizedUrl}`)}&w=800&h=800&fit=cover&default=404`;
  };

  // Posts do Instagram do perfil @a.eagledigital
  const instagramPosts = [
    {
      url: 'https://www.instagram.com/a.eagledigital/',
      image: 'https://instagram.fqnv10-1.fna.fbcdn.net/v/t51.82787-15/624256435_18020447066802556_6964295008638992703_n.webp?_nc_cat=109&ig_cache_key=MzE1NTUyMTIwMjc1OTk0NDA0MQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTA4MC5zZHIuQzMifQ%3D%3D&_nc_ohc=5auaaVWfg2MQ7kNvwE98SLb&_nc_oc=AdmRBFX8Mbng4JF078qZS3OgtyOr6IKs1gDTFE1Pr6Yq6NzE8fOzlqADc_BaBrZc-h4&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fqnv10-1.fna&_nc_gid=qT9Sjj7rMIpr6KKWMb5RVA&oh=00_AfvikF11tt6O3yxC5SezrEVooMmYhamjEHO1CP9kP2KNrQ&oe=699AEED6',
    },
    {
      url: 'https://www.instagram.com/a.eagledigital/',
      image: 'https://instagram.fqnv10-1.fna.fbcdn.net/v/t51.2885-15/84853814_2518757775007357_1705427010259599861_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQuaW1hZ2VfdXJsZ2VuLjEwNzN4MTA3MS5zZHIuZjI4ODUuZGVmYXVsdF9pbWFnZS5jMiJ9&_nc_ht=instagram.fqnv10-1.fna.fbcdn.net&_nc_cat=101&_nc_oc=Q6cZ2QGhUiR41BP9wSzQRNS5-gufY0Y3iAwQUH192BkcHYZY-fwRTOyVJJr1BBGrt3kAcSY&_nc_ohc=cPLA0zjmmjAQ7kNvwGeJjM9&_nc_gid=b6_t4Nehnm_Q1eio2mPHPQ&edm=AOmX9WgBAAAA&ccb=7-5&ig_cache_key=MjI1MzE4Nzk0MDU0MDEwMjE4Ng%3D%3D.3-ccb7-5&oh=00_Aftu-z7upYQ-HKrhw_0xeYInCcPvbyhu9Zcm3Lpw5AhI-A&oe=699B126F&_nc_sid=bfaa47',
    },
    {
      url: 'https://www.instagram.com/a.eagledigital/',
      image: 'https://instagram.fqnv10-1.fna.fbcdn.net/v/t51.29350-15/362647661_832930998560967_2978910652544828504_n.webp?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0uaW1hZ2VfdXJsZ2VuLjEwODB4MTA4MC5zZHIuZjI5MzUwLmRlZmF1bHRfaW1hZ2UuYzIifQ&_nc_ht=instagram.fqnv10-1.fna.fbcdn.net&_nc_cat=103&_nc_oc=Q6cZ2QHLz9AmKYLk3wPaFLW7iBbHGAgtf7kCFe1856MO4ILiu_nX6GnWlH0j_MkE88FXzjg&_nc_ohc=XX_-FhHX9ssQ7kNvwEF-e4_&_nc_gid=B4ylyMSLtauhvJmsPA1yTA&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzE1NDc2MTMyMTc5NDg4OTcxMQ%3D%3D.3-ccb7-5&oh=00_AfuY_8x6Ctiy_YM8EOFcGlPzlhf5wCRRz-QjHS961A61bA&oe=699B0962&_nc_sid=10d13b',
    },
    {
      url: 'https://www.instagram.com/a.eagledigital/',
      image: 'https://instagram.fqnv10-1.fna.fbcdn.net/v/t51.2885-15/87864548_182991996331248_5235429370463605886_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0uaW1hZ2VfdXJsZ2VuLjEwNzJ4MTA3Mi5zZHIuZjI4ODUuZGVmYXVsdF9pbWFnZS5jMiJ9&_nc_ht=instagram.fqnv10-1.fna.fbcdn.net&_nc_cat=100&_nc_oc=Q6cZ2QFqdb5deeP1Vz_TN1hgTAXj0w5aCFlNFRqJ8jP2A8NAfhWNHAauWcPNkrhHPpUF8P8&_nc_ohc=v2f1Ou6N5VQQ7kNvwE6nLDy&_nc_gid=vQv5kJIvmT6pxsTiqo6Ucw&edm=AOmX9WgBAAAA&ccb=7-5&ig_cache_key=MjI1MzE4ODQzODYzMDQ2MjU5OQ%3D%3D.3-ccb7-5&oh=00_AfuwsxP1xgt5LIrOjhbmtGF6P4XE_1A04NuhFcQDq1LCFQ&oe=699AF97C&_nc_sid=bfaa47',
    },
  ];

  return (
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-brand-blue dark:text-white mb-4">Siga-nos no Instagram</h2>
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">Siga nosso Instagram e fique por dentro das novidades, promoções e conteúdos exclusivos! Interaja, compartilhe e faça parte da nossa comunidade digital.</p>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
        {instagramPosts.map((post, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-xl aspect-square bg-white dark:bg-gray-900 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]"
          >
            {/* Imagem do post com overlay ao hover */}
            <a 
              href={post.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="block w-full h-full relative"
            >
              <img
                src={getImageSrc(post.image)}
                data-original={post.image}
                alt={`Instagram Post ${index + 1}`}
                loading="lazy"
                referrerPolicy="no-referrer"
                crossOrigin="anonymous"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                onError={(e) => {
                  const img = e.currentTarget as HTMLImageElement;
                  const original = img.getAttribute('data-original');
                  const triedOriginal = img.getAttribute('data-tried-original');

                  if (!triedOriginal && original) {
                    img.setAttribute('data-tried-original', 'true');
                    img.src = original;
                    return;
                  }

                  img.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="400"%3E%3Crect fill="%23f0f0f0" width="400" height="400"/%3E%3Ctext x="50%" y="50%" text-anchor="middle" dy=".3em" fill="%23999" font-family="sans-serif" font-size="18"%3EImagem não disponível%3C/text%3E%3C/svg%3E';
                }}
              />
              {/* Overlay escuro ao hover */}
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
              {/* Ícone do Instagram no centro ao hover */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <InstagramIcon className="w-12 h-12 text-white drop-shadow-lg" />
              </div>
            </a>
          </div>
        ))}
      </div>
      
      <a 
        href="https://www.instagram.com/a.eagledigital/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-3 bg-brand-gold hover:bg-yellow-600 text-brand-blue font-bold py-3 px-8 rounded-full text-lg transition duration-300 transform hover:scale-105"
      >
        <InstagramIcon className="w-6 h-6" />
        Ver Perfil
      </a>
    </div>
  );
};

export default InstagramFeed;
