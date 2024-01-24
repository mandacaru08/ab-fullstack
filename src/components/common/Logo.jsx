import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Container = styled.div`
  height: 100%;
  width: fit-content;
  display: grid;
  place-items: center;

  img {
    height: 108px;
    width: 108px;
    animation: ${rotate} 46s linear infinite;
  }
`;

function Logo() {
  return (
    <Container>
      <img src="../../../public/timao.svg" alt="logo"/>
    </Container>
  );
}

export default Logo;
