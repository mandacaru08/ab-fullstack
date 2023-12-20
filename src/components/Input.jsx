import styled from "styled-components";

const InputVariants = {
  default: {
    height: "42px",
    backgroundColor: "#F0F3F5",
    borderRadius: "4px",
    labelPosition: "absolute",
    labelTop: "-22px",
    flexDirection: "column",
  },
  custom: {
    height: "64px",
    top: "50%",
    left: "5px",
    zIndex: "0",
    fontSize: "12px",
    borderRadius: "4px",
    labelPosition: "absolute",
    labelTop: "50%",
    flexDirection: "column",
    backgroundColor: "#F0F3F5",
  },
  radio: {
    height: "16px",
    borderRadius: "50%",
    labelTop: "0",
    flexDirection: "row",
    labelPosition: "relative",
  },
  checked: {
    content: "",
    height: "10px",
    borderRadius: "3px",
    labelTop: "0",
    flexDirection: "row",
    labelPosition: "relative",
  },
};

const InputContainer = styled.div`
  ${({ inputVariant, width, isFocusedOrFilled, isInputValid }) => {
    const height = InputVariants[inputVariant]?.height || "52px";
    const widthSize = InputVariants[inputVariant]?.width || width;
    const borderRadius = InputVariants[inputVariant]?.borderRadius || "4px";
    const flexDirection = InputVariants[inputVariant]?.flexDirection;
    const labelPosition = InputVariants[inputVariant]?.labelPosition;
    const backgroundColor = InputVariants[inputVariant]?.backgroundColor;
    const labelTop =
      inputVariant == "custom" && isFocusedOrFilled
        ? "5px"
        : InputVariants[inputVariant]?.labelTop;

    return `
      height: ${height};
      width: ${widthSize};
      border-radius: ${borderRadius};
      position: relative;
      display: flex;
      flex-direction: ${flexDirection};
      box-sizing: border-box;
      background-color: ${backgroundColor};
      transition: all 0.5s;

      svg {
        font-size: 20px;
        position: absolute;
        right: 8px;
        top: 50%;
        transform: translateY(-50%);
      }

      label {
        position: ${labelPosition};
        z-index: 0;
        left: 5px;
        top: ${labelTop};
        font-size: ${
          inputVariant !== "custom" || isFocusedOrFilled ? "12px" : "16px"
        };
        pointer-events: none;
        transition: all 0.5s;
      }

      span {
        font-size: 22px;
        font-weight: 700;
        color: #c50014;
      }
    `;
  }}
`;

const InputStyled = styled.input`
  height: 100%;
  width: 100%;
  position: relative;
  padding: ${({ type }) => type == "text"? "8px 16px" : "0"};
  box-sizing: border-box;
  border-radius: ${({ inputVariant }) =>
    InputVariants[inputVariant]?.borderRadius || "4px"};

  &[type="radio"] {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    border: 1px solid #282d37;
    margin-right: 8px;
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
  }

  input[type="checkbox"] {
    width: 20px;
    height: 20px;
    border-radius: 3px;
    background-color: ${({ checked }) => checked ? "#282D37" : ""};
    cursor: pointer;
  }
`;

const RequiredInput = ({ labelName }) => {
  return (
    <label>
      {labelName}
      <span>*</span>
    </label>
  );
};

function Input({
  id,
  type,
  inputVariant,
  name,
  icon,
  width,
  checked,
  label,
  value,
  required,
  placeholder,
  onBlur,
  onClick,
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
      onClick={onClick}
    >
      {required && (type != "radio" && type != "checkbox") ? (
        <RequiredInput labelName={label} />
      ) : label && type == "text" && (
        <label>{label}</label>
      )}
      <InputStyled
        id={id}
        name={name}
        type={type}
        value={value}
        width={width}
        inputVariant={inputVariant}
        placeholder={placeholder}
        required={required}
        checked={checked}
        readOnly={type === "radio" || type === "checkbox"}
        onBlur={onBlur}
        onFocus={onFocus}
        onChange={onChange}
      />
      {(type == "radio" || type == "checkbox") && <label>{label}</label>}
      {icon  && icon}
    </InputContainer>
  );
}

export default Input;
