import { useState } from "react";

import styled from "styled-components";

import CurrentPurchaseStep from "../CurrentPurchaseStep";
import StepsStatus from "../StepsStatus";
import LogAndBook from "./LogAndBook";
import CustomerDataDetails from "./CustomerDataDetails";
import DigitalTicketAndSeat from "./DigitalTicketAndSeat";

export default function TicketAndReservation(){

    const [customerDetailsFilled, setCustomerDetailsFilled ] = useState(false);

    return(
        <CurrentPurchaseStep>
            <StepsStatus/>
            <Section></Section>
            <LogAndBook />
            {
                customerDetailsFilled?
                <CustomerDataDetails setCustomerDetailsFilled={setCustomerDetailsFilled}/>
                :
                <DigitalTicketAndSeat></DigitalTicketAndSeat>
            }
        </CurrentPurchaseStep>
    );
}

const Section = styled.section`
    width: 100%;
    padding: 28px 0 12px 0;
    margin: 0;
`;