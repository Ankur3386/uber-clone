import React ,{useContext, useEffect, useState}from 'react'

import {  useNavigate } from 'react-router-dom'
import { CaptainDataContex } from '../context/CaptainContex'
import { header } from 'express-validator'
function CaptainProtectwrapper() {
const {captain,setCaptain} =useContext(CaptainDataContex)
   const [isLoading,setIsLoading] =useState(true)
    const navigate = useNavigate()
  const token =localStorage.getItem('token')
  useEffect(()=>{

    if(!token)(
      navigate('/captain- login')
    )
  },[token])
  //our profile need token
  //here we are bringing the data because if user comes in captain login and try to login he willbwe able to login as we are only schecking on the basis of token so to solve it we are bringing data  axios and if data comes that he is valid captain as we are bringing data by using  token and if data is comming that means toke is valid so the we will render the children otherwise redirect to captain-login page
  axios.get(`${import.meta.env.VITE_BASE_URL}/captains/profile`,{
    headers:{
      Authorization:`Bearer ${token}`
    }
  }).then((response)=>{
    if(response.status==200){
      setCaptain(response.data.captain)
      setIsLoading(false)
    }
  }).catch(err=>{
    console.log(err)
    localStorage.removeItem('token')
    navigate('/captain-login')
  })
  if(isLoading){
    return(
      <div>Loading...</div>
    )
  }
  
  //if tken exist than return children as we will wrap home(in app.jsx ) inside so it will check if user loged in 
  return (
   <>
   {children}
   </>
  )
}
export default CaptainProtectwrapper