import PropTypes from "prop-types";
import Button from "../../../components/Button";

const AuthSubmitButton = ({ children, onClick, disabled }) => {
  return (
    <Button
      type="submit"
      disabled={disabled}
      backgroundColor="#7979FF"
      fontColor="#FFFFFF"
      size="large"
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

AuthSubmitButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

export default AuthSubmitButton;