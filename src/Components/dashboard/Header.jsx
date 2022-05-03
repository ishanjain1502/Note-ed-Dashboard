/*global chrome*/
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { Button } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavItem from './NavItem';


export default function Header() {
    const navigate = useNavigate();

    const sendLoggedOutInfo = ({ extensionId, authInfo})=>{
        chrome.runtime.sendMessage(extensionId, { authInfo }, response => {
            if (!response.success) {
              console.log('error sending message', response);
              return response;
            }
            console.log(response)
          });
    }

    const logMeOut = ()=>{
        console.log("loggging out");

        // sending logged out info to extension
        let authObj =  JSON.stringify({"loggedInStatus":false,"authToken":null});
        sendLoggedOutInfo({ extensionId: 'mddgplepaeofegeediconadgglhkokkg', authInfo: authObj})
        localStorage.removeItem('token');
        // setloggedInStatus(false); 

        // redirect to login
        navigate('/login');
    }

  return (
    <div className='flex pt-4 bg-indigo-200 h-24'>
        <div className=' flex items-center basis-1/4'>
            <h1 className='main-heading text-3xl text-indigo-600 ml-24'>Note-ed</h1>
        </div>
        <div className='text-gray-500 text-base font-semibold text-base basis-1/2 flex items-center justify-center'>
            <NavItem icon={<DashboardIcon/>} title={"Dashboard"} link='\dashboard'></NavItem>
            <NavItem icon={<AccountCircleIcon/>} title={"Profile"} link='\profile'></NavItem>
            {/* <a href="/dashboard" className='flex flex-col items-center hover:text-blue-900'>
                <div className='flex justify-center w-32 '>
                 <DashboardIcon />
                </div>
                <p className=' flex justify-center items-center rounded w-32  h-8  decoration-4 hover:text-blue-900'>Dashboard</p>
            </a> */}
            
        </div>
        <div className='flex justify-center items-center  basis-1/4'>
        <Button onClick={logMeOut} style={{'background':'#4f46e5'}} variant="contained" className='w-32 h-10  logout'>Logout</Button>

            {/* <div className='flex font-medium w-28 h-10 rounded justify-center content-center border-4 border-indigo-700 text-blue-700'>Logout</div> */}
        </div>

    </div>
  )
}
