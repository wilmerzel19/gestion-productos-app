
import { Route, Routes } from 'react-router-dom'

import Header from './components/layoust/Header'
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Contacto from './components/pages/contacto';


function App() {
 
  return (
    <>
    <Header />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicios" element={<Services />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>     
    
    </>
  )
}

export default App
