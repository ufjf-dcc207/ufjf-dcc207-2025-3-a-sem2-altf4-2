import Star from '../assets/star.png';

interface NivelProps {
    nivel?: number;
}

export default function Nivel({ nivel = 1 }: NivelProps) {
    return (
        <div className="nivel">
            {Array.from({ length: nivel }, (_, index) => (
                <img key={index} src={Star} alt="Estrela" />
            ))}
        </div>
    );
}
