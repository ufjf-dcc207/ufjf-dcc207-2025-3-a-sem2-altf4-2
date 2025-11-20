import "./BotaoNovoDeck.css";

export default function BotaoNovoDeck({ onClick }: { onClick: () => void }) {
  return (
    <div className="container-botao">
      <button className="btn-novo-deck" onClick={onClick}>
        Criar Novo Deck
      </button>
    </div>
  );
}
