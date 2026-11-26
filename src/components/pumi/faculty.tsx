import { useState } from "react";
import { Button } from "@/components/ui/button";
import { External, Go, Intro, Notice, SelectField, TextLink } from "./shared";
export function Faculty() {
  const [area, setArea] = useState("Todas as áreas");
  const [language, setLanguage] = useState("Todos os idiomas");
  const [fees, setFees] = useState("Todas as taxas");
  const databases = [
    {
      name: "DOAJ",
      body: "Diretório de periódicos de acesso aberto. Confira a ficha do periódico, políticas editoriais e taxas.",
      url: `https://doaj.org/search/journals?ref=homepage-box&q=${encodeURIComponent([area === "Todas as áreas" ? "" : area, language === "Todos os idiomas" ? "" : language, fees === "Sem APC" ? "bibjson.apc.has_apc:false" : ""].filter(Boolean).join(" "))}`,
    },
    {
      name: "SciELO",
      body: "Coleções de periódicos científicos. Explore publicações por área do conhecimento.",
      url: `https://search.scielo.org/?q=${encodeURIComponent(area === "Todas as áreas" ? "" : area)}&lang=${language === "Inglês" ? "en" : "pt"}`,
    },
  ];
  return (
    <>
      <div className="breadcrumb">UNIFOR / DRI / DOCENTES E PESQUISA</div>
      <section className="hero">
        <div>
          <p className="eyebrow">ENSINO, COOPERAÇÃO E WEB IMPACT</p>
          <h1>
            Conhecimento
            <br />
            sem fronteiras.
          </h1>
          <p>
            Conecte sua pesquisa a novas redes de cooperação e amplie o alcance internacional da
            produção acadêmica.
          </p>
          <Go to="/oportunidades?audience=Docente">Explorar mobilidade docente</Go>
        </div>
        <div>
          {[
            ["01 MOBILIDADE DOCENTE", "Visitas acadêmicas e trocas de conhecimento."],
            ["02 COOPERAÇÃO EM REDE", "Instituições parceiras e projetos conjuntos."],
            ["03 PUBLICAÇÃO CIENTÍFICA", "Descoberta responsável de periódicos."],
          ].map(([title, body]) => (
            <div key={title}>
              <h4>{title}</h4>
              <p>{body}</p>
            </div>
          ))}
        </div>
      </section>
      <div className="grid-two home-section">
        <article className="item-card">
          <p className="eyebrow">MOBILIDADE DOCENTE</p>
          <h2>Ensinar e aprender em rede</h2>
          <p>Consulte chamadas para intercâmbio de professores, visitas acadêmicas e cooperação.</p>
          <TextLink to="/oportunidades?audience=Docente">Consultar oportunidades</TextLink>
        </article>
        <article className="item-card">
          <p className="eyebrow">COOPERAÇÃO INSTITUCIONAL</p>
          <h2>Encontre conexões para pesquisar</h2>
          <p>
            Consulte instituições conveniadas e converse com o setor de apoio docente sobre
            possibilidades de parceria.
          </p>
          <TextLink to="/oportunidades?tab=instituicoes">Ver convênios</TextLink>
        </article>
      </div>
      <div className="right-sidebar-layout home-section">
        <section className="panel">
          <p className="eyebrow">WEB IMPACT / PUBLICAÇÃO CIENTÍFICA</p>
          <h2>Mais alcance para sua produção.</h2>
          <p>
            Explore bases de periódicos e verifique aderência à sua área, qualidade editorial e
            custos antes de submeter.
          </p>
          <div className="grid-three">
            <SelectField
              label="Área do conhecimento"
              value={area}
              onChange={setArea}
              options={["Todas as áreas", "Saúde", "Engenharia", "Ciências sociais", "Humanidades"]}
            />
            <SelectField
              label="Idioma"
              value={language}
              onChange={setLanguage}
              options={["Todos os idiomas", "Português", "Inglês", "Espanhol"]}
            />
            <SelectField
              label="Taxas de publicação"
              value={fees}
              onChange={setFees}
              options={["Todas as taxas", "Sem APC", "Com APC"]}
            />
          </div>
          {databases.map((d) => (
            <article key={d.name} className="notice">
              <div className="section-heading">
                <h3>{d.name}</h3>
                <External href={d.url} secondary>
                  Consultar base
                </External>
              </div>
              <p>{d.body}</p>
            </article>
          ))}
          <p className="fine-print">
            {area !== "Todas as áreas" ||
            language !== "Todos os idiomas" ||
            fees !== "Todas as taxas"
              ? `Busca preparada: ${area} · ${language} · ${fees}. Confirme os critérios na base de destino. `
              : ""}
            Bases para consulta, não garantia de recomendação. A curadoria institucional deve ser
            validada pela DRI.
          </p>
        </section>
        <aside>
          <Notice title="Antes de submeter">
            {[
              "Confirme a indexação",
              "Avalie a política editorial",
              "Verifique eventuais APCs",
              "Evite custos não previstos",
            ].map((x) => (
              <label className="editor-check" key={x}>
                <input type="checkbox" defaultChecked />
                {x}
              </label>
            ))}
            <p>
              <strong>Acesso aberto não significa publicação gratuita.</strong>
            </p>
          </Notice>
          <section className="panel">
            <h2>Converse com a DRI</h2>
            <p>
              O setor de apoio docente pode orientar os próximos passos da sua atuação
              internacional.
            </p>
            <Go to="/contatos" secondary>
              Solicitar orientação
            </Go>
          </section>
        </aside>
      </div>
      <p className="fine-print">
        Impacto com privacidade: indicadores públicos devem ser consolidados, sem expor dados
        pessoais de estudantes.
      </p>
    </>
  );
}
