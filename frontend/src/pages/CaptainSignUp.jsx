
import React, { useContext, useState } from 'react'

import { Link,useNavigate } from 'react-router-dom'
import { CaptainDataContex } from '../context/CaptainContex'
import axios from 'axios'
const CaptainSignUp = () => {
  
    //lets perform double binding
    const[email,setEmail] =useState('')
    const [password,setPassword]=useState('')
    const [firstName,setFirstName]=useState('')
    const [lastName, setLastName] =useState('')
   
    const [vehicleColor,setVehicleColor] =useState('')
    const [vehiclePlate,setVehiclePlate] =useState('')
    const [vehicleCapacity,setVehicleCapacity] =useState('')
    const [vehicleType,setVehicleType] =useState('')

    const {captain,setCaptain} =useContext(CaptainDataContex)
    const navigate=useNavigate()
    const submithandler=async(e)=>{
      e.preventDefault()
    const captainData ={
        fullname:{
          firstname:firstName,
        lastname:lastName
      },
        email,
        password,
        vehicle:{
          color:vehicleColor,
          vehicleType:vehicleType,
          plate:vehiclePlate,
          capacity:vehicleCapacity
        }
  
      }
     
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captain/register`,captainData)
     
      if(response.status==201){
        const data =response.data
       
        setCaptain(data.captain)
        localStorage.setItem('token',data.token)
        navigate('/captain-home')
      }
      //if we are printing in console previous value is printed it is due to asynchronous nature of javascript so to solve it we can use useEffect hook
     // console.log(captainData.username)
  
      setEmail('')
      setFirstName('')
      setLastName('')
  
      setPassword('')
      setVehicleCapacity('')
      setVehicleColor('')
      setVehiclePlate('')
      setVehicleType('')
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
        <h3 className='text-base font-medium mb-2'>Enter Captain Name</h3>
        <div className='flex gap-4 mb-6 '>
        <input  className ="rounded bg-gray-200 px-4 py-2 w-full placeholder:text-base" required placeholder='FirstName' 
        value={firstName}
        onChange={(e)=>{
          setFirstName(e.target.value)
        }} />
        
        <input  className ="rounded bg-gray-200 px-4 py-2 w-full placeholder:text-base " required placeholder='LastName' 
          value={lastName}
          onChange={(e)=>{
            setLastName(e.target.value)
          }} />
        </div>
          <h3 className='text-base font-medium mb-2'>Enter Captain Email</h3>
          <input
        
          className='rounded bg-gray-200 px-4 py-2 w-full mb-6
          'required ="email" placeholder='emailAeaxample.com' 
          value={email}
          onChange={(e)=>{
            setEmail(e.target.value)
          }}/>
          <h3 className='text-base font-medium mb-2'>Enter Password</h3>
          <input
           
          className='rounded bg-gray-200 mb-6 px-4 py-2 w-full ' required ="password" placeholder='password'
          value={password}
          onChange={(e)=>{
            setPassword(e.target.value)
          }} />
          
          <h3 className='text-lg font-medium mb-2'>Vehicle Information</h3>
          <div className='flex gap-4 mb-7'>
            <input
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
              type="text"
              placeholder='Vehicle Color'
              value={vehicleColor}
              onChange={(e) => {
                setVehicleColor(e.target.value)
              }}
            />
            <input
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
              type="text"
              placeholder='Vehicle Plate'
              value={vehiclePlate}
              onChange={(e) => {
                setVehiclePlate(e.target.value)
              }}
            />
          </div>
          <div className='flex gap-4 mb-7'>
            <input
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
              type="number"
              placeholder='Vehicle Capacity'
              value={vehicleCapacity}
              onChange={(e) => {
                setVehicleCapacity(e.target.value)
              }}
            />
            <select
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
              value={vehicleType}
              onChange={(e) => {
                setVehicleType(e.target.value)
              }}
            >
              <option value="" disabled>Select Vehicle Type</option>
              <option value="car">Car</option>
              <option value="auto">Auto</option>
              <option value="moto">Moto</option>
            </select>
          </div>
          <button className=' w-full bg-black flex items-center justify-center text-white py-3 rounded mt-5'>Create Captain Account</button>
          </form>
          <p className='text-center'>Already have account? <Link to="/captain-login"className='text-blue-600'>Login</Link></p>
  
        </div>
        <div  >
  <p className='text-[10px] mt-8 m-10'> This website uses third party advertising cookies to serve you relevant ads. You may opt-out from these third party ad cookies by clicking the “Opt-out” button below. If you have an Uber account, you may opt-out of the “sale” or “sharing” of your data here.</p>
        </div>
      </div>
    )
  }

export default CaptainSignUp