import React from 'react'

function RidePopUp(props) {
  return (
    <div>
    <h5
        onClick={()=>{
            props.setRidePopPanel(false)
          }} className='p-1  w-[93%] absolute  flex  justify-center text-center top-0 ' 
>
     <img  className='h-5 text-gray-500 bold-image  ' src="https://img.icons8.com/?size=100&id=39786&format=png" alt="" />
     </h5>
     <h3 className='text-2xl font-semibold mb-5'> New Ride Available </h3>
     <div className='flex item-center justify-between p-3 bg-yellow-400 rounded-lg mt-4 '>
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
   <div className=' mt-5 flex w-full items-center justify-between'>
   <button onClick={()=>{
      props.setRidePopPanel(false)
  
    }} className=' mt-1 bg-gray-300 text-gray-700 font-semibold p-3 px-10 rounded-lg'>Ignore
    </button>
   <button onClick={()=>{
       
       props.setConfirmRidePopPanel(true)
    }} className='mt-5 bg-green-500 text-white font-semibold p-3 px-10 rounded-lg'>Accept</button>
    
   </div>
     </div>
     </div>
  )
}

export default RidePopUp