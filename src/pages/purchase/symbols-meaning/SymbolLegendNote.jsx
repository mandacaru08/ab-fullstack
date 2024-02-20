import PropTypes from "prop-types";
import styled from "styled-components";

export default function SymbolLegendNote({ children }) {
  return <Container>{children}</Container>;
}

SymbolLegendNote.propTypes = {
  children: PropTypes.node.isRequired,
};

const Container = styled.div`
  height: 320px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
  background-color: #ffffff;

  div {
    margin-bottom: 16px;
  }
  h3 {
    font-size: 21px;
  }
  span {
    font-size: 14px;
    flex-wrap: wrap;
  }
`;
