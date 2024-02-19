import styled from "styled-components";

export default function PleaseNote() {
  return (
    <Container>
      <div style={{ width: "100%" }}>
        <h3>Atenção</h3>
      </div>
      <ul>
        <li>
          <span>Todas as informações são emitidas sem responsabilidade</span>
        </li>
      </ul>
      <ul>
        <li>
          <span>
            Devido à falta de dados em tempo real de algumas transportadoras de
            terceiros, os detalhes da conexão podem não ser totalmente precisos.
          </span>
        </li>
      </ul>
    </Container>
  );
}

const Container = styled.div`
  height: 100%;
  width: 35%;
  padding: 0 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;

  ul {
    margin-bottom: 16px;
  }
`;
