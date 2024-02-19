import { createContext, useState } from "react";

const ProgressContext = createContext();
export default ProgressContext;

export function ProgressProvider({ children }) {
  const [steps, setSteps] = useState(
    [
      { id: 0, stepName: "search", name: "Pesquisar", status: "done" },
      { id: 1, stepName: "select", name: "Selecionar", status: "in-progress" },
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
    ]
  );

  const updateStepStatus = (stepName, newStatus) => {
    setSteps(prevSteps =>
      prevSteps.map(step =>
        step.stepName === stepName ? { ...step, status: newStatus } : step
      )
    );
  };

  return (
    <ProgressContext.Provider value={{ steps, updateStepStatus }}>
      {children}
    </ProgressContext.Provider>
  );
}