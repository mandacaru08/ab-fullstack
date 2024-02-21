import { BrowserRouter, Routes, Route } from "react-router-dom";

import { TicketProvider } from "./contexts/ticket-context/TicketContext";
import { ProgressProvider } from "./contexts/progress-context/ProgressContext";
import { AddressProvider } from "./contexts/address-context/AddressContext";
import { PaymentProvider } from "./contexts/payment-context/PaymentContext";

import Home from "./pages/homepage/Home";
import SignIn from "./pages/user/SignIn";
import SignUp from "./pages/user/SignUp";
import Select from "./pages/purchase/select/Select";
import TicketAndReservation from "./pages/purchase/ticket-reservation/ticket-and-seats/TicketAndReservation";
import Payment from "./pages/purchase/payment/Payment";
import TicketConfirmation from "./pages/purchase/confirmation/TicketConfirmation";
import TicketOverview from "./pages/purchase/TicketOverview";
import DownloadTicket from "./pages/purchase/confirmation/DownloadTicket";

function App() {
  return (
    <BrowserRouter>
      <TicketProvider>
        <ProgressProvider>
          <AddressProvider>
            <PaymentProvider>
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
                  element={<DownloadTicket />}
                />
              </Routes>
            </PaymentProvider>
          </AddressProvider>
        </ProgressProvider>
      </TicketProvider>
    </BrowserRouter>
  );
}

export default App;
