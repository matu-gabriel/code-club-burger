import {
  Container,
  Title,
  ContainerItens,
  InputLabel,
  Input,
  Button,
  Image,
} from "./style";

import { useState, useRef } from "react";
import axios from "axios";

import Logo from "../../assets/logo2.png";
import { useNavigate } from "react-router-dom";

function Home() {
  const [list, setList] = useState([]);
  const name = useRef();
  const order = useRef();

  const navigate = useNavigate();

  const addOrder = async () => {
    if (name.current.value == "" || order.current.value == "") {
      return;
    }
    const { data: newData } = await axios.post("http://localhost:3333/orders", {
      name: name.current.value,
      order: order.current.value,
    });
    setList([...list, newData]);
    navigate("/orders");
  };

  return (
    <>
      <Container>
        <Image src={Logo} />
        <Title>Faça seu pedido</Title>
        <ContainerItens>
          <InputLabel>Pedido</InputLabel>
          <Input ref={order} placeholder="1 Coca-Cola, 1 X-salada" />

          <InputLabel>Nome do cliente</InputLabel>
          <Input ref={name} placeholder="Steve Jobs" />

          <Button onClick={addOrder}>Novo pedido</Button>
        </ContainerItens>
      </Container>
    </>
  );
}

export default Home;
