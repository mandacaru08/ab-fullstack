import styled from "styled-components";

const InputVariants = {
  default: {
    height: "52px",
    backgroundColor: "#F0F3F5",
    borderRadius: "4px",
    labelPosition: "absolute",
    labelTop: "-22px"
  },
  custom: {
    height: "64px",
    top: "50%",
    left: "5px",
    zIndex: "0",
    fontSize: "12px",
    borderRadius: "4px",
    labelPosition: "absolute",
    labelTop: "50%"
  },
  radio: {
    width: "16px",
    height: "16px",
    borderRadius: "50%",
    labelTop: "0"
  }, 
  checked: {
    content: "",
    width: "10px",
    height: "10px",
    borderRadius: "3px",
    labelTop: "0"
  }
};

const InputContainer = styled.div`
  ${({ inputVariant, width, bgColor, isFocusedOrFilled, isInputValid }) => {
    const height = InputVariants[inputVariant]?.height || "52px";
    const widthSize = InputVariants[inputVariant]?.width || width;
    const borderRadius = InputVariants[inputVariant]?.borderRadius || "4px";
    const labelTop = inputVariant == "custom" && isFocusedOrFilled ? "5px" : InputVariants[inputVariant]?.labelTop;

    return `
      height: ${height};
      width: ${widthSize};
      border-radius: ${borderRadius};
      background-color: ${bgColor? bgColor : "#F0F3F5"};
      position: relative;
      display: flex;
      flex-direction: row;
      box-sizing: border-box;
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
        z-index: 0;
        left: 5px;
        top: ${labelTop};
        font-size: ${inputVariant !== "custom" || isFocusedOrFilled ? "12px" : "16px"};
        pointer-events: none;
        transition: all 0.5s;
      }
    `;
  }}
`;

const InputStyled = styled.input`
  height: 100%;
  width: 100%;
  position: relative;
  padding: 8px 16px;
  box-sizing: border-box;

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

const RequiredInput = ({labelName}) =>  {
  return (
    <label>{labelName}<span>*</span></label>
  );
}

function Input({
  id,
  type,
  inputVariant,
  name,
  icon,
  width,
  bgColor,
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
      inputVariant={inputVariant}
      width={width}
      isFocusedOrFilled={isFocusedOrFilled}
      isInputValid={isInputValid}
    >
      {type === "text" && required? <RequiredInput labelName={label}/> : <label >{label}</label>}
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
