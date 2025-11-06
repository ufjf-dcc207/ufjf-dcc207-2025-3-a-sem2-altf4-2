
interface ImagemProps{
    imagem?: string;
    colorido?: boolean;
    espelhado?: boolean;
    girado?:'0' | '90' | '180' | '270';
}

export default function Imagem({
    imagem='',
    colorido=true,
    espelhado=false,
    girado='0',
}: ImagemProps){
    const estilos: React.CSSProperties = {
        filter: colorido ? 'none' : 'grayscale(100%)',
        transform: `${espelhado ? 'scaleX(-1)' : ''} rotate(${girado}deg)`,
        backgroundImage: `url(${imagem})`,
    };
    return (
        <div className="imagem" style={estilos}>
        </div>
    )
}