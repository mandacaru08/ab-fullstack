import PropTypes from "prop-types";
import styled from "styled-components";

const InputContainer = styled.div`
  height: 100%;
  width: 118px;
  display: flex;
  flex-direction: row;
  align-items: center;

  label {
    width: fit-content;
  }
`;

const InputStyled = styled.input`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 1px solid #282d37;
  margin-left: 8px;
  position: relative;
  box-sizing: border-box;
  cursor: pointer;

  &:checked::after {
    content: "";
    width: 10px;
    height: 10px;
    border: 5px solid #282d37;
    border-radius: 50%;
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

function RadioInput({ checked, label, onClick }) {
  return (
    <InputContainer>
      {label && <label>{label}</label>}
      <InputStyled readOnly type="radio" checked={checked} onClick={onClick} />
    </InputContainer>
  );
}

RadioInput.propTypes = {
  checked: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default RadioInput;
