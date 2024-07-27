import { Routes,Route } from 'react-router-dom';


import Footer from './components/footer/Footer';

import Header from './components/header/Header';
import Home from './components/home/Home'
import Catalog from './components/catalog/Catalog';
import BoatCreate from './components/boat-create/BoatCreate';
import Login from './components/login/Login';
import Register from './components/register/Register';



function App() {


  return (
    <>

    <Header/>

    
    <Routes>
            <Route path='/' element={<Home/>}  />
            <Route path='/catalog' element={<Catalog/>}  />
            <Route path='/boat/create' element={<BoatCreate />}  />
            <Route path='/login' element={<Login/>} />
            <Route path='/register' element={<Register/>}  />
            {/* <Route path='/login' element={<Login/>}  />
            <Route path='/register' element={<Register/>}  />
            <Route path='/boats/:gameId/details' element={<GameDetails/>}  />
             */}
 </Routes>
        

    <Footer/>

    </>
  )
}

export default App
