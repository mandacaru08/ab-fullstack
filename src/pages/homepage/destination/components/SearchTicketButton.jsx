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

export default SearchTicketButton;
