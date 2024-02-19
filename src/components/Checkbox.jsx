import PropTypes from "prop-types";
import styled from "styled-components";

const InputContainer = styled.div`
  height: 20px;
  width: fit-content;
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  border-radius: 3px;
  font-size: 12px;
  transition: all 0.5s;

  label {
    height: 12px;
    pointer-events: none;
  }

  svg {
    width: 18px;
    height: 18px;
    color: #636973;
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    cursor: pointer;
  }
`;

const InputStyled = styled.input`
  height: 20px;
  width: 20px;
  margin-left: 14px;
  position: relative;
  box-sizing: border-box;
  border: 1px solid #282d37;
  border-radius: 3px;
  background-color: ${({ checked }) => (checked ? "#282D37" : "")};
  cursor: pointer;
`;

function Checkbox({ checked, label, onClick, icon }) {
  return (
    <InputContainer onClick={onClick}>
      {label && <label>{label}</label>}
      <InputStyled readOnly checked={checked} />
    </InputContainer>
  );
}

Checkbox.propTypes = {
  checked: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.element,
};

export default Checkbox;
