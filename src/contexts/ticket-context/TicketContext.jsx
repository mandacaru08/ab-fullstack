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
<<<<<<< HEAD
    console.log(ticketField, fieldValue)
=======
>>>>>>> c6ff4ab38366c2f4e79f1c390946927f5dc80d55
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
