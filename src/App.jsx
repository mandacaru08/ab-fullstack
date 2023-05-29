import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './components/homepage/Home';
import Login from './components/user/Login';
import './App.css';

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App;