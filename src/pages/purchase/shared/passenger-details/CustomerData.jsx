import styled from "styled-components";

import CustomerGreetings from "./CustomerGreetings";

export default function CustomerData() {
  return (
    <Container>
      <h4>
        Você ainda não tem uma conta de cliente?
        <span>Por favor, entre com os detalhes para esta reserva</span>
      </h4>
      <CustomerGreetings />
    </Container>
  );
}

const Container = styled.section`
  height: 282px;
  width: 100%;
  padding: 20px 140px 20px 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  border-radius: 4px 4px 0 0 !important;

  h4 {
    height: 52px;
    width: 100%;
    padding: 20px 0;
    font-size: 1em;
    font-weight: 700;
    line-height: 22px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  span {
    font-size: 14px;
    font-weight: 400;
  }
`;
