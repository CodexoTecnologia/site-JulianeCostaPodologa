# Verificação local — segunda iteração, 23/10/2026

- Home reorganizada: quatro entradas de atendimento, ILIB depois da primeira visita, 20 avaliações, galeria com quatro fotos, Google Maps, seis produtos e sete perguntas frequentes.
- Localização com mapa real e carrossel de fotos. Catálogo `/produtos/`, FAQ com 22 perguntas e blog com nove artigos. Build com **22 páginas**.
- Check Astro: zero erros, avisos ou hints. Formatação verificada. Oito testes passaram em preview e no build de produção isolado; sitemap de produção com 21 URLs. A atualização de leitura completa das avaliações passou em **nove testes no preview**. A pasta `dist/` permanece no modo preview, sem indexação.
- QA no navegador: home e componentes em 1000/1280px; produtos e localização em 390px; home, produtos, localização, blog e FAQ em 320px, sem overflow horizontal do documento. Artigo novo inspecionado em 320px.
- Carrosséis de avaliações, produtos e fotos responderam aos botões. Setas no teclado mudam o produto; End chega à avaliação 20 e desabilita o botão seguinte. FAQ abre por Espaço. Nenhum erro/aviso no console observado nessa jornada.
- Mapas Google carregaram com o nome e endereço atuais, em português, na home e na página de localização. Identificador público do negócio retornado pelo mapa: `52133834769892366`.
- Fotos dos seis produtos foram conferidas visualmente; todas carregaram na home. Os CTAs específicos foram verificados pelo destino e texto, sem enviar mensagens.
- Payload local gerado: home 13.301 bytes gzip, CSS 8.367 bytes gzip, soma dos chunks JS 46.020 bytes gzip. Esses números não são um teste de velocidade, não incluem recursos externos do Google e não representam o download inicial de todos os chunks.
- Sem push, deploy ou alteração de domínio. Vídeo continua desativado. PageSpeed e CWV precisam ser avaliados na HOM; não há promessa de impacto zero de mapas ou mídia.

Fontes das fotografias, decisões editoriais e motivo da ampliação da home: `docs/ITERACAO-HOME.md`.

### Leitura integral das avaliações

- Os comentários apresentados como trechos guardam também o texto integral conferido no Google. A curadoria atual tem dez relatos detalhados no início de uma seleção de 20 autores; o trecho continua no carrossel, com botão “Ver avaliação completa”.
- Um `<dialog>` nativo compartilhado apresenta autor e texto completo, sem biblioteca nova ou requisição para buscar o comentário. Escape, botão de fechar e clique no fundo fecham a leitura; o foco volta ao botão de origem.
- Conteúdo integral já está no HTML. Sem JavaScript ou suporte a dialog, o controle nativo `<details>` expande o comentário no card.
- QA: modal inspecionado em 1000px e 320px, sem overflow horizontal; Tab entra na região de leitura, Escape fecha e restaura foco. Os cinco autores/textos foram conferidos no navegador; fechar por botão e teclado funcionou. Sem erros/avisos no console observado.
- Screenshot: `artifacts/avaliacao-completa-desktop.jpg` (artefato local, fora do Git).

Após comparação das 58 avaliações, sete relatos foram substituídos e a ordem foi revisada. O teste de preservação da íntegra agora verifica todos os comentários resumidos contra os dados de origem. Nove testes, build e check passaram novamente. O relato mais longo (Leo Camargo) foi inspecionado em 320 × 700px: rolagem interna funciona por teclado até o fim, cabeçalho/fechar permanecem acessíveis e não há overflow horizontal. Nova seleção conferida em 1000px; sem erros/avisos no console observado. Screenshot: `artifacts/avaliacoes-curadoria-desktop.jpg`.

## Histórico da primeira versão

Branch de implementação: `feat/identidade-canva-astro`. Sem push ou deploy.

## Implementado

- Astro estático, TypeScript, tokens de cor, League Spartan e Questrial locais.
- Home, ILIB, hub de atendimentos, três páginas de atendimento, Sobre, Localização, FAQ, blog, três artigos, Privacidade e 404: 15 páginas no build.
- Logo original, fotos reais e assinatura Codexo. Dados de contato centralizados.
- Três avaliações públicas selecionadas, atribuídas e ligadas ao Google, com data de conferência da nota/quantidade.
- Animações GSAP/ScrollTrigger na home e controles CSS; preferência de pausa, movimento reduzido e persistência durante a sessão.
- Metadados, imagem social 1200 × 630, JSON-LD, breadcrumbs, verificação do Google preservada e sitemap somente no modo de produção.
- Nenhum preço em conteúdo, mídia incorporada ou schema.
- Vídeo demonstrativo preparado, porém desativado por padrão.

## Verificações automatizadas

- `astro check`: zero erros, avisos ou hints.
- `astro build`: 15 páginas, geração de imagens responsivas concluída.
- Seis testes abrangem rotas e recursos, títulos, ausência de preços e dados antigos, schema válido, contato correto, indexação, mídia não carregada na abertura, autoria editorial, marca e fontes.
- Builds separados em `artifacts/production-check` e `artifacts/video-check` validaram os modos de produção e player habilitado, sem alterar a configuração padrão de HOM.
- Produção de teste: sitemap com 14 URLs canônicas sem www, excluindo 404; robots aponta ao sitemap. Preview: noindex em todas as páginas e nenhum sitemap anunciado.

O gerador de imagem social conclui normalmente; nesta máquina Windows, a biblioteca nativa de fontes emite aviso sobre cache sem permissão de escrita. A imagem gerada foi inspecionada e seus textos/dimensões estão corretos.

## Verificações no navegador

- Home em desktop e 390px; artigo em 390px.
- Na variante local, verificados home, página de atendimento, artigo, localização e FAQ em 320 CSS px, sem overflow horizontal do documento.
- Menu móvel abre, fecha com Escape e devolve foco ao controle. Navegação para ILIB funciona pelo menu.
- FAQ nativa abre pelo teclado e expõe o estado expandido.
- Preferência de movimento reduzido respeitada; ativação manual persistiu após reload. GSAP aplicou traçado de curva e estados de entrada; pausa restaura o conteúdo. Sem erros/avisos no console observado nessa jornada.
- Fontes e mídia de abertura carregadas; foto enquadrada e logo legível.
- Links externos de WhatsApp foram conferidos pelo destino e mensagem, sem enviar mensagens.

## Vídeo: evidência funcional, sem promessa de performance

Variante de teste isolada em loopback, porta 4332, com player ativado apenas para QA:

- Antes do clique: 7 requisições no registro do servidor, **0 requisições de MP4**.
- Depois do clique: requisição de mídia com resposta **206**, vídeo com 12s, 450 × 800, controles nativos e reprodução funcional.
- Ao fechar: zero elementos `<video>` restantes e foco devolvido ao link de reprodução.
- MP4 preparado: 644.689 bytes, sem áudio, cerca de 630 KiB.
- Recorte inspecionado por sequência de quadros; a parte posterior com alegações clínicas não foi incluída.
- A variante padrão continua com `PUBLIC_ENABLE_VIDEO=false`, mostrando apenas a capa e a legenda.

Isso demonstra carregamento voluntário e funcionamento do player. **Não comprova ausência de regressão de LCP, INP ou PageSpeed em redes/dispositivos reais.** Ativação na versão principal depende da comparação de desempenho e da curadoria final.

## Tamanho dos recursos

Medição dos arquivos gerados, em bytes, antes dos últimos pequenos ajustes de interface:

| Recurso | Tamanho |
| --- | --- |
| HTML da home, gzip | 8.398 |
| Todos os chunks JS gerados, gzip | 46.020 |
| Módulos inline da home, gzip | 1.427 |
| Todos os chunks CSS gerados, gzip | 7.349 |
| Duas fontes WOFF2 | 38.844 |
| Logo recortada sem margens transparentes | 21.404 |

Os chunks JS incluem as bibliotecas de animação, carregadas condicionalmente na home. A medição de arquivos não é uma medição de transferência real em um dispositivo nem um resultado de Core Web Vitals.

## Pendências para HOM/PRD

- Configurar host/origem de HOM com `PUBLIC_SITE_MODE=preview`; manter o modo de produção para a publicação final.
- Conferir redirecionamentos www/sem-www, cache, Range de mídia e 404 no provedor escolhido.
- Medir Lighthouse/PageSpeed e métricas de campo quando houver ambiente adequado. Não foi declarado score neste trabalho.
- Conferir dados, fotos, certificados, descrições profissionais e política de reagendamento com Juliane.
- Antes de PRD, atualizar as datas editoriais para a publicação real e reconferir avaliações/nota/quantidade no Google.
- Revisão técnica antes de publicar artigos clínicos detalhados ou alegações de eficácia. Os três artigos iniciais são institucionais.
