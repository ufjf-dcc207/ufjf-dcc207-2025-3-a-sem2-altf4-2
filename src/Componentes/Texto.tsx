interface TextoProps {
    conteudo: string;
    tamanho: string;
    alinhamento: string;
}

export default function Texto({
    conteudo,
    tamanho = 'medio',
    alinhamento = 'centro',
}: TextoProps) {
    const estilos: React.CSSProperties = {
        fontSize: tamanho === 'pequeno' ? '16px' : tamanho === 'grande' ? '25px' : '20px',
        textAlign: alinhamento === 'esquerda' ? 'left' : alinhamento === 'direita' ? 'right' : 'center',
    };

    return (
        <span style={estilos}>
            {conteudo}
        </span>
    )
}