import SamuraiImg from './assets/template/samurai.png';

export interface CartaData {
  serial?: number;
  nome?: string;
  nivel?: number;
  ataque?: number;
  defesa?: number;
  descricao?: string;
  imagemUrl?: string;
  tamanho?: 'pequena' | 'media' | 'grande';
  alinhanome?: 'esquerda' | 'centro' | 'direita';
  alinhadescricao?: 'esquerda' | 'centro' | 'direita';
  espelharImagem?: boolean;
  corImagem?: boolean;
  girarImagem?: boolean;
}

export const todasCartas: CartaData[] = [
  {
    serial: 1,
    nome: 'Godfrey',
    nivel: 3,
    ataque: 8000,
    defesa: 1500,
    descricao: 'O primeiro Lorde Pristino.',
    imagemUrl: `${SamuraiImg}`,
  },
  {
    serial: 2,
    nome: 'Malenia',
    ataque: 4000,
    defesa: 7000,
    descricao: 'A espada de Miquella',
    tamanho: 'media',
    alinhanome: 'esquerda',
    alinhadescricao: 'direita',
    imagemUrl: `${SamuraiImg}`,
    corImagem: false,
    girarImagem: true,
  },
  {
    serial: 3,
    nome: 'Radahn',
    ataque: 3500,
    defesa: 2000,
    tamanho: 'grande',
    alinhanome: 'direita',
    alinhadescricao: 'centro',
    descricao: 'O General Estelar, conquistador das estrelas',
    imagemUrl: `${SamuraiImg}`,
    espelharImagem: true,
  },
  {
    serial: 4,
    nome: 'Morgott',
    ataque: 2500,
    defesa: 1800,
    tamanho: 'pequena',
    descricao: 'O Rei Agouro',
    imagemUrl: `${SamuraiImg}`,
    corImagem: false,
  },
];