import './App.css'
import Carta from './Carta'
import { todasCartas } from './Deck'


function App() {
  return (
    <>
      <div className='ListaCartas'>
        {todasCartas.map((carta) =>(
          <Carta 
            key={carta.serial}
            nome={carta.nome}
            nivel={carta.nivel}
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
          />
        ))}
      </div>
    </>
  )
}
export default App