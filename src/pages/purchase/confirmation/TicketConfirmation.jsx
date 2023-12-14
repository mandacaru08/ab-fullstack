import styled from "styled-components";
import { BsFillPassFill } from "react-icons/bs";
import { RiSecurePaymentFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

import Bar from "../Bar";
import StepsStatus from "../StepsStatus";
import Button from "../../../components/Button";

const PreviousOrNextButton = ({ children, onClick, ...props }) => {
  return (
    <Button onClick={onClick} {...props} size="small">
      {children}
    </Button>
  );
};

export default function TicketConfirmation() {
  const navigate = new useNavigate();

  return (
    <Container>
      <Bar />
      <StepsStatus />
      <OverviewAndReservation>
        <span>Resumo da reserva</span>
        <Overview>
          <TicketOverview>
            <Section>
              <BsFillPassFill />
              <h3>Informações da passagem</h3>
            </Section>
            <TicketInfos>
              <Information>
                <div>
                  <span>Nome do passageiro</span>
                  <p>Jansen Caik</p>
                </div>
                <div>
                  <span>Tipo de reserva</span>
                  <p>1ª Classe</p>
                </div>
              </Information>
              <Information>
                <div>
                  <span>Horário de saída</span>
                  <p>10:20 - 10/09/23</p>
                </div>
                <div>
                  <span>Horário de chegada</span>
                  <p>13:45 - 10/09/23</p>
                </div>
              </Information>
              <Information>
                <div>
                  <span>Origem</span>
                  <p>Santarém</p>
                </div>
                <div>
                  <span>Destino</span>
                  <p>Manaus</p>
                </div>
              </Information>
            </TicketInfos>
          </TicketOverview>
          <PaymentMethodOverview>
            <Section>
              <RiSecurePaymentFill />
              <h3>Método de pagamento</h3>
            </Section>
            <PaymentInfos>
              <Information>
                <div>
                  <span>Cartão de Crédito</span>
                  <p>**** **** **** *123</p>
                </div>
                <div>
                  <span>Parcelas</span>
                  <p>Em 3 vezes de R$12,79</p>
                </div>
              </Information>
            </PaymentInfos>
          </PaymentMethodOverview>
          <ContainerButton>
            <PreviousOrNextButton>Alterar</PreviousOrNextButton>
            <PreviousOrNextButton
              onClick={() => navigate("/purchase/ticket-overview")}
            >
              Confirmar
            </PreviousOrNextButton>
          </ContainerButton>
        </Overview>
      </OverviewAndReservation>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const OverviewAndReservation = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: left;
  padding: 20px 0;
`;

const Overview = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
  padding: 20px 40px;
  box-sizing: border-box;
  background-color: #ffffff;
`;

const TicketOverview = styled.div`
  height: 280px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: left;
  background-color: #ffffff;
`;

const Section = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  svg {
    font-size: 22px;
  }

  h3 {
    margin-left: 8px;
  }
`;

const TicketInfos = styled.div`
  height: 100%;
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: left;
  margin-top: 32px;
`;

const Information = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: left;

  div {
    width: 182px;
  }
  span {
    font-weight: 700;
  }
`;

const PaymentMethodOverview = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: left;
  margin-top: 32px;
`;

const PaymentInfos = styled.div`
  height: 100%;
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: left;
  margin-top: 32px;
`;

const ContainerButton = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 42px;
`;
