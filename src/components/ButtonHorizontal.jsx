import styled from "styled-components";

const buttonVariants = {
  small: {
    height: "40px",
    width: "90px",
    borderRadius: "3px",
  },
  medium: {
    height: "52px",
    width: "120px",
    borderRadius: "3px",
  },
  large: {
    height: "56px",
    width: "345px",
    borderRadius: "3px",
  },
};

const ButtonHorizontalStyled = styled.button`
  height: ${(props) =>
    props.size ? buttonVariants[props.size]?.height : "40px"};
  width: ${(props) =>
    props.size ? buttonVariants[props.size]?.width : "120px"};
  border-radius: ${(props) => 
    props.size ? buttonVariants[props.size]?.borderRadius : "none" };
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "transparent"};
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
  size,
}) {
  return (
    <ButtonHorizontalStyled
      className={className}
      backgroundColor={backgroundColor}
      fontColor={fontColor}
      size={size}
      onClick={onClick}
    >
      {children}
    </ButtonHorizontalStyled>
  );
}

export default ButtonHorizontal;
