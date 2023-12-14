import styled from "styled-components";
import { RiMoneyDollarBoxFill } from "react-icons/ri";

import SortByAndTimeButton from "./SortByAndTimeButton";
import TicketOptions from "./TicketOptions";

export default function OutwardJourneyOptions() {
  return (
    <Container>
      <TravelDate>
        <span>Viagem de ida em 30/06/2023</span>
        <ShowBestPrice title="Os preços mais baixos aqui (1)">
          <RiMoneyDollarBoxFill />
          <span>Mostrar nossos melhores preços ¹</span>
          <input type="checkbox" />
        </ShowBestPrice>
      </TravelDate>
      <SortByAndTimeButton />
      <TicketOptions />
    </Container>
  );
}

const Container = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 32px 24px;
  box-sizing: border-box;

  svg {
    font-size: 20px;
  }
`;

const TravelDate = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

const ShowBestPrice = styled.label`
  height: 30px;
  width: 305px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  svg {
    font-size: 25px;
    color: #77be27;
  }

  input {
    height: 20px;
    width: 20px;
    border: 1px solid #878c96;
    border-radius: 2px;
  }

  :hover {
    cursor: pointer;
  }
`;
