import React from 'react';
import './styles.css';
import { useNavigate } from 'react-router-dom';

export default function HomePage() {

  let navigate = useNavigate();
  const toLogin = () => {
    navigate('/login')
  }

  // importScript("gradient.js");
  return (
    <>
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

      <div className="flex">
        <p className='font-serif text-7xl'>Ed</p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
        <div className='h-16' >
          <img src="https://img.icons8.com/color/96/000000/pencil--v1.png"/>
        </div>
      </div>
    </div>
    <br/>
    
    <div className='loginbtn font-serif text-2xl'>
      <button onClick={toLogin}>Resume your Note Making</button>
    </div>

    </>

  )
}
