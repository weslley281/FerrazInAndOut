import logo from "../../assets/logo_ferraz.png";
import { Container, Image } from "./styles";

export function Logo() {
  return (
    <Container>
      <Image src={logo} />
    </Container>
  );
}
