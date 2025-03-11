import React, { useRef, useState } from 'react'
//gsap is an animation library it provide useGSAP with which we can perform animation to use it download npmi gsap and npm i @gsap/react
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'

import LocationSearchPanel from '../components/LocationSearchPanel'
import VehiclePanel from '../components/VehiclePanel'
import ConfirmedRide from '../components/ConfirmedRide'
import LookingForDriver from '../components/LookingForDriver'
function Home() {
  const[pickup,setPickup] =useState('')
  const [destination,setDestination] =useState('')
  const [panelOpen, setPanelOpen] = useState(false)
  //we want to name that div so we will use useRef
  const panelRef =useRef(null)
  const panelClosRef = useRef(null)
  const vehicleFoundRef = useRef(null)
  const [vehiclePanel,setVehiclePanel] =useState(false)
  const vehiclePanelRef=useRef(null)
  const confirmedRidePanelRef=useRef(null)
  const [confirmRidePanel,setConfirmRidePanel] =useState(false)
  const [vehicleFound,setVehicleFound] =useState(false)
  const submitHandler=(e)=>{
    e.preventDefault()

  }
  useGSAP(function(){
    if(panelOpen){
      //for panelOpen value=true
   gsap.to(panelRef.current,{
    height:'70%',
    padding:24
   })
   gsap.to(panelClosRef.current,{
    opacity:'1'
   })
    }else{
      gsap.to(panelRef.current,{
        height:'0%'
      })
      gsap.to(panelClosRef.current,{
        opacity:'0'
       })
    }
  },[panelOpen])
  useGSAP(function(){
    if(vehiclePanel){
    gsap.to(vehiclePanelRef.current,{
      transform:'translateY(0)'
    })}else{
     gsap.to(vehiclePanelRef.current,{
      transform:'translateY(100%)'
     })
    }
  },[vehiclePanel])
  useGSAP(function(){
    if(confirmRidePanel){
    gsap.to(confirmedRidePanelRef.current,{
      transform:'translateY(0)'
    })}else{
     gsap.to(confirmedRidePanelRef.current,{
      transform:'translateY(100%)'
     })
    }
  },[confirmRidePanel])
  useGSAP(function(){
    if(vehicleFound){
    gsap.to(vehicleFoundRef.current,{
      transform:'translateY(0)'
    })}else{
     gsap.to(vehicleFoundRef.current,{
      transform:'translateY(100%)'
     })
    }
  },[vehicleFound])
  return (
    <div className='h-screen  relative overflow-hidden'>
      <img className='w-16 left-5 top-5 absolute' src="https://tse1.mm.bing.net/th?id=OIP.urDlKG711lNKyMH7KldZqQHaEK&pid=Api&P=0&h=180" alt="" />
      <div className='h-screen w-screen'>
  <img  className=" w-full h-full object-cover" src="https://miro.medium.com/max/1280/0*gwMx05pqII5hbfmX.gif" alt="" />
      </div>
      <div className=' h-screen flex flex-col justify-end absolute top-0 w-full '> 
        <div className='h-[30%] p-5 bg-white relative'> 
          <h5 ref={panelClosRef}
          onClick={()=>{
            setPanelOpen(close)
          }}
          className='right-6 top-5 absolute opacity-0  '>
            <img  className=' size-6' src='https://cdn-icons-png.flaticon.com/128/2985/2985150.png' />
            </h5>
          <h4 className='text-2xl font-semibold'> Find a trip</h4>
        <form onSubmit={(e)=>{
          submitHandler(e)
        }}>
          <div className='line absolute h-16 w-1 top-[40%] left-10 bg-gray-900 rounded-full'></div>
          <input
          onClick={()=>{
            setPanelOpen(true)
          }}
          value={pickup}
          onChange={(e)=>{
          setPickup(e.target.value)
          }}
          className='bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-5' type="text" placeholder='Add a pickup location ' />
          <input
          onClick={()=>{
            setPanelOpen(true)
          }}
           value={destination}
           onChange={(e)=>{
           setDestination(e.target.value)
           }} 
          className='bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-3' type="text" placeholder='Add you Destination ' />
        </form></div>
        <div ref ={panelRef} className='h-[70%] bg-white'>
     <LocationSearchPanel setPanelOpen={setPanelOpen} setVehiclePanel={setVehiclePanel}/>
        </div>
      </div>

      <div ref={vehiclePanelRef}className=' fixed z-10 bottom-0  p-3 py-10 pt-12 translate-y-full bg-white w-full'>
     <VehiclePanel setConfirmRidePanel={setConfirmRidePanel} setVehiclePanel={setVehiclePanel}/>

      </div>

      <div ref={confirmedRidePanelRef}className=' fixed z-10 bottom-0  p-3 py-6 pt-12 translate-y-full bg-white w-full'>
    <ConfirmedRide setConfirmRidePanel={setConfirmRidePanel} setVehicleFound={setVehicleFound} />
      </div>
      <div ref={vehicleFoundRef} className=' fixed z-10 bottom-0  p-3 py-6 pt-12 translate-y-full bg-white w-full'>
   <LookingForDriver />
      </div>
    </div>
  )
}

export default Home