import { useState } from "react";
import styled from "styled-components";
import { RiMoneyDollarBoxFill } from "react-icons/ri";
import SortByAndTimeButton from "./SortByAndTimeButton";
import TicketOptions from "./TicketOptions";
import { Checkbox } from "../../../../components/index";

export default function OutwardJourneyOptions() {
  const [showBestPrices, setShowBestPrices] = useState(false);

  return (
    <Container>
      <TravelDate>
        <span>Viagem de ida em 30/06/2023</span>
        <Checkbox
          type="checkbox"
          width="fit-content"
          inputVariant="checkbox"
          checked={showBestPrices}
          icon={<RiMoneyDollarBoxFill />}
          label="Mostrar nossos melhores preços ¹"
          onClick={() => setShowBestPrices(!showBestPrices)}
        />
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
