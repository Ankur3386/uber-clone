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

const App = () => {
  return (
    <div >
      <Routes>
        <Route path="/" element={<Start/>}/>
        <Route path="/login" element={<UserLogin/>}/>
        <Route path="/signup" element={<UserSignUp/>}/>
        <Route path="/captain-login" element={<CaptainLogin/>}/>
        <Route path="/captain-signup" element={<CaptainSignUp/>}/>
        <Route path= "home" element ={
          
          <UserProtectedWrapper>
          <Home/>
        </UserProtectedWrapper>}/>
        <Route path='/user/logout' element={
          <UserProtectedWrapper>
          <UserLogout/>
        </UserProtectedWrapper>}/>
        <Route path='/ca'ptain-home element={<CaptainHome/>}/>
      </Routes>
    </div>
  )
}

export default App