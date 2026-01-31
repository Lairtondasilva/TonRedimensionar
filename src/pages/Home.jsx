import { Helmet } from 'react-helmet-async';
import { ShieldCheck, Zap, Smartphone, Layers, CheckCircle } from 'lucide-react';
import ImageResizer from '../components/ImageResizer';
import AdSense from '../components/AdSense';

function Home() {
  return (
    <>
      <Helmet>
        <title>Redimensionar Imagem Online Grátis - Converter e Ajustar Fotos</title>
        <meta name="description" content="Ferramenta gratuita para redimensionar imagens online em segundos. Ajuste o tamanho de fotos JPG, PNG e WEBP para Instagram, WhatsApp e mais. Processamento rápido no navegador." />
      </Helmet>

      <div className="hero-wrapper">
        <div className="hero-content">
          <span className="badge-new">✨ Novo: Recorte Inteligente</span>
          <h1>Redimensionar Imagem Online <span className="text-gradient">Grátis</span></h1>
          <p className="hero-subtitle">
            Ajuste o tamanho das suas fotos para Instagram, WhatsApp e Web em segundos. 
            Rápido, seguro e sem perder qualidade.
          </p>
          <div className="hero-stats">
            <div className="stat-item">
              <CheckCircle size={16} className="text-success" />
              <span>100% Gratuito</span>
            </div>
            <div className="stat-item">
              <CheckCircle size={16} className="text-success" />
              <span>Sem Login</span>
            </div>
            <div className="stat-item">
              <CheckCircle size={16} className="text-success" />
              <span>Processamento Seguro</span>
            </div>
          </div>
        </div>
      </div>
      
      <div style={{ maxWidth: '1200px', margin: '0 auto 2rem', padding: '0 1rem', overflow: 'hidden' }}>
        <p style={{ fontSize: '0.8rem', color: '#999', textAlign: 'center', marginBottom: '0.5rem' }}>Publicidade</p>
        <AdSense slot="8888888888" style={{ display: 'block', minHeight: '100px' }} />
      </div>

      <ImageResizer />

      <div className="features-section">
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon bg-indigo">
              <ShieldCheck size={24} />
            </div>
            <h3>Privacidade Total</h3>
            <p>Suas fotos são processadas direto no navegador. Nenhuma imagem é enviada para servidores.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon bg-pink">
              <Zap size={24} />
            </div>
            <h3>Ultra Rápido</h3>
            <p>Redimensione e corte imagens instantaneamente sem filas de espera ou uploads lentos.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon bg-blue">
              <Smartphone size={24} />
            </div>
            <h3>Mobile Friendly</h3>
            <p>Funciona perfeitamente no seu celular, tablet ou computador. Ajuste fotos em qualquer lugar.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon bg-green">
              <Layers size={24} />
            </div>
            <h3>Alta Qualidade</h3>
            <p>Algoritmos avançados para manter a nitidez das suas fotos mesmo após reduzir o tamanho.</p>
          </div>
        </div>
      </div>

      <div className="visual-showcase">
        <div className="showcase-content">
          <h2>Perfeito para Redes Sociais</h2>
          <p>Garanta que seus posts tenham o impacto visual que merecem com as dimensões exatas.</p>
          <div className="platform-badges">
            <span className="platform-badge instagram">Instagram</span>
            <span className="platform-badge whatsapp">WhatsApp</span>
            <span className="platform-badge linkedin">LinkedIn</span>
            <span className="platform-badge web">Web / SEO</span>
          </div>
        </div>
        <div className="showcase-image">
          <img 
            src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
            alt="Smartphone com Instagram aberto" 
            loading="lazy"
          />
        </div>
      </div>

      <div style={{ maxWidth: '1200px', margin: '2rem auto', padding: '0 1rem', overflow: 'hidden' }}>
        <p style={{ fontSize: '0.8rem', color: '#999', textAlign: 'center', marginBottom: '0.5rem' }}>Publicidade</p>
        <AdSense slot="1234567890" />
      </div>

      <section className="seo-content">
        <h2>Por que usar nosso Redimensionador de Imagem Online?</h2>
        <p>
          Bem-vindo à ferramenta definitiva para <strong>redimensionar imagem online</strong> de forma rápida, segura e totalmente gratuita. 
          Se você precisa ajustar o tamanho de fotos para redes sociais, sites, blogs ou documentos oficiais, você encontrou a solução ideal. 
          Nossa aplicação foi desenvolvida para rodar inteiramente no seu navegador, o que garante <strong>privacidade total</strong>: 
          suas imagens nunca são enviadas para um servidor externo, permanecendo 100% seguras no seu dispositivo.
        </p>

        <div className="info-grid">
          <div className="info-item">
            <h3>📸 Para Fotógrafos</h3>
            <p>Prepare portfólios e previews rápidos sem abrir editores pesados.</p>
          </div>
          <div className="info-item">
            <h3>🛍️ Para E-commerce</h3>
            <p>Padronize fotos de produtos para sua loja virtual em segundos.</p>
          </div>
          <div className="info-item">
            <h3>📄 Para Documentos</h3>
            <p>Ajuste fotos 3x4 e documentos digitalizados para envio online.</p>
          </div>
        </div>

        <h2>Como Redimensionar Foto para Instagram, WhatsApp e LinkedIn?</h2>
        <p>
          Cada rede social exige proporções específicas para garantir que suas fotos não sejam cortadas ou percam qualidade. 
          Ajustar fotos para o <strong>Instagram</strong> (Feed ou Stories), <strong>WhatsApp</strong> ou LinkedIn pode ser uma tarefa complexa manualmente. 
          Com nossos <strong>presets automáticos</strong>, você pode transformar qualquer imagem para o formato exato (como 1080x1080 pixels para posts quadrados ou 1080x1920 para Stories) com apenas um clique. 
          Otimize sua foto de perfil e publicações para engajar mais, mantendo a nitidez e o profissionalismo.
        </p>

        <h2>Conversor de Imagem: Suporte a JPG, PNG e WEBP</h2>
        <p>
          Nossa ferramenta não apenas redimensiona, mas também atua como um conversor flexível. 
          Você pode carregar arquivos nos formatos <strong>JPG</strong>, <strong>PNG</strong> e <strong>WEBP</strong> e exportá-los conforme sua necessidade. 
          Precisa de uma imagem com fundo transparente? Exporte em PNG. Quer um arquivo mais leve para enviar por e-mail ou carregar rápido no seu site? 
          Use a opção de exportação em JPEG com compressão otimizada. Controlar a resolução (largura e altura) nunca foi tão fácil.
        </p>

        <h2>O que é Redimensionamento de Imagem e Por que é Importante?</h2>
        <p>
          <strong>Redimensionar uma imagem</strong> significa alterar suas dimensões de pixels sem necessariamente cortar o conteúdo visual. 
          Isso é crucial para a performance na web (SEO técnico), pois imagens gigantes tornam o carregamento de páginas lento, prejudicando a experiência do usuário e o ranqueamento no Google. 
          Além disso, reduzir o tamanho das fotos economiza espaço de armazenamento no seu celular ou computador e dados móveis ao compartilhar arquivos.
        </p>
      </section>
    </>
  );
}

export default Home;
