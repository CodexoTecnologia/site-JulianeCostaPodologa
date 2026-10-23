# Curadoria das avaliações

Fonte indicada pelo usuário: https://share.google/yRPq4t2PnpVCY6pa3

Conferência: 23/10/2026. Perfil: Juliane Costa Podóloga, Rua Venâncio Trevisan, 137, Colombo. Nota visível 5,0, com 58 avaliações.

Foram lidos relatos no agrupamento “Mais relevantes” e os dois resultados do tema “ingrown nail”. Seleção final:

| Pessoa | Motivo da seleção | Origem |
| --- | --- | --- |
| Jéssica Foltran | Atendimento, limpeza e organização | https://www.google.com/maps/contrib/114132023289971328668/reviews?hl=pt-BR |
| tatiele farias | Atendimento, pontualidade e unha encravada | https://www.google.com/maps/contrib/108333100368485827771/reviews?hl=pt-BR |
| Ligian De Carvalho | Atendimento, pontualidade e referência a Colombo | https://www.google.com/maps/contrib/116056333156896847784/reviews?hl=pt-BR |

Textos mantidos em `src/data/reviews.ts`, sem inserir palavras-chave, corrigir a grafia dos autores ou usar relatos como garantia de resultado. Espaços provenientes da marcação de destaque do Google foram normalizados.

Não foram copiados avatares. Os links individuais levam ao perfil público de avaliações do autor; a ação principal da seção abre o perfil comercial completo. A seção informa que é uma seleção e mostra data de conferência, sem alegar atualização automática.

O Dom Elii não tem integração dinâmica com Google Places na versão inspecionada. `src/data/negocio.ts` contém nota e quantidade do Booksy, e links para Google Maps. `src/lib/schema.ts` separa a exibição visual das notas do JSON-LD. Reaproveitamos o princípio de fonte central e links atribuídos, sem copiar seus dados ou sua stack Next.js.

Não marcar a seleção de avaliações de terceiros como `aggregateRating` ou `Review` do próprio negócio para tentar obter estrelas de busca. Referência: [Google Search Central — review snippets](https://developers.google.com/search/docs/appearance/structured-data/review-snippet).

Antes de PRD, conferir se os relatos ainda estão públicos e atualizar nota/quantidade ou optar por omiti-las.
