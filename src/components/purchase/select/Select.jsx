import StepsStatus from './StepsStatus';
import TicketOverview from '../select/TicketOverview';
import OutwardJourneyOptions from '../select/OutwardJourneyOptions';
import SymbolLegendNote from '../SymbolLegendNote';
import CurrentPurchaseStep from '../CurrentPurchaseStep';

export default function Select(){
    return(
        <CurrentPurchaseStep>
            <StepsStatus/>
            <TicketOverview/>
            <OutwardJourneyOptions/>
            <SymbolLegendNote/>
        </CurrentPurchaseStep>
    );
}
