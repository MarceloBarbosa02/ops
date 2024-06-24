import EbookIcon from '@/shared/assets/images/svg/products/files.svg';
import MoneyIcon from '@/shared/assets/images/svg/products/money.svg';
import PlayIcon from '@/shared/assets/images/svg/products/play.svg';

export const typeProductMock = [
  {
    id: 1,
    title: 'E-books e arquivos',
    description:
      'Ebooks, presets, zips e audiobooks para compartilhar conhecimento e recursos digitais.',
    icon: <EbookIcon />,
  },
  {
    id: 2,
    title: 'Curso',
    description:
      'Ofereça cursos na nossa Área de Membros com materiais exclusivos e muito mais.',
    icon: <PlayIcon />,
  },
  {
    id: 3,
    title: 'Serviço',
    description:
      'Links de pagamento seguros, telemedicina, consultoria e mais.',
    icon: <MoneyIcon />,
  },
];
