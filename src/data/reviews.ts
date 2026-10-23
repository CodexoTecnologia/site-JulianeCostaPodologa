// Transcrições públicas conferidas no Google em 23/10/2026, sem atualização automática.
// URLs individuais preservadas para auditoria; não são exibidas na interface.
export const googleSnapshot = { rating: '5,0', count: 58, checked: '23/10/2026' };
const selected: ReadonlyArray<readonly [string, string, string, boolean?]> = [
  [
    'Jéssica Foltran',
    '114132023289971328668',
    'Ótima profissional com um atendimento nota 10. O ambiente é muito bom, limpo e organizado. Recomendo.',
  ],
  [
    'tatiele farias',
    '108333100368485827771',
    'Excelente profissional, otimo atendimento, pontual..arrumou minha unha encravada ..maos de fada.',
  ],
  [
    'Kawanne Stadler',
    '104830249491264788325',
    'Fiz uma sessão de podologia preventiva e também experimentei a laserterapia ILIB. Além de sair com as unhas perfeitas, saí super relaxada!',
    true,
  ],
  [
    'Rafael Pereira',
    '117591668993390499370',
    'Atendimento excelente, profissional muito competente e cuidadosa. Ambiente limpo e organizado. Serviço de qualidade, recomendo.',
  ],
  [
    'Ligian De Carvalho',
    '116056333156896847784',
    'Excelente profissional, ótimo atendimento, pontual com.as clientes. Maravilhosaaa. Super indico. A melhor de Colombo',
  ],
  [
    'Gabriela Nunes',
    '102578445195843862016',
    'Tive uma experiência ótima com a Ju! Ela foi super cuidadosa, atenciosa e resolveu minhas dores muito bem.',
    true,
  ],
  [
    'Julia Caldeira',
    '117895161134206827123',
    'profissional maravilhosa, muito cuidadosa e com o atendimento impecável! recomendo muito',
  ],
  [
    'Evelin Tosta',
    '105278638027843776269',
    'Top... profissional de excelência, tudo muito limpo e organizado! Pode ir sem medo.',
  ],
  [
    'Joelma Morato',
    '100915973430648910464',
    'Muito obrigada pelo atendimento excepcional! Sinto meus pés renovados e leves.',
    true,
  ],
  [
    'Denis Kauan',
    '115604475018887287728',
    'Tenho unhas encravadas e ela, com todo cuidado e profissionalismo, resolveu meu problema em questão de minutos. Recomendo bastante.',
    true,
  ],
  [
    'Milena Lima',
    '117700628410396071757',
    'Recomendo, uma profissional excelente, super atenciosa e cuidadosa.',
  ],
  [
    'Marina Cavassin',
    '115675839367909024702',
    'Juliane excelente profissional e pessoa, , recomendo a Ju com toda certeza',
    true,
  ],
  [
    'Emerson Caldeira',
    '103493358121295197238',
    'A melhor de Colombo fasso meus tratamentos a muito tempo .uma exelente profissional',
  ],
  [
    'Deh marchetti',
    '109356416197631574401',
    'Sou paciente super indico tenho muita sensibilidade e com ela consigo fazer tranquilamente mão bem leve',
  ],
  [
    'Jackeline Jukovski',
    '110037058420858335249',
    'Meu pé é outro depois dela realizar os cuidados',
  ],
  [
    'Vinicius Barbosa',
    '118273468223877591544',
    'Excelente profissional, faz mais de um ano que ela me atende 👏',
  ],
  [
    'Caê Tomita',
    '105292401752858405072',
    'Excelência no serviço prestado pela Juliane Costa. Recomendável.',
  ],
  [
    'Joy Rosalin',
    '100240479424704825258',
    'Maravilhosa. Atendimento impecável. Delicadíssima. Mãos de fada! 💛',
  ],
  [
    'Claudilene Ceccon',
    '104927602900896720817',
    'Excelente profissional. Atendeu prontamente, sempre com carinho, foi flexível… adoramos. Não trocamos mais de profissional. Gratidão.',
  ],
  [
    'rudineia costa',
    '105684500458588379557',
    'Ótima profissional, carismática e muito cuidadosa com seus clientes. Obrigada.',
  ],
];
// Texto integral dos comentários apresentados como trecho no carrossel.
const completeText: Record<string, string> = {
  '104830249491264788325':
    'Fiz uma sessão de podologia preventiva e também experimentei a laserterapia ILIB. Além de sair com as unhas perfeitas, saí super relaxada! O espaço é muito limpo e moderno, e o atendimento é maravilhoso. A Ju é uma profissional excelente, muito atenciosa e querida. Recomendo muito!✨💕',
  '102578445195843862016':
    'Tive uma experiência ótima com a Ju! Ela foi super cuidadosa, atenciosa e resolveu minhas dores muito bem. As mãos dela são leves e precisas, dá muita confiança e conforto durante todo o atendimento. Dá pra ver que ela entende muito do que faz e realmente se preocupa com a gente.\nCom certeza volto e recomendo muito!!',
  '100915973430648910464':
    'Muito obrigada pelo atendimento excepcional! Sinto meus pés renovados e leves.\nProfissional atenciosa e competente. Agradeço por cuidar dos meus pés com tanto carinho e profissionalismo( Uns 5 anos). Sua dedicação faz toda a diferença!!',
  '115604475018887287728':
    'Juliane é uma profissional incrível. Tenho unhas encravadas e ela, com todo cuidado e profissionalismo, resolveu meu problema em questão de minutos. Recomendo bastante.',
  '115675839367909024702':
    'Juliane excelente profissional e pessoa, , recomendo a Ju com toda certeza , fizemos o tratamento com o laser em minha unha e vi um ótimo resultado.',
};
export const reviews = selected.map(([author, id, text, excerpt]) => ({
  author,
  initials: author
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase(),
  text,
  fullText: completeText[id] || text,
  excerpt: Boolean(excerpt),
  url: `https://www.google.com/maps/contrib/${id}/reviews?hl=pt-BR`,
}));
