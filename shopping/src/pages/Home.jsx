import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from '../components/Navbar'
import Login from './Login';
import SignUp from './Signup'
import First_page from './First_page';
import Footer from '../components/Footer';
import Women_wear from './Women_wear';
import Men_wear from './Men_wear';
import Kids_wear from './Kids_wear';
import Cloth_details from './Cloth_details';



export default function Home() {
  return (
    <Router>
    <div>
      <Navbar/>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/firstpage' element={<First_page/>}/>
        <Route path='/womens' element={<Women_wear/>}/>
        <Route path='/mens' element={<Men_wear/>}/>
        <Route path='/kids' element={<Kids_wear/>}/>
        <Route path='/details' element={<Cloth_details/>}/>

      

      </Routes>
    </div>
    </Router>

  

    

  )
}
