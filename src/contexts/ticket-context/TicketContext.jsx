import { createContext, useMemo } from "react";

const TicketContext = createContext();
export default TicketContext;

export function TicketProvider({children}) {

    const steps = useMemo(() => ([
        {id: 0, stepName : 'search', name: 'Pesquisar', status: 'done'},
        {id: 1, stepName : 'select', name: 'Selecionar', status: 'in-progress'},
        {id: 2, stepName : 'ticket-reservation', name: 'Ticket e Reserva', status: 'pending'},
        {id: 3, stepName : 'payment', name: 'Pagamento', status: 'pending'},
        {id: 4, stepName : 'ticket-verification' , name: 'Verificar e Reservar', status: 'pending'},
        {id: 5, stepName : 'ticket-confirmation', name: 'Confirmação', status: 'pending'}
    ]), []);
    

    return(
        <TicketContext.Provider value={{steps}} >
            {children}
        </TicketContext.Provider>
    );
};