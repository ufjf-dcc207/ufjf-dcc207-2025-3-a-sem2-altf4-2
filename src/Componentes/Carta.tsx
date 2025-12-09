import Canva from "./Canva";
import "../Estilos/Carta.css";
import type { Elemento } from "./interfaces";
import type {CSSProperties } from "react";

interface CartaComponenteProps {
    elementos: Elemento[];
    onSelecionarElemento: (id:number)=>void;
    cor: string;
}  

export default function Carta({elementos, onSelecionarElemento, cor}:CartaComponenteProps) {

    const style : CSSProperties = {
        backgroundColor: cor,
    }
    return (
        <div className="carta" style={style}>
            <Canva elementos={elementos} onSelecionar={onSelecionarElemento} />
        </div>
    );
}