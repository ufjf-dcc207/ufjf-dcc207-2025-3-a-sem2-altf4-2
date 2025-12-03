import type { ChangeEvent} from 'react';
import { useState } from 'react';
import type { Elemento } from './interfaces.tsx';
import EdicaoInputs from './EdicaoInputs.tsx';

interface EditorPanelProps {
  elementoAtivo?: Elemento;
  onAtualizaElemento: (id: number, chave: string, valor: string | number) => void;
  onAddElemento: (tipo: 'texto' | 'imagem') => void;
}


export default function EditorPanel({ elementoAtivo, onAtualizaElemento, onAddElemento }: EditorPanelProps) {
  const [menuAberto, setMenuAberto] = useState(false);
  
  const SelecionaElemento = (e: ChangeEvent<HTMLInputElement>) => 
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
    <div className="editor-panel">

      <button 
        className="btn-adicionar" 
        onClick={() => setMenuAberto(!menuAberto)}
        title="Adicionar elemento"
      >
      +
      </button>

      {menuAberto && (
        <div className="menu-adicionar">
          <button onClick={() => adicionarElemento('texto')}>📝 Adicionar Texto</button>
          <button onClick={() => adicionarElemento('imagem')}>🖼️ Adicionar Imagem</button>
        </div>
      )}

      {elementoAtivo && <EdicaoInputs elemento={elementoAtivo} onAtualizarElemento={SelecionaElemento} />}
    </div>
  );
}