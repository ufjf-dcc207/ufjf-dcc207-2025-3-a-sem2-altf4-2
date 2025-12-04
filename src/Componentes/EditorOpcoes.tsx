interface EditorOpcoesProps
{
    cartaId: number| null;
    salvaCarta: () =>void;
    apagaCarta: () =>void;
    duplicaCarta: () =>void;
}
export default function EditorOpcoes({cartaId, salvaCarta, apagaCarta, duplicaCarta}: EditorOpcoesProps)
{
    return (
        <div className="editor-opcoes">
            <button onClick={salvaCarta}>Salvar Carta</button>
            <button onClick={apagaCarta}>Apagar Carta</button>
            <button onClick={duplicaCarta}>Duplicar Carta</button>
        </div>
    );
}