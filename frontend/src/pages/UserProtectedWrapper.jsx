//we are making a wrapper so that which will if user loged in 
//this high order will accept  children  and later check if user exist then it will return children otherwise it will navigate children to login 
import React ,{useContext, useEffect}from 'react'
import UserContext from '../context/UserContext'
import { data, useNavigate } from 'react-router-dom'

const UserProtectedWrapper=({children})=> {
   // const {user}=useContext(UserContext)
    //instead of depending user we will depend on token because if user login than later refreshed page thn in that cage our data will be removed as context data removed so user will bw logged out so we will depend on token
    const navigate = useNavigate()
  const token =localStorage.getItem('token')
  useEffect(()=>{
    if(!token)(
      navigate('/login')
    )
  },[token])
  
  //if tken exist than return children as we will wrap home(in app.jsx ) inside so it will check if user loged in 
  return (
   <>
   {children}
   </>
  )
}

export default UserProtectedWrapper