import React from 'react'
import {Link} from 'react-router-dom'
const Start = () => {
  return (
    <div>
        <div className='  bg-cover bg-bottom bg-centre bg-[url(https://media.istockphoto.com/id/1226532587/photo/a-city-crossing-with-a-semaphore-red-light-in-semaphore.jpg?s=612x612&w=0&k=20&c=wFre7dWkGLPk7r3O9g9TMRYhEmbiMSG6bExXsUAw8v4=)] pt-8 h-screen w-full flex justify-between flex-col bg-red-400'>
            <img src="https://pluspng.com/img-png/uber-logo-vector-png-uber-icon-png-50-px-1600.png" alt="" className='w-16 ml-8' />
            <div className='bg-white pb-7 py-4 px-4'>
                <h2 className='text-3xl font-bold'>Get Started with Uber</h2>
                <Link to ='/login'className='  w-full bg-black flex items-center justify-center text-white py-3 rounded mt-5'>Continue</Link>
            </div>
        </div>
    </div>
  )
}

export default Start