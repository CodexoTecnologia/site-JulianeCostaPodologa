# Curadoria das avaliações

Fonte indicada pelo usuário: https://share.google/yRPq4t2PnpVCY6pa3

Conferência: 23/10/2026. Perfil: Juliane Costa Podóloga, Rua Venâncio Trevisan, 137, Colombo. Nota visível 5,0, com 58 avaliações.

Foram lidos relatos no agrupamento “Mais relevantes” e os dois resultados do tema “ingrown nail”. A primeira seleção tinha três relatos; na segunda iteração, passou a 20, conforme `src/data/reviews.ts` e `docs/ITERACAO-HOME.md`. Seleção inicial para referência:

| Pessoa | Motivo da seleção | Origem |
| --- | --- | --- |
| Jéssica Foltran | Atendimento, limpeza e organização | https://www.google.com/maps/contrib/114132023289971328668/reviews?hl=pt-BR |
| tatiele farias | Atendimento, pontualidade e unha encravada | https://www.google.com/maps/contrib/108333100368485827771/reviews?hl=pt-BR |
| Ligian De Carvalho | Atendimento, pontualidade e referência a Colombo | https://www.google.com/maps/contrib/116056333156896847784/reviews?hl=pt-BR |

Textos mantidos em `src/data/reviews.ts`, sem inserir palavras-chave, corrigir a grafia dos autores ou usar relatos como garantia de resultado. Espaços provenientes da marcação de destaque do Google foram normalizados.

Não foram copiados avatares. Os links individuais ficam somente no arquivo de dados para auditoria, conforme pedido do usuário. A ação principal da seção abre o perfil comercial completo. A seção informa que é uma seleção e mostra data de conferência, sem alegar atualização automática. Trechos são identificados; os comentários não recebem palavras-chave novas.

O Dom Elii não tem integração dinâmica com Google Places na versão inspecionada. `src/data/negocio.ts` contém nota e quantidade do Booksy, e links para Google Maps. `src/lib/schema.ts` separa a exibição visual das notas do JSON-LD. Reaproveitamos o princípio de fonte central e links atribuídos, sem copiar seus dados ou sua stack Next.js.

Não marcar a seleção de avaliações de terceiros como `aggregateRating` ou `Review` do próprio negócio para tentar obter estrelas de busca. Referência: [Google Search Central — review snippets](https://developers.google.com/search/docs/appearance/structured-data/review-snippet).

Antes de PRD, conferir se os relatos ainda estão públicos e atualizar nota/quantidade ou optar por omiti-las.

## Curadoria por detalhe da experiência

Em 23/10/2026, as 58 avaliações foram carregadas até o fim. Sete textos mais genéricos foram substituídos pelos relatos de Leo Camargo, Leonardo Russo Kieras, Sandra Francisquevis, Simone Sissa, Vera Gasparin, Auto Escola Chemin Ltda. Chemin e Julia Vitória. Mantidos 20 autores diferentes, com dez relatos mais detalhados no início e leitura integral disponível. IDs e textos conferidos estão em `src/data/reviews.ts`.

O critério principal é ajudar o visitante a entender a experiência de atendimento. Menções naturais a podologia, ILIB, unhas e localização foram preservadas; nenhuma palavra-chave foi inserida na fala dos autores. Texto mais comprido não implica vantagem automática de SEO. Referência: [Google — conteúdo útil, sem contagem de palavras preferida](https://developers.google.com/search/docs/fundamentals/creating-helpful-content).
