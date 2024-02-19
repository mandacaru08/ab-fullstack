import { BrowserRouter, Routes, Route } from "react-router-dom";

import { TicketProvider } from "./contexts/ticket-context/TicketContext";
import { ProgressProvider } from "./contexts/progress-context/ProgressContext";

import Home from "./pages/homepage/Home";
import SignIn from "./pages/user/SignIn";
import SignUp from "./pages/user/SignUp";
import Select from "./pages/purchase/select/Select";
import TicketAndReservation from "./pages/purchase/ticket-reservation/ticket-and-seats/TicketAndReservation";
import Payment from "./pages/purchase/payment/Payment";
import TicketConfirmation from "./pages/purchase/confirmation/TicketConfirmation";
import TicketOverview from "./pages/purchase/TicketOverview";

function App() {
  return (
    <BrowserRouter>
      <TicketProvider>
        <ProgressProvider>
          <Routes>
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/" element={<Home />} />
            <Route path="/purchase/select" element={<Select />} />
            <Route
              path="/purchase/ticket-reservation"
              element={<TicketAndReservation />}
            />
            <Route path="/purchase/payment" element={<Payment />} />
            <Route
              path="/purchase/ticket-verification"
              element={<TicketConfirmation />}
            />
            <Route
              path="/purchase/ticket-overview"
              element={<TicketOverview />}
            />
          </Routes>
        </ProgressProvider>
      </TicketProvider>
    </BrowserRouter>
  );
}

export default App;
