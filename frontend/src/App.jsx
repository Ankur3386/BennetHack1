import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import SignUp from './components/SignUp'
import Home from './components/Home'
import Prediction from './components/Consultation'
import SignIn from './components/SignIn'

function App() {
 

  return (
    <>
    <Routes>
 <Route path='/' Component={Home}/>
  <Route  path ='/sign-up' Component={SignUp} />
  <Route  path ='/sign-in' Component={SignIn} />
  <Route  path ='/prediction' Component={Consultation} />


    </Routes>
    </>
  )
}

export default App
