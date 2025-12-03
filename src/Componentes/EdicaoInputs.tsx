import type { Elemento } from "./interfaces.tsx";
import type { ChangeEvent } from "react";   

interface EdicaoInputsProps
{
    elemento: Elemento;
    onAtualizarElemento: (e: ChangeEvent<HTMLInputElement>) => void;

}

export default function EdicaoInputs({elemento, onAtualizarElemento}: EdicaoInputsProps)
{
    return (
    <>
        <div className="formulario">
            <label>Conteúdo</label>
            <input name="conteudo" value={elemento.conteudo} onChange={onAtualizarElemento} />

            <label >Posição Horizontal</label>
            <input type="range" name="x" min={0} max={400} value={elemento.x} onChange={onAtualizarElemento} />

            <label >Posição Vertical</label>
            <input type="range" name="y" min={0} max={400} value={elemento.y} onChange={onAtualizarElemento} />

            {elemento.tipo === 'texto' && (
            <>
                <label>Cor</label>
                <input type="color" name="cor" value={elemento.cor} onChange={onAtualizarElemento} />

                <label >Tamanho da Fonte</label>
                <input type="range" min= {1} max={80} name="tamanho" value={elemento.tamanho} onChange={onAtualizarElemento} />
            </>
            )}
            {elemento.tipo === 'imagem' && (
            <>
                <label>Altura</label>
                <input type="range" name="altura" min={5} max={400} value={elemento.altura || 100} onChange={onAtualizarElemento} /> 
                <label>Largura</label>
                <input type="range" name="largura" min={5} max={400} value={elemento.largura || 100} onChange={onAtualizarElemento} />  
            </>
            )}
        </div>
    </>
    )
}