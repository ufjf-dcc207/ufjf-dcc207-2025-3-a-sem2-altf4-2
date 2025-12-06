import './App.css'
import { useState } from 'react'
import Inicial from './Inicial.tsx'
import Editor from './Editor.tsx'
import type { Cartas, Elemento, Baralho} from './Componentes/interfaces.tsx';


const novoElemento = (tipo: 'texto' | 'imagem'): Elemento => {
  return{
    id: Date.now(),
    tipo: tipo,
    conteudo: tipo === 'texto' ? 'TEXTO' : '',
    posicaoHorizontal: 50,
    posicaoVertical: 50,
    cor: '#000000',
    tamanho: tipo === 'texto' ? 16 : 100,
    largura: tipo === 'imagem' ? 100 : undefined,
    altura: tipo === 'imagem' ? 100 : undefined,
  }
}

function App() {
  const[tela, defineTela] = useState<'inicial' | 'editor'>('inicial');
  const[cartasSalvas,defineCartasSalvas] = useState<Cartas[]>([]);
  const[corAtual, defineCorAtual] = useState<string>('#ffffff');
  const[cartaIdAtual, defineCartaIdAtual] = useState<number | null>(null);
  const[elementos, defineElementos] = useState<Elemento[]>([]);
  const [idSelecionado, defineIdSelecionado] = useState<number | null>(null);
  const[baralhosSalvos, defineBaralhosSalvos] = useState<Baralho[]>([]);
  
  const selecionarId = (id: number) => {
  defineIdSelecionado(id);
  }
const atualizarCor = (cor: string) => {
        defineCorAtual(cor);
    }
const salvarCarta= () => {
  if(cartaIdAtual) {
  defineCartasSalvas(prev=>prev.map(carta => carta.id === cartaIdAtual ? {...carta, dados: elementos} : carta));
  }else{
    const novaCarta: Cartas = {
      id: Date.now(),
      dados: elementos,
      cor: corAtual
    };
    defineCartasSalvas([...cartasSalvas, novaCarta]);
  }
  defineTela('inicial');
}
const apagarCarta= ()=> {
  if(cartaIdAtual !== null) {
    defineCartasSalvas(prev=> prev.filter(carta=> carta.id !== cartaIdAtual));
    defineTela('inicial');
  }
}

const duplicarCarta = () => {
  defineCartasSalvas(prev => {
    if (!prev || prev.length === 0) return prev;

    let indice = cartaIdAtual != null ? prev.findIndex(c => c.id === cartaIdAtual) : -1;

    if (indice === -1) indice = prev.length - 1;

    const cartaOrig = prev[indice];
    const copia = {
      id: Date.now(),
      dados: cartaOrig.dados,
      cor: cartaOrig.cor
    };

    const nova = [...prev];
    nova.splice(indice + 1, 0, copia);
    return nova;
  });

  const novoId = Date.now();
  defineCartaIdAtual(novoId);
  defineTela('inicial');
};


const adicionarElemento= (tipo: 'texto' | 'imagem') =>
{
  const elemento = novoElemento(tipo);
  defineElementos(elementos => [...elementos, elemento]);
  defineIdSelecionado(elemento.id);
}
const modificarElementos= (id: number, chave: string, valor: string | number) => 
{
  defineElementos(prev => prev.map(element => element.id === id? {...element, [chave]: valor} : element));
}
const novaCarta = () => {
  defineElementos([]);
  defineCartaIdAtual(null);
  defineIdSelecionado(null);
  atualizarCor('#ffffff');
  defineTela('editor');
}
const editarCarta = (carta: Cartas) => {
  defineElementos(carta.dados);
  defineCartaIdAtual(carta.id);
  atualizarCor(carta.cor);
  defineIdSelecionado(null);
  defineTela('editor');
}
  return (
    <div className="app">
      <header className='header'>
        <h1 className='titulo'>Meu TCG</h1>
      </header>
    
    {tela === 'inicial' ?(
      <Inicial cartasSalvas={cartasSalvas} novaCarta={novaCarta} editarCarta={editarCarta} />
    ) : (
      <Editor defineTela={defineTela} elementosAtuais={elementos} idSelecionado={idSelecionado} 
      selecionarElemento={selecionarId} adicionarElemento={adicionarElemento} modificarElemento={modificarElementos}
      salvarCarta={salvarCarta} apagarCarta={apagarCarta} duplicarCarta={duplicarCarta} cartaIdAtual={cartaIdAtual}
      corCarta={corAtual} atualizarCor={atualizarCor} />
    )}
      <footer className="footer">
        <p>CardMaker 2025.</p>
      </footer>

    </div>
  )
}

export default App
