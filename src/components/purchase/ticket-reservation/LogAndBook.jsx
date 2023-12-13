import styled from "styled-components";
import ButtonHorizontal from "../../ButtonHorizontal";

export default function LogAndBook() {
  return (
    <Container>
      <h4>
        Log in e Reserva
        <span>
          Você já tem uma conta de cliente? Por favor, preencha os detalhes de
          acesso no próximo passo.
        </span>
      </h4>
      <ButtonContainer>
        <ButtonHorizontal
          size="medium"
          fontColor="#FFFFFF"
          backgroundColor="#EC0016"
        >
          Continue para logar
        </ButtonHorizontal>
      </ButtonContainer>
    </Container>
  );
}

const Container = styled.div`
  height: 170px;
  width: 100%;
  margin-bottom: 20px;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #ffffff;
  border-radius: 4px;

  h4 {
    height: 52px;
    width: 100%;
    font-size: 1em;
    font-weight: 700;
    line-height: 22px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  span {
    font-weight: 400;
  }
`;

const ButtonContainer = styled.div`
  height: 64px;
  width: 100%;
  display: flex;
  justify-content: right;
  align-items: center;

  button {
    height: 44px;
    width: fit-content;
    font-size: 16px;
    font-weight: 700;
    color: #ffffff;
    background-color: #ec0016;
    border-radius: 4px;
    padding: 14px 16px;
    box-sizing: border-box;

    :hover {
      cursor: pointer;
      background-color: #9b000e;
    }
  }
`;
