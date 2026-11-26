export type ContentStatus =
  "Rascunho" | "Aguardando Marketing" | "Ajustes solicitados" | "Publicado";
export type InterestStatus = "Recebida" | "Em orientação" | "Concluída" | "Cancelada";
export interface Content {
  id: string;
  title: string;
  body: string;
  english: string;
  language: string;
  status: ContentStatus;
  comment: string;
}
export interface Interest {
  id: string;
  title: string;
  status: InterestStatus;
  note: string;
}
export interface Opportunity {
  id: string;
  tag: string;
  title: string;
  description: string;
  country: string;
  audience: string;
  mode: string;
  status: string;
  deadline: string;
  date: string;
  institution: string;
}
export const opportunities: Opportunity[] = [
  {
    id: "portugal",
    tag: "MOBILIDADE ACADÊMICA · EXEMPLO",
    title: "Um semestre em Portugal",
    description: "Graduação e pós-graduação · Portugal · Presencial",
    country: "Portugal",
    audience: "Estudante Unifor",
    mode: "Presencial",
    status: "Inscrições abertas",
    deadline: "Até 30 nov. 2026 · Prazo ilustrativo",
    date: "2026-11-30",
    institution: "Universidade do Porto",
  },
  {
    id: "santander",
    tag: "PARCEIROS · EXEMPLO",
    title: "Oportunidades Santander",
    description: "Bolsas e experiências internacionais · Múltiplos destinos",
    country: "Espanha",
    audience: "Estudante Unifor",
    mode: "Virtual",
    status: "Inscrições abertas",
    deadline: "Prazos no canal oficial do parceiro",
    date: "",
    institution: "Santander Open Academy",
  },
  {
    id: "pesquisa",
    tag: "DOCENTES · EXEMPLO",
    title: "Cooperação em pesquisa",
    description: "Mobilidade docente · Redes acadêmicas internacionais",
    country: "França",
    audience: "Docente",
    mode: "Híbrida",
    status: "Em breve",
    deadline: "Consulte as condições da chamada",
    date: "",
    institution: "Redes acadêmicas internacionais",
  },
];
export const arrivalText =
  "A valid student visa is required for enrolment. A passport or tourist visa alone is not sufficient.\n\nPassing a course requires the required grades and at least 75% attendance. This rule is not negotiable.";
export const initialContents: Content[] = [
  "Guia de chegada internacional",
  "Mobilidade acadêmica em Portugal",
  "Orientações de mobilidade docente",
  "Ficha de destino: Portugal",
  "Guia de vida em Fortaleza",
  "Metas institucionais agregadas",
  "FAQ de documentação e visto",
].map((title, i) => ({
  id: `content-${i}`,
  title,
  body:
    i === 0
      ? "Your arrival at Unifor\n\nA practical guide for international students in Fortaleza, Brazil."
      : `${title}\n\nConsulte as orientações da DRI e os canais oficiais antes de planejar sua jornada.`,
  english: i === 0 ? arrivalText : "",
  language: [0, 4, 6].includes(i) ? "PT / EN" : "PT",
  status: i < 2 ? "Aguardando Marketing" : i === 6 ? "Ajustes solicitados" : "Rascunho",
  comment: i === 6 ? "Reforçar o alerta sobre visto de estudante." : "",
}));
export const metrics = [
  { value: 120, label: "Estudantes enviados" },
  { value: 60, label: "Estudantes recebidos" },
  { value: 120, label: "Serviços de tradução" },
  { value: 50, label: "Disciplinas em língua estrangeira" },
  { value: 600, label: "Exames de proficiência" },
  { value: 15, label: "Programas de dupla titulação" },
];
export const quizSteps = [
  {
    name: "Idioma",
    question: "Em qual idioma você quer viver essa experiência?",
    description: "Escolha os idiomas com os quais você se sente mais à vontade.",
    options: ["Português ou espanhol", "Inglês", "Francês", "Alemão"],
  },
  {
    name: "Orçamento",
    question: "Quanto você pretende investir por mês?",
    description:
      "Considere moradia, alimentação e transporte. Não inclua passagens, visto e seguro.",
    options: ["Até € 700", "De € 700 a € 1.000", "Acima de € 1.000", "Ainda estou planejando"],
  },
  {
    name: "Cultura",
    question: "Qual estilo de vida combina com você?",
    description: "Pense nos lugares e experiências que você gostaria de descobrir.",
    options: ["Cultura urbana", "Patrimônio histórico", "Vida praiana", "Ambiente cosmopolita"],
  },
  {
    name: "Objetivo",
    question: "O que você quer viver nessa jornada?",
    description: "Escolha seu principal objetivo para esta experiência internacional.",
    options: [
      "Experiência acadêmica",
      "Pesquisa e cooperação",
      "Vivência cultural",
      "Aperfeiçoamento de idioma",
    ],
  },
];
export const destinations = [
  {
    city: "Porto",
    country: "Portugal",
    language: "Português",
    cost: "€ 750–1.000",
    culture: "Vida universitária e patrimônio cultural",
    positive: "Familiaridade com o idioma português",
    attention: "Alta procura por moradia",
  },
  {
    city: "Valência",
    country: "Espanha",
    language: "Espanhol",
    cost: "€ 800–1.100",
    culture: "Vida urbana e cultura mediterrânea",
    positive: "Experiência em espanhol e mobilidade urbana",
    attention: "Exigências de idioma e variação de custos",
  },
  {
    city: "Lyon",
    country: "França",
    language: "Francês",
    cost: "€ 900–1.200",
    culture: "Patrimônio histórico e pesquisa",
    positive: "Redes de pesquisa e intercâmbio cultural",
    attention: "Proficiência e custos de moradia",
  },
  {
    city: "Berlim",
    country: "Alemanha",
    language: "Alemão / Inglês",
    cost: "€ 1.000–1.400",
    culture: "Ambiente cosmopolita",
    positive: "Diversidade e cooperação acadêmica",
    attention: "Planejamento financeiro e visto",
  },
];
export const MIN_ATTENDANCE = 75;
export function canPublish(status: ContentStatus, checks: boolean[]) {
  return status === "Aguardando Marketing" && checks.length === 7 && checks.every(Boolean);
}
export function eligibility(enrollment: string, pmg: number, proficiency: string) {
  if (!Number.isFinite(pmg) || pmg < 0 || pmg > 10) return "Informe um PMG válido entre 0 e 10.";
  if (enrollment !== "Regularmente matriculado" || !["B2", "C1", "C2"].includes(proficiency))
    return "Atenção aos requisitos: confira matrícula e proficiência com a DRI. B2 é a referência ilustrativa desta simulação.";
  return "Perfil preliminar compatível com matrícula e proficiência. A avaliação do PMG depende da nota mínima do edital, ainda sujeita à validação da DRI.";
}
export function recommend(answers: string[]) {
  const [language, budget, culture, objective] = answers;
  const scores = destinations.map((d, i) => {
    let score = 0;
    if (language === "Português ou espanhol" && i < 2) score += 12;
    if (language === "Francês" && i === 2) score += 15;
    if ((language === "Alemão" || language === "Inglês") && i === 3) score += 15;
    if (budget === "Até € 700") score += [6, 3, 1, 0][i] ?? 0;
    if (budget === "De € 700 a € 1.000") score += [4, 4, 2, 0][i] ?? 0;
    if (budget === "Acima de € 1.000" && i === 3) score += 2;
    if (culture === "Vida praiana" && i === 1) score += 5;
    if (culture === "Patrimônio histórico" && (i === 0 || i === 2)) score += 4;
    if (culture === "Ambiente cosmopolita" && i === 3) score += 4;
    if (culture === "Cultura urbana" && (i === 0 || i === 1)) score += 2;
    if (objective === "Pesquisa e cooperação" && (i === 2 || i === 3)) score += 5;
    if (objective === "Experiência acadêmica" && (i === 0 || i === 1)) score += 2;
    if (objective === "Vivência cultural" && (i === 1 || i === 2)) score += 3;
    if (objective === "Aperfeiçoamento de idioma" && i !== 0) score += 2;
    return { index: i, score };
  });
  return scores
    .sort((a, b) => b.score - a.score || a.index - b.index)
    .slice(0, 2)
    .map((s) => s.index);
}
