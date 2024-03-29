import PropTypes from "prop-types";
import styled from "styled-components";
import { ImInfo } from "react-icons/im";
import Button from "../../components/Button";

import TicketContext from "../../contexts/ticket-context/TicketContext";

const PreviousOrNextButton = ({ children, onClick, ...props }) => {
  return (
    <Button fontColor="#282D37" size="small" onClick={onClick} {...props}>
      {children}
    </Button>
  );
};

PreviousOrNextButton.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default function TotalPrice() {

  const { ticketInfos } = useContext(TicketContext);

  return (
    <Container>
      <Total>
        <span>Total</span>
        <ImInfo />
        <Price>R${ticketInfos.value}</Price>
      </Total>
      <Buttons>
        <PreviousOrNextButton>Voltar</PreviousOrNextButton>
        <PreviousOrNextButton fontColor="#FFFFFF" backgroundColor="#EC0016">
          Continuar
        </PreviousOrNextButton>
      </Buttons>
    </Container>
  );
}

const Container = styled.section`
  height: 140px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px 20px 0 20px;
  box-sizing: border-box;
  background-color: #ffffff;
  border-radius: 4px;
`;

const Total = styled.div`
  height: 24px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: right;
  align-items: center;
  font-size: 18px;

  span {
    font-weight: bold;
  }

  svg {
    font-size: 20px;
    color: #646973;
    margin: 0 25px 0 10px;
  }
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 24px 0 30px 0;
`;

const Price = styled.div`
  display: flex;
  justify-content: right;
  font-size: 16px;
  font-weight: 700;
`;
