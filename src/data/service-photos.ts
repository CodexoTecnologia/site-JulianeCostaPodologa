export const servicePhotos = {
  podologia: {
    x: 27.55,
    y: 317.53,
    size: 333.75,
    label: 'Podologia',
    alt: 'Imagem ilustrativa de cuidado de uma unha com instrumento e luvas',
    href: '/atendimentos/cuidados-com-os-pes/',
  },
  reflexologia: {
    x: 384.95,
    y: 351.28,
    size: 333.75,
    label: 'Reflexologia',
    alt: 'Imagem ilustrativa de trabalho manual na planta do pé',
    href: '/atendimentos/bem-estar/#reflexologia',
  },
  spa: {
    x: 718.7,
    y: 518.16,
    size: 333.75,
    label: 'Spa dos pés',
    alt: 'Imagem ilustrativa de pés sobre uma bacia com água e pétalas',
    href: '/atendimentos/bem-estar/#spa',
  },
  reiki: {
    x: 384.95,
    y: 1175.7,
    size: 333.75,
    label: 'Reiki',
    alt: 'Imagem ilustrativa de uma sessão de Reiki, com mãos próximas à cabeça',
    href: '/atendimentos/bem-estar/#reiki',
  },
} as const;
export type ServicePhotoKind = keyof typeof servicePhotos;
