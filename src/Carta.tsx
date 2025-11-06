import './Carta.css'
import './imagem.css'
import Texto from './Componentes/Texto.tsx';
import Imagem from './Componentes/imagem.tsx';

interface CartaProps{
    nome?: string;
    alinhanome?: 'esquerda' | 'centro' | 'direita';
    alinhadescricao?: 'esquerda' | 'centro' | 'direita';
    ataque?: number;
    defesa?: number;
    descricao?: string;
    tamanho?: 'pequena' | 'media' | 'grande';
    urlimagem?: string;
    corImagem?: boolean;
    girarImagem?: '0' | '90' | '180' | '270';
    espelharImagem?: boolean;
}

export default function Carta({
    nome='Nome',
    alinhanome='centro',
    alinhadescricao='esquerda',
    ataque=1000,
    defesa=1000,
    descricao='',
    tamanho='pequena',
    urlimagem = '',
    corImagem = true,
    espelharImagem = false,
}: CartaProps){
    return (
        <div className="carta">
            <div className="Repartedor">

                <Texto conteudo={nome} classe='Nome' tamanho='grande' alinhamento={alinhanome} />

                <Imagem imagem={urlimagem} espelhado={espelharImagem} colorido={corImagem} />

                <Texto conteudo={descricao} classe='desc' tamanho={tamanho} alinhamento={alinhadescricao} />
              
                <div className='ataque'>{ataque}</div>
                <div className='defesa'>{defesa}</div>
            </div>
        </div>
    )
}