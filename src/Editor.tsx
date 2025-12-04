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
    salvarCarta: () => void;
    apagarCarta: () => void;
    duplicarCarta: () => void;
    cartaIdAtual:number | null;
}

export default function Editor({defineTela,elementosAtuais,idSelecionado,
    selecionarElemento, adicionarElemento, modificarElemento, 
    salvarCarta, apagarCarta, duplicarCarta, cartaIdAtual}:
EditorProps) {
    const elementoSelecionado = elementosAtuais.find(element => element.id === idSelecionado);
    return (    
    <div className="editor">
        <h2>Editor de Cartas</h2>
        <button onClick={()=>defineTela("inicial")}>Voltar</button>
       
        <div className="editorCentral">
            <EditorOpcoes cartaId = {cartaIdAtual} salvarCarta={salvarCarta} apagarCarta={apagarCarta} duplicarCarta={duplicarCarta}/>

            <Carta elementos={elementosAtuais} elementoSelecionada={selecionarElemento} />
            
            <EditorPanel 
            onAddElemento={adicionarElemento}
            onAtualizaElemento={modificarElemento}
            elementoAtivo={elementoSelecionado}
            />
        </div>
    </div>

);
}