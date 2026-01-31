import { Helmet } from 'react-helmet-async';

function Terms() {
  return (
    <div className="terms-page">
      <Helmet>
        <title>Termos de Uso - TonRedimensionar</title>
        <meta name="description" content="Termos de uso do TonRedimensionar. Leia sobre as responsabilidades do usuário e limitações do serviço." />
      </Helmet>

      <h1>Termos de Uso</h1>
      
      <div className="card terms-content">
        <p>Última atualização: {new Date().toLocaleDateString()}</p>

        <section>
          <h2>1. Aceitação dos Termos</h2>
          <p>
            Ao acessar e usar o <strong>TonRedimensionar</strong>, você aceita e concorda em cumprir os termos e disposições deste contrato. 
            Se você não concordar com qualquer parte destes termos, não deverá utilizar nosso serviço.
          </p>
        </section>

        <section>
          <h2>2. Descrição do Serviço</h2>
          <p>
            O TonRedimensionar é uma ferramenta online gratuita para redimensionamento e conversão de imagens. 
            O serviço é processado inteiramente no navegador do usuário (client-side), sem armazenamento de arquivos em nossos servidores.
          </p>
        </section>

        <section>
          <h2>3. Responsabilidade do Usuário</h2>
          <p>
            Você reconhece e concorda que é o único responsável pelo conteúdo das imagens que processa utilizando nossa ferramenta. 
            Você garante que possui os direitos necessários sobre as imagens ou que tem permissão para utilizá-las e modificá-las.
          </p>
          <p>
            O usuário concorda em não utilizar o serviço para processar conteúdo ilegal, ofensivo, pornográfico ou que viole direitos de propriedade intelectual de terceiros.
          </p>
        </section>

        <section>
          <h2>4. Armazenamento e Privacidade</h2>
          <p>
            Reafirmamos que <strong>não armazenamos, copiamos ou transmitimos suas imagens</strong> para servidores externos. 
            Todo o processamento é efêmero e ocorre no seu dispositivo. Após fechar a aba do navegador, quaisquer dados processados são descartados da memória do seu navegador.
          </p>
        </section>

        <section>
          <h2>5. Isenção de Garantias ("Como Está")</h2>
          <p>
            O serviço é fornecido "como está" e "conforme disponível", sem garantias de qualquer tipo, expressas ou implícitas. 
            Não garantimos que o serviço será ininterrupto, livre de erros ou que atenderá a todas as suas necessidades específicas.
          </p>
          <p>
            Não nos responsabilizamos por qualquer perda de dados, corrupção de arquivos ou danos ao seu dispositivo resultantes do uso da ferramenta, embora utilizemos tecnologias padrão e seguras da web.
          </p>
        </section>

        <section>
          <h2>6. Alterações nos Termos</h2>
          <p>
            Reservamo-nos o direito de modificar estes termos a qualquer momento. O uso continuado do serviço após tais alterações constitui sua aceitação dos novos termos.
          </p>
        </section>
      </div>
    </div>
  );
}

export default Terms;
