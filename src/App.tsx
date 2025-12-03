import './App.css'
import { useState } from 'react'
import { Cartas, Elemento, Baralho} from './Componentes/interfaces.tsx';


function App() {
  const[Tela, defineTela] = useState<'inicial' | 'editor'>('inicial');
  const[CartasSalvas,defineCartasSalvas] = useState<Cartas[]>([]);
  const[Elementos, defineElementos] = useState<Elemento[]>([]);
  const[BaralhosSalvos, defineBaralhosSalvos] = useState<Baralho[]>([]);

  const ModificarElementos= (id: number, chave: string, valor: string | number) => 
  {
    defineElementos(prev => prev.map(element => element.id === id? {...element, [chave]: valor} : element));
  }

  return (
    <>
     
    </>
  )
}

export default App
