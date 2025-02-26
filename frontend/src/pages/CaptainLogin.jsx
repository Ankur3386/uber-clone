import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CaptainDataContex } from '../context/CaptainContex'
import axios from 'axios'

const CaptainLogin = () => {
    //two way binding we will use so that user data can be used 1 setstate in their location set value and target them .two way binding use so that react know that what our values are
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    
    const navigate =useNavigate()
    const {captain,setCaptain}=useContext( CaptainDataContex)
    //on submit our page got reload so if we c.log our data than it will come and disappear within secondsso
    
    const submithandler=async(e)=>{
      //e used as in form  we passes value e and we recieve it here 
  
      e.preventDefault();//used as form default behaviour is that on Submit it get refreshed so due to it it will not be refreshed
     
    const captain ={
        email:email,
        password:password
      }
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captain/login`,captain)
      if(response.status==201){
        const data =response.data
        setCaptain(data.captain)
        localStorage.setItem('token',data.token)
        navigate('/captain-home')
      }
       //TODO check if current value is printing .we can use Effect hook as problem is sue to ASYNCHRONOUS NATURE OF JAVASCRIPT
      //console.log(captainData)
      //noow as default behaviour is cancelled so it will not refreshed we want after submit the field spaece become empty and as default behaviour removed so or value will be shown in c.log and we can access it from there 
      setEmail('')
      setPassword('')
    }
  return (
    <div className='p-7  justify-between h-screen'>
      <div>
    <img src="https://pluspng.com/img-png/uber-logo-vector-png-uber-icon-png-50-px-1600.png" alt="" className='w-16 ml-8' />
 <form 
onSubmit={(e)=>{
submithandler(e)
}}
className=' '>
<h3 className='text-lg mb-2'>What's your email</h3>
<input
value={email} //due to  it we will not able to type until we use onChange as value assign email that is predefinrd string that is why  not change until use onChange. same for password
onChange={(e)=>{
  setEmail(e.target.value)
}}
className='rounded bg-gray-200 px-4 py-2 w-full mb-7
'required ="email" placeholder='emailAeaxample.com' />
<h3 className='text-lg mb-2'>Enter Password</h3>
<input
 value={password} 
 onChange={(e)=>{
   setPassword(e.target.value)
 }}
className='rounded bg-gray-200 mb-7 px-4 py-2 w-full ' required ="password" placeholder='password' />
<button className=' w-full bg-black flex items-center justify-center text-white py-3 rounded mt-5'>Login</button>
</form>
<p className='text-center'>Join a fleet? <Link to="/captain-signup"className='text-blue-600'>Regester as Captain</Link></p>

</div>
<div>
<Link to='/login' className=' w-full bg-green-500 flex items-center justify-center text-white py-3 rounded mt-5'>Sign in as User</Link>
</div>
</div>
  )
}


export default CaptainLogin