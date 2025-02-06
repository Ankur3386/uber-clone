import React from 'react'

const Home = () => {
  return (
    <div>
        <div className='h-screen pt-8  w-full flex justify-between flex-col bg-red-400'>
            <img src="https://pluspng.com/img-png/uber-logo-vector-png-uber-icon-png-50-px-1600.png" alt="" className='w-16 ml-8' />
            <div className='bg-white py-4 px-4'>
                <h2 className='text-3xl font-bold'>Get Started with Uber</h2>
                <button className='w-full bg-black text-white py-3 rounded mt-3'>Continue</button>
            </div>
        </div>
    </div>
  )
}

export default Home