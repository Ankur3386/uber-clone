import React from 'react'

function ConfirmedRide(props) {
  return (
    <div>
         <h5 className='p-1  w-[93%] absolute  flex  justify-center text-center top-0 ' onClick={()=>{
        props.setVehiclePanel(true)
      }}>
          <img  className='h-5 text-gray-500 bold-image  ' src="https://img.icons8.com/?size=100&id=39786&format=png" alt="" />
          </h5>
          <h3 className='text-2xl font-semibold mb-3'>Confirm your Ride </h3>
         <div className='flex gap-2 justify-between items-center flex-col'>
             <img className='h-23' src="https://tse1.mm.bing.net/th?id=OIP.90_IXyFPb47LZ_AYAe1ylAHaEK&pid=Api&P=0&h=180" alt="" /></div>
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
         <button onClick={()=>{
            props.setVehicleFound(true)
            props.setConfirmRidePanel(false)
         }} className='w-full mt-5 bg-green-500 text-white font-semibold p-2 rounded-lg'>Confirm</button>
          </div>
          </div>
  )
}

export default ConfirmedRide