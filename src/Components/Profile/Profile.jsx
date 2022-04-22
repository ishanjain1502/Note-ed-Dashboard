
import React, { useEffect, useState } from 'react';
import Navbar from '../NavBar/Navbar';
import EditInfo from './EditInfo';
import { useNavigate } from 'react-router-dom';
import StatsBox from './StatsBox';
import axios from 'axios';

export default function Profile() {
    const navigate = useNavigate();
    const [open,setOpen]=useState(false);
    const [modalType,setModalType]=useState(" ");
    const [data,setData]=useState({});
    const [stats,setStats]=useState({});
    const handleOpen=(e)=>{
       
        setModalType(e.target.value);
        
        
        setOpen(true);
    }
    const handleClose=()=>{
        setOpen(false);
    }


    const logMeOut = ()=>{
        console.log("loggging out");

        // sending logged out info to extension
        let authObj =  JSON.stringify({"loggedInStatus":false,"authToken":null});
        sendLoggedOutInfo({ extensionId: 'jklnlkhjnomickibcdjofabgbhadpkfm', authInfo: authObj})
        localStorage.removeItem('token');
        // setloggedInStatus(false); 

        // redirect to login
        navigate('/login');
    }


    const sendLoggedOutInfo = ({ extensionId, authInfo})=>{
        // eslint-disable-next-line no-undef
        chrome.runtime.sendMessage(extensionId, { authInfo }, response => {
            if (!response.success) {
              console.log('error sending message', response);
              return response;
            }
            console.log(response)
          });

    }
    
    const getStats=()=>{
        const token=localStorage.getItem('token');
        axios.get(`http://localhost:8000/api/v1/getstats`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(data=>{
            setStats(data.data.data);
            console.log(data.data.data);
        })
    }

    useEffect(()=>{
        getStats();
        const info={
            username:localStorage.getItem('username'),
            email:localStorage.getItem('email')
        }
        
        setData(info);
        console.log(info);
    },[])


    
  return (
    <div>

        <Navbar/>
        <div className="m-auto bg-cover bg-no-repeat bg-center w-full h-[300px]" style={{"background-image":"url(https://codedamn.com/assets/cover-image.svg)"}}></div>
        <main className="pl-14">

        <div className='flex'>

        <div className='flex flex-col items-center w-80'>
            <h1 class="font-bold text-lg mb-3 sm:text-[22px] mb-1">{data.username}</h1>
            <div class="flex items-center mb-2 space-x-2">
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M880 184H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v664c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V216c0-17.7-14.3-32-32-32zm-40 656H184V460h656v380zM184 392V256h128v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h256v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h128v136H184z">
                        </path></svg>
                        <p>Joined May 2020</p></div>
            <button onClick={(e)=>{
                handleOpen(e);
            }} value="personal" class="px-4 py-2 mb-4 text-xs w-80 font-semibold text-blue-400 border border-blue-400 rounded-md sm:text-sm hover:bg-gray-100">Edit profile</button>
            <button onClick={(e)=>{
                handleOpen(e);
            }} value="changepassword" class="px-4 py-2 mb-4 text-xs w-80 font-semibold text-blue-400 border border-blue-400 rounded-md sm:text-sm hover:bg-gray-100">Change Password</button>
            <button class="px-4 py-2 mb-4 text-xs w-80 font-semibold text-red-400 border border-red-400 rounded-md sm:text-sm hover:bg-gray-100" onClick={logMeOut}>Logout</button>
        </div>

        <div className="flex flex-col items-center flex-1 justify-center">
            <h1 class="font-bold text-lg mb-3 sm:text-[22px] mb-3">Stats</h1>
            <div className='flex w-2/4'>
                    <StatsBox title={"Videos"} stats={stats && stats.videos}></StatsBox>
                    <StatsBox title={"Folders"} stats={stats && stats.folders}></StatsBox>

            </div>
            </div>
        </div>
            <EditInfo open={open} info={modalType} email={data && data.email} username={data && data.username} handleClose={handleClose} handleOpen={handleOpen}>

            </EditInfo>
        </main>
      
       
            
    </div>
  )
}
