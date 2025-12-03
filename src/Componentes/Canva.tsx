import type { CSSProperties } from "react";
import type { Elemento } from "./interfaces.tsx";

interface CanvaProps {
    elementos: Elemento[];
    selecionada: (id: number) => void;
}

export default function Canva({elementos, selecionada}: CanvaProps) {
    if (elementos.length === 0) return <div className="canva-vazio">Adicione algo...</div>;
    return (
        <div className="card-moldura">
            {elementos.map((item) => {
                const style:  CSSProperties = {
                position: 'absolute',
                left: `${item.x}px`,
                top: `${item.y}px`,
                color: item.cor,
                fontSize: `${item.tamanho}px`,
                cursor: 'pointer'
                };

                if(item.tipo === 'imagem') {
                    const imgStyle: CSSProperties = {
                        position: 'absolute',
                        left: `${item.x}px`,
                        top: `${item.y}px`,
                        width: item.largura ? `${item.largura}px` : '100px',
                        height: item.altura ? `${item.altura}px` : '100px',
                        cursor: 'pointer',
                        objectFit: 'fill'
                    };
                    return <img key={item.id} src={item.conteudo} style={imgStyle} 
                        className="item-movel" onClick={() => selecionada(item.id)} />;
                }
                return <div key={item.id} style={style} className="item-movel"
                    onClick={() => selecionada(item.id)}>{item.conteudo}</div>;
            })}
            
        </div>
    );
}


