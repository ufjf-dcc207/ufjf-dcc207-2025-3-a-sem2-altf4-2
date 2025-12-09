import type { Elemento } from "./interfaces.tsx";
import type { ChangeEvent } from "react";   

interface EditorInputsProps
{
    elemento: Elemento;
    atualizarElemento: (e: ChangeEvent<HTMLInputElement>) => void;
    apagarElemento: (id: number) => void;
}

export default function EditorInputs({elemento, atualizarElemento, apagarElemento}: EditorInputsProps)
{
    return (
    <>
        <div className="formulario">
            <label>Conteúdo</label>
            <input type="text" name="conteudo" value={elemento.conteudo} onChange={atualizarElemento} />

            <label >Posição Horizontal</label>
            <input type="range" name="posicaoHorizontal" min={-25} max={400} value={elemento.posicaoHorizontal} onChange={atualizarElemento} />

            <label >Posição Vertical</label>
            <input type="range" name="posicaoVertical" min={-40} max={550} value={elemento.posicaoVertical} onChange={atualizarElemento} />

            {elemento.tipo === 'texto' && (
            <>
                <label>Cor</label>
                <input type="color" name="cor" value={elemento.cor} onChange={atualizarElemento} />

                <label >Tamanho da Fonte</label>
                <input type="range" min= {8} max={80} name="tamanho" value={elemento.tamanho} onChange={atualizarElemento} />

                <label >Espessura da Fonte</label>
                <input type = "range" min ={0} max ={1000} name = "espessuraFonte" value = {elemento.espessuraFonte} onChange={atualizarElemento} />
            </>
            )}
            {elemento.tipo === 'imagem' && (
            <>
                <label>Altura</label>
                <input type="range" name="altura" min={5} max={400} value={elemento.altura || 100} onChange={atualizarElemento} /> 
                <label>Largura</label>
                <input type="range" name="largura" min={5} max={400} value={elemento.largura || 100} onChange={atualizarElemento} />  
            </>
            )}
            <button onClick={() => apagarElemento(elemento.id)}>🗑️</button>
        </div>
    </>
    )
}