import { createContext, useMemo, useState } from "react";

const TicketContext = createContext();
export default TicketContext;

export function TicketProvider({ children }) {
  const [ticketInfos, setTicketInfos] = useState({
    name: null,
    ticketClass: null,
    date: null,
    time: null,
    boat: null,
    from: null,
    to: null,
    paymentMethod: null,
    value: null,
  });

  const updateTicketInfos = (ticketField, fieldValue) => {
    console.log(ticketField, fieldValue)
    setTicketInfos((prevTicketInfos) => ({
      ...prevTicketInfos,
      [ticketField]: fieldValue,
    }));
  };

  const [ticketStatus, setTicketStatus] = useState({
    ticketSelected: false,
  });

  const updateTicketStatus = (ticketField, fieldValue) => {
    setTicketStatus((prevTicketStatus) => ({
      ...prevTicketStatus,
      [ticketField]: fieldValue,
    }));
  };

  return (
    <TicketContext.Provider
      value={{
        ticketInfos,
        updateTicketInfos,
        ticketStatus,
        updateTicketStatus,
      }}
    >
      {children}
    </TicketContext.Provider>
  );
}
