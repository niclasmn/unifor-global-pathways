import { useState } from "react";
import { ArrowRight, CheckCircle2, FileText, Plus, X } from "lucide-react";
import { Modal } from "./modal";
import { Button } from "@/components/ui/button";
import { canPublish, type Content, type ContentStatus, type InterestStatus } from "@/lib/pumi/data";
import { usePumi } from "@/lib/pumi/store";
import { Go, Intro, Notice, SelectField } from "./shared";
const checklist = [
  "Identidade visual Unifor",
  "Clareza e qualidade textual",
  "Links e fontes oficiais",
  "Imagens autorizadas ou ausentes",
  "Sem dados pessoais de estudantes",
  "Visto e frequência em destaque",
  "Versão essencial em inglês",
];
export function Management() {
  const { state, update } = usePumi();
  const [section, setSection] = useState("Conteúdos");
  const [editor, setEditor] = useState<Content | null>(null);
  const [notice, setNotice] = useState("");
  const [metricEdit, setMetricEdit] = useState(state.metrics);
  const counts = (status: ContentStatus) =>
    state.contents.filter((c) => c.status === status).length;
  function newDraft() {
    setEditor({
      id: `draft-${Date.now()}`,
      title: "",
      body: "",
      english: "",
      language: "PT",
      status: "Rascunho",
      comment: "",
    });
  }
  function save(status: ContentStatus) {
    if (!editor || !editor.title.trim() || !editor.body.trim()) return;
    let content = { ...editor, status };
    if (editor.status === "Publicado") {
      content = { ...content, id: `revision-${Date.now()}`, status: "Rascunho" };
    }
    update((s) => ({
      ...s,
      contents: s.contents.some((c) => c.id === content.id)
        ? s.contents.map((c) => (c.id === content.id ? content : c))
        : [...s.contents, content],
    }));
    setEditor(null);
    setNotice(
      status === "Aguardando Marketing"
        ? "Rascunho enviado para revisão do Marketing."
        : "Rascunho salvo. Nenhuma alteração foi publicada.",
    );
  }
  const nav = [
    "Visão geral",
    "Conteúdos",
    "Manifestações de interesse",
    "Indicadores agregados",
    "Traduções vinculadas",
  ];
  return (
    <>
      <Intro
        crumb="ÁREA RESTRITA / PERFIL DRI"
        title="Conteúdo com governança."
        description="Prepare orientações, acompanhe interesses e envie conteúdo para revisão do Marketing."
      />
      <div className="sidebar-layout">
        <aside className="sidebar-nav">
          <h3>GESTÃO DRI</h3>
          {nav.map((n) => (
            <Button
              key={n}
              variant="ghost"
              className={section === n ? "active" : ""}
              onClick={() => {
                setSection(n);
                setNotice("");
              }}
            >
              {n}
            </Button>
          ))}
          <p>A DRI prepara e submete. A publicação oficial é realizada pelo Marketing.</p>
        </aside>
        <div>
          {notice && (
            <div role="status">
              <Notice tone="success">
                <div className="section-heading">
                  <p>{notice}</p>
                  <Button
                    variant="ghost"
                    size="icon"
                    aria-label="Fechar aviso"
                    onClick={() => setNotice("")}
                  >
                    <X />
                  </Button>
                </div>
              </Notice>
            </div>
          )}
          {(section === "Conteúdos" || section === "Visão geral") && (
            <>
              <div className="metric-cards">
                {[
                  ["Rascunho", "Rascunhos"],
                  ["Aguardando Marketing", "Em revisão"],
                  ["Ajustes solicitados", "Ajustes solicitados"],
                ].map(([status, label]) => (
                  <div className="panel" key={status}>
                    <strong>{String(counts(status as ContentStatus)).padStart(2, "0")}</strong>
                    <p>{label}</p>
                  </div>
                ))}
              </div>
              <div className="section-heading mb-5">
                <h2>Fila de conteúdos</h2>
                <Button onClick={newDraft}>
                  <Plus size={16} />
                  Criar rascunho
                </Button>
              </div>
              <div className="panel table-scroll">
                <table>
                  <thead>
                    <tr>
                      <th>Conteúdo</th>
                      <th>Status</th>
                      <th>Idiomas</th>
                      <th>Ação</th>
                    </tr>
                  </thead>
                  <tbody>
                    {state.contents.map((c) => (
                      <tr key={c.id}>
                        <td>
                          <strong>{c.title}</strong>
                          {c.comment && (
                            <small className="block mt-2 text-muted-foreground">{c.comment}</small>
                          )}
                        </td>
                        <td>
                          <span
                            className={`status-badge ${c.status === "Aguardando Marketing" ? "pending" : c.status === "Publicado" ? "published" : ""}`}
                          >
                            {c.status}
                          </span>
                        </td>
                        <td>{c.language}</td>
                        <td>
                          <Button variant="link" size="sm" onClick={() => setEditor({ ...c })}>
                            {c.status === "Aguardando Marketing"
                              ? "Visualizar"
                              : c.status === "Publicado"
                                ? "Criar revisão"
                                : "Editar"}
                            <ArrowRight size={13} />
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="fine-print">
                Exibindo {state.contents.length} conteúdos · Dados de demonstração
              </p>
              <div className="grid-two">
                <section className="panel">
                  <h3>Antes de enviar ao Marketing</h3>
                  {[
                    "Revisar texto e links oficiais",
                    "Não expor dados individuais",
                    "Verificar autorização de imagens",
                    "Vincular inglês aos guias essenciais",
                  ].map((t) => (
                    <label className="editor-check" key={t}>
                      <input type="checkbox" defaultChecked />
                      {t}
                    </label>
                  ))}
                  <Button
                    className="full-width"
                    onClick={() => {
                      const draft = state.contents.find(
                        (c) => c.status === "Rascunho" || c.status === "Ajustes solicitados",
                      );
                      if (draft) setEditor({ ...draft });
                      else newDraft();
                    }}
                  >
                    Enviar rascunho para revisão
                  </Button>
                </section>
                <Notice title="Sem publicação direta pela DRI">
                  <p>
                    Rascunho → Revisão do Marketing → Ajustes ou aprovação → Publicação oficial.
                  </p>
                  <p className="fine-print">
                    Atualizações e remoções de conteúdo público também dependem de aprovação.
                  </p>
                </Notice>
              </div>
              <section className="panel">
                <h3>Manifestações de interesse</h3>
                <p>Recebida → Em orientação → Concluída · Cancelada, quando solicitado.</p>
                <p className="fine-print">
                  Acesso nominal somente para perfis autorizados. Indicadores públicos são sempre
                  agregados.
                </p>
                <Button
                  variant="link"
                  className="p-0"
                  onClick={() => setSection("Manifestações de interesse")}
                >
                  Acompanhar protocolos →
                </Button>
              </section>
            </>
          )}
          {section === "Manifestações de interesse" && (
            <>
              <h2>Manifestações de interesse</h2>
              <Notice>
                <p>
                  Sessão demonstrativa, sem dados pessoais. Atualizações aparecem na Minha DRI neste
                  navegador.
                </p>
              </Notice>
              {state.interests.length ? (
                state.interests.map((i) => (
                  <section className="panel" key={i.id}>
                    <p className="eyebrow">{i.id}</p>
                    <h3>{i.title}</h3>
                    <SelectField
                      label="Status do atendimento"
                      value={i.status}
                      options={["Recebida", "Em orientação", "Concluída", "Cancelada"]}
                      onChange={(v) =>
                        update((s) => ({
                          ...s,
                          interests: s.interests.map((x) =>
                            x.id === i.id ? { ...x, status: v as InterestStatus } : x,
                          ),
                        }))
                      }
                    />
                    <label className="field">
                      <span>Orientação ao estudante</span>
                      <textarea
                        value={i.note}
                        placeholder="Registre os próximos passos, sem dados pessoais."
                        onChange={(e) =>
                          update((s) => ({
                            ...s,
                            interests: s.interests.map((x) =>
                              x.id === i.id ? { ...x, note: e.target.value } : x,
                            ),
                          }))
                        }
                      />
                    </label>
                    <small>Alterações salvas automaticamente neste navegador.</small>
                  </section>
                ))
              ) : (
                <section className="empty-state">
                  <FileText size={34} />
                  <h3>Nenhuma manifestação recebida</h3>
                  <p>Os registros feitos em uma oportunidade aparecerão aqui.</p>
                  <Go to="/oportunidades">Explorar oportunidades</Go>
                </section>
              )}
            </>
          )}
          {section === "Indicadores agregados" && (
            <section className="panel">
              <h2>Metas e indicadores agregados</h2>
              <p>
                Somente dados quantitativos, sem identificação de estudantes. Alterações seguem o
                fluxo de aprovação do Marketing.
              </p>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const draft: Content = {
                    id: `metrics-${Date.now()}`,
                    title: "Revisão de metas institucionais agregadas",
                    body: metricEdit.map((m) => `${m.value} — ${m.label}`).join("\n"),
                    english: "",
                    language: "PT",
                    status: "Aguardando Marketing",
                    comment: JSON.stringify(metricEdit),
                  };
                  update((s) => ({ ...s, contents: [...s.contents, draft] }));
                  setNotice(
                    "Metas enviadas para revisão. O portal ainda mantém os valores aprovados.",
                  );
                }}
              >
                <div className="field-grid">
                  {metricEdit.map((m, i) => (
                    <label key={m.label} className="field">
                      <span>{m.label}</span>
                      <input
                        type="number"
                        min="0"
                        step="1"
                        required
                        value={m.value}
                        onChange={(e) =>
                          setMetricEdit((ms) =>
                            ms.map((item, index) =>
                              index === i
                                ? { ...item, value: Math.max(0, Number(e.target.value)) }
                                : item,
                            ),
                          )
                        }
                      />
                    </label>
                  ))}
                </div>
                <div className="actions">
                  <Button type="submit">Enviar metas para revisão</Button>
                </div>
              </form>
            </section>
          )}
          {section === "Traduções vinculadas" && (
            <section className="panel">
              <h2>Traduções vinculadas</h2>
              <p>
                Prioridade aos conteúdos essenciais para estudantes estrangeiros. A tradução segue a
                revisão editorial do conteúdo de origem.
              </p>
              {state.contents
                .filter((c) => c.language === "PT / EN")
                .map((c) => (
                  <div className="course-row" key={c.id}>
                    <h3>{c.title}</h3>
                    <p>
                      {c.english ? "Versão em inglês vinculada" : "Tradução em inglês pendente"} ·{" "}
                      {c.status}
                    </p>
                    <Button variant="secondary" onClick={() => setEditor({ ...c })}>
                      Editar versões PT / EN
                    </Button>
                  </div>
                ))}
            </section>
          )}
        </div>
      </div>
      {editor && (
        <Modal labelledBy="draft-title" onClose={() => setEditor(null)}>
          <div className="editor-form">
            <div className="modal-heading">
              <h2 id="draft-title">
                {editor.status === "Aguardando Marketing"
                  ? "Conteúdo em revisão"
                  : editor.title
                    ? "Editar rascunho"
                    : "Criar rascunho"}
              </h2>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setEditor(null)}
                aria-label="Fechar editor"
              >
                <X />
              </Button>
            </div>
            {editor.comment && (
              <Notice tone="warning" title="Comentário do Marketing">
                <p>
                  {editor.comment.startsWith("[") ? "Revisão de metas agregadas" : editor.comment}
                </p>
              </Notice>
            )}
            {editor.status === "Publicado" && (
              <Notice>
                <p>
                  A versão pública será mantida. Ao salvar, uma nova revisão será criada como
                  rascunho.
                </p>
              </Notice>
            )}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                save("Rascunho");
              }}
            >
              <label className="field">
                <span>Título do conteúdo</span>
                <input
                  required
                  value={editor.title}
                  readOnly={editor.status === "Aguardando Marketing"}
                  onChange={(e) => setEditor({ ...editor, title: e.target.value })}
                />
              </label>
              <label className="field">
                <span>Conteúdo</span>
                <textarea
                  aria-label="Conteúdo"
                  required
                  value={editor.body}
                  readOnly={editor.status === "Aguardando Marketing"}
                  onChange={(e) => setEditor({ ...editor, body: e.target.value })}
                />
              </label>
              <SelectField
                label="Idiomas vinculados"
                value={editor.language}
                options={["PT", "PT / EN"]}
                onChange={(v) => {
                  if (editor.status !== "Aguardando Marketing")
                    setEditor({ ...editor, language: v });
                }}
              />
              {editor.language === "PT / EN" && (
                <label className="field">
                  <span>Versão essencial em inglês</span>
                  <textarea
                    value={editor.english}
                    readOnly={editor.status === "Aguardando Marketing"}
                    onChange={(e) => setEditor({ ...editor, english: e.target.value })}
                  />
                </label>
              )}
              <div className="actions">
                {editor.status !== "Aguardando Marketing" ? (
                  <>
                    <Button type="submit" variant="secondary">
                      Salvar rascunho
                    </Button>
                    <Button
                      type="button"
                      disabled={
                        !editor.title.trim() ||
                        !editor.body.trim() ||
                        editor.status === "Publicado" ||
                        (editor.language === "PT / EN" && !editor.english.trim())
                      }
                      onClick={() => save("Aguardando Marketing")}
                    >
                      Enviar rascunho para revisão
                    </Button>
                  </>
                ) : (
                  <Go to="/marketing">Abrir revisão no Marketing</Go>
                )}
              </div>
            </form>
          </div>
        </Modal>
      )}
    </>
  );
}
export function Marketing() {
  const { state, update } = usePumi();
  const [view, setView] = useState("Fila de revisão");
  const [selected, setSelected] = useState("");
  const [checks, setChecks] = useState<boolean[]>(Array(7).fill(false));
  const [comment, setComment] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const pending = state.contents.filter((c) => c.status === "Aguardando Marketing");
  const active = pending.find((c) => c.id === selected) ?? pending[0];
  function choose(id: string) {
    setSelected(id);
    setChecks(Array(7).fill(false));
    setComment("");
    setError("");
  }
  function decide(publish: boolean) {
    if (!active) return;
    if (publish && !canPublish(active.status, checks)) return;
    if (!publish && !comment.trim()) {
      setError("Descreva os ajustes necessários antes de devolver à DRI.");
      return;
    }
    update((s) => {
      let next = {
        ...s,
        contents: s.contents.map((c) =>
          c.id === active.id
            ? {
                ...c,
                status: (publish ? "Publicado" : "Ajustes solicitados") as ContentStatus,
                comment,
              }
            : c,
        ),
      };
      if (publish && active.id.startsWith("metrics-")) {
        try {
          const parsed = JSON.parse(active.comment) as typeof s.metrics;
          if (Array.isArray(parsed) && parsed.length === 6) next = { ...next, metrics: parsed };
        } catch {
          /* The content remains published without changing existing metrics. */
        }
      }
      return next;
    });
    setMessage(
      publish
        ? "Conteúdo aprovado e publicado no portal de demonstração."
        : "Ajustes solicitados. O comentário já está disponível para a DRI.",
    );
    setChecks(Array(7).fill(false));
    setComment("");
    setSelected("");
    setError("");
  }
  return (
    <>
      <Intro
        crumb="ÁREA RESTRITA / PERFIL MARKETING / REVISÃO EDITORIAL"
        title="Revisar antes de publicar."
        description="Valide identidade visual, qualidade editorial e privacidade no portal oficial da Unifor."
      />
      <div className="sidebar-layout">
        <aside className="sidebar-nav">
          <h3>MARKETING</h3>
          {[
            "Fila de revisão",
            "Ajustes solicitados",
            "Histórico de publicações",
            "Diretrizes de marca",
          ].map((n) => (
            <Button
              variant="ghost"
              key={n}
              className={view === n ? "active" : ""}
              onClick={() => setView(n)}
            >
              {n}
              {n === "Fila de revisão"
                ? ` · ${String(pending.length).padStart(2, "0")}`
                : n === "Ajustes solicitados"
                  ? ` · ${String(state.contents.filter((c) => c.status === "Ajustes solicitados").length).padStart(2, "0")}`
                  : ""}
            </Button>
          ))}
          <p>Ações de aprovação e publicação disponíveis somente para o perfil autorizado.</p>
        </aside>
        <div>
          {message && (
            <Notice tone="success">
              <p role="status">{message}</p>
              {message.includes("publicado") && (
                <div className="actions">
                  <Go to="/" secondary>
                    Ver no portal público
                  </Go>
                </div>
              )}
            </Notice>
          )}
          {view === "Diretrizes de marca" ? (
            <section className="panel">
              <h2>Diretrizes de marca</h2>
              <p>
                Preservar identidade institucional Unifor, clareza editorial e links oficiais.
                Nenhum dado pessoal de estudantes deve ser publicado. Imagens devem ter autorização,
                e guias de entrada precisam destacar visto de estudante e frequência mínima de 75%.
              </p>
              <Notice title="Tradução estratégica">
                <p>
                  Inglês é prioritário nos guias essenciais de chegada, não em todos os documentos
                  internos.
                </p>
              </Notice>
            </section>
          ) : view !== "Fila de revisão" ? (
            <section className="panel">
              <h2>{view}</h2>
              {state.contents.filter(
                (c) =>
                  c.status ===
                  (view === "Ajustes solicitados" ? "Ajustes solicitados" : "Publicado"),
              ).length ? (
                state.contents
                  .filter(
                    (c) =>
                      c.status ===
                      (view === "Ajustes solicitados" ? "Ajustes solicitados" : "Publicado"),
                  )
                  .map((c) => (
                    <div key={c.id} className="course-row">
                      <h3>{c.title}</h3>
                      <p>
                        {c.status} · {c.language}
                      </p>
                      <p>{c.comment.startsWith("[") ? "Metas agregadas revisadas" : c.comment}</p>
                      <p className="preserve-lines">{c.body}</p>
                    </div>
                  ))
              ) : (
                <p>Nenhum conteúdo nesta seção.</p>
              )}
            </section>
          ) : !active ? (
            <section className="empty-state">
              <CheckCircle2 size={36} />
              <h2>Fila de revisão concluída</h2>
              <p>Não há conteúdos aguardando Marketing.</p>
              <Go to="/gestao" secondary>
                Voltar à gestão DRI
              </Go>
            </section>
          ) : (
            <>
              {pending.length > 1 && (
                <label className="field">
                  <span>Selecionar conteúdo em revisão</span>
                  <select
                    aria-label="Selecionar conteúdo em revisão"
                    value={active.id}
                    onChange={(e) => choose(e.target.value)}
                  >
                    {pending.map((c) => (
                      <option key={c.id} value={c.id}>
                        {c.title}
                      </option>
                    ))}
                  </select>
                </label>
              )}
              <section className="panel">
                <p className="eyebrow text-warning-foreground">AGUARDANDO APROVAÇÃO DO MARKETING</p>
                <h2>{active.title}</h2>
                <p className="fine-print">
                  Enviado pela DRI · Versão 2 ·{" "}
                  {active.language === "PT / EN" ? "Português + English" : "Português"} ·
                  Demonstração
                </p>
              </section>
              <div className="right-sidebar-layout editor-grid">
                <div>
                  <section className="panel">
                    <p className="eyebrow">
                      PRÉVIA / {active.language === "PT / EN" ? "ENGLISH" : "PORTUGUÊS"}
                    </p>
                    <h2>{active.id === "content-0" ? "Your arrival at Unifor" : active.title}</h2>
                    {active.id === "content-0" ? (
                      <>
                        <p>A practical guide for international students in Fortaleza, Brazil.</p>
                        <Notice tone="warning" title="Before you travel">
                          <p>
                            A valid student visa is required for enrolment. A passport or tourist
                            visa alone is not sufficient.
                          </p>
                          <p className="mt-4">
                            Passing a course requires the required grades and at least 75%
                            attendance. This rule is not negotiable.
                          </p>
                        </Notice>
                        <h3>Plan your stay</h3>
                        <p>
                          Explore courses in other languages, housing, living costs and transport
                          near the Unifor campus in Edson Queiroz.
                        </p>
                        <p className="fine-print">
                          Av. Washington Soares, 1321 · Fortaleza / CE · Brasil
                        </p>
                      </>
                    ) : (
                      <>
                        <p className="preserve-lines">{active.body}</p>
                        {active.english && <p className="preserve-lines">{active.english}</p>}
                      </>
                    )}
                  </section>
                  <Notice title="Tradução estratégica">
                    <p>
                      PT · Conteúdo de origem
                      <br />
                      EN · Guia essencial para estudantes estrangeiros
                    </p>
                    <p className="fine-print">
                      A prioridade de tradução está nas informações essenciais de entrada, não em
                      todos os documentos internos.
                    </p>
                  </Notice>
                </div>
                <aside>
                  <section className="panel">
                    <h3>Conferência editorial</h3>
                    {checklist.map((c, i) => (
                      <label className="editor-check" key={`${active.id}-${c}`}>
                        <input
                          type="checkbox"
                          checked={checks[i] ?? false}
                          onChange={(e) =>
                            setChecks((s) =>
                              s.map((x, index) => (index === i ? e.target.checked : x)),
                            )
                          }
                        />
                        {c}
                      </label>
                    ))}
                  </section>
                  <section className="panel">
                    <h3>Decisão do Marketing</h3>
                    <label className="field">
                      <span>Comentário de revisão</span>
                      <textarea
                        value={comment}
                        placeholder="Descreva os ajustes necessários, se houver."
                        onChange={(e) => setComment(e.target.value)}
                      />
                    </label>
                    {error && (
                      <p role="alert" className="text-destructive text-sm">
                        {error}
                      </p>
                    )}
                    <Button
                      className="full-width mb-4"
                      variant="secondary"
                      onClick={() => decide(false)}
                    >
                      Solicitar ajustes à DRI
                    </Button>
                    <Button
                      className="full-width"
                      disabled={!canPublish(active.status, checks)}
                      onClick={() => decide(true)}
                    >
                      Aprovar e publicar
                      <ArrowRight size={16} />
                    </Button>
                    <p className="fine-print">
                      {checks.every(Boolean)
                        ? "A aprovação publica a versão revisada no ambiente de demonstração. A DRI recebe a atualização de status."
                        : "Confirme os 7 itens de conferência editorial para publicar."}
                    </p>
                  </section>
                </aside>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
