import { Button } from "./style";

interface IButton {
  name: string;
}

export function ButtonGeneric({ name }: IButton) {
  return (
    <div>
      <Button>{name}</Button>
    </div>
  );
}
