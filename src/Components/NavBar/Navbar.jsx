/*global chrome*/
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import icon from '../../assets/icon.png';
export default function Header() {
    const navigate = useNavigate();
    const [query, setQuery] = useState("");

    const toProfile = () => {
      navigate('/profile')
    }

    const toHome = () => {
      navigate('/dashboard')
    }

    const searchQuery= (query) => {
        let token = localStorage.getItem('token')
        axios.post('api/v1/search/videos/name?=xyz', {
            name : query
        },{
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
                "Access-Control-Allow-Origin": "*",
            },
        })
        .then((res)=> res.data)
        .then()
    }

  return (
      <>
    <nav className='p-5 flex justify-between  bg-gradient-to-r from-indigo-500 to-blue-500 ' >
        {/* <MenuIcon/> */}
        <div>
        <button className='' >
            <MenuIcon style={{ color: "white" , "margin-bottom" : "7px"}}/>
        </button>
        <image src={icon} alt='logo' /> 
        <span className='text-white text-2xl '>
            &nbsp;&nbsp;&nbsp;
            <span className=' w-8 h-4 pt-16' style={{"background-image" : "url(https://github.com/sasta-notion/Note-Ed-Chrome-Extension/blob/master/src/assets/img/icon-34.png)"}} >  </span>
         <button onClick={toHome} > Noted</button>
        </span>
        </div>
        
        <div className='w-2/3'>
            <input className='h-8 w-3/4 p-3'
                value={query}
                placeholder='   Search Videos here'
                onChange={(e)=> {setQuery(e.target.value)}}
            />
            <button className='px-4 bg-zinc-300 h-8'
                onClick={searchQuery(query)}
            > <SearchIcon style={{ color: "white" }}/> </button>
        </div>
        <span className='profile w-8 text-xl '>
          <button
          onClick={toProfile} >
          <AccountCircleIcon style={{color: "white" , "transform" : "scale(1.5)"}} />
          </button>
          
        </span>
    </nav>
    </>
  )
}
