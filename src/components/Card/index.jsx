import { Container } from "./styles";

export function Card({ image, onClick, show }) {
  return (
    <Container>
      {show ? (
        <img onClick={onClick} src={"/src/assets/" + { image }.image} alt="" />
      ) : (
        <img onClick={onClick} src={"/src/assets/card.jpg"} alt="" />
      )}
    </Container>
  );
}
