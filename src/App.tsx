import './App.css'
import Carta from './Carta'
import { todasCartas } from './Deck'
import { useState } from 'react'

function App() {

  const decks = [
    todasCartas, 
    [],
    []
  ]

  const [indiceDeck, setIndiceDeck] = useState(0)
  const deckAtual = decks[indiceDeck]

  function nextDeck() {
    setIndiceDeck((prev) => (prev + 1) % decks.length)
  }

  function prevDeck() {
    setIndiceDeck((prev) => (prev - 1 + decks.length) % decks.length)
  }

  return (
    <>
      <header className="titulo">
        <h1>CardMaker</h1>
      </header>

      <div className="deck-titulo">

        
        <span className="setinha-esq" onClick={prevDeck}>
          ←
        </span>

        <h2>Deck Atual: {indiceDeck + 1}</h2>

        
        <span className="setinha-dir" onClick={nextDeck}>
          →
        </span>

      </div>

      <div className='ListaCartas'>
        {deckAtual.map((carta) =>(
          <Carta 
            key={carta.serial}
            nome={carta.nome}
            nivel={carta.nivel}
            alinhaNivel={carta.alinhaNivel}
            ataque={carta.ataque}
            defesa={carta.defesa}
            descricao={carta.descricao}
            imagemUrl={carta.imagemUrl}
            tamanho={carta.tamanho}
            alinhanome={carta.alinhanome}
            alinhadescricao={carta.alinhadescricao}
            espelharImagem={carta.espelharImagem}
            girarImagem={carta.girarImagem}
            corImagem={carta.corImagem}
            tipo={carta.tipo}
          />
        ))}
      </div>
    </>
  )
}

export default App
