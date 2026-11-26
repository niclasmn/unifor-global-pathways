import { Intro, Notice, Go, External, TextLink, official } from "./shared";
export function About() {
  return (
    <>
      <Intro
        crumb="SOBRE A DRI"
        title="Agir local. Pensar global."
        description="Diretoria de Relações Internacionais da Universidade de Fortaleza."
      />
      <section className="panel">
        <h2>Conexões que transformam</h2>
        <p>
          A DRI promove a internacionalização da Unifor por meio de intercâmbios, cooperação e
          pesquisa em rede. De Fortaleza para o mundo e do mundo para Fortaleza.
        </p>
        <p>
          Este ambiente demonstra a extensão das jornadas de mobilidade e orientação do portal
          institucional. Convênios, editais, critérios e disponibilidade devem ser confirmados pela
          DRI.
        </p>
        <div className="actions">
          <Go to="/contatos">Setores e atendimento</Go>
          <External href={official} secondary>
            Portal oficial da DRI
          </External>
        </div>
      </section>
      <div className="grid-three">
        {[
          [
            "Estudante Unifor",
            "Destinos, editais e orientação para planejar seu intercâmbio.",
            "/oportunidades",
          ],
          [
            "International student",
            "Your guide to studying and living in Fortaleza.",
            "/arrival-guide",
          ],
          [
            "Docentes e pesquisa",
            "Mobilidade docente, cooperação e publicação internacional.",
            "/docentes",
          ],
        ].map(([title, text, to]) => (
          <article className="item-card" key={title}>
            <h3>{title}</h3>
            <p>{text}</p>
            <TextLink to={to ?? "/"}>Conhecer a jornada</TextLink>
          </article>
        ))}
      </div>
    </>
  );
}
export function Contact() {
  return (
    <>
      <Intro
        crumb="CONTATOS / CONTACT DRI"
        title="Converse com a DRI"
        description="Orientação para sua jornada internacional · International office"
      />
      <div className="grid-two">
        <section className="panel">
          <h2>Diretoria de Relações Internacionais</h2>
          <p>
            Universidade de Fortaleza
            <br />
            Av. Washington Soares, 1321 · Edson Queiroz
            <br />
            Fortaleza / CE · Brasil · CEP 60811-905
          </p>
          <p>
            Consulte no portal oficial os contatos atualizados e horários de atendimento do setor de
            apoio ao intercâmbio discente e docente.
          </p>
          <External href={official}>Contatos no portal oficial</External>
        </section>
        <Notice title="Antes de entrar em contato">
          <p>
            Tenha em mãos o nome do programa ou edital. Não envie passaporte, matrícula ou outros
            documentos pessoais por canais não oficiais.
          </p>
          <p className="mt-4">
            Before contacting DRI, check the official application instructions. A valid student visa
            and at least 75% attendance remain mandatory.
          </p>
          <div className="actions">
            <Go to="/guias" secondary>
              Consultar guia de saída
            </Go>
          </div>
        </Notice>
      </div>
    </>
  );
}
export function Privacy() {
  return (
    <>
      <Intro
        crumb="PRIVACIDADE"
        title="Privacidade e dados"
        description="Informação pública com responsabilidade. Atendimento individual com privacidade."
      />
      <section className="panel">
        <h2>Dados pessoais não fazem parte dos indicadores públicos.</h2>
        <p>
          O portal apresenta somente dados quantitativos agregados. Nomes, matrículas e informações
          individuais de intercambistas não são divulgados.
        </p>
        <h3>Sobre esta demonstração</h3>
        <p>
          Preferências do quiz, interesses ilustrativos e conteúdo editorial são armazenados apenas
          neste navegador. Não há login institucional, envio de documentos ou registro oficial junto
          à Unifor. A alternância de perfil permite demonstrar as jornadas e não constitui controle
          de acesso real.
        </p>
        <h3>Integração institucional</h3>
        <p>
          Em operação institucional, o acesso deve ser restrito ao próprio estudante e à equipe
          autorizada, mediante autenticação oficial, controles de permissão e política de retenção
          validada pela Unifor.
        </p>
        <External href="https://unifor.br" secondary>
          Portal oficial Unifor
        </External>
      </section>
    </>
  );
}
export function AccessibilityPage() {
  return (
    <>
      <Intro
        crumb="ACESSIBILIDADE"
        title="Acessibilidade"
        description="Uma jornada internacional acessível a todos."
      />
      <section className="panel">
        <h2>Leitura e navegação</h2>
        <p>
          A barra superior permite aumentar, reduzir ou restaurar o tamanho da fonte e alternar o
          alto contraste. As escolhas são aplicadas durante a navegação.
        </p>
        <p>
          Todos os controles podem ser acessados pelo teclado. Pressione Tab para navegar e Enter ou
          Espaço para ativar as ações. O primeiro link permite pular diretamente para o conteúdo.
        </p>
        <h3>Precisa de apoio?</h3>
        <Go to="/contatos" secondary>
          Fale com a DRI
        </Go>
      </section>
    </>
  );
}
