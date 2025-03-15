import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import {useGSAP} from '@gsap/react'
import CaptainDetail from '../components/CaptainDetail'
import RidePopUp from '../components/RidePopUp'
import ConfirmRidePopUp from '../components/ConfirmRidePopUp'


function CaptainHome() {
  const[ridePopPanel,setRidePopPanel]=useState(true)
  const[confirmRidePopPanel,setConfirmRidePopPanel]=useState(false)
  const RidePopPanelRef=useRef(null)
  const confirmRidePopPanelRef=useRef(null)
  useGSAP(function(){
    if(ridePopPanel){
    gsap.to(RidePopPanelRef.current,{
      transform:'translateY(0)'
    })}else{
     gsap.to(RidePopPanelRef.current,{
      transform:'translateY(100%)'
     })
    }
  },[ridePopPanel])
  useGSAP(function(){
    if(confirmRidePopPanel){
    gsap.to(confirmRidePopPanelRef.current,{
      transform:'translateY(0)'
    })}else{
     gsap.to(confirmRidePopPanelRef.current,{
      transform:'translateY(100%)'
     })
    }
  },[confirmRidePopPanel])
  return (
    <div className='h-screen '>
    <div className='fixed p-6 top-0 flex items-center justify-between w-screen'>
      <img className='w-16' src="https://tse1.mm.bing.net/th?id=OIP.urDlKG711lNKyMH7KldZqQHaEK&pid=Api&P=0&h=180" alt="" />
      <Link  to='/captain-home'className=' h-10  bg-white flex item-centre rounded-full  '>
        <img className='text-lg ' src="https://tse3.mm.bing.net/th?id=OIP.XqgSq7PHcbZpiBfjhzpfFwHaHa&pid=Api&P=0&h=180" alt="" />
    </Link>
    </div>
    <div className='h-3/5'>
    <img  className=" w-full h-full object-cover" src="https://miro.medium.com/max/1280/0*gwMx05pqII5hbfmX.gif" alt="" />
    </div>
    <div className='h-2/5 p-6'>
   <CaptainDetail/>
    </div>
    <div ref={RidePopPanelRef} className=' fixed z-10 bottom-0  p-3 py-6 pt-12 translate-y-full bg-white w-full'>
    <RidePopUp setRidePopPanel={setRidePopPanel}/>
      </div>
    <div ref={RidePopPanelRef} className=' fixed z-10 bottom-0  p-3 py-6 pt-12 translate-y-full bg-white w-full'>
    <RidePopUp setRidePopPanel={setRidePopPanel} setConfirmRidePopPanel={setConfirmRidePopPanel}/>
      </div>
    <div ref={confirmRidePopPanelRef} className=' fixed z-10 bottom-0 h-screen p-3 py-6 pt-12 translate-y-full bg-white w-full'>
    <ConfirmRidePopUp setConfirmRidePopPanel={setConfirmRidePopPanel} setRidePopPanel={setRidePopPanel}/>
      </div>
</div>
  )
}

export default CaptainHome