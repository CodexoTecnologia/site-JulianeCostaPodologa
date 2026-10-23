import maxiderm from '../assets/products/maxiderm.jpg';
import psorin from '../assets/products/psorin.jpg';
import onico from '../assets/products/onico-blend.jpg';
import nutri from '../assets/products/nutri-derm.jpg';
import smell from '../assets/products/smell-feet.jpg';
import spray from '../assets/products/blend-spray.jpg';

export const products = [
  {
    id: 'maxiderm',
    name: 'Maxiderm',
    category: 'HIDRATAÇÃO E NUTRIÇÃO',
    image: maxiderm,
    description:
      'Creme hidratante nutritivo para o cuidado da pele seca e áspera dos pés. Uma opção para conversar com a Juliane sobre a sua rotina de hidratação.',
    detail: 'Creme nutritivo · RHR Rivera',
    source: 'https://www.vmrivera.com.br/creme-hidratante-nutritivo-maxiderm-100gr/p',
  },
  {
    id: 'psorin',
    name: 'Psorin Unhas',
    category: 'CUIDADO COM AS UNHAS',
    image: psorin,
    description:
      'Combina óleos essenciais de copaíba, melaleuca, lavanda, bergamota e eucalipto para o cuidado diário da região das unhas.',
    detail: 'Blend de óleos essenciais · VM Rivera',
    source: 'https://www.vmrivera.com.br/psoriase-nas-unhas-psorin-10ml/p',
  },
  {
    id: 'onico-blend',
    name: 'Ônico Blend',
    category: 'UNHAS E CUTÍCULAS',
    image: onico,
    description:
      'Blend de óleos essenciais voltado ao cuidado e à hidratação de unhas e cutículas. Saiba com a Juliane se ele faz sentido para o seu acompanhamento.',
    detail: 'Cuidado das unhas · RHR Rivera',
    source: 'https://www.vmrivera.com.br/fortalecedor-para-unhas-onico-blend-10ml-conta-gotas/p',
  },
  {
    id: 'nutri-derm',
    name: 'Nutri Derm',
    category: 'HIDRATAÇÃO DIÁRIA',
    image: nutri,
    description:
      'Creme hidratante com ureia, de rápida absorção e toque seco. Pensado para manter o cuidado com a pele dos pés no dia a dia.',
    detail: 'Creme hidratante · RHR Rivera',
    source: 'https://www.vmrivera.com.br/creme-hidratante-com-ureia-nutri-derm-100gr/p',
  },
  {
    id: 'smell-feet',
    name: 'Smell Feet',
    category: 'FRESCOR NA ROTINA',
    image: smell,
    description:
      'Desodorante para os pés e calçados, com óleos essenciais. Uma opção de cuidado com o odor para complementar a sua rotina de higiene.',
    detail: 'Desodorante para pés e calçados · RHR Rivera',
    source: 'https://www.vmrivera.com.br/desodorante-para-os-pes-e-calcados-smell-feet-120ml-1-2/p',
  },
  {
    id: 'blend-spray',
    name: 'Blend Spray',
    category: 'MELALEUCA E CRAVO',
    image: spray,
    description:
      'Melaleuca e cravo-folhas em uma apresentação spray para o cuidado externo de unhas e pele. Consulte a orientação de uso para a sua necessidade.',
    detail: 'Blend em spray · RHR Rivera',
    source: 'https://www.vmrivera.com.br/tratamento-para-unhas-com-micose-blend-spray-30ml/p',
  },
] as const;
