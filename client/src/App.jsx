import { useState,React } from 'react'
import Navbar from './components/Navbar'
import { Home } from './components/Home'
import { TalkDoc } from './components/TalkDoc'
import { DoctorDetail } from './components/DoctorDetail'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"

function App() {

  return (
    <>
    <Router>
    <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route path="/TalkDoc" element={<TalkDoc/>}></Route>
        <Route path="/doctor/:id" element={<DoctorDetail />} />
      </Routes>
    </Router>
      
    </>
  )
}

export default App
