import styled from "styled-components";

const IconContainer = styled.div`
  ${({size, color, position}) => {
    return `
      height: 100%;
      width: calc(${size} + 14px);
      color: ${color};
      position: ${position};
      position: relative;
      font-weight: bold;
      display: flex;
      justify-content: center;
      align-items: center;
    
      svg {
        font-size: ${size};
      }
    `;
  }}
  
`;

function Icon({ icon, size, color, onClick }) {
  return (
    <IconContainer size={size} color={color} onClick={onClick}>
      {icon}
    </IconContainer>
  );
}

export default Icon;
