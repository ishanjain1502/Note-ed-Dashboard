/*global chrome*/
import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import icon from '../../assets/icon.png';
import DropDownMenu from '../dashboard/DropDownMenu';
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
              <button onClick={toHome} >Noted</button>
            </div>
          </div>

          <div className="w-2/3">
            <div
              className="h-8 w-3/4 ">
                </div>
          </div>
          <span className="profile w-8 text-xl ">
            <DropDownMenu  />
          </span>
        </nav>
      </div>

  )
}
