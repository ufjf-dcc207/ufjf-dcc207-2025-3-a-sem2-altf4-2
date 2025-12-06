//tela inicial onde são mostradas todas as cartas, se houver, no baralho. Ao selecionar alguma, muda para a tela do editor
import type {Baralho, Cartas} from './Componentes/interfaces.tsx';
import Carta from './Componentes/Carta.tsx';

interface InicialProps {
    cartasSalvas: Cartas[];
    novaCarta: () => void;
    editarCarta: (carta: Cartas) => void;
    voltarMenu: () => void;
}

export default function Inicial({cartasSalvas, novaCarta, editarCarta, voltarMenu}: InicialProps) {
    return (    
        <div className="inicial">
        <div>
            <h2>Seus Baralhos!</h2>
            <button onClick={voltarMenu}>Voltar</button>
        </div>
        <div>
            <h2>Nome do baralho!</h2>
            

            <div className="exibeCartas">
                {cartasSalvas.map(c => (
                <div 
                    key={c.id} 
                    className="cartaInicial" 
                    onClick={() => editarCarta(c)}
                >

                <div className="cartaMiniatura">

                    <Carta elementos={c.dados} cor={c.cor} elementoSelecionada={()=>{}}  />

                </div>

                </div>

                ))}

                <div className="cartaInicial novaCarta" onClick={novaCarta}>
                    <div className="cartaMiniatura">
                            <div className="cartaPlaceholder">+</div>
                        </div>
                    </div>
                
            </div>
        </div>
    </div>
    );
}