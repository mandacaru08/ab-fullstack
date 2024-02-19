import { createContext, useMemo } from "react";

const ProgressContext = createContext();
export default ProgressContext;

export function ProgressProvider({ children }) {
  const steps = useMemo(
    () => [
      { id: 0, stepName: "search", name: "Pesquisar", status: "pending" },
      { id: 1, stepName: "select", name: "Selecionar", status: "pending" },
      {
        id: 2,
        stepName: "ticket-reservation",
        name: "Ticket e Reserva",
        status: "pending",
      },
      { id: 3, stepName: "payment", name: "Pagamento", status: "pending" },
      {
        id: 4,
        stepName: "ticket-verification",
        name: "Verificar e Reservar",
        status: "pending",
      },
      {
        id: 5,
        stepName: "ticket-overview",
        name: "Confirmação",
        status: "pending",
      },
    ],
    []
  );

  return (
    <ProgressContext.Provider value={{ steps }}>
      {children}
    </ProgressContext.Provider>
  );
}
