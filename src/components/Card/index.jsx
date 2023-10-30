import { Container } from "./styles";

export function Card({ image }) {
  return (
    <Container>
      <img src={"/src/assets/" + { image }.image} alt="" />
    </Container>
  );
}
