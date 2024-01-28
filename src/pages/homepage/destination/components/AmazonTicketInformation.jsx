import styled from "styled-components";
import Icon from "../../../../components/Icon";
import { HiOutlineReceiptPercent } from "react-icons/hi2";

const Container = styled.div`
  height: 62px;
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

const Information = styled.div`
  height: 100%;
  width: 100%;
  padding-left: 25px;

  p {
    font-size: 0.875rem;
  }
`;

function AmazonTicketInformation () {
    return (
        <Container>
        <Icon
          size={"18px"}
          color={"#646973"}
          position={"absolute"}
          icon={<HiOutlineReceiptPercent />}
        />
        <Information>
          <p>
            Para os portadores do Amazon-Ticket, pode ser mais barato
            limitar a consulta e a reserva à rota de longa distância, já
            que esse bilhete já cobre o transporte local. Para obter
            mais informações (incluindo sobre os direitos dos
            passageiros, que podem ser limitados).
          </p>
        </Information>
      </Container>
    );
}

export default AmazonTicketInformation;