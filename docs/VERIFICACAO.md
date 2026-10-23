# Verificação local — 23/10/2026

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
