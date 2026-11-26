import { useState } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { quizSteps, destinations, recommend, opportunities } from "@/lib/pumi/data";
import { usePumi } from "@/lib/pumi/store";
import { Go, Intro, Notice } from "./shared";
export function Quiz() {
  const { state, update } = usePumi();
  const [step, setStep] = useState(0);
  const navigate = useNavigate();
  const current = quizSteps[step];
  if (!current) return null;
  const answer = state.answers[step];
  return (
    <>
      <Intro
        crumb="QUIZ DE DESTINOS"
        title="O mundo tem a sua cara."
        description="Explore destinos de acordo com seu idioma, orçamento, cultura e objetivos."
      />
      <div className="sidebar-layout">
        <aside className="sidebar-nav">
          <p className="eyebrow">SEU CAMINHO</p>
          <h2>Um passo de cada vez.</h2>
          <ol className="quiz-path">
            {quizSteps.map((s, i) => (
              <li key={s.name}>
                <strong>
                  {i < step ? "✓" : i === step ? "●" : "○"}　{String(i + 1).padStart(2, "0")} ·{" "}
                  {s.name}
                </strong>
                <small>
                  {i < step
                    ? state.answers[i]
                    : i === step
                      ? "Você está aqui"
                      : i === 2
                        ? "Seus interesses e estilo de vida"
                        : "O que você quer vivenciar"}
                </small>
              </li>
            ))}
          </ol>
          <p>Não precisa fazer login. Nenhum nome ou matrícula é solicitado.</p>
        </aside>
        <section className="panel quiz-panel">
          <p className="eyebrow">
            ETAPA {step + 1} DE 4 / {current.name.toUpperCase()}
          </p>
          <div className="progress-track">
            <div className={`progress-${step + 1}`} />
          </div>
          <h2>{current.question}</h2>
          <p>{current.description}</p>
          <div className="grid-two" role="radiogroup" aria-label={current.name}>
            {current.options.map((o, i) => (
              <label key={o} className={`quiz-option ${answer === o ? "selected" : ""}`}>
                <input
                  type="radio"
                  name="quiz-answer"
                  checked={answer === o}
                  onChange={() =>
                    update((s) => {
                      const a = [...s.answers];
                      a[step] = o;
                      return { ...s, answers: a };
                    })
                  }
                />
                <span>
                  <strong>{o}</strong>
                  <small>
                    {step === 1
                      ? i === 3
                        ? "Tudo bem! Você pode explorar possibilidades."
                        : "Faixa mensal de manutenção"
                      : "Sua preferência nesta simulação"}
                  </small>
                </span>
              </label>
            ))}
          </div>
          <p className="fine-print mt-6">
            {step === 1
              ? "Valores de referência para explorar destinos na Europa. Custos reais variam conforme cidade, câmbio e estilo de vida."
              : "As sugestões são ilustrativas. Confirme os convênios e critérios com a DRI."}
          </p>
          <div className="quiz-nav">
            <Button variant="secondary" disabled={step === 0} onClick={() => setStep((s) => s - 1)}>
              <ArrowLeft size={16} />
              {step > 0 ? `Voltar para ${quizSteps[step - 1]?.name.toLowerCase()}` : "Voltar"}
            </Button>
            <Button
              disabled={!answer}
              onClick={() =>
                step === 3
                  ? (update((s) => ({ ...s, selected: [] })), navigate({ to: "/comparador" }))
                  : setStep((s) => s + 1)
              }
            >
              {step === 3
                ? "Comparar destinos"
                : `Continuar para ${quizSteps[step + 1]?.name.toLowerCase()}`}
              <ArrowRight size={16} />
            </Button>
          </div>
        </section>
      </div>
      <div className="mt-4">
        <Notice title="Uma orientação, não uma seleção.">
          <p>
            Ao concluir as quatro etapas, compare destinos e consulte editais. Afinidade não garante
            vaga, bolsa ou elegibilidade acadêmica.
          </p>
        </Notice>
      </div>
    </>
  );
}
export function Comparison() {
  const { state, update } = usePumi();
  let indexes = state.selected.length
    ? state.selected.map((id) => {
        const country = opportunities.find((o) => o.id === id)?.country;
        return destinations.findIndex((d) => d.country === country);
      })
    : recommend(state.answers);
  indexes = indexes.filter((i) => i >= 0);
  if (indexes.length === 0) indexes = [0, 1];
  const items = indexes
    .map((i) => destinations[i])
    .filter((d): d is NonNullable<typeof d> => Boolean(d));
  const rows = [
    ["Idioma", ...items.map((d) => d.language)],
    ["Manutenção estimada / mês", ...items.map((d) => d.cost)],
    ["Cultura e estilo de vida", ...items.map((d) => d.culture)],
    ["Ponto positivo", ...items.map((d) => d.positive)],
    ["Ponto de atenção", ...items.map((d) => d.attention)],
    ["Instituições e cursos", ...items.map(() => "Confira os convênios e o edital vigente")],
    ["Visto e documentação", ...items.map(() => "Verifique as regras consulares para estudantes")],
  ];
  return (
    <>
      <Intro
        crumb="QUIZ / COMPARAR DESTINOS"
        title="Compare caminhos. Escolha com clareza."
        description="Sugestões ilustrativas para explorar a partir das suas preferências."
      />
      <Notice>
        <div className="selected-profile">
          <div>
            <p className="eyebrow">SEU PERFIL NESTA SIMULAÇÃO</p>
            <p>
              {state.answers.length
                ? state.answers.join(" · ")
                : state.selected.length
                  ? "Destinos selecionados no catálogo"
                  : "Português ou espanhol · De € 700 a € 1.000/mês · Cultura urbana · Experiência acadêmica"}
            </p>
          </div>
          <Go to="/quiz" secondary>
            Editar preferências
          </Go>
        </div>
      </Notice>
      <section className="panel mt-7">
        <div className="table-scroll">
          <table className="compare-table">
            <thead>
              <tr>
                <th>COMPARE O QUE IMPORTA</th>
                {items.map((d) => (
                  <th key={d.city}>
                    <h2>{d.city}</h2>
                    <span>{d.country}</span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map(([label, ...cells]) => (
                <tr key={label}>
                  <td>
                    <strong>{label}</strong>
                  </td>
                  {cells.map((c, i) => (
                    <td key={i}>{c}</td>
                  ))}
                </tr>
              ))}
              <tr>
                <td>
                  <strong>Próximo passo</strong>
                </td>
                {items.map((d) => (
                  <td key={d.city}>
                    <Button asChild>
                      <Link to="/oportunidades" search={{ country: d.country }}>
                        Ver oportunidades {d.country === "Portugal" ? "em" : "na"} {d.country}
                        <ArrowRight size={15} />
                      </Link>
                    </Button>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <p className="fine-print">
        Estimativas ilustrativas, não cotações nem ofertas. Confirme os custos com a instituição de
        destino; passagens, visto e seguro não estão incluídos.
      </p>
      <div className="grid-two mt-7">
        <Notice tone="warning" title="Afinidade não é elegibilidade">
          <p>
            Confira convênios ativos, cursos compatíveis, requisitos de proficiência e critérios
            acadêmicos em cada edital.
          </p>
        </Notice>
        <Notice title="Da escolha ao embarque">
          <p>
            Compare destinos → Consulte o edital → Verifique critérios → Organize visto e
            documentação.
          </p>
        </Notice>
      </div>
      <Button
        asChild
        variant="secondary"
        onClick={() => update((s) => ({ ...s, answers: [], selected: [] }))}
      >
        <Link to="/quiz">Refazer o quiz</Link>
      </Button>
    </>
  );
}
