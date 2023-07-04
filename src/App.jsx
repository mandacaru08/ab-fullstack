import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './components/homepage/Home';
import SignIn from './components/user/SignIn';
import SignUp from './components/user/SignUp';
import Purchase from './components/purchase/Puchase';
import './App.css';

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/sign-in' element={<SignIn/>}/>
      <Route path='/sign-up' element={<SignUp/>}/>
      <Route path='/purchase' element={<Purchase/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App;