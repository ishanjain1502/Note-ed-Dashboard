import React from 'react'

export default function NavItem(props) {
  return (
    <a href={props.link} className='flex flex-col items-center hover:text-blue-900'>
        <div className='flex justify-center w-32 '>
            {props.icon}
        </div>
        <p className=' flex justify-center items-center rounded w-32  h-8  decoration-4 hover:text-blue-900'>{props.title}</p>
    </a>
  )
}
