import React from 'react'

const  VehiclePanel=(props)=> {
  return (
    <div> 
          
    <h5 className='p-1  w-[93%] absolute  flex  justify-center text-center top-0 ' onClick={()=>{
      props.setVehiclePanel(true)
    }}>
        <img  className='h-5 text-gray-500 bold-image  ' src="https://img.icons8.com/?size=100&id=39786&format=png" alt="" /></h5>
    <h3 className='text-2xl font-semibold mb-3'>choose a vehicle</h3>
    <div onClick={()=>{
        props.setConfirmRidePanel(true)
    }}  className='active:border-black flex w-full items-center border-2 rounded-xl justify-between p-3'>
      <img  className=' h-10'src="https://tse1.mm.bing.net/th?id=OIP.90_IXyFPb47LZ_AYAe1ylAHaEK&pid=Api&P=0&h=180" alt="" />
      <div className=' w-1/2'>
        <h4 className='font-medium   flex  display-inline text-sm'>UberGo <span className=' flex display-inline'> <img className='h-4 flex display-inline' src="https://cdn-icons-png.flaticon.com/128/456/456212.png" alt="" /> 4</span></h4>
        <h5>2 mins away</h5>
        <p className='font-medium text-xs text-gray-400'>Afforadable compact rides</p>
      </div>
      <h2 className='text-2xl font-bold'>$193.20</h2>
    </div>
    <div onClick={()=>{
        props.setConfirmRidePanel(true)
    }}  className=' active:border-black border-2 flex w-full items-center  rounded-xl justify-between p-3'>
      <img  className=' h-10'src="https://tse1.mm.bing.net/th?id=OIP.90_IXyFPb47LZ_AYAe1ylAHaEK&pid=Api&P=0&h=180" alt="" />
      <div className=' w-1/2'>
        <h4 className='font-medium   flex  display-inline text-sm'>UberGo <span className=' flex display-inline'> <img className='h-4 flex display-inline' src="https://cdn-icons-png.flaticon.com/128/456/456212.png" alt="" /> 4</span></h4>
        <h5>2 mins away</h5>
        <p className='font-medium text-xs text-gray-400'>Afforadable compact rides</p>
      </div>
      <h2 className='text-2xl font-bold'>$193.20</h2>
    </div>
    <div onClick={()=>{
        props.setConfirmRidePanel(true)
    }} className='active:border-black  flex w-full items-center border-2   rounded-xl justify-between p-3'>
      <img  className=' h-10'src="https://tse1.mm.bing.net/th?id=OIP.90_IXyFPb47LZ_AYAe1ylAHaEK&pid=Api&P=0&h=180" alt="" />
      <div className=' w-1/2'>
        <h4 className='font-medium   flex  display-inline text-sm'>UberGo <span className=' flex display-inline'> <img className='h-4 flex display-inline' src="https://cdn-icons-png.flaticon.com/128/456/456212.png" alt="" /> 4</span></h4>
        <h5>2 mins away</h5>
        <p className='font-medium text-xs text-gray-400'>Afforadable compact rides</p>
      </div>
      <h2 className='text-2xl font-bold'>$193.20</h2>
    </div></div>
  )
}

export default VehiclePanel