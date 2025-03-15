import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import FinishRide from '../components/FinishRide'
import { useGSAP } from '@gsap/react'

const CaptainRiding = () => {
  const [finishRidePanel, setFinishRidePanel] = useState(false)
  const finishRidePanelRef=useRef(null)
  useGSAP(function(){
    if(finishRidePanel){
    gsap.to(finishRidePanelRef.current,{
      transform:'translateY(0)'
    })}else{
     gsap.to(finishRidePanelRef.current,{
      transform:'translateY(100%)'
     })
    }
  },[finishRidePanel])
  return (
    <div className='h-screen relative '>
        
    <div className='fixed p-6 top-0 flex items-center justify-between w-screen'>
      <img className='w-16' src="https://tse1.mm.bing.net/th?id=OIP.urDlKG711lNKyMH7KldZqQHaEK&pid=Api&P=0&h=180" alt="" />
      <Link  to='/captain-home'className=' h-10  bg-white flex item-centre rounded-full  '>
        <img className='text-lg ' src="https://tse3.mm.bing.net/th?id=OIP.XqgSq7PHcbZpiBfjhzpfFwHaHa&pid=Api&P=0&h=180" alt="" />
    </Link>
    </div>
    <div className='h-4/5'>
    <img  className=" w-full h-full object-cover" src="https://miro.medium.com/max/1280/0*gwMx05pqII5hbfmX.gif" alt="" />
    </div>
    <div
    onClick={()=>{
      setFinishRidePanel(true)
    }} className='h-1/5 p-6 bg-yellow-400 flex items-center relative justify-between'>
    <h5    className='p-1  w-[93%] absolute  flex  justify-center text-center top-0 ' >
     <img  className='h-5 text-gray-500 bold-image  ' src="https://cdn-icons-png.flaticon.com/128/130/130906.png" alt="" />
     </h5>
     <h4 className='text-xl font-semibold'>4 km away</h4>
     <button className='mt-5 bg-green-500 text-white font-semibold p-3 px-10 rounded-lg'>Complete Ride </button>
    </div>
    <div ref={finishRidePanelRef} className=' fixed z-10 bottom-0  p-3 py-6 pt-12 translate-y-full bg-white w-full'>
    <FinishRide setFinishRidePanel={setFinishRidePanel} />
      </div>
</div>
  )
}

export default CaptainRiding