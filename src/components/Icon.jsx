import PropTypes from "prop-types";
import styled from "styled-components";

const IconContainer = styled.div`
  ${({size, color, position}) => {
    return `
      height: 100%;
      width: calc(${size} + 14px);
      color: ${color};
      position: ${position || "absolute"};
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

Icon.propTypes = {
  icon: PropTypes.element.isRequired,
  size: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
};

export default Icon;
