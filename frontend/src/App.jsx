import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import UserLogin from './pages/UserLogin.jsx'
import UserSignUp from './pages/UserSignUp'
import CaptainLogin from './pages/CaptainLogin'
import CaptainSignUp from './pages/CaptainSignUp'
import Start from './pages/Start'
import UserLogout from './pages/UserLogout.jsx'
import UserProtectedWrapper from './pages/UserProtectedWrapper'
import CaptainHome from './pages/CaptainHome.jsx'
import CaptainProtectwrapper from './pages/CaptainProtectwrapper.jsx'
import Riding from './pages/Riding.jsx'
import CaptainRiding from './pages/CaptainRiding.jsx'
//use"" when writting path

const App = () => {
  return (
    <div >
      <Routes>
        <Route path="/" element={<Start/>}/>
        <Route path="/login" element={<UserLogin/>}/>
        <Route path="/signup" element={<UserSignUp/>}/>
        <Route path="/riding" element={<Riding/>}/>
        <Route path="/captain-riding" element={<CaptainRiding/>}/>
        <Route path="/captain-login" element={<CaptainLogin/>}/>
        <Route path="/captain-signup" element={<CaptainSignUp/>}/>
        <Route path= "/home" element ={
          
          <UserProtectedWrapper>
          <Home/>
        </UserProtectedWrapper>}/>
        <Route path='/user/logout' element={
          <UserProtectedWrapper>
          <UserLogout/>
        </UserProtectedWrapper>}/>
        
        <Route path="/captain-home" element={
          <CaptainProtectwrapper>
          <CaptainHome/>
          </CaptainProtectwrapper>}/>
      </Routes>
    </div>
  )
}

export default App