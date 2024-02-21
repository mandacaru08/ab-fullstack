import styled, { keyframes } from "styled-components";
import logo from '../../../public/timao.svg';

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
    height: ${({ size }) => size || '108px'};
    width: ${({ size }) => size || '108px'};
    animation: ${({ isAnimated }) => isAnimated ? `${rotate} 46s linear infinite` : '108px'};
  }
`;

function Logo({ size, isAnimated }) {
  return (
    <Container size={size}>
      <img src={logo} alt="logo"/>
    </Container>
  );
}

export default Logo;
