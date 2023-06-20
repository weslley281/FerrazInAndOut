import { Form } from "./components/Form";
import { Input } from "./components/Input";
import { Logo } from "./components/Logo";
import { Menu } from "./components/Menu";
import { Title } from "./components/Title";

function App(): JSX.Element {
  return (
    <div className="container">
      <Menu />
      <div className="center">
        <Logo />
        <Title text="Bater o ponto" />
      </div>

      <Form>
        <Input
          id="userId"
          name="userId"
          placeholder="Seu Id de Usuário"
          type="text"
          alt="Id"
        />

        <Input
          id="userId"
          name="userId"
          placeholder="Sua Senha"
          type="password"
          alt="Id"
        />
      </Form>
    </div>
  );
}

export default App;
