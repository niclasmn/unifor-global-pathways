import { useState } from "react";
import { Check, Inbox, X } from "lucide-react";
import { Modal } from "./modal";
import { Button } from "@/components/ui/button";
import { usePumi } from "@/lib/pumi/store";
import { External, Go, Intro, Notice, TextLink, official, legal } from "./shared";
export function Student() {
  const { state, update, ready } = usePumi();
  const [section, setSection] = useState("Meus interesses");
  const [cancel, setCancel] = useState<string | null>(null);
  const [selected, setSelected] = useState("");
  const interest = state.interests.find((i) => i.id === selected) ?? state.interests.at(-1);
  return (
    <>
      <Intro
        crumb="MINHA DRI / ACESSO AUTENTICADO"
        title={
          interest
            ? "Seu primeiro passo está registrado."
            : "Sua jornada internacional começa aqui."
        }
        description="Acompanhe seu contato inicial com a DRI e organize os próximos passos."
      />
      <div className="sidebar-layout">
        <aside className="panel">
          <h2>Minha DRI</h2>
          <p className="fine-print">
            Acesso institucional
            <br />
            Sessão ilustrativa
          </p>
          {["Meus interesses", "Orientações recebidas", "Privacidade e dados"].map((s) => (
            <Button
              key={s}
              variant="ghost"
              className="full-width justify-start mb-3"
              onClick={() => setSection(s)}
              aria-pressed={section === s}
            >
              {s}
            </Button>
          ))}
          <Go to="/oportunidades" secondary>
            Explorar oportunidades
          </Go>
        </aside>
        <div>
          {section === "Privacidade e dados" ? (
            <>
              <Notice title="Seus dados ficam na área restrita.">
                <p>
                  Informações pessoais não aparecem em listas públicas; somente a equipe autorizada
                  acompanha o atendimento.
                </p>
              </Notice>
              <section className="panel">
                <h3>Sobre esta demonstração</h3>
                <p>
                  Não há autenticação institucional conectada. Os protocolos ilustrativos e as
                  preferências ficam somente neste navegador, sem nomes ou matrículas.
                </p>
                <TextLink to="/privacidade">Consultar aviso de privacidade</TextLink>
              </section>
            </>
          ) : section === "Orientações recebidas" ? (
            <section className="panel">
              <h2>Orientações recebidas</h2>
              {state.interests.some((i) => i.note) ? (
                state.interests
                  .filter((i) => i.note)
                  .map((i) => (
                    <article className="notice" key={i.id}>
                      <h3>{i.title}</h3>
                      <p className="fine-print">
                        {i.id} · {i.status}
                      </p>
                      <p className="preserve-lines">{i.note}</p>
                    </article>
                  ))
              ) : (
                <p>
                  Ainda não há orientações. Acompanhe o status do seu interesse e consulte o guia de
                  mobilidade.
                </p>
              )}
              <Go to="/guias" secondary>
                Consultar guia de saída
              </Go>
            </section>
          ) : !ready ? (
            <div className="panel" role="status">
              Carregando seus interesses…
            </div>
          ) : !interest ? (
            <div className="empty-state">
              <Inbox size={40} />
              <h2>Você ainda não registrou um interesse.</h2>
              <p>Explore as oportunidades e escolha a experiência que combina com você.</p>
              <Go to="/oportunidades">Explorar oportunidades</Go>
            </div>
          ) : (
            <>
              {state.interests.length > 1 && (
                <label className="field">
                  <span>Manifestação de interesse</span>
                  <select value={interest.id} onChange={(e) => setSelected(e.target.value)}>
                    {state.interests.map((i) => (
                      <option key={i.id} value={i.id}>
                        {i.id} · {i.title}
                      </option>
                    ))}
                  </select>
                </label>
              )}
              <Notice tone={interest.status === "Cancelada" ? "warning" : "success"}>
                <div className="success-heading">
                  <div>
                    <h2>
                      <Check className="inline mr-2" />
                      {interest.status === "Cancelada"
                        ? "Interesse cancelado"
                        : "Interesse recebido"}
                    </h2>
                    <p>
                      {interest.title}
                      <br />
                      Mobilidade acadêmica · Exemplo
                    </p>
                  </div>
                  <div>
                    <p className="eyebrow">PROTOCOLO DE DEMONSTRAÇÃO</p>
                    <h2>{interest.id}</h2>
                    <p>
                      <strong>Status: {interest.status}</strong>
                    </p>
                  </div>
                </div>
              </Notice>
              <Notice tone="warning" title="Interesse não é candidatura">
                <p>
                  Este protocolo não reserva vaga e não substitui sua inscrição. Candidate-se no
                  canal oficial dentro do prazo estabelecido no edital.
                </p>
              </Notice>
              <div className="grid-two">
                <section className="panel">
                  <h2>Seu atendimento</h2>
                  <ol className="timeline">
                    {["Recebida", "Em orientação", "Concluída"].map((s, i) => (
                      <li
                        key={s}
                        className={
                          interest.status !== "Cancelada" &&
                          ["Recebida", "Em orientação", "Concluída"].indexOf(interest.status) >= i
                            ? "done"
                            : ""
                        }
                      >
                        <strong>{s}</strong>
                        <p>
                          {
                            [
                              "Seu interesse foi encaminhado à DRI.",
                              "A equipe poderá orientar os próximos passos.",
                              "Atendimento encerrado após a orientação.",
                            ][i]
                          }
                        </p>
                      </li>
                    ))}
                  </ol>
                  {interest.note && (
                    <Notice title="Orientação da DRI">
                      <p>{interest.note}</p>
                    </Notice>
                  )}
                </section>
                <section className="panel">
                  <h2>O que fazer agora?</h2>
                  <ol className="steps">
                    <li>Leia o edital completo</li>
                    <li>Confira os critérios acadêmicos</li>
                    <li>Planeje o visto e a documentação</li>
                    <li>Inscreva-se no canal oficial</li>
                  </ol>
                  <div className="actions">
                    <External href={official}>Ir para a candidatura oficial</External>
                  </div>
                  <p className="fine-print">{legal}</p>
                </section>
              </div>
              <Notice title="Seus dados ficam na área restrita.">
                <p>
                  O acesso utiliza sua conta institucional. Informações pessoais não aparecem em
                  listas públicas; somente a equipe autorizada acompanha o atendimento.
                </p>
                <div className="mt-4">
                  <TextLink to="/privacidade">Consultar aviso de privacidade</TextLink>
                </div>
              </Notice>
              <div className="actions">
                <Go to="/oportunidades" secondary>
                  Voltar às oportunidades
                </Go>
                {interest.status !== "Cancelada" && (
                  <Button variant="ghost" onClick={() => setCancel(interest.id)}>
                    Cancelar manifestação de interesse
                  </Button>
                )}
              </div>
              <p className="fine-print">
                Sessão ilustrativa. Registro salvo neste navegador, sem envio à DRI.
              </p>
            </>
          )}
        </div>
      </div>
      {cancel && (
        <Modal labelledBy="cancel-title" onClose={() => setCancel(null)}>
          <h2 id="cancel-title">Cancelar manifestação de interesse?</h2>
          <p>
            O protocolo será mantido com o status Cancelada. Essa ação não altera uma candidatura
            feita no canal oficial.
          </p>
          <div className="actions">
            <Button
              variant="destructive"
              onClick={() => {
                update((s) => ({
                  ...s,
                  interests: s.interests.map((i) =>
                    i.id === cancel ? { ...i, status: "Cancelada" } : i,
                  ),
                }));
                setCancel(null);
              }}
            >
              Confirmar cancelamento
            </Button>
            <Button variant="secondary" onClick={() => setCancel(null)}>
              Manter interesse
            </Button>
          </div>
        </Modal>
      )}
    </>
  );
}
