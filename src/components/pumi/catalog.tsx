import { useState } from "react";
import { Link, useSearch } from "@tanstack/react-router";
import { ArrowRight, MapPin, SearchX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { opportunities } from "@/lib/pumi/data";
import { usePumi } from "@/lib/pumi/store";
import { Go, Intro, Notice, SelectField, TextLink } from "./shared";
const empty = {
  audience: "Todos os públicos",
  country: "Todos os países",
  mode: "Todas",
  status: "Todas",
  date: "",
};
export function Catalog() {
  const search = useSearch({ strict: false }) as {
    tab?: string;
    country?: string;
    audience?: string;
  };
  const [tab, setTab] = useState(search.tab === "instituicoes" ? "instituicoes" : "oportunidades");
  const [view, setView] = useState("Lista");
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("Prazo mais próximo");
  const [filters, setFilters] = useState({
    ...empty,
    country: search.country ?? empty.country,
    audience: search.audience ?? empty.audience,
  });
  const [applied, setApplied] = useState(filters);
  const { state, update } = usePumi();
  const [mapCountry, setMapCountry] = useState("Portugal");
  const visible = opportunities
    .filter(
      (o) =>
        (applied.country === empty.country || o.country === applied.country) &&
        (applied.audience === empty.audience || o.audience === applied.audience) &&
        (applied.mode === "Todas" || o.mode === applied.mode) &&
        (applied.status === "Todas" || o.status === applied.status) &&
        (!applied.date || (!!o.date && o.date <= applied.date)) &&
        `${o.title} ${o.country} ${o.institution}`
          .toLocaleLowerCase()
          .includes(query.toLocaleLowerCase()),
    )
    .sort((a, b) =>
      sort === "Ordem alfabética"
        ? a.title.localeCompare(b.title)
        : (a.date || "9999").localeCompare(b.date || "9999"),
    );
  function clear() {
    setFilters(empty);
    setApplied(empty);
    setQuery("");
  }
  return (
    <>
      <Intro
        crumb="OPORTUNIDADES"
        title="Seu próximo destino começa com uma escolha."
        description="Encontre editais, programas e instituições para a sua jornada internacional."
      />
      <div className="tabs-bar">
        <Button
          role="tab"
          variant="ghost"
          aria-selected={tab === "oportunidades"}
          onClick={() => setTab("oportunidades")}
        >
          Oportunidades
        </Button>
        <Button
          role="tab"
          variant="ghost"
          aria-selected={tab === "instituicoes"}
          onClick={() => setTab("instituicoes")}
        >
          Instituições conveniadas
        </Button>
        <div>
          {["Lista", "Mapa"].map((v) => (
            <Button key={v} variant="ghost" aria-pressed={view === v} onClick={() => setView(v)}>
              {v === "Mapa" && <MapPin size={14} />} {v}
            </Button>
          ))}
        </div>
      </div>
      <div className="sidebar-layout">
        <aside className="panel">
          <h3>Refine sua busca</h3>
          <SelectField
            label="Público"
            value={filters.audience}
            onChange={(v) => setFilters({ ...filters, audience: v })}
            options={[empty.audience, "Estudante Unifor", "Estudante Estrangeiro", "Docente"]}
          />
          <SelectField
            label="País"
            value={filters.country}
            onChange={(v) => setFilters({ ...filters, country: v })}
            options={[empty.country, "Portugal", "Espanha", "França", "Alemanha", "EUA"]}
          />
          <SelectField
            label="Modalidade"
            value={filters.mode}
            onChange={(v) => setFilters({ ...filters, mode: v })}
            options={["Todas", "Presencial", "Virtual", "Híbrida"]}
          />
          <SelectField
            label="Situação"
            value={filters.status}
            onChange={(v) => setFilters({ ...filters, status: v })}
            options={["Todas", "Inscrições abertas", "Em breve", "Encerrado"]}
          />
          <label className="field">
            <span>Prazo de inscrição até</span>
            <input
              type="date"
              value={filters.date}
              onChange={(e) => setFilters({ ...filters, date: e.target.value })}
            />
          </label>
          <Button className="full-width" onClick={() => setApplied(filters)}>
            Aplicar filtros
          </Button>
          <Button variant="link" onClick={clear} className="mt-3">
            Limpar filtros
          </Button>
        </aside>
        <div>
          <div className="search-row">
            <input
              aria-label="Buscar país, instituição ou programa"
              placeholder="Buscar país, instituição ou programa"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <select
              aria-label="Ordenar resultados"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
            >
              <option>Prazo mais próximo</option>
              <option>Ordem alfabética</option>
            </select>
          </div>
          <p className="results-count" aria-live="polite">
            {visible.length} {tab === "instituicoes" ? "instituições" : "oportunidades"} · Conteúdo
            demonstrativo
          </p>
          {view === "Mapa" && visible.length > 0 && (
            <div className="panel">
              <iframe
                title="Mapa interativo dos destinos"
                className="map-frame"
                src={`https://www.openstreetmap.org/export/embed.html?bbox=${mapCountry === "Portugal" ? "-9.9%2C36.5%2C-5.8%2C42.3" : mapCountry === "Espanha" ? "-10%2C35%2C5%2C44" : "-6%2C41%2C10%2C52"}&layer=mapnik`}
              />
              <div className="map-destinations">
                {visible.map((o) => (
                  <Button
                    key={o.id}
                    variant={mapCountry === o.country ? "default" : "secondary"}
                    onClick={() => setMapCountry(o.country)}
                  >
                    <MapPin size={14} />
                    {o.country}
                  </Button>
                ))}
              </div>
              <p className="fine-print">
                Destinos de demonstração. Confirme convênios ativos com a DRI.
              </p>
            </div>
          )}
          {visible.length === 0 && (
            <div className="empty-state">
              <SearchX size={36} />
              <h3>Nenhum resultado encontrado</h3>
              <p>Tente outro país, programa ou combinação de filtros.</p>
              <Button onClick={clear} variant="secondary">
                Limpar filtros
              </Button>
            </div>
          )}
          {visible.map((o) => (
            <article className="item-card catalog-card" key={o.id}>
              <div>
                <p className="eyebrow">
                  {tab === "instituicoes" ? "INSTITUIÇÃO · EXEMPLO" : o.tag}
                </p>
                <h3>{tab === "instituicoes" ? o.institution : o.title}</h3>
                <p>
                  {tab === "instituicoes"
                    ? `${o.country} · ${o.mode} · Convênio sujeito à validação da DRI`
                    : o.description}
                </p>
                <p className="deadline">{o.deadline}</p>
              </div>
              <div className="catalog-card-actions">
                <Go opportunityId={o.id}>
                  {tab === "instituicoes" ? "Ver instituição" : "Ver oportunidade"}
                </Go>
                <label className="compare-check">
                  <input
                    type="checkbox"
                    checked={state.selected.includes(o.id)}
                    onChange={(e) =>
                      update((s) => ({
                        ...s,
                        selected: e.target.checked
                          ? [...s.selected, o.id]
                          : s.selected.filter((x) => x !== o.id),
                      }))
                    }
                  />
                  Comparar destinos
                </label>
              </div>
            </article>
          ))}
          {state.selected.length > 0 && (
            <Notice>
              <div className="selected-profile">
                <span>{state.selected.length} destino(s) selecionado(s)</span>
                <Go to="/comparador">Comparar destinos</Go>
              </div>
            </Notice>
          )}
          <Notice title="Planeje antes do edital">
            <p>
              Visto, documentos e proficiência exigem antecedência. Consulte os passos do guia de
              saída.
            </p>
            <div className="actions">
              <Go to="/guias" secondary>
                Consultar guia
              </Go>
            </div>
          </Notice>
          <p className="text-link">1　Página 1 de 1</p>
        </div>
      </div>
      <p className="fine-print">
        Conteúdo demonstrativo: programas, instituições, prazos e disponibilidade estão sujeitos à
        validação da DRI.
      </p>
    </>
  );
}
