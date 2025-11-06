import './App.css'
import Carta from './Carta'

function App() {
  return (
    <>
    <div className='ListaCartas'>
      <Carta nome="Godfrey" ataque={2000} defesa={1500} descricao="O primeiro Lorde Pristino." />
      <Carta nome='Malenia' ataque={4000} defesa={700} tamanho='media' alinha='esquerda'  descricao='A espada de Miquella'/>
    </div>
    </>
  )
}

export default App
