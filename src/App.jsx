import { BrowserRouter, Routes, Route } from "react-router-dom";

import { TicketProvider } from "./contexts/ticket-context/TicketContext";

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
    <TicketProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
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
      </BrowserRouter>
    </TicketProvider>
  );
}

export default App;
