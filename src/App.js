import React from 'react';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import AboutPage from './components/body/aboutPage/AboutPage';
import ContactPage from './components/body/contactPage/ContactPage';
import Homepage from './components/body/homepage/Homepage';
import LoginPage from './components/body/loginPage/LoginPage';
import ServicePage from './components/body/servicePage/ServicePage';
import SignupPage from './components/body/signupPage/SignupPage';
import Navigation from './components/header/Navigation';
import "./index.css"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
   <Router>
   <Navigation/>

    <Routes>
   <Route path='/' element={<Homepage/>}/>
   <Route path='about' element={<AboutPage/>}/>
   <Route path='services' element={<ServicePage/>}/>
   <Route path='contact' element={<ContactPage/>}/>
   <Route path='login' element={<LoginPage/>}/>
   <Route path='signup' element={<SignupPage/>}/>
   

   </Routes>
   </Router>


    </div>
  )
}

export default App