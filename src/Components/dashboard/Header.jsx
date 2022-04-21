/*global chrome*/
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import React from 'react';
import { useNavigate } from 'react-router-dom';
export default function Header() {
    const navigate = useNavigate();


  return (
      <>
    <nav className='p-5 flex justify-between bg-new-green ' >
        {/* <MenuIcon/> */}
        <MenuIcon/>
        <div className='w-2/3'>
            <input className='h-8 w-4/5 ' />
            <button className='px-4 bg-zinc-300 h-8'> <SearchIcon style={{ color: "white" }}/> </button>
        </div>
        <span className='w-8'></span>
    </nav>
    </>
  )
}
