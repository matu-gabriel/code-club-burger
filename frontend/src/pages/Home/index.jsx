import {
  Container,
  Title,
  ContainerItens,
  InputLabel,
  Input,
  Button,
  Image,
} from "./style";

import Logo from "../../assets/logo2.png";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const addUser = () => {
    navigate("/orders");
  };

  return (
    <>
      <Container>
        <Image src={Logo} />
        <ContainerItens>
          <Title>Faça seu pedido</Title>

          <InputLabel>Pedido</InputLabel>
          <Input placeholder="1 Coca-Cola, 1 X-salada" />

          <InputLabel>Nome do cliente</InputLabel>
          <Input placeholder="Steve Jobs" />

          <Button onClick={addUser}>Novo pedido</Button>
        </ContainerItens>
      </Container>
    </>
  );
}

export default Home;
