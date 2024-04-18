import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Nav from './Components/Navbar';
import About from './Components/Aboutpage';
import Contacts from './Components/Contactpage';
import Home from './Components/Homepage';


function App() {

  return (
    <>
    <BrowserRouter>
    <Nav/>
    <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/contactpage' element={<Contacts/>}></Route>
    <Route path='/aboutpage' element={<About/>}></Route>
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App