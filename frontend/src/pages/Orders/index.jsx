import {
  Container,
  Title,
  ContainerItens,
  ListOrder,
  Button,
  Image,
} from "./style";

import { useState, useEffect } from "react";
import axios from "axios";

import Logo from "../../assets/logo2.png";
import Trash from "../../assets/trash.svg";
import { useNavigate } from "react-router-dom";

function Orders() {
  const navigate = useNavigate();

  const [list, setList] = useState([]);

  useEffect(() => {
    const fetchList = async () => {
      const { data: getOrders } = await axios.get(
        "http://localhost:3333/orders"
      );

      setList(getOrders);
    };

    fetchList();
  }, []);

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:3333/orders/${id}`);
    const update = list.filter((user) => user.id !== id);
    setList(update);
  };

  const goToHome = () => {
    navigate("/");
  };

  return (
    <>
      <Container>
        <Image src={Logo} />
        <ContainerItens>
          <Title>Faça seu pedido</Title>
          <ul>
            {list.map((orders) => (
              <ListOrder key={orders.id}>
                <div>
                  <p>{orders.order}</p>
                  <p>{orders.name}</p>
                </div>
                <button onClick={() => deleteUser(orders.id)}>
                  <img src={Trash} alt="trash" />
                </button>
              </ListOrder>
            ))}
          </ul>
          <Button onClick={goToHome}>Voltar</Button>
        </ContainerItens>
      </Container>
    </>
  );
}

export default Orders;
