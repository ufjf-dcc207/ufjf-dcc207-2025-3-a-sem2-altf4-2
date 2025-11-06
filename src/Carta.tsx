import './Carta.css'
import './imagem.css'
import Texto from './Componentes/Texto.tsx';
import Imagem from './Componentes/Imagem.tsx';
import type {CartaData} from './Deck';

export default function Carta({
    nome='Nome',
    alinhanome='centro',
    alinhadescricao='esquerda',
    ataque=1000,
    defesa=1000,
    descricao='',
    tamanho='pequena',
    imagemUrl = '',
    corImagem = true,
    espelharImagem = false,
}:CartaData)
    {
    return (
        <div className="carta">
            <div className="Repartedor">

                <Texto conteudo={nome} classe='Nome' tamanho='grande' alinhamento={alinhanome} />

                <Imagem imagem={imagemUrl} espelhado={espelharImagem} colorido={corImagem} />

                <Texto conteudo={descricao} classe='desc' tamanho={tamanho} alinhamento={alinhadescricao} />
              
                <div className='ataque'>{ataque}</div>
                <div className='defesa'>{defesa}</div>
            </div>
        </div>
    )
}