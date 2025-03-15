import React from 'react'

function CaptainDetail() {
  return (
    <div>   <div className='flex item-center justify-between'>
    <div className='flex item-center justify-start gap-3 '>
      <img className='h-10 v-10 rounded-full object-cover'src="https://tse2.mm.bing.net/th?id=OIP.Ck2Usj84bIh_SiI2QJ7b-QHaEp&pid=Api&P=0&h=180" alt="" />
      <h4 className='text-lg  font-medium'>Haesh Patel </h4>
    </div>
    <div className='flex justify-between gap-4'>
      <h4 className='text-xl font-semibold'>$295.20</h4>
      <p className='text-sm  text-gray-600'>Earned</p>
    </div>
   </div>
   <div className='flex item-start p-3 mt-8 bg-gray-100 rounded-xl justify-center gap-10'>
    <div className='text-center '>
      <img className='h-10' src="https://up.yimg.com/ib/th?id=OIP.bwUhiUl-aWbX8vmXyOa0lAHaHa&pid=Api&rs=1&c=1&qlt=95&w=121&h=121" alt="" />
      <h5 className='text-lg font-medium'>10.2</h5>
      <p className='text-sm text-gray-700'>Hours Online</p>
    </div>
    <div> 
      <img  className='h-10'src="https://tse1.mm.bing.net/th?id=OIP.JXA2kYDn0tnjwhX_8lpTLgHaHa&pid=Api&P=0&h=180" alt="" />
      <h5 className='text-lg font-medium'>10.2</h5>
      <p className='text-sm text-gray-700'>Hours Online</p>
    </div>
    <div>
      <img className='h-10' src="https://tse2.mm.bing.net/th?id=OIP.AjfjSayzcp_zt2mWUdjKRgHaHa&pid=Api&P=0&h=180" alt="" />
      <h5 className='text-lg font-medium'>10.2</h5>
      <p className='text-sm text-gray-700'>Hours Online</p>
    </div>
   </div></div>
  )
}

export default CaptainDetail