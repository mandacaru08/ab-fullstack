import PropTypes from "prop-types";
import Button from "../../../../components/Button";

const SearchTicketButton = ({ children, onClick }) => {
  return (
    <Button
      backgroundColor="#6495ED"
      fontColor="#FFFFFF"
      size="small"
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

SearchTicketButton.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default SearchTicketButton;
