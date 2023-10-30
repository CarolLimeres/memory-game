import { cardData } from "../../services/api";
import { Card } from "../../components/Card";
import { Container } from "./styles";

export function Game() {
  return (
    <Container>
      <h1>Memory Game</h1>
      <div>
        {cardData.map((card) => (
          <Card key={card.id} image={card.image}></Card>
        ))}
      </div>
    </Container>
  );
}
