import React from 'react'

const LocationSearchPanel=(props)=> {
  //sample array location
  const location =["Rohini Sector 17 New Delhi"]
  return (
    <div>
        {/* tis is sample data*/ }
        {
          location.map((elem,id)=>{
            return  <div
            key={id} onClick={()=>{
              props.setVehiclePanel(true)
              props.setPanelOpen(false)
            }} className='flex gap-2 border-2 p-3 rounded-xl border-grey-100 active:border-black my-4 items-center justify-start'>
            <h2 className=' flex item-centre justify-centerrounded-full'><img  className=' bg-white size-5 'src="https://img.icons8.com/?size=100&id=3723&format=png" alt="" /></h2>  
            <h4>
            {elem}
            </h4>
          </div>
          })
        }
       
       
    </div>
  )
}

export default LocationSearchPanel
