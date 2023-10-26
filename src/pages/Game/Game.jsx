import { cardData } from "../../services/api";

export function Game() {
  return (
    <div>
      <h1>Memory Game</h1>
      {cardData.map((card) => (
        <div key={card.id}>
          <img src={"/src/assets/" + card.image} alt="" />
        </div>
      ))}
    </div>
  );
}
