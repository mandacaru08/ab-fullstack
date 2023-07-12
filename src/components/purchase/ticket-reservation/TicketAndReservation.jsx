import styled from "styled-components";

import CurrentPurchaseStep from "../CurrentPurchaseStep";
import StepsStatus from "../StepsStatus";
import LogAndBook from "./LogAndBook";
import LoginRegistration from "./LoginRegistration";

export default function TicketAndReservation(){
    return(
        <CurrentPurchaseStep>
            <StepsStatus/>
            <Section></Section>
            <LogAndBook />
            <LoginRegistration/>
        </CurrentPurchaseStep>
    );
}

const Section = styled.section`
    width: 100%;
    padding: 28px 0 12px 0;
    margin: 0;
`;