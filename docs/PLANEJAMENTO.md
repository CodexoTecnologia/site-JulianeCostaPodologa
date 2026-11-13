# Juliane Costa — planejamento de evolução do site

23 de outubro de 2026 · proposta de direção e escopo · ainda sem alteração no site publicado

## 1. Decisões já confirmadas

- Objetivo principal: conquistar clientes novos, apoiado por confiança, descoberta local e contato pelo WhatsApp.
- A identidade deve vir principalmente dos materiais do Canva; a interface atual pode ser reescrita.
- Preservar a logo e a assinatura da Juliane. A referência da Ellen é o cuidado no projeto e a base técnica, com linguagem visual própria para Juliane.
- ILIB terá destaque na home e página própria.
- Não publicar preços em nenhuma página, artigo, imagem, vídeo, metadado ou schema.
- Endereço atual: Rua Venâncio Trevisan, 137, sala 01, Centro, Colombo/PR. O endereço Francisco Camargo pertence a uma fase anterior.
- WhatsApp atual: +55 41 99572-6923. O número 99655-4844 é antigo.
- Trabalhar com os vídeos existentes por enquanto. O uso depende de validação de desempenho; não há autorização para sacrificar a experiência por vídeo.
- Certificados serão enviados depois. Não atribuir formações, títulos ou capacitações ainda não comprovados.
- A revisão técnica da Juliane tem disponibilidade limitada. O plano editorial precisa caber nessa realidade.

## 2. Diagnóstico: o que mudar e por quê

Inspeção do repositório `site-JulianeCostaPodologa`, página pública, materiais locais e PDF de serviços/preços. As observações abaixo não são um relatório de Lighthouse nem uma medição de tráfego.

| Observação | Efeito na experiência | Proposta | Como verificar |
| --- | --- | --- | --- |
| O roxo atual #8E44AD e o texto azulado se afastam das artes | Marca pouco consistente entre Instagram, impresso e site | Extrair lavandas e carvão dos arquivos, preservando logo | Comparação lado a lado com Canva |
| Serviços numerosos em listas e grande FAQ na mesma página | Difícil entender qual atendimento procurar | Home resumida, páginas de atendimento e dúvidas contextualizadas | Testar localizar um atendimento e iniciar contato no celular |
| ILIB tem destaque por uma grade extensa de benefícios | A explicação comercial depende de alegações técnicas genéricas | Seção editorial com mídia, processo e acesso a página própria | Visitante entende o que encontrará e como conversar com Juliane |
| Foto de abertura ampla, inclinada e flutuante | A composição parece menos deliberada; há movimento contínuo | Retrato com enquadramento estável, moldura orgânica e apresentação breve | Revisão visual e comparação de LCP |
| Parte do conteúdo começa em opacity:0 e depende de JS | Falha de script pode deixar seções invisíveis | HTML visível como base; animação como melhoria | Navegar com JS desativado |
| Lightbox abre por clique em imagens, sem gestão completa de foco; FAQ não comunica expansão no JS | Uso por teclado e leitor de tela fica prejudicado | Links/botões semânticos, dialog e disclosures acessíveis | Teclado, Escape e retorno de foco |
| Canonical/schema usam domínio sem www; sitemap e robots usam www | Sinais de URL inconsistentes | Uma origem oficial com redirecionamento e geração centralizada | Conferir respostas HTTP, canonical e sitemap |
| Schema informa horários exatos, mas página diz apenas por agendamento | Informação potencialmente inconsistente | Confirmar horários; até lá comunicar somente agendamento | Mesmos dados no site e perfil comercial |
| Artes antigas têm endereço, contato e ofertas diferentes | Reaproveitamento pode publicar dados errados | Curadoria de cada imagem e vídeo antes do uso | Revisão dos quadros e de todo texto visível |

Pontos a preservar: fotos reais, WhatsApp como ação simples, fontes locais, imagens responsivas já em AVIF, mapa carregado sob demanda e domínio já estabelecido.

## 3. Direção de marca: cuidado próximo, apresentação precisa

O site deve transmitir acolhimento, organização e confiança. A marca já tem bons elementos: assinatura pessoal, símbolo do pé com flor, lavandas luminosas, formas curvas e texto escuro. Vamos transformar esse repertório em um sistema consistente.

### Evidência nos arquivos

- `logo.png`: assinatura existente e lavanda #CE7CFA.
- `background roxo.png`: áreas dominantes #F2DDFE, #EAC6FD e #E4B3FE.
- `Confira nossos serviços...png`: lavandas, carvão #403F3F / #323131, fotos circulares e formas orgânicas.
- PDF `numero novo/Tabela de Preços - Juliane Podóloga.pdf`: fontes incorporadas Gistesy, Questrial, League Spartan, Cinzel e Flatory Sans. Isso identifica fontes desse PDF; não significa que toda arte da pasta use a mesma composição.

### Paleta inicial

| Token | Cor | Origem e aplicação |
| --- | --- | --- |
| `brand` | #CE7CFA | Extraída da logo; símbolo e detalhes, sem texto branco pequeno |
| `lavender-soft` | #F2DDFE | Extraída do fundo; grandes áreas de marca |
| `lavender` | #EAC6FD | Extraída do fundo; transições entre seções |
| `lavender-strong` | #E4B3FE | Extraída do fundo; formas e destaques pontuais |
| `ink` | #313131 | Carvão presente na logo e próximo dos textos das artes |
| `paper` | #FCF8FE | Neutro proposto para leitura e respiro |
| `action` | #613176 | Tom funcional proposto, derivado da família violeta, para CTA e foco |
| `muted` | #5C5362 | Tom funcional proposto para texto secundário |

As cores extraídas são referências de pixels de arquivos exportados, não uma alegação de manual oficial de marca. Os tons funcionais novos precisam da aprovação visual.

Contrastes calculados: carvão sobre #F2DDFE ≈10,25:1; carvão sobre #E4B3FE ≈7,54:1; branco sobre CTA #613176 ≈9,51:1. Branco sobre #CE7CFA ≈2,66:1: reservar esse lavanda para fundos com texto escuro e decoração. São verificações de pares de cores, não certificação de acessibilidade da interface inteira.

### Tipografia recomendada

- **League Spartan 600–700:** títulos, números de etapas, botões e pequenos destaques. Já integra o material de origem e tem presença sem traços delicados.
- **Questrial 400:** parágrafos, FAQ e artigos; 18px como ponto de partida, altura de linha 1,6–1,75, leitura até aproximadamente 65 caracteres por linha. Testar com público mais velho e zoom.
- **Assinatura original:** permanece na logo. Não reescrever o nome com outra fonte cursiva.
- Cinzel e Flatory pertencem ao repertório dos materiais, mas não precisam virar mais downloads no site. Evitar títulos longos em caixa alta ou texto condensado nas orientações.
- Servir fontes locais em WOFF2 com licença, subconjunto que preserve português e apenas os pesos usados. A prancha de planejamento usa os TTF oficiais para visualização, sem compromisso de orçamento de produção.

### Composição, fotografia e componentes

- Superfícies claras, curvas grandes inspiradas nas artes e detalhes da flor; evitar uma coleção de blobs aleatórios.
- Alternar composições abertas, divisores e poucas caixas com agrupamento real. ILIB recebe uma seção própria com maior escala.
- Retrato da Juliane, espaço atual e detalhes reais do atendimento. Fotos clínicas mais sensíveis ficam em contexto e mediante autorização; não dominarão a primeira dobra.
- A logo precisa de área livre, tamanho legível e proporção preservada. Usar PNG original até receber vetor oficial; não vetorizar por aproximação.
- Escala de espaço: 4, 8, 12, 16, 24, 32, 48, 64, 96px; margens móveis 20–24px; conteúdo máximo próximo de 1200px.
- Raios: 12px em controles, 24px em mídia; curvas maiores em blocos de marca. Bordas discretas e sombras só onde há benefício de separação.
- Componentes: cabeçalho, CTA WhatsApp, destaque ILIB, resumo de atendimento, etapas de consulta, vídeo com capa, apresentação profissional, galeria, FAQ, artigo, localização e assinatura Codexo.
- Cada controle terá foco, hover, estado aberto/fechado ou carregamento/erro quando aplicável. Metas de toque confortáveis de 44px; reflow a 320 CSS px.

## 4. Stack recomendada e motivos

| Camada | Escolha | Motivo |
| --- | --- | --- |
| Site | Astro com páginas estáticas | HTML pronto, rotas por atendimento e blog sem depender de JS para leitura |
| Estrutura | TypeScript + componentes Astro | Dados de contato, serviços e SEO centralizados e validados |
| Estilo | CSS com tokens semânticos | Identidade própria, responsividade e poucos recursos enviados |
| Conteúdo | Content Collections + Markdown/MDX quando necessário | Artigos, autores, revisão e rascunhos controlados no Git |
| Movimento | CSS + GSAP/ScrollTrigger onde houver coordenação real | Uma biblioteca principal, carregada somente nas páginas que a usam |
| Mídia | Astro Image/Sharp + pipeline separado para vídeo | Tamanhos corretos, dimensões reservadas e compressão adequada |
| SEO | Layout central, sitemap, JSON-LD por tipo de página | Consistência e menor chance de dados divergentes |
| Qualidade | Astro check, build, validação de conteúdo e testes de jornadas | Cobrir navegação, contato, mídia e indexação |
| Hospedagem | Build estático compatível com Vercel e Cloudflare | Facilita prévia e posterior infraestrutura Codexo; destino final a confirmar |

O site atual já é estático. Astro não torna o site automaticamente mais rápido: a migração é recomendada principalmente para organizar páginas, conteúdo e manutenção. O ganho de desempenho será demonstrado por medição. Sem necessidade inicial de React, backend, banco, CMS ou router no cliente. Se a Juliane precisar editar o blog sozinha, reavaliar CMS depois de definir quem publica.

Usar versões estáveis e compatíveis no momento da implementação, alinhadas à base da Ellen quando fizer sentido; não copiar dependências sem necessidade. O build será `npm run build`, saída `dist`. Preservar domínio e verificação do Google. Não alterar DNS ou hospedagem nesta etapa.

## 5. Jornada e mapa de páginas

Menu principal proposto: **Atendimentos · ILIB · A Juliane · Conteúdos · Localização** e CTA **Agendar pelo WhatsApp**. Dúvidas acessíveis no menu de Conteúdos e em cada página relevante. No celular, menu curto e ação de contato sem cobrir leitura ou controles de vídeo.

| Rota proposta | Função e conteúdo |
| --- | --- |
| `/` | Apresentar Juliane, orientar escolha, destacar ILIB, demonstrar cuidado e levar ao contato |
| `/atendimentos/` | Organizar cuidados com os pés, tecnologias e bem-estar em linguagem simples |
| `/ilib/` | Página prioritária: apresentação, vídeo, como é o atendimento, avaliação, dúvidas e CTA; sem preços e promessas genéricas |
| `/atendimentos/unha-encravada/` | Página de intenção específica, com explicação revisada, processo e perguntas relacionadas |
| `/atendimentos/cuidados-com-os-pes/` | Podologia preventiva, unhas, calosidades e fissuras; detalhar escopo confirmado |
| `/atendimentos/bem-estar/` | Spa, reflexologia e Reiki apresentados como serviços distintos, conforme oferta confirmada |
| `/sobre/` | História, forma de atender, retrato e formação quando comprovada |
| `/localizacao/` | Endereço confirmado, fotos atuais, acesso, agendamento e rota |
| `/duvidas/` | FAQ central agrupada por primeira visita, atendimento, ILIB e agendamento |
| `/blog/` e `/blog/[slug]/` | Biblioteca de artigos úteis, com autoria e status editorial |
| `/privacidade/` | Explicação do tratamento de dados conforme ferramentas efetivamente adotadas |
| `/404` | Recuperação simples com links reais, resposta HTTP correta e noindex |

As páginas especializadas só entram quando tiverem conteúdo próprio suficiente. Evitar páginas vazias ou cópias por bairro. Cuidados com pessoas com diabetes e laserterapia podem receber páginas depois, conforme formação, oferta, conteúdo técnico e procura real. ILIB e laser local não devem ser tratados como o mesmo serviço sem essa definição.

### Roteiro da home

1. **Apresentação:** logo, retrato, cidade, proposta e WhatsApp. Texto inicial sugerido: “Cuidado com seus pés, atenção a você.” A localização e o termo podologia continuam explícitos no contexto e título SEO.
2. **O que você procura:** três acessos claros — cuidados com os pés, ILIB e bem-estar. Opção “Ainda tenho dúvidas” abre contato geral, sem questionário diagnóstico.
3. **Destaque ILIB:** bloco de marca com maior peso visual, capa de vídeo e link “Conheça o atendimento ILIB”. A chamada descreve a experiência e a avaliação antes de alegar resultados.
4. **Quem cuida de você:** Juliane e sua forma de atender, com evidências reais disponíveis.
5. **Primeira visita:** contato → avaliação → orientação e atendimento definido com a profissional; sequência a confirmar.
6. **Espaço atual:** fotos e caminho para chegar. Mapas sob demanda.
7. **Conteúdo e dúvidas:** poucos destaques úteis e entrada para FAQ/blog.
8. **Contato final:** endereço, WhatsApp, Instagram e assinatura Codexo com logo.

Depoimentos entram somente se reais, autorizados e atribuídos corretamente. Não criar números de pacientes, certificações, selos ou avaliações.

## 6. Movimento: o que usar e onde

**GSAP** coordena cenas e gatilhos; **Haikei** é uma ferramenta para gerar SVGs, não uma biblioteca de animação. Podemos usá-lo para explorar curvas e depois adaptar um pequeno conjunto à linguagem dos materiais. O arquivo exportado fica local e não exige carregar Haikei em produção.

| Momento | Movimento proposto | Alternativa e limite |
| --- | --- | --- |
| Abertura | Traço curvo e mídia entram em sequência breve | Título, contexto e CTA visíveis desde o HTML |
| Bloco ILIB | Mudança suave de superfície e entrada de mídia | Sem fixar a rolagem nem exigir a animação para entender |
| Primeira visita | Linha conecta etapas conforme aparecem | Ordem e texto disponíveis estaticamente |
| Mídia | Transição curta ao abrir vídeo/galeria | Respeitar foco e oferecer fechar/voltar |
| Controles | Cor, borda e seta com feedback de 120–180ms | Sem deslocar o alvo de clique |
| Mudança de página | View Transitions nativas se melhorarem continuidade | Navegação normal como base, sem router extra inicialmente |

GSAP somente nas cenas que precisam dele; limpeza dos gatilhos ao sair da página. Rolagem nativa, respeito a `prefers-reduced-motion`, sem cursor personalizado, scroll hijacking ou pulsação infinita de CTA. Não somar Lenis, Motion, Lottie e WebGL apenas para demonstrar efeitos.

## 7. Vídeos com desempenho como condição

### Arquivos encontrados

Leitura dos contêineres MP4 locais; tamanho em MiB, duração aproximada e dimensões. Ainda não foi feita revisão editorial quadro a quadro nem teste de compressão.

| Arquivo | Duração | Resolução | Tamanho |
| --- | --- | --- | --- |
| Juliane Costa Podóloga — ILIB VÍDEO | 41,4s | 1080 × 1920 | 14,2 MiB |
| NOVIDADES — Juliane Costa Podóloga | 45,8s | 1080 × 1920 | 16,7 MiB |
| PODOLOGIA ANTES E DEPOIS | 65,9s | 1080 × 1920 | 65,8 MiB |
| Site Juliane Costa — Video | 44,5s | 382 × 850 | 30,0 MiB |

Também há versões na pasta `numero novo`; a curadoria deverá comparar versões antes de escolher o master. Arquivos maiores não significam automaticamente melhor qualidade. Não esticar o vídeo 382 × 850 para uma área grande de desktop.

**Condição do usuário:** só incluir se não prejudicar o desempenho. Não é possível garantir impacto zero universal antes de testar em dispositivos e redes reais. Portanto, o padrão proposto é reprodução voluntária e inclusão condicionada à comparação com a versão sem player.

### Implementação planejada

1. Revisar o vídeo inteiro: telefone, endereço, preços, promoções, alegações e autorização das pessoas. Qualquer preço deve ser removido do corte, conforme decisão confirmada. Se isso comprometer a peça, ela não será usada.
2. Gerar versão web preservando proporção: MP4/H.264 com fast start, qualidade visual avaliada e dimensões adequadas. WebM alternativo somente se reduzir transferência com compatibilidade satisfatória.
3. Usar capa otimizada, área com proporção reservada, título claro, duração e botão de reprodução. O conteúdo da página não dependerá do vídeo.
4. **Não inserir URL da mídia nem iframe/player externo antes do clique.** Apenas `preload="none"` não é garantia absoluta, pois é uma indicação ao navegador. Instanciar player e fontes após a ação é uma restrição mais forte para o carregamento inicial.
5. Um player ativo por vez, controles nativos, `playsinline`, pausar ao fechar e ao ocultar a página. Nada com áudio automático.
6. Se houver fala, legendas e transcrição revisadas; informações que só apareçam em texto na imagem também precisam de equivalente legível na página.
7. Estado de carregamento e erro com retorno à capa ou link para versão pública aprovada. Navegação e WhatsApp continuam disponíveis.

Começar por **um vídeo de ILIB**, na seção correspondente e na página própria, com capa reaproveitada. O vídeo institucional pode entrar na página Sobre depois da curadoria. Vídeos clínicos de antes/depois exigem contexto e autorização; não são material principal da home.

Não propor autoplay agora, inclusive em loop curto: a condição de desempenho ainda não foi comprovada. CDN/streaming especializado pode ser avaliado se tráfego, duração ou buffering justificarem. Evitar iframe de Instagram/YouTube carregado junto da home. Para poucos vídeos curtos, um arquivo otimizado servido com cache e suporte a Range pode ser suficiente; validar no host escolhido.

### Critério de inclusão

- Rede: **zero bytes de mídia e de player de terceiros antes do clique**, usando capa equivalente à alternativa estática. Conferir no Network, não presumir pela marcação.
- Build publicado de teste: comparar versão estática e versão com vídeo sob as mesmas condições, em ao menos cinco execuções móveis de cada; analisar mediana e variação. Cinco execuções são diagnóstico inicial, não garantia estatística universal.
- Sem regressão relevante de LCP, estabilidade ou resposta das interações além da variação observada; se ambíguo, manter versão estática.
- Após clicar: medir tempo até primeiro quadro, travamentos, resposta de play/pausa e facilidade de voltar. Testar celular intermediário e rede móvel limitada.
- Se a condição não for atendida, entregar imagem + link para o vídeo público aprovado. Não incluir player por obrigação estética.

Metas de projeto para primeiro encode: capa em torno de 40–100KB e clipe de 30–45s por volta de 3–6MB, sujeitos à qualidade e ao conteúdo. Isso é orçamento proposto, não tamanho já alcançado ou promessa de qualidade.

## 8. SEO e conteúdo que ajuda a captar clientes

### Estrutura técnica

- Preservar domínio e recursos de verificação; escolher uma origem única e configurar redirecionamentos permanentes das variantes.
- Centralizar nome, endereço, telefone e Instagram. Sala 01 também estará no endereço estruturado.
- Título e descrição próprios por página, hierarquia de títulos, links internos, canonical, sitemap e robots consistentes.
- Imagem social adequada, inicialmente 1200 × 630, com marca e título legíveis. Favicons com formatos e tipos corretos.
- Previews com noindex legível pelos robôs; somente URLs públicas de produção no sitemap. Rascunhos fora do build público, inclusive acesso direto.
- JSON-LD com `WebSite`, `WebPage`, negócio local compatível com a atividade real, `Person`, `Service`, `BreadcrumbList` e `BlogPosting` nos artigos. Manter `HealthAndBeautyBusiness` como candidato inicial; não declarar `Physician` ou formação não comprovada.
- Horários, geolocalização e qualificações entram quando confirmados. Omitir preços, `priceRange`, ofertas e notas inventadas. Nenhum schema garante posição ou destaque no Google.
- Schema de vídeo somente se a página e o vídeo atenderem aos requisitos reais; não tratar um vídeo decorativo como estratégia automática de resultados de vídeo.
- FAQ serve à leitura e navegação. Não depender de resultados enriquecidos para justificar a página.
- Antes da migração: inventariar URLs e links do Search Console se disponível; preservar as âncoras antigas mais usadas ou seus destinos úteis. Fragmentos `#...` não chegam ao servidor, portanto sua compatibilidade precisa ser tratada na página.
- Conferir perfil comercial do Google, endereço, rota e link de avaliações atuais. Essa gestão depende de acesso e não foi alterada neste trabalho.

### ILIB e revisão editorial

Podemos preservar o tom humano do texto atual, mas ele não deve ser copiado integralmente. Há alegações amplas envolvendo ILIB, diabetes, imunidade e rejuvenescimento, além de afirmações sobre dor e tempo de tratamento. Elas não foram validadas neste planejamento e não entram automaticamente na nova versão.

Descrever o que acontece no atendimento, o que será avaliado, limites e como tirar dúvidas. A Juliane confirma escopo e qualificações; afirmações clínicas recebem revisão profissional e fontes primárias adequadas. Não prometer cura, resultado universal ou tratar serviço como substituto de cuidado indicado por outro profissional.

Para caber na revisão disponível: produzir poucos textos por vez, destacar em uma ficha as afirmações que precisam de confirmação e manter rascunho até a conferência. Conferência editorial do usuário não substitui revisão técnica de afirmações clínicas.

### Blog e FAQ

Lançamento com estrutura de blog e **dois artigos originais**, se os dados estiverem prontos. Não publicar catálogo vazio ou dezenas de textos genéricos. As pautas abaixo são hipóteses de interesse, ainda sem dados de volume de busca.

| Pauta | Intenção | Prioridade e condição |
| --- | --- | --- |
| Primeira visita à Juliane: como funciona o agendamento e o atendimento | Reduzir insegurança antes de marcar | Inicial, confirmar rotina com Juliane |
| Como chegar ao espaço da Juliane no Centro de Colombo | Resolver acesso e descoberta local | Inicial, verificar fotos, entrada, sala e acessibilidade |
| ILIB: como é o atendimento com Juliane e o que perguntar na avaliação | Apoiar a página comercial de ILIB | Inicial após confirmar o processo; qualquer parte clínica exige revisão |
| Podologia e cuidados estéticos: como entender os serviços oferecidos | Orientar escolha | Confirmar escopo e evitar comparações absolutas |
| Unha encravada: dúvidas para conversar com a profissional | Busca por problema específico | Fase seguinte, revisão técnica antes de publicar |
| Cuidados com os pés de pessoas com diabetes | Busca clínica sensível | Somente com revisão técnica e escopo comprovado |

Cada artigo: resumo útil, autoria verdadeira, data de publicação e de revisão quando houver, fontes pertinentes, relação com um atendimento e CTA natural. Não repetir Colombo em todo parágrafo nem criar páginas de bairro sem conteúdo próprio.

FAQ central: agendamento, primeira visita, localização, reagendamento, formas de pagamento se confirmadas, perguntas de ILIB e serviços. Na página de atendimento, mostrar apenas as dúvidas daquele contexto; respostas extensas ficam no artigo correspondente.

Nos materiais há uma campanha de recompensa por avaliação. Não levá-la para a estratégia do site: a política do Google Maps proíbe incentivos em troca de avaliações. O pedido de avaliação deve ser espontâneo, sem prêmio e sem filtrar apenas experiências positivas.

## 9. Métricas e orçamento de desempenho

**Resultado de negócio:** novos contatos qualificados e agendamentos originados do site. Clique no WhatsApp é sinal de intenção, não confirmação de cliente ou receita. Confrontar com contagem agregada de contatos/agendamentos informada pela Juliane.

Medir descoberta em Search Console, entrada por página, cliques de contato por posição do CTA e rota no mapa. Para vídeo: início voluntário, primeiro quadro e erros; avaliar se ajuda o contato e não apenas se acumula reproduções. Plano de instrumentação antes de instalar ferramentas, sem coletar mensagens, diagnóstico, dados pessoais ou termos clínicos sensíveis em eventos/URLs de analytics.

| Indicador | Meta proposta | Verificação |
| --- | --- | --- |
| LCP | ≤2,5s no p75 de campo | Laboratório para diagnóstico; campo após dados suficientes |
| INP | ≤200ms no p75 de campo | Testes de interação + campo após publicação |
| CLS | ≤0,1 no p75 de campo | Testar fontes, mídia, abertura de controles e dados de campo |
| Transferência inicial | Alvo ≤650KB comprimidos para home móvel sem reprodução | Orçamento inicial a ajustar com qualidade visual |
| JavaScript da home | Alvo ≤70KB gzip, incluindo animação, antes de analytics | Conferir bundle real; páginas de conteúdo podem enviar menos |
| Fontes | Alvo ≤90KB WOFF2 no conjunto inicial | Reduzir pesos e caracteres sem perder português |
| Lighthouse móvel | Alvo de referência ≥95 em Performance | Não é garantia nem substitui CWV de campo |

Os orçamentos são decisões propostas, não resultados medidos. Não foi executado PageSpeed/Lighthouse neste diagnóstico. Em site pequeno, pode não existir amostra CrUX suficiente; não interpretar ausência de dados como aprovação ou falha.

## 10. Sequência de execução

1. **Fechar direção:** prancha com paleta real, fontes, logo, composição de home e destaque ILIB. Saída: decisão visual registrada.
2. **Curadoria:** escolher fotos do espaço atual e master de vídeo, conferir dados antigos/preços/alegações, organizar matriz de conteúdo confirmado e pendente.
3. **Base técnica:** Astro estático, tokens, componentes, contato centralizado, rotas, SEO e pipeline de imagens. Comparação com base atual.
4. **Home + ILIB:** implementar as duas páginas prioritárias e verificar mobile, teclado, movimento reduzido e contato real.
5. **Conteúdo e busca:** páginas institucionais e de atendimento, FAQ, artigos prontos e interligações. Conteúdo técnico pendente permanece fora da publicação.
6. **Vídeo condicionado:** encodes, player por clique, teste comparativo; incorporar apenas se satisfizer a condição de desempenho.
7. **QA e publicação:** build/check, links, metadados/schema, redirecionamentos, 404, previews, dados de contato, imagens sociais e testes móveis. Publicação e domínio em etapa própria.
8. **Acompanhamento:** estabelecer baseline de tráfego e contatos; rever resultados após semanas com dados suficientes, sem alterações aleatórias ou garantia de ranking.

Critério final: visitante entende o que a Juliane oferece, encontra ILIB, reconhece a marca, consegue agendar sem obstáculos e lê o conteúdo com conforto. O projeto avança ao demonstrar isso, além de ter boa apresentação visual.

## 11. Pendências para refinamento

- Qual vídeo existente deve ser preferido? Seleção final após revisão integral, não pelo nome do arquivo.
- O espaço atual é o mesmo das fotos e da descrição Malleabile? Quais imagens mostram entrada e sala atuais?
- Quais dias/horários reais e quais formas de pagamento podem ser divulgados, sem preços?
- Quem publicará os artigos e com qual frequência consegue manter informações atualizadas?
- Certificados e capacitações; confirmação das descrições técnicas e limites de atendimento.
- Há dados de Search Console, Perfil da Empresa e estatísticas de contatos para orientar prioridades?

## Fontes e evidências

Referências consultadas em 23/10/2026. Recomendações e orçamentos são decisões do projeto; fontes abaixo fundamentam capacidades e critérios, sem prometer resultados.

- Site público: https://julianecostapodologa.com.br/
- Repositório local: `C:/codexo repos/site-JulianeCostaPodologa` (inspeção sem alterações).
- Materiais: `C:/Users/kknicas/Documents/Juliane Costa Podóloga`; PDF de tabela usado para inventário e fontes, sem aprovação de valores para publicação.
- [Astro: arquitetura de ilhas](https://docs.astro.build/en/concepts/islands/)
- [Astro: View Transitions](https://docs.astro.build/en/guides/view-transitions/)
- [GSAP: matchMedia](https://gsap.com/docs/v3/GSAP/gsap.matchMedia()/)
- [Haikei: geradores](https://haikei.app/generators/)
- [Google/web.dev: desempenho de vídeo](https://web.dev/learn/performance/video-performance)
- [Google/web.dev: Core Web Vitals](https://web.dev/articles/vitals)
- [Google: conteúdo útil e confiável](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)
- [Google: negócio local e dados estruturados](https://developers.google.com/search/docs/appearance/structured-data/local-business)
- [Google Maps: conteúdo proibido e avaliações incentivadas](https://support.google.com/contributionpolicy/answer/7400114)
- [Cloudflare: Astro](https://developers.cloudflare.com/workers/framework-guides/web-apps/astro/)
- [Google Fonts: Questrial](https://github.com/google/fonts/tree/main/ofl/questrial) e [League Spartan](https://github.com/google/fonts/tree/main/ofl/leaguespartan), fontes oficiais com licenças OFL incluídas na prancha.
