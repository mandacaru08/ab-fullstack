import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import TicketContext from './contexts/ticket-context/TicketContext';
import Home from './components/homepage/Home';
import SignIn from './components/user/SignIn';
import SignUp from './components/user/SignUp';
import Select from './components/purchase/select/Select';
import TicketAndReservation from './components/purchase/ticket-reservation/ticket-and-seats/TicketAndReservation';
import './App.css';

function App() {

  const [ ticketStatus, setTicketStatus ] = useState({
    ticketSelected: false,
    classSelected: false,

  });

  const ticketContextData = {ticketStatus, setTicketStatus};

  return (
    <TicketContext.Provider value={ticketContextData}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/sign-in' element={<SignIn/>}/>
          <Route path='/sign-up' element={<SignUp/>}/>
          <Route path='/purchase/select' element={<Select/>}/>
          <Route path='/purchase/ticket-reservation' element={<TicketAndReservation/>}/>
        </Routes>
      </BrowserRouter>
    </TicketContext.Provider>
  )
}

export default App;