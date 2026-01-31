import { Helmet } from 'react-helmet-async';

function Privacy() {
  return (
    <div className="privacy-page">
      <Helmet>
        <title>Política de Privacidade - TonRedimensionar</title>
        <meta name="description" content="Política de privacidade do TonRedimensionar. Saiba como tratamos seus dados e por que nosso processamento local garante sua segurança." />
      </Helmet>

      <h1>Política de Privacidade</h1>
      
      <div className="card privacy-content">
        <p>Última atualização: {new Date().toLocaleDateString()}</p>

        <section>
          <h2>1. Processamento de Imagens</h2>
          <p>
            O <strong>TonRedimensionar</strong> é uma ferramenta que preza pela sua privacidade. 
            Queremos deixar claro que <strong>nenhuma imagem é enviada para nossos servidores</strong>. 
            Todo o processamento de redimensionamento e conversão de imagens ocorre localmente, no seu próprio navegador (Client-side), utilizando tecnologias modernas como HTML5 Canvas.
          </p>
          <p>
            Isso significa que suas fotos pessoais, documentos ou qualquer arquivo que você carregar nunca saem do seu dispositivo (computador ou celular) e não temos acesso a eles em nenhum momento.
          </p>
        </section>

        <section>
          <h2>2. Coleta de Dados</h2>
          <p>
            Como não realizamos upload de imagens, não armazenamos seus arquivos. 
            Não solicitamos cadastro, e-mail ou informações pessoais para o uso da ferramenta.
          </p>
        </section>

        <section>
          <h2>3. Cookies e Publicidade</h2>
          <p>
            Podemos utilizar cookies de terceiros para melhorar sua experiência de navegação e exibir anúncios relevantes. 
            Especificamente, utilizamos o <strong>Google AdSense</strong> para exibir publicidade.
          </p>
          <ul>
            <li>
              O Google utiliza cookies para exibir anúncios com base nas suas visitas anteriores a este ou a outros websites.
            </li>
            <li>
              O uso de cookies de publicidade permite que o Google e seus parceiros exibam anúncios com base na sua navegação.
            </li>
            <li>
              Você pode desativar a publicidade personalizada acessando as <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer">Configurações de Anúncios</a>.
            </li>
          </ul>
        </section>

        <section>
          <h2>4. Alterações nesta Política</h2>
          <p>
            Podemos atualizar nossa Política de Privacidade periodicamente. Recomendamos que você revise esta página regularmente para quaisquer alterações.
          </p>
        </section>

        <section>
          <h2>5. Contato</h2>
          <p>
            Se tiver dúvidas sobre nossa política de privacidade, entre em contato conosco através dos canais disponíveis no site.
          </p>
        </section>
      </div>
    </div>
  );
}

export default Privacy;
