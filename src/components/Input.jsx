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
  ${({ type, width, isFocusedOrFilled, isInputValid }) => {
    const height = type === "radio" ? "16px" : "65px";
    const widthSize = type === "radio" ? "16px" : width;
    const borderRadius = type === "custom" ? "100%" : "0.25rem";
    const borderBottom = isInputValid
      ? "1px solid #D9D9D9"
      : "1px solid #ff6767c4";
    const backgroundColor = isInputValid ? "transparent" : "#ff9a9ac4";
    const labelPosition = isFocusedOrFilled ? "0" : "50%";

    return `
      height: ${height};
      width: ${widthSize};
      border-bottom: ${borderBottom};
      border-radius: ${borderRadius};
      background-color: ${backgroundColor};
      position: relative;
      display: flex;
      flex-direction: row;
      box-sizing: border-box;
      padding: 32px 16px 8px 16px;

      transition: all 0.5s;

      svg {
        font-size: 20px;
        position: absolute;
        right: 8px;
        top: 50%;
        transform: translateY(-50%);
      }

      label {
        position: absolute;
        left: 5px;
        z-index: 0;
        pointer-events: none;
        top: ${isFocusedOrFilled ? 0 : "50%"};
        font-size: ${isFocusedOrFilled ? "12px" : "16px"};
        transition: all 0.5s;
      }
    `;
  }}
`;

const InputStyled = styled.input`
  border-style: none;
  height: 100%;
  width: 100%;
  position: relative;
  margin-right: 5px;
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

function Input({
  id,
  type,
  name,
  icon,
  width,
  label,
  value,
  required,
  placeholder,
  onBlur,
  onFocus,
  onChange,
  isInputValid,
  isFocusedOrFilled,
}) {
  return (
    <InputContainer
      width={width}
      isFocusedOrFilled={isFocusedOrFilled}
      isInputValid={isInputValid}
    >
      {type === "text" && <label >{label}</label>}
      <InputStyled
        placeholder={placeholder}
        width={width}
        type={type}
        value={value}
        onBlur={onBlur}
        onFocus={onFocus}
        onChange={onChange}
        name={name}
        id={id}
        required={required}
        readOnly={type === "radio"}
      />
      {type !== "text" && <label>{label}</label>}
      {icon !== undefined && icon}
    </InputContainer>
  );
}

export default Input;
