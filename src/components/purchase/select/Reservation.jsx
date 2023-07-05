import CurrentPurchaseStep from "../CurrentPurchaseStep";
import StepsStatus from './StepsStatus';
import TicketOverview from '../select/TicketOverview';

export default function Reservation(){
    return(
        <CurrentPurchaseStep>
            <StepsStatus/>
            <TicketOverview/>
        </CurrentPurchaseStep>
    );
}