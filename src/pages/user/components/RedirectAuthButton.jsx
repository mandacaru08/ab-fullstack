import PropTypes from "prop-types";
import Button from "../../../components/Button";

const RedirectAuthButton = ({ children, onClick }) => {
  return (
    <Button
      backgroundColor="#D7DCE1"
      fontColor="#232D37"
      size="large"
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

RedirectAuthButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default RedirectAuthButton;
