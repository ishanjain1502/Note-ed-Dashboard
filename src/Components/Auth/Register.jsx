import axios from 'axios';
import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Register() {

    const notify = () => toast("Welcome Aboard ! 😎 ");  
    const [email, setEmail] = useState("");
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [comfirm, setComfirm] = useState("")
    const navigate = useNavigate();

    const registerUser = async(e) => {
        e.preventDefault()
        console.log("Into signUp zone");
        if(password != comfirm){
            console.log("FAILED");
            return;
        }
        axios.post('https://Backend-1.prathameshdukare.repl.co/api/v1/signup', {
            "username" : name,
            "email" : email,
            "password" : password
        }).then((res)=> res.data)
        .then(res => {
            
            console.log(res);
            if(res.message === "user created successfully"){
                
                localStorage.setItem('token_on_signup' , res.token)
                navigate('/login')
            }

        })
        .catch((err) => {
            console.log(err);
        })
    }
    useEffect(()=>{
        document.title = "Register to Noted"
      },[])
    return (
        <div>
            <nav>
                <div style={{
                    "fontSize": "50px",
                    "fontWeight": "700",
                    "marginLeft": "9vw",
                    "marginTop": "0rem",
                    "paddingTop": "1rem",
                    "marginBottom": "-2rem",
                    "color": "#0091ad",
                }}><a href="/">Noted</a></div>
            </nav>
            <div className='register-page'>

                <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-md w-full space-y-8">
                        <div>
                            <h2 className="font-custom mt-6 text-center text-3xl font-extrabold text-gray-900">Register on Noted</h2>

                        </div>
                        <form className="mt-8 space-y-6" action="#" method="POST">
                            <input type="hidden" name="remember" defaultValue="true" />
                            <div className="rounded-md shadow-sm -space-y-px">
                            <input
                                type="text"
                                class="font-custom appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-custom focus:border-custom focus:z-10 sm:text-sm"
                                name="username"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="User Name" />

                            <input
                                type="text"
                                class="font-custom appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-none focus:outline-none focus:ring-custom focus:border-custom focus:z-10 sm:text-sm"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Email" />

                            <input
                                type="password"
                                class="font-custom appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-none focus:outline-none focus:ring-custom focus:border-custom focus:z-10 sm:text-sm"
                                name="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} />
                            <input
                                type="password"
                                class="font-custom appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-custom focus:border-custom focus:z-10 sm:text-sm"
                                name="confirm_password"
                                placeholder="Confirm Password"
                                value={comfirm}
                                onChange={(e) => setComfirm(e.target.value)} />
                                    
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    onClick={registerUser}
                                    className="font-custom group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-custom hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-custom"
                                >
                                    <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                        {/* <LockClosedIcon className="h-5 w-5 text-custom group-hover:text-indigo-400" aria-hidden="true" /> */}
                                    </span>
                                    Register
                                </button>
                            </div>
                            <div class="font-custom text-center text-grey-dark mt-6">
                                Already have an account?
                                <a class="font-custom border-b-4 border-blue text-underline" href="../login/">
                                    Log in
                                </a>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    )
}
