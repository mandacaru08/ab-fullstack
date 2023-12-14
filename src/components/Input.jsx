import styled from "styled-components";

const InputVariants = {
  default: {
    backgroundColor: "#F0F3F5",
  },
  custom: {
    labelPosition: "absolute",
    top: "50%",
    zIndex: "0",
    left: "5px",
    fontSize: "12px",
  },
};

const InputContainer = styled.div`
  height: 65px;
  width: 45%;
  position: relative;
  box-sizing: border-box;
  border-bottom: 0.0625rem solid #878c96;
  border-radius: 0.25rem;
  background-color: #f0f3f5;

  svg {
    font-size: 20px;
    position: absolute;
    right: 8px;
    top: 50%;
    transform: translateY(-50%);
  }

  input {
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    padding: 32px 16px 8px 16px;
    border-style: none;
    background-color: #f0f3f5;
  }

  label {
    position: absolute;
    top: 8px;
    left: 16px;
    font-size: 0.75rem;
  }

  transition: all 0.5s;
`;

const InputStyled = styled.input`
  position: relative;
  margin-right: 5px;
  border: 1px solid #282d37;
  outline: none;

  &[type="radio"] {
    width: 16px;
    height: 16px;
    border-radius: 50%;

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
  }
`;

function Input({ type, id, value, name, placeholder, onChange, required }) {
  return (
    <InputContainer>
      {type === "text" && <label>{label}</label>}
      <InputStyled
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChange}
        name={name}
        id={id}
        required={required}
        readOnly={type === "radio"}
      />
      {type !== "text" && <label readOnly>{label}</label>}
    </InputContainer>
  );
}

export default Input;
