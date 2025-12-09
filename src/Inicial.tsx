//tela inicial onde são mostradas todas as cartas, se houver, no baralho. Ao selecionar alguma, muda para a tela do editor
import type {Baralho, Cartas} from './Componentes/interfaces.tsx';
import Carta from './Componentes/Carta.tsx';

interface InicialProps {
    cartasSalvas: Cartas[];
    novaCarta: () => void;
    editarCarta: (carta: Cartas) => void;
    voltarMenu: () => void;
    salvarBaralho: () => void;
    baralhoAtual: Baralho | null;
}

export default function Inicial({cartasSalvas, novaCarta, editarCarta, voltarMenu, salvarBaralho, baralhoAtual}: InicialProps) {
    return (    
        <div className="inicial">
        <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
            <button className='btn-acao voltar' onClick={voltarMenu}>Voltar</button>
            <button className='btn-acao salvar' onClick={salvarBaralho}>Salvar</button>
        </div>
        <div>
            <h2> {baralhoAtual?.nome}</h2>
            

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