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
  margin-bottom: 30px;
  text-align: center;
`;

export const ContainerItens = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  /* padding: 2rem; */
`;

export const InputLabel = styled.p`
  padding-left: 10px;
  color: #fff;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: -0.408px;
`;

export const Input = styled.input`
  margin-bottom: 17px;
  font-size: 15px;
  border: none;
  padding: 13px 10px;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.25);
  color: rgba(255, 255, 255, 0.7);
  outline: none;
`;

export const Button = styled.button`
  background-color: #d93856;
  width: 100%;
  height: 50px;
  padding: 0 112px;
  border: none;
  border-radius: 10px;
  font-size: 17px;
  cursor: pointer;
`;
