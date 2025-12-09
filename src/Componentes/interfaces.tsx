export interface Elemento {
    id:number;
    tipo: 'texto' | 'imagem';
    posicaoVertical:number,
    posicaoHorizontal:number,
    conteudo: string;
    cor: string;
    tamanho: number;
    altura?: number;
    largura?: number;
    espessuraFonte: number;
    estiloFonte: 'normal' | 'italic';
}

export interface Cartas{
    id: number;
    dados: Elemento[];
    cor: string;
}

export interface Baralho {
    id: number;
    nome: string;
    cartas: Cartas[];
}
