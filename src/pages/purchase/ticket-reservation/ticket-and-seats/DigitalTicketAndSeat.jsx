import styled from "styled-components";
import { ImInfo } from "react-icons/im";
import { IoTicketOutline } from "react-icons/io5";
import TotalPrice from "../../TotalPrice";
import NumberOfSeatsOptions from "./NumberOfSeatsOptions";

export default function DigitalTicketAndSeat() {
  return (
    <Container>
      <section>
        <DigitalTicket>
          <TicketIcon>
            <IoTicketOutline />
          </TicketIcon>
          <Label>
            <h4>Ticket Digital</h4>
            <span>Salve o ticket como PDF</span>
          </Label>
          <ImInfo />
        </DigitalTicket>
        <Warning>
          <h4>Atenção:</h4>
          <span>
            Válido apenas para o passageiro mencionado (e passageiros
            acompanhantes, se aplicável). Não é transferível. Você deve
            apresentar seu documento de identificação ao fiscal de bilhetes no
            trem.
          </span>
        </Warning>
      </section>
      <section>
        <OurTip>
          <span>Nossa dica: reserve seu assento agora.</span>
        </OurTip>
        <NumberOfSeatsOptions />
      </section>
      <TotalPrice />
    </Container>
  );
}

const Container = styled.div`
  height: 560px;
  width: 100%;
`;

const DigitalTicket = styled.div`
  height: 76px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px 30px 16px 140px;
  box-sizing: border-box;
  position: relative;
  background-color: #ffffff;
  border-bottom: 1px solid rgba(40, 45, 55, 0.2);
  border-radius: 4px 4px 0 0;

  svg {
    font-size: 20px;
    color: #8b8b8b;
  }
`;

const TicketIcon = styled.div`
  height: 76px;
  width: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 60px;
  top: 0;
  transform: translate(-50% -50%);

  svg {
    font-size: 25px;
  }
`;

const Label = styled.label`
  h4 {
    font-weight: 700;
  }

  span {
    font-size: 14px;
  }
`;

const Warning = styled.div`
  height: 130px;
  width: 100%;
  padding: 20px 56px 35px 140px;
  box-sizing: border-box;
  border-radius: 0 0 4px 4px;
  background-color: #ffffff;

  h4 {
    font-size: 16px;
    font-weight: 700;
  }
  span {
    font-size: 14px;
  }
`;

const OurTip = styled.div`
  height: 68px;
  width: 100%;
  display: flex;
  align-items: end;
  padding-bottom: 15px;
  box-sizing: border-box;
  font-size: 18px;
`;
