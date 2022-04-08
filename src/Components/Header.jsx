import React from 'react'

export default function Header() {
  return (
    <div className='flex mt-6'>
        <div className=' flex self-start basis-1/4'>
            <h1 className='main-heading text-3xl text-indigo-600 ml-4'>Note-ed</h1>
        </div>
        <div className='text-gray-500 font-medium basis-1/2 flex content-center justify-center'>
            <a href="/dashboard">
                <div className=' flex justify-center content-center rounded w-32  h-8 hover:bg-indigo-200 decoration-4 hover:text-blue-900'>Dashboard</div>
            </a>
            
        </div>
        <div className='flex justify-center basis-1/4'>

            <div className='flex font-medium w-28 h-10 rounded justify-center content-center border-4 border-indigo-700 text-blue-700'>Logout</div>
        </div>

    </div>
  )
}
