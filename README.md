# Juliane Costa Podóloga

Nova versão local em Astro estático, com identidade baseada nos materiais do Canva.

## Desenvolvimento

Node 24.x e npm. As versões estão fixadas no lockfile.

```powershell
npm ci
npm run dev
```

Prévia de desenvolvimento: `http://127.0.0.1:4331/`.

```powershell
npm run verify
npm run preview
```

`verify` executa check, build e testes. `preview` serve `dist/` em loopback na porta 4331, com gzip e suporte a Range para vídeo. Não execute dev e preview simultaneamente na mesma porta. Para outra porta de preview, defina `PORT`.

## HOM e produção

A versão Astro está no GitHub nas branches `feat/identidade-canva-astro` e `develop`. A publicação e o domínio são configurados separadamente na Cloudflare.

HOM usa o mesmo build estático, mantendo:

```dotenv
PUBLIC_SITE_MODE=preview
PUBLIC_SITE_URL=https://julianecostapodologa.com.br
PUBLIC_ENABLE_VIDEO=true
```

- Build: `npm run build`; diretório de saída: `dist`.
- O padrão sem variáveis é preview com `noindex, follow`. O robots permite leitura dessa diretiva e não anuncia sitemap de HOM.
- Conteúdo e metadados usam a origem canônica confirmada. Ao configurar a HOM, informar `PUBLIC_PREVIEW_URL` com sua origem HTTPS para a imagem de compartilhamento; caso não exista, a prévia usa imagem relativa.
- Somente na publicação final, explicitamente configurar `PUBLIC_SITE_MODE=production` e a origem HTTPS em `PUBLIC_SITE_URL`. Isso habilita indexação e sitemap.
- O domínio, redirecionamento www/sem-www e o host final precisam ser conferidos na etapa de publicação. Canonical, schema e sitemap devem usar a mesma origem.
- A verificação existente do Google está preservada em `public/googlec47846e9ced625ab.html`.
- URLs antigas de fotos foram preservadas em `public/assets/`. As âncoras principais da home anterior continuam disponíveis.
- Não há adaptador de servidor, backend, formulário, analytics, pagamentos ou CMS nesta versão.

## Conteúdo e dados

- `src/data/site.ts`: contato, endereço e links do negócio. Fonte central para interface e schema.
- `src/data/services.ts`: atendimentos e escopo.
- `src/data/faq.ts`: sete dúvidas da home e 25 na página completa, organizadas por tema.
- `src/data/products.ts`: seis produtos, fotos locais e origem do catálogo VM/Rivera; compra por conversa no WhatsApp, sem preços e sem checkout.
- `src/content/blog/*.md`: artigos. `draft: true` impede geração de rota e listagem. A publicação editorial fica com a Codexo.
- `src/content.config.ts`: validação do conteúdo.
- `src/lib/seo.ts`: JSON-LD. Sem preços, aggregateRating, estrelas próprias ou títulos profissionais não comprovados.
- As datas de artigos correspondem à criação desta versão local, em 23/10/2026; ajustar para a data real de publicação antes de PRD.
- Certificados e textos clínicos detalhados permanecem pendentes. Há três artigos institucionais e seis educativos com referências primárias. A autoria editorial é Codexo; não atribuímos revisão clínica à Juliane.

## Avaliações do Google

A curadoria está em `src/data/reviews.ts`. Vinte relatos públicos foram selecionados no perfil fornecido pelo usuário em 23/10/2026, com autoria, grafia original e data de conferência da nota/quantidade. Os links individuais ficam no arquivo para auditoria; a interface mostra apenas o acesso ao perfil comercial. Trechos são identificados. Não há API, scraping agendado ou atualização automática. Conferir novamente antes de publicar.

O projeto Dom Elii foi usado como referência de organização de dados e links externos. Sua nota cadastrada é do Booksy; ela não foi copiada para este site. Na Juliane, a fonte das avaliações é o Google. A nota não é incluída em schema de avaliações próprias.

Não oferecer recompensa por avaliação nem alterar relatos para inserir palavras-chave. A seleção priorizou ambiente, atendimento, pontualidade, unha encravada e contexto local, presentes naturalmente nos textos.

Os dez comentários mais detalhados têm texto integral no HTML e botão “Ver avaliação completa”. A seleção compara as 58 avaliações do perfil e mantém 20 autores. A ordem começa com dois curtos e um longo; depois intercala comprimentos e assuntos, sem embaralhar durante a navegação. O diálogo nativo permite ler sem alterar a altura do carrossel; fechar por botão ou Escape devolve o foco ao controle de origem. Sem JavaScript, `<details>` expande o texto no card. Não há requisição adicional nem biblioteca de modal.

## Vídeo

`PUBLIC_ENABLE_VIDEO=true` é o padrão, inclusive quando a variável não está definida. Use `false` para exibir somente a capa. Na Cloudflare, altere uma configuração antiga com valor `false` para `true` e refaça o deploy.

- Recorte preparado: `public/media/ilib-demonstracao.mp4`, 12s, 450 × 800, sem áudio, aproximadamente 630 KiB.
- Origem: primeiros 12 segundos do vídeo ILIB existente. Foram excluídas as telas posteriores de benefícios clínicos e encerramento; não há preços no recorte.
- Capa otimizada no pipeline do Astro. Nada de iframe de Instagram/YouTube.
- Com `PUBLIC_ENABLE_VIDEO=true`, aparece o controle progressivo: o elemento `<video>` e sua fonte só são criados depois do clique; com JS indisponível, o link abre o arquivo nativo.
- O player tem controles, descrição textual, fechamento, pausa ao ocultar a página e retorno de foco.
- Ativado a pedido do cliente em 29/10/2026, mantendo reprodução voluntária. Nenhum teste local substitui CWV de campo; não há promessa de impacto zero universal.

## Identidade e movimento

Logo original preservada, com uma cópia que apenas remove margens transparentes para uso legível no cabeçalho. Sem redesenho da marca.

League Spartan e Questrial são fontes oficiais com OFL em `public/fonts`, subconjuntos WOFF2 com português, aproximadamente 39 KB no total. Tons de lavanda e carvão extraídos dos materiais; tom de ação mais escuro para contraste.

CSS para controles e GSAP/ScrollTrigger somente na home. As cenas respeitam movimento reduzido e o controle de pausa no rodapé. Título e conteúdo são visíveis no HTML, sem depender de reveals para leitura. Não há rolagem capturada ou loops contínuos.

Os carrosséis de avaliações, espaço e produtos usam scroll nativo, CSS scroll snap e um controlador pequeno compartilhado. Sem reprodução automática, sem dependência nova e com todos os conteúdos no HTML. Navegação por toque, setas e teclado; botão e contador mostram a posição atual.

Os mapas Google da home e de Localização usam iframe com `loading="lazy"`, dimensões reservadas, título descritivo e link de rota. São serviços externos e podem carregar ao se aproximar da seção. A política de privacidade reflete essa integração. Não há chamada ao Places nem chave de API no frontend.

## Documentação

- `docs/PLANEJAMENTO.md`: decisões e escopo aprovados antes da implementação.
- `docs/VERIFICACAO.md`: evidências e limites da verificação local.
- `docs/ITERACAO-HOME.md`: evolução da home, fontes das imagens dos produtos e decisões editoriais.
- `archive/legacy/`: cópia do site anterior para consulta; não é publicada pelo Astro.

Metas de projeto: LCP ≤2,5s, INP ≤200ms e CLS ≤0,1 no p75 de campo. Não há score PageSpeed declarado sem medição correspondente.
