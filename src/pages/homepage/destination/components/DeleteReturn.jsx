import PropTypes from "prop-types";
import styled from "styled-components";
import { FaRegTrashAlt } from "react-icons/fa";

const Container = styled.div`
  height: 30px;
  width: 200px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  cursor: pointer;
`;

function DeleteReturn({ setShowReturnField }) {
  return (
    <Container onClick={() => setShowReturnField(false)}>
      <FaRegTrashAlt />
      <span>Deletar Viagem de Volta</span>
    </Container>
  );
}

DeleteReturn.propTypes = {
  setShowReturnField: PropTypes.func.isRequired,
};

export default DeleteReturn;
