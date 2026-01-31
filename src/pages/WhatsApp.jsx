import { Helmet } from 'react-helmet-async';
import ImageResizer from '../components/ImageResizer';
import AdSense from '../components/AdSense';

function WhatsApp() {
  return (
    <>
      <Helmet>
        <title>Redimensionar Imagem para WhatsApp - Foto de Perfil e Status</title>
        <meta name="description" content="Ajuste suas fotos para o perfil do WhatsApp e Status. Redimensione para 1080x1080 ou o formato ideal para envio rápido. Ferramenta online e grátis." />
      </Helmet>

      <h1>Redimensionar para WhatsApp</h1>
      
      <ImageResizer />

      <div style={{ maxWidth: '800px', margin: '2rem auto', padding: '0 1rem', overflow: 'hidden' }}>
        <p style={{ fontSize: '0.8rem', color: '#999', textAlign: 'center', marginBottom: '0.5rem' }}>Publicidade</p>
        <AdSense slot="1234567890" />
      </div>

      <section className="seo-content">
        <h2>Qual o tamanho ideal para foto de perfil do WhatsApp?</h2>
        <p>
          A foto de perfil do WhatsApp é exibida em formato circular, mas o upload deve ser feito em uma imagem quadrada. 
          A resolução recomendada é de pelo menos <strong>192x192 pixels</strong>, mas para garantir alta qualidade em telas modernas, recomendamos <strong>1080x1080 pixels</strong>.
        </p>
        <p>
          Utilize nosso preset "WhatsApp" para ajustar automaticamente sua imagem para essas dimensões, garantindo que ela fique nítida e centralizada.
        </p>

        <h2>Imagens para Status do WhatsApp</h2>
        <p>
          Assim como os Stories do Instagram, o Status do WhatsApp ocupa a tela inteira do celular. 
          O tamanho ideal é <strong>1080 x 1920 pixels</strong>. Você pode usar o preset "Instagram Story" em nossa ferramenta para obter exatamente essa proporção.
        </p>
      </section>
    </>
  );
}

export default WhatsApp;
