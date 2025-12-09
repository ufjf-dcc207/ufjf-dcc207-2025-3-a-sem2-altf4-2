import './App.css'
import { useState } from 'react'
import BaralhoTela from './BaralhoTela.tsx'
import Inicial from './Inicial.tsx'
import Editor from './Editor.tsx'
import type { Cartas, Elemento, Baralho} from './Componentes/interfaces.tsx'



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
  const[tela, defineTela] = useState<'baralho' | 'inicial' | 'editor'>('baralho');

  const [baralhoAtual, defineBaralhoAtual] = useState<Baralho | null>(null);
  const[baralhosSalvos, defineBaralhosSalvos] = useState<Baralho[]>([]);

  const[cartasSalvas,defineCartasSalvas] = useState<Cartas[]>([]);

  const[corAtual, defineCorAtual] = useState<string>('#ffffff');
  const[cartaIdAtual, defineCartaIdAtual] = useState<number | null>(null);
  const[elementos, defineElementos] = useState<Elemento[]>([]);
  const [idSelecionado, defineIdSelecionado] = useState<number | null>(null);

  const criarBaralho = (nome: string) => {
    const novo: Baralho = {
      id: Date.now(),
      nome,
      cartas: []
    }
    defineBaralhosSalvos(prev => [...prev, novo])
  }
  
  const abrirBaralho = (b: Baralho) => {
    defineBaralhoAtual(b);
    defineCartasSalvas(b.cartas);
    defineTela('inicial');
  }

  const salvarBaralho = () => {
      if (!baralhoAtual) return;

      baralhoAtual.cartas = cartasSalvas;
      defineBaralhoAtual(baralhoAtual);

      defineBaralhosSalvos(prev => prev.map(item => item.id === baralhoAtual.id ? baralhoAtual : item)) ;
    }


  const selecionarId = (id: number) => {
  defineIdSelecionado(id);
  }
  const atualizarCor = (cor: string) => {
        defineCorAtual(cor);
    }
  const salvarCarta= () => {
        if(cartaIdAtual) {
          defineCartasSalvas(prev=>prev.map(carta => carta.id === cartaIdAtual ? {...carta, dados: elementos, carta:corAtual} : carta));
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
    if(cartaIdAtual !== null) {
      defineCartasSalvas(prev => {
        if (!prev || prev.length === 0) return prev;

        const indice = prev.findIndex(c => c.id === cartaIdAtual);
        
        if (indice === -1) return prev;

        const cartaOrig = prev[indice];
        const copia: Cartas = {
          id: Date.now(),
          dados: [...cartaOrig.dados],
          cor: cartaOrig.cor
        };

        const nova = [...prev];
        nova.splice(indice + 1, 0, copia);
        
        return nova;
      });
      
      defineTela('inicial');
    }
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
  const apagarElemento= (id: number) =>
  {
    defineElementos(prev => prev.filter(element => element.id !== id));
    defineIdSelecionado(null);
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
      
    {tela === 'baralho' && (
      <BaralhoTela
        baralhos={baralhosSalvos}
        criarBaralho={criarBaralho}
        abrirBaralho={abrirBaralho}

      />
    )}

  {tela === 'inicial' && (
    <Inicial
      cartasSalvas={cartasSalvas}
      novaCarta={novaCarta}
      editarCarta={editarCarta}
      salvarBaralho={salvarBaralho}
      baralhoAtual={baralhoAtual}
      voltarMenu={() => defineTela('baralho')}
    />
  )}

  {tela === 'editor' && (
    <Editor
      defineTela={defineTela}
      elementosAtuais={elementos}
      idSelecionado={idSelecionado}
      selecionarElemento={selecionarId}
      adicionarElemento={adicionarElemento}
      modificarElemento={modificarElementos}
      salvarCarta={salvarCarta}
      apagarCarta={apagarCarta}
      duplicarCarta={duplicarCarta}
      cartaIdAtual={cartaIdAtual}
      corCarta={corAtual}
      atualizarCor={atualizarCor}
      apagarElemento={apagarElemento}
    />
)}


    <footer className="footer">
      <p>CardMaker 2025.</p>
    </footer>
  </div>
)
}

export default App
