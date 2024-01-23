import PropTypes from "prop-types";
import styled from "styled-components";

export default function MeaningOfSymbol({ children }) {
  return <Container>{children}</Container>;
}

MeaningOfSymbol.propTypes = {
  children: PropTypes.node.isRequired,
};

const Container = styled.ul`
  height: 100%;
  width: 65%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  li {
    height: fit-content;
    width: 100%;
    padding: 0 0 10px 60px;
    box-sizing: border-box;
    position: relative;
  }
  svg,
  h6 {
    font-size: 20px;
    margin-left: 16px;
    position: absolute;
    left: 0;
    top: 0;
  }
`;
