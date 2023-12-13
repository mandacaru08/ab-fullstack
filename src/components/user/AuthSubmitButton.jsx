import Button from "../Button";

const AuthSubmitButton = ({ children, onClick, isButtonDisabled }) => {
  return (
    <Button
      type="submit"
      disabled={isButtonDisabled}
      backgroundColor="#7979FF"
      fontColor="#FFFFFF"
      size="large"
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default AuthSubmitButton;