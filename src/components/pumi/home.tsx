import { usePumi } from "@/lib/pumi/store";
import { opportunities } from "@/lib/pumi/data";
import campus from "@/assets/campus.asset.json";
import students from "@/assets/students.asset.json";
import orlando from "@/assets/orlando.asset.json";
import { External, Go, TextLink } from "./shared";
export function Home() {
  const { state } = usePumi();
  return (
    <>
      <div className="breadcrumb">UNIFOR / DRI / INTERNACIONALIZAÇÃO</div>
      <section className="hero">
        <div>
          <p className="eyebrow">DE FORTALEZA PARA O MUNDO</p>
          <h1>
            Seu próximo capítulo
            <br className="desktop-break" /> é internacional.
          </h1>
          <p>
            Descubra destinos, conecte sua pesquisa e encontre orientação para viver a Unifor sem
            fronteiras.
          </p>
          <Go to="/oportunidades">Encontrar oportunidades</Go>
          <small>Um módulo integrado ao portal oficial da Unifor.</small>
        </div>
        <figure>
          <img src={campus.url} alt="Estudantes conversam em um campus universitário arborizado" />
          <figcaption>Trocas culturais que aproximam pessoas e ampliam horizontes.</figcaption>
        </figure>
      </section>
      <section className="home-section">
        <h2>Qual é a sua jornada?</h2>
        <div className="grid-three">
          {[
            [
              "01 / ESTUDANTE UNIFOR",
              "Estude mundo afora",
              "Destinos, editais e orientação para planejar seu intercâmbio.",
              "Explorar mobilidade de saída",
              "/oportunidades",
            ],
            [
              "02 / INTERNATIONAL STUDENT",
              "Make Unifor your next destination",
              "Your guide to studying and living in Fortaleza.",
              "Explore the arrival guide",
              "/arrival-guide",
            ],
            [
              "03 / DOCENTES",
              "Conecte ensino e pesquisa",
              "Mobilidade docente, cooperação e publicação internacional.",
              "Conhecer oportunidades docentes",
              "/docentes",
            ],
          ].map(([tag, title, text, link, to]) => (
            <article className="item-card journey-card" key={title}>
              <p className="eyebrow">{tag}</p>
              <h3>{title}</h3>
              <p>{text}</p>
              <TextLink to={to ?? "/"}>{link}</TextLink>
            </article>
          ))}
        </div>
      </section>
      <section className="home-section">
        <div className="section-heading">
          <h2>Encontre novas possibilidades</h2>
          <TextLink to="/oportunidades">Ver todas as oportunidades</TextLink>
        </div>
        <div className="grid-three">
          {opportunities.map((o) => (
            <article className="item-card" key={o.id}>
              <p className="eyebrow">{o.tag}</p>
              <h3>{o.title}</h3>
              <p>{o.description.replace(" · Portugal", "")}</p>
              <p className="deadline">{o.deadline}</p>
              <TextLink opportunityId={o.id}>Ver oportunidade</TextLink>
            </article>
          ))}
        </div>
        <p className="fine-print">
          Ofertas de demonstração: disponibilidade, critérios e datas dependem de validação da DRI.
        </p>
      </section>
      <section className="grid-two home-section">
        <div className="feature-banner">
          <p className="eyebrow">AINDA NÃO SABE PARA ONDE IR?</p>
          <h2>Um destino que combina com você.</h2>
          <p>
            Explore afinidades de idioma, orçamento, cultura e objetivos. O quiz é orientativo e não
            exige login.
          </p>
          <Go to="/quiz">Fazer o quiz de destinos</Go>
        </div>
        <div className="feature-banner subtle">
          <p className="eyebrow">PLANEJE COM ANTECEDÊNCIA</p>
          <h2>Da documentação ao embarque.</h2>
          <p>
            Entenda proficiência, seguro, visto de estudante e prazos consulares antes de comprar as
            passagens.
          </p>
          <Go to="/guias" secondary>
            Consultar guia de saída
          </Go>
        </div>
      </section>
      <section className="home-section">
        <h2>Acontece na DRI</h2>
        <div className="grid-two">
          <article className="item-card news-card">
            <img src={orlando.url} alt="Vista de Orlando ao pôr do sol" />
            <p className="eyebrow">NOTÍCIA DO PORTAL OFICIAL</p>
            <h3>Missão Orlando da Unifor promove imersão internacional</h3>
            <p>Liderança, inovação e inteligência artificial em uma experiência internacional.</p>
            <External href="https://unifor.br/dri/inicial" secondary>
              Ler notícia
            </External>
          </article>
          <article className="item-card news-card">
            <img
              src={students.url}
              alt="Grupo de estudantes internacionais em um campus com bandeiras"
            />
            <p className="eyebrow">PROGRAMA DE MOBILIDADE ACADÊMICA</p>
            <h3>Do mundo para a Universidade de Fortaleza</h3>
            <p>Orientação e acolhimento para estudantes de instituições estrangeiras parceiras.</p>
            <TextLink to="/arrival-guide">Conhecer o programa</TextLink>
          </article>
        </div>
      </section>
      {state.contents.filter((c) => c.status === "Publicado").length > 0 && (
        <section className="home-section">
          <h2>Orientações da DRI</h2>
          <div className="grid-three">
            {state.contents
              .filter((c) => c.status === "Publicado")
              .map((c) => (
                <article key={c.id} className="item-card">
                  <p className="eyebrow">PUBLICADO · DEMONSTRAÇÃO</p>
                  <h3>{c.title}</h3>
                  <p className="preserve-lines">{c.body}</p>
                  {c.english && <p className="preserve-lines">{c.english}</p>}
                </article>
              ))}
          </div>
        </section>
      )}
      <section className="metrics-band">
        <h2>Conexões que transformam</h2>
        <p className="eyebrow">METAS 2026 · DIVULGADAS NO SITE OFICIAL DA DRI</p>
        <div className="metrics-grid">
          {state.metrics.map((m) => (
            <div key={m.label}>
              <strong>{m.value}</strong>
              <p>{m.label}</p>
            </div>
          ))}
        </div>
        <small>
          Metas, não resultados realizados. Exibição somente de dados quantitativos agregados, sem
          identificar estudantes.
        </small>
      </section>
      <section className="home-section">
        <h2>Agir local. Pensar global.</h2>
        <p>
          A DRI promove a internacionalização da Unifor por meio de intercâmbios, cooperação e
          pesquisa em rede. De Fortaleza para o mundo e do mundo para Fortaleza.
        </p>
        <div className="inline-links">
          <TextLink to="/sobre">Como funcionamos</TextLink>
          <TextLink to="/contatos">Setores e atendimento</TextLink>
          <TextLink to="/oportunidades">Instituições conveniadas</TextLink>
        </div>
      </section>
    </>
  );
}
