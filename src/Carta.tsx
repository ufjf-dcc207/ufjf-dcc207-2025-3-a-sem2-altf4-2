import './Carta.css'
import './imagem.css'
import Texto from './Componentes/Texto';
import Imagem from './Componentes/imagem';

interface CartaProps{
    nome?: string;
    alinhanome?: 'esquerda' | 'centro' | 'direita';
    alinhadescricao?: 'esquerda' | 'centro' | 'direita';
    ataque?: number;
    defesa?: number;
    descricao?: string;
    tamanho?: 'pequena' | 'media' | 'grande';
    imagem?: string;
}

export default function Carta({
    nome='Nome',
    alinhanome='centro',
    alinhadescricao='esquerda',
    ataque=1000,
    defesa=1000,
    descricao='',
    tamanho='pequena',
    imagem = '',
}: CartaProps){
    return (
        <div className="carta">
            <div className="Repartedor">
                <div>
                    <Texto conteudo={nome} classe='Nome' tamanho='grande' alinhamento={alinhanome} />
                </div>
                
                <Imagem imagem={imagem}/>
                
                <div>
                    <Texto conteudo={descricao} classe='desc' tamanho={tamanho} alinhamento={alinhadescricao} />
                </div>
                <div className='ataque'>{ataque}</div>
                <div className='defesa'>{defesa}</div>
            </div>
        </div>
    )
}