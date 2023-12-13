import Button from "../Button";

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

export default RedirectAuthButton;
