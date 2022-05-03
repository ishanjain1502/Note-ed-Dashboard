/*global chrome*/
import axios from 'axios';
import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import icon from '../../assets/icon.png';
// import { LockClosedIcon } from '@heroicons/react/solid'

// globle variables 
const extensionId = 'mddgplepaeofegeediconadgglhkokkg'

export default function Login(props) {

    const url = 'https://backend-1.prathameshdukare.repl.co';

    const navigate = useNavigate();
    const {setloggedInStatus} = props;
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const notify = () => toast("Welcome back 😇 "); 

    const sendLoggedinInfo = ({ extensionId, authInfo})=>{
        chrome.runtime.sendMessage(extensionId, { authInfo }, response => {
            if (!response.success) {
              console.log('error sending message', response);
              return response;
            }
            console.log(response)
          });
    }
    const onEmailChange = (e)=>{
        setEmail(e.target.value);
    }
    const onPassChange = (e)=>{
        setPassword(e.target.value);
    }
    const toHome = () => {
        navigate('/')
    }
    const loginUser = (e) => {
        e.preventDefault();
        console.log("logging in...");
        axios.post(`${url}/api/v1/signin`, {
            "email":email,
            "password":password
        }).then(data => data.data)
        .then(data =>{
            console.log(data);
            localStorage.setItem('token', data.token);
            console.log(data.data);
            localStorage.setItem("username",data.data.username);
            localStorage.setItem('email',data.data.email);
            setloggedInStatus(true);

            //sending loggedin info to extension
            console.log("sending msg to extension");
            let authObj =  JSON.stringify({"loggedInStatus":true,authToken:data.token});
            sendLoggedinInfo({ extensionId: extensionId, authInfo: authObj})

            // redirect to dashboard
            navigate('/dashboard');
        })
    }
    useEffect(()=>{
        document.title = "Login to Noted"
      },[])
    return (
        <div>
            {/* <nav>
                <div style={{
                    "fontSize": "50px",
                    "fontWeight": "700",
                    "marginLeft": "9vw",
                    "marginTop": "0rem",
                    "paddingTop": "1rem",
                    "marginBottom": "-2rem",
                    "color": "#0091ad",
                }}><a href="/">Noted</a></div>
            </nav> */}
            <nav className="p-5 flex justify-between bg-white absolute top-0 -left-1 w-full mb-3">
            {/* <MenuIcon/> */}
            <div className="relative left-16 flex">
                <span className="text-black flex content-center max-h-5 mb-2">
                <span>
                    <img src={icon} style={{height : '200%', marginLeft:"0rem"}}  alt='logo' />
                </span>
                </span>
                <div className="relative right-20 text-5xl text-custom font-bold">
                <button onClick={toHome}>Noted</button>
                </div>
            </div>
            </nav>
            <div className='login-page'>

                <div className="min-h-full flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-md w-full space-y-8">
                        <div>
                            <h2 className="font-custom mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to Noted</h2>

                        </div>
                        <form className="mt-8 space-y-6" action="#" method="POST">
                            <input type="hidden" name="remember" defaultValue="true" />
                            <div className="rounded-md shadow-sm -space-y-px">
                                <div>
                                    <label htmlFor="email-address" className="sr-only">
                                        Email address
                                    </label>
                                    <input
                                        id="email-address"
                                        name="email"
                                        value={email}
                                        onChange={onEmailChange}
                                        type="email"
                                        autoComplete="email"
                                        required
                                        className="font-custom appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-custom focus:border-custom focus:z-10 sm:text-sm"
                                        placeholder="Email address"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="password" className="sr-only">
                                        Password
                                    </label>
                                    <input
                                        id="password"
                                        name="password"
                                        value={password}
                                        onChange={onPassChange}
                                        type="password"
                                        autoComplete="current-password"
                                        required
                                        className="font-custom appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-custom focus:border-custom focus:z-10 sm:text-sm"
                                        placeholder="Password"
                                    />
                                </div>
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <input
                                        id="remember-me"
                                        name="remember-me"
                                        type="checkbox"
                                        className="h-4 w-4 text-custom focus:ring-custom border-gray-300 rounded"
                                    />
                                    <label htmlFor="remember-me" className="font-custom ml-2 block text-sm text-gray-900">
                                        Remember me
                                    </label>
                                </div>

                                
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    onClick={loginUser}
                                    className="font-custom group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-custom hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-custom"
                                >
                                    <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                        {/* <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" /> */}
                                    </span>
                                    Sign in
                                </button>
                            </div>
                            <div className="font-custom text-center text-grey-dark mt-6">
                                Don't have an account?
                                <a className="font-custom border-b-4 border-blue text-underline px-2 text-blue-700 font-bold" href="../register/">
                                    Register
                                </a>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    )
}
