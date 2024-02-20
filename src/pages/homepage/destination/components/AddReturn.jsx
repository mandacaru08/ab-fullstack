import PropTypes from "prop-types";
import styled from "styled-components";
import { MdRepeat } from "react-icons/md";

const Container = styled.div`
  height: 30px;
  width: 230px;
  margin-bottom: 30px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;

  svg {
    height: 100%;
    width: 15px;
  }
`;

function AddReturn({ setShowReturnField }) {
  return (
    <Container onClick={() => setShowReturnField(true)}>
      <MdRepeat />
      <span>Adicionar viagem de retorno</span>
    </Container>
  );
}

AddReturn.propTypes = {
  setShowReturnField: PropTypes.func.isRequired,
};

export default AddReturn;
