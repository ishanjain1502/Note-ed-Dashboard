/*global chrome*/
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
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
    <div>
        
        <nav className="p-5 flex justify-between bg-white relative top-0 -left-1 w-full mb-3">
          {/* <MenuIcon/> */}
          <div className="relative left-16 flex">
            <span className="text-black flex content-center max-h-5 mb-2">
              <span>
                <img src={icon} style={{height : '200%'}}  alt='logo' />
              </span>
            </span>
            <div className="relative right-20 text-5xl text-new-blue font-bold">
              <button>Noted</button>
            </div>
          </div>

          <div className="w-2/3">
            <input
              className="h-8 w-3/4 p-3 pl-5 border-2 border-t-black border-l-black border-b-black	rounded-l-md"
              value={query}
              placeholder="Search"
              onChange={(e) => {
                setQuery(e.target.value);
              }}
            />
            <button className="px-4 bg-new-blue h-8" onClick={searchQuery}>
              <SearchIcon style={{ color: "white" }} />
            </button>
          </div>
          <span className="profile w-8 text-xl ">
            <button onClick={toProfile}>
              <AccountCircleIcon
                style={{ color: "rgb(0,102,122)", transform: "scale(1.5)" }}
              />
            </button>
          </span>
        </nav>
      </div>

  )
}
