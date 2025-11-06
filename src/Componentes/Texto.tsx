interface TextoProps {
    conteudo?: string;
    tamanho?: string;
    alinhamento?: string;
    classe?: 'Nome' | 'desc';
}

export default function Texto({
    conteudo='',
    tamanho = 'pequeno',
    alinhamento = 'centro',
    classe = 'desc',
}: TextoProps) {
    const estilos: React.CSSProperties = {
        fontSize: tamanho === 'pequeno' ? '16px' : tamanho === 'grande' ? '25px' : '20px',
        textAlign: alinhamento === 'esquerda' ? 'left' : alinhamento === 'direita' ? 'right' : 'center',
    };

    return (
        <div className={`${classe}`} style={estilos}>{conteudo}</div>
    )
}