import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
function destination(to?: string) {
  const [path, query] = (to ?? "/").split("?");
  return { to: path ?? "/", search: Object.fromEntries(new URLSearchParams(query)) };
}
export function Go({
  to,
  children,
  secondary = false,
  opportunityId,
}: {
  to?: string;
  children: ReactNode;
  secondary?: boolean;
  opportunityId?: string;
}) {
  return (
    <Button asChild variant={secondary ? "secondary" : "default"}>
      <Link
        {...destination(opportunityId ? "/oportunidades/$id" : to)}
        params={opportunityId ? { id: opportunityId } : {}}
      >
        {children}
        <ArrowRight size={16} />
      </Link>
    </Button>
  );
}
export function TextLink({
  to,
  children,
  opportunityId,
}: {
  to?: string;
  children: ReactNode;
  opportunityId?: string;
}) {
  return (
    <Link
      className="text-link"
      {...destination(opportunityId ? "/oportunidades/$id" : to)}
      params={opportunityId ? { id: opportunityId } : {}}
    >
      {children} <ArrowRight size={15} />
    </Link>
  );
}
export function External({
  href,
  children,
  secondary = false,
}: {
  href: string;
  children: ReactNode;
  secondary?: boolean;
}) {
  return (
    <Button asChild variant={secondary ? "secondary" : "default"}>
      <a href={href} target="_blank" rel="noreferrer">
        {children}
        <ExternalLink size={15} />
      </a>
    </Button>
  );
}
export function Intro({
  crumb,
  title,
  description,
  eyebrow,
}: {
  crumb: string;
  title: string;
  description?: string;
  eyebrow?: string;
}) {
  return (
    <>
      <div className="breadcrumb">
        {crumb.startsWith("ÁREA") ? crumb : `UNIFOR / DRI / ${crumb}`}
      </div>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <div className="intro">
        <h1>{title}</h1>
        {description && <p>{description}</p>}
      </div>
    </>
  );
}
export function Notice({
  title,
  children,
  tone = "info",
}: {
  title?: string;
  children: ReactNode;
  tone?: "info" | "warning" | "success";
}) {
  return (
    <div className={`notice ${tone}`} role="note">
      {title && <h3>{title}</h3>}
      <div>{children}</div>
    </div>
  );
}
export function SelectField({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
}) {
  return (
    <label className="field">
      <span>{label}</span>
      <select value={value} onChange={(e) => onChange(e.target.value)}>
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
    </label>
  );
}
export const official = "https://unifor.br/dri/inicial";
export const legal =
  "Resultado apenas orientativo: não garante aprovação e não substitui a conferência documental oficial da DRI.";
export function Steps() {
  return (
    <ol className="steps">
      <li>Leia o edital e confira as condições acadêmicas</li>
      <li>Faça sua verificação preliminar de elegibilidade</li>
      <li>Planeje carta de aceite, seguro e trâmites consulares</li>
      <li>Candidate-se exclusivamente pelo canal oficial</li>
    </ol>
  );
}
