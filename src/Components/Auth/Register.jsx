import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HomeHeader from '../home/HomeHeader';

export default function Register() {

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

    return (
        <>
        <HomeHeader/>
        <div>
            <div class="bg-grey-lighter min-h-screen flex flex-col">
                <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                    <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full shadow-slate-700 ">
                        <h1 class="mb-8 text-3xl text-center">Sign up</h1>
                        <input
                            type="text"
                            class="block border border-grey-light w-full p-3 rounded mb-4"
                            name="username"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="User Name" />

                        <input
                            type="text"
                            class="block border border-grey-light w-full p-3 rounded mb-4"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email" />

                        <input
                            type="password"
                            class="block border border-grey-light w-full p-3 rounded mb-4"
                            name="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} />
                        <input
                            type="password"
                            class="block border border-grey-light w-full p-3 rounded mb-4"
                            name="confirm_password"
                            placeholder="Confirm Password"
                            value={comfirm}
                            onChange={(e) => setComfirm(e.target.value)} />

                        <button
                            type="submit"
                            class="w-full text-center py-3 rounded bg-green text-white bg-blue-600 hover:bg-blue-500 focus:outline-none my-1"
                            value="Register"
                            onClick={registerUser}
                        >Create Account</button>

                        <div class="text-center text-sm text-grey-dark mt-4">
                            By signing up, you agree to the
                            <a class="no-underline border-b border-grey-dark text-grey-dark" href="#">
                                Terms of Service
                            </a> and
                            <a class="no-underline border-b border-grey-dark text-grey-dark" href="#">
                                Privacy Policy
                            </a>
                        </div>
                    </div>

                    <div class="text-grey-dark mt-6">
                        Already have an account?
                        <a class="no-underline border-b border-blue text-blue" href="../login/">
                            Log in
                        </a>.
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
