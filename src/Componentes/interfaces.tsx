export interface Elemento {
    id:number;
    tipo: 'texto' | 'imagem';
    x: number;
    y: number;
    conteudo: string;
    cor: string;
    tamanho: number;
    altura?: number;
    largura?: number;

}

export interface Cartas{
    id: number;
    dados: Elemento[];
}

export interface Baralho {
    id: number;
    nome: string;
    cartas: Cartas[];
}
