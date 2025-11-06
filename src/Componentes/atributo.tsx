interface AtributoProps{
    tipo: string;
    valor: number;
}
export default function Atributo({
    tipo='',
    valor=0,
}: AtributoProps){
    const estilos: React.CSSProperties = {
        fontSize: 'clamp(5px, 1vw , 11px)',
    };
    return (
        <div className={`${tipo}`} style = {estilos}>
            {tipo === 'ataque' ? 'ATK/' : tipo === 'defesa' ? ' DEF/' : ''} 
            <span style={estilos}>{valor}</span>
        </div>
    )
}      