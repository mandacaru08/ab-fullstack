import { useState } from "react";

import styled from "styled-components";

import CurrentPurchaseStep from "../../CurrentPurchaseStep";
import StepsStatus from "../../StepsStatus";
import CustomerDataDetails from "../../shared/passenger-details/CustomerDataDetails";
import DigitalTicketAndSeat from "./DigitalTicketAndSeat";

export default function TicketAndReservation() {
  const [customerDetailsFilled, setCustomerDetailsFilled] = useState(false);

  return (
    <CurrentPurchaseStep>
      <StepsStatus />
      <Section></Section>
      {true ? (
        <DigitalTicketAndSeat />
      ) : (
        <CustomerDataDetails
          setCustomerDetailsFilled={setCustomerDetailsFilled}
        />
      )}
    </CurrentPurchaseStep>
  );
}

const Section = styled.section`
  width: 100%;
  padding: 28px 0 12px 0;
  margin: 0;
`;
