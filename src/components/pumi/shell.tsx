import { Link, useLocation, useNavigate } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { Accessibility, ArrowRight, Contrast, Globe2, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.asset.json";
const paths = ["/", "/oportunidades", "/quiz", "/guias", "/docentes", "/sobre"];
export function Shell({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const en = pathname === "/arrival-guide";
  const [contrast, setContrast] = useState(false);
  const [font, setFont] = useState(0);
  const [mobile, setMobile] = useState(false);
  const [profiles, setProfiles] = useState(false);
  useEffect(() => {
    document.documentElement.classList.toggle("high-contrast", contrast);
    document.documentElement.dataset["font"] = String(font);
  }, [contrast, font]);
  useEffect(() => setMobile(false), [pathname]);
  const nav = en
    ? ["Home", "Opportunities", "Destinations", "Arrival guide", "Faculty", "About DRI"]
    : [
        "Início",
        "Oportunidades",
        "Destinos e quiz",
        "Guias de mobilidade",
        "Docentes e pesquisa",
        "Sobre a DRI",
      ];
  return (
    <>
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>
      <div className="accessibility">
        <div className="container access-inner">
          <div className="access-actions">
            <a href="/acessibilidade">Acessibilidade</a>
            <Button
              variant="ghost"
              size="sm"
              aria-label="Diminuir fonte"
              onClick={() => setFont((n) => Math.max(-1, n - 1))}
            >
              A−
            </Button>
            <Button
              variant="ghost"
              size="sm"
              aria-label="Restaurar fonte"
              onClick={() => setFont(0)}
            >
              A
            </Button>
            <Button
              variant="ghost"
              size="sm"
              aria-label="Aumentar fonte"
              onClick={() => setFont((n) => Math.min(2, n + 1))}
            >
              A+
            </Button>
            <Button
              variant="ghost"
              size="sm"
              aria-pressed={contrast}
              onClick={() => setContrast(!contrast)}
            >
              <Contrast size={12} />
              Contraste
            </Button>
          </div>
          <div className="portal-links">
            <a href="https://unifor.br" target="_blank" rel="noreferrer">
              PORTAL UNIFOR
            </a>
            <span>/</span>
            <a href="https://unifor.br/unifor-online" target="_blank" rel="noreferrer">
              UNIFOR ONLINE
            </a>
          </div>
        </div>
      </div>
      <header className="brand-header">
        <div className="container brand-inner">
          <Link to="/" aria-label="Universidade de Fortaleza - Início">
            <img className="unifor-logo" src={logo.url} alt="Universidade de Fortaleza" />
          </Link>
          <Link to="/" className="dri-brand">
            <strong>DRI</strong>
            <span>Diretoria de Relações Internacionais</span>
          </Link>
          <Button asChild variant="secondary" className="account-button">
            <Link
              to={
                pathname.startsWith("/gestao") || pathname === "/marketing"
                  ? "/gestao"
                  : "/minha-dri"
              }
            >
              {pathname.startsWith("/gestao") || pathname === "/marketing"
                ? "Área de gestão"
                : en
                  ? "My Unifor"
                  : "Minha DRI"}
              <ArrowRight size={15} />
            </Link>
          </Button>
          <Button
            className="mobile-menu"
            variant="ghost"
            size="icon"
            aria-label="Abrir menu"
            onClick={() => setMobile(!mobile)}
          >
            {mobile ? <X /> : <Menu />}
          </Button>
        </div>
      </header>
      <nav className={`main-nav ${mobile ? "open" : ""}`} aria-label="Menu principal">
        <div className="container nav-inner">
          {nav.map((label, i) => (
            <Link
              key={label}
              to={en && i === 3 ? "/arrival-guide" : (paths[i] ?? "/")}
              className={
                pathname === paths[i] ||
                (i === 1 && pathname.startsWith("/oportunidades")) ||
                (i === 2 && pathname === "/comparador") ||
                (en && i === 3)
                  ? "active"
                  : ""
              }
            >
              {label}
            </Link>
          ))}
          <Link className="language" to={en ? "/" : "/arrival-guide"}>
            {en ? "EN / PT" : "PT / EN"}
          </Link>
        </div>
      </nav>
      <main id="conteudo" className="container main-content">
        {children}
      </main>
      <footer className="site-footer">
        <div className="container footer-inner">
          <div>
            <h3>Universidade de Fortaleza</h3>
            <p>
              Av. Washington Soares, 1321 · Edson Queiroz
              <br />
              Fortaleza / CE · Brasil · CEP 60811-905
            </p>
          </div>
          <div className="footer-links">
            <div>
              <Link to="/sobre">Sobre a DRI</Link>
              <Link to="/oportunidades" search={{ tab: "instituicoes" }}>
                Convênios
              </Link>
              <Link to="/contatos">Contatos</Link>
            </div>
            <div>
              <Link to="/privacidade">Privacidade</Link>
              <Link to="/acessibilidade">Acessibilidade</Link>
              <a href="https://unifor.br" target="_blank" rel="noreferrer">
                Portal oficial Unifor
              </a>
            </div>
          </div>
        </div>
      </footer>
      <div className="demo-switcher">
        <Button variant="outline" onClick={() => setProfiles(!profiles)} aria-expanded={profiles}>
          <Globe2 size={15} />
          Perfis · Demonstração
        </Button>
        {profiles && (
          <div className="profile-menu">
            <div className="profile-heading">
              NAVEGAR COMO{" "}
              <Button
                variant="ghost"
                size="icon"
                aria-label="Fechar perfis"
                onClick={() => setProfiles(false)}
              >
                <X />
              </Button>
            </div>
            {[
              ["Portal público", "/"],
              ["Aluno internacional", "/arrival-guide"],
              ["Docentes e pesquisa", "/docentes"],
              ["Minha DRI · Aluno", "/minha-dri"],
              ["Gestão DRI", "/gestao"],
              ["Marketing", "/marketing"],
            ].map(([label, to]) => (
              <Button
                variant="ghost"
                key={to}
                onClick={() => {
                  navigate({ to: to ?? "/" });
                  setProfiles(false);
                }}
              >
                {label}
                <ArrowRight size={14} />
              </Button>
            ))}
            <small>Sessões ilustrativas · Dados neste navegador</small>
          </div>
        )}
      </div>
    </>
  );
}
