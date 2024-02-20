import PropTypes from "prop-types";
import Input from "../../../components/Input";

const AuthInput = ({ type, width, ...props }) => {
  return <Input width="100%" type="custom" {...props} />;
};

AuthInput.propTypes = {
  type: PropTypes.string,
  width: PropTypes.string,
};

export default AuthInput;