import styled from "styled-components";

const buttonVariants = {
  small: {
    height: "40px",
    width: "90px",
    borderRadius: "3px",
  },
  medium: {
    height: "52px",
    width: "232px",
    borderRadius: "3px",
  },
  large: {
    height: "56px",
    width: "345px",
    borderRadius: "3px",
  },
  fitContent: {
    height: "100%",
    width: "fit-content",
  },
};

const ButtonHorizontalStyled = styled.button`
  height: ${(props) =>
    props.size ? buttonVariants[props.size]?.height : "40px"};
  width: ${(props) =>
    props.size ? buttonVariants[props.size]?.width : "120px"};
  border-radius: ${(props) =>
    props.size.borderRadius
      ? buttonVariants[props.size]?.borderRadius
      : props.borderRadius};
  border: ${(props) => (props.backgroundColor ? "none" : "1px solid #282D37")};
  background-color: ${(props) =>
    props.backgroundColor
      ? props.backgroundColor
      : "border: 1px solid #282D37"};
  color: ${(props) => (props.fontColor ? props.fontColor : "#232D37")};
  :hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

function ButtonHorizontal({
  children,
  onClick,
  className,
  backgroundColor,
  fontColor,
  borderRadius,
  size,
}) {
  return (
    <ButtonHorizontalStyled
      className={className}
      backgroundColor={backgroundColor}
      fontColor={fontColor}
      size={size}
      borderRadius={borderRadius}
      onClick={onClick}
    >
      {children}
    </ButtonHorizontalStyled>
  );
}

export default ButtonHorizontal;
