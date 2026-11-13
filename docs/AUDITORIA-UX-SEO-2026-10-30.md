# Auditoria de UX, conteúdo e SEO — Juliane Costa

Data: 30/10/2026. Referência: commit d7daac1, enviado à develop.
Escopo: apontar melhorias e explicar o valor da entrega; sem alterar a interface nesta auditoria.

## Parecer

A versão nova está mais preparada para descoberta por serviço, apresentação da profissional e contato contextual. Isso é uma evolução de arquitetura e experiência, ainda sem comprovação de aumento de tráfego, posicionamento ou agendamentos. A stack não concede vantagem automática de ranking.

A principal lacuna de conteúdo está nas páginas comerciais: as três páginas de atendimentos compartilham parágrafos e as mesmas três perguntas de agendamento. O ILIB tem destaque visual, mas sua página ainda explica pouco da experiência concreta. O próximo investimento deve aprofundar essas informações com dados confirmados, preservando a identidade atual.

## Evidência e limites

- Leitura de código atual, HTML gerado e site anterior em archive/legacy.
- Conferência HTTP: o domínio principal respondeu 200 com o título e a estrutura do site anterior; hom.julianecostapodologa.com.br retornou ENOTFOUND nesta consulta. Isso não confirma o estado de eventuais URLs pages.dev.
- A versão nova gera 22 páginas HTML, incluindo 404, e tem nove artigos, 22 perguntas na página de dúvidas, 20 avaliações e seis produtos.
- O build, typecheck e nove testes passaram na alteração anterior; não foram repetidos porque esta auditoria não alterou a implementação.
- Não houve acesso ao Search Console, métricas de agendamentos, dados de campo ou benchmark comparável de PageSpeed entre versões.
- O navegador falhou na inicialização. Não houve nova inspeção visual desktop/mobile; propostas de composição e leitura devem ser verificadas na página renderizada antes de implementação.
- Skills aplicadas: frontend-ux e ui-ux-pro-max, com os contextos locais. A consulta Astro retornou orientações aplicáveis a imagens responsivas e carregamento adiado; a consulta UX retornou foco visível e controle de carrosséis. As duas tentativas no domínio landing não encontraram correspondência. A proposta de primeira dobra usa julgamento contextual e frontend-ux, não um resultado desse catálogo.

## Comparação com o site anterior

| Dimensão | Anterior | Versão nova | Valor e limite |
| --- | --- | --- | --- |
| Descoberta | Uma página principal com seções | Home, páginas de serviços, ILIB, conteúdos, produtos e localização | Mais destinos específicos, desde que tragam informação própria |
| SEO básico | Já tinha title, description, canonical, robots, sitemap e HealthAndBeautyBusiness | Metadados por rota, breadcrumbs, grafo de negócio/pessoa/serviços/artigos | Organização ampliada; não representa ganho automático de posição |
| Canonical e sitemap | Canonical sem www; sitemap e robots anunciavam www | Origem central configurável e sitemap gerado em produção | Reduz divergências se DNS, redirects e deploy forem configurados de forma consistente |
| Conteúdo | Serviços e FAQ concentrados na home | Nove artigos, 22 dúvidas e páginas de atendimento | Mais oportunidades de responder dúvidas; quantidade não substitui qualidade |
| Contato | WhatsApp com mensagem genérica | Mensagens por serviço e produto, contato móvel e links de rota | Ajuda a iniciar conversas com contexto; clique não equivale a agendamento |
| Confiança | Retrato, espaço, mapa e apresentação | Mantém esses elementos e acrescenta avaliações com fonte, íntegra e vídeo voluntário | Evidência da experiência real, sem fabricar credenciais ou resultados |
| Desempenho | Já era estático, com AVIF e lazy loading | Astro estático, imagens responsivas, fontes locais e vídeo após ação | Estratégia adequada; a versão nova também tem mais conteúdo e JS, exigindo medição comparável |
| Identidade | Paleta e tipografia diferentes dos materiais aprovados | Sistema lavanda, tipografia e logo alinhados aos materiais do Canva | Coerência de marca e manutenção por componentes |

## Recomendações priorizadas

### P0 — Concluir publicação e preservar indexação

Problema observado: o domínio principal ainda serve a versão anterior. A versão nova nasce como preview/noindex; é preciso habilitar produção explicitamente.

Ação: validar develop em HOM, publicar a versão aprovada na main e configurar PUBLIC_SITE_MODE=production e PUBLIC_SITE_URL=https://julianecostapodologa.com.br. HOM deve continuar noindex. Conferir www/sem-www, HTTPS, canonical, sitemap-index.xml, 404 real e URLs alternativas do provedor. Preservar as âncoras antigas principais, já presentes na home nova. Manter redirect do sitemap antigo para o novo ou atualizar suas referências externas quando houver.

Verificação: resposta e HTML públicos, sitemap com URLs de produção, inspeção de URL e envio de sitemap no Search Console. Fazer redirecionamentos permanentes apenas onde há substituição de URL, evitando redirecionar todo erro para a home.

### P1 — Transformar páginas de serviço em respostas comerciais úteis

Evidência: src/pages/atendimentos/[slug].astro:38 compartilha os parágrafos entre os serviços; linha 69 repete appointmentFaq.slice(0, 3).

Ação: cada serviço deve explicar o que inclui, situações em que costuma ser procurado, etapas, preparação e cuidados posteriores confirmados, limites do atendimento e dúvidas específicas. Começar por unha encravada e podologia preventiva. Usar fotos reais apropriadas, quando disponíveis e autorizadas, e relacionar artigos e avaliações pertinentes. O anterior também citava órteses, podopediatria e podogeriatria: confirmar o catálogo atual para não omitir serviços relevantes nem restaurar ofertas não confirmadas.

Título sugerido: "Avaliação de unha encravada em Colombo". Manter linguagem acolhedora, com o serviço claro no título principal. Não criar páginas quase iguais para cada bairro ou procedimento sem conteúdo próprio.

Verificação: uma pessoa deve conseguir identificar se o serviço corresponde à sua procura e entender o próximo passo sem buscar outra página genérica.

### P1 — Explicar melhor o ILIB

Evidência: src/pages/ilib.astro:19 usa um título abstrato; o corpo mostra o posicionamento do equipamento e convida a conversar, mas não descreve detalhadamente a sessão.

Ação: título mais descritivo, vídeo existente, etapas da visita, duração e preparo quando confirmados, como acontece a avaliação e formação específica quando comprovada. Reunir as limitações em uma explicação clara, preservando informação concreta no restante do texto.

Limite: informações de indicação, eficácia e contraindicações exigem confirmação técnica; não extrair promessas clínicas de vídeos promocionais ou depoimentos.

### P1 — Tornar a primeira dobra e o agendamento mais explícitos

Evidência: a home identifica a profissão na linha superior e a localização abaixo do CTA, mas a descrição é genérica; o botão em src/pages/index.astro:38 diz "Agendar meu momento".

Ação proposta: preservar "Cuidado com seus pés, atenção a você", acrescentar uma frase como "Podologia e ILIB no Centro de Colombo, com atendimento individual e hora marcada" e usar "Agendar pelo WhatsApp" ou "Consultar horários". Revalidar a informação e a quebra de linhas em mobile. Um resumo discreto de prova social pode aproximar confiança da ação, após reconferir os dados do Google.

Verificação: testar se o visitante identifica serviço, cidade e destino do botão na primeira tela. Avaliar contatos iniciados e qualificados; não prometer aumento de conversão sem medição.

### P1 — Completar a confiança profissional e o acesso físico

Evidência: a página Sobre tem apresentação pessoal, mas não traz formação/capacitações confirmadas. A localização já tem endereço, sala, galeria e mapa.

Ação: incluir formação, instituições e capacitações verificadas; detalhes reais da rotina de higiene e materiais somente após confirmação. Acrescentar foto da entrada/fachada, referência de chegada, estacionamento e acessibilidade quando conhecidos. Confirmar horários e política de reagendamento antes de PRD.

Verificação: conferir cada afirmação com Juliane e comparar nome, endereço e telefone com o Perfil da Empresa no Google.

### P1 — Conectar a entrega a resultados mensuráveis

Evidência: não há analytics no código. A presença do arquivo de verificação do Google não comprova acesso nem configuração do Search Console.

Ação: confirmar Search Console, vincular domínio e sitemap, acompanhar consultas e páginas. Escolher medição proporcional de cliques em WhatsApp, serviço de origem e rotas, com revisão de privacidade antes de instalar ferramentas. Juliane deve registrar contatos qualificados e agendamentos efetivados.

Verificação: comparar períodos consistentes e anotar data de publicação. Indicadores: impressões e cliques locais, CTR, consultas por serviço, contatos qualificados e agendamentos. Separar tráfego informativo de intenção de atendimento.

### P2 — Reforçar conteúdo editorial e SEO local

Ação: melhorar os nove artigos existentes com perguntas reais da prática e revisão técnica, especialmente nos educativos. Manter autoria editorial da Codexo; acrescentar revisão profissional apenas quando ela acontecer. Priorizar assuntos que conectam a dúvida ao serviço disponível. Datas devem refletir publicação e alterações reais.

Pode lançar com nove conteúdos úteis e adequadamente revisados. Não há benefício garantido por publicar semanalmente ou alcançar uma contagem de palavras. Um calendário só faz sentido se houver capacidade de entregar e atualizar conteúdo próprio.

No Perfil da Empresa: conferir categoria, serviços reais, contato, endereço, fotos e avaliações legítimas. O Google considera relevância, distância e destaque na busca local; o site é parte desse trabalho, e não substitui o perfil.

### P2 — Refinar navegação e detalhes de descoberta

Evidência: src/components/Header.astro:24 destaca apenas correspondência exata de URL. Ao entrar em /atendimentos/unha-encravada/, a seção Atendimentos perde o destaque no menu, embora os breadcrumbs continuem presentes.

Ação: indicar visualmente a seção das páginas filhas sem marcar o link pai como a página atual. Avaliar índice por assunto no FAQ e mini-sumário em artigos que crescerem. Acompanhar a descoberta dos produtos e dos carrosséis antes de alterar sua composição aprovada. Manter os controles manuais e leitura integral dos relatos.

Verificação: navegação por teclado, retorno do modal, foco visível e leitura a 320px. Não apresentar um teste automatizado como comprovação completa de acessibilidade.

### P2 — Medir desempenho e ajustar pelo gargalo real

Ação: comparar home, serviço e artigo em dispositivo móvel e rede controlados, na mesma hospedagem quando possível. Conferir LCP, INP e CLS de campo quando houver volume; usar Lighthouse/PageSpeed como diagnóstico. Verificar custo do mapa, imagens, fontes, animações e vídeo antes/depois do clique.

Preservar imagens responsivas, dimensões reservadas, conteúdo útil no HTML, reduced motion e vídeo voluntário. Considerar mapa sob demanda se a medição mostrar custo relevante. Não adicionar bibliotecas de animação para resolver conteúdo ou navegação.

### P2 — Manutenção de dados e documentação

Evidência: avaliações têm snapshot de 23/10/2026 em src/data/reviews.ts:4. Documentos antigos ainda descrevem vídeo desativado e quantidades anteriores de artigos.

Ação: estabelecer revisão periódica de nota, quantidade, links, produtos, contato e fotos; atualizar documentação histórica com status atual claramente separado. Refinar serviceType do schema por serviço e validar dados estruturados, sem tratar isso como a principal alavanca de captação.

## O que a Codexo entrega

Um site próprio com identidade coerente, arquitetura para apresentar serviços e receber visitas de buscas específicas, conteúdo editorial inicial, prova social verificável, vídeo local voluntário, catálogo que inicia consulta por produto e contato contextual pelo WhatsApp. A base técnica permite evoluir páginas mantendo o sistema visual e dados centralizados.

A entrega não inclui uma agenda confirmada, checkout, estoque em tempo real, atualização automática das avaliações, garantia de posicionamento ou aquisição de clientes comprovada. A etapa seguinte transforma a base entregue em operação: publicar, medir, aprender com as buscas e aprofundar os serviços prioritários.

Descrição sugerida para apresentação: "Reestruturamos a presença digital para apresentar os atendimentos com a identidade da Juliane, facilitar o contato e criar uma base organizada para ser encontrada por quem procura podologia em Colombo. O próximo ciclo acompanha a publicação, as buscas e os agendamentos para orientar a evolução."

## Fontes oficiais

- [Google — Guia de SEO](https://developers.google.com/search/docs/fundamentals/seo-starter-guide): descoberta, entendimento e limites de resultados.
- [Google — Conteúdo útil](https://developers.google.com/search/docs/fundamentals/creating-helpful-content): qualidade, experiência, confiança e ausência de contagem ideal de palavras.
- [Google — Classificação local](https://support.google.com/business/answer/7091?hl=pt-BR): relevância, distância e destaque.
- [Google — Experiência de página](https://developers.google.com/search/docs/appearance/page-experience): CWV e limites de pontuações como sinal de resultado.
- [Google — Dados estruturados](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data): compreensão de conteúdo e elegibilidade, sem garantia de aparência especial.
- [Google — Avaliações](https://developers.google.com/search/docs/appearance/structured-data/review-snippet): avaliações próprias de negócio local não geram elegibilidade para estrelas por simples marcação.

As avaliações no site servem como prova social. Relatos longos podem trazer contexto para a escolha; quantidade de palavras e repetição de termos não comprovam benefício de ranking. Não alterar relatos para inserir palavras-chave.
