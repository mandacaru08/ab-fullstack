import CurrentPurchaseStep from "../../CurrentPurchaseStep";
import StepsStatus from './StepsStatus';
import TicketOverview from './TicketOverview';

export default function Reservation(){
    return(
        <CurrentPurchaseStep>
            <StepsStatus/>
            <TicketOverview/>
        </CurrentPurchaseStep>
    );
}