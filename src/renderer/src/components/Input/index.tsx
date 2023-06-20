import { Container } from "./styles";

interface IInput {
  type: string;
  alt: string;
  id: string;
  name: string;
  placeholder: string;
}

export function Input({ type, alt, id, name, placeholder }: IInput) {
  return (
    <>
      <Container
        type={type}
        alt={alt}
        placeholder={placeholder}
        id={id}
        name={name}
      />
    </>
  );
}
