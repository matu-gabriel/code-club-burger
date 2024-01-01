import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  gap: 20px;
`;

export const Image = styled.img`
  margin: 20px;
  height: 250px;
`;

export const Title = styled.h1`
  color: #fff;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 10px;
  text-align: center;
`;

export const ContainerItens = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin-bottom: 15px;
  /* padding: 2rem; */
`;

export const ListOrder = styled.li`
  background-color: rgba(255, 255, 255, 0.25);
  border: none;
  padding: 0 25px;
  border-radius: 14px;
  color: #fff;
  display: flex;
  align-items: center;
  gap: 20px;
  justify-content: space-between;
  width: 100%;
  height: 100px;
  margin: 30px 0;
  font-size: 18px;
  outline: none;
  list-style: none;

  p {
    margin: 15px 0;
    font-weight: 200;
  }

  p:last-child {
    font-weight: 700;
  }

  button {
    cursor: pointer;
    border: none;
    background-color: transparent;
  }
`;

export const Button = styled.button`
  background: rgba(255, 255, 255, 0.14);
  width: 100%;
  height: 55px;
  padding: 0 112px;
  border: none;
  border-radius: 10px;
  font-size: 17px;
  cursor: pointer;
`;
