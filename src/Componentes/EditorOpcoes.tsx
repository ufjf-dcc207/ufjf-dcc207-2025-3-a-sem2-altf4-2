interface EditorOpcoesProps
{
    cartaId: number| null;
    salvarCarta: () =>void;
    apagarCarta: () =>void;
    duplicarCarta: () =>void;
}
export default function EditorOpcoes({cartaId, salvarCarta, apagarCarta, duplicarCarta}: EditorOpcoesProps)
{
    return (
        <div className="editor-opcoes">
            {cartaId === null ? (<button onClick={salvarCarta}>Salvar Carta</button>): (<button onClick={salvarCarta}>Salvar Alteração</button>)}
            <button onClick={apagarCarta}>Apagar Carta</button>
            <button onClick={duplicarCarta}>Duplicar Carta</button>
        </div>
    );
}