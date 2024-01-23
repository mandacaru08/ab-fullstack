import PropTypes from "prop-types";
import styled from "styled-components";

function MoreInfos({ showMessage }) {
  return (
    <Container show={showMessage}>
      <Message>
        <h3>
          O que significa mostrar conexões mais rápidas?
          <br></br>
          <br></br>
          Quando você procura uma conexão, mostramos apenas a conexão mais
          rápida para o horário que você deseja viajar e as conexões mais
          rápidas com partida posterior (pesquisa de partida) ou as conexões
          mais rápidas que chegam antes de um horário específico (pesquisa de
          chegada).
        </h3>

        <h3>
          Se necessário, também mostraremos uma conexão com menos baldeações e
          um tempo de viagem mais longo do que a conexão mais rápida;
        </h3>
      </Message>
      <BallonShape></BallonShape>
    </Container>
  );
}

MoreInfos.propTypes = {
  showMessage: PropTypes.bool.isRequired,
};

export default MoreInfos;

const Container = styled.div`
  height: 270px;
  width: 500px;
  box-sizing: border-box;
  padding: 16px;
  position: absolute;
  z-index: 10;
  bottom: 40px;
  left: -15px;

  border-radius: 0.5rem;
  background-color: #ffffff;
  box-shadow: 0 0 12px -2px rgba(0, 0, 0, 0.5);
  opacity: ${({ show }) => (show ? "1" : "0")};
  transition: opacity 2s ease-in;
`;

const Message = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  h3 {
    font-weight: 400;
    line-height: 22px;
    color: #282d37;
  }
`;

const BallonShape = styled.div`
  height: 16px;
  width: 16px;
  transform: rotate(45deg);
  background-color: #ffffff;
  box-shadow: 3px 3px 3px 0 rgba(0, 0, 0, 0.12);

  position: absolute;
  bottom: -8px;
  left: 24px;
`;
