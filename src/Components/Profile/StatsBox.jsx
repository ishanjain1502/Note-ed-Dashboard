import React from 'react'

export default function StatsBox(props) {
  return (
    <div className='p-3 px-4 pt-6 flex flex-col items-center text-blue-400 mr-2 h-44 w-2/4 mb-8 rounded-md font-medium shadow-xl'>
        <h2 className='text-2xl'>{props.title}</h2>
        <p className='text-6xl  number'>{props.stats}</p>
    </div>
  )
}
