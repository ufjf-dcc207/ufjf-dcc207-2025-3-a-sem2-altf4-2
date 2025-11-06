import './Carta.css'
import Texto from './Componentes/Texto';

interface CartaProps{
    nome?: string;
    ataque?: number;
    defesa?: number;
    descricao?: string;
    tamanho?: 'pequena' | 'media' | 'grande';
    alinha?: 'esquerda' | 'centro' | 'direita';
}

export default function Carta({
    nome='Nome',
    ataque=1000,
    defesa=1000,
    descricao='',
    tamanho='media',
    alinha='centro',
}: CartaProps){
    return (
        <div className="carta">
            <div className="Repartedor">
                <div>
                    <Texto conteudo={nome} classe='Nome' tamanho='grande' alinhamento={alinha} />
                </div>
                <div>
                    <Texto conteudo={descricao} classe='desc' tamanho={tamanho} alinhamento={alinha} />
                </div>
                <div className='ataque'>{ataque}</div>
                <div className='defesa'>{defesa}</div>
            </div>
        </div>
    )
}