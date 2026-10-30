# Medição simples dos resultados

## Três perguntas diferentes

1. Quem encontrou o site no Google? Search Console.
2. Quem clicou para entrar em contato? GA4, se configurado para isso.
3. Quem realmente agendou? Registro do atendimento da Juliane.

Cliques não comprovam uma conversa enviada ou um horário confirmado.

## Etapa 1 — Search Console

- Usar uma conta de propriedade da cliente; conceder acesso à Codexo.
- Abrir https://search.google.com/search-console e adicionar a propriedade de domínio julianecostapodologa.com.br, se ainda não existir.
- Inserir na Cloudflare o TXT exato de verificação fornecido pelo Google e concluir a verificação.
- Na publicação final, confirmar PUBLIC_SITE_MODE=production e PUBLIC_SITE_URL=https://julianecostapodologa.com.br.
- Enviar sitemap-index.xml em Sitemaps e usar Inspeção de URL na home e nas páginas prioritárias.
- Acompanhar consultas, impressões, cliques, CTR e páginas. Comparar períodos semelhantes e registrar a data da publicação.
- HOM continua com noindex. O arquivo HTML de verificação já preservado no projeto é uma alternativa para propriedades de prefixo de URL, não comprovação de configuração da propriedade de domínio.

Fonte: https://developers.google.com/search/docs/monitor-debug/search-console-start

## Etapa 2 — Visitas e contatos

Cloudflare Web Analytics pode acompanhar visitas e desempenho. É uma opção para começar com um painel simples, mas não deve ser apresentado como medição de agendamentos ou de todos os cliques específicos do site.

Para acompanhar WhatsApp com mais detalhe, usar GA4:

- Criar propriedade e fluxo Web no Google Analytics e obter o ID de medição G-....
- Com o ID confirmado, preparar a integração somente na produção e validar seu custo de carregamento.
- Configurar o clique de WhatsApp como evento específico e validá-lo em uma visita de teste antes de considerar a medição pronta. A medição otimizada de saída pode servir como base, mas precisa ser verificada.
- Distinguir posição do botão, como abertura, rodapé ou catálogo. Não enviar texto de mensagens, telefone de visitantes nem informações pessoais ou de saúde em parâmetros.
- Contar o evento como intenção de contato. Não chamá-lo de agendamento confirmado.
- Atualizar a descrição de privacidade conforme a configuração efetiva, antes de ativar a coleta.

Ainda não há tag ou ID GA4 instalado nesta entrega. Faltam a propriedade/ID e as configurações externas. Não foi adicionado um contador simulado.

Fontes:
- https://developers.cloudflare.com/web-analytics/about/
- https://support.google.com/analytics/answer/9216061?hl=pt-BR

## Etapa 3 — Agendamentos reais

Começar com uma tabela interna simples, sem dados clínicos:

| Data | Origem informada | Serviço procurado | Primeiro atendimento? | Agendou? |
| --- | --- | --- | --- | --- |
| | Google/site, Instagram, indicação ou outra | | Sim/não | Sim/não |

Perguntar como a pessoa encontrou o atendimento e registrar o resultado. Conferir mensalmente quantos contatos se tornaram primeiros atendimentos. Não somar cliques do navegador como se fossem pessoas únicas.

## PageSpeed e indexação

O Lighthouse pode reduzir o resultado de SEO quando encontra noindex. Isso é esperado na HOM. Ele não consulta o índice do Google para confirmar que uma página já aparece nas buscas. Uma página nova pode permitir indexação e passar nesse teste antes de ser indexada.

Manter noindex na homologação e liberar somente a versão final. A disponibilidade no Google é conferida no Search Console.

Fonte: https://developer.chrome.com/docs/lighthouse/seo/is-crawlable

## Certificados

Quando chegarem, conferir nome do curso, instituição e ano. Apresentar esses dados em texto na página Sobre. Se a imagem trouxer valor, acrescentar uma miniatura e acesso à imagem legível, removendo dados pessoais, assinaturas e códigos de verificação antes da publicação. Não atribuir revisão clínica ou uma especialidade apenas pela presença de um certificado.
