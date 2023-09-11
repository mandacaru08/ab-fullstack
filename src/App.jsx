import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { TicketProvider } from './contexts/ticket-context/TicketContext';

import Home from './components/homepage/Home';
import SignIn from './components/user/SignIn';
import SignUp from './components/user/SignUp';
import Select from './components/purchase/select/Select';
import TicketAndReservation from './components/purchase/ticket-reservation/ticket-and-seats/TicketAndReservation';
import Payment from './components/purchase/payment/Payment';
import TicketConfirmation from './components/purchase/confirmation/TicketConfirmation';
import TicketOverview from './components/purchase/TicketOverview';
import './App.css';

function App() {

  return (
    <TicketProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/sign-in' element={<SignIn/>}/>
          <Route path='/sign-up' element={<SignUp/>}/>
          <Route path='/purchase/select' element={<Select/>}/>
          <Route path='/purchase/ticket-reservation' element={<TicketAndReservation/>}/>
          <Route path='/purchase/payment' element={<Payment/>}/>
          <Route path='/purchase/ticket-verification' element={<TicketConfirmation/>}/>
          <Route path='/purchase/ticket-overview' element={<TicketOverview/>}/>
        </Routes>
      </BrowserRouter>
    </TicketProvider>
  )
}

export default App;