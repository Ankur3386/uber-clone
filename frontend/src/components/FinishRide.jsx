import React from 'react'
import { Link } from 'react-router-dom'

const FinishRide = (props) => {
  return (
    <div>
         <div>
    <h5
        onClick={()=>{
            props.setFinishRidePanel(false)
          }} className='p-1  w-[93%] absolute  flex  justify-center text-center top-0 ' 
>
     <img  className='h-5 text-gray-500 bold-image  ' src="https://img.icons8.com/?size=100&id=39786&format=png" alt="" />
     </h5>
     <h3 className='text-2xl font-semibold mb-5'> Finish this  Ride to Start  </h3>
     <div className='flex item-center justify-between p-4 border-2 bg-yellow-400 rounded-lg mt-4 '>
        <div className='flex item-center gap-3 '> 
        <img className='h-10 w-10 rounded-full object-cover' src="https://tse1.mm.bing.net/th?id=OIP.tL1dKiGcEl_zmAltMAiCDQHaHa&pid=Api&P=0&h=180" alt="" />
        <h2 className='text-xl font-medium'>Harsh</h2>

     </div>
     <h5 className='text-lg font-semibold'>2.2Km</h5>
     </div>
    <div className='flex gap-2 justify-between items-center flex-col'>

    <div className='w-full mt-5'>
   <div className='flex items-center gap-5 p-3 border-b-2'>
       <img  className='h-9'src="https://static.vecteezy.com/system/resources/previews/000/280/087/original/location-pin-map-pin-flat-icon-vector-design.jpg" alt="" />
     <div className=''>
       <h3 className='text-lg font-medium'>562/11/A</h3>
       <p className='text-sm -mt-1 text-gray-600'>Rohini Delhi</p>
     </div>
        </div>
  <div className='flex items-center gap-5 p-3 border-b-2'>
       <img  className='h-9'src="https://static.vecteezy.com/system/resources/previews/000/280/087/original/location-pin-map-pin-flat-icon-vector-design.jpg" alt="" />
     <div className=''>
       <h3 className='text-lg font-medium'>562/11/A</h3>
       <p className='text-sm -mt-1 text-gray-600'>Rohini Delhi</p>
     </div>
     </div>
  <div className='flex items-center gap-5 p-3 '>
       <img  className='h-9'src="https://static.vecteezy.com/system/resources/previews/000/280/087/original/location-pin-map-pin-flat-icon-vector-design.jpg" alt="" />
     <div className=''>
       <h3 className='text-lg font-medium'>$193</h3>
       <p className='text-sm -mt-1 text-gray-600'>Cash </p>
     </div>
     </div>
    </div>
   
    <div className='mt-6 w-full '>
  
    <Link to='/captain-home' className='w-full flex text-lg justify-center mt-5 bg-green-500 text-white font-semibold p-3 rounded-lg'>Finish Ride</Link>
     
     
    </div>
     </div>
     </div>
    </div>
  )
}

export default FinishRide