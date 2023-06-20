import { ReactNode } from "react";
import { Container } from "./styles";

interface IForm {
  children: ReactNode;
}
export function Form({ children }: IForm) {
  return <Container>{children}</Container>;
}
