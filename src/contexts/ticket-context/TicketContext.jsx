import { createContext, useMemo } from "react";

const TicketContext = createContext();
export default TicketContext;

export function TicketProvider({ children }) {

  const ticketStatus = useMemo(
    () => [
      {
        name: null,
        ticketType: null,
        timeAndDate: null,
        boat: null,
        from: null,
        to: null,
        paymentMethod: null,
        value: null,
      },
    ],
    []
  );

  return (
    <TicketContext.Provider value={{ ticketStatus }}>
      {children}
    </TicketContext.Provider>
  );
}
