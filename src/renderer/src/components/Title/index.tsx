import { Container } from "./styles";

interface ITitle {
  text: string;
}

export function Title({ text }: ITitle) {
  return <Container>{text}</Container>;
}
