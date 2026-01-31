import { Helmet } from 'react-helmet-async';
import ImageResizer from '../components/ImageResizer';
import AdSense from '../components/AdSense';

function Instagram() {
  return (
    <>
      <Helmet>
        <title>Redimensionar para Instagram - Feed e Stories (1080x1080 / 1080x1920)</title>
        <meta name="description" content="Ferramenta gratuita para ajustar fotos para o Instagram. Crie posts quadrados (Feed) ou verticais (Stories/Reels) com as dimensões exatas. Sem perda de qualidade." />
      </Helmet>

      <h1>Redimensionar Foto para Instagram</h1>
      
      <ImageResizer />

      <div style={{ maxWidth: '800px', margin: '2rem auto', padding: '0 1rem', overflow: 'hidden' }}>
        <p style={{ fontSize: '0.8rem', color: '#999', textAlign: 'center', marginBottom: '0.5rem' }}>Publicidade</p>
        <AdSense slot="1234567890" />
      </div>

      <section className="seo-content">
        <h2>Como deixar a foto do tamanho certo para o Instagram?</h2>
        <p>
          O Instagram é uma plataforma visual, e usar o tamanho correto de imagem é fundamental para manter a qualidade e o engajamento. 
          Nossa ferramenta oferece presets automáticos para os dois formatos mais populares:
        </p>
        <ul>
          <li><strong>Feed (Quadrado):</strong> 1080 x 1080 pixels (Proporção 1:1)</li>
          <li><strong>Stories e Reels:</strong> 1080 x 1920 pixels (Proporção 9:16)</li>
        </ul>
        <p>
          Basta selecionar o preset desejado acima, carregar sua foto e baixar a versão otimizada em segundos. 
          Evite cortes indesejados ou imagens pixeladas no seu perfil.
        </p>

        <h2>Formatos Aceitos</h2>
        <p>
          O Instagram aceita principalmente JPG e PNG. Nossa ferramenta permite exportar em ambos os formatos, garantindo compatibilidade total com o aplicativo.
        </p>
      </section>
    </>
  );
}

export default Instagram;
