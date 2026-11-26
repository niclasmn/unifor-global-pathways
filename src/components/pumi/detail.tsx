import { useState } from "react";
import { useParams, useNavigate } from "@tanstack/react-router";
import { CheckCircle2, X } from "lucide-react";
import { Modal } from "./modal";
import { Button } from "@/components/ui/button";
import { eligibility, opportunities } from "@/lib/pumi/data";
import { usePumi } from "@/lib/pumi/store";
import { External, Intro, Notice, SelectField, Steps, TextLink, official, legal } from "./shared";
export function Detail() {
  const params = useParams({ strict: false }) as { id?: string };
  const o = opportunities.find((x) => x.id === params.id);
  const { state, update } = usePumi();
  const navigate = useNavigate();
  const [enrollment, setEnrollment] = useState("Selecione");
  const [degree, setDegree] = useState("Graduação");
  const [pmg, setPmg] = useState("");
  const [proficiency, setProficiency] = useState("Selecione");
  const [result, setResult] = useState("");
  const [interest, setInterest] = useState(false);
  const [consent, setConsent] = useState(false);
  if (!o)
    return (
      <>
        <Intro crumb="OPORTUNIDADES / DETALHE" title="Oportunidade não encontrada" />
        <TextLink to="/oportunidades">Voltar às oportunidades</TextLink>
      </>
    );
  function register() {
    if (!o || !consent) return;
    update((s) => {
      const found = s.interests.find((i) => i.title === o.title && i.status !== "Cancelada");
      if (found) return s;
      return {
        ...s,
        interests: [
          ...s.interests,
          {
            id: `DRI-2026-${String(s.interests.length + 1).padStart(4, "0")}`,
            title: o.title,
            status: "Recebida",
            note: "",
          },
        ],
      };
    });
    setInterest(false);
    navigate({ to: "/minha-dri" });
  }
  return (
    <>
      <Intro
        crumb="OPORTUNIDADES / DETALHE"
        title={o.title}
        description={
          o.id === "portugal"
            ? "Mobilidade acadêmica para estudantes de graduação e pós-graduação da Unifor."
            : o.description
        }
      />
      <p className="eyebrow">EDITAL DEMONSTRATIVO · DADOS E PRAZOS ILUSTRATIVOS</p>
      <div className="right-sidebar-layout">
        <div>
          <section className="panel">
            <h2>Uma experiência para ampliar horizontes</h2>
            <p>
              Explore a mobilidade acadêmica em {o.country} e planeje um semestre em uma instituição
              conveniada. Cursos, vagas e condições devem ser conferidos no edital oficial.
            </p>
            <div className="grid-three">
              {[
                ["DESTINO", o.country],
                ["DURAÇÃO", o.id === "portugal" ? "1 semestre" : "Conforme chamada"],
                ["MODALIDADE", o.mode],
              ].map(([label, value]) => (
                <div key={label}>
                  <p className="eyebrow">{label}</p>
                  <h4>{value}</h4>
                </div>
              ))}
            </div>
            <p className="fine-print">
              Instituição de destino e aproveitamento de disciplinas: conforme edital e avaliação
              acadêmica.
            </p>
          </section>
          <section className="panel">
            <h2>Da escolha à candidatura</h2>
            <Steps />
          </section>
          <section className="panel">
            <p className="eyebrow">AUTODECLARAÇÃO · SEM ENVIO DE DOCUMENTOS</p>
            <h2>Este edital combina com o seu perfil?</h2>
            <p>
              Compare seus dados com os critérios cadastrados no edital. As notas mínimas dependem
              da validação oficial da DRI.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setResult(eligibility(enrollment, Number(pmg), proficiency));
              }}
            >
              <div className="field-grid">
                <SelectField
                  label="Vínculo acadêmico"
                  value={degree}
                  onChange={setDegree}
                  options={["Graduação", "Pós-graduação"]}
                />
                <SelectField
                  label="Situação de matrícula"
                  value={enrollment}
                  onChange={setEnrollment}
                  options={["Selecione", "Regularmente matriculado", "Trancado"]}
                />
                <label className="field">
                  <span>PMG atual</span>
                  <input
                    required
                    type="number"
                    min="0"
                    max="10"
                    step="0.01"
                    value={pmg}
                    placeholder="Informe seu PMG"
                    onChange={(e) => {
                      setPmg(e.target.value);
                      setResult("");
                    }}
                  />
                  {pmg && <small>PMG informado: {pmg} / 10. Nota mínima a validar pela DRI.</small>}
                </label>
                <SelectField
                  label="Proficiência exigida"
                  value={proficiency}
                  onChange={setProficiency}
                  options={["Selecione", "A1", "A2", "B1", "B2", "C1", "C2"]}
                />
              </div>
              <div className="actions">
                <Button
                  type="submit"
                  disabled={enrollment === "Selecione" || proficiency === "Selecione"}
                >
                  Verificar critérios preliminares
                </Button>
              </div>
            </form>
            {result && (
              <div className="mt-5" aria-live="polite">
                <Notice tone="warning" title="Verificação preliminar">
                  <p>{result}</p>
                </Notice>
              </div>
            )}
            <p className="fine-print">{legal}</p>
          </section>
          <section className="panel">
            <h2>Custos e documentos</h2>
            <p>
              Manutenção e moradia: consulte o destino.
              <br />
              Proficiência, seguro e visto: confirme as exigências do edital e do consulado.
              <br />
              Aproveitamento de disciplinas: avaliação acadêmica caso a caso.
            </p>
          </section>
        </div>
        <aside>
          <section className="panel dark-panel">
            <p className="eyebrow">INSCRIÇÕES · EXEMPLO</p>
            <h2>{o.id === "portugal" ? "30 nov. 2026" : "Consulte o canal oficial"}</h2>
            <p>Prazo ilustrativo. Consulte sempre o edital vigente.</p>
            <External
              href={o.id === "santander" ? "https://www.santanderopenacademy.com/" : official}
            >
              Ler edital e candidatar-se
            </External>
            <Button
              variant="secondary"
              className="mt-4 full-width"
              onClick={() => setInterest(true)}
            >
              {state.interests.some((i) => i.title === o.title && i.status !== "Cancelada")
                ? "Acompanhar interesse"
                : "Tenho interesse"}
            </Button>
            <p className="fine-print">
              O registro de interesse usa sua conta institucional e não substitui a inscrição
              oficial.
            </p>
          </section>
          <Notice tone="warning" title="Atenção ao visto de estudante">
            <p>
              Passaporte não substitui o visto. Considere os prazos para carta de aceite e envio de
              documentos ao consulado antes de comprar passagens.
            </p>
          </Notice>
          <Notice title="Precisa de orientação?">
            <p>
              Consulte o guia de mobilidade ou procure o setor de apoio ao intercâmbio discente.
            </p>
            <div className="actions">
              <TextLink to="/guias">Guia de saída</TextLink>
              <TextLink to="/contatos">Fale com a DRI</TextLink>
            </div>
          </Notice>
        </aside>
      </div>
      {interest && (
        <Modal labelledBy="interest-title" onClose={() => setInterest(false)}>
          <div className="modal-heading">
            <h2 id="interest-title">Manifestar interesse</h2>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setInterest(false)}
              aria-label="Fechar"
            >
              <X />
            </Button>
          </div>
          <p className="eyebrow">MINHA DRI · SESSÃO ILUSTRATIVA</p>
          <h3>{o.title}</h3>
          <Notice tone="warning" title="Interesse não é candidatura">
            <p>Este protocolo não reserva vaga e não substitui sua inscrição oficial.</p>
          </Notice>
          <p>
            O registro será salvo apenas neste navegador. Nenhum documento, nome ou matrícula será
            solicitado nesta demonstração.
          </p>
          <label className="compare-check">
            <input
              type="checkbox"
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
            />
            Entendo o caráter demonstrativo e desejo registrar meu interesse.
          </label>
          <div className="actions">
            <Button disabled={!consent} onClick={register}>
              <CheckCircle2 size={16} />
              Confirmar interesse
            </Button>
            <Button variant="secondary" onClick={() => setInterest(false)}>
              Voltar
            </Button>
          </div>
        </Modal>
      )}
    </>
  );
}
