//Mostra a Carta a ser editada, utiliza o EditorPainel para isso
import Carta from "./Componentes/Carta";
import type { Elemento } from "./Componentes/interfaces";
import EditorPanel from "./Componentes/EditorPainel";
import EditorOpcoes from "./Componentes/EditorOpcoes";


export interface EditorProps {
    defineTela: (tela: 'inicial' | 'editor') => void;
    elementosAtuais: Elemento[];
    idSelecionado?: number | null;
    selecionarElemento: (id: number) => void;
    adicionarElemento: (tipo: 'texto' | 'imagem') => void;
    modificarElemento: (id: number, chave: string, valor: string | number) => void;
}

export default function Editor({defineTela,elementosAtuais,idSelecionado,selecionarElemento, adicionarElemento, modificarElemento}:
EditorProps) {
    const elementoSelecionado = elementosAtuais.find(element => element.id === idSelecionado);
    return (    
    <div className="editor">
        <h2>Editor de Cartas</h2>
        <button onClick={()=>defineTela("inicial")}>Voltar</button>
       
        <div className="editorCentral">
            <EditorOpcoes cartaId = {0} salvaCarta={()=>{}} apagaCarta={()=>{}} duplicaCarta={()=>{}}/>

            <Carta elementos={elementosAtuais} elementoSelecionada={selecionarElemento} />
            
            <EditorPanel 
            onAddElemento={adicionarElemento}
            onAtualizaElemento={modificarElemento}
            elementoAtivo={elementoSelecionado}
            />
        </div>
        <div className="botoesEditor">
            <button>Salvar</button>
            <button>Apagar</button>
            <button>Excluir</button>
        </div>
    </div>

);
}