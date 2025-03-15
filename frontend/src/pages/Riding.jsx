import React from 'react'
import { Link } from 'react-router-dom'

function Riding() {
  return (
    <div className='h-screen '>
        <Link  to='/home'className='fixed h-10 top-2 right-2 bg-white flex item-centre rounded-full  '>
            <img className='text-lg ' src="https://tse4.mm.bing.net/th?id=OIP.GcRlpNTMNf06GOD3l3pILgHaHa&pid=Api&P=0&h=180" alt="" />
        </Link>
        <div className='h-1/2'>
        <img  className=" w-full h-full object-cover" src="https://miro.medium.com/max/1280/0*gwMx05pqII5hbfmX.gif" alt="" />
        </div>
        <div className='h-1/2 p-4'>
        <div className='flex item-centre justify-between'> 
          <img  className='h-5' src="https://img.icons8.com/?size=100&id=39786&format=png"  alt="" />
          <div className='text-right'>
            <h2 className='text-lg font-medium'>sarthak</h2>
            <h4 className='text-xl font-semibold -mt-1 -mb-1'> HP09864</h4>
            <p className='text-sm text-gray-500'>Maetu Suzuki </p>
          </div>
        </div>
        <div className='flex gap-2 justify-between items-center flex-col'>
            <img className='h-20' src="https://tse1.mm.bing.net/th?id=OIP.90_IXyFPb47LZ_AYAe1ylAHaEK&pid=Api&P=0&h=180" alt="" /></div>
        <div className='w-full mt-5'>
      
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
        <button className='w-full mt-5 bg-green-500 text-white font-semibold p-2 rounded-lg'>Make a Payment </button>
        </div>
    </div>
  )
}

export default Riding