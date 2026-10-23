export const business = {
  name: 'Juliane Costa Podóloga',
  person: 'Juliane Costa',
  description:
    'Podologia, ILIB e bem-estar no Centro de Colombo, PR. Conheça a Juliane, os atendimentos e o espaço. Agende sua avaliação pelo WhatsApp.',
  phone: '(41) 99572-6923',
  telephone: '+5541995726923',
  whatsapp: '5541995726923',
  address: 'Rua Venâncio Trevisan, 137, sala 01',
  neighborhood: 'Centro',
  city: 'Colombo',
  state: 'PR',
  postalCode: '83414-020',
  hours: 'Atendimento com hora marcada',
  instagram: 'https://www.instagram.com/jupodologa46/',
  instagramHandle: '@jupodologa46',
  google: 'https://share.google/yRPq4t2PnpVCY6pa3',
  reviewUrl: 'https://g.page/r/CQ4EPU5yN7kAEAE/review',
  maps: 'https://www.google.com/maps/search/?api=1&query=Juliane+Costa+Pod%C3%B3loga+Rua+Ven%C3%A2ncio+Trevisan+137+Colombo',
} as const;

export const production = import.meta.env.PUBLIC_SITE_MODE === 'production';
export const origin =
  import.meta.env.PUBLIC_SITE_URL?.trim() || 'https://julianecostapodologa.com.br';
export function whatsapp(
  message = 'Olá, Ju! Encontrei seu site e gostaria de saber mais sobre o atendimento.',
) {
  return `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(message)}`;
}
export const navigation = [
  { href: '/atendimentos/', label: 'Atendimentos' },
  { href: '/ilib/', label: 'ILIB' },
  { href: '/sobre/', label: 'A Juliane' },
  { href: '/blog/', label: 'Conteúdos' },
  { href: '/localizacao/', label: 'Localização' },
];
