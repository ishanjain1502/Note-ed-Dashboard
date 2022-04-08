import React from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard';
import {Button} from '@mui/material'
export default function Header() {
  return (
    <div className='flex pt-4 bg-indigo-200 h-24'>
        <div className=' flex items-center basis-1/4'>
            <h1 className='main-heading text-3xl text-indigo-600 ml-4'>Note-ed</h1>
        </div>
        <div className='text-gray-500 text-base font-semibold text-base basis-1/2 flex items-center justify-center'>
            <a href="/dashboard" className='flex flex-col items-center hover:text-blue-900'>
                <div className='flex justify-center w-32 '>
                 <DashboardIcon />
                </div>
                <p className=' flex justify-center items-center rounded w-32  h-8  decoration-4 hover:text-blue-900'>Dashboard</p>
            </a>
            
        </div>
        <div className='flex justify-center items-center  basis-1/4'>
        <Button style={{'background':'#4f46e5'}} variant="contained" className='w-32 h-10  logout'>Logout</Button>

            {/* <div className='flex font-medium w-28 h-10 rounded justify-center content-center border-4 border-indigo-700 text-blue-700'>Logout</div> */}
        </div>

    </div>
  )
}
