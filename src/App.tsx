import './App.css'
import { useState } from 'react'
import BaralhoTela from './BaralhoTela.tsx'
import Mesa from './Mesa.tsx'
import Editor from './Editor.tsx'
import type { Cartas, Elemento, Baralho } from './Componentes/interfaces.tsx'

const novoElemento = (tipo: 'texto' | 'imagem'): Elemento => ({
  id: Date.now(),
  tipo,
  conteudo: tipo === 'texto' ? 'TEXTO' : '',
  posicaoHorizontal: 50,
  posicaoVertical: 50,
  cor: '#000000',
  tamanho: tipo === 'texto' ? 16 : 100,
  largura: tipo === 'imagem' ? 100 : undefined,
  altura: tipo === 'imagem' ? 100 : undefined,
  espessuraFonte: 400,
  estiloFonte: 'normal',
})

function App() {
  const [tela, defineTela] = useState<'baralho' | 'mesa' | 'editor'>('baralho')
  const [baralhoAtual, defineBaralhoAtual] = useState<Baralho | null>(null)
  const [baralhosSalvos, defineBaralhosSalvos] = useState<Baralho[]>([])
  const [cartasSalvas, defineCartasSalvas] = useState<Cartas[]>([])
  const [corAtual, defineCorAtual] = useState('#ffffff')
  const [cartaIdAtual, defineCartaIdAtual] = useState<number | null>(null)
  const [elementos, defineElementos] = useState<Elemento[]>([])
  const [idSelecionado, defineIdSelecionado] = useState<number | null>(null)

  const onCriarBaralho = (nome: string) => {
    const novo: Baralho = {
      id: Date.now(),
      nome,
      cartas: []
    }
    defineBaralhosSalvos(prev => [...prev, novo])
  }

  const onAbrirBaralho = (b: Baralho) => {
    defineBaralhoAtual(b)
    defineCartasSalvas(b.cartas)
    defineTela('mesa')
  }

  const onSalvarBaralho = () => {
    if (!baralhoAtual) return
    baralhoAtual.cartas = cartasSalvas
    defineBaralhosSalvos(prev =>
      prev.map(item => (item.id === baralhoAtual.id ? baralhoAtual : item))
    )
  }

  const onSelecionarElemento = (id: number) => {
    defineIdSelecionado(id)
  }

  const onAtualizarCor = (cor: string) => {
    defineCorAtual(cor)
  }

  const onSalvarCarta = () => {
    if (cartaIdAtual) {
      defineCartasSalvas(prev =>
        prev.map(carta =>
          carta.id === cartaIdAtual
            ? { ...carta, dados: elementos, cor: corAtual }
            : carta
        )
      )
    } else {
      const novaCarta: Cartas = {
        id: Date.now(),
        dados: elementos,
        cor: corAtual
      }
      defineCartasSalvas(prev => [...prev, novaCarta])
    }

    defineTela('mesa')
  }

  const onApagarCarta = () => {
    if (cartaIdAtual !== null) {
      defineCartasSalvas(prev =>
        prev.filter(carta => carta.id !== cartaIdAtual)
      )
      defineTela('mesa')
    }
  }

  const onDuplicarCarta = () => {
    if (cartaIdAtual !== null) {
      defineCartasSalvas(prev => {
        const indice = prev.findIndex(c => c.id === cartaIdAtual)
        if (indice === -1) return prev

        const original = prev[indice]
        const copia: Cartas = {
          id: Date.now(),
          dados: [...original.dados],
          cor: original.cor
        }

        const novo = [...prev]
        novo.splice(indice + 1, 0, copia)

        return novo
      })
      defineTela('mesa')
    }
  }

  const onAdicionarElemento = (tipo: 'texto' | 'imagem') => {
    const elem = novoElemento(tipo)
    defineElementos(prev => [...prev, elem])
    defineIdSelecionado(elem.id)
  }

  const onModificarElemento = (id: number, chave: string, valor: string | number) => {
    defineElementos(prev =>
      prev.map(e => (e.id === id ? { ...e, [chave]: valor } : e))
    )
  }

  const onApagarElemento = (id: number) => {
    defineElementos(prev => prev.filter(e => e.id !== id))
    defineIdSelecionado(null)
  }

  const onNovaCarta = () => {
    defineElementos([])
    defineCartaIdAtual(null)
    defineIdSelecionado(null)
    defineCorAtual('#ffffff')
    defineTela('editor')
  }

  const onEditarCarta = (carta: Cartas) => {
    defineElementos(carta.dados)
    defineCartaIdAtual(carta.id)
    defineCorAtual(carta.cor)
    defineIdSelecionado(null)
    defineTela('editor')
  }

  return (
    <div className="app">
      <header className="header">
        <h1 className="titulo">Meu TCG</h1>
      </header>

      {tela === 'baralho' && (
        <BaralhoTela
          baralhos={baralhosSalvos}
          onCriarBaralho={onCriarBaralho}
          onAbrirBaralho={onAbrirBaralho}
        />
      )}

      {tela === 'mesa' && (
        <Mesa
          cartasSalvas={cartasSalvas}
          onNovaCarta={onNovaCarta}
          onEditarCarta={onEditarCarta}
          onSalvarBaralho={onSalvarBaralho}
          onVoltarMenu={() => defineTela('baralho')}
          baralhoAtual={baralhoAtual}
        />
      )}

      {tela === 'editor' && (
        <Editor
          defineTela={defineTela}
          elementosAtuais={elementos}
          idSelecionado={idSelecionado}
          selecionarElemento={onSelecionarElemento}
          adicionarElemento={onAdicionarElemento}
          modificarElemento={onModificarElemento}
          salvarCarta={onSalvarCarta}
          apagarCarta={onApagarCarta}
          duplicarCarta={onDuplicarCarta}
          cartaIdAtual={cartaIdAtual}
          corCarta={corAtual}
          atualizarCor={onAtualizarCor}
          apagarElemento={onApagarElemento}
        />
      )}

      <footer className="footer">
        <p>CardMaker 2025.</p>
      </footer>
    </div>
  )
}

export default App
