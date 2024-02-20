import { useContext } from "react";

import StepsStatus from "../StepsStatus";
import TicketOverview from "../TicketOverview";
import OutwardJourneyOptions from "./ticket-options/OutwardJourneyOptions";
import SymbolLegendNote from "../symbols-meaning/SymbolLegendNote";
import CurrentPurchaseStep from "../CurrentPurchaseStep";
import TicketSymbolsAndNotes from "../symbols-meaning/ticket-options-symbols/TicketSymbolsAndNotes";
import TicketClassesOptions from "./ticket-classes/TicketClassesOptions";
import ClassSymbolsAndNotes from "../symbols-meaning/class-options-symbols/ClassSymbolsAndNotes";
import TicketContext from "../../../contexts/ticket-context/TicketContext";

export default function Select() {
  const { ticketStatus, ticketInfos } = useContext(TicketContext);

  return (
    <CurrentPurchaseStep>
      <StepsStatus />
      <TicketOverview />
      {
        ticketStatus.ticketSelected ? (
            <TicketClassesOptions />
          ) : (
            <OutwardJourneyOptions />
        )
      }
      <SymbolLegendNote>
        {
          ticketStatus.ticketSelected ? (
            <ClassSymbolsAndNotes />
          ) : (
            <TicketSymbolsAndNotes />
          )
        }
      </SymbolLegendNote>
    </CurrentPurchaseStep>
  );
}
