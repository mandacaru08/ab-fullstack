import styled from "styled-components";

const InputVariants = {
  default: {
    height: "42px",
    labelTop: "-22px",
  },
  custom: {
    width: "100%",
    height: "64px",
    top: "50%",
    left: "5px",
    zIndex: "0",
    fontSize: "12px",
    labelTop: "50%",
  },
};

const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  border-radius: 4px;
  background-color: #f0f3f5;
  width: ${({ width }) => width || "100%"};
  height: ${({ variant }) => InputVariants[variant]?.height};

  svg {
    cursor: pointer;
  }

  label {
    transform: translateY(-50%);
    position: absolute;
    left: 5px;
    top: ${({ variant, isFocusedOrFilled }) =>
      variant == "custom" && isFocusedOrFilled
        ? "8px"
        : InputVariants[variant]?.labelTop};
    font-size: ${({ variant, isFocusedOrFilled }) =>
      variant !== "custom" || isFocusedOrFilled ? "12px" : "16px"};
    pointer-events: none;
    transition: all 0.5s;
  }
`;

const InputStyled = styled.input`
  width: 100%;
  position: relative;
  box-sizing: border-box;
  padding: 8px 16px;
  box-sizing: border-box;
  border-radius: 4px;
  height: ${({ variant }) => InputVariants[variant]?.height};
`;

const RequiredInput = ({ label }) => {

  console.log(label)
  return (
    <label>
      {label}
      <span>*</span>
    </label>
  );
};

function TextInput({
  id,
  variant,
  width,
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
  icon,
}) {
  return (
    <InputContainer
      variant={variant}
      width={width}
      isFocusedOrFilled={isFocusedOrFilled}
      isInputValid={isInputValid}
      onClick={onClick}
    >
      {required ? (
        <RequiredInput label={label} />
      ) : (
        label && <label>{label}</label>
      )}
      <InputStyled
        id={id}
        value={value}
        variant={variant}
        placeholder={placeholder}
        required={required}
        onBlur={onBlur}
        onFocus={onFocus}
        onChange={onChange}
      />
      {icon}
    </InputContainer>
  );
}

export default TextInput;
