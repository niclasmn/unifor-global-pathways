# Unifor Global Pathways

No PDF do Site-Dri-Expandido-DESKTOP encontram-se os modelos visuais designados para as telas desejadas para o aplicativo/site que você deve gerar, sendo "PUMI" o nome do projeto porém o site não tem nome específico, sendo somente uma extensão do site existente da DRI da Unifor, que se encontra em "https://unifor.br/dri/inicial"

Desejo que você, com base nas telas, formatadas nos PDFS considerando a visualização do site em Desktop, sendo as telas em Desktop a referência principal de estilização e telas, gere um protótipo funcional, e deixo o arquivo de Documento de Visão Revisado para você implementar as funcionalidades corretamente, porém seguindo as formas das telas no PDF de conceptualização das telas do site.

O visual do site DEVE OBEDECER os modelos de telas já elaborados que constam nos PDFs do Site-Dri-Expandido DESKTOP.

---

### Locked

#### 1. Identidade Visual e Layout Institucional Unifor (Fidelidade ao PDF Desktop)
- **Não criar um site isolado:** O portal é a extensão oficial da Diretoria de Relações Internacionais (DRI) da Universidade de Fortaleza (Unifor).
- **Cores principais:**
  - Azul institucional Unifor / Navy: `#18248a` (hero banners, cabeçalhos de destaque, textos institucionais)
  - Azul Elétrico / Ação: `#0047f5` (botões principais, links com setas, tags selecionadas, indicadores de foco)
  - Fundo neutro suave: `#f4f7fc` (fundo de página e áreas de contraste sutil)
  - Branco puro: `#ffffff` (cards, containers de conteúdo, modais)
  - Azul claro / Pills: `#e2efff` / `#e9f0ff` (badges e destaques secundários)
  - Textos escuros: `#0f172a` / `#1e293b`
- **Barra Superior de Acessibilidade (fixa no topo de todas as telas):**
  - Textos e ações funcionais: `Acessibilidade`, `A−`, `A`, `A+` (ajuste real de tamanho de fonte), `Contraste` (alternador de alto contraste funcional), e links `PORTAL UNIFOR` / `UNIFOR ONLINE`.
- **Cabeçalho Unifor / DRI:**
  - Logo/Brand da DRI: ícone estilizado ou sigla "DRI", nome "Diretoria de Relações Internacionais".
  - Botão de acesso superior à direita: muda contextualmente conforme a tela ou switcher de perfil (`Minha DRI →` no público/aluno, `My Unifor →` na versão inglesa, `Área de gestão →` nos painéis administrativos).
  - Menu de navegação principal:
    1. Início
    2. Oportunidades
    3. Destinos e quiz
    4. Guias de mobilidade
    5. Docentes e pesquisa
    6. Sobre a DRI
    7. Seletor de idioma: `PT / EN` (na versão EN do Arrival Guide, inverte para `EN / PT`).
  - Breadcrumbs estruturados no topo do conteúdo: ex. `UNIFOR / DRI / INTERNACIONALIZAÇÃO`, `UNIFOR / DRI / OPORTUNIDADES`, `UNIFOR / DRI / QUIZ DE DESTINOS`, `UNIFOR / DRI / INTERNATIONAL STUDENTS`, `ÁREA RESTRITA / PERFIL DRI`, etc.
- **Rodapé Institucional Unifor (padronizado em todas as telas):**
  - "Universidade de Fortaleza"
  - "Av. Washington Soares, 1321 · Edson Queiroz · Fortaleza / CE · Brasil · CEP 60811-905"
  - Links: `Sobre a DRI`, `Convênios`, `Contatos`, `Privacidade`, `Acessibilidade`, `Portal oficial Unifor`.

---

#### 2. As 10 Telas Obrigatórias do Protótipo (Mapeadas exatamente do PDF Desktop):

1. **Tela 1: Início (Home DRI Integrada)**
   - Hero com fundo azul marinho (`#18248a`): "DE FORTALEZA PARA O MUNDO", título "Seu próximo capítulo é internacional", subtítulo "Descubra destinos, conecte sua pesquisa e encontre orientação para viver a Unifor sem fronteiras.", botão `Encontrar oportunidades →`.
   - Badges: "Um módulo integrado ao portal oficial da Unifor. Trocas culturais que aproximam pessoas e ampliam horizontes."
   - Seção "Qual é a sua jornada?":
     - `01 / ESTUDANTE UNIFOR`: "Estude mundo afora" -> Destinos, editais e orientação para planejar seu intercâmbio. Link `Explorar mobilidade de saída →`.
     - `02 / INTERNATIONAL STUDENT`: "Make Unifor your next destination" -> Your guide to studying and living in Fortaleza. Link `Explore the arrival guide →`.
     - `03 / DOCENTES`: "Conecte ensino e pesquisa" -> Mobilidade docente, cooperação e publicação internacional. Link `Conhecer oportunidades docentes →`.
   - Seção "Encontre novas possibilidades - Ver todas as oportunidades →":
     - Card 1: `MOBILIDADE ACADÊMICA · EXEMPLO` - "Um semestre em Portugal" (Graduação e pós-graduação · Presencial · Até 30 nov. 2026 · Data ilustrativa · `Ver oportunidade →`).
     - Card 2: `PARCEIROS · EXEMPLO` - "Oportunidades Santander" (Bolsas e experiências internacionais · Múltiplos destinos · Prazos no canal oficial · `Ver oportunidade →`).
     - Card 3: `DOCENTES · EXEMPLO` - "Cooperação em pesquisa" (Redes acadêmicas e mobilidade docente · Consulte condições · `Ver oportunidade →`).
     - Aviso obrigatório: "Ofertas de demonstração: disponibilidade, critérios e datas dependem de validação da DRI."
   - Banners orientativos:
     - "AINDA NÃO SABE PARA ONDE IR? Um destino que combina com você. Explore afinidades de idioma, orçamento, cultura e objetivos. O quiz é orientativo e não exige login. `Fazer o quiz de destinos →`"
     - "PLANEJE COM ANTECEDÊNCIA - Da documentação ao embarque. Entenda proficiência, seguro, visto de estudante e prazos consulares antes de comprar as passagens. `Consultar guia de saída →`"
   - Seção "Acontece na DRI":
     - Notícia: "Missão Orlando da Unifor promove imersão internacional - Liderança, inovação e IA. `Ler notícia ↗`"
     - Programa: "Do mundo para a Universidade de Fortaleza - Orientação e acolhimento. `Conhecer o programa →`"
   - Seção "Conexões que transformam - METAS 2026 · DIVULGADAS NO SITE OFICIAL DA DRI" (Conformidade LGPD RN02):
     - Indicadores agregados: `120` Estudantes enviados | `60` Estudantes recebidos | `120` Serviços de tradução | `50` Disciplinas em língua estrangeira | `600` Exames de proficiência | `15` Programas de dupla titulação.
     - Aviso LGPD: "Metas, não resultados realizados. Exibição somente de dados quantitativos agregados, sem identificar estudantes."

2. **Tela 2: Catálogo de Oportunidades & Instituições**
   - Título: "Seu próximo destino começa com uma escolha. Encontre editais, programas e instituições para a sua jornada internacional."
   - Abas: `Oportunidades` | `Instituições conveniadas` e alternador funcional `Lista | Mapa`.
   - Barra lateral "Refine sua busca":
     - Filtros funcionais: Público (`Estudante Unifor`, `Estudante Estrangeiro`, `Docente`), País (`Todos`, `Portugal`, `Espanha`, `França`, `Alemanha`, `EUA`, etc.), Modalidade (`Todas`, `Presencial`, `Virtual`, `Híbrida`), Situação (`Todas`, `Inscrições abertas`, `Em breve`, `Encerrado`), Prazo de inscrição.
     - Botões `Aplicar filtros` e `Limpar filtros`.
   - Campo de busca: "Buscar país, instituição ou programa" + Ordenação (`Prazo mais próximo ⌄`).
   - Contagem dinâmica (ex: "3 oportunidades · Conteúdo demonstrativo").
   - Cards com checkbox interativo `☐ Comparar destinos` (permite selecionar destinos para a tela de comparação), tags, detalhes e link `Ver oportunidade →`.
   - Visualização em Mapa Interativo integrado quando alternado para `Mapa`.
   - Banner de rodapé da lista: "Planeje antes do edital: Visto, documentos e proficiência exigem antecedência. `Consultar guia →`"

3. **Tela 3: Detalhe da Oportunidade / Edital**
   - Breadcrumb: `UNIFOR / DRI / OPORTUNIDADES / DETALHE`
   - Título: "Um semestre em Portugal - Mobilidade acadêmica para estudantes de graduação e pós-graduação da Unifor."
   - Tag: `EDITAL DEMONSTRATIVO · DADOS E PRAZOS ILUSTRATIVOS`
   - Destaques: Destino: Portugal | Duração: 1 semestre | Modalidade: Presencial.
   - 4 Passos: `01 Leia o edital` | `02 Faça sua verificação preliminar` | `03 Planeje carta de aceite, seguro e trâmites consulares` | `04 Candidate-se exclusivamente pelo canal oficial`.
   - **Simulador Interativo de Elegibilidade Preliminar (RN06):**
     - "AUTODECLARAÇÃO · SEM ENVIO DE DOCUMENTOS - Este edital combina com o seu perfil?"
     - Campos: Vínculo acadêmico (Graduação / Pós-graduação), Situação de matrícula (Regularmente matriculado / Trancado), PMG atual (campo numérico com feedback em tempo real), Proficiência exigida (B1, B2, etc.).
     - Botão `Verificar critérios preliminares` com retorno visual orientativo imediato (Apto preliminarmente / Atenção aos requisitos).
     - Alerta legal: "Resultado apenas orientativo: não garante aprovação e não substitui a conferência documental oficial da DRI."
   - Coluna Lateral Direita com Cards Fixos:
     - Card de Inscrições: Prazo `30 nov. 2026`, botão `Ler edital e candidatar-se ↗`, e botão `Tenho interesse` (que abre a manifestação simplificada de interesse vinculada ao protocolo DRI).
     - Card Alerta Crítico (RN03/RN05): "Atenção ao visto de estudante: Passaporte não substitui o visto. Considere os prazos para carta de aceite e envio de documentos ao consulado antes de comprar passagens."
     - Card Suporte: "Precisa de orientação? Consulte o guia de mobilidade ou procure o setor de apoio ao intercâmbio discente. `Guia de saída →` | `Fale com a DRI →`"

4. **Tela 4: Quiz de Destinos (Assistente Interativo de Afinidade)**
   - Breadcrumb: `UNIFOR / DRI / QUIZ DE DESTINOS`
   - Título: "O mundo tem a sua cara. Explore destinos de acordo com seu idioma, orçamento, cultura e objetivos."
   - Barra lateral "SEU CAMINHO - Um passo de cada vez":
     - `01 · Idioma` (ex: Português ou espanhol)
     - `02 · Orçamento` (ex: Até € 700 / De € 700 a € 1.000 / Acima de € 1.000 / Ainda estou planejando)
     - `03 · Cultura` (ex: Vida urbana, histórica, praiana, cosmopolita)
     - `04 · Objetivo` (ex: Carreira, pesquisa, vivência cultural, aperfeiçoamento de idioma)
     - Aviso de privacidade: "Não precisa fazer login. Nenhum nome ou matrícula é solicitado."
   - Navegação funcional entre as 4 etapas com botões `← Voltar` e `Continuar →`.
   - Ao concluir, direciona para o comparador de destinos com o perfil preenchido.

5. **Tela 5: Comparador de Destinos (Fichas Comparativas)**
   - Breadcrumb: `UNIFOR / DRI / QUIZ / COMPARAR DESTINOS`
   - Título: "Compare caminhos. Escolha com clareza. Sugestões ilustrativas para explorar a partir das suas preferências."
   - Banner de Perfil: "SEU PERFIL NESTA SIMULAÇÃO: Português ou espanhol · De € 700 a € 1.000/mês · Cultura urbana · Experiência acadêmica [Editar preferências]"
   - Tabela comparativa "COMPARE O QUE IMPORTA" com colunas comparativas (ex: Porto / Portugal vs. Valência / Espanha):
     - Idioma
     - Manutenção estimada / mês
     - Cultura e estilo de vida
     - Ponto positivo
     - Ponto de atenção
     - Instituições e cursos
     - Visto e documentação
     - Próximo passo (`Ver oportunidades em Portugal →` / `Ver oportunidades na Espanha →`)
   - Avisos obrigatórios: "Estimativas ilustrativas, não cotações nem ofertas.", "Afinidade não é elegibilidade", passos "Da escolha ao embarque", e botão `Refazer o quiz`.

6. **Tela 6: International Students / Arrival Guide (Versão em Inglês)**
   - Idioma ativo: `EN / PT`
   - Header: `DRI / My Unifor →`
   - Breadcrumb: `UNIFOR / DRI / INTERNATIONAL STUDENTS / YOUR ARRIVAL GUIDE`
   - Título: "YOUR ARRIVAL GUIDE - Your world. Your Unifor. Everything you need to begin your academic experience in Fortaleza, Brazil. [Application instructions ↗]"
   - Âncoras rápidas: `01 Visa & attendance`, `02 Application steps`, `03 Courses & languages`, `04 Living in Fortaleza`, `05 Contact DRI`.
   - **Destaque obrigatório das 2 Regras Inegociáveis (RN03 e RN04):**
     - Box 1: `Student visa required`: "A valid student visa is required for enrolment. A passport or tourist visa alone does not allow you to enrol."
     - Box 2: `At least 75% attendance`: "Passing a course requires both the required grades and a minimum of 75% attendance. This rule is not negotiable."
   - Processo: "Your arrival, step by step" (01 Check agreement, 02 Official application & nomination, 03 Obtain acceptance & valid student visa, 04 Arrange insurance, housing, arrival).
   - Seção "ACADEMIC LIFE - Find your courses":
     - Filtros funcionais: Language ⌄, Subject area ⌄, Semester ⌄ + Catálogo com exemplos reais de disciplinas ministradas em inglês.
   - Seção "LIVING IN FORTALEZA - Feel at home beyond the classroom":
     - Card "Housing & neighbourhoods": bairro Edson Queiroz (onde fica a Unifor), Aldeota, Meireles, transporte, segurança.
     - Card "Build your monthly budget": estimativas práticas de aluguel, transporte, alimentação e saúde.
     - Destaque geográfico da Unifor: Av. Washington Soares, 1321 · proximidade com shoppings (Iguatemi Bosque ao lado), praias (Praia do Futuro, Beira Mar) e bancos.
   - Alertas institucionais: flexibilidade acadêmica vs. vistos/frequência inegociáveis, e nota de que o inglês prioriza guias essenciais de chegada (RN07).

7. **Tela 7: Docentes e Pesquisa (Mobilidade Docente & Web Impact)**
   - Breadcrumb: `UNIFOR / DRI / DOCENTES E PESQUISA`
   - Título: "ENSINO, COOPERAÇÃO E WEB IMPACT - Conhecimento sem fronteiras. Conecte sua pesquisa a novas redes de cooperação e amplie o alcance internacional da produção acadêmica."
   - 3 Frentes: `01 MOBILIDADE DOCENTE`, `02 COOPERAÇÃO EM REDE`, `03 PUBLICAÇÃO CIENTÍFICA`.
   - Curadoria e bases de periódicos internacionais acessíveis (*Web Impact*):
     - Filtros por área do conhecimento, idioma e taxas de publicação.
     - Checklist "Antes de submeter": ✓ Confirme a indexação | ✓ Avalie a política editorial | ✓ Verifique eventuais APCs | ✓ Evite custos não previstos.
     - Alerta: "Acesso aberto não significa publicação gratuita."
     - Cards de bases para consulta: SciELO e DOAJ com links e avisos de curadoria.
     - Card de apoio: "Converse com a DRI - Solicitar orientação".

8. **Tela 8: Minha DRI / Acesso Autenticado (Estudante Autenticado)**
   - Breadcrumb: `UNIFOR / DRI / MINHA DRI / ACESSO AUTENTICADO`
   - Header: `Minha DRI - Acesso institucional (Sessão ilustrativa)`.
   - Menu lateral: `Meus interesses`, `Orientações recebidas`, `Privacidade e dados`, `Explorar oportunidades`.
   - Aviso obrigatório: "Interesse não é candidatura: Este protocolo não reserva vaga e não substitui sua inscrição oficial."
   - Painel de Acompanhamento da Manifestação de Interesse:
     - Card: "Um semestre em Portugal - Mobilidade acadêmica · Exemplo".
     - PROTOCOLO: `DRI-2026-0001` (com status dinâmico: Recebida, Em orientação, Concluída).
     - Timeline visual dos passos de atendimento.
     - Próximos passos e botão `Ir para a candidatura oficial ↗`.
     - Ações: `Cancelar manifestação de interesse` e `Voltar às oportunidades`.
     - Garantia de privacidade LGPD: dados pessoais visíveis apenas ao próprio estudante autenticado e à equipe DRI.

9. **Tela 9: Área Restrita / Perfil DRI (Gestão de Conteúdo e Rascunhos com Governança - RN01)**
   - Breadcrumb: `ÁREA RESTRITA / PERFIL DRI`
   - Título: "Conteúdo com governança. Prepare orientações, acompanhe interesses e envie conteúdo para revisão do Marketing."
   - Menu lateral: `Visão geral`, `Conteúdos`, `Manifestações de interesse`, `Indicadores agregados`, `Traduções vinculadas`.
   - Destaque: "A DRI prepara e submete. A publicação oficial é realizada pelo Marketing."
   - Métricas: `04 Rascunhos`, `02 Em revisão`, `01 Ajustes solicitados`.
   - Tabela interativa de conteúdos com botão `+ Criar rascunho`:
     - Colunas: Conteúdo, Status (Aguardando Marketing, Rascunho, Ajustes solicitados), Idiomas (PT, PT/EN), Ação (`Visualizar →`, `Editar →`).
     - Ações funcionais: criar rascunho, editar minuta e clicar em `Enviar rascunho para revisão` (altera status para Aguardando Marketing).
   - Abas/Seções:
     - Gestão de Manifestações de Interesse (visualizar protocolos como DRI-2026-0001, alterar status para "Em orientação" ou "Concluída").
     - Gestão de Metas e Indicadores agregados (sem expor nomes de alunos).

10. **Tela 10: Área Restrita / Perfil Marketing / Revisão Editorial (RN01)**
    - Breadcrumb: `ÁREA RESTRITA / PERFIL MARKETING / REVISÃO EDITORIAL`
    - Título: "Revisar antes de publicar. Valide identidade visual, qualidade editorial e privacidade no portal oficial da Unifor."
    - Menu lateral: `Fila de revisão · 02`, `Ajustes solicitados · 01`, `Histórico de publicações`, `Diretrizes de marca`.
    - Item em Revisão ativa: "Guia de chegada internacional - Enviado pela DRI · Versão 2 · Português + English".
    - Caixa de Prévia Oficial do Conteúdo (`PRÉVIA / ENGLISH`) com destaque das regras de visto e 75% de frequência.
    - Checklist interativo de Conferência Editorial:
      - [x] Identidade visual Unifor
      - [x] Clareza e qualidade textual
      - [x] Links e fontes oficiais
      - [x] Imagens autorizadas ou ausentes
      - [x] Sem dados pessoais de estudantes
      - [x] Visto e frequência em destaque
      - [x] Versão essencial em inglês
    - Painel "Decisão do Marketing":
      - Campo de texto "Comentário de revisão - Descreva os ajustes necessários, se houver."
      - Botão secundário: `Solicitar ajustes à DRI` (move item para Ajustes solicitados).
      - Botão principal: `Aprovar e publicar →` (publica oficialmente, atualiza status para Publicado e reflete no portal público).

---

### Open (Decisões de Engenharia e Experiência do Protótipo)
- Implementar barra de alternância rápida de perfil / páginas no topo ou floating drawer para facilitar a demonstração entre:
  - 1. Portal Público (Home, Oportunidades, Detalhe, Quiz, Comparador)
  - 2. Aluno Internacional (Arrival Guide em inglês)
  - 3. Docentes & Pesquisa (Web Impact)
  - 4. Minha DRI (Aluno autenticado)
  - 5. Gestão DRI (Rascunhos e manifestações)
  - 6. Marketing (Fila de aprovação e publicação)
- Persistência em estado local (React State / LocalStorage) para que a submissão de rascunhos pela DRI, envio para o Marketing, aprovação do Marketing e registro de interesse no Minha DRI reflitam em tempo real durante a navegação.
- Totalmente responsivo para Desktop (resolução de referência 1280px+ e laptops), com suporte a acessibilidade (Aumentar fonte, alto contraste).

---

build a real working app, not a clickable prototype; the screen and kit files show layout, content and look (a wireframe's, structure only) and are never code to copy. The screens are the moments the user designed, not the whole product. Before building, walk through each flow as its user would and design what the pictures leave out, as a product designer would for this product: the steps a flow needs to finish and how the app responds to what the user does, including the moments its users will actually run into, like waiting on something or finding nothing yet. Add nothing a user of this product would never meet, and keep an app the user wants simple, simple. Never leave a step the product's core flows need as "coming soon", unless the brief says the user chose to. Where such a step needs an outside service, build every part up to it and say in your reply what's left to connect. Fill product gaps only, never a look the design set: an added step reuses the UI kit's tokens, chrome and parts and the nearest designed screen's layout, with no new visual direction. Look at every screen's picture before writing code; design.md says which picture or sheet holds each screen. Open the UI kit's shells and parts HTML for the header, tab bar, composer and components, not only its tokens. Use each finished screen's copy exactly as design.md lists it; never invent copy for one. A wireframe under design.md's Wireframes gives structure only: build it in the design's look, as design.md says. The screens' photos are placeholders for the mockups only: replace every photo design.md lists with the user's own upload for it, else as design.md says (a photo without people re-composed with imagegen--edit_image from it as a reference, a photo of people generated from its brief and never from the photo), and ship no set photo or its URL. For a design that came with no design.md, every photo on assets.lovable.dev or images.unsplash.com is a set photo: replace it with the user's own upload for it, else a new image generated for its slot, any person in it one who doesn't exist, never from the photo or a picture showing it. Build and check each screen at the canvas it was drawn at: phone 393×764, tablet landscape 1133×744, tablet portrait 744×1133, desktop 1280×832. After building, screenshot the app at those sizes and states, compare each finished screen with its picture, and fix every visual difference you didn't choose; check a wireframe's screen against its structure, never its grey look. End your reply with "Changed from the mockups": each deliberate change and why, and "Added beyond the mockups": each step, state or interaction you built that no screen shows.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/dac79c30-01a0-4ddc-ac0d-177f1ee5e28d).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
