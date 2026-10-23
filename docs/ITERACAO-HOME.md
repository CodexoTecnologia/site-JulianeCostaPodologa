# Evolução da home — 23/10/2026

## Decisão de conteúdo e UX

A versão inicial apresentava a marca, mas explicava pouco os serviços. Para quem chega de uma busca por unha encravada ou calosidades, isso dificultava reconhecer a oferta. A revisão dá destaque a quatro entradas: podologia preventiva, unha encravada, ILIB e spa/bem-estar. Cada uma explica o escopo e leva ao atendimento correspondente. O hub também passa a mostrar os itens incluídos.

ILIB aparece depois de “Sua primeira visita”, conforme solicitado. A home mantém visão geral, evidência, localização, produtos e sete dúvidas; as páginas internas aprofundam o assunto. O objetivo é orientar a decisão, sem repetir todos os artigos na página inicial.

## Avaliações

Foram comparados os comentários com texto na ordenação “Mais relevantes” do perfil indicado pelo usuário. A seleção final tem **20 autores diferentes**, com variedade de atendimento, cuidado, espaço, pontualidade, unha encravada, podologia preventiva, ILIB e Colombo. Textos não receberam palavras-chave novas. Trechos longos estão identificados; a URL de origem individual continua em `src/data/reviews.ts` para auditoria e foi removida da interface conforme pedido.

Nota 5,0 e 58 avaliações são uma fotografia de 23/10/2026, sem atualização automática. Experiências individuais não são promessa de resultado. Sem schema de estrelas próprias.

A pedido do usuário, os cinco comentários resumidos também têm sua íntegra em `src/data/reviews.ts`. “Ver avaliação completa” abre um diálogo nativo, preservando a altura do carrossel; sem JavaScript, o texto expande no próprio card. Autoria, grafia e parágrafos do comentário são preservados. O modal tem fechamento por botão/Escape/fundo, rolagem interna quando necessária e retorno de foco ao controle de origem.

## Produtos e fotografias

Fotografias de embalagens obtidas no catálogo público VM/Rivera em 23/10/2026 e conferidas visualmente, sem reutilizar o anúncio de antes/depois. Imagens locais processadas pelo Astro para WebP e larguras responsivas. Sem hotlink, iframe de loja, preços ou checkout. Os links de cada produto abrem o WhatsApp com seu nome para consulta.

| Produto | Origem da fotografia e identificação |
| --- | --- |
| Maxiderm | https://www.vmrivera.com.br/creme-hidratante-nutritivo-maxiderm-100gr/p |
| Psorin Unhas | https://www.vmrivera.com.br/psoriase-nas-unhas-psorin-10ml/p |
| Ônico Blend | https://www.vmrivera.com.br/fortalecedor-para-unhas-onico-blend-10ml-conta-gotas/p |
| Nutri Derm | https://www.vmrivera.com.br/creme-hidratante-com-ureia-nutri-derm-100gr/p |
| Smell Feet | https://www.vmrivera.com.br/desodorante-para-os-pes-e-calcados-smell-feet-120ml-1-2/p |
| Blend Spray | https://www.vmrivera.com.br/tratamento-para-unhas-com-micose-blend-spray-30ml/p |

O Open Graph do Psorin retorna uma imagem genérica de produto sem foto; foi usada a fotografia real da galeria da mesma página (`arquivos/PRODUTOS/4001781118468594061/1_G_4001781118468594061_30.jpg`). Nutri **Derm** segue a grafia da embalagem. Psorin apresenta a marca VM; os demais mantêm RHR Rivera no rótulo.

As descrições apresentam a função cosmética, sem anunciar cura de micose/psoríase, ação na “raiz” ou proteção garantida. Estoque e apresentação devem ser confirmados na conversa com a Juliane.

## Galeria, mapas e movimento

Home e Localização têm as quatro fotos reais já fornecidas, com carrossel manual. O mapa Google consulta nome e endereço atual, em português, com dimensão reservada, carregamento nativo adiado e opção de rota. A política de privacidade foi atualizada. Não há chave de API exposta nem widget de avaliações externo.

Carrosséis usam rolagem nativa e CSS scroll snap, com controles, contador, teclado e toque. Setas, Home e End funcionam quando a região está focada. Sem autoplay e sem biblioteca adicional. Todos os textos estão no HTML, inclusive os que ficam fora do primeiro quadro. GSAP e preferência de movimento existentes foram preservados.

O mapa é um recurso externo: seu custo existe quando ele carrega. Vídeo permanece desativado. Não foi prometido impacto zero nem score PageSpeed.

## Blog: nove conteúdos de estreia

Três institucionais e seis educativos: unha encravada, calosidades, hidratação, diabetes, alterações nas unhas e rotina de cuidado. Fontes primárias estão em cada artigo; autoria editorial Codexo, sem atribuir revisão clínica à Juliane. Conteúdos gerais não prescrevem tratamentos, sessões ou medicamentos.

Faz sentido lançar os nove juntos porque respondem perguntas diferentes e conectam-se aos atendimentos. Depois, manter uma pauta regular conforme dúvidas reais e dados de busca. Uma publicação por semana pode ser uma rotina de trabalho, mas não é uma vantagem automática de SEO. Não criar textos só para preencher uma quota.

Referência: [Google — conteúdo útil e confiável](https://developers.google.com/search/docs/fundamentals/creating-helpful-content), que desencoraja a produção de conteúdo apenas para parecer atualizado.

Antes de PRD: confirmar dados editoriais e apresentações dos produtos; ajustar datas para a publicação real; reconferir as avaliações e obter revisão profissional dos textos de saúde. A HOM continua sem indexação.
