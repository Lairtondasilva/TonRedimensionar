import { Helmet } from 'react-helmet-async';
import ImageResizer from '../components/ImageResizer';
import AdSense from '../components/AdSense';

function Photo3x4() {
  return (
    <>
      <Helmet>
        <title>Foto 3x4 Online - Criar e Redimensionar Grátis</title>
        <meta name="description" content="Crie fotos 3x4 online para documentos. Redimensione suas imagens para o formato padrão de identidade e documentos. Rápido, fácil e sem cadastro." />
      </Helmet>

      <h1>Criar Foto 3x4 Online</h1>
      
      <ImageResizer />

      <div style={{ maxWidth: '800px', margin: '2rem auto', padding: '0 1rem', overflow: 'hidden' }}>
        <p style={{ fontSize: '0.8rem', color: '#999', textAlign: 'center', marginBottom: '0.5rem' }}>Publicidade</p>
        <AdSense slot="1234567890" />
      </div>

      <section className="seo-content">
        <h2>Como fazer uma foto 3x4 pelo celular ou PC?</h2>
        <p>
          A foto 3x4 é o padrão brasileiro para documentos como RG, Carteira de Trabalho e crachás. 
          Digitalmente, a proporção 3:4 é o mais importante. Em pixels, uma boa resolução para impressão ou envio digital é <strong>600x800 pixels</strong> (ou múltiplos dessa proporção).
        </p>
        <p>
          Nossa ferramenta possui um preset exclusivo "Foto 3x4" que ajusta as dimensões automaticamente. 
          Basta tirar uma foto com fundo branco (ou claro), fazer o upload e redimensionar.
        </p>

        <h2>Dicas para uma boa foto de documento</h2>
        <ul>
          <li>Use um fundo neutro e bem iluminado.</li>
          <li>Mantenha o rosto centralizado e olhando para a câmera.</li>
          <li>Evite sombras fortes no rosto.</li>
          <li>Não use acessórios que cubram o rosto (como óculos escuros ou chapéus).</li>
        </ul>
      </section>
    </>
  );
}

export default Photo3x4;
