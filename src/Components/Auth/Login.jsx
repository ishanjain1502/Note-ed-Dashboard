/*global chrome*/
import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { LockClosedIcon } from '@heroicons/react/solid'

// globle variables 
const extensionId = 'jklnlkhjnomickibcdjofabgbhadpkfm'

export default function Login(props) {
    const navigate = useNavigate();
    const {loggedInStatus,setloggedInStatus} = props;
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

    const loginUser = (e) => {
        e.preventDefault();
        console.log("logging in...");
        axios.post(`http://localhost:8000/api/v1/signin`, {
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

    return (
        <div className='login-page'>

            <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">
                    <div>
                        <img
                            className="mx-auto h-12 w-auto"
                            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                            alt="Workflow"
                        />
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to Note-Ed</h2>

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
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
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
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
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
                                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                                />
                                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                    Remember me
                                </label>
                            </div>

                            <div className="text-sm">
                                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                    Forgot your password?
                                </a>
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                onClick={loginUser}
                                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                    {/* <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" /> */}
                                </span>
                                Sign in
                            </button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}
