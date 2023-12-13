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

const ButtonStyled = styled.button`
  ${({ size, backgroundColor, fontColor, fontSize, position, borderRadius }) => {
    const buttonSize = buttonVariants[size] || {};
    const border = backgroundColor ? "none" : "1px solid #282D37";
    const bgColor = backgroundColor || "transparent";
    const color = fontColor || "#282D37";
    const buttonFontSize = fontSize || "16px";
    const radius = buttonSize.borderRadius || borderRadius;
    const pos = position ? "absolute" : "relative";
    const top = position ? "0" : "auto";
    const right = position === "right" ? "0" : "auto";
    const left = position === "left" ? "0" : "auto";

    return `
      height: ${buttonSize.height || "auto"};
      width: ${buttonSize.width || "auto"};
      min-width: 32px;
      border: ${border};
      border-radius: ${radius};
      background-color: ${bgColor};
      color: ${color};
      font-size: ${buttonFontSize};
      position: ${pos};
      top: ${top};
      right: ${right};
      left: ${left};
      :hover {
        cursor: pointer;
        opacity: 0.8;
      };
    `;
  }};
`;

function Button({
  children,
  onClick,
  className,
  ...props
}) {
  return (
    <ButtonStyled
      className={className}
      onClick={onClick}
      {...props}
    >
      {children}
    </ButtonStyled>
  );
}

export default Button;
