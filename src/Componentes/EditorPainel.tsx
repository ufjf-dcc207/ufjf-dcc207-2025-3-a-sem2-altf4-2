import type { ChangeEvent} from 'react';
import { useState } from 'react';
import type { Elemento } from './interfaces.tsx';
import EditorInputs from './EditorInputs.tsx';
import '../Estilos/EditorPainel.css';

interface EditorPanelProps {
  elementoAtivo?: Elemento;
  onAtualizaElemento: (id: number, chave: string, valor: string | number) => void;
  onAddElemento: (tipo: 'texto' | 'imagem') => void;
  apagarElemento: (id: number) => void;
  cor: string;
  atualizarCor: (cor: string) => void;
}


export default function EditorPanel({ elementoAtivo, onAtualizaElemento, onAddElemento, apagarElemento, cor, atualizarCor}: EditorPanelProps) {
  const [menuAberto, setMenuAberto] = useState(false);
  
  const SelecionaElemento = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => 
  {
    const { name, value } = e.target;
    if (elementoAtivo) {
      onAtualizaElemento(elementoAtivo.id, name, value);
    }
  };

  const adicionarElemento = (tipo: 'texto' | 'imagem') => {
    onAddElemento(tipo);
    setMenuAberto(false);
  };

  return (
    <div className="editor-painel">

      <button 
        className="adicionarEditor" 
        onClick={() => setMenuAberto(!menuAberto)}
        title="Adicionar elemento"
      >
      +
      </button>

      {menuAberto && (
        <div className="menuAdicionar">
          <button onClick={() => adicionarElemento('texto')}>📝 Adicionar Texto</button>
          <button onClick={() => adicionarElemento('imagem')}>🖼️ Adicionar Imagem</button>
          <div style={{display: 'flex', flexDirection: 'row', gap: ' 10px' }}>
          <p>Cor da Carta:</p> 
          <input style={{display: 'inline'}} type="color" name="corCarta" value={cor} onChange={e => atualizarCor(e.target.value)}/>
          </div>
         
        </div>
      )}

      {elementoAtivo && <EditorInputs elemento={elementoAtivo} atualizarElemento={SelecionaElemento} apagarElemento={apagarElemento} />}
    </div>
  );
}