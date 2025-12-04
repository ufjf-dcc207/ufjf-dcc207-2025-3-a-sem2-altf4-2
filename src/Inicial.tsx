//tela inicial onde são mostradas todas as cartas, se houver, no baralho. Ao selecionar alguma, muda para a tela do editor
import type {Baralho, Cartas} from './Componentes/interfaces.tsx';
import Canva from './Componentes/Canva.tsx';

interface InicialProps {
    cartasSalvas: Cartas[];
    novaCarta: () => void;
    editarCarta: (carta: Cartas) => void;
}

export default function Inicial({cartasSalvas, novaCarta, editarCarta}: InicialProps) {
    return (    
        <div className="inicial">
        <div>
            <h2>Seus Baralhos!</h2>
        </div>
        <div>
            <h2>Nome do baralho!</h2>
            <button onClick={() => novaCarta()}>Criar Nova Carta</button>
            <div className="deck-grid">
                {cartasSalvas.map(c => (
                <div 
                key={c.id} 
                className="cartaInicial" 
                onClick={() => editarCarta(c)}
                >
                <div>
                    <Canva elementos={c.dados} selecionada={() => {}} />
                </div>
                </div>
                ))}
            </div>
        </div>
    </div>
    );
}