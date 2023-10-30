import { useState } from "react";
import { Card } from "../../components/Card";
import { Container } from "./styles";

export function Game() {
  const [cards, setCards] = useState([
    { id: 1, pairId: 1, show: false, image: "babyCapy.jpg" },
    { id: 2, pairId: 2, show: false, image: "capyEating.jpg" },
    { id: 3, pairId: 3, show: false, image: "capyLettuce.jpg" },
    { id: 4, pairId: 4, show: false, image: "capyOrange.jpg" },
    { id: 5, pairId: 5, show: false, image: "capyRelax.jpg" },
    { id: 6, pairId: 6, show: false, image: "capyWithBabies.jpg" },
    { id: 7, pairId: 7, show: false, image: "capyWithBird.jpg" },
    { id: 8, pairId: 8, show: false, image: "capyWithPups.jpg" },
    { id: 9, pairId: 9, show: false, image: "albinoCapy.jpeg" },
    { id: 10, pairId: 1, show: false, image: "babyCapy.jpg" },
    { id: 11, pairId: 2, show: false, image: "capyEating.jpg" },
    { id: 12, pairId: 3, show: false, image: "capyLettuce.jpg" },
    { id: 13, pairId: 4, show: false, image: "capyOrange.jpg" },
    { id: 14, pairId: 5, show: false, image: "capyRelax.jpg" },
    { id: 15, pairId: 6, show: false, image: "capyWithBabies.jpg" },
    { id: 16, pairId: 7, show: false, image: "capyWithBird.jpg" },
    { id: 17, pairId: 8, show: false, image: "capyWithPups.jpg" },
    { id: 18, pairId: 9, show: false, image: "albinoCapy.jpeg" },
  ]);

  function handleCardExchange(id) {
    const cardSelected = cards.map((card) => {
      if (card.id === id) {
        return { ...card, show: !card.show };
      }
      return card;
    });

    setCards(cardSelected);
  }

  return (
    <Container>
      <h1>Memory Game</h1>
      <div>
        {cards.map((card) => (
          <Card
            key={card.id}
            image={card.image}
            onClick={() => {
              handleCardExchange(card.id);
            }}
            show={card.show}
          ></Card>
        ))}
      </div>
    </Container>
  );
}
