import './Carta.css'
import Texto from './Componentes/Texto';

interface CartaProps{
    nome?: string;
    alinhanome?: 'esquerda' | 'centro' | 'direita';
    alinhadescricao?: 'esquerda' | 'centro' | 'direita';
    ataque?: number;
    defesa?: number;
    descricao?: string;
    tamanho?: 'pequena' | 'media' | 'grande';
}

export default function Carta({
    nome='Nome',
    alinhanome='centro',
    alinhadescricao='esquerda',
    ataque=1000,
    defesa=1000,
    descricao='',
    tamanho='pequena',
}: CartaProps){
    return (
        <div className="carta">
            <div className="Repartedor">
                <div>
                    <Texto conteudo={nome} classe='Nome' tamanho='grande' alinhamento={alinhanome} />
                </div>
                <div>
                    <Texto conteudo={descricao} classe='desc' tamanho={tamanho} alinhamento={alinhadescricao} />
                </div>
                <div className='ataque'>{ataque}</div>
                <div className='defesa'>{defesa}</div>
            </div>
        </div>
    )
}