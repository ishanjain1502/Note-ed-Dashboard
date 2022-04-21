import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './HomeHeader';
import './styles.css';

export default function HomePage() {

  let navigate = useNavigate();
  const toLogin = () => {
    navigate('/login')
  }
  const toRegister = () => {
    navigate('/register')
  }

  // importScript("gradient.js");
  return (
    <div className=''>
    
    <Header/>
     <div id="stripes">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
    <div className='card' >
      <h1 className='font-serif text-7xl'>Note</h1>
      <br/>

      <div className="flex shadow-xl">
        <p className='font-serif text-7xl'>Ed</p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
        <div className='h-16' >
          {/* <img src="https://img.icons8.com/color/96/000000/pencil--v1.png"/> */}
        </div>
      </div>
    </div>
    <br/>
    
    {/* <div className='loginbtn font-serif text-2xl'> /*}
      {/* <button onClick={toLogin}>Resume your Note Making</button> */}
    {/* </div> */} 
    <div className='flex justify-center' >
      <button onClick={toRegister} className='  p-3 ' >Start your Journey with us</button>
      {/* <button onClick={toLogin} >Login to Dashboard</button>  */} 
    </div>
    </div>

  )
}
