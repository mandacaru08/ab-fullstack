import PropTypes from "prop-types"; 
import styled from "styled-components";
import Bar from "./Bar";

export default function CurrentPurchaseStep({ children }) {
  return (
    <Container>
      <Bar />
      <Content>{children}</Content>
    </Container>
  );
}

CurrentPurchaseStep.propTypes = {
  children: PropTypes.node.isRequired,
};

const Container = styled.div`
  height: auto;
  width: 1024px;
  padding: 0 20px;
  box-sizing: border-box;
  margin-bottom: 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.4);

  @media (max-width: 1200px) {
    padding: 0 10%;
  }
  @media (max-width: 1080px) {
    padding: 0 5%;
  }

  @media (max-width: 770px) {
    padding: 0 0;
  }
`;

const Content = styled.div`
  height: auto;
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
