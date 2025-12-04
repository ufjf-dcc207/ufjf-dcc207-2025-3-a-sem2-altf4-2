import Canva from "./Canva";
import type { Elemento } from "./interfaces";

interface CartaComponenteProps {
    elementos: Elemento[];
    elementoSelecionada: (id:number)=>void;
}  

export default function Carta({elementos, elementoSelecionada}:CartaComponenteProps) {
    return (
        <div>
            <Canva elementos={elementos} selecionada={elementoSelecionada} />
        </div>
    );
}