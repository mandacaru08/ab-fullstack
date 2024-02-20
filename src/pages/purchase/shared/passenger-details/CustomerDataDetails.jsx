import styled from "styled-components";

import CustomerData from "./CustomerData";
import { Button } from "../../../../components";
import SaveDetails from "./SaveDetails";

const NavigateButton = ({ children, onClick, ...props }) => {
  return (
    <Button onClick={onClick} {...props} size="medium">
      {children}
    </Button>
  );
};

export default function CustomerDataDetails() {
  return (
    <Container>
      <CustomerData />
      {/* <SaveDetails /> */}
    </Container>
  );
}

const Container = styled.div`
  height: 366px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const ButtonContainer = styled.div`
  height: 84px;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  justify-content: right;
  align-items: center;
`;
